<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Use Google's location service?"
      md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />

    <span v-if="value">Value: {{ value }}</span>
  </div>
</template>

<script>
  export default {
    name: 'DialogConfirm',
    prop: ['active'],
    watch: ['active'],
    data: () => ({
      // active: false,
      value: null
    }),
    methods: {
      onConfirm () {
        this.value = 'Agreed'
      },
      onCancel () {
        this.value = 'Disagreed'
      }
    }
  }
</script>
