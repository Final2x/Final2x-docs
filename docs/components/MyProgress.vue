<script lang="ts" setup>
import { ref, onMounted, watchEffect, nextTick } from 'vue'

const ProgressPercentage = ref(0)
const showLOG = ref(false)
const CommandLOG = ref('')
const logInstRef = ref(null)

const text = ref(['START', 'TERMINATE', 'LOG'])

let timer = null

onMounted(() => {
  watchEffect(() => {
    if (CommandLOG.value) {
      nextTick(() => {
        logInstRef.value?.scrollTo({ position: 'bottom', slient: true })
      })
    }
  })

  setTimeout(() => {
    text.value = getTextByLang()
  }, 0) // 延迟执行
})

function clearTimer(): void {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function StartSR(): void {
  CommandLOG.value += 'Start!!!' + '\n'
  ProgressPercentage.value = 0
  clearTimer()
  timer = setInterval(() => {
    ProgressPercentage.value += 1
    CommandLOG.value += 'Progress: ' + String(ProgressPercentage.value) + '%' + '\n'
    if (ProgressPercentage.value >= 100) {
      clearTimer()
    }
  }, 50)
}

function TerminateSR(): void {
  ProgressPercentage.value = 0
  clearTimer()
  CommandLOG.value += 'Terminated!!!' + '\n'
}

function getTextByLang(): Array<string> {
  const lang = document.documentElement.lang
  // console.log(lang)
  if (lang === 'zh') {
    return ['开始', '终止', '日志']
  } else {
    return ['START', 'TERMINATE', 'LOG']
  }
}
</script>

<template>
  <div>
    <div class="control">
      <n-progress
        :percentage="ProgressPercentage"
        color="green"
        :height="34"
        indicator-placement="inside"
        processing
        type="line"
        rail-color="rgba(230, 230, 230, 0.5)"
      />
      <n-button round secondary strong type="success" @click="StartSR">
        {{ text[0] }}
      </n-button>

      <n-button round secondary strong type="error" @click="TerminateSR">
        {{ text[1] }}
      </n-button>

      <n-button round secondary strong type="warning" @click="showLOG = !showLOG">
        {{ text[2] }}
      </n-button>
    </div>

    <n-drawer v-model:show="showLOG" height="385" placement="top">
      <n-drawer-content :native-scrollbar="false" title="">
        <br />
        <n-card hoverable size="small" title="Log">
          <n-log ref="logInstRef" :log="CommandLOG" trim />
        </n-card>
      </n-drawer-content>
    </n-drawer>

    <n-divider class="n-divider" />
  </div>
</template>

<style lang="scss" scoped>
.control {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 40px 0 40px;
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0 5px;
  }

  > button {
    margin: 0 5px;
  }
}

.progress {
  margin-left: -30px;
  margin-top: 10px;
}

.ButtonSpace {
  margin-right: 40px;
  margin-top: 30px;
}

.n-divider {
  margin: 30px 0 0 0 !important;
}
</style>
