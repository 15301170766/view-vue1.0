<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.zhuyao{
	min-height: calc(100vh - 70px);
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="0-1" theme="light" width="auto" :open-names="['0']">
                    	<Submenu name="0">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                搜索页
                            </template>
                            <MenuItem name="0-1">
                            	<router-link to="/searchDetails">查信息</router-link>
                            </MenuItem>
                            <MenuItem name="0-2">
                            	<router-link to="/searchRelation">高级查询</router-link>
                            </MenuItem>
                        </Submenu>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                单位信息管理
                            </template>
                            <MenuItem name="1-1">
                            	<router-link to="/companyinfo">单位信息列表</router-link>
                            </MenuItem>
                            <MenuItem name="1-2">
                            	<router-link to="/companySearch">单位信息搜索</router-link>
                            </MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                客户信息管理
                            </template>
                            <MenuItem name="2-1">
                            	<router-link to="/clientinfo">客户信息列表</router-link>
                            	
                            	</MenuItem>
                            <MenuItem name="2-2">客户信息搜索</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                学校信息管理
                            </template>
                            <MenuItem name="3-1">
                            	<router-link to="/schoolinfo">学校信息列表</router-link>
                            </MenuItem>
                            <MenuItem name="3-2">
                            	<router-link to="/tubiao">学校信息搜索</router-link>
                            	
                            	
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}" class="zhuyao">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem to="/companyinfo">company</BreadcrumbItem>
                        <BreadcrumbItem to="/companySearch">companySearch</BreadcrumbItem>
                        <BreadcrumbItem to="/searchDetails">searchDetails</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
//      router
    }
</script>
