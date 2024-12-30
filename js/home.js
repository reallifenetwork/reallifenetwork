// تحميل النصوص المتحركة
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typedtext', {
        strings: [
            "حيث يتجسد الإبداع والتميز",
            "رحلة لا تُنسى من الاستمتاع والسعادة",
            "بوابتك لعالم افتراضي مليء بالمتعة والاثاره"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});

// العد التصاعدي للأرقام مع إضافة "+" لبعض الأرقام
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            let count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment); // زيادة العد تدريجيا
                setTimeout(updateCount, 10); // التحديث بعد 10 ميلي ثانية
            } else {
                // إضافة "+" فقط إذا كانت القيمة هي 120 أو 130
                if (target === 120 || target === 130) {
                    counter.innerText = target + ' +';
                } else {
                    counter.innerText = target;
                }
            }
        };
        updateCount();
    });
});