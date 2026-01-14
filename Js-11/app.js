let fun = ()=>{
    return alert('hi')
}
let fun2 = (ok)=>{
    let row =  ok.parentNode.parentNode
    return row.remove();
}
let count = 0;
function increse(){
    count++;
    document.getElementById('number').innerText = count;
}
function decrese(){
    count--;
    document.getElementById('number').innerText = count;
}

let num3 = 0;
let num1 = ()=>{
    num3++;
    document.getElementById('ok').innerText = num3;
}