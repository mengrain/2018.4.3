<template>
  <div class="main">
  	<div class="new">
        <div class="new-con" v-for="j in arr" >
          <router-link to="/page">
          <img :src="j.img"/>
          <p>{{j.name}}</p>         
          <span>地区：{{j.des}}</span>
          <span>户型：{{j.fenlei}} </span>   
          <span>价格：{{j.price}}元/m²</span>    
          </router-link>
    		</div>
    		</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   created(){
    this.$http.get('http://localhost:3000/').then(e=>this.arr=e.body)
  },
  data(){
    return {
      lan:{},
      arr:[],
      page:false
    }
  },
}
</script>

<style scoped>
	
	.new{
		overflow: hidden;
	}
	.new p span{
		font-size: 25px;
		font-weight: bold;
	}
</style>
