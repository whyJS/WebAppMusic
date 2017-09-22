<template>
  <div class="homepage">
  <ul>
    <router-link :to="{path:'/home/car',query: { 'shopid': val.shopid,'shopid2': val.shopid}}" tag="li" v-for="(val,index) in shop" v-bind:key="val.id">店铺{{val.shopid}}</router-link>
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
const ERR_OK=0;
export default {
  data () {
    return {
     shop:[]
    }
  },
  props:{

  },
  computed:{
  	
  },
  created: function () {
    this.$http.get('/api/shop').then((res) => {
        if(ERR_OK===0){
          this.shop=res.data.shop;
          console.log(this.shop)
          //  this.seller = Object.assign({}, this.seller, res.data.seller);
          // console.log(this.seller)
          
        }
      })
      .catch(function(err) {
          console.log(err); // 从数据库获取数据出现问题
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  position: fixed;
  z-index: -100;
}
ul li{
  width: 100%;
  font-size: 30px;

}
</style>
