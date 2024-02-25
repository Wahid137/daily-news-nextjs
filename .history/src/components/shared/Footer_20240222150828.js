"use client"

import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, Container, IconButton } from "@mui/material";
import Link from "next/link";


const Footer = () => {
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
            pathname: "/category",
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
    return (
        <Box className="bg-black">
            <Container>
                <Box sx={{
                    "& svg": {
                        color: "white",
                    },
                }}>

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

                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;