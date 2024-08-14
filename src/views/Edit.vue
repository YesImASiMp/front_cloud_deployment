<template>
  <div>
    <h1>Edit Title and Description</h1>
    <game-form @createOrUpdate="createOrUpdate" :flash_game="this.flash_game"></game-form>
  </div>
</template>

<script>
import EditForm from "../components/EditForm.vue";
import { api } from "../helpers/helper"

export default {
  name: "edit",
  components: {
    "game-form": EditForm,
  },
  data: function () {
    return {
      flash_game: {},
    };
  },
  methods: {
    createOrUpdate: async function (flash_game) {
      await api.updateGame(flash_game);
      //alert('Game updated successfully !')
      this.flash("Game update successfully !", "success");
      this.$router.push(`/games/`);
    },
  },
  async mounted() {
    this.flash_game = await api.getGame(this.$route.params.id);
  }
};
</script>
