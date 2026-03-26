// === إعدادات وتوليد التاريخ ===
function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`; 
}

function updateDateDisplay() {
    const datePrefixElement = document.getElementById('date-prefix');
    if (datePrefixElement) {
        datePrefixElement.innerText = `ORD#${getFormattedDate()}-`;
    }
}

// === تأثيرات الخلفية المتحركة ===
function generateBackgroundIcons() {
    const container = document.getElementById('bg-pattern');
    if (!container) return;
    
    const icons = ['fa-box', 'fa-motorcycle', 'fa-map-location-dot', 'fa-clock', 'fa-utensils'];
    
    for(let i = 0; i < 15; i++) {
        const icon = document.createElement('i');
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        icon.className = `fa-solid ${randomIcon} food-icon`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
        icon.style.animationDuration = `${Math.random() * 10 + 10}s`;
        icon.style.animationDelay = `${Math.random() * 5}s`; // يمنع بدء حركة كل الأيقونات في نفس اللحظة
        
        container.appendChild(icon);
    }
}

// === تهيئة الصفحة عند التحميل ===
document.addEventListener('DOMContentLoaded', () => {
    generateBackgroundIcons();
    updateDateDisplay();
});

// === التنقل وإدارة الواجهة ===
let selectedLocation = '';

function navigateTo(id) {
    // تحديث التاريخ دائماً عند الدخول لصفحة تأكيد الاستلام
    if (id === 'confirm-receipt-page') {
        updateDateDisplay();
    }

    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function openPrepForm(location) {
    selectedLocation = location;
    const otherGroup = document.getElementById('other-location-group');
    const title = document.getElementById('prep-title');
    const customLocationInput = document.getElementById('custom-location');
    
    if (location === 'other') {
        title.innerText = "نقطة استلام أخرى";
        otherGroup.style.display = 'block';
        customLocationInput.value = ''; // تفريغ الحقل في حال كان ممتلئاً مسبقاً
    } else {
        title.innerText = `تحضير طلب: ${location}`;
        otherGroup.style.display = 'none';
    }
    
    navigateTo('prep-form-page');
}

// === إرسال رسائل الواتساب ===function sendPrepOrder() {
    const orderNum = document.getElementById('order-number').value.trim();
    const orderVal = document.getElementById('order-value').value.trim();
    const notes = document.getElementById('order-notes').value.trim() || "لا يوجد";
    const finalLocation = (selectedLocation === 'other') ? document.getElementById('custom-location').value.trim() : selectedLocation;

    // التحقق فقط من الحقول الإجبارية (المكان ورقم الطلب)
    if(!finalLocation || !orderNum) {
        alert("يرجى تعبئة الحقول الأساسية (المكان ورقم الطلب)");
        return;
    }

    // منطق القيمة: إذا كانت فارغة نكتب "غير متوفر تفاصيل"
    const displayValue = orderVal ? `${orderVal} د.أ` : "غير متوفر تفاصيل";

    const msg = `*📢 طلب جديد متاح | رقم #${orderNum}*\n` +
                `*🏪 نقطه الاستلام*: ${finalLocation}\n` +
                `*💵 مطلوب دفعه*: ${displayValue}\n` +
                `*📝 ملاحظات:*: ${notes}\n\n` +
                `———————————————\n` +
                `*⚠️ تعليمات القبول:*\n` +
                `*1- ⛔️ تأكد من جاهزيتك وتوفر المبلغ.*\n` +
                `*2- 📍أرسل موقعك المباشر (Live Location) للمنسق.*\n` +
                `*3- 🔄 سيتم تعيين الكابتن الأقرب بعد 30 ثانية.*\n\n` +
                `*HIGHWAY Delivery | أسرع طريق لطلباتك 🩵.*`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}


function sendPrepOrder() {
    const orderNum = document.getElementById('order-number').value.trim();
    const orderVal = document.getElementById('order-value').value.trim();
    const notes = document.getElementById('order-notes').value.trim() || "لا يوجد";
    
    const finalLocation = (selectedLocation === 'other') 
        ? document.getElementById('custom-location').value.trim() 
        : selectedLocation;

    // تم إزالة التحقق من القيمة (orderVal) ليكون إدخالها اختيارياً
    if (!finalLocation || !orderNum) {
        alert("⚠️ يرجى تعبئة الحقول الأساسية (المكان، رقم الطلب)");
        return;
    }

    // إذا تم إدخال قيمة نضعها مع "د.أ"، وإذا ترك الحقل فارغاً نكتب "غير متوفر تفاصيل"
    const finalOrderVal = orderVal ? `${orderVal} د.أ` : "غير متوفر تفاصيل";

    const msg = `*📢 طلب جديد متاح | رقم #${orderNum}*\n` +
                `*🏪 نقطة الاستلام*: ${finalLocation}\n` +
                `*💵 مطلوب دفعه*: ${finalOrderVal}\n` + // تم استخدام المتغير الجديد هنا
                `*📝 ملاحظات*: ${notes}\n\n` +
                `———————————————\n` +
                `*⚠️ تعليمات القبول:*\n` +
                `*1- ⛔️ تأكد من جاهزيتك وتوفر المبلغ.*\n` +
                `*2- 📍أرسل موقعك المباشر (Live Location) للمنسق.*\n` +
                `*3- 🔄 سيتم تعيين الكابتن الأقرب بعد 30 ثانية.*\n\n` +
                `*HIGHWAY Delivery | أسرع طريق لطلباتك 🩵.*`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}
