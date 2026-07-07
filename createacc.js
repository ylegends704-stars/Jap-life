document.getElementById("signupForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        document.getElementById("signupMessage").innerHTML =
            "❌ Passwords do not match.";

        document.getElementById("signupMessage").style.color =
            "red";

        return;
    }

    // 保存
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    document.getElementById("signupMessage").innerHTML =
        "✅ Account created successfully!";

    document.getElementById("signupMessage").style.color =
        "green";

    setTimeout(function(){
        window.location.href = "loginpage.html";
    },2000);

});

function changeLanguage(lang){

    if(lang === "jp"){

        document.getElementById("title").innerHTML =
            "アカウント作成";

        document.getElementById("subtitle").innerHTML =
            "Japan Life Guideへようこそ";

        document.getElementById("nameLabel").innerHTML =
            "氏名";

        document.getElementById("emailLabel").innerHTML =
            "メールアドレス";

        document.getElementById("passwordLabel").innerHTML =
            "パスワード";

        document.getElementById("confirmPasswordLabel").innerHTML =
            "パスワード確認";

        document.getElementById("nationalityLabel").innerHTML =
            "国籍";

        document.getElementById("visaLabel").innerHTML =
            "ビザの種類";

        document.getElementById("createBtn").innerHTML =
            "アカウント作成";

        document.getElementById("backBtn").innerHTML =
            "ログインへ戻る";
    }

    else if(lang === "en"){

        document.getElementById("title").innerHTML =
            "Create Account";

        document.getElementById("subtitle").innerHTML =
            "Join Japan Life Guide and start your journey in Japan.";

        document.getElementById("nameLabel").innerHTML =
            "Full Name";

        document.getElementById("emailLabel").innerHTML =
            "Email Address";

        document.getElementById("passwordLabel").innerHTML =
            "Password";

        document.getElementById("confirmPasswordLabel").innerHTML =
            "Confirm Password";

        document.getElementById("nationalityLabel").innerHTML =
            "Nationality";

        document.getElementById("visaLabel").innerHTML =
            "Visa Type";

        document.getElementById("createBtn").innerHTML =
            "Create Account";

        document.getElementById("backBtn").innerHTML =
            "Back to Login";
    }

    else if(lang === "mm"){

        document.getElementById("title").innerHTML =
            "အကောင့်ဖွင့်ရန်";

        document.getElementById("subtitle").innerHTML =
            "Japan Life Guide သို့ ကြိုဆိုပါသည်";

        document.getElementById("nameLabel").innerHTML =
            "အမည်";

        document.getElementById("emailLabel").innerHTML =
            "အီးမေးလ်";

        document.getElementById("passwordLabel").innerHTML =
            "စကားဝှက်";

        document.getElementById("confirmPasswordLabel").innerHTML =
            "စကားဝှက်အတည်ပြုရန်";

        document.getElementById("nationalityLabel").innerHTML =
            "နိုင်ငံသား";

        document.getElementById("visaLabel").innerHTML =
            "ဗီဇာအမျိုးအစား";

        document.getElementById("createBtn").innerHTML =
            "အကောင့်ဖွင့်မည်";

        document.getElementById("backBtn").innerHTML =
            "လော့ဂ်အင်သို့ ပြန်သွားမည်";
    }
}

window.onload = function(){

    const lang =
        localStorage.getItem("language") || "en";

    changeLanguage(lang);

};