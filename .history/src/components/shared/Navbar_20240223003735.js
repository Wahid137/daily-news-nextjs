"use client"

import logo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from "next/link";
import Header from "./Header";

const navItems = [
    {
        id: 1,
        route: "Home",
        pathname: "/",
    },
    {
        id: 1,
        route: "Pages",
        pathname: "/pages",
    },
    {
        id: 1,
        route: "Category",
        pathname: "/categories/news?category=all-news",
    },
    {
        id: 1,
        route: "News",
        pathname: "/news",
    },
    {
        id: 1,
        route: "About",
        pathname: "/about",
    },
    {
        id: 1,
        route: "Contact",
        pathname: "/contact",
    },
];



function Navbar() {


    return (
        <>
            <Header />
            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src={logo} width={100} height={100} alt='logo' />

                        <Box className="w-full text-center">
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button

                                        className="text-white r"
                                    >
                                        {item.route}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack
                                direction="row"
                                sx={{
                                    "& svg": {
                                        color: "white",
                                    },
                                }}
                            >
                                <IconButton>
                                    <Facebook />
                                </IconButton>
                                <IconButton>
                                    <Twitter />
                                </IconButton>
                                <IconButton>
                                    <YouTube />
                                </IconButton>
                                <IconButton>
                                    <Instagram />
                                </IconButton>
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
