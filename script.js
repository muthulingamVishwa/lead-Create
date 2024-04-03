
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
 function submitForm(event) {      
            const firstName = document.getElementById('first_name').value;
            localStorage.setItem('firstName', firstName); 
     if(firstName!=Guest){
            window.location.href = 'thank.html';
     }
 }


