<template>
  <div>
    
    <Layout>
        <h2>Register</h2>
        <Content :style="{padding: '50px 50px'}">
            <Row type="flex" justify="center" class="code-row-bg">
                <Col span="8">
                  Username: <Input v-model="userName" placeholder="Enter Username..." style="width: 300px" />
                </Col>
            </Row>

            <Row type="flex" justify="center" class="code-row-bg myPadding" >
                <Col span="8">
                  Password: <Input v-model="passWord1" type="password" placeholder="Enter password..." style="width: 300px" />
                </Col>
            </Row>

            <Row type="flex" justify="center" class="code-row-bg myPadding" >
                <Col span="8">
                 Password again: <Input v-model="passWord2" type="password" placeholder="Retype password..." style="width: 300px" />
                </Col>
            </Row>

            <Row type="flex" justify="center" class="code-row-bg myPadding" >
                <Col span="8" >
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
      passWord1: "",
      passWord2: ""
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
    doRegister(){
      if(this.passWord1 != this.passWord2) {
        this.$Message.error('password not equal');
        return;
        
      }

      var param = {
          username: this.userName,
          password: this.passWord1
        }
        var that = this
        $.ajax({  
            method: "POST",  
            url:"http://localhost:3000/insertUser",
            dataType: "json",
            data: JSON.stringify(param),
            contentType: "application/json; charset=utf-8",  
            success: function (res) {
              console.log(res)
              that.$router.push({ path: '/login' });
            }
          });
    }
  }
}
</script>

<style type="text/css" scoped>
  .myPadding {
    padding-top: 20px;
}
</style>
