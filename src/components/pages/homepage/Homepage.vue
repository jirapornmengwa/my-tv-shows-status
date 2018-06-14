<template>
	<div class="homepage">
		<Showcase />
		<div class="news">
		</div>
		<div class="add-news">
		</div>
		<Popup>
			<Button slot="trigger" text="add new show" importance="primary" />
			<AddShow slot="content" slot-scope="{closePopup}" :sumbitAction="closePopup" />
		</Popup>
	</div>
</template>

<script>
import Showcase from '@/components/basic/showcase/Showcase';
import AddShow from '@/components/basic/addShow/AddShow';
import Popup from '@/components/utils/popup/Popup';
import Button from '@/components/utils/button/Button';

export default {
  components: {
    Showcase,
    AddShow,
    Popup,
    Button
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100vh;
  width: 100%;
  padding: 2.5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'showcase showcase news'
    'showcase showcase add_news'
    'showcase showcase add_show';

  .showcase {
    grid-area: showcase;
  }

  .news {
    grid-area: news;
    width: 200px;
    height: 100px;
    background-color: lightgrey;
  }

  .add-news {
    grid-area: add_news;
    width: 200px;
    height: 100px;
    background-color: grey;
  }

  .popup-wrapper {
    grid-area: add_show;
  }
}
</style>
