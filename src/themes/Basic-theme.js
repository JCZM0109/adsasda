import { createTheme } from "@mui/material";

export const BasicTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(rgba(215,173,92,255), rgba(224,190,131,255))",
          color: "black",
          width: "fit-content",
          borderRadius: "30px",
          fontWeight: "bold",
          textTransform: "none",
          
        },
        sizeSmall: {
          width: "135px",
        },
        sizeLarge: {
          width: "fit-content",
          fontSize: "15px",
          padding: "5px 30px",
        },
      },
    },
  }
}
);
