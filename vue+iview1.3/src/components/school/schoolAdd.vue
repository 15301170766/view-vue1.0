<template>
	<div >
		<Tabs type="card">
        <TabPane label="学校信息增加">
        	<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
		         <FormItem  prop="companyID" >
		            <Input type="text" clearable size="large" v-model="formInline.companyID" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >学校编码</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyName" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >学校名称</span>
		            </Input>
		        </FormItem>
		        <br />
		        <FormItem  prop="companyUsedName" label="成立年份" >
		            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
		        </FormItem>
		        <FormItem label="院校级别"  prop="departmentName" >
		            <Select v-model="model1" size="large" style="width:200px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
		        <FormItem label="学校类型"  prop="departmentName" >
		            <Select v-model="model1" size="large" style="width:200px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
		        <br />
		        <FormItem  prop="companyAddress" >
		            <Input type="text" clearable size="large" v-model="formInline.companyAddress" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >学校地址</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="information" >
		            <Input type="text" clearable size="large" v-model="formInline.information" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >现任校长</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="paragraph" >
		            <Input type="text" clearable size="large" v-model="formInline.paragraph" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >学校电话</span>
		            </Input>
		        </FormItem>
		       <br />
		        <FormItem label="学校简介:"  prop="depatrmentDuty" >
		            <Input type="textarea" clearable size="large" :autosize="{minRows: 2,maxRows: 5}" v-model="formDepartment.depatrmentDuty" style="width: 500px;" placeholder="请输入相关学校信息">
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
		            <Input type="text" clearable size="large" :value="formInline.companyID"  style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >学校编码</span>
		            </Input>
		        </FormItem>
		        <br />
		         <FormItem label="专业名称"  prop="departmentName" >
		            <Select v-model="model1" size="large" style="width:200px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
		         	<br />
	         	<FormItem  prop="departmentCoreCustomer" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentCoreCustomer" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >专业导师</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="departmentMember" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentMember" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >专业毕业生</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="departmentAddress" >
		            <Input type="text" clearable size="large" v-model="formDepartment.departmentAddress" style="width: 500px;" placeholder="请输入相关学校信息">
		                <span slot="prepend" >优秀成员</span>
		            </Input>
		        </FormItem>
		        <br />	
		        <FormItem label="专业职责:"  prop="depatrmentDuty" >
		            <Input type="textarea" clearable size="large" :autosize="{minRows: 2,maxRows: 5}" v-model="formDepartment.depatrmentDuty" style="width: 500px;" placeholder="请输入相关学校信息">
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
                        { required: true, message: '请输入上级学校名称', trigger: 'blur' }
                    ],
                    companyID: [
                        { required: true, message: '请输入相关学校编码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '相关学校编码不足6位', trigger: 'blur' }
                    ],
                    companyName: [
                        { required: true, message: '学校名称不能为空', trigger: 'blur' }
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
            }
        }
    }
</script>

<style>
</style>