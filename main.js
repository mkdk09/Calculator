let obj = {187:'+', 189:'-', 222:'*', 191:'/', 190:'.'};

document.onkeydown = keydown;

function keydown() {
    // insert(event.keyCode-48);
    if (event.keyCode >= 48 && event.keyCode<= 57) {
        insert(event.keyCode-48);
    } else if (event.keyCode == 187) {
        equal();
    } else if (event.keyCode == 67) {
        clean();
    } else if (event.keyCode == 8) {
        back();
    } else if (event.keyCode == 187 || event.keyCode == 189 || event.keyCode == 222 || event.keyCode == 191 || event.keyCode == 190) {
        // + - * / .
        // キーコードが一部かぶっている
        // 今は+が使えない
        insert(obj[event.keyCode]);
    }
};

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equal(){
    const exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval(exp);
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}