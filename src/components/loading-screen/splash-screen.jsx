import Box from "@mui/material/Box";
import Logo from "../logo";
import PropTypes from "prop-types";
import { bgBlur } from "src/theme/css";
import { m } from "framer-motion";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          ...bgBlur({
            blur: 2,
            opacity: 0.24,
            color: theme.palette.background.default,
          }),
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9999,
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
        {...other}
      >
        <Box
          component={m.div}
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo single />
        </Box>
      </Box>

      <Box sx={{ width: 1, height: "100vh" }} />
    </>
  );
}

SplashScreen.propTypes = {
  sx: PropTypes.object,
};
