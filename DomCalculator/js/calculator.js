var answer;

function init() {
    answer = document.getElementById("ans");
    comp("uin");
}

function comp(id) {
    var el = document.getElementById(id);
    var res = eval(el.value);
    answer = document.getElementById("ans");
    answer.textContent = res;
}
