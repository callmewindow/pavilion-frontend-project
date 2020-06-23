<!-- 参观者个人主页页面，包括工具型功能、基本信息展示、功能区跳转和设置部分的展开 -->
<template>
  <div id="personalHome">

    <van-nav-bar
      title="个人信息"
    ></van-nav-bar>

    <van-cell-group id="top" >
      <van-field
        :placeholder="username"
        label="用户名"
        right-icon="setting-o"
        disabled
        @click-right-icon="showSetting"></van-field>
    </van-cell-group>
    <van-action-sheet v-model="settingShow" title="设置" style="font-weight: bold">
      <van-cell title="基础信息设置" replace to="InformationModify"></van-cell>
      <van-cell title="安全设置" replace to="SecuritySetting"></van-cell>
      <van-cell title="退出登录" @click="exit"></van-cell>
    </van-action-sheet>

    <div id="tools">
      <div id="tools_title">更多工具</div>
      <div class="line"></div>
      <van-grid id="true_tools" :gutter="30" :column-num="3">
        <van-grid-item
          icon="orders-o"
          text="预约列表查询"
          to="AdoptList"
          replace
        ></van-grid-item>
      </van-grid>
      <div class="line"></div>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item name="function" icon="apps-o" replace to="PersonalFunction">功能区</van-tabbar-item>
      <van-tabbar-item name="personal" icon="user-circle-o">个人信息</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  export default {
    name: 'PersonalHome',
    data() {
      return{
        address: "http://39.105.148.52:8081",
        parameter: null,
        setting: null,

        userId: null,

        active: "personal",
        username: "",
        settingShow: false,
      }
    },
    created() {
      if(this.$cookies.isKey("userId")){
        this.userId = this.$cookies.get("userId");
      }else{
        this.$notify("请先登录再进行相关操作");
        window.setTimeout(this.toEnter,1500);
        return ;
      }
      //用户信息获取
      this.axios
        .get(this.address+"/user/information/"+this.userId)
        .then(response=>{
          console.log(response);
          this.username = response.data.nickname;
        })
        .catch(response=> {
          console.log(response);
        });
    },
    methods: {
      toEnter() {
        this.$router.replace("Enter");
      },
      showSetting(){
        this.settingShow = true;
      },
      exit(){
        if(this.$cookies.remove("userId")){
          this.$notify("账户已退出");
          this.$router.replace("Enter");
        }else{
          this.$notify("退出失败，请重新尝试");
        }
      }
    }
  }
</script>

<style scoped>
  #personalHome{
    min-height: 95vh;
    width: 100vw;
    background-color: #f9f9f9;
  }
  .van-cell{
    font-weight: normal;
  }
  #top{
    margin-top: 2vh;
  }
  #tools{
    margin-top: 5vw;
  }
  #tools_title{
    text-align: left;
    margin-left: 1vh;
    font-size: 2.2vh;
    color: gray;
  }
  #true_tools{
    max-width: 90%;
    margin-left: 2.5%;
  }
  .line{
    width: 100vw;
    height: 0.5vh;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    background-color: white;
  }
</style>
