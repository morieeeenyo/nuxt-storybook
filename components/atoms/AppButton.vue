<template>
  <div>
    <button
      class="app-button"
      :class="{
        '-red': red,
        '-blue': blue,
      }"
    >
      Button
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    blue: {
      type: Boolean,
      default: false
    },
    red: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style>
.app-button {
  width: 100px;
  height: 50px;
  border-radius: 5%;
  color: white;
}
.-blue {
  background-color: blue;
}

.-red {
  background-color: red;
}

</style>
