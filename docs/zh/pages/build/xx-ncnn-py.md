# xx-ncnn-py
目前所需要的 **xx-ncnn-py** 这几个库，构建过程基本一致，所以这里只介绍 **realcugan-ncnn-py** 的构建过程。
MacOS 11 可以使用 Github Action 构建，但 MacOS 10 可能不兼容。一般来说都是 MacOS x64 老版本无法升级系统，所以这里略过交叉编译的过程，想了解可以参考原来的构建脚本。

## 本地构建
供 MacOS 旧版本，以及一些 Linux 发行版参考。

#### Vulkan SDK
首先下载 [Vulkan SDK](https://github.com/Tohrusky/realcugan-ncnn-vulkan-build-macOS/releases) 并安装，这里是我的备份版本。

::: tip
Vulkan SDK 建议选择旧版本 1.2.162.1。

请确保环境已经有 Python 3.6+, Clang/GCC 和 CMake 编译工具链。
:::

```bash
# clone repo
git clone https://github.com/Tohrusky/realcugan-ncnn-py
cd realcugan-ncnn-py
git submodule update --init --recursive
# your vulkan sdk path
export VULKAN_SDK=/Users/tohru/VulkanSDK/1.2.162.1/macOS 
# create build dir
mkdir build-x86_64 && cd build-x86_64
# build
cmake -DUSE_STATIC_MOLTENVK=ON -DCMAKE_OSX_ARCHITECTURES="x86_64" \
      -DVulkan_INCLUDE_DIR=/Users/tohru/VulkanSDK/1.2.162.1/MoltenVK/include \
      -DVulkan_LIBRARY=/Users/tohru/VulkanSDK/1.2.162.1/MoltenVK/MoltenVK.xcframework/macos-arm64_x86_64/libMoltenVK.a \
      ..
cmake --build . -j 8
# build python wheel
pip install --upgrade pip chardet
pip install twine wheel setuptools
pip install -r requirements.txt
cp src/build-x86_64/*.so realcugan_ncnn_py
cp src/realcugan_ncnn_vulkan.py realcugan_ncnn_py
cp -r models realcugan_ncnn_py
python setup.py bdist_wheel
```
至此构建完成，wheel 文件在 dist 目录下。 
```bash
pip install dist/*.whl
```
即可安装。


## Github Action
[这里提供一份构建完成的版本供参考。](https://github.com/SRVFI-Raws/realcugan-ncnn-py-macos-11/actions/workflows/Build.yml)

首先 fork 仓库，启用 Github Action，删除原来的构建脚本。添加一个如下所示的构建脚本，点击即可开始构建：

::: tip
如果你不需要这么多版本的 python 库，可以只保留你环境对应的版本，这样可以节省构建时间。
:::

```yaml
name: Build-macos-11

on:
  workflow_dispatch:

env:
  DEVELOPER_DIR: /Applications/Xcode_13.2.1.app/Contents/Developer

jobs:
  macos:
    strategy:
      matrix:
        python-version: ["3.6", "3.7", "3.8", "3.9", "3.10", "3.11"]

    runs-on: macos-11
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: 'recursive'

      - uses: maxim-lobanov/setup-xcode@v1
        with:
          xcode-version: '13.2.1'

      - uses: actions/setup-python@v4
        with:
          python-version: ${{ matrix.python-version }}
          architecture: x64

      - name: Check Python version
        run: |
          python --version

      - name: cache-vulkansdk
        id: cache-vulkansdk
        uses: actions/cache@v3.2.4
        with:
          path: "src/vulkansdk-macos-1.2.162.1"
          key: vulkansdk-macos-1.2.162.1

      - name: vulkansdk
        if: steps.cache-vulkansdk.outputs.cache-hit != 'true'
        run: |
          cd src
          wget https://github.com/Tohrusky/realcugan-ncnn-vulkan-build-macOS/releases/download/v0.0.1/vulkansdk-macos-1.2.162.1.dmg -O vulkansdk-macos-1.2.162.1.dmg
          hdiutil attach vulkansdk-macos-1.2.162.1.dmg
          cp -r /Volumes/vulkansdk-macos-1.2.162.1 .
          rm -rf vulkansdk-macos-1.2.162.1/Applications
          find vulkansdk-macos-1.2.162.1 -type f | grep -v -E 'vulkan|glslang|MoltenVK' | xargs rm
          hdiutil detach /Volumes/vulkansdk-macos-1.2.162.1


      - name: build-x86_64
        run: |
          cd src
          export VULKAN_SDK=`pwd`/vulkansdk-macos-1.2.162.1/macOS
          mkdir build-x86_64 && cd build-x86_64
          cmake -DUSE_STATIC_MOLTENVK=ON -DCMAKE_OSX_ARCHITECTURES="x86_64" \
              -DCMAKE_CROSSCOMPILING=ON -DCMAKE_SYSTEM_PROCESSOR=x86_64 \
              -DVulkan_INCLUDE_DIR=`pwd`/../vulkansdk-macos-1.2.162.1/MoltenVK/include \
              -DVulkan_LIBRARY=`pwd`/../vulkansdk-macos-1.2.162.1/MoltenVK/MoltenVK.xcframework/macos-arm64_x86_64/libMoltenVK.a \
              ..
          cmake --build . -j 4

      - name: build wheel
        run: |
          pip install --upgrade pip chardet
          pip install twine wheel setuptools
          pip install -r requirements.txt
          cp src/build-x86_64/*.so realcugan_ncnn_py
          cp src/realcugan_ncnn_vulkan.py realcugan_ncnn_py
          cp -r models realcugan_ncnn_py
          python setup.py bdist_wheel

      - name: upload
        uses: actions/upload-artifact@v3
        with:
          name: realcugan-ncnn-py-macos-python${{ matrix.python-version }}
          path: dist
```
