# Mohammad Azhar — Data Analyst & Data Science Portfolio

A modern, production-quality, responsive portfolio website built specifically for **Mohammad Azhar** (B.Tech CSE — Data Science '27 | CGPA 8.0) using **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Chart.js**.

---

## 🌟 Key Features

- **Modern Analytics Aesthetic**: Deep slate dark mode (`#070a11`), glowing emerald/cyan indicators, glassmorphic cards, and crisp typography.
- **Hero & Profile Showcase**: Highlighting B.Tech CSE (Data Science) degree, CGPA (8.0), status pill (`● Open to Internships & Opportunities`), and direct social links.
- **Featured Case Studies**: Deep-dive project modal and pipeline architecture for **Sales Trend Analysis** (`https://github.com/Azhar0612/sales-trend-analysis`) and 5 additional case studies.
- **Interactive Analytics Playground**: Live responsive dashboard powered by `Chart.js` allowing recruiters to filter sample metrics by Region and Product Category.
- **Data Value Chain Journey**: Interactive 6-stage value chain (`RAW DATA` → `SQL/PYTHON` → `CLEAN & ANALYZE` → `VISUALIZE` → `MODELING` → `DECISION`).
- **Interactive Data Terminal**: Custom developer shell with commands (`whoami`, `focus`, `tools`, `goal`, `projects`, `contact`).
- **Recruiter & ATS Ready**: One-click PDF resume download CTA and direct contact form.
- **Centralized Data Management**: All text, skills, projects, and metadata centralized in ES modules inside `src/data/`.

---

## 🛠 Tech Stack & Dependencies

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Framer Motion (`framer-motion`)
- **Charts**: Chart.js (`chart.js` & `react-chartjs-2`)

---

## 🚀 Local Development Setup

### 1. Prerequisite
Ensure [Node.js](https://nodejs.org/) (v18+) is installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the website with hot reload.

---

## 🏗 Building for Production

To create a minified production build:
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 📝 How to Update Your Content Later

All content is cleanly separated from UI components inside `src/data/`:

1. **Profile Info, Contact & Bio**: Edit `src/data/profileData.js`
   - Update email, LinkedIn URL, status pill, or CGPA.
2. **Skills & Categories**: Edit `src/data/skillsData.js`
   - Add new tools, descriptions, or project associations.
3. **Projects & Case Studies**: Edit `src/data/projectsData.js`
   - Add GitHub repository URLs, live demo links, or change project features.
4. **Research Paper**: Edit `src/data/researchData.js`
5. **Interactive Demo Data**: Edit `src/data/playgroundData.js`
6. **Profile Photo**: Replace `public/assets/azhar_profile.jpg` with any new picture.
7. **Resume PDF**: Replace `public/assets/Azhar_Resume.pdf` with your updated resume PDF.

---

## ☁ Deploying to Vercel (Recommended)

1. Push your codebase to your GitHub account (`https://github.com/Azhar0612/portfolio`).
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep default settings (Vite framework preset).
5. Click **Deploy**. Your site will be live on a `.vercel.app` domain in seconds!

### Connecting Custom Domain on Vercel:
1. Go to your project settings in Vercel -> **Domains**.
2. Type your domain name (e.g. `azhar-analytics.dev` or `mohammadazhar.com`).
3. Follow the DNS records instructions provided by Vercel in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).

---

## 📄 License & Credits

Built with curiosity, data & code by **Mohammad Azhar** © 2026.
