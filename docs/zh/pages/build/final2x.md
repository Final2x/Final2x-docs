# Final2x
你可能还需要自行构建 Final2x。对于 PyInstaller 打包的用户，需要自行将打包好的 Final2x-core 放入 /resources 文件夹下。

::: tip
需要 Node.js 16.x 及以上版本，推荐使用最新版本。
:::

```bash
# clone repo
git clone https://github.com/Tohrusky/Final2x
cd Final2x-core
# build
pnpm install
pnpm run build:linux-x64 # for linux x64
pnpm run build:mac-x64 # for mac x64
```
编译后的安装包位于 Final2x/dist 目录下，自行选择合适的安装方式。