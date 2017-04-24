<template>
	<article id="top250">
		<h1 v-html="top" class="title"></h1>
		<section class="sec">
			<div  class="list">
				<figure class="list_fig" v-for="subject in subjects">
					<dd class="list_img"><img :src="subject.images.medium" alt=""></dd>
					<dd class="list_main">
						<figcaption class="list_title">
							<h2><span>中文名：</span><a :href="subject.alt" v-html="subject.title"></a></h2>
							<h3><span>其他名：</span>{{ subject.original_title }}</h3>
						</figcaption>
						<p class="list_time"><span>时间：</span>{{ subject.year }}</p>
						<p class="list_lx"><span>类型：</span><i v-for="genre in subject.genres" v-html="genre"></i></p>
						<p class="list_yy"><span>演员：</span><a v-for="cast in subject.casts" :href="cast.alt" v-html="cast.name"></a></p>
						<p class="list_dy"><span>导演：</span><a v-for="director in subject.directors" :href="director.alt" v-html="director.name"></a></p>
					</dd>
				</figure>
			</div>
		</section>
		<div class="jz" v-show='show'>
			<div>
				<p><img src="../images/jz.gif" alt=""></p>
				<p class="jz_text">加载中······</p>
			</div>
		</div>
	</article>
</template>
<script>
	export default{
		name:"top250",
		data(){
			return {
				top:"TOP250",
				subjects:'',
				show:true,
				get(){
					this.$http({
						url:'https://api.douban.com/v2/movie/top250',
						method:'jsonp',
						headers:'application/json,text/plain'
					}).then((response)=>{
						this.subjects=response.data.subjects;
						this.show=false;
					})
				}
			}
		},
		mounted(){
			this.get();
		}
	}
</script>