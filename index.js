var btn = document.querySelector('.btn');
var code = document.querySelector('.code');
var input = document.querySelector('.input');
var toast = document.querySelector('#toast');
btn.addEventListener("click",generate);
function generate() {
    var data = input.value;
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = url;
    toastDiv();
}
function toastDiv() {
    toast.className = "show";
    setTimeout( function() {
        toast.className = toast.className.replace("show" , "");
    },2000);
}
