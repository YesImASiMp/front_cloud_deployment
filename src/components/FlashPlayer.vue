<template>
    <div id="ruff">
    </div>
</template> 
<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
<script>
    var swf_obj = {};
    swf_obj.embedSWF = function (url, cont, width, height) {
        var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: '+width+'px; height: '+height+'px',
        });

        player.load({url: url});
    }
    swf_obj.embedSWF(".../server/db/swf/" + flash_game.swf_file, 'ruff', 800, 600);
</script>
<script>
export default {
    name: "show",
    props: {
        flash_game: {
        type: Object,
        required: false,
        default: () => {
            return {
                swf_file: "",
            };
        },
        },
    },
    data() {
        return {
            swf_dir: ".../server/db/swf/" + this.flash_game.swf_file,
        };
    },
};
</script>





