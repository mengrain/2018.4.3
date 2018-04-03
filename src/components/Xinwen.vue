<template>
	<div>
		<div class="zys-tit" v-for="i in arr">
			<img :src="i.img" />
		    <div class="zys-tit-left">
		    	<p>{{i.name}}</p>
		    	<a>发布日期：{{i.times}}</a>
		    	<span>{{i.text}}</span>
		    </div>
		
		</div>
	</div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://localhost:3000/text').then(e=>this.arr=e.body)
  },
  data(){
  	return {
  		arr:[]
  	}
  }
}	
	
</script>

<style>
</style>