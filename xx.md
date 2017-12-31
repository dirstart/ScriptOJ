## 年末感慨

* * *

转眼之间，一年的最后一天来了。
> 2017，技术界貌似正在飞跃。多年的量变终于引起了质变。
人工智能，区块链。对此，我很激动，激动着有点害怕，害怕中有点紧张，还有点渴望。未来的至高点，未来的风口，自己作为一个小小的菜鸟程序员，能够抢占呢？能否参与吗？改变世界？

##### 火车上，回家后，看完了《神们自己》，想起以前囫囵吞枣看的《北京折叠》，这些科幻，离我们，真的很远吗？也曾看过一些历史穿越装逼小说，活了21个年岁，终于也渐渐感受到历史和人类的伟大。从倾向于文采的那个时代，到实业兴邦的近代，甚至到如今支付宝、比特币刷新实体货币。
>中国现在很强。


* * *

### 不过下面还是来说说时间的format函数吧
> 实业兴邦啊（互联网当然也是实业啦，当时的虚业我猜应该是写诗之类的吧，这里就先不百度了）

####  一.目标程序
>一个时间format函数，用法  format(date,"yyyy-MM-dd hh-mm-ss"),参数可变

```
const format = (value, format = "yyyy-MM-dd hh:mm:ss") => {
    const date = new Date(value);
    const o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    let fmt = format;
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1,
    (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    Object.keys(o).forEach((k) => {
        if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
        (o[k]) :
        ((`00${o[k]}`).substr((`${o[k]}`).length)));
    });
    return fmt;
};
```

* * *

#### 二.知识储备

#####   1.关于Date对象方法
> getDate(1-31),getDay(0-6),getMonth(0-11),getFullYear(getYear已经被弃用了)
getHours(0-23),getMinutes(0-59),getSeconds(0-59)
具体还可参考：http://blog.csdn.net/tomcat_2014/article/details/50514979
#####   2.一些String对象的运用 
> substr(start, length) "slfjlsjf".substr(0,4)  => "slfj"
                       "slfjlsjf".substr(1,4)  => "lfjl"
 substring(start, end) "slfjlsjf".substring(0,4) => "slfj"
                       "slfjlsjf".substring(1,4) => "lfj"
    substring,如果出现第二个参数大于第一个参数的情况，substring会自动更换两个参数的位置。
stringObject.replace(regexp/substr,replacement)
第一个参数，要么是确切的被替换字符，要么是正则表达式匹配的我们暂时不知道的字符
!! 但是，如果不设定全局匹配的话，只会replace第一个被正则选中的
!! 使用正则的方法可以进行全局匹配，字符串的全局方法貌似没有，所以还是用正则好
console.log("hello,world".replace("world","peace")); // hello,peace
console.log("abca".replace(/a/,"9")); // 9bca
###### 以上方法(substr,substring,replace)不改变原数组

* * *

#### 三.庖丁解牛
> 思路，代码
* * *