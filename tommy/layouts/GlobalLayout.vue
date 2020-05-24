<template>
  <a-locale-provider :locale="locale">
    <div id="tommy">
      <span class="donate-address">唯一指定邮箱：tommymarc@sina.com</span>
      <Curtain v-show="curtain" />
      <Header />
      <div id="main">
        <transition
          name="fade-transform"
          mode="out-in"
        >
          <ClientOnly>
            <component :is="layout" />
          </ClientOnly>
        </transition>
      </div>
      <Footer />
      <a-back-top class="back-top" />
      <ClientOnly>
        <d-music class="music-play" :myMusic = "myMusic"/>
      </ClientOnly>
      <Dark v-show="dark" />
      <div v-if="openWelcome"  class="welcomeMyWay" @click = "showMyMusic">
        <div class="welcome">
          <div>
            <p class="welcome-text">WelCome to Tommy's Blog</p>
            <p class="welcome-go" >Come on!</p>
          </div>
        </div>
      </div>

    </div>
  </a-locale-provider>
</template>

<script>
import Curtain from '@theme/components/Curtain'
import Header from '@theme/components/Header'
import Home from '@theme/components/Home'
import Posts from '@theme/components/Posts'
import Tags from '@theme/components/Tags'
import Tag from '@theme/components/Tag'
import Search from '@theme/components/Search'
import Timeline from '@theme/components/Timeline'
import Links from '@theme/components/Links'
import About from '@theme/components/About'
import Categories from '@theme/components/Categories'
import Post from '@theme/components/Post'
import Password from '@theme/components/Password'
import Footer from '@theme/components/Footer'
import Dark from '@theme/components/Dark'
import Back from '@theme/components/Back'
import dMusic from '@theme/components/dMusic'
import Page404 from '@theme/components/404'
import enGB from 'ant-design-vue/lib/locale-provider/en_GB'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'


export default {
  name: 'Tommy',
  components: { Curtain, Header, Home, Posts, Tags, Tag, Search, Timeline, Links, About, Categories, Post, Password, Footer, Dark, Back, Page404, dMusic },
  data () {
    return {
      curtain: false,
      dark: false,
      myMusic:false,
      openWelcome:true,
      // t:''
    }
  },
  computed: {
    locale () {
      if (this.$lang === 'zh-CN') {
        return zhCN
      } else {
        return enGB
      }
    },
    layout () {
      if (this.$routePage === '/') {
        return 'Home'
      } else if (this.$routePage === 'posts' && !this.$routePost) {
        return 'Posts'
      } else if (this.$routePage === 'tags') {
        if (!this.$routePost) {
          return 'Tags'
        } else if (Object.keys(this.$tags).includes(this.$routePost)) {
          return 'Tag'
        }
      } else if (['search', 'timeline', 'links', 'about', 'back'].includes(this.$routePage)) {
        return `${this.$routePage.charAt(0).toUpperCase()}${this.$routePage.slice(1)}`
      } else if (Object.keys(this.$categories).includes(this.$routePage)) {
        if (this.$routePost) {
          if (this.$page && this.$page.password) {
            return 'Password'
          } else {
            return 'Post'
          }
        } else {
          return 'Categories'
        }
      }
      return 'Page404'
    },
  },
  created () {
    this.handleInit()
  },
  mounted () {
    this.curtain = false
    // this.t = setTimeout(() => {
    //   this.showMyMusic()
    // },10000)
  },
  methods: {
    handleInit () {
      const { dark, curtain } = this.$themeConfig
      if (curtain) {
        this.curtain = true
      }
      if (dark) {
        this.dark = true
      }
    },
    
    //遮罩层
    showMyMusic(){
      this.openWelcome = false
      this.myMusic = true
      // clearTimeout(this.t)
    }
  },
}
</script>

<style lang="less" scoped>
</style>
