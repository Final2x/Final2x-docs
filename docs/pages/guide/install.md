# Install
Download the latest installation package from the [Github Release](https://github.com/Tohrusky/Final2x/releases) page, and choose the version that corresponds to your platform.

::: warning
Versions prior to macOS 12 and some Linux distributions may not work properly. Please refer to the [Build](/pages/build/) Guide to build it yourself.

In addition, Windows versions prior to Windows 10 are not supported.
:::

::: tip 
The "unpacked" version is a portable version.
:::

## Windows 
Both x64 and arm64 architectures are available. Please download the version that matches your architecture, usually x64. It is recommended to download the setup version.

## MacOS
Both x64 and arm64 architectures are available. For Apple Silicon Mac, please download the arm64 version. It is recommended to download the dmg version.

::: warning
The arm64 version of Final2x-core is built locally on the latest macOS, not using Github Action, which may cause some incompatibilities. 
Additionally, for security reasons, it is recommended to build it yourself.
:::

After installation, run the following two commands in the terminal to allow the application to run. Due to Apple's security checks, the first use may be very slow.

```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```

## Linux
The x64 architecture is available. The linux-pip version requires configuring the python3.6+ environment and installing the required libraries. The pip script needs to be added to the PATH environment variable.
```bash
pip install Final2x-core
apt install -y libomp5 xdg-utils # use your package manager
```
After installation, check if the configuration is successful in the terminal.
```bash
Final2x-core --help
```

#### Deb/Ubuntu
If you encounter library compatibility issues, consider downloading the ubuntu-AppImage version directly.

#### Arch/Manjaro
::: warning
This is a community-maintained package.
:::
```bash
sudo pacman -S final2x-bin
```

#### Other Distributions
Try using the linux-pip version or build it yourself.
