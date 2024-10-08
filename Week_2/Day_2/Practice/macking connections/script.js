function delet(element){
    var a=document.querySelector(element);
    a.remove()
}
function dicrease(element){
    var b=document.querySelector(element);
    b.innerText=Number(b.innerText)-1;
}
function increase(element){
    var nb=document.querySelector(element);
    nb.innerText=Number(nb.innerText)+1;
}
function changename(element){
    var c=document.querySelector(element);
    c.innerText="aziz";
}