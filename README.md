# Maestra Manga

A modern, full-featured manga reading platform built with Next.js, offering a seamless experience for manga fans to discover, read, and contribute manga content. The platform supports user authentication, manga and chapter management, advanced search, and a responsive, RTL-friendly UI.

## Overview

**Maestra Manga** is designed to provide a rich, community-driven manga reading experience. Users can browse a curated manga library, read chapters with a smooth reader, and—if authorized—contribute new manga or chapters. The platform is optimized for performance, accessibility, and ease of use, with a focus on both readers and contributors.

**Main Goals:**

- Deliver a fast, beautiful, and accessible manga reading experience.
- Enable community contributions (manga/chapter uploads).
- Support user authentication and role-based access.
- Provide a responsive, RTL-friendly interface for global audiences.

---

## Features

- **User Authentication:** Secure login and registration flows.
- **Manga Library:** Browse, search, and filter manga titles.
- **Chapter Reader:** Read manga chapters with a fullscreen, swipeable interface.
- **Manga & Chapter Upload:** Add new manga series and chapters (for authorized users).
- **Advanced Search:** Find manga by title or category.
- **Responsive UI:** Mobile-first, RTL support, and custom theming.
- **Loading Skeletons:** Smooth loading states for all major components.
- **Ad & Support Integration:** Dedicated pages for supporting the platform and ad display.
- **Community & Team:** "Join Us" page for contributors and team members.

---

## Tech Stack

- **Frontend Framework:** [Next.js 14](https://nextjs.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), custom CSS, RTL support
- **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Select Inputs:** [React Select](https://react-select.com/)
- **Carousel/Slider:** [Swiper.js](https://swiperjs.com/)
- **Skeleton Loading:** [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
- **State Management:** React Context API
- **Type Checking:** TypeScript (config included)
- **Linting/Formatting:** ESLint, Prettier, Prettier Plugin for Tailwind CSS
- **PostCSS:** For CSS processing

---

## Folder Structure

```
maestra-manga/
├── app/                   # Main application source
│   ├── _components/       # Reusable UI components (cards, forms, header, etc.)
│   ├── _context/          # React context providers (e.g., MangaListContext)
│   ├── _skeletonComponents/ # Skeleton loaders for UI
│   ├── _utils/            # API utilities (manga, user, ads, etc.)
│   ├── (auth)/            # Authentication pages (login, register)
│   ├── add_manga/         # Page for adding new manga
│   ├── manga_list/        # Manga listing and chapter reading
│   ├── manga/             # (Reserved for manga-specific routes)
│   ├── support_us/        # Support/donation page
│   ├── join_us/           # Community/team join page
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.js          # App layout
│   └── page.js            # Main landing page
├── public/                # Static assets (images, icons, fonts)
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Project metadata, scripts, dependencies
├── tsconfig.json          # TypeScript configuration
├── jsconfig.json          # JS/TS path aliases
└── README.md              # Project documentation
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/maestra-manga.git
   cd maestra-manga
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Scripts

| Script  | Description                  |
| ------- | ---------------------------- |
| `dev`   | Start the development server |
| `build` | Build the app for production |
| `start` | Start the production server  |
| `lint`  | Run ESLint for code quality  |

---

## Usage

- **Browse Manga:** Explore the homepage or manga list to discover available titles.
- **Read Chapters:** Click on a manga to view its chapters and start reading.
- **Search:** Use the search bar to find manga by name or category.
- **Authentication:** Register or log in to unlock additional features (e.g., uploading).
- **Add Manga/Chapters:** If authorized, use the "Add Manga" page to contribute new content.
- **Support Us:** Visit the "Support Us" page to help the platform grow.
- **Join Us:** Interested in contributing? Check out the "Join Us" page.

---

## Contribution Guide

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request describing your changes.

Please follow the existing code style and conventions.

---

## Author

**Ahmed**

---

## License

This project is currently private and does not specify a license. For usage or contributions, please contact the author.

---

**Enjoy reading and contributing to Maestra Manga!**
