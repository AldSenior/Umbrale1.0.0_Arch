#!/usr/bin/env bash
set -euo pipefail

UMBREL_REPO="getumbrel/umbrel"
UMBREL_PATH="$HOME/umbrel"
UMBREL_VERSION="release"

# Select AUR helper
if command -v yay &> /dev/null; then
    AUR_HELPER="yay"
elif command -v paru &> /dev/null; then
    AUR_HELPER="paru"
else
    echo "Error: yay or paru is not installed."
    exit 1
fi

# Update system
sudo pacman -Syu --noconfirm

# Install packages
sudo pacman -S --noconfirm docker docker-compose avahi nss-mdns jq rsync curl git base-devel python inetutils
$AUR_HELPER -S --needed --noconfirm fswatch yq

# Enable services
sudo systemctl enable --now docker.service avahi-daemon.service

# Get latest version
get_umbrel_version() {
    if [[ "$UMBREL_VERSION" == "release" ]]; then
        version=$(curl --silent "https://api.github.com/repos/$UMBREL_REPO/releases/latest" | jq -r ".tag_name")
        [[ "$version" == "null" ]] && {
            echo "Could not fetch latest Umbrel version" >&2
            exit 1
        }
        echo "$version"
    else
        echo "$UMBREL_VERSION"
    fi
}

# Install Umbrel
install_umbrel() {
    echo "Installing Umbrel..."
    local version=$(get_umbrel_version)
    mkdir -p "$UMBREL_PATH"
    curl -L "https://github.com/$UMBREL_REPO/archive/$version.tar.gz" | tar -xz --strip-components=1 -C "$UMBREL_PATH"
    echo "Configuring Umbrel..."
    pushd "$UMBREL_PATH"
    ./scripts/configure
    echo "Starting Umbrel..."
    ./scripts/start
    popd
}

install_umbrel
echo "✅ Umbrel installed to $UMBREL_PATH"
