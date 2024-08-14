<template>
  <div>
    <h1>Games</h1>
    <a href="https://ruffle.rs"> Want to play Flash Games? Try out Ruffle</a>
    <table id="flash_games" class="ui celled compact table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Game Link</th>
          <th colspan="3">Menu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(flash_game, i) in flash_games" :key="i">
          <td>{{ flash_game.title }}</td>
          <td>{{ flash_game.description }}</td>
          <td>{{ flash_game.swf_file }}</td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show', params: { id: flash_game._id } }">
              Show
            </router-link>
          </td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit', params: { id: flash_game._id } }">
              Edit
            </router-link>
          </td>
          <td 
            width="75"
            class="center aligned"
            @click.prevent="onDelete(flash_game._id)"
          >
            <a href="`/games/${flash_game._id}`"> Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helper"

export default {
  name: "flash_games",
  data() {
    return {
      flash_games: [],
    };
  },
  methods: {
    async onDelete(id) {
      const sure = window.confirm("Are you sure ?");
      if (!sure) return;
      await api.deleteGame(id);
      this.flash("Game deleted successfully", "success");
      const newFlashGames = this.flash_games.filter((flash_game) => flash_game._id !== id);
      this.flash_games = newFlashGames;
    },
  },
  async mounted() {
    this.flash_games = await api.getGames();
  },
};
</script>
