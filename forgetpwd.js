document
.getElementById("resetForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
        document.getElementById("resetEmail").value;

    document.getElementById("resetMessage").innerHTML =
        "📧 A password reset link has been sent to " + email;

    document.getElementById("resetMessage").style.color =
        "green";

});