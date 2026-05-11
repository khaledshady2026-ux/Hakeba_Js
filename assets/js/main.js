


let btn = document.getElementById("btn");


window.onscroll = function() {
    if (scrollY >= 500) 
    {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
btn.onclick = function() {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth" 
    })
}
// ###################################################
let icoo = document.getElementById("icoo");
let popup = document.getElementById("popup");
let close = document.getElementById("close");



icoo.onclick = function() {
   popup.style.transform = "scale(1)"; 
}

close.onclick = function() {
    popup.style.transform = "scale(0)";
}


setTimeout(function() {
    popup.style.transform = "scale(1)";
}, 3000);

setTimeout(function() {
    popup.style.transform = "scale(0)";
}, 7000);
// #####################################################
// Validation Form
const form = document.getElementById("ContactForm");
const username = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const messageTyp = document.getElementById("message_type");
const messageSub = document.getElementById("message_subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const username_error = document.getElementById("username_error");
const phone_error = document.getElementById("phone_error");
const email_error = document.getElementById("email_error");
const message_type_error = document.getElementById("message_type_error");
const message_subject_error = document.getElementById("message_subject_error");
const message_error = document.getElementById("message_error");

// showError
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const span = formControl.querySelector("span");
    span.innerText = message;
}
// showSuccess
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control";
}
submit.onclick = function(e) {
    let isValid = true;
    if(username.value == ""){
        username_error.textContent = "* الرجاء إدخال الإسم الخاص بك";
        isValid = false;
    }
    if(phone.value == ""){
        phone_error.textContent = "* الرجاء إدخال رقم الهاتف";
        isValid = false;    
    }
    else if (phone.value.length < 8 || phone.value.length > 11) {
        phone_error.textContent = "* الرجاء إدخال رقم هاتف صحيح";
        isValid = false;
    }

    if(email.value == ""){
        email_error.textContent = "* الرجاء إدخال البريد الإلكتروني";
        isValid = false;
    }
    else if (!email.value.includes("@")) {
        email_error.textContent = "* الرجاء إدخال بريد إلكتروني صحيح";
        isValid = false;
    }

    if(message_type.value == ""){
        message_type_error.textContent = "* الرجاء إدخال نوع الرسالة";
        isValid = false;
    }

    if(message_subject.value == ""){
        message_subject_error.textContent = "* الرجاء إدخال عنوان الرسالة";
        isValid = false;
    }

    if(message.value == ""){
        message_error.textContent = "* الرجاء إدخال الرسالة";
        isValid = false;
    }     
    if (!isValid) {
        e.preventDefault();
    }
}
// إلغاء أي شرطات او علامات بجانب رقم الهاتف
    document.addEventListener("DOMContentLoaded", function () {
        const phone = document.getElementById("phone");

         phone.addEventListener("input", function () {
         let value = phone.value.trim();

        // شيل أي مسافات أو شرطات
        value = value.replace(/[\s-]/g, "");

        // لو الرقم بدأ بـ +20 أو 0020 أو 20 يتحول لـ 0
        if (value.startsWith("+20")) {
            value = "0" + value.slice(3);
        } else if (value.startsWith("0020")) {
            value = "0" + value.slice(4);
        } else if (value.startsWith("20")) {
            value = "0" + value.slice(2);
        }

        // خليه أرقام بس
        value = value.replace(/\D/g, "");

        phone.value = value;
    });
});
// #####################################################
let cornur = document.getElementById("cornur");
let closeCornur = document.getElementById("closeCornur");

setTimeout(function() {
    cornur.style.left = "10px";
}, 10000);

setTimeout(function() {
    cornur.style.left = "-900px";
}, 15000);

closeCornur.onclick = function() {
    cornur.style.left = "-900px";
}
// ####################################################

let whatsapp = document.getElementById("whatsapp");

whatsapp.onclick = function() {
    window.open("https://wa.me/201027626552?text= نورت واتساب يا غالي.");
}

