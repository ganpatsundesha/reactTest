import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3F78E0",
            secondary: "#EDF2FC",
            black: "#000000",
            white: "#ffffff",
        },
    },
    typography: {
        h1: {
            fontSize: "58px",
            fontWeight: 700,
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
        },
        h3: {
            fontSize: "34px",
            fontWeight: 700,
        },
        h4: {
            fontSize: "30px",
            fontWeight: 700,
        },
        h5: {
            fontSize: "24px",
            fontWeight: 600,
        },
        h6: {
            fontSize: "20px",
            fontWeight: 500,
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
        },
    }
})