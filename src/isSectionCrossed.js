/**
 * @file 判断多个数据区间是否存在交集
 * @author LeuisKen <leuisken@foxmail.com>
 */

'use strict';

/**
 * 判断多个数据区间是否存在交集
 * 算法设计：STLighter
 *
 * @param {Array<Array<number>>} sections 区间
 * @return {boolean} 是否存在交集
 */
module.exports = function isSectionCrossed(sections) {
    // 先以区间的左端点为依据进行排序
    let sorted = sections.slice().sort((a, b) => a[0] - b[0]);
    // t 用来记录上一个右区间端点，初始值应该要小于最小值
    let t = sorted[0][0] - 1;
    for (let i = 1; i < sorted.length; i++) {
        let [min, max] = sorted[i];
        // 如果上一个右区间端点，大于下一个的左区间端点，认为存在交集
        if (t > min) {
            return true;
        }
        // 更新 t 值
        t = max;
    }
    return false;
};
