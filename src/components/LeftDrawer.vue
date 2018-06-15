<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">{{token}}</span>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>home</md-icon>
        <span class="md-list-item-text">My Books</span>
      </md-list-item>

      <md-list-item>
        <md-icon>search</md-icon>
        <span class="md-list-item-text">Search for Books</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Browse Categories</span>
      </md-list-item>

      <md-list-item>
        <md-icon>settings</md-icon>
        <span class="md-list-item-text">Settings</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'LeftDrawer',
  computed: {
    token() {
      return this.$store.state.auth.token
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
