# 🚀 Personal Portfolio

A animation-driven personal portfolio built with **React 19** and **Vite**. This project showcases my journey as a Frontend Developer through seamless motion design and a modular architecture.

🔗 **[https://shorani.ir](https://shorani.ir)**

---

## ✨ Overview
This portfolio is more than just a website; it's an interactive experience. It features:
- **Motion Design:** Smooth, scroll-triggered animations using `GSAP`.
- **Fluid UX:** Kinetic scrolling implemented with `Lenis`.
- **Modern Stack:** Built with `TypeScript` and `Tailwind CSS v4` for type-safety and rapid styling.
- **State Management:** Efficient global state handling with `Zustand`.

---

## 📂 Architecture & Key Modules

The project follows a **Feature-Based Architecture** to ensure scalability and clean separation of concerns:

- 🏗️ **`src/layouts/`**: Core structural components (Header, Footer, Menu, and Main layouts).
- 🎬 **`src/animations/`**: Reusable, high-level animation hooks (e.g., `useLenis`, `useRevealOnScroll`).
- 🧩 **`src/sections/`**: The heart of the site. Each section (Hero, About, Projects, Skills) is self-contained with its own:
  - `components/`: Local UI elements.
  - `animations/`: Section-specific motion logic.
  - `data/`: Static content to keep components clean.
- 🧠 **`src/store/`**: Global state management (Zustand).
- 🖼️ **`src/assets/`**: Optimized 3D icons, project screenshots, and media.

---

## 🌲 File Structure (Simplified)
```text
src
├── animations/     # Global scroll & motion hooks
├── app/            # Entry points (App, Main)
├── components/     # Shared global components
├── layouts/        # Structural wrappers (Header, Footer, Menu)
├── sections/       # Feature-based sections (Hero, About, etc.)
│   └── [SectionName]
│       ├── components/
│       ├── animations/
│       └── data/
├── store/          # Global state (Zustand)
└── assets/         # Static media & icons
```
---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/MohammadJAME/Portfolio.git
cd Portfolio
npm install
```
### 2. Run Locally
```bash
# Development mode
npm run dev

# Production build
npm run build
npm run preview
```
## 🛠️ Tech Stack Summary

| Category | Tools |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4 |
| **Motion** | GSAP, Lenis, Typed.js |
| **State** | Zustand |

