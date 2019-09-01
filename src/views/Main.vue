<template>
  <div>
    <div class="wrapper">
      <md-card class="header"><img src="https://loremflickr.com/320/250?random=1" /></md-card>
      <md-card class="left-row"><img src="https://loremflickr.com/320/500?random=2" /></md-card>
      <md-card class="right-column"><img src="https://loremflickr.com/320/250?random=3" /></md-card>
      <md-card><img src="https://loremflickr.com/320/250?random=4" /></md-card>
      <md-card><img src="https://loremflickr.com/320/250?random=5" /></md-card>
      <md-card><img src="https://loremflickr.com/320/250?random=6" /></md-card>
      <md-card><img src="https://loremflickr.com/320/250?random=7" /></md-card>
      <md-card class="right-row-column"><img src="https://loremflickr.com/320/250?random=8" /></md-card>
      <md-card class="left-column"><img src="https://loremflickr.com/320/250?random=9" /></md-card>
      <md-card class="footer"><img src="https://loremflickr.com/320/250?random=11" /></md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    active: false,
    value: null
  }),
  methods: {
    toggleActive () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 300px 200px 200px 200px 200px 300px;
  grid-gap: 10px;
  object-fit: cover;
  padding: 65px 10px 10px 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  .header, .footer {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .left-row {
    grid-row-start: 2;
    grid-row-end: 4;
  }
  .right-row-column {
    grid-row-start: 4;
    grid-row-end: 6;
    grid-column-start: 3;
  }
  .right-column {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .left-column {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
