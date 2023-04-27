/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
          "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
          "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
        },

        go: {
          "0%": {
            transform: "translateX(100px)",
          },
          "80%": {
            transform: "translateX(-20px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },

        come: {
          "0%": {
            transform: "translateX(-100px)",
          },
          "80%": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },

        shimmy: {
          "0%": {
            opacity: "0.5",
            transform: "translateX(200px)",
          },
          // "50%": {
          //   transform: "translateX(500px)",
          // },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
        go: "go 2s ease-in-out ",
        come: "come 2s ease-in-out ",
        shimmy: "shimmy 2s ease-in-out ",
      },
    },
  },
  plugins: [],
};
