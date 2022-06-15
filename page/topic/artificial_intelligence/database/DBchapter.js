//class chapter0
class DBchapter {
    constructor(chapterId) {
        this.storageKeyName = 'chapterList';
        this.chapterId = chapterId;
        this.comments ="";
    }
    /*初始化缓存数据*/
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
}
/*得到全部文章信息*/
    getAllChapterData() {
      var res = wx.getStorageSync(this.storageKeyName);
      if (!res) {
          res = require('../data/chapter.js').chapterList;
      }
      return res;
  }
//获取指定id号的文章数据
    getChapterItemById() {
        var chapterData = this.getAllChapterData();
        var len = chapterData.length;
        for (var i = 0; i < len; i++) {
         if (chapterData[i].chapterId == this.chapterId) {
            return {
                index: i,
                data: chapterData[i]
            }
        }
        }
    }
//
    compareWithTime(value1, value2) {
        var flag = parseFloat(value1.create_time) - parseFloat(value2.create_time);
        if (flag < 0) {
            return 1;
        } else if (flag > 0) {
            return -1
        } else {
            return 0;
        }
    }
    //收藏
    collect() {
        return this.updateProductData('collect');
    }
    //点赞
    up() {
        var data = this.updateProductData('up');
        return data;
    }
    /*发表评论*/
    newComment(newComment) {
        this.updateProductData('comment', newComment);
    }
    //阅读数+1
    addReadingTimes() {
        this.updateProductData('reading');
    }
    //更新本地的点赞、评论信息、收藏、阅读量
    updateProductData(category, newComment) {
        var itemData = this.getProductItemById(),
            productData = itemData.data,
            allProductData = this.getAllProductData();
        switch (category) {
            case 'collect':
                //处理收藏
                if (!productData.collectionStatus) {
                    //如果当前状态是未收藏
                    productData.collectionNum++;
                    productData.collectionStatus = true;
                } else {
                    // 如果当前状态是收藏
                    productData.collectionNum--;
                    productData.collectionStatus = false;
                }
                break;
            case 'up':
                if (!productData.upStatus) {
                    productData.upNum++;
                    productData.upStatus = true;
                } else {
                    productData.upNum--;
                    productData.upStatus = false;
                }
                break;
            case 'comment':
                productData.comments.push(newComment);
                productData.commentNum++;
                break;
            case 'reading':
                productData.readingNum++;
                break;
            default:
                break;
        }
        allProductData[itemData.index] = productData;
        this.execSetStorageSync(allProductData);
        return productData;
    }
    //获取文章的评论数据
    getCommentData() {
      var data = this.getProductItemById();
      console.log(data.comments);
      return data.comments;
  }
};

export { DBchapter }