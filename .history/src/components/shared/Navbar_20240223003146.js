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
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/categories/news?category=all-news",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
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
                                <Link>
                                    <Button
                                        key={item}
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
