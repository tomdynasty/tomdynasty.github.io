const d = new Date();
const weekday = new Array(7);
weekday[0] = '星期日';
weekday[1] = '星期一';
weekday[2] = '星期二';
weekday[3] = '星期三';
weekday[4] = '星期四';
weekday[5] = '星期五';
weekday[6] = '星期六';
const hours = d.getHours();
// eslint-disable-next-line no-nested-ternary
const time = hours < 12 ? '上午' : hours < 18 ? '下午' : '晚上';

const currentWeekDay = weekday[d.getDay()];
const currentWeekDayTime = `${currentWeekDay}${time}`;

export default currentWeekDayTime;
