let { log } = console
log("hello main.js")
// 移动设备上 返回视口大小，也就是可视页面的大小
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;
log('1.-----------------pageWidth =', pageWidth)
log('1.-----------------pageHeight =', pageHeight)
log(typeof pageWidth)
if (typeof pageWidth != 'number') {
    if (document.compatMode == 'CSS1Compat') {
        // 标准模式，返回布局视口大小（相对于可见视口）
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else {
        // 移动设备把布局视口大小直接保存在body上，
        // 页面放大或缩小时，这些值跟着变化
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}

function isNull(message) {
    return typeof message == "undefined" || message == null || message == ""
}

let winHandler = null;
function openBaidu() {
    winHandler = window.open("http://www.baidu.com", "proxyWindow",
        "width=600,height=400,left=100,top=100,resizable=yes")
    log(winHandler.opener == window)
    // 断开和目标窗口的一切联系，相互之间不能通信，也不能关闭打开的标签页
    // winHandler.opener = null;
}

function resizeWindow() {
    winHandler.resizeTo(800, 600)
}

function moveWindow() {
    winHandler.moveTo(100, 100);
}

function closeWindow() {
    winHandler.close();
    log("winHandler.closed =", winHandler.closed)
}



