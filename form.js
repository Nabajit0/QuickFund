function saveDetails(){

const name = document.getElementById("name").value;
const mobile = document.getElementById("mobile").value;
const purpose = document.getElementById("purpose").value;
const amount = document.getElementById("amount").value;

if(name === "" || mobile === "" || amount === ""){
    alert("Please fill all required fields");
    return;
}

localStorage.setItem("name", name);
localStorage.setItem("mobile", mobile);
localStorage.setItem("purpose", purpose);
localStorage.setItem("amount", amount);

window.location.href = "review.html";

}
