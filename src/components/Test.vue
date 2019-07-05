<template>
  <div class="hello">
    <button @click="test">获取远程信息</button>
    <div v-for="(m, index) in remote" :key="index">{{m}}</div>
    <button @click="readFile">获取本地信息</button>
    <div v-for="(m, index) in local" :key="index">{{m}}</div>
  </div>
</template>

<script>
import MockApi from "@/api/mock"
import fs from "@/utils/fs"
export default {
  name: 'Test',
  data () {
    return {
      remote: [],
      local: []
    }
  },
  methods:{
    test(){
      MockApi.e2().then(res=>{
        console.log(res.data);
        this.remote = this.remote.concat(res.data)
      })
    },
    readFile(){
      console.log('aaaa',this.$axios)
      console.log(this.$fs);
      let data = this.$fs.readFileSync('C:/Users/lz/Desktop/1.txt').toString();
      this.local.push(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
