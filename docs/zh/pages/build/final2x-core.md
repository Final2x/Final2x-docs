# Final2x-core
在安装完几个 xx-ncnn-py 库后，我们就可以开始构建 Final2x-core 了。

对于 Linux 来说，应用内可以访问环境变量，因此更推荐使用 pip 的方式来安装 Final2x-core。

但对于 MacOS，应用内无法访问环境变量，因此需要使用 PyInstaller 来打包 Final2x-core。

## PyInstaller 
```bash
# clone repo
git clone https://github.com/Tohrusky/Final2x-core
cd Final2x-core
# build
pdm install
pdm run pyinstaller
```
至此，Final2x-core 已经打包完成，你可以在 dist 文件夹中找到它。

## pip
pip script 需要添加到 PATH 环境变量中。
```bash
pip install Final2x-core
apt install -y libomp5 xdg-utils # use your package manager
```
安装完成后，在终端检查是否配置成功。
```bash
Final2x-core --help
```
至此，可以直接尝试使用官方构建的 Final2x-linux-pip 版本了。