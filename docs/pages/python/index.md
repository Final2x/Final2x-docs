# Final2x-core
Final2x-core can also be used as a Python library (Python 3.8+). Here are a few simple examples.

```bash
pip install Final2x-core
```

#### Batch process RGBA images using the SR_queue method provided by Final2x-core:
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

#### Customize the processing using the SR class provided by Final2x-core:
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