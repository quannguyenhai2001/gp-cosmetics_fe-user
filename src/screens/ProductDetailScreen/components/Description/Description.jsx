import { Box } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import useStyles from './styles';
const Description = ({ detailProduct }) => {
    const classes = useStyles();

    return (
        <Box sx={{ marginBottom: '4rem' }}>
            {/* {detailProduct.description && */}
            {/* (<> */}
            {/* <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '2rem' }}>
                        Review Product
                    </Typography> */}
            <Box>
                <Accordion className={classes.rootPaper}>
                    <AccordionSummary className={classes.rootButtonBase}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontWeight: 600 }} variant="h6">Chi Tiết Sản Phẩm</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.rootAccordionDetails}>
                        <Box className={classes.boxDescription} dangerouslySetInnerHTML={{ __html: detailProduct.description }}></Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.rootPaper}>
                    <AccordionSummary className={classes.rootButtonBase}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontWeight: 600 }} variant="h6">Thành Phần</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.rootAccordionDetails}>
                        <Typography>
                            No Information!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.rootPaper}>
                    <AccordionSummary className={classes.rootButtonBase}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontWeight: 600 }} variant="h6">Cách Sử Dụng</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.rootAccordionDetails}>
                        <Typography>
                            No Information!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            {/* </>) */}
            {/* } */}
        </Box>
    );
};

export default Description;