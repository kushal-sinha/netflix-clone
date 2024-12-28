import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 150,
        bgcolor: "inherit",
        px: "60px",
      }}
    >
      <Box>
        <Divider>
          <Typography color="grey.700" variant="h6">
            Developed by{" "}
            <Link
              underline="none"
              sx={{ color: "text.primary" }}
              target="_blank"
            >
              Kushal Sinha
            </Link>
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}
