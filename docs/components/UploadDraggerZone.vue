<script lang="ts" setup>
import { FileImageOutlined } from '@vicons/antd'
import { onMounted, ref } from 'vue'

const text = ref('Click or drag and drop images or folders here to upload')

onMounted(() => {
  setTimeout(() => {
    text.value = getTextByLang()
  }, 0) // 延迟执行
})

function getTextByLang(): string {
  const lang = document.documentElement.lang
  console.log(lang)
  if (lang === 'zh') {
    return '点击或拖拽图片或文件夹到此处上传'
  } else {
    return 'Click or drag and drop images or folders here to upload'
  }
}
</script>

<template>
  <div id="file_drag" class="for_file_drag">
    <n-upload multiple directory-dnd class="n-upload">
      <n-upload-dragger class="file-drag-zone">
        <div class="file-drag-zone-logo-text">
          <div style="margin-bottom: 12px">
            <n-icon size="48" depth="3.0">
              <file-image-outlined />
            </n-icon>
          </div>
          <n-text style="font-size: 16px"> {{ text }}</n-text>
        </div>
      </n-upload-dragger>
    </n-upload>
  </div>
</template>

<style lang="scss" scoped>
.file-drag-zone {
  background-color: transparent;
}

.file-drag-zone-logo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
