<template>
  <div>
    <h1>Show Game</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"> Title</div>
      <input type="text" disabled :value="flash_game.title" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">Description</div>
      <input type="text" disabled :value="flash_game.description"  />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">File Name</div>
      <input type="text" disabled :value="flash_game.swf_file" />
    </div>
    <form action="#" @submit.prevent="onDownload">
      <button class="positive ui button">Download</button>
    </form>
  </div>
</template>


<script>
import { api } from "../helpers/helper"
import axios from "axios";
export default {
  name: "show",
  components:{

  },
  data() {
    return {
      flash_game: {},
      flash_game_id: "",
    };
  },
  async mounted() {
    this.flash_game = await api.getGame(this.$route.params.id);
  },
  methods: {
    onDownload:  async function() {
        this.flash_game_id = this.$route.params.id;
        const res = await api.downloadGame(this.flash_game_id)
        this.flash('Game downloaded', 'success')
      },

    },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
