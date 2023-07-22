# Final2x-core
Final2x-core 也可以作为一个 Python 库（Python3.8+）使用，下面是几个简单的例子。

```bash
pip install Final2x-core
```

#### 使用 Final2x-core 提供的 SR_queue 方法批量处理 RGBA 图片：
```python
import Final2x_core as Fin


def upscale(picPATH: list[str]) -> None:
    config = Fin.SRCONFIG()
    config.inputpath = picPATH  # init log percentage
    config.model = 'RealCUGAN-pro'
    config.modelnoise = -1
    # ... see README.md for more config

    Fin.SR_queue()
```

#### 使用 Final2x-core 提供的 SR 类自定义处理：
```python
import cv2
import Final2x_core as Fin


def Myupscale(picPATH: list[str]) -> None:
    config = Fin.SRCONFIG()
    config.inputpath = picPATH  # init log percentage
    config.model = 'RealCUGAN-pro'

    SR = Fin.SRFactory.getSR()
    # RGB Mode, RGBA can refer Final2x_core.SR_queue
    for i in picPATH:
        img = cv2.imread(i, cv2.IMREAD_COLOR)
        img = SR.process(img)
        cv2.imwrite('Final2x-' + i, img)
```
