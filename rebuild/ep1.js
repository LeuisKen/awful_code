'use strict'

/**
 * 将一个没有层级的扁平对象,转换为树形结构({value, children})结构的对象
 * @param {array} tableData - 一个由对象构成的数组,里面的对象都是扁平的
 * @param {array} route - 一个由字符串构成的数组,字符串为前一数组中对象的key,最终
 * 输出的对象层级顺序为keys中字符串key的顺序
 * @return {array} 保存具有树形结构的对象
 */

var transObject = function(tableData, keys) {
  let hashTable = {}, res = []
  for (let i = 0; i < tableData.length; i++) {
    let arr = res, cur = hashTable
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j], filed = tableData[i][key]
      if (!cur[filed]) {
        let pusher = {
          value: filed
        }, tmp
        if (j !== (keys.length - 1)) {
          tmp = []
          pusher.children = tmp
        }
        cur[filed] = { $$pos: arr.push(pusher) - 1 }
        cur = cur[filed]
        arr = tmp
      } else {
        cur = cur[filed]
        arr = arr[cur.$$pos].children
      }
    }
  }
  return res
}

var tableData = [{
  "name": "推荐",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "推荐",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "推荐",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "推荐",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "新闻",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "新闻",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "新闻",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "搞笑",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "推荐",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "新闻",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "美女",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "推荐",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "视频",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "新闻",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "推荐",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "美女",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "美女",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "搞笑",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "搞笑",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "搞笑",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "推荐",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "推荐",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "视频",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "视频",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "小说",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "小说",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "美女",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "小说",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "搞笑",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "美女",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "视频",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "新闻",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "小说",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "视频",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "推荐",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "小说",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "新闻",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "搞笑",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "美女",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "新闻",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "美女",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "新闻",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "新闻",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "美女",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "搞笑",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "搞笑",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "小说",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "视频",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "小说",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "视频",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "视频",
  "action": "点击Tab",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "视频",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "小说",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "美女",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "推荐",
  "action": "下拉刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "视频",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "小说",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "美女",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "搞笑",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "搞笑",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "小说",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "推荐",
  "action": "点击底部刷新按钮",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "新闻",
  "action": "下拉刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "好物",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载更多"
}, {
  "name": "好物",
  "action": "点击",
  "id": 0,
  "day": "2016-03-02",
  "category": "Tab"
}, {
  "name": "好物",
  "action": "下拉频道刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "美女",
  "action": "下拉刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "好物",
  "action": "点击底部按钮刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "好物",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "加载到底"
}, {
  "name": "视频",
  "action": "下拉刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}, {
  "name": "好物",
  "action": "点击back键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "好物",
  "action": "滑动频道页",
  "id": 0,
  "day": "2016-03-02",
  "category": "进入信息流"
}, {
  "name": "好物",
  "action": "点击home键",
  "id": 0,
  "day": "2016-03-02",
  "category": "退出"
}, {
  "name": "搞笑",
  "action": "下拉刷新",
  "id": 0,
  "day": "2016-03-02",
  "category": "刷新"
}]

var keys = ['category', 'action', 'name']

console.log(transObject(tableData, keys))
