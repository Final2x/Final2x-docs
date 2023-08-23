# Usage
After installation, when you open the software, you will see the following components.

::: warning
Graphics cards that do not support **Vulkan** should use **CPU** mode, as follows:

Nvidia https://developer.nvidia.com/vulkan-driver

AMD https://www.amd.com/en/technologies/vulkan
:::

### Language Switch
Click the button below to switch the language.
<TranslationButton />

### Upload Image
Click or drag and drop images or folders into this area to upload images for processing.
<UploadDraggerZone />

### Start Processing
After the image upload is complete, click "START" to process the image. Click "TERMINATE" to stop the processing. Click "LOG" to view the logs. After the processing is complete, the output folder will be automatically opened.
<MyProgress />

### Navigation
Click to switch to the settings interface. Click again to switch back.
<NavigationButton />

### Tooltip
When you hover over these buttons, a tooltip will be displayed. Click **Output Folder** to set the output path. **Custom Scale** is a floating-point number used to adjust the output size. When **Custom Scale** is set to 0, the output size will be the same as the **Model Scale**.
<PopoverButton />

### Dark Mode
Click the button below to switch to dark mode. Click again to switch back.
<DarkModeButton />

### External Links
Click the buttons below to open external links.
<ExternalLinkButton />