<template>
  <div>
    
    <Layout>
        
        <Content :style="{padding: '0 50px'}">
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col span="4" class="aa">col-4</Col>
                <Col span="4" class="aa">col-4</Col>
                <Col span="4" class="aa">col-4</Col>
                <Col span="4" class="aa">col-4</Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      theme1: 'light'
    }
  },
  computed:{
    author(){
      return this.$store.state.author;
    }
  },
  methods:{
  	aa() {
      console.log("aa")
    }
  }
}
</script>

<style type="text/css" scoped>
  .aa {
    background-color: red
  }
</style>
