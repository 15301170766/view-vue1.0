<template>
	<div >

		<Tabs type="card">
        <TabPane label="单位信息增加">
        	<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
		        <FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >上级单位名称</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyID" >
		            <Input type="text" clearable size="large" v-model="formInline.companyID" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位编码</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位名称</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyUsedName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyUsedName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >曾用名</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyAddress" >
		            <Input type="text" clearable size="large" v-model="formInline.companyAddress" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位地址</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="information" >
		            <Input type="text" clearable size="large" v-model="formInline.information" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >财务信息</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="paragraph" >
		            <Input type="text" clearable size="large" v-model="formInline.paragraph" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位税号</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyTEL" >
		            <Input type="text" clearable size="large" v-model="formInline.companyTEL" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位电话</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyCoreCustomer" >
		            <Input type="text" clearable size="large" v-model="formInline.companyCoreCustomer" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >核心客户</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyProfile" >
		            <Input type="text" clearable size="large" v-model="formInline.companyProfile" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >公司简介</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="depositBank" >
		            <Input type="text" clearable size="large" v-model="formInline.depositBank" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >开户银行</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="bankAccount" >
		            <Input type="text" clearable size="large" v-model="formInline.bankAccount" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >银行账户</span>
		            </Input>
		        </FormItem>		    
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formInline')">提交</Button>
		            <Button type="ghost" @click="handleReset('formInline')" style="margin-left: 8px">清空</Button>
		        </FormItem>
		    </Form>
        </TabPane>
        <TabPane label="部门架构详情增加">
        	<Form ref="formDepartment" :model="formDepartment" :rules="ruleInline" inline>
		        <FormItem  prop="companyID" >
		            <Input type="text" clearable size="large" :value="formInline.companyID"  style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位编码</span>
		            </Input>
		        </FormItem>
		        <br />
		         <FormItem label="部门名称"  prop="departmentName" >
		            <Select v-model="model1" size="large" style="width:200px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
		         	<br />
	         	<FormItem  prop="departmentCoreCustomer" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentCoreCustomer" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >核心成员</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="departmentMember" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentMember" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >部门成员</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="departmentAddress" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentAddress" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >部门地址</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formDepartment.companyName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位名称</span>
		            </Input>
		        </FormItem>
		        <FormItem label="部门职责:"  prop="depatrmentDuty" >
		            <Input type="textarea" clearable size="large" :autosize="{minRows: 2,maxRows: 5}" v-model="formDepartment.depatrmentDuty" style="width: 500px;" placeholder="请输入相关单位信息">
		            </Input>
		        </FormItem>
		       
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formDepartment')">提交</Button>
		            <Button type="ghost" @click="handleReset('formDepartment')" style="margin-left: 8px">清空</Button>
		        </FormItem>
		    </Form>
        </TabPane>
   </Tabs>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                formInline: {
                    companyHight: '',
                    companyID:"",
					companyName:'',
					companyAddress:'',
					departmentID:'',
					companyProfile:'',
					information:'',
					companyTEL:'',
					bankAccount:'',
					depositBank:'',
					paragraph:'',
					companyCoreCustomer:'',
					companyUsedName:''
                },
                formDepartment: {
                    departmentID: '',
                    companyID:"",
					companyName:'',
					departmentName:'',
					departmentMember:'',
					depatrmentDuty:'',
					departmentCoreCustomer:'',
					depatrmentAddress:''
					
                },
                cityList: [
                    {
                        value: 'New York',
                        label: '人事部'
                    },
                    {
                        value: 'London',
                        label: '外联部'
                    },
                    {
                        value: 'Sydney',
                        label: '财务部'
                    },
                    {
                        value: 'Ottawa',
                        label: '保洁部'
                    },
                    {
                        value: 'Paris',
                        label: '采购部'
                    },
                    {
                        value: 'Canberra',
                        label: '技术部'
                    }
                ],
                model1: '',
                ruleInline: {
                    companyHight: [
                        { required: true, message: '请输入上级单位名称', trigger: 'blur' }
                    ],
                    companyID: [
                        { required: true, message: '请输入相关单位编码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '相关单位编码不足6位', trigger: 'blur' }
                    ],
                    companyName: [
                        { required: true, message: '单位名称不能为空', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('提交失败');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
             
        },
        mounted(){
        		//单位详情
            let params =  new URLSearchParams();
				params.append('companyID',18);
				this.$axios({
				    method: 'post',
				    url: "http://www.hemap.cn:8181/Crm/GetCompanyInfoByID",//GetDepartment
				    data:params
				}).then((res)=>{
					this.formInline=res.data.data[0]
				});
        }
    }
</script>

<style>
</style>