const backgroundColor = "#1b202a";
const foregroundColor = "#c9d0dc";

const RED         = "#b15e7c";
const GREEN       = "#709d6c";
const BLUE        = "#608cc3";
const YELLOW      = "#b5a262";
const CYAN        = "#56adb7";
const PINK        = "#ca8bba";
const WHITE       = foregroundColor;
const PURPLE      = "#8f72bf";
const MEDIUM_GRAY = "#9aa7bd";

const colors = {
  black:        backgroundColor,
  red:          RED,
  green:        GREEN,
  blue:         BLUE,
  yellow:       YELLOW,
  cyan:         CYAN,
  magenta:      PINK,
  white:        WHITE,
  lightblack:   MEDIUM_GRAY,
  lightRed:     PURPLE,
  lightGreen:   GREEN,
  lightYellow:  YELLOW,
  lightBlue:    BLUE,
  lightMagenta: PINK,
  lightCyan:    CYAN,
  lightWhite:   WHITE
}

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#2a3341',
    cursorColor: 'rgba(96, 140, 195, 0.5)',
    backgroundColor,
    foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-color: #608cc3;
      }
    `
  });
}
