<script lang="ts" setup>
import { PaperPlaneSharp, BookOutline } from '@vicons/ionicons5'
import { MoneyCollectOutlined } from '@vicons/antd'

class openWebsite {
  static async Final2xDocs(): Promise<void> {
    const githubLink = 'https://final2x.tohru.top'
    await window.open(githubLink, '_blank')
  }

  static async TelegramGroup(): Promise<void> {
    const telegramLink = 'https://t.me/+hQMtDxG9bqNiNjRh'
    await window.open(telegramLink, '_blank')
  }

  static async Afdian(): Promise<void> {
    const afdianLink = 'https://afdian.net/a/tohrusky'
    await window.open(afdianLink, '_blank')
  }
}
</script>

<template>
  <div>
    <n-space>
      <n-button style="font-size: 36px" text @click="openWebsite.Afdian">
        <n-icon>
          <money-collect-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="openWebsite.TelegramGroup">
        <n-icon>
          <paper-plane-sharp />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="openWebsite.Final2xDocs">
        <n-icon>
          <book-outline />
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style scoped />
