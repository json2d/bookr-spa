<template>
      <md-tabs md-sync-route md-alignment="centered">
        <md-tab id="tab-browse" md-label="Browse">
            <Browse/>
        </md-tab>
        <md-tab id="tab-contributed" md-label="Contributed">
            <Contributed/>
        </md-tab>

        <md-tab id="tab-checked-out" md-label="Checked">

        </md-tab>

      </md-tabs>
</template>

<script>
import Tabs from './Tabs'
import Contributed from './Contributed'
import Browse from './Browse'
export default {
  components: { Tabs, Contributed, Browse },
  data: () => ({}),

  beforeCreate() {
    if (!this.$store.state.auth.token) {
      this.$router.push('/register')
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
