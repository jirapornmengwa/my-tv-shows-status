<template>
	<div class="homepage">
		<Showcase />
		<div class="news">
			<button v-on:click="saveFile">Download JSON</button>
			<input type="file" v-on:change="loadFile">
		</div>
		<div class="add-news">
		</div>
		<AddShow></AddShow>
	</div>
</template>

<script>
import Showcase from '@/components/basic/Showcase/Showcase';
import AddShow from '@/components/basic/AddShow';

export default {
  components: {
    Showcase,
    AddShow
  },
  methods: {
    saveFile: function() {
      let blob = new Blob([localStorage.getItem('shows')], {type: 'application/json'});
      let a = document.createElement('a');

      a.href = URL.createObjectURL(blob);
      a.download = 'shows.json';
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
.homepage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'showcase showcase news'
    'showcase showcase add-news'
    'showcase showcase add-show';

  .showcase {
    grid-area: showcase;
  }

  .news {
    grid-area: news;
    width: 200px;
    height: 100px;
    background-color: red;
  }

  .add-news {
    grid-area: add-news;
    width: 200px;
    height: 100px;
    background-color: blue;
  }

  .add-show {
    grid-area: add-show;
  }
}
</style>
