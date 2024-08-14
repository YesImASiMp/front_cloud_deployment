<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields !</p>

    <div class="ui labeled input fluid">
      <div class="ui label"> Game Title</div>
      <input type="text" placeholder="Enter Title..." v-model="flash_game.title" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"> Game Description</div>
      <input type="text" placeholder="Enter Description..." v-model="flash_game.description" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "game-form",
  props: {
    flash_game: {
      type: Object,
      required: false,
      default: () => {
        return {
          title: "",
          description: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit: function () {
      if (this.flash_game.title === "" || this.flash_game.description === "") {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.flash_game);
      }
    },
  },
};
</script>
