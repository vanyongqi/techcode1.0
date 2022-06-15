Page({
    data: {
        functions: [{
            name: '组成原理',
            numbers: '',
            iconpath: 'http://flat-icon-design.com/f/f_event_94/s256_f_event_94_0bg.png',
            classifier: "Computer",
            color: "orange",
            path: ""
          },
          {
            name: '操作系统',
            numbers: "",
            color: "cyan",
            iconpath: 'http://flat-icon-design.com/f/f_event_55/s256_f_event_55_0bg.png',
            classifier: "System",
            path: "",
          },
          {
            name: '数据结构',
            numbers: '',
            color: "red",
            iconpath: 'http://flat-icon-design.com/f/f_business_78/s256_f_business_78_0bg.png',
            classifier: "Algorithm",
            path: "",
          },
          {
            name: '网络通信',
            numbers: '',
            color: "purple",
            iconpath: 'http://flat-icon-design.com/f/f_business_96/s256_f_business_96_0bg.png',
            classifier: "Network",
            path: "",
          },
          {
            name: '人工智能',
            numbers: '',
            color: "azure",
            iconpath: 'http://flat-icon-design.com/f/f_event_99/s256_f_event_99_0bg.png',
            classifier: "AI",
            path: "",
          },
          {
            name: '区块链',
            numbers: '',
            color: "ivory",
            iconpath: 'http://flat-icon-design.com/f/f_business_63/s256_f_business_63_0bg.png',
            classifier: "Blockchain",
            path: "",
          },
          {
            name: '数学',
            numbers: '',
            color: "gold",
            iconpath: 'http://flat-icon-design.com/f/f_object_71/s256_f_object_71_0bg.png',
            classifier: "Math",
            path: "",
          },
          {
            name: '英语',
            numbers: '',
            color: "cornflowerblue",
            iconpath: 'http://flat-icon-design.com/f/f_business_48/s256_f_business_48_0bg.png',
            classifier: "Language",
            path: "",
          },
          {
            name: '八股文',
            numbers: '',
            color: "mistyrose",
            iconpath: 'http://flat-icon-design.com/f/f_object_128/s256_f_object_128_0bg.png',
            classifier: "Knowledge",
            path: "",
          },
          {
            name: '实用',
            numbers: '',
            color: "sliver",
            iconpath: 'http://flat-icon-design.com/f/f_object_107/s256_f_object_107_0bg.png',
            classifier: "Utilities",
            path: "",
          }
        ],
    },
    // jump3:跳转到发布消息
    handle_function: function (event) {
      var index = event.currentTarget.dataset.id
      if(index ==0){
        wx.navigateTo({
            url: '../topic/computer_archtecture/computer_archtecture',
            success: function (res) {
            },
            fail: function () { },
            complete: function () { }
        })}
        else if (index == 1){
            wx.navigateTo({
                url: '../topic/operating_system/operating_system',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 2){
            wx.navigateTo({
                url: '../topic/structure_algorithm/structure_algorithm',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 3){
            wx.navigateTo({
                url: '../topic/computer_network/computer_nework',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 4){
            wx.navigateTo({
                url: '../topic/artificial_intelligence/artificial_intelligence',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 5){
            wx.navigateTo({
                url: '../topic/block_chain/blockchain',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 6){
            wx.navigateTo({
                url: '../topic/math/math',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 7){
            wx.navigateTo({
                url: '../topic/english/english',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 8){
            wx.navigateTo({
                url: '../topic/language_eight_templates/language_eight_templates',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
        else if (index == 9){
            wx.navigateTo({
                url: '../topic/utilities/utilities',
                success: function (res) {
                },
                fail: function () { },
                complete: function () { }
            }) 
        }
    },

})