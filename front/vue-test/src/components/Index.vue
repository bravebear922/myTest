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
		<h2>My Project Information</h2>
		<Table :columns="columns1" :data="data1"></Table>
		<Button type="primary" @click="addProject" style="margin-top: 20px;">Add New Project</Button>
	</div>
	
</template>

<style scoped>

</style>

<script>
	export default {


		data () {
			return {
				columns1: [
                    {
                        title: 'Project Name',
                        key: 'projectName'
                    },
                    {
                        title: 'Position Still Opening',
                        key: 'positionStillOpening'
                    },
                    {
                        title: 'Project Leader',
                        key: 'projectLeader'
                    },
                    {
                        title: 'Project Member2',
                        key: 'projectMember2'
                    },
                    {
                        title: 'Project Member2',
                        key: 'projectMember3'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({ path: '/project' });
                                        }
                                    }
                                }, 'Update'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            let idToDel = params.row.id
                                            let that = this
                                            $.ajax({  
										        method: "POST",  
										        url:"http://localhost:3000/deleteProject",
										        dataType: "json",
										        data: JSON.stringify({id: idToDel}),
										        contentType: "application/json; charset=utf-8",  
										        success: function (res) {
										          console.log(res)

										          that.data1.splice(params.index, 1)

										          that.$Message.success('Record deleted');
										        }
										      });
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data1: []
			}
		},methods:{
			addProject() {
				this.$router.push({ path: '/project' });
			}
		},
		created(){
			console.log("created")
			let that = this
			$.ajax({  
		        method: "POST",  
		        url:"http://localhost:3000/getAllProjects",
		        dataType: "json",
		        data: {},
		        contentType: "application/json; charset=utf-8",  
		        success: function (res) {
		          console.log(res)
		          for(var i = 0; i < res.length; i++){
		          	that.data1.push(res[i])
		          }
		        }
		      });
		}
	}
</script>