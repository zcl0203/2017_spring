/**
 * Created by ZCL on 2017/5/12.
 */
var left_in = document.getElementById("left_in");
var left_out = document.getElementById("left_out");
var right_in = document.getElementById("right_in");
var right_out = document.getElementById("right_out");
var input = document.getElementById("input");
var queue = document.getElementById("queue");
var sort = document.getElementById("sort");
var dataNum = 0;

left_in.onclick = showQueue1;
right_in.onclick = showQueue2;
left_out.onclick = showQueue3;
right_out.onclick = showQueue4;
sort.onclick = sortNum;

function createNode(num) {
    var node = document.createElement("div");
    node.style.width = "20px";
    node.style.height = num + "px";
    node.style.background = "red";
    node.style.marginLeft = "5px";
    node.style.marginTop = "10px";
    node.style.float = "left";
    node.onclick = function() {
        var queue = document.getElementById("queue");
        queue.removeChild(node);
    };
    return node;
}

function showQueue1() {
    var re = /^[0-9]+.?[0-9]*$/;
    var num = input.value;
    if(dataNum >= 60) {
        alert("Data number is more than 60, can not add number!");
        return;
    }
    if (re.test(num) && num >= 10 && num <= 100) {
        var node = createNode(num);
        queue.insertBefore(node, queue.firstElementChild);
        dataNum += 1;
    } else {
        alert("input invalid, please input a number between 10 and 100");
    }
}
function showQueue2() {
    var re = /^[0-9]+.?[0-9]*$/;
    var num = input.value;
    if(dataNum >= 60) {
        alert("Data number is more than 60, can not add number!");
        return;
    }
    if (re.test(num) && num >= 10 && num <= 100) {
        var node = createNode(num);
        queue.appendChild(node);
        dataNum += 1;
    } else {
        alert("input invalid, please input a number between 10 and 100");
    }
}
function showQueue3() {
    alert(parseInt(queue.firstElementChild.style.height));
    queue.removeChild(queue.firstElementChild);
    dataNum -= 1;
}
function showQueue4() {
    alert(parseInt(queue.lastElementChild.style.height));
    queue.removeChild(queue.lastElementChild);
    dataNum -= 1;
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};
function sortNum() {
    childElementNode = queue.getElementsByTagName("div");
    var numArr = new Array();
    var len = childElementNode.length;
    var i, j, stop;
    for (i=0; i<len; i++) {
        numArr[i] = parseInt(childElementNode[i].style.height);
    }

    for (i=0; i<len; i++) {
        for(j=0, stop=len-i; j<stop; j++) {
            if (numArr[j] > numArr[j+1]) {
                swap(numArr, j, j+1);
                // childElementNode[j].style.height = numArr[j] + "px";
                // childElementNode[j+1].style.height =  numArr[j+1] + "px";
            }
        }
    }

    for (i=0; i<len; i++) {
        childElementNode[i].style.height = numArr[i] + "px";
    }
}


