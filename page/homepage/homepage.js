Page({

    /* 获取用户个人信息*/
    data: {
        user: [],
        user_openid: [],
        weather: [],
        weather_index: 0,
        falg: false,
        login: '请登录',
        dec: false
    },
    jump_index: function (event) {
        wx.navigateTo({
            url: '../index/index',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
        wx.navigateBack({
            delta: 1,
        })
    },
    // jump1
    onTapJump_1: function (event) {
        wx.navigateTo({
            url: '../predict_caomei/predict_caomei',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
    },
    //判断该用户是否已经订阅消息，如果已经订阅则不需要在进行授权
    decide_shouquan() {
        let that = this
        //1.先查询数据是否已经存在
        wx.cloud.callFunction({
            name: 'dyOpenid',
            data: {
                method: 'select_openid',
                openid: that.data.user_openid._openid
            }
        }).then(res => {
            console.log("count", res.result.openid_number.total)
            if (res.result.openid_number.total == 0) {
                that.setData({
                    dec: true
                })

            } else {
                that.setData({
                    dec: false
                })
            }
        }).catch(error => {
            console.log("错误", error)
        })

    },
    //2.获取用户的授权
    shouquan() {
        let that = this
        wx.requestSubscribeMessage({
            tmplIds: ['2JFtxjBP09qqJQCX5GxiBUZfBNmkvT8gTEJc-NwdiDo', '2xNmXvbJDmuG58Wd0H6cQm0QOkTY4JtKK3iqJ1mGrso', 'rLqU0FPK6kYrPJQSVkYAiryfmERKEEvJMqvukNNHwKc'],
            success(res) {
                console.log("授权成功", res)
                //授权成功将openid加入到数据库中
                wx.cloud.callFunction({
                    name: 'dyOpenid',
                    data: {
                        method: 'add_dyOpenid',
                        openid: that.data.user_openid._openid,
                        biaoshi:0
                    }
                }).then(res => {
                    console.log("增加成功", res)
                }).catch(error => {
                    console.log("增加失败", error)
                })
            },
            fail(res) {
                console.log("授权失败", res)
            }
        })
    },
    // jump2:
    onTapJump_2: function (event) {
        let that = this
        //如果用户没有授权，进行授权
        if (that.data.dec == true) {
            that.shouquan()
        }
        wx.switchTab({
            url: '../index/index',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
    },
    // jump3:跳转到发布消息
    onTapJump_3: function (event) {
        wx.navigateTo({
            url: '../shequs/shequs',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
    },
    // jump4:打开健康码页面
    onTapJump_4: function (event) {
        wx.navigateToMiniProgram({
            appId: 'wx8f446acf8c4a85f5',
            path: '',
            envVersion: 'release',// 打开正式版
            success(res) {
                // 打开成功
            },
            fail: function (err) {
                console.log(err);
            }
        })
        wx.navigateBack({
            delta: 1,
        })
    },
    onTapJump_5: function (event) {
        wx.navigateTo({
            url: '../moudle/lot/lot',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
    },
    onTapJump_6: function (event) {
        wx.navigateTo({
            url: '../moudle/block_source/block_source',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })

    },
    onTapPolicy_1: function (event) {
        wx.navigateTo({
            url: '../homepage_bottom/policy1/policy1',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })

    },
    onTapPolicy_2: function (event) {
        wx.navigateTo({
            url: '../homepage_bottom/policy2/policy2',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })

    },
    onTapPolicy_3: function (event) {
        wx.navigateTo({
            url: '../homepage_bottom/policy3/policy3',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })

    },
    onTapStudy_1: function (event) {
        wx.navigateTo({
            url: '../homepage_bottom/study/study',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })

    },

    onTapJump_mini_1: function (event) {
        wx.navigateToMiniProgram({
            appId: 'wxd2ade0f25a874ee2',
            path: '',
            envVersion: 'release',// 打开正式版
            success(res) {
                // 打开成功
            },
            fail: function (err) {
                console.log(err);
            }
        })
    },
    onLoad() {
        let that = this
        that.get_user()
        console.log("user.nickname", that.data.user.nickName)
        //天气最后再用
        let myAmapFun = new amapFile.AMapWX({ key: '9ffb25971cbb742f86b690806a9dfc50' });
        myAmapFun.getWeather({
            success: function (data) {
                console.log("天气", data)
                that.setData({
                    weather: data
                })
                //切换天气图标
                if (data.weather.data == '晴') {
                    that.setData({
                        weather_index: 0
                    })
                } else if (data.weather.data == '多云') {
                    that.setData({
                        weather_index: 1
                    })
                } else if (data.weather.data == '阴') {
                    that.setData({
                        weather_index: 2
                    })
                } else {
                    that.setData({
                        weather_index: 3
                    })
                }
            },
            fail: function (info) {
                //失败回调
                console.log(info)
            }
        })
    },
    //跳转到我的界面
    button_my() {
        wx.switchTab({
            url: '../my/my',

            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })
    },
    //注册
    register() {
        let that = this

        wx.getUserProfile({
            desc: '了解用户,用于买菜种菜消息发布', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (userInfo) => {
                wx.showToast({
                    title: '登录中',
                })
                console.log(userInfo)
                db.collection('user').add({
                    data: {
                        userInfo: userInfo.userInfo
                    }
                }).then(user => {
                    wx.hideLoading()
                    wx.showToast({
                        title: '登录成功',
                    })
                    that.get_user()
                })
            }
        })
    },
    //登录
    get_user() {
        let that = this
        db.collection('user').get().then(res => {
            if (res.data.length > 0) {
                console.log("----------获取的用户信息", res.data[0])
                that.setData({
                    user: res.data[0].userInfo,
                    user_openid: res.data[0],
                    falg: true
                })
                //判断用户是否已经授权订阅消息
                that.decide_shouquan()
            } else {
                that.setData({
                    falg: false
                })
                //that.register()
            }
        })
    },
})