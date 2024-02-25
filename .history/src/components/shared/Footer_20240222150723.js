"use client"

import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";


const Footer = () => {
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

            </Container>
        </Box>
    );
};

export default Footer;