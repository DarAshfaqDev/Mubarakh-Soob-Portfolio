/**
 * ==========================================================================
 * 🗄️ STATE DATA ENGINE REPOSITORY CONSTRAINTS
 * ==========================================================================
 */

let globalCoursesData = [
  { id: "c1", title: "Rahbar-e-Aqeedah", urdu: "رہبرِ عقیدہ", cat: "published", year: "2018", desc: "A comprehensive guide on Islamic Aqeedah for the Ahl-e-Sunnat." },
  { id: "c2", title: "Tasawwuf aur Haqeeqat", urdu: "تصوف اور حقیقت", cat: "published", year: "2019", desc: "An authentic exploration of Sufism and its spiritual dimensions." },
  { id: "c3", title: "Noor e Mustafa ﷺ", urdu: "نور مصطفیٰ ﷺ", cat: "published", year: "2020", desc: "The Prophetic light — a deep meditation on the Seerah." },
  { id: "c4", title: "Kashf ul Haqaiq", urdu: "کشف الحقائق", cat: "published", year: "2021", desc: "Unveiling truths — refutations and scholarly responses." },
  { id: "c5", title: "Maqam e Awliyaa", urdu: "مقامِ اولیاء", cat: "published", year: "2022", desc: "The stations and ranks of the Friends of Allah." },
  { id: "c6", title: "Ilm e Ghayb", urdu: "علمِ غیب", cat: "published", year: "2022", desc: "A scholarly treatise on the knowledge of the unseen." },
  { id: "c7", title: "Ishq e Rasool ﷺ", urdu: "عشقِ رسول ﷺ", cat: "published", year: "2023", desc: "The love of the Prophet ﷺ — manifestations and meanings." },
  { id: "c8", title: "Silsila e Qadiriyya", urdu: "سلسلہ قادریہ", cat: "published", year: "2023", desc: "History and spiritual lineage of the Qadri order." },
  { id: "c9", title: "Anwaar ul Uloom", urdu: "انوار العلوم", cat: "published", year: "2024", desc: "Lights of knowledge — collected scholarly discourses." },
  { id: "c10", title: "Fiqh e Hanafi", urdu: "فقہ حنفی", cat: "published", year: "2024", desc: "An introduction to Hanafi jurisprudence for the layman." },
  { id: "c11", title: "Bayan ul Haq", urdu: "بیان الحق", cat: "published", year: "2024", desc: "Elucidation of truth in matters of belief and practice." },
  { id: "c12", title: "Shariat wa Tariqat", urdu: "شریعت و طریقت", cat: "published", year: "2025", desc: "The harmonious relationship between Law and Path." },
  { id: "c13", title: "Rooh aur Ruhaniyet", urdu: "روح اور روحانیت", cat: "upcoming", year: "2025", desc: "An upcoming work on the soul and spirituality in Islam." },
  { id: "c14", title: "Muhibban e Nabi ﷺ", urdu: "محبانِ نبی ﷺ", cat: "upcoming", year: "2026", desc: "Stories of those who loved the Prophet ﷺ most deeply." },
  { id: "c15", title: "Research on Kashf", urdu: "کشف پر تحقیق", cat: "research", year: "2025", desc: "Academic research paper on spiritual unveiling in Sufi tradition." }
];

let globalLecturesData = [];

const YOUTUBE_CHANNEL_HANDLE = "MUBARAKAHMADRABANI";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@MUBARAKAHMADRABANI";
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const LECTURE_STORE_KEY = "mar_lecture_store_v1";
const LECTURE_SYNC_KEY = "mar_lecture_sync_v1";
function getLectureApiKey() {
  return (window.MAR_YOUTUBE_API_KEY || window.localStorage.getItem("mar_youtube_api_key") || "").trim();
}

function getActiveLectureTaxonomy() {
  return Array.isArray(lectureStore.taxonomy) && lectureStore.taxonomy.length ? lectureStore.taxonomy : lectureTaxonomy;
}

const lectureTaxonomy = [
  { name: "Aqeedah", keywords: ["aqeedah", "aqlidah", "belief", "iman", "tawheed", "tauheed", "shirk", "kalam", "usool"] },
  { name: "Tawheed", keywords: ["tawheed", "tauheed", "la ilaha illallah", "rububiyyah", "uluhiyyah", "asma", "sifat"] },
  { name: "Hadith", keywords: ["hadith", "ahadith", "sahih bukhari", "sahih muslim", "riwayat"] },
  { name: "Fiqh", keywords: ["fiqh", "masail", "masala", "wudu", "salah", "namaz", "fasting", "zakat", "nikah", "طلاق", "talaq"] },
  { name: "Tafseer", keywords: ["tafseer", "tafsir", "quran", "surah", "ayah", "aayat", "translation"] },
  { name: "Seerah", keywords: ["seerah", "seerat", "sirah", "prophet", "rasool", "nabawi", "nabi"] },
  { name: "Questions & Answers", keywords: ["q&a", "question", "answer", "questions", "jawab", "sawal"] },
  { name: "Refutations", keywords: ["refutation", "رد", "raadd", "answering", "reply", "rebuttal"] },
  { name: "Islamic History", keywords: ["history", "tareekh", "history of islam", "khilafat", "sahaba", "companion"] },
  { name: "Contemporary Issues", keywords: ["current", "modern", "issue", "contemporary", "today", "present"] },
  { name: "Women Related Topics", keywords: ["women", "sisters", "khwateen", "ladies", "female"] },
  { name: "Family & Marriage", keywords: ["family", "marriage", "nikah", "divorce", "husband", "wife", "parent"] },
  { name: "Ramadan Lectures", keywords: ["ramadan", "ramzan", "roza", "iftar", "taraweeh"] },
  { name: "Hajj & Umrah", keywords: ["hajj", "umrah", "makkah", "madina", "kaaba"] },
  { name: "General Lectures", keywords: ["lecture", "bayan", "waaz", "speech", "general"] }
];

const lectureStore = {
  playlists: [],
  videos: [],
  importLog: [],
  taxonomy: lectureTaxonomy,
  settings: {
    channelHandle: YOUTUBE_CHANNEL_HANDLE,
    lastSyncAt: null,
    uncategorizedNotice: []
  }
};

const lecturePlayerState = {
  player: null,
  queue: [],
  index: 0,
  autoplayNext: true,
  repeat: false,
  shuffle: false,
  currentVideoId: null
};

window.onYouTubeIframeAPIReady = function() {
  window.MAR_YT_API_READY = true;
};

const globalTeachingsData = [
  { ar: "اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ", ur: "علماء انبیاء کے وارث ہیں۔", en: '"The scholars are the inheritors of the Prophets, and the Prophets left neither dirham nor dinar as inheritance, but they left knowledge."', src: "Prophet Muhammad ﷺ · Sunan Abu Dawud" },
  { ar: "مَنْ عَرَفَ نَفْسَهُ فَقَدْ عَرَفَ رَبَّهُ", ur: "جس نے اپنے آپ کو پہچانا اس نے اپنے رب کو پہچانا۔", en: '"Whoever knows himself truly, knows his Lord. The journey inward is the greatest journey — for in the depths of the soul lies the mirror of the Divine."', src: "A Sufi Maxim" },
  { ar: "اَلْمَرْءُ مَعَ مَنْ أَحَبَّ", ur: "انسان اس کے ساتھ ہوگا جس سے وہ محبت کرتا ہے۔", en: '"A person will be with those whom he loves. So fill your heart with the love of the Prophet ﷺ, the Companions, and the Awliyaa."', src: "Prophet Muhammad ﷺ · Sahih Bukhari" }
];

/**
 * ==========================================================================
 * 📷 DYNAMIC AUTOMATED SEAMLESS GALLERY ENGINE
 * Spawns index mappings up to 58 assets without hardcoded file address names.
 * ==========================================================================
 */
const TOTAL_DASHBOARD_IMAGES = 58; 
const mediaGalleryMatrix = [];

for (let i = 1; i <= TOTAL_DASHBOARD_IMAGES; i++) {
  // Checks if the row index is even to create varying staggered masonry heights
  const dynamicToggleHeight = (i % 2 === 0);
  
  mediaGalleryMatrix.push({
    label: `Sacred Assembly Gathering — Record Archive #${i}`,
    h: dynamicToggleHeight ? 380 : 260, // Staggered heights for the masonry aesthetic
    src: `photos/gallery/gallery (${i}).jpg` // Perfectly matches the computer's auto-name layout
  });
}

/**
 * ==========================================================================
 * PLATFORM RUNTIME HOOKS & LIFECYCLE CONTROLLERS
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  setupCoreUIControllers();
  runParticleAnimationEngine();
  setupCarouselEngine();
  setupHeroImageRotationEngine(); 
  setupScrollReveals(); 

  bootstrapLectureCatalog().catch(err => {
    console.warn("Lecture catalog bootstrap failed:", err);
    hydrateLectureStore([]);
  });

  renderUserCoursesPortal("all", "");
  renderUserLecturesPortal("All");
  renderGalleryVisualGrid();
  
  syncAdminManagementDashboard();
});

let currentActiveModule = "user"; 

function setupCoreUIControllers() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => { loader.classList.add("hidden"); }, 1200);
  });

  let isDarkMode = true;
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    document.getElementById("theme-icon").className = isDarkMode ? "fas fa-moon" : "fas fa-sun";
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileCloseBtn");
  
  const toggleMenuTrigger = () => mobileMenu.classList.toggle("open");
  menuBtn.addEventListener("click", toggleMenuTrigger);
  mobileClose.addEventListener("click", toggleMenuTrigger);
  
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", toggleMenuTrigger);
  });

  const navbar = document.getElementById("navbar");
  const backTopBtn = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
      backTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("scrolled");
      backTopBtn.classList.remove("show");
    }
    trackNavigationHighlightState();
  });

  backTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const modToggleBtn = document.getElementById("moduleToggleBtn");
  const mobModToggleBtn = document.getElementById("mobileModuleToggleBtn");
  
 // 🔐 ADMIN LOGIN LOGIC
  const adminLoginModal = document.getElementById("adminLoginModal");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const loginErrorMsg = document.getElementById("loginErrorMsg");
  const closeLoginModalBtn = document.getElementById("closeLoginModalBtn");

  // Authorized Admin List
  const AUTHORIZED_EMAILS = ["moeedkamraan1123@gmail.com", "mubarakhamzah12@gmail.com"];
  const DUMMY_PASSWORD = "Pass@Admin2026"; 

  const executeToggleToAdmin = () => {
    currentActiveModule = "admin";
    document.getElementById("user-module").classList.remove("active-module");
    document.getElementById("admin-module").classList.add("active-module");
    document.querySelectorAll(".btn-toggle-text").forEach(el => el.textContent = "User View");
    adminLoginModal.classList.remove("open"); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const executeToggleToUser = () => {
    currentActiveModule = "user";
    document.getElementById("admin-module").classList.remove("active-module");
    document.getElementById("user-module").classList.add("active-module");
    document.querySelectorAll(".btn-toggle-text").forEach(el => el.textContent = "Admin Hub");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewToggle = () => {
    if (currentActiveModule === "user") {
      adminLoginModal.classList.add("open");
      loginErrorMsg.style.display = "none";
      adminLoginForm.reset();
    } else {
      executeToggleToUser();
    }
  };

  modToggleBtn.addEventListener("click", handleViewToggle);
  if(mobModToggleBtn) mobModToggleBtn.addEventListener("click", handleViewToggle);

  if(closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener("click", () => adminLoginModal.classList.remove("open"));
  }

  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const adminPasswordInput = document.getElementById("adminPasswordInput");

  if (togglePasswordBtn && adminPasswordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const isPassword = adminPasswordInput.getAttribute("type") === "password";
      adminPasswordInput.setAttribute("type", isPassword ? "text" : "password");
      togglePasswordBtn.className = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
      togglePasswordBtn.style.color = isPassword ? "var(--gold)" : "var(--text3)";
    });
  }

  if(adminLoginForm) {
    adminLoginForm.addEventListener("submit", () => {
      const emailInput = document.getElementById("adminEmailInput").value.trim().toLowerCase();
      const passwordInput = document.getElementById("adminPasswordInput").value;

      if (AUTHORIZED_EMAILS.includes(emailInput) && passwordInput === DUMMY_PASSWORD) {
        executeToggleToAdmin();
      } else {
        loginErrorMsg.style.display = "block";
      }
    });
  }

  const contactForm = document.getElementById("userQueryContactForm");
  if(contactForm) {
    contactForm.addEventListener("submit", () => {
      const btn = document.getElementById("contactSubmitBtn");
      btn.innerHTML = '<i class="fas fa-check-circle"></i> Sent Successfully — BarakAllahu Feek!';
      btn.style.background = "linear-gradient(135deg, var(--emerald-mid), var(--emerald-lt))";
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> &nbsp; Send Message';
        btn.style.background = "";
        contactForm.reset();
      }, 3500);
    });
  }

  const courseSearch = document.getElementById("courseSearchInput");
  if(courseSearch) {
    courseSearch.addEventListener("input", (e) => {
      const activeTab = document.querySelector(".filter-tab.active");
      const currentFilter = activeTab ? activeTab.getAttribute("data-filter") : "all";
      renderUserCoursesPortal(currentFilter, e.target.value.trim());
    });
  }

  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      const filterValue = e.target.getAttribute("data-filter");
      const searchVal = document.getElementById("courseSearchInput").value;
      renderUserCoursesPortal(filterValue, searchVal);
    });
  });

  document.querySelectorAll(".lecture-cat").forEach(catBtn => {
    catBtn.addEventListener("click", (e) => {
      document.querySelectorAll(".lecture-cat").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      renderUserLecturesPortal(e.target.getAttribute("data-category"));
    });
  });

  setupModalSystemOverlayControllers();
}

/**
 * ==========================================================================
 * 🟢 USER INTERFACE LAYERS RENDERING PIPELINE
 * ==========================================================================
 */
function renderUserCoursesPortal(filterType = "all", searchQuery = "") {
  const container = document.getElementById("booksGrid");
  if (!container) return;

  let filtered = globalCoursesData;
  if (filterType !== "all") {
    filtered = filtered.filter(item => item.cat === filterType);
  }
  if (searchQuery) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text3);">
        <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; display:block;"></i>
        No matching learning modules found in database library.
      </div>`;
    return;
  }

  container.innerHTML = filtered.map((book, idx) => `
    <div class="book-card reveal visible" style="transition-delay: ${(idx % 4) * 0.1}s">
      <div class="book-cover">
        <div class="book-cover-inner">
          <i class="fas fa-book-quran"></i>
          <div class="book-cover-title">${book.urdu}</div>
        </div>
        <div class="book-hover-overlay" onclick="openLightboxDetailedBook('${book.id}')">
          <i class="fas fa-expand-arrows-alt"></i>
          <span>View Abstract Synopsis</span>
        </div>
      </div>
      <div class="book-info">
        <div class="book-cat-tag text-gold">✦ Data Vault Block</div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-subtitle">${book.desc.substring(0, 75)}...</p>
        <div class="book-meta">
          <span class="book-status ${book.cat}">${book.cat}</span>
          <span class="book-year"><i class="far fa-calendar-alt"></i> ${book.year}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderUserLecturesPortal(categorySelection = "All") {
  const container = document.getElementById("lecturesGrid");
  if (!container) return;

  const filtered = categorySelection === "All" 
    ? globalLecturesData 
    : globalLecturesData.filter(l => l.cat.toLowerCase() === categorySelection.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; color: var(--text3);" class="text-center">No associated video lectures synced to this section yet.</div>`;
    return;
  }

  container.innerHTML = filtered.map(lec => `
    <div class="lecture-card reveal visible">
      <div class="lecture-thumb">
        <div class="lecture-thumb-fallback">
          <i class="fab fa-youtube"></i>
          <span>Dynamic Stream Platform Wrapper</span>
        </div>
        <div class="video-play-overlay-btn" onclick="triggerStreamingVideoLightbox('${lec.url}')">
          <i class="fas fa-play"></i>
        </div>
      </div>
      <div class="lecture-info">
        <div class="lecture-cat-tag">✦ ${lec.cat}</div>
        <h4 class="lecture-title">${lec.title}</h4>
        <div class="lecture-meta">
          <span><i class="fas fa-language"></i> ${lec.lang}</span>
          <span><i class="far fa-clock"></i> ${lec.dur}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderGalleryVisualGrid() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;
  
  container.innerHTML = mediaGalleryMatrix.map((g, i) => `
    <div class="gallery-item reveal visible" onclick="triggerImageLightbox('${g.src}', '${g.label}')" style="transition-delay: ${(i % 5) * 0.1}s;">
      <div class="gallery-item-inner">
        <img src="${g.src}" alt="${g.label}" style="width:100%; height:${g.h}px; object-fit:cover; display:block;">
        <div class="gallery-overlay">
          <span><i class="fas fa-search-plus"></i> ${g.label}</span>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * ==========================================================================
 * 🛑 SECURE ADMINISTRATIVE VIEWS GENERATION & MODEL DISPATCHERS
 * ==========================================================================
 */
function syncAdminManagementDashboard() {
  document.getElementById("dashTotalCoursesCounter").textContent = globalCoursesData.length;
  document.getElementById("dashTotalLecturesCounter").textContent = globalLecturesData.length;
  document.getElementById("dashTotalGalleryCounter").textContent = mediaGalleryMatrix.length;

  const coursesTableBody = document.getElementById("cmsCoursesTableBody");
  if (coursesTableBody) {
    coursesTableBody.innerHTML = globalCoursesData.map(c => `
      <tr>
        <td><strong>${c.title}</strong><br><small style="color:var(--text3)">${c.urdu}</small></td>
        <td><span class="book-status ${c.cat}">${c.cat}</span></td>
        <td>${c.year}</td>
        <td>
          <div class="action-btn-row">
            <button class="row-edit-btn" onclick="initiateCourseEditLifecycle('${c.id}')"><i class="fas fa-pen"></i></button>
            <button class="row-delete-btn" onclick="executeCourseDeletion('${c.id}')"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  const lecturesTableBody = document.getElementById("cmsLecturesTableBody");
  if (lecturesTableBody) {
    lecturesTableBody.innerHTML = globalLecturesData.map(l => `
      <tr>
        <td><span class="truncate-text" title="${l.title}">${l.title}</span></td>
        <td><small>${l.cat}</small></td>
        <td>${l.dur}</td>
        <td>
          <div class="action-btn-row">
            <button class="row-edit-btn" onclick="initiateLectureEditLifecycle('${l.id}')"><i class="fas fa-pen"></i></button>
            <button class="row-delete-btn" onclick="executeLectureDeletion('${l.id}')"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>
      </tr>
    `).join("");
  }
}

window.executeCourseDeletion = function(targetId) {
  if (confirm("Are you sure you want to delete this course record instance?")) {
    globalCoursesData = globalCoursesData.filter(item => item.id !== targetId);
    syncAdminManagementDashboard();
    renderUserCoursesPortal();
  }
};

window.initiateCourseEditLifecycle = function(targetId) {
  const matched = globalCoursesData.find(c => c.id === targetId);
  if (!matched) return;

  document.getElementById("courseEditId").value = matched.id;
  document.getElementById("courseTitleInput").value = matched.title;
  document.getElementById("courseUrduInput").value = matched.urdu;
  document.getElementById("courseCatSelect").value = matched.cat;
  document.getElementById("courseYearInput").value = matched.year;
  document.getElementById("courseDescTextArea").value = matched.desc;

  document.getElementById("courseModalTitle").textContent = "Modify Asset Core Variables";
  document.getElementById("courseCrudModal").classList.add("open");
};

window.executeLectureDeletion = function(targetId) {
  if (confirm("Permanently drop link association to this stream resource record?")) {
    globalLecturesData = globalLecturesData.filter(l => l.id !== targetId);
    syncAdminManagementDashboard();
    renderUserLecturesPortal();
  }
};

window.initiateLectureEditLifecycle = function(targetId) {
  const match = globalLecturesData.find(l => l.id === targetId);
  if (!match) return;

  document.getElementById("lectureEditId").value = match.id;
  document.getElementById("lectureTitleInput").value = match.title;
  document.getElementById("lectureCatInput").value = match.cat;
  document.getElementById("lectureDurInput").value = match.dur;
  document.getElementById("lectureUrlInput").value = match.url;

  document.getElementById("lectureModalTitle").textContent = "Modify Video Pipeline Parameters";
  document.getElementById("lectureCrudModal").classList.add("open");
};

/**
 * ==========================================================================
 * 🔏 MODAL FORMS MANAGEMENT ENGINE
 * ==========================================================================
 */
function setupModalSystemOverlayControllers() {
  const courseModal = document.getElementById("courseCrudModal");
  const lectureModal = document.getElementById("lectureCrudModal");

  document.getElementById("openAddCourseModalBtn").addEventListener("click", () => {
    document.getElementById("courseCrudForm").reset();
    document.getElementById("courseEditId").value = "";
    document.getElementById("courseModalTitle").textContent = "Create Operational Course Asset";
    courseModal.classList.add("open");
  });

  document.getElementById("openAddLectureModalBtn").addEventListener("click", () => {
    document.getElementById("lectureCrudForm").reset();
    document.getElementById("lectureEditId").value = "";
    document.getElementById("lectureModalTitle").textContent = "Manage Lecture Assignment";
    lectureModal.classList.add("open");
  });

  const binderDismissal = (btnId, modalContainer) => {
    const el = document.getElementById(btnId);
    if(el) el.addEventListener("click", () => modalContainer.classList.remove("open"));
  };

  binderDismissal("closeCourseModalBtn", courseModal);
  binderDismissal("cancelCourseModalBtn", courseModal);
  binderDismissal("closeLectureModalBtn", lectureModal);
  binderDismissal("cancelLectureModalBtn", lectureModal);

  document.getElementById("courseCrudForm").addEventListener("submit", () => {
    const editId = document.getElementById("courseEditId").value;
    const modelPayload = {
      id: editId || "c_gen_" + Date.now(),
      title: document.getElementById("courseTitleInput").value.trim(),
      urdu: document.getElementById("courseUrduInput").value.trim(),
      cat: document.getElementById("courseCatSelect").value,
      year: document.getElementById("courseYearInput").value,
      desc: document.getElementById("courseDescTextArea").value.trim()
    };

    if (editId) {
      const idx = globalCoursesData.findIndex(c => c.id === editId);
      if (idx !== -1) globalCoursesData[idx] = modelPayload;
    } else {
      globalCoursesData.unshift(modelPayload);
    }

    courseModal.classList.remove("open");
    syncAdminManagementDashboard();
    renderUserCoursesPortal();
  });

  document.getElementById("lectureCrudForm").addEventListener("submit", () => {
    if (window.MAR_DISABLE_LEGACY_LECTURE_FORM) return;
    const editId = document.getElementById("lectureEditId").value;
    const modelPayload = {
      id: editId || "l_gen_" + Date.now(),
      title: document.getElementById("lectureTitleInput").value.trim(),
      cat: document.getElementById("lectureCatInput").value.trim(),
      dur: document.getElementById("lectureDurInput").value.trim(),
      url: document.getElementById("lectureUrlInput").value.trim(),
      lang: "Urdu"
    };

    if (editId) {
      const idx = globalLecturesData.findIndex(l => l.id === editId);
      if (idx !== -1) globalLecturesData[idx] = modelPayload;
    } else {
      globalLecturesData.unshift(modelPayload);
    }

    lectureModal.classList.remove("open");
    syncAdminManagementDashboard();
    renderUserLecturesPortal();
  });
}

/**
 * ==========================================================================
 * 🖼️ GLOBAL LIGHTBOX INTERACTIVE VIEW MANAGERS
 * ==========================================================================
 */
const globalLightboxContainer = document.getElementById("lightbox");
const globalLightboxContent = document.getElementById("lightboxContent");

const triggerOpenGlobalLightboxShell = () => globalLightboxContainer.classList.add("open");
const triggerCloseGlobalLightboxShell = () => globalLightboxContainer.classList.remove("open");

document.getElementById("lightboxCloseBtn").addEventListener("click", triggerCloseGlobalLightboxShell);
globalLightboxContainer.addEventListener("click", (e) => {
  if (e.target === globalLightboxContainer) triggerCloseGlobalLightboxShell();
});
globalLightboxContent.addEventListener("click", (e) => e.stopPropagation());

window.openLightboxDetailedBook = function(bookId) {
  const match = globalCoursesData.find(b => b.id === bookId);
  if (!match) return;

  globalLightboxContent.innerHTML = `
    <div class="lightbox-book-modal-card" style="background:var(--bg2); border:1px solid var(--border); border-radius:20px; padding:40px; max-width:500px; margin:0 auto; text-align:left;">
      <div style="font-family:'Amiri',serif; font-size:2.2rem; color:var(--gold); direction:rtl; text-align:right; margin-bottom:16px;">${match.urdu}</div>
      <h3 style="font-family:var(--font-display); color:var(--text); font-size:1.8rem; margin-bottom:12px;">${match.title}</h3>
      <p style="color:var(--text2); line-height:1.8; font-size:1.1rem; margin-bottom:20px;">${match.desc}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border); padding-top:15px;">
        <span class="book-status ${match.cat}">${match.cat}</span>
        <span style="color:var(--text3); font-size:0.9rem; font-family:var(--font-ui);"><i class="far fa-calendar-alt"></i> Year Reference: ${match.year}</span>
      </div>
    </div>`;
  triggerOpenGlobalLightboxShell();
};

window.triggerStreamingVideoLightbox = function(youtubeEmbeddedUrl) {
  globalLightboxContent.innerHTML = `
    <div class="video-responsive-wrapper" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; box-shadow:0 20px 50px rgba(0,0,0,0.6);">
      <iframe src="${youtubeEmbeddedUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
  triggerOpenGlobalLightboxShell();
};

window.triggerImageLightbox = function(imgSrc, textLabel) {
  globalLightboxContent.innerHTML = `
    <div style="text-align:center;">
      <img src="${imgSrc}" alt="${textLabel}" style="max-height:75vh; max-width:100%; border-radius:8px; margin:0 auto; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
      <p style="color:var(--white); font-family:var(--font-ui); margin-top:15px; font-size:1rem;">${textLabel}</p>
    </div>`;
  triggerOpenGlobalLightboxShell();
};

/**
 * ==========================================================================
 * 🎠 WISDOM SLIDER REVOLUTION ENGINE
 * ==========================================================================
 */
function setupCarouselEngine() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  track.innerHTML = globalTeachingsData.map(q => `
    <div class="quote-slide">
      <div class="quote-card">
        <div class="quote-arabic">${q.ar}</div>
        <p class="quote-text">${q.en}</p>
        <div class="quote-urdu">${q.ur}</div>
        <div class="quote-source">— ${q.src}</div>
      </div>
    </div>
  `).join("");

  let currentIndex = 0;
  const slides = globalTeachingsData;
  const total = slides.length;
  
  const dotsContainer = document.getElementById("carouselDots");
  dotsContainer.innerHTML = slides.map((_, i) => `<button class="carousel-dot ${i === 0 ? "active" : ""}" data-index="${i}"></button>`).join("");

  const shiftToSlideIndex = (targetIdx) => {
    currentIndex = (targetIdx + total) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === currentIndex));
  };

  document.getElementById("nextQuoteBtn").addEventListener("click", () => shiftToSlideIndex(currentIndex + 1));
  document.getElementById("prevQuoteBtn").addEventListener("click", () => shiftToSlideIndex(currentIndex - 1));

  document.querySelectorAll(".carousel-dot").forEach(dot => {
    dot.addEventListener("click", (e) => {
      shiftToSlideIndex(parseInt(e.target.getAttribute("data-index")));
    });
  });

  setInterval(() => { shiftToSlideIndex(currentIndex + 1); }, 7000);
}

/**
 * ==========================================================================
 * 🌌 UTILITIES: CANVAS FLOATING GEOMETRIC SHAPES GENERATOR
 * ==========================================================================
 */
function runParticleAnimationEngine() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let width, height, pool = [];
  const structuralSymbols = ["✦", "☪", "۞", "✿", "◈"];

  const resizeCanvasBoundaries = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  resizeCanvasBoundaries();
  window.addEventListener("resize", resizeCanvasBoundaries);

  for (let i = 0; i < 40; i++) {
    pool.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vX: (Math.random() - 0.5) * 0.4,
      vY: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 10 + 6,
      glyph: structuralSymbols[Math.floor(Math.random() * structuralSymbols.length)],
      alpha: Math.random() * 0.2 + 0.05,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.005,
      isGold: Math.random() > 0.4
    });
  }

  function frameLoopStep() {
    ctx.clearRect(0, 0, width, height);
    pool.forEach(p => {
      p.x += p.vX; p.y += p.vY; p.rotation += p.rotSpeed;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.isGold ? "#c9a84c" : "#0d7a4e";
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.glyph, 0, 0);
      ctx.restore();
    });
    requestAnimationFrame(frameLoopStep);
  }
  requestAnimationFrame(frameLoopStep);
}

/**
 * ==========================================================================
 * 🎯 VISUAL INTERACTION HANDLERS: SCROLL REVEALS & HIGHLIGHTS
 * ==========================================================================
 */
function trackNavigationHighlightState() {
  const scrollPosition = window.scrollY;
  const standardOffset = 150;
  
  document.querySelectorAll("section[id]").forEach(section => {
    const top = section.offsetTop - standardOffset;
    const bottom = top + section.offsetHeight;
    const currentId = section.getAttribute("id");
    
    if (scrollPosition >= top && scrollPosition < bottom) {
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
      });
    }
  });
}

const incrementalTrackerObserver = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll("[data-target]").forEach(el => {
      const targetMax = parseInt(el.getAttribute("data-target"));
      let currentVal = 0;
      const progressSteps = targetMax / 50;
      const animationTimer = setInterval(() => {
        currentVal += progressSteps;
        if (currentVal >= targetMax) {
          el.textContent = targetMax;
          clearInterval(animationTimer);
        } else {
          el.textContent = Math.floor(currentVal);
        }
      }, 30);
    });
    observer.disconnect();
  }
}, { threshold: 0.2 });

const statsBlockSection = document.getElementById("stats");
if(statsBlockSection) incrementalTrackerObserver.observe(statsBlockSection);

/**
 * ==========================================================================
 * 🔄 HERO AUTO-ROTATING IMAGE ENGINE
 * Configured with the true file extensions (.png) from Screenshot 2026-05-23 104753.png.
 * ==========================================================================
 */
function setupHeroImageRotationEngine() {
  const heroPhotos = [
    "photos/scholar-main.png",
    "photos/scholar-pose1.png",
    "photos/scholar-pose2.png",
    "photos/scholar-pose3.png",
  ];
  
  let heroIdx = 0;
  const heroImg = document.getElementById('heroDynamicImg');
  
  if (heroImg) {
    setInterval(() => {
      heroIdx = (heroIdx + 1) % heroPhotos.length;
      heroImg.style.opacity = '0';
      setTimeout(() => {
        heroImg.src = heroPhotos[heroIdx];
        heroImg.style.opacity = '1';
      }, 400);
    }, 4000); 
  }
}

/**
 * ==========================================================================
 * 👁️ SCROLL REVEAL ANIMATION ENGINE (Fixes the Blank Screen)
 * ==========================================================================
 */
function setupScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * ======================================================================
 * 🎬 REAL YOUTUBE LECTURE CATALOG ENGINE
 * ======================================================================
 */
let lectureUiState = {
  query: "",
  playlist: "all",
  sort: "newest",
  page: 1,
  pageSize: 9,
  selectedVideoId: null
};
window.MAR_DISABLE_LEGACY_LECTURE_FORM = true;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || "lecture";
}

function toEmbedUrl(value = "") {
  if (!value) return "";
  if (value.includes("/embed/")) return value;
  const match = value.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  const shortMatch = value.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const plainMatch = value.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{6,})/);
  if (plainMatch) return `https://www.youtube.com/embed/${plainMatch[1]}`;
  return value;
}

function extractVideoId(value = "") {
  const embed = toEmbedUrl(value);
  const match = embed.match(/embed\/([a-zA-Z0-9_-]{6,})/);
  return match ? match[1] : "";
}

function parseDurationToSeconds(iso = "") {
  const match = String(iso).match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return (parseInt(match[1] || "0", 10) * 3600) + (parseInt(match[2] || "0", 10) * 60) + parseInt(match[3] || "0", 10);
}

function formatDuration(seconds = 0) {
  if (!seconds) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${m}:${String(s).padStart(2, "0")}`;
}

function formatDate(value) {
  if (!value) return "Unknown";
  try {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
  } catch {
    return value;
  }
}

function formatNumber(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return "0";
  return new Intl.NumberFormat("en-US").format(parsed);
}

function getStoredLectureState() {
  try {
    const raw = window.localStorage.getItem(LECTURE_STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function persistLectureState() {
  try {
    window.localStorage.setItem(LECTURE_STORE_KEY, JSON.stringify({
      playlists: lectureStore.playlists,
      videos: lectureStore.videos,
      taxonomy: lectureStore.taxonomy,
      settings: lectureStore.settings,
      importLog: lectureStore.importLog
    }));
    window.localStorage.setItem(LECTURE_SYNC_KEY, lectureStore.settings.lastSyncAt || "");
  } catch (err) {
    console.warn("Could not persist lecture state:", err);
  }
}

function buildPlaylistsFromVideos(videos = [], manualPlaylists = []) {
  const playlistMap = new Map();
  const manualMap = new Map(manualPlaylists.map(item => [item.slug || slugify(item.name), item]));

  videos.forEach(video => {
    const categoryName = String(video.category || video.playlistName || "General Lectures").trim() || "General Lectures";
    const slug = slugify(categoryName);
    const existing = playlistMap.get(slug) || {
      id: `auto_${slug}`,
      name: categoryName,
      slug,
      description: `Auto-generated from lectures categorized as ${categoryName}`,
      coverImage: "",
      displayOrder: 999,
      source: "auto",
      pinned: false,
      updatedAt: null,
      videoCount: 0,
      latestPublishedAt: null
    };
    existing.videoCount += 1;
    if (!existing.coverImage && video.thumbnail) existing.coverImage = video.thumbnail;
    if (!existing.latestPublishedAt || new Date(video.publishedAt || 0) > new Date(existing.latestPublishedAt || 0)) {
      existing.latestPublishedAt = video.publishedAt || null;
    }
    playlistMap.set(slug, existing);
  });

  const derivedPlaylists = Array.from(playlistMap.values()).map((playlist, idx) => ({
    ...playlist,
    displayOrder: idx + 1,
    updatedAt: playlist.latestPublishedAt || playlist.updatedAt || null
  })).sort((a, b) => (b.videoCount || 0) - (a.videoCount || 0) || new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0) || a.name.localeCompare(b.name));

  const mergedManual = manualPlaylists.map((playlist, idx) => {
    const mergedSlug = playlist.slug || slugify(playlist.name);
    const fallbackCount = videos.filter(video => slugify(video.playlistName || video.category) === mergedSlug).length;
    return {
      ...playlist,
      slug: mergedSlug,
      displayOrder: playlist.displayOrder || (derivedPlaylists.length + idx + 1),
      videoCount: playlist.videoCount || fallbackCount
    };
  });

  return [...derivedPlaylists, ...mergedManual];
}

function resolvePlaylistForCategory(categoryName) {
  const normalized = String(categoryName || "General Lectures").trim();
  const match = lectureStore.playlists.find(item => item.name.toLowerCase() === normalized.toLowerCase());
  if (match) return match.id;
  const auto = lectureStore.playlists.find(item => item.slug === slugify(normalized));
  return auto ? auto.id : `auto_${slugify(normalized)}`;
}

function categorizeLecture(payload) {
  const haystack = [
    payload.title,
    payload.description,
    ...(payload.tags || [])
  ].join(" ").toLowerCase();

  let best = "General Lectures";
  let score = -1;
  getActiveLectureTaxonomy().forEach(entry => {
    const localScore = entry.keywords.reduce((total, keyword) => total + (haystack.includes(keyword.toLowerCase()) ? 1 : 0), 0);
    if (localScore > score) {
      score = localScore;
      best = entry.name;
    }
  });
  return best;
}

function normalizeImportedVideo(raw, channelTitle = "Mubarak Ahmad Rabbani") {
  const videoId = raw.youtubeVideoId || raw.videoId || raw.id || extractVideoId(raw.url || raw.embedUrl || "");
  const title = raw.title || "";
  const publishedAt = raw.publishedAt || raw.publishDate || raw.snippet?.publishedAt || null;
  const description = raw.description || raw.snippet?.description || "";
  const category = raw.category || raw.playlistName || categorizeLecture({
    title,
    description,
    tags: raw.tags || []
  });
  return {
    id: raw.id || videoId || `video_${slugify(title)}_${Date.now()}`,
    youtubeVideoId: videoId,
    title,
    slug: raw.slug || slugify(title),
    description,
    thumbnail: raw.thumbnail || raw.snippet?.thumbnails?.high?.url || raw.snippet?.thumbnails?.medium?.url || raw.snippet?.thumbnails?.default?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    duration: raw.duration || formatDuration(parseDurationToSeconds(raw.contentDetails?.duration || raw.durationIso || "")),
    durationIso: raw.contentDetails?.duration || raw.durationIso || "",
    views: raw.views || raw.statistics?.viewCount || 0,
    publishedAt,
    playlistId: raw.playlistId || `auto_${slugify(category)}`,
    playlistName: raw.playlistName || category,
    category,
    tags: raw.tags || [],
    url: raw.url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : YOUTUBE_CHANNEL_URL),
    embedUrl: toEmbedUrl(raw.embedUrl || raw.url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "")),
    pinned: Boolean(raw.pinned),
    channelTitle,
    updatedAt: raw.updatedAt || new Date().toISOString()
  };
}

function hydrateLectureStore(videos = [], preservePlaylists = true) {
  const manualPlaylists = preservePlaylists ? lectureStore.playlists.filter(item => item.source === "manual") : [];
  lectureStore.videos = videos.map(video => normalizeImportedVideo(video, video.channelTitle || "Mubarak Ahmad Rabbani"));
  lectureStore.playlists = buildPlaylistsFromVideos(lectureStore.videos, manualPlaylists);
  lectureStore.videos.forEach(video => {
    const playlist = lectureStore.playlists.find(item => item.name.toLowerCase() === String(video.category || video.playlistName || "").toLowerCase());
    if (playlist) {
      video.playlistId = playlist.id;
      video.playlistName = playlist.name;
    }
  });

  lectureStore.settings.uncategorizedNotice = lectureStore.videos.filter(video => !video.category || video.category === "General Lectures").map(video => video.title);
  globalLecturesData = lectureStore.videos;
  persistLectureState();
}

async function bootstrapLectureCatalog() {
  const stored = getStoredLectureState();
  if (stored) {
    lectureStore.playlists = Array.isArray(stored.playlists) ? stored.playlists : [];
    lectureStore.videos = Array.isArray(stored.videos) ? stored.videos : [];
    lectureStore.taxonomy = Array.isArray(stored.taxonomy) && stored.taxonomy.length ? stored.taxonomy : lectureTaxonomy;
    lectureStore.settings = { ...lectureStore.settings, ...(stored.settings || {}) };
    lectureStore.importLog = Array.isArray(stored.importLog) ? stored.importLog : [];
  }

  const seededVideos = Array.isArray(window.MAR_LECTURE_SEED) ? window.MAR_LECTURE_SEED : [];
  if (seededVideos.length && lectureStore.videos.length === 0) {
    hydrateLectureStore(seededVideos, true);
    updateLectureSyncStatus(`Loaded ${seededVideos.length} lectures from the official channel cache.`, "success");
  }

  if (!getLectureApiKey()) {
    hydrateLectureStore(lectureStore.videos, true);
    updateLectureSyncStatus("API key missing. Using saved lecture cache.", "warn");
    renderUserLecturesPortal();
    return;
  }

  const cachedVideos = lectureStore.videos.map(item => ({ ...item }));
  const cachedPlaylists = lectureStore.playlists.map(item => ({ ...item }));
  try {
    await syncLectureCatalogFromYouTube();
  } catch (err) {
    console.warn("YouTube sync failed; falling back to cached lecture state.", err);
    lectureStore.videos = cachedVideos;
    lectureStore.playlists = cachedPlaylists;
    hydrateLectureStore(lectureStore.videos, true);
    updateLectureSyncStatus("Live sync failed. Showing cached lecture library.", "warn");
  }
  renderUserLecturesPortal();
}

function updateLectureSyncStatus(message, tone = "info") {
  const node = document.getElementById("lectureSyncStatus");
  if (!node) return;
  node.textContent = message;
  node.dataset.tone = tone;
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
}

async function listYouTubeChannelsByHandle(handle) {
  const url = new URL(`${YOUTUBE_API_BASE}/channels`);
  url.searchParams.set("part", "id,snippet,contentDetails,statistics");
  url.searchParams.set("forHandle", handle.replace(/^@/, ""));
  url.searchParams.set("key", getLectureApiKey());
  const payload = await fetchJson(url.toString());
  return payload.items || [];
}

async function listAllPlaylistItems(playlistId) {
  const items = [];
  let pageToken = "";
  do {
    const url = new URL(`${YOUTUBE_API_BASE}/playlistItems`);
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    url.searchParams.set("key", getLectureApiKey());
    const payload = await fetchJson(url.toString());
    items.push(...(payload.items || []));
    pageToken = payload.nextPageToken || "";
  } while (pageToken);
  return items;
}

async function listVideoDetails(videoIds = []) {
  const batches = [];
  for (let i = 0; i < videoIds.length; i += 50) batches.push(videoIds.slice(i, i + 50));
  const results = [];
  for (const batch of batches) {
    if (!batch.length) continue;
    const url = new URL(`${YOUTUBE_API_BASE}/videos`);
    url.searchParams.set("part", "snippet,contentDetails,statistics");
    url.searchParams.set("id", batch.join(","));
    url.searchParams.set("key", getLectureApiKey());
    const payload = await fetchJson(url.toString());
    results.push(...(payload.items || []));
  }
  return results;
}

function upsertLectureFromApi(video, channelTitle) {
  const normalized = normalizeImportedVideo({
    id: video.id,
    youtubeVideoId: video.id,
    title: video.snippet?.title || "Untitled lecture",
    description: video.snippet?.description || "",
    thumbnail: video.snippet?.thumbnails?.high?.url || video.snippet?.thumbnails?.medium?.url || video.snippet?.thumbnails?.default?.url || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    publishedAt: video.snippet?.publishedAt || null,
    durationIso: video.contentDetails?.duration || "",
    duration: formatDuration(parseDurationToSeconds(video.contentDetails?.duration || "")),
    views: video.statistics?.viewCount || 0,
    tags: video.snippet?.tags || [],
    url: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    channelTitle
  }, channelTitle);

  const existingIdx = lectureStore.videos.findIndex(item => item.youtubeVideoId === normalized.youtubeVideoId);
  if (existingIdx >= 0) {
    lectureStore.videos[existingIdx] = { ...lectureStore.videos[existingIdx], ...normalized, updatedAt: new Date().toISOString() };
  } else {
    lectureStore.videos.unshift(normalized);
  }
}

async function syncLectureCatalogFromYouTube() {
  updateLectureSyncStatus("Syncing official channel...", "info");
  const channelItems = await listYouTubeChannelsByHandle(lectureStore.settings.channelHandle || YOUTUBE_CHANNEL_HANDLE);
  if (!channelItems.length) {
    updateLectureSyncStatus("No channel resource returned for the configured handle.", "warn");
    return;
  }

  const channel = channelItems[0];
  const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
  const channelTitle = channel.snippet?.title || "Mubarak Ahmad Rabbani";
  if (!uploadsPlaylistId) {
    updateLectureSyncStatus("Uploads playlist missing from channel response.", "warn");
    return;
  }

  const playlistItems = await listAllPlaylistItems(uploadsPlaylistId);
  const videoIds = playlistItems.map(item => item.contentDetails?.videoId || item.snippet?.resourceId?.videoId).filter(Boolean);
  const details = await listVideoDetails(videoIds);
  const detailMap = new Map(details.map(item => [item.id, item]));

  const imported = playlistItems
    .map(item => detailMap.get(item.contentDetails?.videoId || item.snippet?.resourceId?.videoId))
    .filter(Boolean)
    .map(item => ({
      ...item,
      channelTitle
    }));

  lectureStore.videos = [];
  imported.forEach(video => upsertLectureFromApi(video, channelTitle));
  lectureStore.settings.lastSyncAt = new Date().toISOString();
  lectureStore.importLog.unshift({
    syncedAt: lectureStore.settings.lastSyncAt,
    total: lectureStore.videos.length,
    channel: channelTitle
  });
  lectureStore.importLog = lectureStore.importLog.slice(0, 20);
  hydrateLectureStore(lectureStore.videos, true);
  const noticeCount = lectureStore.settings.uncategorizedNotice.length;
  updateLectureSyncStatus(
    noticeCount
      ? `Synced ${lectureStore.videos.length} lectures from ${channelTitle}. ${noticeCount} need manual review.`
      : `Synced ${lectureStore.videos.length} lectures from ${channelTitle}.`,
    noticeCount ? "warn" : "success"
  );
}

function getCurrentLecturePlaylistOptions() {
  const visible = lectureStore.playlists.slice().sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  return [{ id: "all", name: "All playlists", description: "Everything in the lecture library" }, ...visible];
}

function filterLecturesForView() {
  const query = lectureUiState.query.trim().toLowerCase();
  const playlistFilter = lectureUiState.playlist;
  let items = [...lectureStore.videos];

  if (playlistFilter !== "all") {
    items = items.filter(item => item.playlistId === playlistFilter || slugify(item.playlistName) === playlistFilter || slugify(item.category) === playlistFilter);
  }

  if (query) {
    items = items.filter(item => {
      const haystack = [
        item.title,
        item.description,
        item.category,
        item.playlistName,
        ...(item.tags || [])
      ].join(" ").toLowerCase();
      return haystack.includes(query);
    });
  }

  if (lectureUiState.sort === "oldest") {
    items.sort((a, b) => new Date(a.publishedAt || 0) - new Date(b.publishedAt || 0));
  } else if (lectureUiState.sort === "popular") {
    items.sort((a, b) => Number(b.views || 0) - Number(a.views || 0));
  } else {
    items.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
  }

  return items;
}

function renderLecturePlaylistStrip() {
  const strip = document.getElementById("lecturePlaylistStrip");
  if (!strip) return;

  const playlistOptions = getCurrentLecturePlaylistOptions();
  strip.innerHTML = playlistOptions.map(item => {
    const count = item.id === "all"
      ? lectureStore.videos.length
      : lectureStore.videos.filter(video => video.playlistId === item.id || slugify(video.playlistName) === item.id || slugify(video.category) === item.id).length;
    const active = lectureUiState.playlist === item.id ? "active" : "";
    return `
      <button class="lecture-playlist-chip ${active}" data-playlist="${escapeHtml(item.id)}">
        <h4>${escapeHtml(item.name)}</h4>
        <p>${count} lecture${count === 1 ? "" : "s"}</p>
      </button>
    `;
  }).join("");

  strip.querySelectorAll("[data-playlist]").forEach(btn => {
    btn.addEventListener("click", () => {
      lectureUiState.playlist = btn.getAttribute("data-playlist");
      lectureUiState.page = 1;
      renderUserLecturesPortal();
    });
  });
}

function renderLectureFilterControls() {
  const playlistSelect = document.getElementById("lecturePlaylistFilter");
  if (playlistSelect) {
    playlistSelect.innerHTML = getCurrentLecturePlaylistOptions().map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join("");
    playlistSelect.value = lectureUiState.playlist;
  }
  const sortSelect = document.getElementById("lectureSortSelect");
  if (sortSelect) sortSelect.value = lectureUiState.sort;
  const searchInput = document.getElementById("lectureSearchInput");
  if (searchInput) searchInput.value = lectureUiState.query;
}

function renderLecturePager(totalItems) {
  const pager = document.getElementById("lecturePagination");
  if (!pager) return;
  const pageCount = Math.max(1, Math.ceil(totalItems / lectureUiState.pageSize));
  if (pageCount <= 1) {
    pager.innerHTML = "";
    return;
  }
  pager.innerHTML = Array.from({ length: pageCount }, (_, idx) => {
    const page = idx + 1;
    return `<button class="lecture-page-btn ${page === lectureUiState.page ? "active" : ""}" data-page="${page}">${page}</button>`;
  }).join("");
  pager.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      lectureUiState.page = Number(btn.getAttribute("data-page"));
      renderUserLecturesPortal();
    });
  });
}

function renderUserLecturesPortal() {
  const container = document.getElementById("lecturesGrid");
  if (!container) return;

  renderLectureFilterControls();
  renderLecturePlaylistStrip();

  const filtered = filterLecturesForView();
  const totalPages = Math.max(1, Math.ceil(filtered.length / lectureUiState.pageSize));
  lectureUiState.page = Math.min(lectureUiState.page, totalPages);
  const start = (lectureUiState.page - 1) * lectureUiState.pageSize;
  const paged = filtered.slice(start, start + lectureUiState.pageSize);

  if (!filtered.length) {
    container.innerHTML = `
      <div class="lecture-empty-state" style="grid-column: 1/-1; padding: 44px; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); text-align: center;">
        <h3 style="font-family: var(--font-display); margin-bottom: 12px;">No lectures imported yet</h3>
        <p style="color: var(--text2); max-width: 620px; margin: 0 auto 18px;">Connect the YouTube API key and sync the official channel, or keep browsing the cached library if one is already stored locally.</p>
        <button class="btn-primary small-btn" id="emptyStateSyncBtn"><i class="fas fa-arrows-rotate"></i> Sync Library</button>
      </div>
    `;
    const syncBtn = document.getElementById("emptyStateSyncBtn");
    if (syncBtn) syncBtn.addEventListener("click", () => requestLectureSync());
    renderLecturePager(0);
    return;
  }

  container.innerHTML = paged.map(lecture => `
    <article class="lecture-library-card reveal visible" data-lecture-open="${escapeHtml(lecture.id)}" tabindex="0" role="button" aria-label="Open lecture ${escapeHtml(lecture.title)}">
      <button class="lecture-card-thumb" type="button" data-lecture-open="${escapeHtml(lecture.id)}">
        <img loading="lazy" src="${escapeHtml(lecture.thumbnail)}" alt="${escapeHtml(lecture.title)}">
        ${lecture.pinned ? '<span class="lecture-pin-badge"><i class="fas fa-thumbtack"></i> Pinned</span>' : ""}
        <span class="lecture-playlist-badge">${escapeHtml(lecture.playlistName || lecture.category || "General Lectures")}</span>
        <span class="lecture-play-overlay"><i class="fas fa-play"></i><strong>Play on website</strong></span>
      </button>
      <div class="lecture-card-body">
        <h3>${escapeHtml(lecture.title)}</h3>
        <p>${escapeHtml((lecture.description || "").slice(0, 120))}${lecture.description && lecture.description.length > 120 ? "..." : ""}</p>
        <div class="lecture-card-meta">
          <span><i class="far fa-calendar-alt"></i> ${formatDate(lecture.publishedAt)}</span>
          <span><i class="far fa-eye"></i> ${formatNumber(lecture.views)}</span>
        </div>
        <div class="lecture-card-actions">
          <button class="btn-outline small-btn" type="button" data-lecture-open="${escapeHtml(lecture.id)}"><i class="fas fa-play"></i> Play on website</button>
          <a class="btn-gold small-btn" href="${escapeHtml(lecture.url)}" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i> Go to YouTube</a>
        </div>
      </div>
    </article>
  `).join("");

  container.querySelectorAll("[data-lecture-open]").forEach(node => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLectureDetail(node.getAttribute("data-lecture-open"));
    });
  });

  container.querySelectorAll(".lecture-library-card").forEach(card => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLectureDetail(card.getAttribute("data-lecture-open"));
      }
    });
  });

  renderLecturePager(filtered.length);
  globalLecturesData = lectureStore.videos;
}

function renderPlaylistAdminTable() {
  const tbody = document.getElementById("cmsPlaylistsTableBody");
  if (!tbody) return;

  const playlists = lectureStore.playlists.slice().sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  tbody.innerHTML = playlists.map(playlist => {
    const lectureCount = lectureStore.videos.filter(video => video.playlistId === playlist.id || slugify(video.playlistName) === playlist.slug).length;
    return `
      <tr>
        <td>
          <strong>${escapeHtml(playlist.name)}</strong>
          <br>
          <small style="color:var(--text3)">${escapeHtml(playlist.description || "")}</small>
        </td>
        <td>${lectureCount}</td>
        <td>${playlist.updatedAt ? formatDate(playlist.updatedAt) : "Never"}</td>
        <td>
          <div class="action-btn-row">
            <button class="row-edit-btn" onclick="initiatePlaylistEditLifecycle('${playlist.id}')"><i class="fas fa-pen"></i></button>
            <button class="row-delete-btn" onclick="executePlaylistDeletion('${playlist.id}')"><i class="fas fa-trash-alt"></i></button>
            <button class="row-edit-btn" onclick="shiftPlaylistOrder('${playlist.id}', -1)"><i class="fas fa-arrow-up"></i></button>
            <button class="row-edit-btn" onclick="shiftPlaylistOrder('${playlist.id}', 1)"><i class="fas fa-arrow-down"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderLectureAdminTable() {
  const tbody = document.getElementById("cmsLecturesTableBody");
  if (!tbody) return;

  tbody.innerHTML = lectureStore.videos.map(video => `
    <tr>
      <td>
        <strong>${escapeHtml(video.title)}</strong>
        ${video.pinned ? '<div style="color:var(--gold-lt); font-size:0.8rem; margin-top:4px;"><i class="fas fa-thumbtack"></i> Pinned</div>' : ""}
      </td>
      <td>
        <select class="lecture-inline-select" data-video-playlist="${escapeHtml(video.id)}">
          ${lectureStore.playlists.map(playlist => `<option value="${escapeHtml(playlist.id)}" ${playlist.id === video.playlistId ? "selected" : ""}>${escapeHtml(playlist.name)}</option>`).join("")}
        </select>
      </td>
      <td>${escapeHtml(video.duration || "0:00")}</td>
      <td>
        <div class="action-btn-row">
          <button class="row-edit-btn" onclick="initiateLectureEditLifecycle('${escapeHtml(video.id)}')"><i class="fas fa-pen"></i></button>
          <button class="row-delete-btn" onclick="executeLectureDeletion('${escapeHtml(video.id)}')"><i class="fas fa-trash-alt"></i></button>
          <button class="row-edit-btn" onclick="toggleLecturePin('${escapeHtml(video.id)}')"><i class="fas fa-thumbtack"></i></button>
        </div>
      </td>
    </tr>
  `).join("");

  tbody.querySelectorAll("[data-video-playlist]").forEach(select => {
    select.addEventListener("change", () => {
      moveLectureToPlaylist(select.getAttribute("data-video-playlist"), select.value);
    });
  });
}

function syncAdminManagementDashboard() {
  document.getElementById("dashTotalCoursesCounter").textContent = globalCoursesData.length;
  document.getElementById("dashTotalLecturesCounter").textContent = lectureStore.videos.length;
  document.getElementById("dashTotalGalleryCounter").textContent = mediaGalleryMatrix.length;
  renderPlaylistAdminTable();
  renderLectureAdminTable();
}

function renderLectureAdminSelectOptions() {
  const lecturePlaylistInput = document.getElementById("lecturePlaylistInput");
  if (lecturePlaylistInput && !lecturePlaylistInput.dataset.bound) {
    lecturePlaylistInput.dataset.bound = "1";
    lecturePlaylistInput.addEventListener("focus", () => {
      lecturePlaylistInput.value = lecturePlaylistInput.value || (lectureStore.playlists[0] ? lectureStore.playlists[0].name : "");
    });
  }
}

function syncLecturePickers() {
  renderLectureFilterControls();
  renderLectureAdminSelectOptions();
}

function getLectureQueue(referenceList = []) {
  const base = referenceList.length ? referenceList : [...lectureStore.videos];
  if (!lecturePlayerState.shuffle) return base;
  const shuffled = [...base];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getQueueIndexByVideoId(videoId) {
  return lecturePlayerState.queue.findIndex(item => item.id === videoId || item.youtubeVideoId === videoId);
}

function setPlayerToggleState(buttonId, active) {
  const btn = document.querySelector(`[data-player-toggle="${buttonId}"]`);
  if (!btn) return;
  btn.classList.toggle("active", active);
  btn.setAttribute("aria-pressed", String(active));
}

function syncPlayerToggleUi() {
  setPlayerToggleState("autoplay", lecturePlayerState.autoplayNext);
  setPlayerToggleState("repeat", lecturePlayerState.repeat);
  setPlayerToggleState("shuffle", lecturePlayerState.shuffle);
}

function buildLecturePlaybackUrl(videoId, autoplay = true) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    controls: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    fs: "1",
    cc_load_policy: "1",
    enablejsapi: "1",
    origin: window.location.origin
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function mountLecturePlayer(video) {
  const frameHost = document.getElementById("lecturePlayerFrame");
  if (!frameHost || !video) return;

  if (lecturePlayerState.player && typeof lecturePlayerState.player.destroy === "function") {
    try { lecturePlayerState.player.destroy(); } catch {}
  }

  frameHost.innerHTML = "";
  const videoId = video.youtubeVideoId || extractVideoId(video.url || "");

  if (window.YT && window.YT.Player) {
    lecturePlayerState.player = new YT.Player("lecturePlayerFrame", {
      width: "100%",
      height: "100%",
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        iv_load_policy: 3,
        fs: 1,
        cc_load_policy: 1,
        origin: window.location.origin
      },
      events: {
        onReady: () => syncPlayerToggleUi(),
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.ENDED) {
            if (lecturePlayerState.repeat) {
              lecturePlayerState.player.seekTo(0, true);
              lecturePlayerState.player.playVideo();
              return;
            }
            if (lecturePlayerState.autoplayNext) {
              const next = lecturePlayerState.queue[lecturePlayerState.index + 1];
              if (next) {
                openLectureDetail(next.id, { preserveQueue: true });
              }
            }
          }
        }
      }
    });
  } else {
    frameHost.innerHTML = `<iframe src="${buildLecturePlaybackUrl(videoId, true)}" title="${escapeHtml(video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

function goToQueuedLecture(step = 1) {
  const nextIndex = lecturePlayerState.index + step;
  const nextVideo = lecturePlayerState.queue[nextIndex];
  if (nextVideo) openLectureDetail(nextVideo.id, { preserveQueue: true });
}

function playPauseCurrentLecture() {
  if (!lecturePlayerState.player || !window.YT || !window.YT.PlayerState) return;
  const state = lecturePlayerState.player.getPlayerState();
  if (state === YT.PlayerState.PLAYING) lecturePlayerState.player.pauseVideo();
  else lecturePlayerState.player.playVideo();
}

function restartCurrentLecture() {
  if (!lecturePlayerState.player || !window.YT) return;
  lecturePlayerState.player.seekTo(0, true);
  lecturePlayerState.player.playVideo();
}

function moveLectureToPlaylist(videoId, playlistId) {
  const video = lectureStore.videos.find(item => item.id === videoId);
  const playlist = lectureStore.playlists.find(item => item.id === playlistId);
  if (!video || !playlist) return;
  video.playlistId = playlist.id;
  video.playlistName = playlist.name;
  video.category = playlist.name;
  video.updatedAt = new Date().toISOString();
  hydrateLectureStore(lectureStore.videos, true);
  renderUserLecturesPortal();
  syncAdminManagementDashboard();
}

function toggleLecturePin(videoId) {
  const video = lectureStore.videos.find(item => item.id === videoId);
  if (!video) return;
  video.pinned = !video.pinned;
  video.updatedAt = new Date().toISOString();
  persistLectureState();
  renderUserLecturesPortal();
  syncAdminManagementDashboard();
}

function executeLectureDeletion(targetId) {
  if (confirm("Permanently remove this lecture from the website catalog?")) {
    lectureStore.videos = lectureStore.videos.filter(item => item.id !== targetId);
    hydrateLectureStore(lectureStore.videos, true);
    renderUserLecturesPortal();
    syncAdminManagementDashboard();
  }
}

function executePlaylistDeletion(targetId) {
  const playlist = lectureStore.playlists.find(item => item.id === targetId);
  if (playlist && playlist.source !== "manual") {
    alert("This playlist is generated from lectures. Change the lecture categories instead of deleting it directly.");
    return;
  }
  if (confirm("Delete this playlist and return its videos to the general queue?")) {
    const generalPlaylistId = resolvePlaylistForCategory("General Lectures");
    lectureStore.playlists = lectureStore.playlists.filter(item => item.id !== targetId);
    lectureStore.videos = lectureStore.videos.map(video => video.playlistId === targetId ? { ...video, playlistId: generalPlaylistId, playlistName: "General Lectures", category: "General Lectures" } : video);
    hydrateLectureStore(lectureStore.videos, true);
    renderUserLecturesPortal();
    syncAdminManagementDashboard();
  }
}

function shiftPlaylistOrder(targetId, delta) {
  const playlist = lectureStore.playlists.find(item => item.id === targetId);
  if (!playlist) return;
  playlist.displayOrder = Math.max(1, (playlist.displayOrder || 1) + delta);
  lectureStore.playlists.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  persistLectureState();
  syncAdminManagementDashboard();
  renderUserLecturesPortal();
}

function initiatePlaylistEditLifecycle(targetId) {
  const playlist = lectureStore.playlists.find(item => item.id === targetId);
  if (!playlist) return;
  document.getElementById("playlistEditId").value = playlist.id;
  document.getElementById("playlistNameInput").value = playlist.name;
  document.getElementById("playlistDescInput").value = playlist.description || "";
  document.getElementById("playlistOrderInput").value = playlist.displayOrder || 1;
  const preview = document.getElementById("playlistCoverPreview");
  preview.innerHTML = playlist.coverImage ? `<img src="${escapeHtml(playlist.coverImage)}" alt="${escapeHtml(playlist.name)}">` : "No cover selected";
  preview.dataset.image = playlist.coverImage || "";
  document.getElementById("playlistCrudModal").classList.add("open");
}

function openPlaylistCrudModal() {
  document.getElementById("playlistCrudForm").reset();
  document.getElementById("playlistEditId").value = "";
  document.getElementById("playlistModalTitle").textContent = "Create Playlist";
  const preview = document.getElementById("playlistCoverPreview");
  preview.innerHTML = "No cover selected";
  preview.dataset.image = "";
  const input = document.getElementById("playlistCoverInput");
  if (input) input.value = "";
  document.getElementById("playlistCrudModal").classList.add("open");
}

async function requestLectureSync() {
  if (!getLectureApiKey()) {
    updateLectureSyncStatus("Add a YouTube API key to enable live syncing.", "warn");
    return;
  }
  try {
    await syncLectureCatalogFromYouTube();
    renderUserLecturesPortal();
    syncAdminManagementDashboard();
  } catch (err) {
    console.error(err);
    updateLectureSyncStatus("Sync failed. Check API key, quota, or network.", "warn");
  }
}

function openLectureDetail(videoId, options = {}) {
  const video = lectureStore.videos.find(item => item.id === videoId || item.youtubeVideoId === videoId);
  if (!video) return;
  lectureUiState.selectedVideoId = video.id;
  updateLectureSEO(video);

  if (!options.preserveQueue) {
    lecturePlayerState.queue = getLectureQueue(filterLecturesForView());
  }
  if (!lecturePlayerState.queue.length) lecturePlayerState.queue = [video];
  lecturePlayerState.index = Math.max(0, lecturePlayerState.queue.findIndex(item => item.id === video.id));
  lecturePlayerState.currentVideoId = video.id;

  const currentPlaylistVideos = lecturePlayerState.queue.filter(item => item.playlistId === video.playlistId && item.id !== video.id).slice(0, 4);
  const adminControls = currentActiveModule === "admin" ? `
    <div class="lecture-admin-controls">
      <div class="lecture-admin-grid">
        <label>
          <span>Playlist</span>
          <select id="lectureAdminPlaylistSelect">
            ${lectureStore.playlists.map(playlist => `<option value="${escapeHtml(playlist.id)}" ${playlist.id === video.playlistId ? "selected" : ""}>${escapeHtml(playlist.name)}</option>`).join("")}
          </select>
        </label>
        <button type="button" class="btn-outline small-btn" id="lectureAdminMoveBtn"><i class="fas fa-arrow-right-arrow-left"></i> Move</button>
        <button type="button" class="btn-outline small-btn" id="lectureAdminPinBtn"><i class="fas fa-thumbtack"></i> ${video.pinned ? "Unpin" : "Pin"}</button>
        <button type="button" class="btn-outline small-btn" id="lectureAdminEditBtn"><i class="fas fa-pen"></i> Edit</button>
        <button type="button" class="btn-outline small-btn" id="lectureAdminDeleteBtn"><i class="fas fa-trash-alt"></i> Delete</button>
      </div>
    </div>
  ` : "";

  globalLightboxContent.innerHTML = `
    <div class="lecture-detail-shell">
      <div class="lecture-detail-player-panel">
        <div class="lecture-detail-player" id="lecturePlayerFrame"></div>
        <div class="lecture-player-controls">
          <button class="btn-outline small-btn" data-player-action="playpause"><i class="fas fa-play"></i> Play / Pause</button>
          <button class="btn-outline small-btn" data-player-action="restart"><i class="fas fa-rotate-right"></i> Restart</button>
          <button class="btn-outline small-btn" data-player-action="prev"><i class="fas fa-chevron-left"></i> Previous</button>
          <button class="btn-outline small-btn" data-player-action="next">Next <i class="fas fa-chevron-right"></i></button>
          <button class="btn-outline small-btn" data-player-toggle="autoplay"><i class="fas fa-forward"></i> Autoplay</button>
          <button class="btn-outline small-btn" data-player-toggle="repeat"><i class="fas fa-rotate"></i> Repeat</button>
          <button class="btn-outline small-btn" data-player-toggle="shuffle"><i class="fas fa-shuffle"></i> Shuffle</button>
          <a class="btn-gold small-btn" href="${escapeHtml(video.url)}" target="_blank"><i class="fab fa-youtube"></i> Open on YouTube</a>
        </div>
        <div class="lecture-detail-copy">
          <div class="lecture-detail-kicker">${escapeHtml(video.playlistName || video.category || "General Lectures")}</div>
          <h3>${escapeHtml(video.title)}</h3>
          <div class="lecture-detail-submeta">
            <span><i class="far fa-calendar-alt"></i> ${formatDate(video.publishedAt)}</span>
            <span><i class="far fa-eye"></i> ${formatNumber(video.views)}</span>
            <span><i class="far fa-clock"></i> ${escapeHtml(video.duration || "0:00")}</span>
          </div>
          <p class="lecture-detail-description">${escapeHtml(video.description || "No description available.")}</p>
          ${adminControls}
          <div class="lecture-detail-actions">
            <a class="btn-outline small-btn" href="${escapeHtml(video.url)}" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i> Open in YouTube</a>
            <button class="btn-outline small-btn" data-lecture-share="${escapeHtml(video.url)}"><i class="fas fa-share-nodes"></i> Share</button>
          </div>
          ${currentPlaylistVideos.length ? `
            <div class="lecture-detail-related">
              <h4>Related lectures</h4>
              <div class="lecture-detail-related-grid">
                ${currentPlaylistVideos.map(item => `
                  <button class="lecture-related-card" data-lecture-nav="${escapeHtml(item.id)}">
                    <img src="${escapeHtml(item.thumbnail)}" alt="${escapeHtml(item.title)}">
                    <span>${escapeHtml(item.title)}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  triggerOpenGlobalLightboxShell();

  mountLecturePlayer(video);
  syncPlayerToggleUi();

  globalLightboxContent.querySelectorAll("[data-player-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-player-action");
      if (action === "playpause") playPauseCurrentLecture();
      if (action === "restart") restartCurrentLecture();
      if (action === "prev") goToQueuedLecture(-1);
      if (action === "next") goToQueuedLecture(1);
    });
  });

  globalLightboxContent.querySelectorAll("[data-player-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const toggle = btn.getAttribute("data-player-toggle");
      if (toggle === "autoplay") lecturePlayerState.autoplayNext = !lecturePlayerState.autoplayNext;
      if (toggle === "repeat") lecturePlayerState.repeat = !lecturePlayerState.repeat;
      if (toggle === "shuffle") {
        lecturePlayerState.shuffle = !lecturePlayerState.shuffle;
        const currentId = lecturePlayerState.currentVideoId;
        lecturePlayerState.queue = getLectureQueue(filterLecturesForView());
        lecturePlayerState.index = currentId ? Math.max(0, lecturePlayerState.queue.findIndex(item => item.id === currentId)) : 0;
      }
      syncPlayerToggleUi();
    });
  });

  globalLightboxContent.querySelectorAll("[data-lecture-nav]").forEach(btn => {
    btn.addEventListener("click", () => openLectureDetail(btn.getAttribute("data-lecture-nav")));
  });
  globalLightboxContent.querySelectorAll("[data-lecture-share]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const shareUrl = btn.getAttribute("data-lecture-share");
      try {
        await navigator.clipboard.writeText(shareUrl);
        btn.innerHTML = '<i class="fas fa-check"></i> Link copied';
      } catch {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, "_blank");
      }
    });
  });

  const adminPlaylistSelect = document.getElementById("lectureAdminPlaylistSelect");
  const adminMoveBtn = document.getElementById("lectureAdminMoveBtn");
  const adminPinBtn = document.getElementById("lectureAdminPinBtn");
  const adminEditBtn = document.getElementById("lectureAdminEditBtn");
  const adminDeleteBtn = document.getElementById("lectureAdminDeleteBtn");

  if (adminMoveBtn && adminPlaylistSelect) {
    adminMoveBtn.addEventListener("click", () => moveLectureToPlaylist(video.id, adminPlaylistSelect.value));
  }
  if (adminPinBtn) {
    adminPinBtn.addEventListener("click", () => {
      toggleLecturePin(video.id);
      openLectureDetail(video.id, { preserveQueue: true });
    });
  }
  if (adminEditBtn) {
    adminEditBtn.addEventListener("click", () => initiateLectureEditLifecycle(video.id));
  }
  if (adminDeleteBtn) {
    adminDeleteBtn.addEventListener("click", () => {
      executeLectureDeletion(video.id);
      triggerCloseGlobalLightboxShell();
    });
  }
}

function updateLectureSEO(video) {
  const pageTitle = `${video.title} | Mubarak Ahmad Rabbani Lectures`;
  document.title = pageTitle;
  const description = (video.description || "").slice(0, 155) || `Watch ${video.title} from the official Mubarak Ahmad Rabbani YouTube channel.`;
  const setMeta = (selector, value, attr = "content") => {
    let node = document.querySelector(selector);
    if (!node) return;
    node.setAttribute(attr, value);
  };
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', pageTitle);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', `${window.location.origin}${window.location.pathname}#lectures-${video.slug}`);
  setMeta('meta[property="og:image"]', video.thumbnail || "photos/scholar-main.png");
  setMeta('meta[name="twitter:title"]', pageTitle);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[name="twitter:image"]', video.thumbnail || "photos/scholar-main.png");
}

function bindLectureUiControls() {
  const search = document.getElementById("lectureSearchInput");
  if (search && !search.dataset.bound) {
    search.dataset.bound = "1";
    search.addEventListener("input", () => {
      lectureUiState.query = search.value;
      lectureUiState.page = 1;
      renderUserLecturesPortal();
    });
  }

  const playlistFilter = document.getElementById("lecturePlaylistFilter");
  if (playlistFilter && !playlistFilter.dataset.bound) {
    playlistFilter.dataset.bound = "1";
    playlistFilter.addEventListener("change", () => {
      lectureUiState.playlist = playlistFilter.value;
      lectureUiState.page = 1;
      renderUserLecturesPortal();
    });
  }

  const sortSelect = document.getElementById("lectureSortSelect");
  if (sortSelect && !sortSelect.dataset.bound) {
    sortSelect.dataset.bound = "1";
    sortSelect.addEventListener("change", () => {
      lectureUiState.sort = sortSelect.value;
      lectureUiState.page = 1;
      renderUserLecturesPortal();
    });
  }

  const syncBtn = document.getElementById("refreshLectureSyncBtn");
  if (syncBtn && !syncBtn.dataset.bound) {
    syncBtn.dataset.bound = "1";
    syncBtn.addEventListener("click", requestLectureSync);
  }
}

function bindPlaylistModal() {
  const fileInput = document.getElementById("playlistCoverInput");
  const preview = document.getElementById("playlistCoverPreview");
  const modal = document.getElementById("playlistCrudModal");

  if (fileInput && !fileInput.dataset.bound) {
    fileInput.dataset.bound = "1";
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        preview.innerHTML = `<img src="${reader.result}" alt="Playlist cover preview">`;
        preview.dataset.image = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  const closePlaylist = document.getElementById("closePlaylistModalBtn");
  const cancelPlaylist = document.getElementById("cancelPlaylistModalBtn");
  [closePlaylist, cancelPlaylist].forEach(btn => {
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => modal.classList.remove("open"));
    }
  });

  const form = document.getElementById("playlistCrudForm");
  if (form && !form.dataset.bound) {
    form.dataset.bound = "1";
    form.addEventListener("submit", () => {
      const editId = document.getElementById("playlistEditId").value;
      const payload = {
        id: editId || `manual_${slugify(document.getElementById("playlistNameInput").value)}_${Date.now()}`,
        name: document.getElementById("playlistNameInput").value.trim(),
        slug: slugify(document.getElementById("playlistNameInput").value),
        description: document.getElementById("playlistDescInput").value.trim(),
        coverImage: preview.dataset.image || "",
        displayOrder: Number(document.getElementById("playlistOrderInput").value || 1),
        source: "manual",
        pinned: false,
        updatedAt: new Date().toISOString()
      };

      if (editId) {
        const idx = lectureStore.playlists.findIndex(item => item.id === editId);
        if (idx >= 0) lectureStore.playlists[idx] = { ...lectureStore.playlists[idx], ...payload };
      } else {
        lectureStore.playlists.push(payload);
      }
      lectureStore.playlists.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      persistLectureState();
      modal.classList.remove("open");
      syncAdminManagementDashboard();
      renderUserLecturesPortal();
    });
  }
}

function bindLectureModal() {
  const lectureModal = document.getElementById("lectureCrudModal");
  const openLecture = document.getElementById("openAddLectureModalBtn");
  if (openLecture && !openLecture.dataset.bound) {
    openLecture.dataset.bound = "1";
    openLecture.addEventListener("click", () => {
      document.getElementById("lectureCrudForm").reset();
      document.getElementById("lectureEditId").value = "";
      document.getElementById("lectureModalTitle").textContent = "Manage Lecture Assignment";
      lectureModal.classList.add("open");
    });
  }

  const playlistBtn = document.getElementById("openAddPlaylistModalBtn");
  if (playlistBtn && !playlistBtn.dataset.bound) {
    playlistBtn.dataset.bound = "1";
    playlistBtn.addEventListener("click", openPlaylistCrudModal);
  }

  const closeLecture = document.getElementById("closeLectureModalBtn");
  const cancelLecture = document.getElementById("cancelLectureModalBtn");
  [closeLecture, cancelLecture].forEach(btn => {
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => lectureModal.classList.remove("open"));
    }
  });

  const form = document.getElementById("lectureCrudForm");
  if (form && !form.dataset.bound) {
    form.dataset.bound = "1";
    form.addEventListener("submit", () => {
      const editId = document.getElementById("lectureEditId").value;
      const playlistName = document.getElementById("lecturePlaylistInput").value.trim();
      const playlist = playlistName
        ? (lectureStore.playlists.find(item => item.name.toLowerCase() === playlistName.toLowerCase()) || null)
        : null;
      const payload = normalizeImportedVideo({
        id: editId || `manual_${Date.now()}`,
        youtubeVideoId: extractVideoId(document.getElementById("lectureUrlInput").value.trim()),
        title: document.getElementById("lectureTitleInput").value.trim(),
        description: "",
        duration: document.getElementById("lectureDurInput").value.trim(),
        url: document.getElementById("lectureUrlInput").value.trim(),
        embedUrl: toEmbedUrl(document.getElementById("lectureUrlInput").value.trim()),
        category: document.getElementById("lectureCatInput").value.trim(),
        playlistId: playlist ? playlist.id : resolvePlaylistForCategory(document.getElementById("lectureCatInput").value.trim()),
        pinned: document.getElementById("lecturePinInput").value === "true"
      }, lectureStore.settings.channelHandle);

      if (playlist) {
        payload.playlistId = playlist.id;
        payload.playlistName = playlist.name;
      }

      const idx = lectureStore.videos.findIndex(item => item.id === editId || item.youtubeVideoId === payload.youtubeVideoId);
      if (idx >= 0) {
        lectureStore.videos[idx] = { ...lectureStore.videos[idx], ...payload, updatedAt: new Date().toISOString() };
      } else {
        lectureStore.videos.unshift(payload);
      }
      hydrateLectureStore(lectureStore.videos, true);
      document.getElementById("lectureCrudModal").classList.remove("open");
      syncAdminManagementDashboard();
      renderUserLecturesPortal();
    });
  }
}

function bindLectureStoreButtons() {
  bindLectureUiControls();
  bindLectureModal();
  bindPlaylistModal();
  bindLectureApiKeyControls();
  bindTaxonomyModal();
  syncLecturePickers();
}

function bindLectureApiKeyControls() {
  const input = document.getElementById("youtubeApiKeyInput");
  const saveBtn = document.getElementById("saveYoutubeApiKeyBtn");
  const status = document.getElementById("youtubeApiKeyStatus");
  if (input) input.value = getLectureApiKey();

  if (saveBtn && !saveBtn.dataset.bound) {
    saveBtn.dataset.bound = "1";
    saveBtn.addEventListener("click", () => {
      const nextKey = (document.getElementById("youtubeApiKeyInput").value || "").trim();
      window.localStorage.setItem("mar_youtube_api_key", nextKey);
      if (status) status.textContent = nextKey ? "Saved locally. Sync is ready." : "Key cleared.";
      updateLectureSyncStatus(nextKey ? "API key stored locally." : "API key cleared.", nextKey ? "success" : "warn");
      if (nextKey) requestLectureSync();
    });
  }
}

function bindTaxonomyModal() {
  const modal = document.getElementById("taxonomyCrudModal");
  const openBtn = document.getElementById("openTaxonomyModalBtn");
  const closeBtn = document.getElementById("closeTaxonomyModalBtn");
  const cancelBtn = document.getElementById("cancelTaxonomyModalBtn");
  const form = document.getElementById("taxonomyCrudForm");
  const textArea = document.getElementById("taxonomyJsonInput");

  if (openBtn && !openBtn.dataset.bound) {
    openBtn.dataset.bound = "1";
    openBtn.addEventListener("click", () => {
      textArea.value = JSON.stringify(lectureStore.taxonomy, null, 2);
      modal.classList.add("open");
    });
  }

  [closeBtn, cancelBtn].forEach(btn => {
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => modal.classList.remove("open"));
    }
  });

  if (form && !form.dataset.bound) {
    form.dataset.bound = "1";
    form.addEventListener("submit", () => {
      try {
        const parsed = JSON.parse(textArea.value);
        if (!Array.isArray(parsed)) throw new Error("Taxonomy must be an array");
        lectureStore.taxonomy = parsed.map(item => ({
          name: String(item.name || "").trim(),
          keywords: Array.isArray(item.keywords) ? item.keywords.map(v => String(v).trim()).filter(Boolean) : []
        })).filter(item => item.name);
        persistLectureState();
        hydrateLectureStore(lectureStore.videos, true);
        modal.classList.remove("open");
        syncAdminManagementDashboard();
        renderUserLecturesPortal();
      } catch (err) {
        alert("Invalid taxonomy JSON. Please keep the array of objects with name and keywords.");
      }
    });
  }
}

window.executeLectureDeletion = executeLectureDeletion;
window.initiateLectureEditLifecycle = function(targetId) {
  const match = lectureStore.videos.find(item => item.id === targetId);
  if (!match) return;
  document.getElementById("lectureEditId").value = match.id;
  document.getElementById("lectureTitleInput").value = match.title || "";
  document.getElementById("lectureCatInput").value = match.category || match.playlistName || "General Lectures";
  document.getElementById("lectureDurInput").value = match.duration || "";
  document.getElementById("lectureUrlInput").value = match.url || "";
  document.getElementById("lecturePlaylistInput").value = match.playlistName || "";
  document.getElementById("lecturePinInput").value = String(Boolean(match.pinned));
  document.getElementById("lectureModalTitle").textContent = "Modify Lecture";
  document.getElementById("lectureCrudModal").classList.add("open");
};
window.initiatePlaylistEditLifecycle = initiatePlaylistEditLifecycle;
window.executePlaylistDeletion = executePlaylistDeletion;
window.moveLectureToPlaylist = moveLectureToPlaylist;
window.toggleLecturePin = toggleLecturePin;
window.requestLectureSync = requestLectureSync;
window.openLectureDetail = openLectureDetail;
window.openPlaylistCrudModal = openPlaylistCrudModal;

document.addEventListener("DOMContentLoaded", () => {
  bindLectureStoreButtons();
  syncAdminManagementDashboard();
  renderUserLecturesPortal();
});
