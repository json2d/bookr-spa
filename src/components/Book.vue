<template>
      <md-card v-bind:class="{'md-accent': book.isCheckedOut}">
        <md-card-header>
          <div class="md-title">{{book.title}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-subheading">
            written by {{book.author}}
          </div>
          <div class="md-body-2">
            published by {{book.publisher}}
          </div>
        </md-card-content>

        <md-card-actions v-if="!book.isCheckedOut">
          <md-button>Checkout</md-button>
        </md-card-actions>
      </md-card>

</template>

<script>
export default {
  props: ['book']
}

</script>

<style lang="scss" scoped>
  .md-card {
    width: 100%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
