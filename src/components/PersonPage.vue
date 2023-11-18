<template>
  <div>
    ruti person page
  </div>
</template>

<script>
export default {
  name: "PersonPage",
  props:{
    person: {
      type: Object,
      default: () => {
        return {
          name: 'shanie',
          age: '',
          relatedEvents: [1,2],
          imgLink: '',
          storyText: '',
          locationTag: '',
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
