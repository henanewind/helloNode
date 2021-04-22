/**
 * 功率因数转角度
 * @param Xx  接线方式：三相三线有功、三相四线有功
 * @param Hfy  合分元信息：A/B/C/''
 * @param Xw   感性：L  容性：C
 */
function factorToAngle(Xx, Hfy, Xw) {
    let I_Data = 0;
    let Wg = pos("无功", Xx) > 0;
    let Sxs = pos('三相三', Xx) > 0;
    // 默认为感性
    let Rx = false;

    if (Xw.length == 0) {
        return 0;
    }
    let S = Xw;
    let I = pos('L', Xw);
    if (I > 0) {
        S = S.substring(0, I - 1);
    }

    I = pos('C', Xw);
    if (I > 0) {
        Rx = true;
        S = S.substring(0, I - 1);
    }

    if (S == '1.0') {
        Rx = false;
    }

    if (!Wg) // 有功表
    {
        I_Data = Math.acos(strToFloat(S));
        I_Data = 180 * I_Data / Math.PI;
        if (Rx) {
            I_Data = -I_Data;
        }
    }

    if (Wg) {
        I_Data = Math.asin(strToFloat(S));
        I_Data = 180 * I_Data / Math.PI;
        if (Rx) {
            I_Data = -I_Data;
        }
        if (Sxs) {
            if ((Hfy == 'A') || (Hfy == 'a')) {
                I_Data = Math.acos(strToFloat(S));
                I_Data = 180 * I_Data / Math.PI;
                if (Rx) {
                    I_Data = 60 - I_Data;
                } else {
                    I_Data = 60 + I_Data;
                }
            } else if ((Hfy == 'C') || (Hfy == 'c')) {
                I_Data = Math.asin(strToFloat(S));
                I_Data = 180 * I_Data / Math.PI;
                if (Rx) {
                    I_Data = 120 - I_Data;
                } else {
                    I_Data = 120 + I_Data;
                }
            }
        } else if ((Hfy.toUpperCase() == 'A') || (Hfy.toUpperCase() == 'B') || (Hfy.toUpperCase() == 'C')) {
            I_Data = Math.acos(strToFloat(S));
            I_Data = 180 * I_Data / Math.PI;
            if (Rx) {
                I_Data = 90 - I_Data;
            } else {
                I_Data = 90 + I_Data;
            }
        }
        // 范围修正 0 ~ 360
        if (I_Data > 360) {
            I_Data -= 360;
        } else if (I_Data < 0) {
            I_Data += 360;
        }
    }
    if (I_Data < 0) {
        I_Data += 360;
    }
    return I_Data.toFixed(1);
}

function pos(subStr, source) {
    return source.indexOf(subStr) + 1;
}

function strToFloat(value) {
    return Number.parseFloat(value);
}

//格式化浮点数字符串，保证其有给定的小数位数。其中f是浮点数的字符串常量，size是保留小数位数
function formatfloat2(f, size) {
    aa = f.split("");
    var varchar = "";
    var num = 0, k = 0; //num是已得小数点位数，K用来作是否到小数点控制
    for (var i = 0; i < aa.length; i++) {
        varchar += aa[i];
        if (aa[i] == ".") {
            k = 1;
        }
        if (k == 1) {
            num++;
            if (num > size) break;

        }

    }
    num--;
    for (; num < size; num++) //如果位数不够，则补0
    {
        varchar += "0";
    }

    return varchar;
}

let result = factorToAngle('三相三线有功', '', '0.5L');
console.log("三相三线有功 0.5C", result)
result = factorToAngle('三相四线有功', '', '0.5C');
console.log("三相四线有功 0.5C", result)

result = formatfloat2("10.235", 2);
console.log("result =", result)