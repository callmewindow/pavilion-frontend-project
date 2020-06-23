//本文件为测试前后端交互的api使用，请不要轻易调用此方法
function api_test() {
  //用户部分

  //用户登录（账号密码）
  this.axios
    .get(this.address+"/user/login?nickname="+this.name+"&password="+this.pwd)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //用户登录（手机号登录）
  this.axios
    .get(this.address+"/user/message/login?phone="+this.phone+"&code="+this.code)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //用户注册（完整）
  this.parameter = {
    nickname: "wyx",
    password: "wyx847590417",
    phone: "18201314307",
    code: "535267"
  };
  this.axios
    .post(this.address+"/user/message/register",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //用户注册（简化）
  this.parameter = {
    nickname: "wyx",
    password: "wyx847590417",
  };
  this.axios
    .post(this.address+"/user/register",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });


  //用户信息获取
  this.axios
    .get(this.address+"/user/information/"+this.userId)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //用户信息修改
  this.parameter = {
    userId: 2,
    nickname: "wyx",
    password: "wyx847590417",
    phone: "18201314307",
    code: "535267"
  };
  this.axios
    .put(this.address+"/user/information/modify",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //展馆自身部分

  //获取全部展馆信息
  this.axios
    .get(this.address+"/pavilion/information/all")
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取指定展馆基本信息
  this.axios
    .get(this.address+"/pavilion/information/"+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取指定展馆开始有预约的日期
  this.axios
    .get(this.address+"/pavilion/reservation/date/previous?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取当前所有展馆正在举行的展馆内容
  this.axios
    .get(this.address+"/pavilion/all/arrangement/now")
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //展览相关部分

  //添加新的展览
  this.parameter = {
    pavilionId:1,
    sponsorId:1,
    startDate:"2019-08-01",
    endDate:"2019-08-13",
    morningTime:"9:00-12:00",
    afternoonTime:"13:00-17:00",
    morningMaxPerson:13,
    afternoonMaxPerson:30,
    arrangementName:"测试展览一号",
    introduction:"展览介绍一号",
    schedule:"4233421",
    boothNumber: 4
  };
  this.axios
    .post(this.address+"/arrangement/add",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //查看某主办方拥有的所有管理
  this.axios
    .get(this.address+"/arrangement/sponsor/all?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //查看某展览的详情
  this.axios
    .get(this.address+"/arrangement/information?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //修改某展览的信息
  this.parameter = {
    arrangementId:1,
    startDate:"2019-08-01",
    endDate:"2019-08-13",
    morningTime:"9:00-12:00",
    afternoonTime:"13:00-17:00",
    morningMax:13,
    afternoonMax:30,
    arrangementName:"测试展览一号",
    introduction:"展览介绍一号",
    schedule:"4233421"
  };
  this.axios
    .post(this.address+"/arrangement/modify",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取展览详细信息的导出pdf
  this.axios
    .get(this.address+"/arrangement/information/pdf?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取当前所有展馆曾经举办过的展览内容
  this.axios
    .get(this.address+"/arrangement/previous")
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取所有的展览信息
  this.axios
    .get(this.address+"/arrangement/all")
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //指定某展览强行结束
  this.axios
    .put(this.address+"/arrangement/status?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //预约有关部分

  //获取展馆可预约日期及最大人数和剩余人数
  this.axios
    .get(this.address+"/arrangement/date?pavilionId="+this.pavilionId)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取日期可预约时间段及最大人数和剩余人数
  this.axios
    .get(this.address+"/arrangement/date/time?date="+this.date+"&pavilionId="+this.pavilionId)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //新增预约
  this.parameter = {
    pavilionId: 1,
    userId: 1,
    date: "2019-07-04",
    time: "09:00-17:00",
    number: 1,
  };
  this.axios
    .post(this.address+"/reservation/add",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获得某团队预约的详细信息
  this.axios
    .get(this.address+"/teamReservation/information/"+this.teamId)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //个人加入团队
  this.parameter = {
    teamReservationId: 1,
    userId: 1,
    code: "125484"
  };
  this.axios
    .post(this.address+"/composition/add",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获得某用户的所有预约
  this.axios
    .get(this.address+"/user/reservation/all?userId="+this.userId)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取某展馆某日期的所有预约
  this.axios
    .get(this.address+"/pavilion/reservation/date/all?pavilionId="+this.id+"&date="+this.date)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //展馆相关部分

  //添加新的展台
  this.parameter = {
    arrangementId: 1,
    introduction: "这是一个测试的展台",
    boothName: "测试站台1"
  };
  this.axios
    .post(this.address+"/booth/add",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //修改展台内容
  this.parameter = {
    boothId: 1,
    likeNumber:-1,
    administrator:"展位负责人一号",
    introduction: "这是一个测试的展台",
    boothName: "测试站台1"
  };
  this.axios
    .put(this.address+"/booth/modify",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取某展览的所有展台信息
  this.axios
    .get(this.address+"/booth/information?arrangementId="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //添加展台评论
  this.parameter = {
    boothId:1,
    userId:1,
    comment:"这是一个测试的评论"
  };
  this.axios
    .post(this.address+"/booth/comment/add",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取某展台的所有评论
  this.axios
    .get(this.address+"/booth/comment/all?boothId="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //删除指定评论
  this.axios
    .delete(this.address+"/booth/comment/delete?id="+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //管理员相关API

  //管理员注册
  this.parameter = {
    nickname:"loulis",
    password:"qw784561",
    position:1
  };
  this.axios
    .post(this.address+"/staff/register",this.parameter)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //管理员登录
  this.axios
    .get(this.address+"/staff/login?nickname="+this.username+"&password="+this.password)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

  //获取管理员信息
  this.axios
    .get(this.address+"/staff/information/"+this.id)
    .then(response=>{
      console.log(response);
    })
    .catch(response=> {
      console.log(response);
    });

}
