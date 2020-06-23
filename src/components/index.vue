<!-- 系统未构建完毕时为快速查看页面所用 -->
<template>
  <div id="index">

    <van-nav-bar title="系统内各页面直接跳转"></van-nav-bar>

    <br>
    <van-cell title="参观者页面"></van-cell>
    <van-cell title="预约申请" is-link to="Adopt?group=true"></van-cell>
    <van-cell title="查看预约列表" is-link to="AdoptList"></van-cell>
    <van-cell title="登录注册" is-link to="Enter"></van-cell>
    <van-cell title="基础信息修改页面" is-link to="InformationModify"></van-cell>
    <van-cell title="输入手环ID跳转参观页面" is-link to="InputId"></van-cell>
    <van-cell title="参观者功能区" is-link to="PersonalFunction"></van-cell>
    <van-cell title="参观者个人主页" is-link to="PersonalHome"></van-cell>
    <van-cell title="安全信息设置页面" is-link to="SecuritySetting"></van-cell>
    <van-cell title="加入团队" is-link to="TeamAdd?teamId=test"></van-cell>
    <br>
    <van-cell title="管理员页面"></van-cell>
    <van-cell title="总预约的查看页面" is-link to="AllAdopt"></van-cell>
    <van-cell title="总展览的查看页面" is-link to="AllExhibition"></van-cell>
    <van-cell title="展览的展位管理页面" is-link to="BoothManagement"></van-cell>
    <van-cell title="新增管理员页面" is-link to="ControllerAdd"></van-cell>
    <van-cell title="管理员进入页面" is-link to="ControllerEnter"></van-cell>
    <van-cell title="展馆管理页面" is-link to="PavilionManagement"></van-cell>
    <van-cell title="展馆总览页面" is-link to="PavilionOverview"></van-cell>
    <van-cell title="管理员功能区" is-link to="ControllerFunction"></van-cell>
    <van-cell title="管理员个人主页" is-link to="ControllerHome"></van-cell>
<!--    <van-cell title="管理员功能区（全部功能）" is-link to="ControllerFunction?all=1"></van-cell>-->
<!--    <van-cell title="管理员功能区（主办方）" is-link to="ControllerFunction?status=3&all=0"></van-cell>-->
<!--    <van-cell title="管理员功能区（场馆领导）" is-link to="ControllerFunction?status=2&all=0"></van-cell>-->
<!--    <van-cell title="管理员功能区（工作人员）" is-link to="ControllerFunction?status=1&all=0"></van-cell>-->
<!--    <van-cell title="管理员个人主页（场馆领导）" is-link to="ControllerHome?status=2"></van-cell>-->
<!--    <van-cell title="管理员个人主页（其他管理员）" is-link to="ControllerHome"></van-cell>-->
    <br>
    <van-cell title="参观过程页面"></van-cell>
    <van-cell title="手环和人未匹配时参观页面" is-link to="Visit?status=-2"></van-cell>
    <van-cell title="手环服务关闭时参观页面" is-link to="Visit?status=-1"></van-cell>
    <van-cell title="未进入展馆时参观页面" is-link to="Visit?status=0&group=0"></van-cell>
    <van-cell title="进入展馆时个人参观页面" is-link to="Visit?status=1&group=0"></van-cell>
    <van-cell title="进入展馆时负责人参观页面" is-link to="Visit?status=1&group=true"></van-cell>
    <van-cell title="离开展馆报表页面" is-link to="Visit?status=2&group=true"></van-cell>
    <br>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{
        address: "http://39.105.148.52:8081",
        parameter: null,
        setting: null,
        name:"wyx",
        pwd:"wyx847590417",
        date: "2019-07-04",
        pavilionId: 1,
        userId: 2,
      }
    },
    created () {

    }
  }
</script>

<style scoped>
  #index{
    min-height: 100vh;
    width: 100vw;
    background-color: #f9f9f9;
  }
  .van-cell{
    cursor: pointer;
  }
</style>
