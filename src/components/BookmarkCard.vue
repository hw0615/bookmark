<template>
  <div class="bookmark-card-wrap" id="bookmark-list">
    <md-card v-for="(item, index) in bookmarks" :key="`${index}-${item.id}`" class="card-wrap" md-theme="purple-card">
      <md-button class="md-icon-button bookmark-delete" @click.capture="onDelte(item.id)">
        <md-icon>close</md-icon>
      </md-button>

      <a :href="item.url" target="_blank">
        <md-card-media-actions class="bookmark-img-wrap">
          <img :src="item.thumbnail" alt="Cover" class="bookmark-img">
        </md-card-media-actions>

        <md-card-header class="card-footer">
          <p class="md-title">{{ item.title }}</p>
          <p class="md-subhead">{{ item.url }}</p>
        </md-card-header>
      </a>
    </md-card>
  </div>
</template>

<script>

export default {
  name: 'BookmarkCard',
  props: {
    bookmarks: {
      type: Array
    },
  },
  methods: {
    onDelte (id) {
      this.$emit('delete', id)
    },
  }
}
</script>

<style lang="scss" scoped>
  .bookmark-card-wrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-top: 65px;
    .card-wrap {
      width: 50%;
      min-height: 350px;
      margin-bottom: 10px;
      .bookmark-delete {
        position: absolute;
        top: 0;
        right: -8px;
      }
      .bookmark-img-wrap {
        height: 300px;
        .bookmark-img {
          margin: 0 auto;
          min-height: 155.5px;
          height: 100%;
          object-fit: contain; 
        }
      }
      .card-footer {
        width: 100%;
      }
      p {
        overflow: auto;
      }
    }
    a:link, a:visited {
      color: #666;
      text-decoration: none;
    }
    a:active, a:hover {
      color: #000;
      text-decoration: none;
    }
  }
</style>