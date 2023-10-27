import { Home, AccountCircle, ViewCarousel, DataObject } from "@mui/icons-material";
import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <AppBar color="transparent" sx={{ backdropFilter: "blur(8px)" }} position="sticky">
      <Toolbar>
        <Button component={Link} href="/" startIcon={<Home />}>
          Home
        </Button>
        <Button component={Link} href="/login" startIcon={<AccountCircle />}>
          Login
        </Button>
        <Button component={Link} href="/carousel" startIcon={<ViewCarousel />}>
          Carousel
        </Button>
        <Button component={Link} href="/mock" startIcon={<DataObject />}>
          Mock
        </Button>
      </Toolbar>
    </AppBar>
  )
}