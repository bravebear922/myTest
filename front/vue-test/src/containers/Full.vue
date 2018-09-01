<template>
	<div>
		<AppHeader />
		<main class="main">
	        <div class="container-fluid">
	          <router-view></router-view>
	        </div>
      	</main>
	</div>
</template>

<style scoped>

</style>

<script>
import AppHeader from '../components/AppHeader'
	export default {
		name: "full",
		components: {
			AppHeader
		},
		data () {
			return {

			}
		},methods:{
			
		}
	}
</script>