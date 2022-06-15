// pages/special_product/product_detail/product_detail.js

import {DBchapter}from '../database/DBchapter.js'
Page({
  data: {

  },
  onLoad: function (options) {
    console.log("!!!!!")
    var chapterId = options.id;
    this. chapterId =  chapterId;
    this.dbchapter = new DBchapter(chapterId);
    this. chapterData = this.dbchapter.getChapterItemById().data;

    this.setData({
      chapter: this.chapterData,
    })
  },



})