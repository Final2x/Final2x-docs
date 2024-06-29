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
cp src/build-x86_64/*.so src/realcugan_ncnn_py

# build python wheel
pdm install
pdm build
```
With these steps, the building process is complete, and the wheel file can be found in the dist directory. 
```bash
pip install dist/*.whl
```
to install it.


## Github Action
[Here is a reference for a completed version of the build.](https://github.com/Final2x/realcugan-ncnn-py/blob/main/.github/workflows/CI-MacOS-Universal-Clang.yml)

Fork the repository and enable Github Action, edit the original build script and click to start the build

::: tip
If you don't need multiple versions of Python libraries, you can keep only the versions corresponding to your environment. This way, you can save build time.
:::
