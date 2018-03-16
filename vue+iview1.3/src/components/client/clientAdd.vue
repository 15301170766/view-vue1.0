<template>
	<div >
		<Tabs type="card">
        <TabPane label="客户信息新增">
        	<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
		        <FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >姓名</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyID" >
		            <Input type="text" clearable size="large" v-model="formInline.companyID" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >年龄</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >民族</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyUsedName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyUsedName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >出生地</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyAddress" >
		            <Input type="text" clearable size="large" v-model="formInline.companyAddress" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >籍贯</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="information" >
		            <Input type="text" clearable size="large" v-model="formInline.information" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >手机号码</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="paragraph" >
		            <Input type="text" clearable size="large" v-model="formInline.paragraph" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >个人邮箱</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyTEL" >
		            <Input type="text" clearable size="large" v-model="formInline.companyTEL" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >微信</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyCoreCustomer" >
		            <Input type="text" clearable size="large" v-model="formInline.companyCoreCustomer" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >qq</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyProfile" >
		            <Input type="text" clearable size="large" v-model="formInline.companyProfile" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >身份证号码</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="depositBank" >
		            <Input type="text" clearable size="large" v-model="formInline.depositBank" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >健康状况</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="bankAccount" >
		            <Input type="text" clearable size="large" v-model="formInline.bankAccount" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >个人习惯</span>
		            </Input>
		        </FormItem>	<FormItem  prop="bankAccount" >
		            <Input type="text" clearable size="large" v-model="formInline.bankAccount" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >现任公司</span>
		            </Input>
		        </FormItem>	<FormItem  prop="bankAccount" >
		            <Input type="text" clearable size="large" v-model="formInline.bankAccount" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >担任职务</span>
		            </Input>
		        </FormItem>	<FormItem  prop="bankAccount" >
		            <Input type="text" clearable size="large" v-model="formInline.bankAccount" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >办公电话</span>
		            </Input>
		        </FormItem>	
		        <br />	
		        <FormItem label="客户评价:"  prop="depatrmentDuty" >
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
        <TabPane label="工作经历新增">
        	<Form ref="formDepartment" :model="formDepartment" :rules="ruleInline" inline>
		        <FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >姓名</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyID" >
		            <Input type="text" clearable size="large" v-model="formInline.companyID" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >工作地点</span>
		            </Input>
		        </FormItem>
		         <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >工作时间</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyUsedName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyUsedName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >单位名称</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyAddress" >
		            <Input type="text" clearable size="large" v-model="formInline.companyAddress" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >担任职务</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="information" >
		            <Input type="text" clearable size="large" v-model="formInline.information" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >负责项目</span>
		            </Input>
		        </FormItem>
		        <br />	
		        <FormItem label="备注:"  prop="depatrmentDuty" >
		            <Input type="textarea" clearable size="large" :autosize="{minRows: 2,maxRows: 5}" v-model="formDepartment.depatrmentDuty" style="width: 500px;" placeholder="请输入相关学校信息">
		            </Input>
		        </FormItem>
		       
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formDepartment')">提交</Button>
		            <Button type="ghost" @click="handleReset('formDepartment')" style="margin-left: 8px">清空</Button>
		            <Button type="success"  style="margin-left: 8px">新增</Button>
		            
		        </FormItem>
		    </Form>
        </TabPane>
        <TabPane label="学习经历新增">
        	<Form ref="formDepartment" :model="formDepartment" :rules="ruleInline" inline>
		        <FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >姓名</span>
		            </Input>
		        </FormItem>
		        <br />
		         <FormItem  prop="companyID" label="学习时间">
		             <!--<DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>-->
		             <!--<DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>-->
		              <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
		        </FormItem>
		        <br />
		         <FormItem  prop="companyName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >学校名称</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyUsedName" >
		            <Input type="text" clearable size="large" v-model="formInline.companyUsedName" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >学习专业</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="companyAddress" >
		            <Input type="text" clearable size="large" v-model="formInline.companyAddress" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >学校地址</span>
		            </Input>
		        </FormItem>
		        <FormItem  prop="information" >
		            <Input type="text" clearable size="large" v-model="formInline.information" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >专业导师</span>
		            </Input>
		        </FormItem>
		        <br />	
		        <FormItem label="备注:"  prop="depatrmentDuty" >
		            <Input type="textarea" clearable size="large" :autosize="{minRows: 2,maxRows: 5}" v-model="formDepartment.depatrmentDuty" style="width: 500px;" placeholder="请输入相关学校信息">
		            </Input>
		        </FormItem>
		       
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formDepartment')">提交</Button>
		            <Button type="ghost" @click="handleReset('formDepartment')" style="margin-left: 8px">清空</Button>
		            <Button type="success"  style="margin-left: 8px">新增</Button>
		        </FormItem>
		    </Form>
        </TabPane>
        <TabPane label="兴趣爱好新增">
        	<Form ref="formDepartment" :model="formDepartment" :rules="ruleInline" inline>
        		<FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >姓名</span>
		            </Input>
				        </FormItem>
				        <br />
		        <FormItem label="兴趣爱好 ">
		        		
				        <br />	
				         <FormItem  prop="companyName" label="分类1">
				           <Select v-model="model1" size="large" style="width:200px">
						        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
				        </FormItem>
				        <FormItem  prop="companyName" label="分类2">
				           <Select v-model="model1" size="large" style="width:200px">
						        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
				        </FormItem>
				        <FormItem  prop="companyUsedName" label="其他" >
				            <Input type="text" clearable size="large" v-model="formInline.companyUsedName"  placeholder="请输入相关单位信息">
				             
				            </Input>
				        </FormItem>
		        </FormItem>
		         <FormItem  prop="companyUsedName" label="选择" style="margin-top: 30px;" >
				            <RadioGroup v-model="animal">
								        <Radio label="分类2"></Radio>
								        <Radio label="其他"></Radio>
								    </RadioGroup>
								   
				    </FormItem>
		        <FormItem  prop="companyUsedName" label="选择" style="margin-top: 30px;" >
				        
								     <Alert type="warning" show-icon>
								        如果分类2中没有选项
								        <template slot="desc">
								        请您选择其他，并填入正确选项
								    </template>
								    </Alert>
				    </FormItem>
		      
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formDepartment')">提交</Button>
		            <Button type="ghost" @click="handleReset('formDepartment')" style="margin-left: 8px">清空</Button>
		            <Button type="success"  style="margin-left: 8px">新增爱好</Button>
		        </FormItem>
		    </Form>
        </TabPane>
        <TabPane label="亲朋好友新增">
        	<Form ref="formDepartment" :model="formDepartment" :rules="ruleInline" inline>
        		<FormItem  prop="companyHight" >
		            <Input type="text" clearable size="large" v-model="formInline.companyHight" style="width: 500px;" placeholder="请输入相关单位信息">
		                <span slot="prepend" >姓名</span>
		            </Input>
				        </FormItem>
				        <br />
		        <FormItem label="兴趣爱好 ">
		        		
				        <br />	
				         <FormItem  prop="companyName" label="分类1">
				           <Select v-model="model1" size="large" style="width:200px">
						        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
				        </FormItem>
				        <FormItem  prop="companyName" label="分类2">
				           <Select v-model="model1" size="large" style="width:200px">
						        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
				        </FormItem>
				        <FormItem  prop="companyUsedName" label="其他" >
				            <Input type="text" clearable size="large" v-model="formInline.companyUsedName"  placeholder="请输入相关单位信息">
				             
				            </Input>
				        </FormItem>
		        </FormItem>
		         <FormItem  prop="companyUsedName" label="选择" style="margin-top: 30px;" >
				            <RadioGroup v-model="animal">
								        <Radio label="分类2"></Radio>
								        <Radio label="其他"></Radio>
								    </RadioGroup>
								   
				    </FormItem>
		        <FormItem  prop="companyUsedName" label="选择" style="margin-top: 30px;" >
				        
								     <Alert type="warning" show-icon>
								        如果分类2中没有选项
								        <template slot="desc">
								        请您选择其他，并填入正确选项
								    </template>
								    </Alert>
				    </FormItem>
		      
		        <br />
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formDepartment')">提交</Button>
		            <Button type="ghost" @click="handleReset('formDepartment')" style="margin-left: 8px">清空</Button>
		            <Button type="success"  style="margin-left: 8px">新增关系</Button>
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
            	
                animal: '分类2',
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
            }
        }
    }
</script>

<style scoped="scoped">

</style>