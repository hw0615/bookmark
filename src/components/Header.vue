<template>
  <div>
    <div class="app-header">
      <md-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleShowNav">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">{{ setTitle }}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
      </md-toolbar>
    </div>
    <nav-menu :showNavigation.sync="showNavigation" :bookmarksLength="bookmarksLength" @toggleShowNav="toggleShowNav"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Header',
  components: { NavMenu },
  data: () => ({
    showNavigation: false,
    title: ''
  }),
  created () {
    this.fetchAllBookmarkList()
  },
  computed: {
    ...mapState([
      'bookmarks',
      'bookmarksLength'
    ]),
    setTitle () {
      return this.title = this.$route.name
    }
  },
  methods: {
    ...mapActions([
      'fetchAllBookmarkList'
    ]),
    toggleShowNav () {
      this.showNavigation = !this.showNavigation
      if (this.showNavigation) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>