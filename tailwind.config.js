	/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Crucial: Tells Tailwind to scan all HTML files
	'./src/**/*.{html,js}', // This is the key line 
	'./index.html', // Add other relevant paths if you use a framework
	  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
