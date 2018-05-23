/**
 * @file plain2Tree
 * @author LeuisKen <leuisken@foxmail.com>
 */

'use strict';

/**
 * 将一个没有层级的扁平对象,转换为树形结构({value, children})结构的对象
 *
 * @param {Array} tableData - 一个由对象构成的数组,里面的对象都是扁平的
 * @param {Array} keys - 一个由字符串构成的数组,字符串为前一数组中对象的key,最终
 * 输出的对象层级顺序为keys中字符串key的顺序
 * @return {Array} 保存具有树形结构的对象
 */
module.exports = function plain2Tree(tableData, keys) {
    let hashTable = {};
    let res = [];
    for (let i = 0; i < tableData.length; i++) {
        let arr = res;
        let cur = hashTable;
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            let filed = tableData[i][key];
            if (!cur[filed]) {
                let pusher = {
                    value: filed
                };
                let tmp;
                if (j !== (keys.length - 1)) {
                    tmp = [];
                    pusher.children = tmp;
                }
                cur[filed] = {
                    $$pos: arr.push(pusher) - 1
                };
                cur = cur[filed];
                arr = tmp;
            }
            else {
                cur = cur[filed];
                arr = arr[cur.$$pos].children;
            }
        }
    }
    return res;
};
