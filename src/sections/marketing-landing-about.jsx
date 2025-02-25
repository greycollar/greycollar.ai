import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { fShortenNumber } from "src/utils/format-number";

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: "projects",
    total: 20,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
  {
    label: "Happy clients",
    total: 32000,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
  {
    label: "years of experience",
    total: 20,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/marketing/d9971c8d-db00-4718-8e15-6ac90325d3b0.png"
        ratio="21/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography
            component="div"
            variant="overline"
            sx={{ color: "text.disabled" }}
          >
            About us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Nucleoid Project
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We aim to create a platform that will allow everyone to create their
            own AI models and use them in their projects.
          </Typography>

          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: "dashed" }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">
                      {fShortenNumber(row.total)}
                    </Typography>
                    <Box
                      component="span"
                      sx={{ color: "primary.main", typography: "h4" }}
                    >
                      +
                    </Box>
                  </Stack>

                  <Typography
                    variant="overline"
                    sx={{ color: "text.disabled" }}
                  >
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
