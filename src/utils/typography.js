import Typography from "typography";
import grandViewTheme from "typography-theme-fairy-gates";
grandViewTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3": {
    color: "#ffffff"
  }
});

const typography = new Typography(grandViewTheme);

export default typography;
