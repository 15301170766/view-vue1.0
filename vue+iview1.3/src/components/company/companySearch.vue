<template>
    
    <div class="companySearch">
    	<Input  size="large" :style="shurukuang" :placeholder="value" v-model="msg">
        	<span slot="prepend">单位</span>
        	<span slot="append">
        		<Button @click="isButton" :style="anniu" >搜索</Button>
        	</span>
    	</Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '请输入相关信息进行搜索',
                shurukuang:{
                	width:"40%",
                	margin:"0 auto",
                	minWidth:"500px",
                },
                anniu:{
                	
                },
                msg:""
            }
        },
        methods: {
            isButton(){
            	if(this.msg==''){
	               		this.$Message.error({
	                	top: 50,
	    				duration: 3,
	    				content:'请填写相关信息'
	                });
            	}else if(this.msg!=""){
            		this.$Message.success('搜索成功');
            	}
            }
        }
    }
</script>
<style type="text/css" scoped="scoped">

</style>