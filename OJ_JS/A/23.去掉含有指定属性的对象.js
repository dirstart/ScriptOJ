/**
 * [{time: 123, reason: "test"}, {time: 123, reason: "str"}]
 * 
 * 去掉数组中相同 time 的对象，将其中的相同的 reason 部分拼接在一起
 */

// 思路：先排序，然后合并

/**
 * 
 * @param {string} attr 根据什么对象来排序
 * @param {string} order 正序(从小到大) 或者 反序(从大到小)
 */
function sortByAttr (attr, order) {
  var order = order || "asc";
  if (!attr) {
    return true;
  }
  return function (a, b) {
    if (order === "asc") {
      return a[attr] - b[attr];
    } else {
      return b[attr] - a[attr];
    }
  }
}

function mergeReason (arr) {
  console.log('arr', arr);
  if (!arr.length) {
    return arr;
  }
  var i, result = [].concat(arr), len = result.length;
  // 排序
  result = result.sort(sortByAttr("time"));
  // 筛除
  for (i = len - 1; i >= 1; i--) {
    if (result[i].time === result[i - 1].time) {
      result[i - 1].reason += ";" + result[i].reason;
      result.splice(i, 1);
    }
  }
  console.log("last Result:", result);
  return result;
}

var arr = [{
  time: 123,
  reason: 'buff'
}, {
  time: 888,
  reason: 'test'
}, {
  time: 123,
  reason: '未知原因'
}];

mergeReason(arr);

