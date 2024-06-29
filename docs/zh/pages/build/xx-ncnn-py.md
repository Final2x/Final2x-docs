# xx-ncnn-py
目前所需要的 **xx-ncnn-py** 这几个库，构建过程基本一致，所以这里只介绍 **realcugan-ncnn-py** 的构建过程。
MacOS 11 可以使用 Github Action 构建，但 MacOS 10 可能不兼容。一般来说都是 MacOS x64 老版本无法升级系统，所以这里略过交叉编译的过程，想了解可以参考原来的构建脚本。

## 本地构建
供 MacOS 旧版本，以及一些 Linux 发行版参考。

首先下载 [Vulkan SDK](https://github.com/Tohrusky/realcugan-ncnn-vulkan-build-macOS/releases) 并安装，这里是我的备份版本。

::: tip
Vulkan SDK 建议选择旧版本 1.2.162.1。

请确保环境已经有 Python 3.8+, Clang/GCC 和 CMake 编译工具链。
:::

```bash
# clone repo
git clone https://github.com/Tohrusky/realcugan-ncnn-py
cd realcugan-ncnn-py
git submodule update --init --recursive
# your vulkan sdk path
export VULKAN_SDK=/Users/tohru/VulkanSDK/1.2.162.1/macOS 
# create build dir
cd src
mkdir build-x86_64 && cd build-x86_64
# build
cmake -DUSE_STATIC_MOLTENVK=ON -DCMAKE_OSX_ARCHITECTURES="x86_64" \
      -DVulkan_INCLUDE_DIR=/Users/tohru/VulkanSDK/1.2.162.1/MoltenVK/include \
      -DVulkan_LIBRARY=/Users/tohru/VulkanSDK/1.2.162.1/MoltenVK/MoltenVK.xcframework/macos-arm64_x86_64/libMoltenVK.a \
      ..
cmake --build . -j 8
cp src/build-x86_64/*.so src/realcugan_ncnn_py

# build python wheel
pdm install
pdm build
```
至此构建完成，wheel 文件在 dist 目录下。 
```bash
pip install dist/*.whl
```
即可安装。


## Github Action
[这里提供一份构建完成的版本供参考。](https://github.com/Final2x/realcugan-ncnn-py/blob/main/.github/workflows/CI-MacOS-Universal-Clang.yml)

fork 仓库，启用 Github Action，修改原来的构建脚本，点击即可开始构建

::: tip
如果你不需要这么多版本的 python 库，可以只保留你环境对应的版本，这样可以节省构建时间。
:::