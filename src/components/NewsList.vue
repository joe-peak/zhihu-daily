<template>
	<div  class='newsWrapper'>
		<div class='newslist'>
			<router-link 
			:to = '{name:"Detail",params: { id: newsitem.id }}' 
			v-for = 'newsitem in stories' 
			:key = 'newsitem.id'>
			<div class = 'news-item'>
				<div class="news-content" v-cloak>{{newsitem.title}}</div>
				<div class="news-img">
					<img 
					:src='newsitem.images[0]' 
					:alt='newsitem.title'>
				</div>
			</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { NEWSLIST } from '@/store/type';

export default {
	name: 'newlist',
	data(){
		return {
			
		}
	},
	props:{
		stories : {
			type : Array,
			default : []
		}
	},
	methods: {
	},
	created(){
	},
	mounted () {
	}
};
</script>

<style lang = 'stylus' scoped>
	.newsWrapper
		display flex
		width 100%
		height 100%
		background-color RGB(242,242,242)
		justify-content center
		.newslist
			width 95%
			color #000
			font-size: 0.7rem;
			.news-item
				display flex
				height 70px
				padding 6px
				overflow hidden
				border: .027rem solid #eaeaea;
				background-color RGB(255,255,255)
				border-radius 5px
				margin-bottom: .25rem;
				margin-top: .25rem;
				border-bottom: .027rem solid #d0d0d0;
				.news-content
					display flex
					flex 3
					height 100%
					padding: 0.1rem;
					margin-right 6px
					align-items flex-start
					text-align left
					line-height: 0.9rem;
				.news-img
					flex 1
					display flex
					height 100%
					align-items center
					img
						width 100%
						height 100%
</style>


