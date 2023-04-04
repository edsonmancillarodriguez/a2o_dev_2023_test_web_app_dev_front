<template>
  <div>
    <router-link to="/problema-1">Problema1</router-link>
    <br>
    <router-link to="/problema-2">Problema2</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>