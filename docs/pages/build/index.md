# Build
For users who are using macOS versions earlier than macOS 12 or certain Linux distributions, direct usage may not be possible, and manual building is required.
For macOS users, it is recommended to use Github Action to build the required libraries (xx-ncnn-py).
This building guide is based on macOS, and Linux users should refer to the build script in Github Action (which is relatively simple).

The following is the content that needs to be built. Please follow the order for building:

- [realcugan-ncnn-py](https://github.com/Tohrusky/realcugan-ncnn-py) - This project provided the Python Binding for realcugan-ncnn-vulkan with PyBind11.
- [realesrgan-ncnn-py](https://github.com/Tohrusky/realesrgan-ncnn-py) - This project provided the Python Binding for realesrgan-ncnn-vulkan with PyBind11.
- [waifu2x-ncnn-py](https://github.com/Tohrusky/waifu2x-ncnn-py) - This project provided the Python Binding for waifu2x-ncnn-vulkan with PyBind11.
- [srmd-ncnn-py](https://github.com/Tohrusky/srmd-ncnn-py) - This project provided the Python Binding for srmd-ncnn-vulkan with PyBind11.
- [Final2x-core](https://github.com/Tohrusky/Final2x-core) - This project provided the core of the Final2x algorithm using the ncnn and Vulkan libraries.
- [Final2x](https://github.com/Tohrusky/Final2x) - 2^x Image Super-Resolution.

