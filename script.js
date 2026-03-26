// --- وظيفة استخراج التاريخ بصيغة YYMMDD من جهاز المستخدم ---
function getFormattedDate() {
    const now = new Date();
    
    // السنة (آخر رقمين، مثلاً 2026 تصبح 26)
    const year = now.getFullYear().toString().slice(-2);
    
    // الشهر (يضاف 1 لأن الأشهر تبدأ من 0، و padStart للتأكد من وجود خانتين)
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    
    // اليوم (padStart للتأكد من وجود خانتين)
    const day = now.getDate().toString().padStart(2, '0');
    
    return `${year}${month}${day}`; // النتيجة: 260116
}

// وظيفة لتحديث النص الظاهر في نموذج تأكيد الاستلام
function updateDateDisplay() {
    const datePrefixElement = document.getElementById('date-prefix');
    if (datePrefixElement) {
        const currentDate = getFormattedDate();
        datePrefixElement.innerText = `ORD#${currentDate}-`;
    }
}

// --- عند تحميل الصفحة بالكامل ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. توليد أيقونات الخلفية المتحركة
    const container = document.getElementById('bg-pattern');
    const icons = ['fa-box', 'fa-motorcycle', 'fa-map-location-dot', 'fa-clock'];
    
    for(let i=0; i<15; i++) {
        const icon = document.createElement('i');
        icon.className = `fa-solid ${icons[Math.floor(Math.random() * icons.length)]} food-icon`;
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = Math.random() * 100 + '%';
        icon.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        icon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(icon);
    }
    
    // 2. تحديث التاريخ لأول مرة
    updateDateDisplay();
});

let selectedLocation = '';

// وظيفة التنقل بين الصفحات
function navigateTo(id) {
    // إذا كان المنسق سيدخل لصفحة تأكيد الاستلام، نحدث التاريخ فوراً
    if (id === 'confirm-receipt-page') {
        updateDateDisplay();
    }

    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// فتح نموذج تحضير الطلب
function openPrepForm(location) {
    selectedLocation = location;
    const otherGroup = document.getElementById('other-location-group');
    const title = document.getElementById('prep-title');
    
    if(location === 'other') {
        title.innerText = "نقطة استلام أخرى";
        otherGroup.style.display = 'block';
    } else {
        title.innerText = "تحضير طلب: " + location;
        otherGroup.style.display = 'none';
    }
    navigateTo('prep-form-page');
}

// إرسال طلب تحضير (واتساب)
function sendPrepOrder() {
    const orderNum = document.getElementById('order-number').value;
    const orderVal = document.getElementById('order-value').value;
    const notes = document.getElementById('order-notes').value || "لا يوجد";
    const finalLocation = (selectedLocation === 'other') ? document.getElementById('custom-location').value : selectedLocation;

    if(!finalLocation || !orderNum || !orderVal) {
        alert("يرجى تعبئة الحقول الأساسية");
        return;
    }

    const msg = `*📢 طلب جديد متاح | رقم #${orderNum}*%0A` +
                `*🏪 نقطه الاستلام*: ${finalLocation}%0A` +
                `*💵 مطلوب دفعه*: ${orderVal} د.أ%0A` +
                `*📝 ملاحظات:*: ${notes}%0A%0A` +
                `———————————————%0A` +
                `*⚠️ تعليمات القبول:*%0A` +
                `*1- ⛔️ تأكد من جاهزيتك وتوفر المبلغ.*%0A` +
                `*2- 📍أرسل موقعك المباشر (Live Location) للمنسق.*%0A` +
                `*3- 🔄 سيتم تعيين الكابتن الأقرب بعد 30 ثانية.*%0A%0A` +
                `*HIGHWAY Delivery | أسرع طريق لطلباتك 🩵.*`;

    window.open(`https://wa.me/?text=${msg}`, '_blank');
}

// إرسال تأكيد الاستلام (واتساب)
function sendConfirmation() {
    const captain = document.getElementById('captain-name').value;
    const timeRaw = document.getElementById('arrival-time').value;
    const suffix = document.getElementById('order-suffix').value;
    
    // نأخذ التاريخ المحدث حالياً من الواجهة
    const datePrefix = document.getElementById('date-prefix').innerText;

    if(!captain || !timeRaw || !suffix) {
        alert("يرجى تعبئة كافة الحقول");
        return;
    }

    // تحويل الوقت من نظام 24 إلى نظام 12 ساعة (AM/PM)
    let [hours, minutes] = timeRaw.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeFormatted = `${hours}:${minutes} ${ampm}`;

    const msg = `📢 تنبيه: الكابتن في الطريق إليكم!%0A` +
                `تم إسناد الطلب للكابتن *${captain}*%0A` +
                `الآن طريقه لإستلام الطلب رقم ${datePrefix}${suffix}%0A` +
                `⏰ وقت الوصول المتوقع ${timeFormatted}%0A%0A` +
                `شكر لكم على سرعة التجاوب واحترافيتكم العالية 🩵%0A` +
                `HIGHWAY Delivery | The Fastest Way to Your Orders`;

    window.open(`https://wa.me/?text=${msg}`, '_blank');
}