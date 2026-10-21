const ICONS = {
  burger:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5"/><path d="M3.5 10.5h17"/><path d="M4 14h16"/><path d="M4.5 17.5h15c.4 1.6-.9 3-2.6 3H7.1c-1.7 0-3-1.4-2.6-3Z"/></svg>`,
  wrap:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.5 19 9l-3.3 10.5L4 15z"/><path d="M9 7.3l8.2 3M8 10.6l7.5 2.7M7 13.8l6.8 2.5"/></svg>`,
  coffee:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z"/><path d="M16 10.5h1.5a2.25 2.25 0 0 1 0 4.5H16"/><path d="M8 4.5c-.6.7-.6 1.3 0 2M11.3 4.5c-.6.7-.6 1.3 0 2"/></svg>`,
  cake:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-6.5A2.5 2.5 0 0 1 6.5 11h11a2.5 2.5 0 0 1 2.5 2.5V20"/><path d="M4 20h16"/><path d="M4 16.5h16"/><path d="M9 11V8a1 1 0 0 1 1-1h.4a1 1 0 0 0 .8-1.6l-.4-.5.4-.5A1 1 0 0 0 10.4 3H10"/></svg>`,
  pin:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg>`,
  pastry:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18 12 5l8 13H4Z"/><path d="M8 18l4-7 4 7"/></svg>`,
  plate:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.2"/></svg>`,
  forkKnife:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v7.5a1.5 1.5 0 0 0 3 0V2M8.5 9.5V22"/><path d="M16 2c-1.4.6-2.2 2.3-2.2 4.5 0 1.8.7 3.3 1.7 4.1L16 22"/></svg>`,
  store:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5 5.2 4h13.6l1.2 5.5"/><path d="M4 9.5a2.2 2.2 0 0 0 4.3.7 2.2 2.2 0 0 0 4.3 0 2.2 2.2 0 0 0 4.3 0 2.2 2.2 0 0 0 4.3-.7"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M10 20v-5h4v5"/></svg>`,
  cart:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 12.2a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  book:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"/></svg>`,
  paw:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="8" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="17" cy="8" r="1.6"/><path d="M12 12.5c-3 0-5.5 2-5.5 4.3 0 1.4 1.2 2.2 2.6 2.2.9 0 1.6-.4 2.3-.8.4-.2.8-.2 1.2 0 .7.4 1.4.8 2.3.8 1.4 0 2.6-.8 2.6-2.2 0-2.3-2.5-4.3-5.5-4.3Z"/></svg>`,
};

const RESTAURANTS = [
  {name:"Bullgurz", icon:ICONS.burger},
  {name:"شاورما الريف", icon:ICONS.wrap},
  {name:"حلويات نفيسة", icon:ICONS.cake},
  {name:"مطعم أبو أحمد النسور للمناسف", icon:ICONS.plate},
  {name:"قهوة أبو صالح", icon:ICONS.coffee},
  {name:"معجنات جلنار", icon:ICONS.pastry},
  {name:"حماده", icon:ICONS.store},
  {name:"معجنات الأمير", icon:ICONS.pastry},
  {name:"سوبر ماركت زاد السلط", icon:ICONS.cart},
  {name:"مكتبة شفا العامرية", icon:ICONS.book},
  {name:"مطاعم الدمشقي", icon:ICONS.forkKnife},
  {name:"النشاش ستورز", icon:ICONS.store},
  {name:"Cheetah Pet Shop", icon:ICONS.paw},
  {name:"مطعم الخليج", icon:ICONS.forkKnife},
  {name:"مكتبة الياسر", icon:ICONS.book},
].sort((a, b) => a.name.localeCompare(b.name, 'ar'));

const SCREEN_META = {
  'screen-dashboard':  { back:null },
  'screen-restaurants':{ back:'screen-dashboard' },
  'screen-order':      { back:'screen-restaurants' },
  'screen-confirm':    { back:'screen-dashboard' },
  'screen-success':    { back:null },
};

let state = {
  pickup:{ name:"", isCustom:false }
};

const FOOD_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11c0-3.5 3.6-6 8-6s8 2.5 8 6H4Z"/><path d="M3 14.5h18"/><path d="M5 17.5h14v.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C8 3 4.5 4.5 2.5 7L12 21 21.5 7C19.5 4.5 16 3 12 3Z"/><circle cx="10" cy="9" r="1.2"/><circle cx="14" cy="11" r="1.2"/><circle cx="12" cy="15" r="1"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v2M11 3v2M14 3v2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2 2 0 0 0 2 2v9"/><path d="M10 3v7a2 2 0 0 1-2 2"/><path d="M17 3c-2 1.5-3 4-3 7h3v11"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11a5 5 0 0 1 10 0"/><path d="M6.5 11h11L12 21 6.5 11Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'
];

function buildSplashIcons() {
    const wrap = document.getElementById('splashIcons');
    for (let i = 0; i < 18; i++) {
        const el = document.createElement('div');
        el.className = 'float-icon';
        const size = 26 + Math.random() * 34;
        el.style.width = el.style.height = size + 'px';
        el.style.left = (Math.random() * 94) + '%';
        el.style.animationDuration = (9 + Math.random() * 9) + 's';
        el.style.animationDelay = (-Math.random() * 14) + 's';
        el.innerHTML = FOOD_ICONS[i % FOOD_ICONS.length];
        wrap.appendChild(el);
    }
}

/* ---------- فيديو الشاشة الافتتاحية بخلفية شفافة ----------
   الفيديو لا يحمل قناة شفافية، لذلك نعرضه عبر WebGL ونحذف لونه التركوازي لحظياً
   فيظهر الإطار الزجاجي من خلفه تماماً كما كان مع الصورة.  إن تعذّر ذلك تظهر صورة اللوجو الثابتة. */
function initIntroVideo() {
    const video = document.getElementById('splashVideo');
    const canvas = document.getElementById('splashCanvas');
    const fallback = document.getElementById('splashFallback');
    if (!video || !canvas || !fallback) return null;

    let stopped = false, started = false;
    const showFallback = () => {
        if (started) return;
        canvas.style.display = 'none';
        fallback.classList.add('show');
    };

    let gl = null;
    try {
        gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: true, antialias: false });
    } catch (e) { gl = null; }
    if (!gl) { showFallback(); return { stop() {} }; }

    const compile = (type, src) => {
        const sh = gl.createShader(type);
        gl.shaderSource(sh, src); gl.compileShader(sh);
        return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };
    const vs = compile(gl.VERTEX_SHADER,
        'attribute vec2 p; varying vec2 uv;' +
        'void main(){ uv = vec2(p.x*0.5+0.5, 0.5-p.y*0.5); gl_Position = vec4(p,0.0,1.0); }');
    const fs = compile(gl.FRAGMENT_SHADER,
        'precision mediump float; uniform sampler2D tex; varying vec2 uv;' +
        'const vec3 BG = vec3(33.0,204.0,208.0)/255.0;' +            // لون خلفية الفيديو
        'void main(){' +
        '  vec3 c = texture2D(tex, uv).rgb;' +
        '  float a = clamp((distance(c, BG) - 0.035) / 0.80, 0.0, 1.0);' +
        '  vec3 f = a > 0.001 ? clamp((c - (1.0 - a) * BG) / a, 0.0, 1.0) : vec3(0.0);' +
        '  gl_FragColor = vec4(f * a, a);' +                          // ألوان مضروبة مسبقاً بالشفافية
        '}');
    const prog = gl.createProgram();
    if (!vs || !fs) { showFallback(); return { stop() {} }; }
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { showFallback(); return { stop() {} }; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const draw = () => {
        if (video.readyState < 2) return;
        try {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        } catch (e) { return; }
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    const next = (fn) => (video.requestVideoFrameCallback ? video.requestVideoFrameCallback(fn) : requestAnimationFrame(fn));
    const loop = () => {
        if (stopped) return;
        draw();
        if (!video.ended) next(loop);
    };

    let looping = false;
    const begin = () => {
        if (looping) return;
        looping = true; started = true;
        fallback.classList.remove('show'); canvas.style.display = '';
        next(loop);
    };
    video.addEventListener('playing', begin);
    if (!video.paused && video.readyState >= 3) begin();       // بدأ التشغيل التلقائي قبل تسجيل المستمع
    video.addEventListener('ended', draw);                       // تثبيت آخر إطار (اللوجو كاملاً)
    video.addEventListener('error', showFallback);

    video.muted = true;                                          // مطلوب ليعمل التشغيل التلقائي
    const p = video.play();
    if (p && p.catch) p.catch(showFallback);                     // التشغيل التلقائي ممنوع (مثلاً توفير الطاقة)
    setTimeout(() => { if (!video.paused && video.currentTime > 0) begin(); else showFallback(); }, 3000);                              // إن لم يبدأ الفيديو خلال 3 ثوانٍ

    return { stop() { stopped = true; video.pause(); } };
}

buildSplashIcons();

const splashEl = document.getElementById('splash');
let skipSplash = false;
try{ skipSplash = sessionStorage.getItem('hw-skip-splash')==='1'; sessionStorage.removeItem('hw-skip-splash'); }catch(e){}
if(skipSplash){ splashEl.style.transition='none'; splashEl.classList.add('hide'); }
const intro = skipSplash ? null : initIntroVideo();
document.getElementById('enterBtn').addEventListener('click', () => {
  splashEl.classList.add('hide');
  if (intro) setTimeout(intro.stop, 800);   // توفير للبطارية بعد إخفاء الشاشة
});

function goTo(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const meta = SCREEN_META[id] || {};
  const backBtn = document.getElementById('headerBack');
  backBtn.classList.toggle('show', !!meta.back);
  backBtn.onclick = () => { if(meta.back) goTo(meta.back); };

  window.scrollTo({top:0, behavior:'instant'});
  // كل صفحة تُفتح "نظيفة" كأنها حُمّلت من جديد
  if(id==='screen-confirm'){ document.getElementById('confirmForm').reset(); clearInvalid('confirmForm'); }
}

/* الضغط على اللوجو: إعادة تحميل الموقع (بدون إعادة شاشة الدخول) */
function reloadSite(){
  try{ sessionStorage.setItem('hw-skip-splash','1'); }catch(e){}
  location.reload();
}

function resetAndGo(id){
  document.getElementById('orderForm').reset();
  document.getElementById('confirmForm').reset();
  clearInvalid('orderForm');
  clearInvalid('confirmForm');
  state.pickup = {name:"", isCustom:false};
  document.getElementById('successRef').style.display = 'none';
  goTo(id);
}

function renderRestaurants(){
  const grid = document.getElementById('restGrid');
  grid.innerHTML = '';
  RESTAURANTS.forEach(r=>{
    const btn = document.createElement('button');
    btn.type='button';
    btn.className='rest-card glass';
    btn.innerHTML = `<span class="ico">${r.icon}</span><span>${r.name}</span>`;
    btn.addEventListener('click', ()=>selectPickup(r.name, false));
    grid.appendChild(btn);
  });
  const custom = document.createElement('button');
  custom.type='button';
  custom.className='rest-card custom';
  custom.innerHTML = `<span class="ico">${ICONS.pin}</span><span>نقطة استلام أخرى</span>`;
  custom.addEventListener('click', ()=>selectPickup("", true));
  grid.appendChild(custom);
}
renderRestaurants();

function selectPickup(name, isCustom){
  state.pickup = {name, isCustom};
  document.getElementById('orderForm').reset();
  clearInvalid('orderForm');

  const pill = document.getElementById('pickupPillText');
  const customField = document.getElementById('customNameField');
  const customInput = document.getElementById('customName');

  if(isCustom){
    pill.textContent = 'نقطة استلام أخرى';
    customField.style.display = 'block';
    customInput.value = '';
  }else{
    pill.textContent = name;
    customField.style.display = 'none';
  }

  goTo('screen-order');
}

function pad2(n){ return String(n).padStart(2,'0'); }

function getDatePrefix(){
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = pad2(d.getMonth()+1);
  const dd = pad2(d.getDate());
  return `${yy}${mm}${dd}`;
}

function setInvalid(fieldId, invalid){
  document.getElementById(fieldId).classList.toggle('invalid', invalid);
}
function clearInvalid(formId){
  document.getElementById(formId).querySelectorAll('.field').forEach(f=>f.classList.remove('invalid'));
}

function formatTime12h(timeStr){
  if(!timeStr) return '';
  const [h,m] = timeStr.split(':').map(Number);
  const period = h < 12 ? 'ص' : 'م';
  let h12 = h % 12; if(h12===0) h12 = 12;
  return `${pad2(h12)}:${pad2(m)} ${period}`;
}

function openWhatsApp(message){
  const url = 'https://wa.me/?text=' + encodeURIComponent(message);
  window.open(url, '_blank');
}

function setBtnLoading(btn, isLoading){
  btn.classList.toggle('loading', isLoading);
}

document.getElementById('orderPrefixTag').textContent = `ORD#${getDatePrefix()}-`;

document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  let valid = true;

  let pickupName = state.pickup.name;
  if(state.pickup.isCustom){
    const customVal = document.getElementById('customName').value.trim();
    setInvalid('customNameField', !customVal);
    if(!customVal) valid = false;
    pickupName = customVal;
  }

  const orderNumber = document.getElementById('orderNumber').value.trim();
  setInvalid('orderNumField', !orderNumber);
  if(!orderNumber) valid = false;

  const orderValueRaw = document.getElementById('orderValue').value.trim();
  const orderValueOk = orderValueRaw !== '';
  setInvalid('orderValueField', !orderValueOk);
  if(!orderValueOk) valid = false;

  if(!valid) return;

  const btn = document.getElementById('orderSubmitBtn');
  setBtnLoading(btn, true);

  setTimeout(()=>{
    const notes = document.getElementById('orderNotes').value.trim() || 'لا يوجد';
    const valueFormatted = orderValueRaw;

    const message =
`*📢 طلب جديد متاح | رقم #${orderNumber}*
*🏪 نقطة الاستلام*: ${pickupName}
*💵 مطلوب دفعه*: ${valueFormatted} د.أ
*📝 ملاحظات*: ${notes}

———————————————
*⚠️ تعليمات القبول:*
*1- ⛔️ تأكد من جاهزيتك وتوفر المبلغ.*
*2- 📍أرسل موقعك المباشر (Live Location) للمنسق.*
*3- 🔄 سيتم تعيين الكابتن الأقرب بعد 30 ثانية.*

*HIGHWAY Delivery | أسرع طريق لطلباتك 🩵.*`;

    openWhatsApp(message);
    setBtnLoading(btn, false);

    document.getElementById('successSub').textContent = 'تم فتح واتساب لمشاركة تفاصيل الطلب الجديد.';
    const ref = document.getElementById('successRef');
    ref.textContent = `رقم الطلب #${orderNumber}`;
    ref.style.display = 'inline-block';
    goTo('screen-success');
  }, 550);
});

document.getElementById('confirmForm').addEventListener('submit', function(e){
  e.preventDefault();
  let valid = true;

  const captainName = document.getElementById('captainName').value.trim();
  setInvalid('captainNameField', !captainName);
  if(!captainName) valid = false;

  const arrivalTime = document.getElementById('arrivalTime').value;
  setInvalid('arrivalTimeField', !arrivalTime);
  if(!arrivalTime) valid = false;

  const orderSuffix = document.getElementById('confirmOrderNumber').value.trim();
  setInvalid('confirmOrderNumField', !orderSuffix);
  if(!orderSuffix) valid = false;

  if(!valid) return;

  const btn = document.getElementById('confirmSubmitBtn');
  setBtnLoading(btn, true);

  setTimeout(()=>{
    const fullOrderNumber = `ORD#${getDatePrefix()}-${orderSuffix}`;
    const timeFormatted = formatTime12h(arrivalTime);

    const message =
`📢 تنبيه: الكابتن في الطريق إليكم!

تم إسناد الطلب للكابتن *${captainName}*
الآن في طريقه لإستلام الطلب رقم *${fullOrderNumber}*
⏰ وقت الوصول المتوقع: *${timeFormatted}*

شكراً لكم على سرعة التجاوب واحترافيتكم العالية 🩵
HIGHWAY Delivery | The Fastest Way to Your Orders`;

    openWhatsApp(message);
    setBtnLoading(btn, false);

    document.getElementById('successSub').textContent = 'تم فتح واتساب لتأكيد استلام الطلب مع الكابتن.';
    const ref = document.getElementById('successRef');
    ref.textContent = fullOrderNumber;
    ref.style.display = 'inline-block';
    goTo('screen-success');
  }, 550);
});

goTo('screen-dashboard');
