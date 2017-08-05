<template>
  <div class='wrapper'>
    <img v-if = 'showWelcome' src="../assets/images/welcome.jpg" class = 'cover welcome' alt="welcome" width ='100%' height = '100%'>
    <div v-else class = 'cover main'>
      <mt-swipe :auto="4000"  >
		<mt-swipe-item  v-for = 'item in topStories'   :key ='item.id'>
			<div class ='cover top-story-item'>
				<img class ='cover' :src="item.image" :alt="item.title">
				<div  class='title'>
					<span class='title-text'>{{item.title}}</span>
				</div>
			</div>
		</mt-swipe-item>
      </mt-swipe>
    </div>
	<news-list></news-list>
  </div>
</template>
<script>
import axios from 'axios';
import { NEWSLIST } from '@/store/type';
import newsList from '@/components/NewsList';

export default {
	name:'index',
	data() {
		return {
			topStories : [],
			showWelcome : !this.$store.state.notFirstOpen
		};
	},
	mounted () {
		if(!this.$store.state.notFirstOpen){ 
			sessionStorage.setItem('notFirstOpen',1);
			let timer = setTimeout(()=>{
				this.showWelcome = false;
				clearTimeout(timer);
			},3500);
		}

		axios.get('/api/news/latest').then(res=>{
				if(res.data.top_stories){
					this.topStories = res.data.top_stories;
				}
			});
		},
	components: {
		newsList
	}
};

</script>
<style  lang="stylus" scoped>
  /*@import '../../static/style/index.styl';*/
	.cover
		width 100%
		height 100%
	.wrapper
		color #fff
		left 0
		top 0
		right 0
		bottom 0
		font-size 0.7rem
		position fixed
		.main
			height 220px
			.top-story-item
				position relative
				.title
					width 100%
					position absolute
					bottom 35px
					left 0
					display flex
					justify-content center
					align-items center
					.title-text
						font-size 0.9rem
						padding 5px 10px
						line-height 1.2rem
						text-align left
</style>

