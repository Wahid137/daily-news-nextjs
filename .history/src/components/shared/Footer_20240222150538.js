import { Box, Container } from '@mui/material';


const Footer = () => {
    return (
        <Box>
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