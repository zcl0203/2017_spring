/**
 * Created by ZCL on 2017/5/8.
 */
function createNode(num) {
    var node = document.createElement("div");
    node.innerText = num;
    node.style.float = "left";
    node.style.background = "red";
    node.style.color = "white";
    node.style.marginLeft = "10px";
    node.style.marginTop = "10px";
    node.style.padding = "20px";
    node.onclick = function() {
        var queue = document.getElementById("queue");
        queue.removeChild(node);
    };
    return node;
}
function showQueue1() {
    var re = /^[0-9]+.?[0-9]*$/;
    var input = document.getElementById("input");
    var num = input.value;
    if (re.test(num)) {
        var node = createNode(num);
        var queue = document.getElementById("queue");
        queue.insertBefore(node, queue.firstElementChild);
    } else {
        alert("input invalid, please input a number");
    }
}
function showQueue2() {
    var re = /^[0-9]+.?[0-9]*$/;
    var input = document.getElementById("input");
    var num = input.value;
    if (re.test(num)) {
        var node = createNode(num);
        var queue = document.getElementById("queue");
        queue.appendChild(node);
    } else {
        alert("input invalid, please input a number");
    }
}
function showQueue3() {
    var queue = document.getElementById("queue");
    alert(queue.firstElementChild.innerHTML);
    queue.removeChild(queue.firstElementChild);
}
function showQueue4() {
    var queue = document.getElementById("queue");
    alert(queue.lastElementChild.innerHTML);
    queue.removeChild(queue.lastElementChild);

}

var left_in = document.getElementById("left_in");
left_in.onclick = showQueue1;
var right_in = document.getElementById("right_in");
right_in.onclick = showQueue2;
var left_out = document.getElementById("left_out");
left_out.onclick = showQueue3;
var right_out = document.getElementById("right_out");
right_out.onclick = showQueue4;