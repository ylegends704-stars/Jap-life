// 固定アカウント
const correctEmail = "admin@gmail.com";
const correctPassword = "123456";

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    // Create Accountで保存された情報
    const savedEmail =
        localStorage.getItem("email");

    const savedPassword =
        localStorage.getItem("password");

    // 管理者アカウント
    const adminLogin =
        email === correctEmail &&
        password === correctPassword;

    // ユーザー登録アカウント
    const userLogin =
        email === savedEmail &&
        password === savedPassword;

    if(adminLogin || userLogin){

        alert("Login Successful!");

        window.location.href = "mainpage.html";

    }else{

        document.getElementById("message").innerHTML =
            "❌ Invalid Email or Password";

        document.getElementById("message").style.color =
            "red";
    }

});

function changeLanguage(lang){

    // 選択した言語を保存
    localStorage.setItem("language", lang);

    if(lang === "jp"){

        document.getElementById("title").innerHTML =
            "Japan Life Guide";

        document.getElementById("subtitle").innerHTML =
            "日本での生活をスムーズに始めましょう";

        document.getElementById("emailLabel").innerHTML =
            "メールアドレス";

        document.getElementById("passwordLabel").innerHTML =
            "パスワード";

        document.getElementById("loginBtn").innerHTML =
            "ログイン";

        document.getElementById("forgotLink").innerHTML =
            "パスワードを忘れた方";

        document.getElementById("createBtn").innerHTML =
            "アカウント作成";

    }

    else if(lang === "en"){

        document.getElementById("title").innerHTML =
            "Japan Life Guide";

        document.getElementById("subtitle").innerHTML =
            "Start your life in Japan smoothly!!";

        document.getElementById("emailLabel").innerHTML =
            "Email";

        document.getElementById("passwordLabel").innerHTML =
            "Password";

        document.getElementById("loginBtn").innerHTML =
            "Log In";

        document.getElementById("forgotLink").innerHTML =
            "Forgot Password?";

        document.getElementById("createBtn").innerHTML =
            "Create Account";
    }

    else if(lang === "mm"){

        document.getElementById("title").innerHTML =
            "Japan Life Guide";

        document.getElementById("subtitle").innerHTML =
            "ဂျပန်နိုင်ငံတွင် ဘဝသစ်ကို အဆင်ပြေစွာ စတင်လိုက်ပါ";

        document.getElementById("emailLabel").innerHTML =
            "အီးမေးလ်";

        document.getElementById("passwordLabel").innerHTML =
            "စကားဝှက်";

        document.getElementById("loginBtn").innerHTML =
            "လော့ဂ်အင်";

        document.getElementById("forgotLink").innerHTML =
            "စကားဝှက် မေ့နေပါသလား?";

        document.getElementById("createBtn").innerHTML =
            "အကောင့်ဖွင့်မည်";
    }
}

window.onload = function(){

    const lang =
        localStorage.getItem("language") || "en";

    changeLanguage(lang);

};


