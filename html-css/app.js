(() => {
  // ログイン関数
  window.signIn = function () {
    const email = document.getElementById("js-email").value;
    const password = document.getElementById("js-password").value;

    localStorage.setItem("storedEmail", email);
    localStorage.setItem("storedPassword", password);

    // ログイン成功時のその他の処理...
    window.alert("あかうんと。はつくれないよ");
  };

  // パスワードの可視化スイッチ
  window.pushHideButton = function () {
    var txtPass = document.getElementById("js-password");
    var btnEye = document.getElementById("buttonEye");
    if (txtPass.type === "password") {
      txtPass.type = "text";
      btnEye.className = "fa fa-eye-slash";
    } else {
      txtPass.type = "password";
      btnEye.className = "fa fa-eye";
    }
  };
})();
