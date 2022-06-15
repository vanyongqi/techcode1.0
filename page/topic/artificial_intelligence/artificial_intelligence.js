// pages/another/scroll-x/index.js

import { DBchapter } from './database/DBchapter.js'

Page({
    data: {
      isRefresh: false,
      currentTab: 0,
      tabList: [
        { name: '收藏'},
        { name: '问题求解' }, 
        { name: '知识、推理、规划'}, 
        { name: '不确定知识与推理'},
        { name: '学习'}, 
        { name: '通讯、感知、行动'},
        { name: '项目'},],
    },
    tabNav(e) {
      let currentTab = e.currentTarget.dataset.index
      this.setData({currentTab})},
    handleSwiper(e) {
      let {current,source} = e.detail
      if (source === 'autoplay' || source === 'touch') {
        const currentTab = current
        this.setData({currentTab})}
    },
    handleTolower(e){ wx.showToast({title: '到底啦'})},
    refresherpulling() {wx.showLoading({title: '刷新中'})
        setTimeout(() => {
            this.setData({isRefresh: false})
            wx.showToast({title: '加载完成'})
        }, 1500)
    },

  /////////////////////////////////////////////////////////////////////////////////////
  onLoad:function(){
    var dbChapter = new DBchapter();
    this.setData({
      chapterList:dbChapter.getAllChapterData()
    });

  },
  onTapToDetail(event){
    var chapterId = event.currentTarget.dataset.chapterId;
    wx.navigateTo({
      url: 'chapter_detail/chapter_detail?id='+chapterId,
    })
  },
   
  })