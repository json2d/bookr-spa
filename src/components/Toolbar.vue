<template>
  <div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Create an Account</span>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation">
      <LeftDrawer/>
    </md-drawer>

    <md-dialog-confirm
      :md-active.sync="showDialog"
      md-title="Use Google's location service?"
      md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
  </div>
</template>

<script>
import LeftDrawer from "@/components/LeftDrawer"
export default {
  name: 'Toolbar',
  components: {LeftDrawer},
  data: () => ({
    showDialog: true,
    showNavigation: true,
  })
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
