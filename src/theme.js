import { createTheme } from "@mui/material";
import { blue, pink, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#2196f3',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },

      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          mobile: 0,
          tablet: 640,
          laptop: 1024,
          desktop: 1200,
        },
      },
})

export {theme}
