# 使用
安装完成，打开软件时，可以看到下面的组件。

::: warning
不支持 **Vulkan** 的显卡，请使用 **CPU** 模式，参考如下：

Nvidia https://developer.nvidia.com/vulkan-driver

AMD https://www.amd.com/en/technologies/vulkan
:::

### 语言切换
点击下面的按钮，可以切换语言。
<TranslationButton />

### 上传图片
点击或拖拽图片或文件夹到这个区域，可以上传待处理的图片。
<UploadDraggerZone />

### 开始处理
图片上传完成后，点击"开始"，即可以处理图片；点击"终止"，可以终止处理；点击"日志"，可以查看日志。完成处理后，会自动打开输出的文件夹。
<MyProgress />

### 路由导航
点击即可切换到设置界面，再次点击可以切换回来。
<NavigationButton />

### 悬浮提示
把鼠标放在这些按钮上时，会显示一个悬浮提示框。点击 **Output Folder** 设置输出路径。**Custom Scale** 是一个浮点数，用于调整输出的大小。**Custom Scale** 为 0 时，输出的大小与 **Model Scale** 大小相同。
<PopoverButton />

### 黑暗模式
点击下面的按钮，可以切换成黑暗模式，再次点击可以切换回来。
<DarkModeButton />

### 外部链接
点击下面这些按钮，可以打开外部链接。
<ExternalLinkButton />