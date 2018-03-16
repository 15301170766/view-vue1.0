<template>
	<div class="searchDetails">
				<h1>单位体制内管理系统</h1>
       			<Layout>
       				<Row type="flex" justify="center" style="background:#5881bf ;padding-top: 50px;">
       					<!--<Col span="3" v-for="(btn,index) in btns">
       						<Button :type="{}" @click="toggleTabs(index)" :class="{active:index!=nowIndex}">{{btn}}</Button>
       					</Col>-->
       					<!--<Col span="3">
       						<Button :type="haha" @click="toggleTabs(index)">客户关系查询</Button>
       					</Col>-->
       				</Row>
       			</Layout>
       			<div>
       				<div class="divTab" v-show="nowIndex===0">我是tab1</div>
    				<div class="divTab" v-show="nowIndex===1">我是tab2</div>
       			</div>
       			<Input v-model="value13" size="large"   :style="searchStyle" placeholder="请输入相关信息查询"  style="margin: 0 auto;">
			        <Select v-model="select3" slot="prepend" style="width: 80px">
			            <Option value="day">查客户</Option>
			            <Option value="month">查单位</Option>
			            <Option value="year">查关系</Option>
			        </Select>
			        <Button style="" slot="append" icon="ios-search"></Button>
			    </Input>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				select3: 'day',
				searchStyle:{
					width: 70+"vh",
					marginTop: 30+'px',
				},
				haha:"warning",
				btns:['单位关系查询','客户关系查询'],
				nowIndex:0,//默认第一个tab为激活状态
			}
		},
		methods:{
			toggleTabs(index){
				this.nowIndex=index;
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.searchDetails{
		width: 100%;
		height: 800px;
		background: #5881bf;
		margin: 0;
		padding: 0;
		padding-top: 10vh;
		text-align: center;
		h1{
			color: white;
			font-size: 36px;
			font-weight: 500;
		}
	}
</style>