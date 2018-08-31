<template>
  <div>
    <v-btn color="success">some</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'some'
    }
  },
  created () {
    document.title = this.title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
