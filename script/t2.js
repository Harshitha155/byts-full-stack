ans=0;
res=document.getElementById('res');
let interval;
function start(){
    interval=setInterval(() => {
        ans++;
        res.innerText=ans;


    }, 1000);

}
function stop(){
    clearInterval(interval);
}
function reset(){
    ans=0;
    res.innerText=ans;
}
