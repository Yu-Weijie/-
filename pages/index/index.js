// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: "于玮杰",
    spell: "Yuweijie",
    job: "求职方向",
    exp: "Python or Web工程师",
    tel: "13956654549",
    sex: "男",
    age: "24",
    email: "13956654549@163.com",
    address: "安徽省合肥市巢湖市",
    skill: [{
        name: "Python",
        percent: 80
      },
      {
        name: "Scrapy爬虫",
        percent: 20
      },
      {
        name: "Django框架",
        percent: 20
      },
      {
        name: "Html/Css/Javascript/Jquery/Vue.js/Bootstrap",
        percent: 70
      },
      {
        name: "Linux操作",
        percent: 50
      },
      {
        name: "微信小程序",
        percent: 30
      },

      {
        name: "C",
        percent: 40
      },
      {
        name: "数据结构与算法",
        percent: 50
      },

    ],
    edu: [{
        school: "安庆师范大学（本科）",
        college: "计算机与信息学院",
        major: "物联网工程",
        year: "2015-2019",
        course: "相关课程：高等数学，线性代数，概率论，数据结构，计算机组成原理，计算机网络，操作系统，数据库，C语言。",
        gpa: "GPA:3.0（专业前15%）。",
        awards: "荣誉/奖项：二等奖学金(2015,2017),单项奖学金(2016-2019),优秀共青团员(2016),安徽省物联网大赛一等奖(2018),安徽省双百大赛三等奖(2018),安徽省机器人大赛—数字媒体类三等奖(2019),安徽省计算机设计大赛优胜奖(2017)，国家大学生创新创业训练计划(2016),安庆师范大学“品学兼优”毕业生(2019)。",

      },



    ],
    work: [{
        company: "上海金途信息有限公司（合肥）",
        job: "研发实习生",
        department: "研发部",
        year: "2019年1月 - 2019年3月",
        desc: "负责更改公司后台设备管理系统的需求，实现设备模糊搜索，过滤，排序等功能。负责反向代理功能实现(c-socket，epoll）。搭建简单的http sever。负责重新架设公司网站。",
      },
      {
        company: "大唐邦彦信息有限公司（上海）",
        job: "研发实习生",
        department: "研发部",
        year: "2018年7月 - 2018年8月",
        desc: "学习利用思科交换机模拟器(Cisco Packet Tracer)，了解网络知识，构建网络拓扑，搭建小型局域网，分析处理网络异常。",
      },

    ],
    project: [{
        name: "Django blog网站",
      desc: "http://52.140.247.196:8000/blog/index/",
      },
      {
        name: "Vue todolist demo",
        desc: "https://github.com/Yu-Weijie/Vue-Todolist-demo",
      },
      {
        name: "大学期间比赛 前端网站",
        desc: "http://52.140.247.196/",
      },
      {
        name: "个人简历 微信小程序",
        desc: "求职的个人简历。",
      },
      {
        name: "豆瓣电影Top250 Scrapy爬虫",
        desc: "https://github.com/Yu-Weijie/Scrapy_douban_movie/",
      },
    ],
    certificate: [{
        name: "安徽省计算机二级证书",
      },
      {
        name: "PAT算法考试证书（排名：233/1058）",
      },
      {
        name: "初中数学教师资格证",
      },
      {
        name: "普通话二级甲等",
      },
      {
        name: "大学英语四级证书",
      },
      {
        name: "关爱自闭症儿童环城马拉松证书"
      },


    ]




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width: width,
      height: height
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})