import { Box, Button, TextField } from '@mui/material';
import React, { memo, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from './styles';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import qs from "query-string";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteListProducts, fetchAsyncGetProducts } from 'redux/slices/productSlice';
import { toast } from 'react-toastify';
import removeEmptyValuesInObject from 'utils/removeEmptyValuesInObject';

//price
function valuetext(value) {
    return `${value}°C`;
}

const Filter = (props) => {
    const classes = useStyles();
    const listManu = useSelector(state => state.products.manufacturers);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();


    //filter manu
    const [isCheckManu, setIsCheckManu] = React.useState(false);
    const [manuValue, setManuValue] = React.useState('');
    const handleChangeCheckedManu = (e, item) => {
        setIsCheckManu(e.target.checked)
        if (e.target.checked) {
            setManuValue(item.id)
        }
        else {
            setManuValue("")
        }
    }

    //filter price
    const [priceValues, setPriceValues] = React.useState({
        startPrice: "",
        endPrice: ""

    });
    const handleChangePrice = (e) => {
        setPriceValues({ ...priceValues, [e.target.name]: e.target.value })
    }
    //filter sale
    const [isCheckSale, setIsCheckSale] = React.useState(false);

    const handleChangeCheckedSale = (event) => {
        setIsCheckSale(event.target.checked);
    };



    const location = useLocation();
    const qsParsed = qs.parse(location.search);

    useEffect(() => {
        (async () => {
            try {
                await dispatch(
                    fetchAsyncGetProducts({
                        ...qsParsed,
                        use_page: 1,
                        category_id: params.categoryId
                    })
                ).unwrap();

            } catch (e) {

                toast({
                    severity: "warning",
                    message: "Không có kết quả!",
                });
            }
        })();
    }, [location.search, dispatch, qsParsed, params]);

    const handleFilter = async values => {
        try {
            const initSearchValues = {
                manufacturer_id: manuValue ? manuValue : null,
                promotion: isCheckSale ? true : null,
                start_price: priceValues.startPrice ? priceValues.startPrice : null,
                end_price: priceValues.endPrice ? priceValues.endPrice : null
            };
            const newInitSearchValues = removeEmptyValuesInObject(initSearchValues);
            navigate({
                pathname: `/products/${params.categoryId}`,
                search: qs.stringify({ ...newInitSearchValues }),
            });
        } catch (e) {
            toast({
                severity: "warning",
                message: "Không có kết quả!",
            });
        }
    };
    const handleDelte = () => {
        navigate({
            pathname: `/products/${params.categoryId}`,

        });
    }

    return (
        <Box>
            <Typography variant="h6">Lọc sản phẩm</Typography>

            {/* filter manu */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Nhà cung cấp</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <FormGroup>
                        {listManu.length > 0 && listManu.map((item, index) => {
                            return (
                                <FormControlLabel key={index} control={<Checkbox checked={manuValue === item.id ? isCheckManu : false}
                                    onChange={(e) => handleChangeCheckedManu(e, item)}
                                    inputProps={{ 'aria-label': 'controlled' }} />} label={item.name} />
                            )
                        })}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

            {/* filter price */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Giá</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <Box sx={{ width: 'interhit', display: "flex", gap: "3px", alignItems: "center" }}>
                        <TextField onChange={handleChangePrice} name="startPrice" id="outlined-basic" size="small" type="number" label="Từ" variant="outlined" />
                        <Typography sx={{
                            height: "1px",
                            width: "10px",
                            background: "#bdbdbd",
                            margin: "0 0.625rem",
                        }}>  </Typography>
                        <TextField onChange={handleChangePrice} name="endPrice" id="outlined-basic" size="small" type="number" label="Đến" variant="outlined" />
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* filter sale */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Khuyến mại</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            onChange={handleChangeCheckedSale}
                            inputProps={{ 'aria-label': 'controlled' }} />} label="Đang giảm giá" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

            {/* Lọc */}
            <Box sx={{ m: "2rem 0" }}>
                <Button variant='outlined' fullWidth onClick={handleFilter}>Lọc</Button>
            </Box>
            {/* Xóa */}
            <Box sx={{ m: "1rem 0" }}>
                <Button variant='outlined' fullWidth onClick={handleDelte}>Xóa Tất Cả</Button>
            </Box>
        </Box>
    );
};

export default Filter;