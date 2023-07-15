# Final2x
If you are not so lucky, you may need to build Final2x on your own. For users using PyInstaller, you need to manually place the Final2x-core into the /resources folder.

::: tip
Node.js 16.x or above, and it is recommended to use the latest version.
:::

```bash
# clone repo
git clone https://github.com/Tohrusky/Final2x
cp -r Final2x-core Final2x/resources # for PyInstaller
cd Final2x-core
# build
npm install
npm run build:linux-x64 # for linux x64
npm run build:mac-x64 # for mac x64
```
The compiled installation package can be found in the Final2x/dist directory. Choose the appropriate installation method according to your needs.