// JavaScript Document

$(document).ready(function(e){
document.addEventListener("deviceready",function(){
	
$('#beep').tap(function(){
navigator.notification.beep(1);
});//tab beep

$('#vibrar').tap(function(){
navigator.notification.vibrate(1000);
});//tab vibrar

},false); //deviceready
});//ready
