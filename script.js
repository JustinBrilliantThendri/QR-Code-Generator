let qrcode = document.querySelector(".qrcode");
let content = document.querySelector(".content");

function generate(){
    if(content.value != ""){
        let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content.value}`;
        qrcode.src = api;
    }else{
        qrcode.src = "";
    }
}