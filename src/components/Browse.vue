<template>
    <md-content>
      <Book
        v-for="book in books"
        :key="book._id"
        v-bind:book="book">
      </Book>
    </md-content>
</template>

<script>
import {allBooks} from '@/api'
import Book from '@/components/Book'

export default {
  components: {Book},
  data: () => ({}),
  created() {

    if(this.$store.state.books === null) {
      allBooks(this.$store.state.auth.token, payload => {
        this.$store.state.books = payload.books
      })
    }
  },
  computed: {
    books() {
      return this.$store.state.books
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
