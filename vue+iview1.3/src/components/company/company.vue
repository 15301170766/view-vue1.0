<template>
    <div>
    	
    	<div class="toubu">
    		<div style="float: left;">
    		  <Input size="large" v-model="value13" placeholder="请输入相关信息" style="width: 300px">
			    
			        <Button slot="append" icon="ios-search"></Button>
			    </Input>
	    	</div>
	    	<div style="float: right;">
	    		<Button type="info" size="default" @click="">
	    		<Icon type="refresh"></Icon>
	    		刷新
	    	</Button>
	    	<Button type="primary" size="default" @click="addCompany">
	    		<Icon type="plus-circled" ></Icon>
	    		新增
	    	</Button>
	    	<Button type="warning" size="default" @click="revampCompany1">
	    		<Icon type="edit"></Icon>
	    		编辑
	    	</Button>
	    	<Button type="error" size="default" @click="">
	    		<Icon type="trash-a"></Icon>
	    		删除
	    	</Button>
	    	<Button type="success" size="default" @click="">
	    		<Icon type="arrow-right-a"></Icon>
	    		导出
	    	</Button>
	    	</div>
    	</div>
    	
    	<br /><br /> 
    	<br />
        <div>
        	<Card >
    		<Table border ref="selection" size='small'  :columns="columns4" :data="data1"></Table>
    		</Card>
    		<br />
        	<Button @click="handleSelectAll(true)">全选</Button>
       	 	<Button @click="handleSelectAll(false)">取消全选</Button>
       	 	<br /><br />
       	 	 <Page :total="100" show-total></Page>
   		 </div> 
   		<fanhui></fanhui>
    </div>
</template>


<style scoped="scoped">

</style>

<script>
	import companyAdd from './companyAdd'
	import companyList from './companyList'
	import revamp1 from './revamp1'
	import fanhui from '@/components/fanhui.vue'
    export default {
        data () {
            return {
            	value13: '',
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编码',
                        width: 150,
                        key: 'companyID',
                        sortable: true,
                        align: 'center',
                        
                        
                    },
                    {
                        title: '单位名称',
                        key: 'companyName'
                    },
                    {
                        title: '单位地址',
                        key: 'companyAddress'
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
                                            this.show(params.row.companyID)
//                                          this.show(params.row)
//                                          console.log(params.row)

                                        }
                                    }
                                }, '查看'),
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
                data1:[]
            }
        },
        components:{
        	companyList,fanhui
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
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
            remove (index) {
                this.data1.splice(index, 1);
            },
            addCompany(index){
                this.$Modal.confirm({
                	width: 90+"vh",
                    render: (h) => {
                        return h(companyAdd)
                    }
                })
            },
             revampCompany1(index){
                this.$Modal.confirm({
                	width: 90+"vh",
                    render: (h) => {
                        return h(revamp1)
                    }
                })
            }
        },
        mounted(){
            
            	this.$axios({
				    method: 'get',
				    url: "http://localhost:3000/companys/getCompany"
				}).then((res)=>{
//					console.log(res.data.data)
					this.data1=res.data.data
				});
           
        }
    }
</script>
