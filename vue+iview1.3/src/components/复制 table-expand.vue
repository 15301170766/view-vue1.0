<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}age:{{ row.age }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        },
        mounted(){
        	console.log(this.row.age)
        	let params =  new URLSearchParams();
				params.append('companyID',this.row.age);
				this.$axios({
				    method: 'post',
				    url: "http://www.hemap.cn:8181/Crm/GetCompanyInfoByID",//GetDepartment
				    data:params
				}).then((res)=>{
//					this.companyDetails=res.data.data[0]
					console.log(res.data.data[0])
				});
        }
    };
</script>