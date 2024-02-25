import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <h1>Grid 8</h1>
      </Grid>
      <Grid item xs={4}>
        <h1>Grid 4</h1>
      </Grid>
    </Grid>
  );
}
