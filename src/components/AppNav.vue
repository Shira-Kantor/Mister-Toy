<template>
    <img class="logo-shira" src="../assets/img/shira.jpg">
    <nav class="nav-header">
  <RouterLink class="nava first" to="/"><button class="nav-btn">Home</button> </RouterLink>
  <RouterLink class="nava" to="/about"><button class="nav-btn">About</button>   </RouterLink>
  <RouterLink class="nava" to="/map"><button class="nav-btn">Map</button>    </RouterLink>
  <RouterLink class="nava" to="/chart"><button class="nav-btn">Chart</button>    </RouterLink>
  <RouterLink class="nava" to="/toy"><button class="nav-btn">Toy</button></RouterLink>
 </nav>
</template>

<script>
export default {
 name: 'AppNav'
}
</script>

<style></style>