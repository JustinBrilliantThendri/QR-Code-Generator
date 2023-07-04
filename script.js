/// <reference path="typings/globals/jquery/index.d.ts"/>

let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let loading = "<span class='loading'></span>";

$(() => {
    $(".container .btn").click(() => {
        $(".container .qrcode").empty();
        if($(".container .content").val() != ""){
            $(".container .qrcode").css("display", "flex");
            $(".container .qrcode").append(loading, `<img class='output' src='${api + $(".container .content").val()}'>`);
            $(".container .qrcode .output").on("load", () => {
                $(".container .qrcode .output").show();
                $(".container .qrcode .loading").remove();
            });
        }else{
            $(".container .qrcode").css("display", "none");
        }
    });
});