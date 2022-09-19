new Vue({
    el: '#app',
    data: function () {
        return {
            resume: {
                base: {
                    name: "宁浩骞",
                    sex: "男",
                    birthday: "1998-05",
                    address: "大连",
                    phone: "18742505001",
                    mail: "512926190@qq.com",
                    jobState: "离职",
                    reportState: "随时到岗",
                    experience: "",
                    position: "前端工程师",
                    salary: "6-7K"
                },
                advantage: {
                    content: `
                    熟练使用HTML，CSS，JavaScript进行PC端与移动端开发
                    熟练使用vue全家桶（vue-cli，vue-router，axios，vuex）进行组件化开发
                    熟练使用ajax，掌握axios，JSON数据传输与后端数据交互
                    熟练掌握less预编译处理器
                    熟练使用前端UI框架vant
                    了解MVC&MVVM设计模式与模块化开发流程
                    `
                },
                works: [{
                    company: "大连博智机器人俱乐部",
                    position: "学龄编程教师",
                    duration: "2022.03-2022.08",
                    content: `1. 参与校区日常教学工作
                    2. 给学龄儿童教授编程搭建课程
                    3. 沟通维护会员关系`
                },
                {
                    company: "闻泰科技股份有限公司",
                    position: "IE工程师",
                    duration: "2021.10-2022.01",
                    content: `1.参与试生产线架设工作；
                    2.了解和学习制程，编写SOP并完成对OP作业手法的training；
                    3.完成产线标准工时的制定；
                    4.负责收集制造科生产物料需求，上报领导审批后与公司采购沟通送样及后续采购流程，并定期追踪进度
                    `
                }],
                projects: [
                    {
                        name: "仿头条项目",
                        position: "",
                        duration: "",
                        content: `该项目是一款仿头条编写的程序员论坛，具有首页，登录/注册，个人中心, 频道列表，文章搜索等功能模块。
                        【技术栈】vue-cli +vue+ vue-router + axios + vant + iconfont + dayjs + lodash +json-bigint + less。
                        【模块】登录页、api接口封装、动态路由、本地数据存取。
                        【项目具体功能】
                        1.将项目进行组件合理拆分，使用Vue框架搭配vant进行组件式开发
                        2.登录成功时将获取到的token值存入本地，利用请求拦截器对后续请求进行权限拦截
                        3.通过正则验证对采集的数据进行表单验证
                        5.对项目所需的本地存储、当前最新时间获取、api请求等模块进行封装使用
                        6.使用axios封装,对接口进行封装
                        7.使用vuex对项目数据进行集中管理
                        ● 仓库地址：<a href='https://github.com/Frank98b/toutiao-m' target="_blank">https://github.com/Frank98b/toutiao-m<a/>
                        ● 演示视频：<a href='https://www.bilibili.com/video/BV1tP411H7tq' target="_blank">https://www.bilibili.com/video/BV1tP411H7tq<a/>
                        `
                    },
                     {
                        name: "仿网易云音乐",
                        position: "",
                        duration: "",
                        content: `该项目是一款仿网易云音乐的音乐播放项目，具有首页，歌曲搜索，搜索展示 ，歌曲播放等功能模块。
                        【技术栈】vue-cli +vue+ vue-router + axios + vant 。
                        【模块】登录页、api接口封装、动态路由。
                        【项目具体功能】
                        1.使用反向代理解决跨域,启动本地node服务，拿到网易云音乐数据。
                        2.根据需求，分别创建首页、搜索、布局、播放四个页面组件。
                        3.配置路由规则和对应的路由页面。
                        5.使用postcss实现移动端适配。
                        6.使用axios封装,对接口进行封装。
                        7.使用防抖原理优化搜索页面的搜索结果展示。
                        ● 仓库地址：<a href='https://github.com/Frank98b/cloud_demo' target="_blank">https://github.com/Frank98b/cloud_demo<a/>
                        ● 演示视频：<a href='https://www.bilibili.com/video/BV1MV4y1u7DF' target="_blank">https://www.bilibili.com/video/BV1MV4y1u7DF<a/>`
                    }
                ],
                certificates: ["见习工业工程师", "CET4级证书", ],
                educations: [
                    {
                        school: "大连交通大学",
                        level: "本科",
                        professional: "工业工程",
                        duration: "2017-2021",
                        content: `<span class="fontBold">荣誉：</span>
                        优秀毕业生、校级二等奖学金、校级三等奖学金、校优秀毕业论文。
                        <span class="fontBold">大创经历：</span>
                        1.在大学生工程训练大赛智能+物流搬运机器人赛道，获得辽宁省一等奖。
                        2.参加大学生创新创业大赛。参与项目“基于plant simulation 的生产物流虚拟仿真”，并于期刊《科技创新与应用》发表论文。
                        3.参与项目“生产物流虚拟仿真实验系统”获第八届辽宁省大学生双创年会二等奖。
                        4.2021年第十五届“挑战杯”辽宁省大学生课外学术科技作品竞赛三等奖。
                        5.负责项目“AGV智能停车机器人”，获校级一等奖。
                        `

                    }
                ]
            },
            loading: {}
        }
    }, created() {
        this.loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }, mounted() {
        this.loading.close();
    }
})