function convert(){
    let res=document.getElementById('res');
    let val=document.getElementById('Celsius').value;
    let ans=val*1.8+32;
    res.innerText=ans;
}