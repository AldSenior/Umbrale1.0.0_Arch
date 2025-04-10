import cors from "cors";
import express from "express";
import asyncHandler from "express-async-handler";
import { expressjwt } from "express-jwt";
import fse from "fs-extra";

import isUmbrelHome from "./utilities/is-umbrel-home.js";
import {
  findExternalUmbrelInstall,
  getMigrationStatus,
  migrateData,
  runPreMigrationChecks,
  unmountExternalDrives,
} from "./utilities/migration.js";

const app = express();

// 🌐 Enable CORS
app.use(cors({ origin: true, credentials: true }));

// 🔐 JWT validation
app.use(
  expressjwt({
    secret: async () => fse.readFile(`${app.get("UMBREL_ROOT")}/jwt/jwt.key`),
    algorithms: ["RS256"],
    getToken: (req) => {
      const header = req.headers?.authorization;
      if (!header) return null;

      const parts = header.split(" ");
      if (parts.length !== 2) return null;

      return parts[1];
    },
  }).unless({
    path: [
      "/", // Home
      "/migration-status", // Used by dashboard
      "/is-umbrel-home",
      "/can-migrate",
      "/migrate",
    ],
  })
);

// ✅ Test route
app.get("/", (req, res) => {
  res.json({
    message: "☂️ There's no cloud, it's just someone else's computer.",
  });
});

// ✅ Hardware check
app.get(
  "/is-umbrel-home",
  asyncHandler(async (req, res) => {
    res.json(await isUmbrelHome());
  })
);

// ✅ Pre-check migration
app.get(
  "/can-migrate",
  asyncHandler(async (req, res) => {
    const root = app.get("UMBREL_ROOT");
    const external = await findExternalUmbrelInstall();
    await runPreMigrationChecks(root, external);
    await unmountExternalDrives();
    res.json({ success: true });
  })
);

// ✅ Migration status
app.get(
  "/migration-status",
  asyncHandler(async (req, res) => {
    res.json(getMigrationStatus());
  })
);

// ✅ Run migration
app.post(
  "/migrate",
  asyncHandler(async (req, res) => {
    const root = app.get("UMBREL_ROOT");
    const external = await findExternalUmbrelInstall();
    await runPreMigrationChecks(root, external);

    res.json({ success: true });
    await migrateData(root, external);
  })
);

// 🧯 Error handling middleware
app.use((error, req, res, next) => {
  console.error("API ERROR:", error.stack || error);
  const code = error.name === "UnauthorizedError" ? 401 : 500;
  res.status(code).json({ error: error.message });
});

export default app;
