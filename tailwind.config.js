module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainly: "#f57e47",
        mainbg: '#f4f7fa',
        sidebg: '#233d5a',
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
      monospace: ["monospace"],
      cursive: ["cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
