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
        var managerEmail = "faramining02@gmail.com"; 

 

  Email.send({
    //トークン
    SecureToken: "192529-cb15-436b-81d8-ee6469e64e11",
    //ホスト・サイト
    Host: "smtp.elasticemail.com",
    //SMTPJSで登録したメールID
    Username: "kk.soft.info@gmail.com",
    //SMTPJSで登録したメール・パスワード
    Password: "7591DA38AB3BC8070B4EEA9D39B78164E4E1",
    //SMTPJSで登録したメールアドレス
    From: smtpjsEmail, 
    //管理者のメールアドレス
    To: managerEmail, 
    Subject: "パートナー応募依頼「K&Kソフト株式会社」",
    Body: "このたびはパートナー応募依頼において通知します。"+"<br>"+"<br>"+
          "ご入力いただきました内容は以下の通りです。"+"<br>"+"<br>"+
          "貴社名: " + companyName + "<br>" +
          "部署名: " + department + "<br>" +
          "ご担当者名: " + contactName + "<br>" +
          "メールアドレス: " + email + "<br>" +
          "お電話番号: " + phoneNumber + "<br>" +
          "備考: " + notes
  }).then(function(message) {
    if (message === "OK") {
    //応募者まで確認メール
      Email.send({
        //トークン
        SecureToken: "192529-cb15-436b-81d8-ee6469e64e11",
        //ホスト・サイト
        Host: "smtp.elasticemail.com",
        //SMTPJSで登録したメールID
        Username: "kk.soft.info@gmail.com",
        //SMTPJSで登録したメール・パスワード
        Password: "7591DA38AB3BC8070B4EEA9D39B78164E4E1",
        //SMTPJSで登録したメールアドレス
        From: smtpjsEmail, 
        //応募者確認メール
        To: email, 
        Subject:  "[自動送信]パートナー応募へのお問い合わせありがとうございます。「K&Kソフト株式会社」",
        Body: contactName+"様"+"<hr>"+"<br>"+"<br>"+
        "このメールはシステムより自動返信にて送信させていただきます。"+"<br>"+"<br>"+
        "このたびはパートナー応募におい問い合わせいただき、誠にありがとうございます。"+"<br>"+"<br>"+
        "ご入力いただきました内容は以下の通りです。"+"<br>"+"<br>"+
        "ご送信内容の確認"+"<br>"+"<br>"+
        "貴社名: " + companyName + "<br>" +
        "部署名: " + department + "<br>" +
        "ご担当者名: " + contactName + "<br>" +
        "メールアドレス: " + email + "<br>" +
        "お電話番号: " + phoneNumber + "<br>" +
        "備考: " + notes+"<br>"+
        "<hr>"+
        "ご不明な点やご質問がございましたら、ご気軽に下記までお問い合わせください"
      }).then(function(message) {
        if (message === "OK") {
          alert("送信完全しました。");
        }
      });
    } else {
      alert("エラー発生： " + message);
    }
      });
    };
 