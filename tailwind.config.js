/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "todo-primary": "#d8dfff",
        "todo-secondary": "rgb(245, 246, 252)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
