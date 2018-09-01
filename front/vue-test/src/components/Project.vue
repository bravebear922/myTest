<template>
  <div class="container">
      <!-- <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1" >
              <Icon type="ios-paper" />
              <router-link to="/project">
                Project Submission(Insert)
              </router-link>
          </MenuItem>
          <MenuItem name="2">
              <Icon type="ios-people" />
              <router-link to="/index">
                Project Search
              </router-link>
          </MenuItem>

        </Menu> -->
      <h2>Project</h2>
      <Row type="flex" style="padding-top: 10px;">
        <Col span="12" style="text-align: center">
          Project Name *
        </Col>
        <Col span="12" style="text-align: left">
          <Input v-model="projectName" placeholder="Enter projectName..." style="width: 300px" />
        </Col>
      </Row>

      <Row type="flex" style="padding-top: 10px;">
        <Col span="12" style="text-align: center">
          Justification
        </Col>
        <Col span="12" style="text-align: left">
          <Input v-model="justification" placeholder="Enter justification..." style="width: 300px" />
        </Col>
      </Row>

      <Row type="flex" style="padding-top: 10px;">
        <Col span="12" style="text-align: center">
          Project Leader *
        </Col>
        <Col span="12" style="text-align: left">
          <Input v-model="projectLeader" placeholder="Enter projectLeader..." style="width: 300px" />
          <br>
        </Col>
      </Row>

      <Row type="flex" style="padding-top: 10px;">
        <Col span="12" style="text-align: center">
          Project Member2
        </Col>
        <Col span="12" style="text-align: left">
          <Input v-model="projectMember2" placeholder="Enter projectMember2..." style="width: 300px" />
        </Col>
      </Row>

      <Row type="flex" style="padding-top: 10px;">
        <Col span="12" style="text-align: center">
          Project Member3
        </Col>
        <Col span="12" style="text-align: left">
          <Input v-model="projectMember3" placeholder="Enter projectMember3..." style="width: 300px" />
        </Col>
      </Row>

      <Row type="flex" style="padding-top: 50px;">
        <Col span="12" style="text-align: right">
          <Button type="primary" @click="doOk">OK</Button>
          <Button type="default" @click="doCancel">Cancel</Button>
        </Col>
      </Row>
  </div>
</template>

<script>

export default {
  name: 'Project',
  data () {
    return {
      msg: 'Welcome to Project page',
      projectName: "",
      justification: "",
      projectLeader: "",
      projectMember2: "",
      projectMember3: ""
    }
  },
  computed:{
    author(){
      return this.$store.state.author;
    }
  },
  methods:{
  	doOk(){
      console.log("doOk");
      if(this.projectName == "" || this.projectLeader == "") {
        this.$Message.error('project name and project leader are mandatory!');
        return
      }
      let param = {
        projectName: this.projectName,
        justification: this.justification,
        projectLeader: this.projectLeader,
        projectMember2: this.projectMember2,
        projectMember3: this.projectMember3
      }

      console.log(param)
      var that = this
      $.ajax({  
            method: "POST",  
            url:"http://localhost:3000/insertProject",
            dataType: "json",
            data: JSON.stringify(param),
            contentType: "application/json; charset=utf-8",  
            success: function (res) {
              console.log(res)
              that.$router.push({ path: '/index' });
            }
          });
    },
    doCancel(){
      console.log("doCancel")
      this.$router.push({ path: '/index' });
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
