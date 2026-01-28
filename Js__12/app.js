let fun = ()=>{
    let i = document.getElementById('ok')
    console.log(i.value);
}

// console.log('ok');


let pass = ()=>{
    let nam = document.getElementById('name').value
    let password = document.getElementById('ok').value
    let pass = document.getElementById('password').value

    
    console.log(nam);
    
    console.log(pass);

    console.log(password);

    return false
}


function more(){
   
    document.getElementById('hi').innerHTML = ` Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu, adipisicing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet consectetu, adipisicing elit, sed do eiusmod tempor incididunt <br> <br>
     <a href="#" onclick="less()">see less</a>`;
    
}

function less(){
    document.getElementById(`hi`).innerHTML = `Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu,    
    <a href = '#' onclick = 'more()' > seemore </a> ` 
}
// console.log(window.more)

function foo(){
    let ok =  document.getElementById('name').value
    document.getElementById('nam').innerHTML = ok

    let element = document.getElementById("studenttable")

    let row = table.insertrow();
    let cell1 = row.insertrow(0);
    let cell2 = row.insertrow(1);
    let cell3 = row.insertrow(2);
     let cell4 = row.insertCell(3);

    cell1.innerText = name;
    cell2.innerText = '-';
    cell3.innerText = '-';

    let delbtn = document.createElement('button');
    delbtn.innerText = 'delete';
    delbtn.onclick = function(){
        table.deleterow(row.index);
    }
    cell4.appendChild(delbtn);

    document.getElementById('name').value = ""
}
// function geo(){
//     document.getElementById('nam').innerHTML = 
// }