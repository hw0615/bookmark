<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: 'Observer',
  data: () => ({
    observer: null
  }),
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        setTimeout(() => {
          this.$emit('onGetBookmarks')
        }, 500);
      }
    })
    this.observer.observe(this.$el)
  },
}
</script>

<style scoped>
.observer {
  height: 1;
}
</style>