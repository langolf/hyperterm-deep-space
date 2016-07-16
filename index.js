exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#2a3341',
    cursorColor: 'rgba(96, 140, 195, 0.5)',
    foregroundColor: '#c9d0dc',
    backgroundColor: '#1b202a',
    colors: [
      "#21252b",
      "#b15e7c", // red
      "#709d6c", // green
      "#b5a262", // yellow
      "#608cc3", // blue
      "#ca8bba", // pink
      "#56adb7", // cyan
      "#9aa7bd", // light gray
      "#51617d", // medium gray
      "#b15e7c", // red
      "#709d6c", // green
      "#b5a262", // yellow
      "#608cc3", // blue
      "#ca8bba", // pink
      "#56adb7", // cyan
      "#c9d0dc", // white
      "#abb2bf"
    ],
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-color: #608cc3;
      }
    `
  });
}
