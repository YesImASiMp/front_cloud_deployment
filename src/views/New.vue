<template>
   <div>
      <h1>New Game</h1>
      <game-form @createOrUpdate="createOrUpdate"></game-form>
   </div>
</template>

<script>
import GameForm from "../components/GameForm.vue"
import { api } from "../helpers/helper"

export default {
   name: 'game',
   components: {
      'game-form': GameForm
   },
   methods: {
      createOrUpdate: async function (game) {
         const res = await api.createGame(game)
         this.flash('Game created', 'success')
         this.$router.push(`/games`)
      }
   }
}
</script>