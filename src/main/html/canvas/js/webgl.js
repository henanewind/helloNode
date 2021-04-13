let vertexGlsl = document.getElementById("vertexShader").text,
    fragmentGlsl = document.getElementById("fragmentShader").text;


let drawing = document.getElementById("drawing");
if (drawing.getContext) {
    let gl = null;
    try {
        gl = drawing.getContext("webgl");
        // gl = drawing.getContext("webgl2");
    } catch (e) {
    }
    if (gl) {
        console.log(gl)
        gl.clearColor(0, 0, 0, 1);
        // 将 gl 清楚颜色缓冲区设置为黑色
        gl.clear(gl.COLOR_BUFFER_BIT);

        // 定义视口的坐标系统
        gl.viewport(0, 0, drawing.width, drawing.height);

        // 在视口中（不同于义视口的坐标系统），坐标原点(0, 0)是视口的中心点
        // 左下角是(-1, -1), 右下角是(1, 1)
        // ___________________(1, 1)
        // |                  |
        // |     (0, 0)       |
        // |                  |
 // (-1, -1)--------------------
        // 绑定缓存区
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1.0]), gl.STATIC_DRAW);

        let vertices = new Float32Array([0, 1, 1, -1, -1, -1]),
            vertexSetSize = 2,
            vertexSetCount = vertices.length / vertexSetSize,
            uColor,
            aVertexPosition;

        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        // 创建着顶点色器
        let vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexGlsl);
        gl.compileShader(vertexShader);
        // 创建片段色器
        let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentGlsl);
        gl.compileShader(fragmentShader);
        // 把上面创建的着色器对象链接到着色器程序
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        // 从上下文获得片段着色器程序
        uColor = gl.getUniformLocation(program, 'uColor');
        // 使用下面函数为uniform变量赋值,将片段着色器颜色设为黑色
        gl.uniform4fv(uColor, [0, 0, 0, 1]);

        aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");
        gl.enableVertexAttribArray(aVertexPosition);
        gl.vertexAttribPointer(aVertexPosition, vertexSetSize, gl.FLOAT, false, 0, 0);
        // 使用片段黑色的片段着色器绘制三角形
        gl.drawArrays(gl.TRIANGLES, 0, vertexSetCount);
    } else {
        console.log("不支持webgl")
    }

}