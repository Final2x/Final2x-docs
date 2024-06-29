# Final2x-core
After installing the xx-ncnn-py libraries, we can proceed to build Final2x-core.

For Linux, it is recommended to use the pip installation method since the environment variables can be accessed within the application.

However, for macOS, the application cannot access environment variables, so we need to use PyInstaller to build Final2x-core.

## PyInstaller 
```bash
# clone repo
git clone https://github.com/Tohrusky/Final2x-core
cd Final2x-core
# build
pdm install
pdm run pyinstaller
```
With these steps, Final2x-core is built successfully, you can find it in the dist folder.

## pip
The pip script needs to be added to the PATH environment variable.
```bash
pip install Final2x-core
apt install -y libomp5 xdg-utils # use your package manager
```
After installation, check if the configuration is successful in the terminal.
```bash
Final2x-core --help
```
With this, you can directly try using the officially built Final2x-linux-pip version.