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

let globalLecturesData = [
  { id: "l1", title: "Ishq e Mustafa ﷺ — Path to Divine Love", cat: "Spirituality", lang: "Urdu", dur: "45 min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "l2", title: "Aqeedah e Ahl-e-Sunnat — Complete Series", cat: "Aqeedah", lang: "Urdu", dur: "1h 20min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "l3", title: "Maqam e Ghaus e Azam", cat: "Sufism", lang: "Kashmiri", dur: "38 min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "l4", title: "Khatam e Nabuwwat — Research Lecture", cat: "Islamic Research", lang: "Urdu", dur: "1h 05min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "l5", title: "Seerat ul Nabi ﷺ — Birth to Prophethood", cat: "Seerat", lang: "Urdu", dur: "52 min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "l6", title: "Tafseer Surah Al-Fatiha — Deep Analysis", cat: "Quran & Hadith", lang: "Urdu", dur: "40 min", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

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
    document.getElementById("lectureModalTitle").textContent = "Link External YouTube Resource Video";
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