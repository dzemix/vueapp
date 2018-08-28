<template>
  <div class="navbar">
    <v-container>
      <router-link tag="span" :to="{name: 'home'}">
        Logo
      </router-link>
    </v-container>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.navbar {
  position:fixed;
  top:0;
  left:0;
  margin:0;
  height:80px;
  width:100%;
}
.container {
  border-bottom:1px solid #EEEEEE;
  padding:0;
  height:100%;
}
span {
  line-height: 80px;
  font-size: 40px;
}
span:hover {
  cursor: pointer;
}
</style>
