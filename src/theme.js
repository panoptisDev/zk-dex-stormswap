import { createMuiTheme } from "@mui/material/styles";

export const theme = createMuiTheme({
  palette: {
    action: {
      disabled: "#919191",
      disabledBackground: "rgb(237, 238, 242)",
    },
    common: {
      black: "#150215",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
      dark: "#070F23",
      ligthDark: "#121827",
    },

    red: {
      red100: "#FFFDFE",
      red200: "#070F23", //#ffc2a8
      red300: "#252E44",
      red500: "#e0077d", // #d16c00
    },
    textColors: {
      heading: "#000000",
      headingWhite: "#fff",
      subheading: "#454545",
      light: "#757575",
      lightWhite: "#fff",
      lightBorder:"#C128BD",
      pbr: "rgba(224, 7, 125, 1)",
      secondary: "#E0077D",
      textPrimary: "#ffffff",
      textSecondary: "#1e1e1e",
      textLight: "#212121",
      textDark: "#e5e5e5",
    },
    primary: {
      pbr: "rgba(224, 7, 125, 1)",
      pbrSwap:"linear-gradient(90deg, #C229BE 0%, #591359 100%)",
      iconBack: "#150215",
      iconColor: "#C369A5",
      iconColorGold:"#FFA900",
      appLink: "#212121",
      bgCard: "#150215",
      buttonText: "#ffffff",
      buttonColor: "#bdbdbd",
      tokenBack: "#212121",
      light: "rgba(89, 210, 188, 1)",
      main: "#674293",
    },
  },
});
export default theme;
