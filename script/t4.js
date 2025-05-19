let equation='';
function updateScreen(){
    let ele=document.getElementById('res');
    ele.innerText=equation;
}
function update(x){
    equation+=x;
    updateScreen();
}
function removeLast(){
    let l=equation.length;
    equation=equation.slice(0,l-1);
    updateScreen();

}
function answer(){
    try{
        const res=eval(equation);
        equation=res.toString();
        updateScreen();
    }
    catch(error){
        alert("invalid input");
        equation="";
        updateScreen();
    }
}