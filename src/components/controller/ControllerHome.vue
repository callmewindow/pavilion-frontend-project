<!-- 管理员个人主页页面，包括可使用的工具型功能、基本信息展示、功能区跳转和设置部分的展开 -->
<template>
  <div id="controllerHome">

    <van-nav-bar
      title="管理员信息"
    ></van-nav-bar>

    <van-cell-group id="top" >
      <van-field
        :placeholder="username"
        label="用户名"
        right-icon="setting-o"
        disabled
        @click-right-icon="showSetting"></van-field>
    </van-cell-group>
    <van-action-sheet v-model="settingShow" title="辅助功能" style="font-weight: bold">
      <van-cell title="退出登录" @click="exit"></van-cell>
    </van-action-sheet>

    <div id="tools">
      <div id="tools_title">更多工具</div>
      <div class="line"></div>
      <van-grid id="true_tools" :gutter="30" :column-num="3">
        <van-grid-item
          v-show="status === 1"
          icon="ellipsis"
          text="暂无更多工具"
        ></van-grid-item>
        <van-grid-item
          v-show="status === 2 ||status === 3"
          icon="user-circle-o"
          text="新增管理员"
          to="ControllerAdd"
          replace
        ></van-grid-item>
      </van-grid>
      <div class="line"></div>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item name="function" icon="apps-o" replace to="ControllerFunction">功能区</van-tabbar-item>
      <van-tabbar-item name="personal" icon="user-circle-o">个人信息</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  export default {
    name: 'ControllerHome',
    data() {
      return{
        address: "http://39.105.148.52:8081",
        parameter: null,
        setting: null,

        staffId: null,
        status: 0,

        active: "personal",
        username: "暂未登录",
        settingShow: false,
      }
    },
    created() {
      if(this.$cookies.isKey("staffId")){
        this.staffId = this.$cookies.get("staffId");
        this.getStaffInformation();
      }else{
        this.$notify("请先登录再进行相关操作");
        window.setTimeout(this.toEnter,1500);
        return ;
      }
    },
    methods: {
      getStaffInformation() {
        //获取管理员信息
        this.axios
                .get(this.address+"/staff/information/"+this.staffId)
                .then(response=>{
                  console.log(response);
                  this.username = response.data.object.nickname;
                  this.status = response.data.object.position;
                })
                .catch(response=> {
                  console.log(response);
                });
      },
      toEnter() {
        this.$router.replace("ControllerEnter");
      },
      showSetting(){
        this.settingShow = true;
      },
      exit(){
        if(this.$cookies.remove("staffId")){
          this.$notify("账户已退出");
          this.$router.replace("ControllerEnter");
        }else{
          this.$notify("退出失败，请重新尝试");
        }
      },
      getParameter(what){
        let name=what;
        if (!name) return null;
        //获取完整地址
        let after = window.location.search;
        after = after.substr(1) || window.location.hash.split('?')[1];
        if (!after) return null;
        //寻找参数
        if (after.indexOf(name) === -1) return null;
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = decodeURI(after).match(reg);
        if (!r) return null;
        return r[2];
      },
    }
  }
</script>

<style scoped>
  #controllerHome{
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
