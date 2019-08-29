<template>
  <div>
    <div class="wrapper">
      <md-card class="header">1</md-card>
      <md-card class="left">2</md-card>
      <md-card class="right">3</md-card>
      <md-card class="md-card5">4</md-card>
      <md-card class="md-card6">5</md-card>
      <md-card class="md-card7">6</md-card>
      <md-card class="md-card8">7</md-card>
      <md-card class="md-card8">8</md-card>
    </div>
    <md-dialog-content>
      <md-dialog-prompt
        :md-active.sync="active"
        v-model="value"
        md-title="What's your name?"
        md-input-maxlength="30"
        md-input-placeholder="Type your name..."
        md-confirm-text="Done" />

      <span v-if="value">Value: {{ value }}</span>
    </md-dialog-content>
      <md-button class="md-primary md-raised" @click="active = true">Prompt</md-button>
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
      console.log('gggggggggggg :');
      this.active = !this.active
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 150px 150px 150px;
  grid-gap: 5px;
  div {
    // background-color: orange;
    // border: 1px black solid;
  }
  .header {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .left {
    grid-row-start: 2;
    grid-row-end: 4;
  }
  .right {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}
</style>
