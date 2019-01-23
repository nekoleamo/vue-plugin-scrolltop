<template>
  <div
    v-if="isShow"
    id="go-top"
    class="iconfont icon-arrowup"
    @click="goTop"
  />
</template>

<script>
import '../../../static/iconfont/iconfont.css'
export default {
  name: 'ScrollTop',
  props: {
    step: {
      type: Number,
      default: 100
    },
    scroll: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      isShow: false,
      requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    }
  },
  created () {
    const $this = this

    window.onscroll = function () {
      if (document.documentElement.scrollTop + document.body.scrollTop > $this.scroll) {
        $this.isShow = true
      } else {
        $this.isShow = false
      }
    }
  },
  methods: {
    goTop () {
      const $this = this
      let timer = setInterval(function () {
        if (document.body.scrollTop) {
          document.body.scrollTop -= $this.step
          if (document.body.scrollTop <= 0) {
            document.body.scrollTop = 0
            clearInterval(timer)
          }
        } else {
          document.documentElement.scrollTop -= $this.step
          if (document.documentElement.scrollTop <= 0) {
            document.documentElement.scrollTop = 0
            clearInterval(timer)
          }
        }
      }, 23)
    }
  }
}
</script>

<style scoped>
#go-top {
  position: fixed;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  border: 2px solid #333;
  color: #333;
  font-size: 24px;
  border-radius: 5px;
  transition: all .5s;
}
#go-top:hover {
    border-radius: 50%;
    color: #fff;
    background: #333;
  }
</style>
