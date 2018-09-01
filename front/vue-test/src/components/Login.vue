<template>
  <div>
    
    <Layout>
        
        <Content :style="{padding: '50px 50px'}">
            <Row type="flex" justify="center" class="code-row-bg">
                <Col span="8">
                  Username: <Input v-model="userName" placeholder="Enter Username..." style="width: 300px" />
                </Col>
            </Row>

            <Row type="flex" justify="center" class="code-row-bg myPadding" >
                <Col span="8">
                  Password: <Input v-model="passWord" type="password" placeholder="Enter password..." style="width: 300px" />
                </Col>
            </Row>

            <Row type="flex" justify="center" class="code-row-bg myPadding" >
                <Col span="8" >
                  <Button type="primary" @click="doLogin">Login</Button>
                  <Button type="success" @click="doRegister">Register</Button>
                </Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Login page',
      theme1: 'light',
      userName: "",
      passWord: ""
    }
  },
  computed:{
    author(){
      return this.$store.state.author;
    }
  },
  methods:{
  	hello() {
      console.log("hello login page")
    },
    doLogin() {
      console.log("do login")
      let data = {
        user: this.userName,
        pass: this.passWord
      }
      console.log(data)
      let that = this
      $.ajax({  
        method: "POST",  
        url:"http://localhost:3000/doLogin",
        dataType: "json",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",  
        success: function (res) {
          console.log(res)
          if(res.username!=""){
            that.$Message.success('Login success');
            // forward to index
            that.$router.push({ path: '/index' });
          }else{
            that.$Message.error('Login failed');
          }
        }
      });

    },
    doRegister(){
      this.$router.push({ path: '/register' });
    }
  }
}
</script>

<style type="text/css" scoped>
  .myPadding {
    padding-top: 20px;
}
</style>
