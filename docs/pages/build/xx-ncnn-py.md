# xx-ncnn-py
The libraries required, including **xx-ncnn-py**, have a similar building process. Here, I will only describe the building process for **realcugan-ncnn-py**.
For macOS 11, you can use Github Action for building, but it may not be compatible with macOS 10. Generally, older versions of macOS x64 cannot be upgraded, so the cross-compiling process is skipped here. If you want to learn more, you can refer to the original build script.

## Local Build
For older versions of macOS and certain Linux distributions.

First, download the [Vulkan SDK](https://github.com/Tohrusky/realcugan-ncnn-vulkan-build-macOS/releases) and install it. This is my backup version.

::: tip
It is recommended to choose an older version, such as 1.2.162.1, for the Vulkan SDK.

Please ensure that your environment has Python 3.8+, Clang/GCC and CMake compilation toolchains.
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
# build python wheel
cd ../../
pip install --upgrade pip chardet
pip install twine wheel setuptools
pip install -r requirements.txt
cp src/build-x86_64/*.so realcugan_ncnn_py
cp src/realcugan_ncnn_vulkan.py realcugan_ncnn_py
cp -r models realcugan_ncnn_py
python setup.py bdist_wheel
```
With these steps, the building process is complete, and the wheel file can be found in the dist directory. 
```bash
pip install dist/*.whl
```
to install it.


## Github Action
[Here is a reference for a completed version of the build.](https://github.com/SRVFI-Raws/realcugan-ncnn-py-macos-11/actions/workflows/Build.yml)

First, fork the repository and enable Github Action. Delete the original build script and add a build script as shown below. Click to start the build:

::: tip
If you don't need multiple versions of Python libraries, you can keep only the versions corresponding to your environment. This way, you can save build time.
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
