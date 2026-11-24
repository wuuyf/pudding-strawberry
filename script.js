/* =========================================================
   布丁 & 草莓 — 設定區（平常只需要改這裡）
   ========================================================= */
const CONFIG = {
  // 出生年：年齡會自動用「今年 - 出生年」計算，不用每年改
  birthYear: 2009,

  // 背景照片：換成 images/ 裡任何一張即可（會自動淡化）
  background: "images/together-2.webp",

  // 頁尾連結：Linktree 網址填好就會出現按鈕；留空字串就隱藏
  linktree: "",
  github: "https://github.com/wuuyf",
};

/* =========================================================
   文案（中文 / 日文 / 英文）
   ========================================================= */
const TEXT = {
  "zh-Hant": {
    title: "布丁 & 草莓",
    subtitle: "我家的兩隻老貓咪",
    skip: "略過",
    introQ: "誰在裡面？",
    introHi: "嗨！我們是布丁和草莓 👋",
    introDown: "往下看看我們",
    profilesTitle: "認識我們",
    swipeHint: "← 左右滑滑看 →",
    puddingName: "布丁",
    strawberryName: "草莓",
    age: "年齡",
    weight: "體重",
    gender: "性別",
    boy: "男生",
    girl: "女生",
    ageUnit: (n) => `${n} 歲`,
    puddingTags: ["愛撒嬌", "呆萌", "愛吃", "怕男生"],
    strawberryTags: ["傲嬌", "愛撒嬌", "愛討抱抱", "活潑"],
    puddingText:
      "布丁是家裡的大隻男生，毛色比較淺，7.2 公斤圓滾滾的。個性呆呆萌萌、很愛撒嬌，也超級愛吃。唯一的弱點是有點怕男生。",
    strawberryText:
      "草莓是嬌小的女生，毛色比較深，只有 4.5 公斤。個性傲嬌又活潑，其實非常愛撒嬌，最喜歡找人討抱抱。",
    kittenTitle: "小時候",
    kittenText: "剛來我們家的時候，還是小小一隻！",
    galleryTitle: "合照 & 插圖",
    illustSoon: "插圖準備中 ✏️",
    thanks: "謝謝你來看我們 🐾",
    replay: "再看一次開場",
    navKitten: "小時候",
    navGallery: "合照",
  },
  ja: {
    title: "プリン & いちご",
    subtitle: "うちのシニア猫ふたり",
    skip: "スキップ",
    introQ: "だれかいるのかな？",
    introHi: "こんにちは！プリンといちごです 👋",
    introDown: "もっと見る",
    profilesTitle: "はじめまして",
    swipeHint: "← スワイプしてね →",
    puddingName: "プリン",
    strawberryName: "いちご",
    age: "年齢",
    weight: "体重",
    gender: "性別",
    boy: "男の子",
    girl: "女の子",
    ageUnit: (n) => `${n}歳`,
    puddingTags: ["甘えん坊", "天然", "食いしん坊", "男の人が苦手"],
    strawberryTags: ["ツンデレ", "甘えん坊", "抱っこ大好き", "元気いっぱい"],
    puddingText:
      "プリンは大きな男の子。毛の色は明るめで、体重7.2kgのまんまるボディです。ぽやっとした天然キャラで、甘えん坊の食いしん坊。男の人がちょっと苦手です。",
    strawberryText:
      "いちごは小柄な女の子。毛の色は濃いめで、体重は4.5kg。ツンデレで元気いっぱいですが、本当はとても甘えん坊で、抱っこをせがむのが大好きです。",
    kittenTitle: "子猫のころ",
    kittenText: "うちに来たばかりのころ。まだこんなに小さかった！",
    galleryTitle: "ツーショット & イラスト",
    illustSoon: "イラスト準備中 ✏️",
    thanks: "見に来てくれてありがとう 🐾",
    replay: "オープニングをもう一度",
    navKitten: "子猫",
    navGallery: "写真",
  },
  en: {
    title: "Pudding & Strawberry",
    subtitle: "Our two senior cats",
    skip: "Skip",
    introQ: "Who's in there?",
    introHi: "Hi! We're Pudding and Strawberry 👋",
    introDown: "Scroll down to meet us",
    profilesTitle: "Meet us",
    swipeHint: "← Swipe →",
    puddingName: "Pudding",
    strawberryName: "Strawberry",
    age: "Age",
    weight: "Weight",
    gender: "I'm a",
    boy: "Boy",
    girl: "Girl",
    ageUnit: (n) => `${n} yrs`,
    puddingTags: ["Cuddly", "Goofy", "Foodie", "Shy around men"],
    strawberryTags: ["Sassy", "Cuddly", "Hug demander", "Playful"],
    puddingText:
      "Pudding is our big boy, with lighter fur and a round 7.2 kg body. He's goofy, super cuddly and loves his food. His one weakness: he's a little scared of men.",
    strawberryText:
      "Strawberry is our petite girl, with darker fur and only 4.5 kg. She's sassy and full of energy, but secretly a total sweetheart who's always asking to be held.",
    kittenTitle: "As kittens",
    kittenText: "When they first came home, they were this tiny!",
    galleryTitle: "Photos & Drawings",
    illustSoon: "Drawings coming soon ✏️",
    thanks: "Thanks for stopping by 🐾",
    replay: "Replay the intro",
    navKitten: "Kittens",
    navGallery: "Photos",
  },
};

/* =========================================================
   以下是程式，一般不需要改
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// localStorage 在某些瀏覽器（例如 IG 內建瀏覽器、無痕模式）可能不能用，所以包 try/catch
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* 忽略 */ } },
};

/* ---------- 基本設定 ---------- */
$(".bg-photo").style.backgroundImage = `url("${CONFIG.background}")`;
$("#year").textContent = new Date().getFullYear();
$("#githubLink").href = CONFIG.github;
if (CONFIG.linktree) {
  $("#linktreeLink").href = CONFIG.linktree;
  $("#linktreeLink").hidden = false;
}

/* ---------- 語言切換 ---------- */
function applyLang(lang) {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  $$("[data-i18n-list]").forEach((ul) => {
    ul.innerHTML = t[ul.dataset.i18nList].map((s) => `<li>${s}</li>`).join("");
  });
  const age = new Date().getFullYear() - CONFIG.birthYear;
  $$("[data-age]").forEach((el) => (el.textContent = t.ageUnit(age)));
  document.title = `${t.title} 🐾`;
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  store.set("lang", lang);
}

// 先用上次選的語言；沒有的話，看手機語言（日文→日、中文→中、其他→英）
const guessLang = () => {
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("ja") ? "ja" : nav.startsWith("zh") ? "zh-Hant" : "en";
};
const savedLang = store.get("lang");
applyLang(TEXT[savedLang] ? savedLang : guessLang());

$$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

/* ---------- ① 開場驚喜 ---------- */
const intro = $("#intro");
const PARTICLES = ["🐾", "✨", "💛", "🌻", "⭐", "🤎", "🐟"];

function burst() {
  const box = $("#burst");
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = PARTICLES[i % PARTICLES.length];
    const angle = Math.random() * Math.PI * 2;
    const dist = 150 + Math.random() * 110;
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    p.style.setProperty("--rot", `${(Math.random() - 0.5) * 120}deg`);
    p.style.animationDelay = `${0.5 + Math.random() * 0.2}s`;
    box.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

function closeIntro() {
  intro.classList.add("closed");
  document.body.classList.remove("intro-open");
}

function openIntro() {
  intro.classList.remove("revealed", "closed");
  document.body.classList.add("intro-open");
  window.scrollTo({ top: 0, behavior: "instant" });
}

$("#introKnock").addEventListener("click", () => {
  intro.classList.add("revealed");
  burst();
});
$("#introDown").addEventListener("click", closeIntro);
$("#introSkip").addEventListener("click", closeIntro);
$("#replayIntro").addEventListener("click", openIntro);

/* ---------- 輪播（左右滑 + 點點 + 箭頭） ---------- */
$$("[data-carousel]").forEach((carousel) => {
  const track = $(".track", carousel);
  const slides = $$(".slide", track);
  const dotsBox = $(".dots", carousel);

  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", `${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(b);
    return b;
  });

  const current = () => {
    // 找出離可視區中心最近的那一張
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  };

  const prevBtn = $(".prev", carousel);
  const nextBtn = $(".next", carousel);

  function goTo(i) {
    const s = slides[Math.max(0, Math.min(i, slides.length - 1))];
    track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.offsetWidth) / 2, behavior: "smooth" });
  }

  function update() {
    const c = current();
    dots.forEach((d, i) => d.classList.toggle("active", i === c));
    // 第一張隱藏「上一張」、最後一張隱藏「下一張」
    prevBtn?.classList.toggle("is-hidden", c === 0);
    nextBtn?.classList.toggle("is-hidden", c === slides.length - 1);
  }

  track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });

  // 滑鼠拖曳（電腦用滑鼠也能左右拖；觸控板、手機原本就能滑）
  let dragging = false, moved = false, startX = 0, startLeft = 0;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    dragging = true; moved = false;
    startX = e.clientX; startLeft = track.scrollLeft;
    track.classList.add("dragging");
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    const target = current();
    track.classList.remove("dragging");
    goTo(target);
  });
  // 拖曳結束時不要誤觸「點圖放大」
  track.addEventListener("click", (e) => {
    if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
  }, true);
  track.addEventListener("dragstart", (e) => e.preventDefault());

  // 鍵盤左右鍵
  track.tabIndex = 0;
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current() - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(current() + 1); }
  });
  prevBtn?.addEventListener("click", () => goTo(current() - 1));
  nextBtn?.addEventListener("click", () => goTo(current() + 1));
  update();
});

/* ---------- 點圖片放大 ---------- */
const lightbox = $("#lightbox");
const lbImg = $("img", lightbox);

$$(".cat-section .slide img, [data-lightbox] img").forEach((img) => {
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.hidden = false;
  });
});
lightbox.addEventListener("click", () => (lightbox.hidden = true));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.hidden = true;
});

/* ---------- 底部小圓鈕：目前看到哪一段就亮哪一顆 ---------- */
const navLinks = $$(".bottom-nav a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
navLinks.forEach((a) => observer.observe($(a.getAttribute("href"))));
