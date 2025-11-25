# Activity Timer ⏱️

A beautiful and effective time tracking application with a premium glassmorphism design. Track your work sessions and measure your productivity with an elegant, animated interface.

## 🚀 Quick Start

**🌐 Try it online:** [https://leonidzhuravlev.github.io/activity-timer](https://leonidzhuravlev.github.io/activity-timer)

**📥 Download for offline use:** [Latest Release](https://github.com/leonidzhuravlev/activity-timer/releases/latest) - Download `index.html` and open it in any browser!


## ✨ Features

- **Work Time Tracking**: Start and stop your work sessions with a single click
- **Effective Time Measurement**: Track your actual productive time separately
- **Session History**: View all your past work sessions with detailed statistics
- **Data Persistence**: All your data is saved locally in your browser
- **Beautiful UI**: Premium glassmorphism design with smooth animations
- **Visual Feedback**: Blue glow effect during active work sessions
- **Efficiency Metrics**: Automatically calculates your productivity percentage
- **Single-File Build**: Can be run as a standalone HTML file

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

## 📁 Project Structure Explained

### For Development (Source Code)

```
src/                    ← Your source code
├── Application.jsx     ← Main component
├── components/         ← UI components (buttons, timers, history)
├── hooks/              ← Timer logic
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

1. **Start Work Day**: Click the timer button to begin tracking your work session
2. **Toggle Effective Time**: Use the lightning button to track your focused, productive time
3. **Finish Work Day**: Stop the timer when you're done working
4. **View History**: Click the "History" button to see all your past sessions
5. **Start New Day**: Reset and begin a fresh work session

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Vite 5**: Build tool and dev server
- **CSS3**: Styling with custom properties and animations
- **LocalStorage API**: Data persistence
- **vite-plugin-singlefile**: Single-file production builds

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

