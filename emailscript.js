     document.getElementById("contactForm").onsubmit = function(event) {
      event.preventDefault();

      var companyName = document.getElementById("companyName").value;
      var department = document.getElementById("department").value;
      var contactName = document.getElementById("contactName").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var notes = document.getElementById("notes").value;

        // SMTPJSで登録したメールアドレス
        var smtpjsEmail = "kk.soft.info@gmail.com"; 
        //管理者のメールアドレス
        var managerEmail = "faramining01@gmail.com"; 

 

  Email.send({
    SecureToken: "192529-cb15-436b-81d8-ee6469e64e11",
    Host: "smtp.elasticemail.com",
    Username: "kk.soft.info@gmail.com",
    Password: "7591DA38AB3BC8070B4EEA9D39B78164E4E1",
    From: smtpjsEmail, //SMTPJSで登録したメールアドレス
    To: managerEmail, //管理者のメールアドレス
    Subject: "K&Kソフト株式会社",
    Body: "貴社名: " + companyName + "<br>" +
          "部署名: " + department + "<br>" +
          "ご担当者名: " + contactName + "<br>" +
          "メールアドレス: " + email + "<br>" +
          "お電話番号: " + phoneNumber + "<br>" +
          "備考: " + notes
  }).then(function(message) {
    if (message === "OK") {
      alert("送信完了しました。");
    } else {
      alert("発信エラー: " + message);
    }
      });
    };
 