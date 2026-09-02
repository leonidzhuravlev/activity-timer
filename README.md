# Activity Timer ⏱️

A beautiful and effective time tracking application with a premium glassmorphism design. Track your work sessions and measure your productivity with an elegant, animated interface.

## 🚀 Quick Start

**🌐 Try it online:** [https://leonidzhuravlev.github.io/activity-timer](https://leonidzhuravlev.github.io/activity-timer)

**📥 Download for offline use:** [Latest Release](https://github.com/leonidzhuravlev/activity-timer/releases/latest) - Download `Activity Timer.html` and open it in any browser!


## ✨ Features

### 💾 Core Functionality
- **State Persistence**: Your timers automatically save and restore - close the tab or refresh the page and continue right where you left off
- **Smart Time Drift Correction**: Timer catches up for time elapsed while the page was closed
- **Pause/Resume Workflow**: Take breaks without ending your day! Pause your work session and resume when ready
- **Work Time Tracking**: Start, pause, resume, and finish your work sessions
- **Effective Time Measurement**: Track your actual productive time separately with the lightning button
- **Session History**: View all your past work sessions with detailed statistics
- **Efficiency Metrics**: Automatically calculates your productivity percentage

### 🎨 Premium UI/UX
- **Beautiful Glassmorphism Design**: Modern, premium aesthetic with smooth animations
- **Effective Mode Glow**: Entire card glows green when you're in productive mode for better visual feedback
- **Enhanced Gradients**: Dynamic and vibrant background with improved depth
- **Smart Button Icons**: Play/Pause/Stop icons for intuitive workflow control
- **Pulse Animations**: Visual feedback for active and paused states
- **Responsive Layout**: Works perfectly on desktop and mobile

### 🛠️ Technical
- **Single-File Build**: Can be run as a standalone HTML file (~157 KB)
- **LocalStorage Persistence**: All data saved locally in your browser
- **Clean Architecture**: Well-structured code with custom hooks

## 🎨 Design Highlights

- Modern glassmorphism aesthetic
- Smooth transitions and micro-animations
- Responsive layout
- Dark theme with vibrant accent colors
- Pulse animations for active timers
- Elegant hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:leonidzhuravlev/activity-timer.git
cd activity-timer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build will create a single, self-contained HTML file in the `dist` folder that you can open directly in any browser without needing a server.

## 🚀 Deployment & CI/CD

The project includes an automated deployment pipeline to **GitHub Pages** powered by GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

### How Deployment Works

- **Triggers**:
  - **Push to `main`**: Any commit or merged pull request to the `main` branch automatically triggers deployment.
  - **Manual Trigger (`workflow_dispatch`)**: Can be initiated on-demand from the GitHub Actions tab.
- **Workflow Pipeline**:
  1. **Build Job (`ubuntu-latest`)**:
     - Checks out the repository (`actions/checkout@v4`).
     - Sets up **Node.js 18** with npm dependency caching (`actions/setup-node@v4`).
     - Runs clean dependency installation via `npm ci`.
     - Executes `npm run build` to generate the self-contained single-file build in `./dist`.
     - Uploads the `./dist` folder as a Pages artifact (`actions/upload-pages-artifact@v3`).
  2. **Deploy Job (`deploy-pages`)**:
     - Waits for the build job to finish (`needs: build`).
     - Deploys the artifact to **GitHub Pages** using `actions/deploy-pages@v4`.
     - Publishes the live application to the GitHub Pages environment.
- **Permissions & Concurrency**:
  - Configured with `pages: write` and `id-token: write` permissions.
  - Uses concurrency group `"pages"` with `cancel-in-progress: false` to guarantee safe, sequential releases.

## 📁 Project Structure Explained

### For Development (Source Code)

```
.github/
└── workflows/
    └── deploy.yml     ← CI/CD deployment pipeline (GitHub Pages)
src/                    ← Your source code
├── Application.jsx     ← Main component
├── components/         ← UI components (buttons, timers, history)
├── hooks/              ← Custom hooks (useTimer, usePersistence)
├── index.css          ← Styles and animations
└── main.jsx           ← Entry point

index.html             ← HTML template for development
package.json           ← Dependencies list
vite.config.js         ← Build configuration
node_modules/          ← Installed packages
```

**Purpose:** This is your "workshop" where you can:
- ✏️ Edit code
- 🎨 Change design
- ➕ Add features
- 🐛 Fix bugs
- 🔄 Run `npm run dev` for testing

### For Distribution (Built Product)

```
dist/
└── index.html         ← Single-file application (~154 KB)
```

**Purpose:** This is the final product created by `npm run build`.

### 🎯 Simple Analogy

Think of it like baking a cake:
- **Source files** (`src/`, `package.json`, etc.) = recipe, ingredients, kitchen
- **`dist/index.html`** = the finished cake

You don't give your friend flour and eggs — you give them the finished cake!

### 📤 Sharing the Application

**Can I share just the `dist/index.html` file?**

**Yes, absolutely!** This single file contains everything:
- ✅ All JavaScript code (React, timer logic)
- ✅ All CSS styles (animations, glassmorphism)
- ✅ All dependencies

Your friend can:
1. Open it by double-clicking in any browser
2. Use the timer immediately
3. Their history will be saved in their browser (not in the file)

**How to share:**
- Email, Telegram, WhatsApp
- USB drive
- Cloud storage (Google Drive, Dropbox)
- Or just send them the GitHub link!

**Important:** If you delete the source files, you won't be able to modify the app anymore, but `dist/index.html` will continue to work for everyone who has it.


## 🎯 Usage

1. **Start Work Day**: Click the ▶️ Play button to begin tracking your work session
2. **Pause When Needed**: Click the ⏸️ Pause button to take a break - the timer stops but your session is saved
3. **Resume Work**: Click the ▶️ Play button again to continue your work session
4. **Toggle Effective Time**: Use the ⚡ Lightning button to track your focused, productive time (only available when working)
5. **Finish Work Day**: Click the ⏹️ Stop button when you're done - view your summary and efficiency
6. **View History**: Click the "History" button to see all your past sessions
7. **Start New Day**: Click "Start New Day" to reset and begin a fresh work session

### 💡 Pro Tips
- Your session automatically saves - feel free to close the browser tab!
- If you accidentally close the tab while working, just reopen it - the timer will have continued counting
- The green glow indicates you're in "Effective" mode - maximum productivity! ⚡

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Vite 5**: Build tool and dev server
- **CSS3**: Styling with custom properties and animations
- **LocalStorage API**: Data persistence
- **vite-plugin-singlefile**: Single-file production builds
- **GitHub Actions & GitHub Pages**: Automated CI/CD pipeline and static hosting

## 📊 Data Storage

All session data is stored locally in your browser using the LocalStorage API. Your data never leaves your device and remains private.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Leonid Zhuravlev**
- GitHub: [@leonidzhuravlev](https://github.com/leonidzhuravlev)

---

Made with ❤️ and attention to detail

