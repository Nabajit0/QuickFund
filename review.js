
document.getElementById("showName").innerText =
localStorage.getItem("name");

document.getElementById("showMobile").innerText =
localStorage.getItem("mobile");

document.getElementById("showPurpose").innerText =
localStorage.getItem("purpose");

document.getElementById("showAmount").innerText =
localStorage.getItem("amount");

function editDetails(){
window.location.href = "details.html";
}

function goPayment(){
window.location.href = "payment.html";
}
