/**
 * Created by ZCL on 2017/6/10.
 */
window.onload = function() {
    var name = document.getElementById("name");
    var passwd = document.getElementById("passwd");
    var re_passwd = document.getElementById("re_passwd");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var submit = document.getElementById("submit");

    nameVerify(name);
    passwdVerify(passwd);
    nameVerify(re_passwd);
    nameVerify(email);
    nameVerify(phone);

}
//user name验证
function nameVerify(name) {
    name.onfocus = (function() {
        var info = "必填，长度为4~16个字符";
        if(!name.nextElementSibling) {
            var node = createInfo(info);
            name.parentNode.appendChild(node);
        } else {
            name.nextElementSibling.style.color = "darkgray";
            name.nextElementSibling.value = info;
        }
    });
    name.onblur = (function() {
        var message = name.nextElementSibling;
        var input = name.value;
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
    });
}
//password验证
function passwdVerify(passwd) {
    passwd.onfocus = (function() {
        var info = "必填，长度为4~16个字符";
        if(!passwd.nextElementSibling) {
            var node = createInfo(info);
            passwd.parentNode.appendChild(node);
        } else {
            passwd.nextElementSibling.style.color = "darkgray";
            passwd.nextElementSibling.value = info;
        }
    });
    passwd.onblur = (function() {
        var message = passwd.nextElementSibling;
        var input = passwd.value;
        if(input == "") {
            message.value = "密码不能为空";
            message.style.color = "red";
            passwd.style.borderColor = "red";
        } else {
            character = chkstrlen(input);
            if(character>=4 && character<=16) {
                message.value = "密码可用";
                message.style.color = "rgb(53,189,78)";
                passwd.style.borderColor = "rgb(53,189,78)";
            } else {
                message.value = "必填，长度为4~16个字符";
                message.style.color = "darkgray";
                passwd.style.borderColor = "darkgray";
            }
        }

    });

}
//创建一个新的节点
function createInfo(info) {
    var infoNode = document.createElement("input");
    infoNode.type = "text";
    infoNode.style.border = "none";
    infoNode.style.color = "darkgray";
    infoNode.value = info;
    return infoNode;
}
//计算一个字符串的长度，中文字符表示2个字符
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