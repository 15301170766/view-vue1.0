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
		    		<Table border ref="selection"   :columns="companyDepartment" :data="data2"></Table>
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
				msg:this.myProp,
				value: '',
				companyDepartment:[
							
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编码',
                        width: 150,
                        key: 'departmentID',
                        sortable: true,
                        align: 'center',
                        
                        
                    },
                    {
                        title: '部门名称',
                        key: 'departmentName'
                    },
                    {
                        title: '部门地址',
                        key: 'departmentAddress'
                    },
                    {
                        title: '查看',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params)=>{
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
//                                          this.show(params.row);
//                                          console.log(params.row.companyID) 	
                     this.show(params.row.departmentID)

//                                          this.show(params.row)
//                                          console.log(params.row)

                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
//                                      type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addCompany(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                
				],
				data2:[]
			}
		},
				props:['myProp'],
		methods:{
			    show (ss) {
//          	console.log(ss);
                 this.$Modal.confirm({
                	width: 90+"vh",     
                    render: (h) => {
						return h (companyList,{
							props:{
								myProp:ss
							}
						})
                    }
                })
            },
		},
		  mounted(){
		  	//单位详情
            let params =  new URLSearchParams();
				params.append('companyID',this.msg);
				this.$axios({
				    method: 'post',
				    url: "http://www.hemap.cn:8181/Crm/GetCompanyInfoByID",//GetDepartment
				    data:params
				}).then((res)=>{
					this.companyDetails=res.data.data[0]
				});
           //部门列表
            let params2 =  new URLSearchParams();
				params2.append('id',this.msg);
           
          		this.$axios.get('http://localhost:3000/companys/listFramework', {
					    params: params2
				}).then((res)=>{
					this.data2=res.data.data	
				})
         
        }
	}
</script>

<style scoped="scoped">
	
</style>