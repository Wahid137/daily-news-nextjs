import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/LatestNews/Sidebar/Sidebar";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
}
