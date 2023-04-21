
function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    var popup = document.getElementById("popup");
    popup.classList.toggle('active');
}

document.getElementById("button-login-signup-id").addEventListener("click",function(){
    document.querySelector(".login-box").style.display = "flex"
});

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".login-box").style.display = "none"
});
