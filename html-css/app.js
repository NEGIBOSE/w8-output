(() => {
  document.addEventListener("DOMContentLoaded", function () {
    // ページが読み込まれたときに、localStorageからデータを取得してフォームにセットする
    const storedEmail = localStorage.getItem("storedEmail");
    const storedPassword = localStorage.getItem("storedPassword");

    if (storedEmail) {
      document.getElementById("js-email").value = storedEmail;
    }

    if (storedPassword) {
      document.getElementById("js-password").value = storedPassword;
    }
  });
  function signIn() {
    // ボタンが押されたら、入力された値をlocalStorageに保存する
    const email = document.getElementById("js-email").value;
    const password = document.getElementById("js-password").value;

    localStorage.setItem("storedEmail", email);
    localStorage.setItem("storedPassword", password);
  }
})();
