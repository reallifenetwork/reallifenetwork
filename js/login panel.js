// تعديل دالة التحقق من تسجيل الدخول
function checkLogin(event) {
    event.preventDefault(); // منع إرسال الفورم بشكل افتراضي

    // الحصول على قيم المستخدم وكلمة المرور المدخلة
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // التحقق من صحة البيانات المدخلة
    if ((username === "Player" && password === "RealLife") || (username === "player" && password === "Real Life") || (username === "Player" && password === "reallife")) {
        // إذا كانت البيانات صحيحة، اعرض الرسالة
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block'; // إظهار الرسالة

        // إخفاء الرسالة بعد 5 ثوانٍ والتوجه إلى الصفحة الرئيسية
        setTimeout(function() {
            successMessage.style.display = 'none'; // إخفاء الرسالة
            window.location.href = 'https://discord.com/oauth2/authorize?client_id=1321884900957229098&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Fchannels%2F1233452389449596938%2F1314306466601107546&scope=identify+email+guilds'; // التوجه إلى الصفحة الرئيسية (قم بتغيير الرابط حسب حاجتك)
        }, 5000); // 5 ثوانٍ
    } else {
        // إذا كانت البيانات خاطئة، إظهار رسالة الخطأ
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block'; // إظهار الرسالة
    }
}