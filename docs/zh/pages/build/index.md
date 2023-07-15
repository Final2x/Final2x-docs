# 构建指南
对于使用 MacOS 12 以下，以及一些 Linux 发行版的用户，可能无法直接使用，这时候需要自行构建。
对于 MacOS 用户，推荐使用 Github Action 在线构建部分需要的库（xx-ncnn-py）。
本构建指南以 MacOS 为例，Linux 用户请参考 Github Action 的构建脚本（相对来说比较简单）。

目前我们需要构建的内容如下，请按照顺序进行构建：

- [realcugan-ncnn-py](https://github.com/Tohrusky/realcugan-ncnn-py) - This project provided the Python Binding for
  realcugan-ncnn-vulkan with PyBind11
- [realesrgan-ncnn-py](https://github.com/Tohrusky/realesrgan-ncnn-py) - This project provided the Python Binding for
  realesrgan-ncnn-vulkan with PyBind11
- [waifu2x-ncnn-py](https://github.com/Tohrusky/waifu2x-ncnn-py) - This project provided the Python Binding for
  waifu2x-ncnn-vulkan with PyBind11
- [srmd-ncnn-py](https://github.com/Tohrusky/srmd-ncnn-py) - This project provided the Python Binding for
  srmd-ncnn-vulkan with PyBind11
- [Final2x-core](https://github.com/Tohrusky/Final2x-core) - This project provided the core of the Final2x algorithm using the ncnn and Vulkan libraries.
- [Final2x](https://github.com/Tohrusky/Final2x) - 2^x Image Super-Resolution

