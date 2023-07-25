<template>
  <div class="WoodenFish" font-mono>
    <div class="WoodenFish_box">

      <div class="mid">
        <div class="mid_title">功德量：{{ merit }}</div>
        <div class="Fish" @click="knock()">
          <img src="/fish.png" @click="play()" id="a" :class="fish_class" />
        </div>
        <div class="mid_title">
          自动积功德
          <el-switch v-model="autoMerit" size="large" @change="changSwitch()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle, useStorage } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import muyu from '../assets/muyu.wav'
import { ref } from 'vue'

// 功德
let merit = ref<number>(0)
useStorage('merit', merit)
const { play } = useSound(muyu)

// 敲木鱼
function knock() {
  merit.value += 1
}

//自动积功德
let autoMerit = ref(false)

//功德计时器
let Merit_Interval: any
function changSwitch() {
  if (autoMerit.value) {
    go_auto()
  } else {
    clearInterval(Merit_Interval)
  }
}
changSwitch()

let fish_class = ref('')
function go_auto() {
  Merit_Interval = setInterval(() => {
    fish_class.value = 'big_fish'
    let xxg: any = document.getElementById('a')
    xxg.click()
    setTimeout(() => {
      fish_class.value = ''
    }, 200)
  }, 1000)
}
</script>

<style lang="scss" scoped>
.WoodenFish {
  font-family: monospace;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  background-color: rgb(0, 0, 0);
  .WoodenFish_box {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .top {
    width: 100%;
    height: 60px;
    display: flex;
    position: absolute;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
  }
  .mid {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .mid_title {
      margin: auto;
      font-size: 30px;
    }
    .Fish {
      width: 80%;
      box-sizing: border-box;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img {
        width: 60vmin;
        cursor: pointer;
        transition: all 0.1s;
        &:active {
          transform: scale(1.1);
        }
      }
      .add1 {
        position: absolute;
        top: 0;
        font-size: 30px;
        z-index: 100;
      }
      .big_fish {
        transform: scale(1.1);
      }
    }
  }
}
</style>
