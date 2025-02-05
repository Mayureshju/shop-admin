"use client";

import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import IconComponent from "components/IconComponent";

// CUSTOM DATA MODEL


// STYLED COMPONENTS
import { IconBox, StyledRoot } from "./styles";


// ========================================================


// ========================================================

export default function Section5({
  services = []
}) {
  const servicesData = services.slice(0, 3);
  return <div className="mb-3">
      <Grid container spacing={3}>
        {servicesData.map(({
        icon,
        title,
        id,
        description
      }) => {
        return <Grid size={{
          md: 4,
          xs: 12
        }} key={id}>
              <StyledRoot>
                <IconBox>
                  <IconComponent icon={icon} color="primary" />
                </IconBox>

                <div>
                  <Typography variant="h4" color="primary" className="title">
                    {title}
                  </Typography>

                  <Typography variant="body1" className="description">
                    {description}
                  </Typography>
                </div>
              </StyledRoot>
            </Grid>;
      })}
      </Grid>
    </div>;
}