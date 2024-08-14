<template>
  <form action="#" @submit.prevent="onSubmit" enctype="multipart/form-data">
    <p v-if="errorsPresent" class="error">Please fill out all fields !</p>

    <div class="ui labeled input fluid">
      <div class="ui label"> Game Title</div>
      <input type="text" placeholder="Enter Title..." v-model="flash_game.title" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"> Game Description</div>
      <input type="text" placeholder="Enter Description..." v-model="flash_game.description" />
    </div>

    <div  class="ui labeled input fluid">
      <div class="ui label"> Game File</div>
      <input type="file" ref="swf" @change="SelectFile" accept=".swf"/>
      <input class="invisible" type="text" v-model="flash_game.swf_file"/>
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
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
          swf_file: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
      file: "",
    };
  },
  methods: {
    onSubmit:  async function() {
      if (this.flash_game.title === "" || this.flash_game.description === "" || this.flash_game.swf_file === "") {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.flash_game);

        const formData = new FormData();
        formData.append('file', this.file);
        try {
          await axios.post('http://localhost:4444/upload', formData);
          console.log(this.file.name);
          this.file = "";
        }
        catch(err){
          console.log(err);
        }
      }
    },
    SelectFile: function(){
      this.file = this.$refs.swf.files[0];
      this.flash_game.swf_file = this.file.name;
    }
  },
};
</script>
