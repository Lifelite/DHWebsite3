import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function Messages() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant={'h5'}>
                    Messages Page!
                </Typography>
            <Typography variant='h6'>
                Placeholder till Santa sorting happens!
            </Typography>
            </Box>
        </>
    )
}