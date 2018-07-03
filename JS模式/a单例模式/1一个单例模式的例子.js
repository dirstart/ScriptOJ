// 一个类返回一个对象的引用。   保持永远是同一个(只有一个实例)。
var singleTon = (function() {
    var unique = 3;
    function getUnique() {
        console.log(unique);
        return unique;
    }
    return {
        getUnique: getUnique
    }
})();

var f1 = singleTon;

var f2 = singleTon;

console.log(f1 === f2);