<template>
	<div class="content">
		<div class="container pt">
		<div class="row mt">
			<div class="col-lg-6 col-lg-offset-3 centered">
				<h3>Scientific American 60 seconds</h3>
				<hr>
				<p>Test your ability</p>
			</div>
		</div>
		<div class="row mt">	
			<div class="col-lg-8 col-lg-offset-2">
				<form>
					<div class="form-group">
						<audio id="mp3Player" class="form-control" controls="controls" src="">Your browser does not support the audio element.</audio>
						<br>
						<Row type="flex" justify="start" class="code-row-bg">
					        <Col span="4">
					        	<Select clearable style="width:100px" placeholder="题号">
					        		<Option key="1" value="1">1</Option>
					        		<Option key="2" value="2">2</Option>
					        		<Option key="3" value="3">3</Option>
					        		<Option key="4" value="4">4</Option>
					        		<Option key="5" value="5">5</Option>
					        	</Select>
					    	</Col>
					        <Col span="4">
					        	<Select clearable style="width:100px" placeholder="速度">
					        		<Option key="1" value="1">1.0</Option>
					        		<Option key="2" value="2">1.2</Option>
					        		<Option key="3" value="3">1.3</Option>
					        		<Option key="4" value="4">1.4</Option>
					        		<Option key="5" value="5">1.5</Option>
					        	</Select>
					    	</Col>
					        <Col span="16">
					        	<Button type="primary"><Icon type="arrow-left-a" size="15"></Icon></Button>
								<Button type="info"><Icon type="arrow-right-a" size="15"></Icon></Icon></Button>
								<Button type="success"><Icon type="arrow-left-b" size="15"></Icon></Icon></Button>
								<Button type="warning"><Icon type="arrow-right-b" size="15"></Icon></Button>
								<Button type="error"><Icon type="loop" size="15"></Icon></Button>
								<Button type="primary"><Icon type="checkmark" size="15"></Icon></Button>
					    	</Col>
					    </Row>

					    <Row style="padding-top: 30px;">
					    	<Col span="24">
					    		<Input type="textarea" :rows=12 :autosize="{minRows: 12,maxRows: 20}" placeholder="Enter your answers..."></Input>
					    	</Col>
					    </Row>
						
				    </div>
				    
				  
				</form>
			</div>
		</div><!-- /row -->
	</div><!-- /container -->
	</div>
</template>

<style scoped>
	.content {
		font-size: 14px
	}

</style>

<script>
	export default {
		data () {
			return {

			}
		},methods:{
			
		},
		created() {
			
		}
	}
</script>