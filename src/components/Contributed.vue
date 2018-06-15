<template>
    <md-content>
      {{books}}
    </md-content>
</template>

<script>
import Tabs from './Tabs'
export default {
  components: { Tabs },
  data: () => ({}),
  computed: {
    books() {
      return this.$store.state.contributed
    }

  }
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
