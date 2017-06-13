/**
 * Created by ZCL on 2017/6/12.
 */
var city = [
    "北京", "上海", "南京"
];
var university = {
    "北京": ["北京大学", "清华大学", "北京理工大学", "华北电力大学"],
    "上海": ["复旦大学", "上海交通大学", "同济大学", "上海大学"],
    "南京": ["南京大学", "南京航空航天大学", "东南大学", "南京理工大学"]
}
window.onload = function() {
    var student = document.getElementById("student");
    var nonstudent = document.getElementById("nonstudent");
    student.onclick = function() {
        alternative();
        changeSchool();
    }
    nonstudent.onclick = employChoice;

}

//创建在校生对应的表单
function alternative() {
    var form = document.getElementsByTagName("form")[0];
    //判断是否已经存在相应的表单，若存在，删除当前表单
    if(form.lastChild.id == "school" || form.lastChild.id == "company") {
        form.removeChild(form.lastChild);
    }

    var divNode = document.createElement("div");
    divNode.id = "school";
    var textNode = document.createElement("span");
    textNode.textContent = "学校";

    var select1 = document.createElement("select");
    select1.id = "city";
    for (var i=0; i < city.length; i++) {
        var cityNode = document.createElement("option");
        cityNode.textContent = city[i];
        select1.appendChild(cityNode);
    }

    var select2 = document.createElement("select");
    select2.id = "university";
    var uniList = university["北京"];
    for (var i=0; i < uniList.length; i++) {
        var uniNode = document.createElement("option");
        uniNode.textContent = uniList[i];
        select2.appendChild(uniNode);
    }
    select1.style.width = "100px";
    select1.style.height = "2.5em";
    select1.style.border = "1px solid darkgray";
    select1.style.borderRadius = "5px";

    select2.style.width = "200px";
    select2.style.height = "2.5em";
    select2.style.border = "1px solid darkgray";
    select2.style.borderRadius = "5px";

    divNode.appendChild(textNode);
    divNode.appendChild(select1);
    divNode.appendChild(select2);
    divNode.style.display = "flex";
    divNode.style.justifyContent = "space-around";
    divNode.style.alignItems = "baseline";

    form.appendChild(divNode);
}

//创建非在校生对应的表单
function employChoice() {
    var form = document.getElementsByTagName("form")[0];
    if(form.lastChild.id == "school" || form.lastChild.id == "company") {
        form.removeChild(form.lastChild);
    }
    var divNode = document.createElement("div");
    divNode.id = "company";
    var textNode = document.createElement("span");
    textNode.textContent = "就业单位";

    var inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.style.width = "300px";
    inputBox.style.height = "2.5em";
    inputBox.style.border = "1px solid darkgray";
    inputBox.style.borderRadius = "5px";

    divNode.appendChild(textNode);
    divNode.appendChild(inputBox);

    divNode.style.display = "flex";
    divNode.style.justifyContent = "space-around";
    divNode.style.alignItems = "baseline";

    form.appendChild(divNode);
}

//监听city的改变，并且实时更新university的列表
function changeSchool() {
    var school = document.getElementById("school");
    if(school == null) {
        exit;
    }
    var citySelect = document.getElementById("city");
    var uniSelect = document.getElementById("university");
    citySelect.onchange = function() {
        var _value = citySelect.options[citySelect.selectedIndex].value;
        _render(uniSelect, university[_value]);
    }
}
//参考别人实现的库，即先删除子选择表单已有的option，然后追加为新的option
var _render = function(ele, data) {
    var opts = ele.querySelectorAll('option');
    for(var i = 0, len = opts.length; i < len; ++i) {
        ele.removeChild(opts[i]);
    }
    var frag = document.createDocumentFragment();
    for (var i = 0, len = data.length; i < len; ++i) {
        if (typeof data[0] === 'object') {
            var opt = new Option(data[i].value, data[i].code);
        }else {
            var opt = new Option(data[i], i);
        }
        frag.appendChild(opt);
    }
    ele.appendChild(frag);
}
