'use strict'

/**
 * 传入一个函数，返回一个设定了执行次数的该函数
 * @param {func} callback - 任意函数
 * @param {number} times - 为该函数设定的执行次数
 * @return {func} 传入函数具有特定执行次数的版本
 */

var setCallTime = function(callback, times) {
  var count = times
  return function() {
    if (count > 0) {
      count--
      return callback.apply(this, arguments)
    }
  }
}

// 测试用例

var log = function() {
  console.log.apply(console, arguments[0])
  return arguments[0]
}

var log3 = setCallTime(log, 3)

log3(1)     // 输出1，返回1

log3(2)     // 输出2，返回2

log3(3)     // 输出3，返回3

log3(4)     // 无输出，返回undefined
