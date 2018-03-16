<template>
	<div>
		<Tabs type="card">
			<TabPane label="单位信息详情">
				<Card >
    				<table border style="width: 500px" height="400px" >
    					<tr>
				        <td style="width: 160px;" >单位编号</td>
				        <td colspan="2">{{myProp}}</td>
				      </tr>
				     <tr>
    					
				        <td style="width: 160px;">单位名称</td>
				        <td colspan="2" >{{companyDetails.companyName}}</td>
				      </tr>
				     <tr>
				        <td>单位曾用名</td>
				        <td colspan="2"> {{companyDetails.companyUsedName}}</td>
				      </tr>
				      <tr>
				        <td>单位地址</td>
				        <td colspan="2"> {{companyDetails.companyAddress}}</td>
				      </tr>
				      <tr>
				        <td>单位职责</td>
				        <td colspan="2"> {{companyDetails.companyProfile}}</td>
				      </tr>
				      <tr>
				        <td>单位税号</td>
				        <td colspan="2"> {{companyDetails.paragraph}}</td>
				      </tr>
				      <tr>
				        <td>单位电话</td>
				        <td colspan="2"> {{companyDetails.companyTEL}}</td>
				      </tr>
				      <tr>
				        <td>核心客户</td>
				        <td colspan="2"> {{companyDetails.companyCoreCustomer}}</td>
				      </tr>
				      <tr>
				        <td>开户银行</td>
				        <td colspan="2"> {{companyDetails.depositBank}}</td>
				      </tr>
				      <tr>
				        <td>银行账户</td>
				        <td colspan="2"> {{companyDetails.bankAccount}}</td>
				      </tr>
				      <tr>
				        <td colspan="3">
				        	公司简介：<br />
				        	&nbsp; {{companyDetails.information}}
				        </td>
				    </tr>
    				</table>
    			</Card>
			</TabPane>
			<TabPane label="内部架构">
				<div>
		        	<Card >
		    		<!--<Table border ref="selection"   :columns="companyDepartment" :data="data2"></Table>-->
		    		</Card>
		    		<br />
		        	<Button @click="handleSelectAll(true)">全选</Button>
		       	 	<Button @click="handleSelectAll(false)">取消全选</Button>
		       	 	<br /><br />
		       	 	 <Page :total="100" show-total></Page>
		   		 </div> 
			</TabPane>
		</Tabs>
	</div>
</template>

<script>
	export default{
		name:"companyList",
		data(){
			return{
				companyDetails:{},
				msg:20,
			}
		},
		props:['myProp'],
		methods:{
			
		},
		  mounted(){
				console.log(this.myProp)
		  	
            let params =  new URLSearchParams();
				params.append('companyID',18);
				this.$axios({
				    method: 'post',
				    url: "http://www.hemap.cn:8181/Crm/GetCompanyInfoByID",//GetDepartment
				    data:params
				}).then((res)=>{
					this.companyDetails=res.data.data[0]
				});
           
        }
	}
</script>

<style scoped="scoped">
	
</style>