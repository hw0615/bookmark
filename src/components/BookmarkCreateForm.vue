<template>
  <div class="form-wrap">
    <form class="md-layout" @submit.prevent="onSubmit">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-header>
          <div class="md-title">북마크 생성</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label for="bookmark-title">북마크 제목</label>
            <md-input v-model="title" type="text" name="bookmark-title" id="bookmark-title" autocomplete="bookmark-title" :disabled="sending" placeholder="제목을 입력해주세요." />
          </md-field>

          <md-field>
            <label for="bookmark-url">북마크 주소</label>
            <md-input v-model="url" type="text" name="bookmark-url" id="bookmark-url" autocomplete="bookmark-url" :disabled="sending" placeholder="주소를 입력해주세요." />
          </md-field>

          <md-field>
            <label for="bookmark-thumbnail-url">북마크 썸네일 주소</label>
            <md-input v-model="thumbnail_url" type="text" name="bookmark-thumbnail-url" id="bookmark-thumbnail-url" autocomplete="bookmark-thumbnail-url" :disabled="sending" placeholder="이미지 주소를 입력해주세요." />
          </md-field>
        </md-card-content>


        <md-card-actions>
          <md-button :disabled="sending" @click="toggle">취소</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending">생성</md-button>
        </md-card-actions>
      </md-card>
      
      <md-snackbar :md-active.sync="success">북마크가 생성되었습니다.</md-snackbar>
      <md-snackbar :md-active.sync="warn" class="warn-snackbar">모든 항목을 채워주세요</md-snackbar>
    </form>
    <div class="cover" @click="toggle"></div>
  </div>
</template>

<script>
export default {
  name: 'BookmarkCreateForm',
  props: {
    success: {
      type: Boolean,
    },
    sending: {
      type: Boolean,
    },
    form: {
      type: Boolean,
    },
  },
  data: () => ({
    title: '',
    url: '',
    thumbnail_url: '',
    warn: false
  }),
  methods: {
    toggle(){
      this.$emit('toggleForm')
    },
    onSubmit () {
      const { title, url, thumbnail_url } = this
      if (title === '' || url === '' || thumbnail_url === '' ) {
        this.warn = true
        return false
      }
      this.$emit('submit', {title, url, thumbnail_url})
      this.toggle()

    },
  }
}
</script>

<style lang="scss" scoped>
  .form-wrap {
    overflow-y: hidden;
    .md-layout {
      position: fixed;
      top: 25vh;
      left: 10vw;
      width: 80vw;
      height: 40vw;
      z-index: 1000;
    }
    .cover {
      position: fixed;
      top: 0;
      left: 0;
      width: 102vw;
      height: 102vh;
      z-index: 999;
      background: rgba(0,0,0,0.4);
    }
    .warn-snackbar {
      background-color: red;
    }
  }
</style>