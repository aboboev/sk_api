<!DOCTYPE html>
<html>
<head>
    <meta name="google-site-verification" content="rP83h8a1vBzKNyrAb-XmFe2XY22AuQbFcaEB0mK4tLE" />
    <title>Başlığım</title>
</head>

<body style="font-size: 20px; text-align: center; margin: 0; position: relative;">
<div style="height: 10px; background-color: #FFAF41; margin-bottom: 20px;"></div>
<div class="logo">
    <img src="https://sistemkoin.com/assets/images/home/logo-black.png" style="width: 250px; height: auto;"/>
</div>
<br><br>
Merhaba <b>{{$user->name}}</b>
<br>
<br>
Sistemimize Kayıt olduğunuz için teşekkür ederiz.
<br>
<br>
Sistemkoin Hesabınızı aktifleştirmek için sadece bir adımınız kaldı.
<br>
<br>
Hesabınızı aktif edebilmek için lütfen emailinizi doğrulayınız.
<br>
<br>
Doğrulama için Lütfen Aşağıdaki butonu tıklayın:
<br>
<br>
<a href="{{$user->confirmation_url}}" style="background-color: #4caf50; color: #ffffff; border-radius: 50px; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 0 30px; text-decoration: none; text-transform: capitalize; height: 50px; line-height: 50px;">
    Hesabımı Şimdi Doğrula
</a>
<br>
<br>
Hesabınızı aşağıdaki linke tıklayarak aktif edebilirsiniz.. <a href="{{$user->confirmation_url}}">{{$user->confirmation_url}}</a>
<br>
<br>
Saygılarımızla...
<div style="margin-top: 50px; width: 100%; background-color: #213B4A; color: white; padding-top: 30px; padding-bottom: 10px; font-size: 16px;">
    <p><b>SİSTEMSA BİLİŞİM TEKNOLOJİLERİ A.Ş</b></p>
    <p>Yeni Mah. Dorukoba Cad. 1198. Sk. Dorukoba Villaları No:1</p>
    <p>Bandırma/BALIKESİR</p>
    <p>destek@sistemkoin.com  | +90 850 304 1282</p>
    <p>www.sistemkoin.com</p>
</div>
</body>
</html>