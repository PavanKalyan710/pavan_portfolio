module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'dark-bg': '#0a0a0a',
          'neon-pink': '#ff00ff',
          'neon-blue': '#00ffff',
          'neon-purple': '#9d00ff',
          'neon-green': '#00ff88',
        },
        boxShadow: {
          'neon-sm': '0 0 5px #9d00ff, 0 0 10px #00ffff',
          'neon-md': '0 0 15px #ff00ff, 0 0 20px #00ff88',
          'neon-lg': '0 0 25px #9d00ff, 0 0 30px #00ffff',
        },
        fontFamily: {
          'sans': ['Rajdhani', 'sans-serif'],
          'mono': ['Fira Code', 'monospace'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }