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
	    	<Button type="warning" size="default" @click="">
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
    	<br /><br /><br />
    		 
        <div>
        	<Card >
    		<Table border size="small" ref="selection"   :columns="columns4" :data="data1"></Table>
    		</Card>
    		<br />
        	<Button @click="handleSelectAll(true)">全选</Button>
       	 	<Button @click="handleSelectAll(false)">取消全选</Button>
       	 	<br /><br />
       	 	 <Page :total="100" show-total></Page>
   		 </div> 
    </div>

</template>


<style>
</style>

<script>
	import schoolAdd from './schoolAdd'
	import schoolList from './schoolList'
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编码',
                        width: 150,
                        key: 'schoolID',
                        sortable: true,
                        align: 'center',
                        
                        
                    },
                    {
                        title: '学校名称',
                        key: 'schoolName'
                    },
                    {
                        title: '学校地址',
                        key: 'schoolAddress'
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
//                                      type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addSchool(params.index)
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
                data1:[]
            }
        },
        components:{
        	schoolList
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            show (ss) {
            	console.log(ss);
                 this.$Modal.confirm({
                	width: 90+"vh",     
                    render: (h) => {
						return h (schoolList,{
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
            addSchool(index){
                this.$Modal.confirm({
                	width: 90+"vh",
                    render: (h) => {
                        return h(schoolAdd)
                    }
                })
            }
        },
        mounted(){
            
            	this.$axios({
				    method: 'get',
				    url: "http://localhost:3000/schools/listInfo"
				}).then((res)=>{
//					console.log(res.data.data)
					this.data1=res.data.data
				});
           
        }
    }
</script>
