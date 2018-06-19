<template>
	<div>
		<div>
			<button v-on:click="saveFile">Download JSON</button>
		</div>
		<div>
			<input type="file" v-on:change="loadFile">
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    saveFile: function() {
      let blob = new Blob([localStorage.getItem("shows")], {type: "application/json"});
      let a = document.createElement("a");

      a.href = URL.createObjectURL(blob);
      a.download = "shows.json";
      a.onclick = (event) => {
        event.target.remove();
      };
      a.click();
    },
    loadFile: function(e) {
      var reader = new FileReader();
      reader.onload = function(event) {
        let shows = JSON.parse(decodeURIComponent(event.target.result));
        // TODO:
      };
      reader.readAsText(e.target.files[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
