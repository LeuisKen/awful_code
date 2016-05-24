'use strict'

/**
 * 传入一个时间戳，返回特定格式化的时间
 * @param {number} timestamp - 指定的时间戳
 * @return {string} 格式化之后的时间
 */

function getReadableDate(timestamp) {
  let timeDate = new Date(timestamp),
      timeNowDate = new Date(),
      num2week = ['一', '二', '三', '四', '五', '六', '日'],
      time = {
        year: timeDate.getFullYear(),
        month: timeDate.getMonth() + 1,
        date: timeDate.getDate(),
        day: num2week[timeDate.getDay()],
        hour: timeDate.getHours() > 10 ? timeDate.getHours() : `0${timeDate.getHours()}`,
        minute: timeDate.getMinutes() > 10 ? timeDate.getMinutes() : `0${timeDate.getMinutes()}`
      },
      timeNow = {
        year: timeNowDate.getFullYear(),
        month: timeNowDate.getMonth() + 1,
        date: timeNowDate.getDate()
      }

  if (timeNow.year !== time.year) {
    return `${time.year}-${time.month}-${time.date} 周${time.day} ${time.hour}:${time.minute}`
  } else if (timeNow.month !== time.month) {
    return `${time.month}-${time.date} 周${time.day} ${time.hour}:${time.minute}`
  } else if (timeNow.date === time.date) {
    return `${time.hour}:${time.minute}`
  } else if (timeNow.date - 1 === time.date) {
    return `昨天 ${time.hour}:${time.minute}`
  } else {
    return `${time.month}-${time.date} 周${time.day} ${time.hour}:${time.minute}`
  }
}
