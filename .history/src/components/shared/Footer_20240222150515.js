import { Box, Container } from '@mui/material';


const Footer = () => {
    return (
        <Box>
            <Container>
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

            </Container>
        </Box>
    );
};

export default Footer;