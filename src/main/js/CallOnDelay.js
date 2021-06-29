/**
 * 递归实现延时调用
 * @param x
 */
module.exports = function Log(x) {
    if (x > 10) {
        // over
        return;
    }
    console.log('log... x =', x);

    //

    setTimeout(() => {
        Log(++x);
    }, 2000);
}
