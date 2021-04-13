let drawing = document.getElementById("drawing");
if (drawing.getContext) {
    let context = drawing.getContext("2d");

    context.beginPath();

    // 1.绘制外圆
    context.arc(100, 100, 99, 0, 2*Math.PI, false);

    // 2.绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2*Math.PI, false);

    // // 3.绘制分针
    // context.moveTo(100, 100);
    // context.lineTo(100, 15);
    // // 4.绘制时针
    // context.moveTo(100, 100);
    // context.lineTo(35, 100);

    // 移动圆点(0,0)到表盘中心(100,100)
    context.translate(100, 100);
    // 向右顺时针旋转 1 弧度
    // context.rotate(Math.PI/2)
    // 3.绘制分针
    context.moveTo(0, 0);
    context.lineTo(0, -85);
    // 4.绘制时针
    context.moveTo(0, 0);

    context.lineTo(-65, 0);

    context.font = "bold 14px Arial"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText("12", 0, -80)

    context.textAlign = "start"
    context.fillText("12", 0, -60)

    context.textAlign = "end"
    context.fillText("12", 0, -40)
    // 5.描画路径
    context.stroke();
}