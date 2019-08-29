<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>
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

    <!-- <nav-menu :showNavigation="showNavigation"/> -->

    <!-- 네비 드로워 -->
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Hyeonwoo Jeon</span>
      </md-toolbar>

      <md-list>
        <md-list-item to="/" @click="toggleShowNav">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Main</span>
        </md-list-item>

        <md-list-item to="/bookmark" @click="toggleShowNav">
          <md-icon>star</md-icon>
          <span class="md-list-item-text">Book mark</span>
          <md-badge class="md-primary" md-content="6" />
        </md-list-item>
      </md-list>
    </md-drawer>

  </div>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
    showNavigation: false,
  }),
  methods: {
    toggleShowNav () {
      this.showNavigation = !this.showNavigation
    },
    toMain () {
      this.$router.push({
        name: 'Main'
      })
      this.showNavigation = false
    },
    toBookmark () {
      this.$router.push({
        name: 'Bookmark'
      })
      this.showNavigation = false
    },
    renderHeaderTxt () {
      return 'fffffffffff'
    },
  }
}
</script>