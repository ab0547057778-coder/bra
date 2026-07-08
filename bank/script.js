// =============================
// Professional Script
// =============================

// عناصر الصفحة
const toast = document.getElementById("toast");

// نسخ النص
async function copyText(id) {

    const text = document.getElementById(id).innerText.trim();

    try {

        await navigator.clipboard.writeText(text);

        showToast("✅ تم النسخ بنجاح");

        // اهتزاز للأجهزة المدعومة
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }

        // Confetti
        confettiBurst();

    } catch {

        showToast("❌ تعذر النسخ");

    }

}

// إشعار
function showToast(message){

    toast.innerHTML = message;

    toast.style.display = "block";

    toast.style.opacity = "1";

    toast.style.transform = "translate(-50%,0)";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(()=>{

        toast.style.opacity="0";

        toast.style.transform="translate(-50%,20px)";

        setTimeout(()=>{
            toast.style.display="none";
        },300);

    },2000);

}


// =============================
// Ripple Effect
// =============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";

circle.style.top=e.offsetY-d/2+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});


// =============================
// Reveal Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".card,header,.whatsapp").forEach(el=>observer.observe(el));


// =============================
// Card Tilt
// =============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/20;

const rotateX=(rect.height/2-y)/20;

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});


// =============================
// Confetti
// =============================

function confettiBurst(){

for(let i=0;i<25;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
`hsl(${Math.random()*360},100%,60%)`;

c.style.animationDuration=
(1+Math.random())+"s";

document.body.appendChild(c);

setTimeout(()=>c.remove(),1800);

}

}


// =============================
// Loading Animation
// =============================

window.onload=()=>{

document.body.style.opacity="1";

}


// =============================
// Console Message 😎
// =============================

console.log("%c⚓ Welcome Captain!",
"font-size:28px;color:#00C2FF;font-weight:bold;");

console.log("%cDeveloped with ❤️",
"font-size:16px;color:#fff;background:#0077B6;padding:8px;");