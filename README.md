# Mubarak Ahmad Rabbani — Official Islamic Research Portal

This project is a modern, high-performance, and responsive educational platform and portfolio website developed for **Mubarak Ahmad Rabbani Al Qadri Al Hanafi**. It serves as a central hub for scholarly research, spiritual teachings, video lectures, and literary publications.

---

## 🚀 Key Features

### **User Module**

* **Dynamic Hero Section:** Features an auto-rotating gallery of scholar portraits with smooth fade-in transitions.


* **Educational Library:** Filterable, searchable interface for published books and scholarly learning modules.


* **Media Archive:** High-performance masonry-style gallery showcasing public gatherings, waaz events, and ceremonies.


* **Interactive Teaching Carousel:** A responsive, auto-rotating slider featuring daily wisdom and prophetic light.


* **Live Metrics Tracker:** Incremental counting system displaying career milestones and scholarly statistics.


* **Responsive Design:** Fully optimized for desktop, tablet, and mobile viewing environments.



### **Admin Module (CMS)**

* **Secure Authentication:** Password-protected administrative access portal.


* **Content Management System (CMS):** Integrated management for:
* Learning Modules (Course Libraries).


* YouTube Lecture Embeds and Metadata.




* **Analytics Dashboard:** Real-time monitoring of library assets and media repositories.
* **Lecture Sync System:** Imports the official YouTube channel through the YouTube Data API, auto-categorizes lectures, and builds internal playlists directly from the imported videos.



---

## 🛠️ Technical Stack

* **Frontend:** HTML5, CSS3 (Advanced Grid/Flexbox), and Vanilla JavaScript (ES6+).


* **UI/UX Design:** Custom premium color palette (Emerald & Gold theme), glassmorphism effects, and scroll-triggered animations.


* **Architecture:** Decoupled modular design separating structural, styling, and business logic layers.
* **Lecture Data:** Cached locally after sync and grouped into virtual playlists derived from lecture content.



---

## 📁 Project Structure

```text
project-root/
│
├── index.html          # Main application structure
├── css/
│   └── style.css       # Responsive styling and theme variables
├── js/
│   └── script.js       # Core logic, CMS engine, and state management
└── photos/             # Image assets
    ├── scholar-main.png
    ├── scholar-about.png
    ├── scholar-pose1.png
    ├── scholar-pose2.png
    ├── scholar-pose3.png
    └── gallery/        # Organized waaz and public event media

```

---

## 🔐 Administrative Access

The admin dashboard is protected via the integrated Authentication Modal.




---

## 📝 Setup & Deployment

1. **Clone/Download:** Ensure all files are maintained within the root folder structure specified above.


2. **Asset Preparation:** Ensure your `photos/` folder is populated with the correctly named assets (e.g., `scholar-main.png`, `scholar-about.png`) to ensure the rendering engine finds your images correctly.


3. **Local Execution:** Open `index.html` in any modern web browser or use a live server extension (like VS Code Live Server) to view the platform locally.

4. **YouTube Sync Setup:** Set `window.MAR_YOUTUBE_API_KEY` in `index.html` or persist a key in `localStorage` under `mar_youtube_api_key` to enable live imports from the official channel handle `@MUBARAKAHMADRABANI`.



---

## 🤝 Support & Maintenance

This platform is crafted with dedication to support the dissemination of authentic Islamic knowledge. Future updates will focus on database integration (SQL/NoSQL) and persistent storage solutions to enhance the administrative CMS capabilities.
