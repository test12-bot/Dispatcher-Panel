function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`; 
}

// تحديث النص الظاهر في نموذج تأكيد الاستلام
function updateDateDisplay() {
    const datePrefixElement = document.getElementById('date-prefix');
    if (datePrefixElement) {
        const currentDate = getFormattedDate();
        datePrefixElement.innerText = `ORD#${currentDate}-`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // توليد أيقونات الخلفية
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
    updateDateDisplay();
});

let selectedLocation = '';

function navigateTo(id) {
    if (id === 'confirm-receipt-page') {
        updateDateDisplay();
    }
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

// --- إرسال طلب تحضير (الحل هنا) ---
function sendPrepOrder() {
    const orderNum = document.getElementById('order-number').value;
    const orderVal = document.getElementById('order-value').value || "غير متوفر تفاصيل";
    const finalLocation = (selectedLocation === 'other') ? document.getElementById('custom-location').value : selectedLocation;
    const notes = document.getElementById('order-notes').value || "لا يوجد ملاحظات";
    const finalLocation = (selectedLocation === 'other') ? document.getElementById('custom-location').value : selectedLocation;

    if(!finalLocation || !ordernum) {
        alert("يرجى تعبئة الحقول الأساسية");
        return;
    }

    // بناء النص الخام
    const rawMsg = `*📢 طلب جديد متاح | رقم #${orderNum}*\n` +
                   `*🏪 نقطه الاستلام*: ${finalLocation}\n` +
                   `*💵 مطلوب دفعه*: ${orderVal} د.أ\n\n` +
                   `*📝 ملاحظات*: ${notes}\n\n` +
                   `———————————————\n` +
                   `*⚠️ تعليمات القبول:*\n` +
                   `*1- ⛔️ تأكد من جاهزيتك وتوفر المبلغ.*\n` +
                   `*2- 📍أرسل موقعك المباشر (Live Location) للمنسق.*\n` +
                   `*3- 🔄 سيتم تعيين الكابتن الأقرب بعد 30 ثانية.*\n\n` +
                   `*HIGHWAY Delivery | أسرع طريق لطلباتك 🩵.*`;

    // تشفير النص لضمان وصوله كاملاً لجميع الهواتف
    const encodedMsg = encodeURIComponent(rawMsg);
    window.open(`https://api.whatsapp.com/send?text=${encodedMsg}`, '_blank');
}

// --- إرسال تأكيد الاستلام (الحل هنا) ---
function sendConfirmation() {
    const captain = document.getElementById('captain-name').value;
    const timeRaw = document.getElementById('arrival-time').value;
    const suffix = document.getElementById('order-suffix').value;
    const datePrefix = document.getElementById('date-prefix').innerText;

    if(!captain || !timeRaw || !suffix) {
        alert("يرجى تعبئة كافة الحقول");
        return;
    }

    let [hours, minutes] = timeRaw.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeFormatted = `${hours}:${minutes} ${ampm}`;

    const rawMsg = `📢 تنبيه: الكابتن في الطريق إليكم!\n` +
                   `تم إسناد الطلب للكابتن *${captain}*\n` +
                   `الآن في طريقه لإستلام الطلب رقم ${datePrefix}${suffix}\n` +
                   `⏰ وقت الوصول المتوقع ${timeFormatted}\n\n` +
                   `شكرًا لكم على سرعة التجاوب واحترافيتكم العالية 🩵\n` +
                   `HIGHWAY Delivery | The Fastest Way to Your Orders`;

    const encodedMsg = encodeURIComponent(rawMsg);
    window.open(`https://api.whatsapp.com/send?text=${encodedMsg}`, '_blank');
}