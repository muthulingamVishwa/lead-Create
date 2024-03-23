function ch(event){
    let words=event.target.value;
      console.log(words);
    let outputElement=document.getElementById('out');
    outputElement.innerHTML=words;
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } } 
     setInterval(timestamp, 500); 

function capthcs(){
document.querySelector('input[name="submit"]').classList.remove('hidden');


}
