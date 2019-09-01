<template>
  <div class="bookmark-wrap">
    <bookmark-create-form v-if="form" @submit="onSubmitBookmark" :sending="sending" :success="success" @toggleForm="toggleForm"/>

    <bookmark-card :bookmarks="bookmarks" @delete="onDeleteBookmark" />

    <md-button class="md-icon-button md-raised md-primary form-btn" @click="toggleForm">
      <md-icon>favorite</md-icon>
    </md-button>

    <observer @onGetBookmarks="onGetBookmarks" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BookmarkCard from '@/components/BookmarkCard'
import BookmarkCreateForm from '@/components/BookmarkCreateForm'
import Observer from '@/components/Observer'

export default {
  name: 'Bookmark',
  components: { BookmarkCard, BookmarkCreateForm, Observer },
  created () {
    this.fetchBookmarkList({ page: this.page, limit:this.limit })
  },
  data: () => ({
    active: false,
    success: false,
    value: null,
    sending: false,
    form: false
  }),
  computed: {
    ...mapState([
      'bookmarks',
      'page',
      'limit',
    ]),
  },
  methods: {
    ...mapActions([
      'createBookmark',
      'deleteBookmark',
      'fetchBookmarkList'
    ]),
    toggleForm () {
      this.form = !this.form
      if (this.form) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    },
    async onGetBookmarks () {
      this.$store.state.page++;
      await this.fetchBookmarkList({page: this.page, limit:this.limit})
    },
    onDeleteBookmark (id) {
      this.deleteBookmark(id)
    },
    onSubmitBookmark (bookmark) {
      this.sending = true
      this.createBookmark(bookmark)
        .then(() => {
          this.sending = false
          this.success = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-btn {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 9;
  }
</style>