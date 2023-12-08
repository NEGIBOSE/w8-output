(() => {
  window.addEventListener("load", () => {
    // ローカルストレージから入力されたデータを取得
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // emailとパスワードが一致しているか
    if (email && password) {
      // 一致していたら表示する
      const $email = document.getElementById("js-email");
      const $password = document.getElementById("js-password");
      $email.value = email;
      $password.value = password;
    }
  });

  // Submit event listener
  const $form = document.getElementById("js-form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    // 入力されたデータを取得
    const formData = new FormData($form);

    // 入力されたデータをローカルストレージに保存
    localStorage.setItem("email", formData.get("email"));
    localStorage.setItem("password", formData.get("password"));
  });

  window.signIn = function () {
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
