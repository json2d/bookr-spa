<template>
    <md-content>
      <Form/>
    </md-content>
</template>

<script>
import Form from './Form'
export default {
  name: 'Register',
  components: { Form },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
</style>
