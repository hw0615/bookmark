<template>
    <!-- 네비 드로워 -->
    <div class="app-nav" >
      <transition name="nav-menu">
        <div class="nav-menu-wrap" v-if="showNavigation">
          <md-toolbar md-elevation="1">
            <span class="md-title">Hyeonwoo Jeon</span>
          </md-toolbar>
          <md-list>
            <md-list-item to="/" @click="toggle">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Main</span>
            </md-list-item>

            <md-list-item to="/bookmarks" @click="toggle">
              <md-icon>star</md-icon>
              <span class="md-list-item-text">Bookmarks</span>
              <md-badge class="md-primary" :md-content="bookmarksLength" />
            </md-list-item>
          </md-list>
        </div>
      </transition>
      <div class="side-dim" v-if="showNavigation" @click="toggle"></div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'NavMenu',
  props: {
    showNavigation: {
      type: Boolean
    },
    bookmarksLength: {
      type: Number
    }
  },
  data: () => ({

  }),
  methods: {
    toggle () {
      this.$emit('toggleShowNav')
      window.scrollTo(0,0)
    },
  }
}
</script>

<style lang="scss" scoped>
  .app-nav {
    height: 100%;
    .nav-menu-enter-active {
      transition: all .2s ease-in-out
    }
    .nav-menu-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    }
    .nav-menu-enter, .nav-menu-leave-to {
      transform: translateX(-150px);
      opacity: 0
    }
    .nav-menu-wrap {
      position: fixed;
      z-index: 10100;
      width: 45%;
      height: 100vh;
      background-color: #fff;
    }
    .side-dim {
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 10099;
    }
  }
</style>