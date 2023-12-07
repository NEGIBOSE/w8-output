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
})();
