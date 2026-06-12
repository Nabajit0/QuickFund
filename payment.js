
document.getElementById("payName").innerText =
localStorage.getItem("name");

document.getElementById("payAmount").innerText =
localStorage.getItem("amount");

function payNow() {

const name = localStorage.getItem("name");
const amount = localStorage.getItem("amount");

const upiLink =
    "upi://pay?pa=nabajittalukdar000-1@oksbi" +
    "&pn=QuickFund" +
    "&tn=" + encodeURIComponent(name) +
    "&am=" + amount +
    "&cu=INR";

window.location.href = upiLink;

setTimeout(() => {
    window.location.href = "thankyou.html";
}, 3000);

}

function comingSoon() {
alert("Coming Soon!\n\nCurrently only UPI payment is available.");
}
