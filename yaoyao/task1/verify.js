/**
 * Created by ZCL on 2017/5/29.
 */
window.onload = function() {
    var verify = document.getElementById("verify");
    verify.onclick = verification;
}

function verification() {
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    var input = name.value;
    var character = 0;
    if(input == "") {
        message.value = "姓名不能为空";
        message.style.color = "red";
        name.style.borderColor = "red";
    } else {
        character = chkstrlen(input);
        if(character>=4 && character<=16) {
            message.value = "名称格式正确";
            message.style.color = "rgb(53,189,78)";
            name.style.borderColor = "rgb(53,189,78)";
        } else {
            message.value = "必填，长度为4~16个字符";
            message.style.color = "darkgray";
            name.style.borderColor = "darkgray";
        }
    }
}

function chkstrlen(str) {
    var strlen = 0;
    for (var i=0; i<str.length; i++) {
        if(str.charCodeAt(i) > 255)
            strlen += 2;
        else
            strlen += 1;
    }
    return strlen;
}