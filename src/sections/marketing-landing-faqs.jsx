import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { _faqs } from "src/_mock";
import { useResponsive } from "src/hooks/use-responsive";

import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import { useCallback, useState } from "react";

// ----------------------------------------------------------------------

export default function MarketingLandingFaqs() {
  const mdUp = useResponsive("up", "md");

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h2">Frequently Asked Questions</Typography>
          </Stack>

          {_faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary
                sx={{
                  minHeight: 64,
                  [`& .${accordionSummaryClasses.content}`]: {
                    p: 0,
                    m: 0,
                  },
                  [`&.${accordionSummaryClasses.expanded}`]: {
                    bgcolor: "action.selected",
                  },
                }}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>

                <Iconify
                  width={24}
                  icon={
                    expanded === faq.question ? "carbon:subtract" : "carbon:add"
                  }
                />
              </AccordionSummary>

              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6} lg={6}>
            <Image
              alt="faqs"
              src="https://cdn.nucleoid.com/media/d1afb01b-ca2e-4752-8f5b-d01f9c73e8d6.png"
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
