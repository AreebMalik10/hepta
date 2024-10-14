/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '84': '21rem',   // New value between 80 and 96
        '88': '22rem',   // New value between 80 and 96
        '92': '23rem',   // New value between 80 and 96
        '96': '24rem', // Existing value
        '98': '24.5rem', // New value
        '100': '25rem',  // New value
        '102': '25.5rem', // New value
        '104': '26rem',
        '112': '28rem', // New value between 96 and 128
        '114': '28.5rem',  // 1
        '116': '29rem',    // 2
        '118': '29.5rem',
        '120': '30rem', // New value between 96 and 128
        '128': '32rem', // Existing value
        '144': '36rem',
        '148': '37rem',  // New value between 144 and 160
        '152': '38rem',  // New value between 144 and 160
        '156': '39rem',  // New value between 144 and 160
        '160': '40rem',
        '164': '41rem',  // 1
        '168': '42rem',  // 2
        '172': '43rem',  // 3
        '176': '44rem',  // 4
        '180': '45rem',  // 5
        '184': '46rem',  // 6
        '188': '47rem',  // 7
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      colors: {
        customTeal: '#65c0ba',
      },
    },
  },
  plugins: [],
}
