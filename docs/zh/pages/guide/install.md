# 安装
在 [Github Release](https://github.com/Tohrusky/Final2x/releases) 页面下载最新的安装包，选择对应平台的版本。

::: warning
MacOS 12 以下，以及一些 Linux 发行版可能无法正常运行。请参考 [构建指南](/zh/pages/build/) 自行构建。

此外，Windows 10 以下不在支持范围内。
:::

::: tip 
unpacked 为便携版。
:::

## Windows 
提供 x64/arm64 架构，请下载对应架构的版本，一般为 x64。推荐下载 setup 版本。

::: tip 
此外你也可以通过包管理器来安装、更新。
:::

#### winget
```bash
winget install Final2x
```

## MacOS
提供 x64/arm64 架构，Apple Silicon Mac 请下载 arm64。推荐下载 dmg 版本。

::: warning
arm64 版本使用的 Final2x-core 是在本地最新 MacOS 构建，并非使用 Github Action，可能会有一些不兼容的情况。
此外出于信任考虑，推荐您选择自行构建。
:::

安装完成后，在终端运行下面两行命令，以允许应用程序运行。由于苹果的安全检查，第一次使用可能会非常缓慢。

```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```

## Linux
提供 x64 架构。linux-pip 版本需要自行配置 python3.8+ 环境，并安装依赖库。pip script 需要添加到 PATH 环境变量中。
```bash
pip install Final2x-core
apt install -y libomp5 xdg-utils # use your package manager
```
安装完成后，在终端检查是否配置成功。
```bash
Final2x-core --help
```

#### Deb/Ubuntu 系
遇到库不兼容时，可以考虑直接下载 ubuntu-AppImage 版本。

#### Arch/Manjaro 系
::: warning
这是一个社区维护的包。
:::
```bash
sudo pacman -S final2x-bin
```

#### 其他发行版
尝试使用 linux-pip 版本，或者自行构建。
