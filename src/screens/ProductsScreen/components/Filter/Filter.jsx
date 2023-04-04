import { Box, Button, TextField } from '@mui/material';
import React, { memo } from 'react';
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

import { useNavigate, useParams } from 'react-router-dom';
import { deleteListProducts, fetchAsyncGetProducts } from 'redux/slices/productSlice';

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

    //set page = 1
    const handleSetPage = () => {
        props.handleSetPage();
    }
    //filter price
    const [isCheckChangePrice, setIsCheckChangePrice] = React.useState(false);
    const handleChangePrice = (event, newValue) => {
        setIsCheckChangePrice(true);
        setArray1({ ...array1, price: newValue, page: '' })

    };

    //filter manu
    const [checkedManu, setCheckedManu] = React.useState(false);
    const [valueIndex, setValueIndex] = React.useState('');
    const handleChangeCheckedManu = (event) => {
        setCheckedManu(event.target.checked)
        if (!event.target.checked) {
            setArray1({ ...array1, manu_Id: '' })

        }
    }
    const handleClickCheckBox = (arg) => {
        setValueIndex(arg.index);
        setArray1({ ...array1, manu_Id: arg.item.id })
        props.handleSetPage();

    }

    //filter sale
    const handleChangeCheckedSale = (event) => {
        // setCheckedSale(event.target.checked);
        setArray1({ ...array1, promotion: event.target.checked })
    };

    // array tham so
    const [array1, setArray1] = React.useState({ cate_Id: params.categoryId, manu_Id: '', price: [0, 300], promotion: '', limit: 20, page: '' });

    //call api
    React.useEffect(() => {
        // console.log({ array: array1 })
        let newArray = {};

        for (let key in array1) {
            if (array1[key] && key !== 'price') {
                newArray[key] = array1[key];
            }
            else if (key === 'price' && array1['price'].join('') !== '') {
                newArray[key] = array1[key];
            }
        }

        if (props.page !== 0) {
            newArray.page = props.page;
        }

        dispatch(fetchAsyncGetProducts(
            {
                cate_Id: params.categoryId,
                use_page: 1,
                ...newArray
            }))

        //params string
        let stringParams = '';
        for (let key in newArray) {

            if (key !== 'price' & key !== 'limit' & key !== 'cate_Id') {
                stringParams += `${key}=${newArray[key]}&`;
            }
        }
        if (!isCheckChangePrice) {

            const editedTextNoPrice = stringParams.slice(0, -1)
            navigate('/products/' + params.categoryId + `?${editedTextNoPrice}`)
        }
        else {
            stringParams += `price[]=${newArray.price[0]}&price[]=${newArray.price[1]}&`;
            const editedTextHavePrice = stringParams.slice(0, -1)
            navigate('/products/' + params.categoryId + `?${editedTextHavePrice}`)
        }
        return () => {
            dispatch(deleteListProducts());
            // console.log("unmount filter")
        }
    }, [array1, props.page, isCheckChangePrice, dispatch, params.categoryId, navigate]);

    //reset filter
    React.useEffect(() => {
        setArray1({ cate_Id: params.categoryId, manu_Id: '', price: [0, 300], promotion: '', limit: 20 });
        setValueIndex('');
        setCheckedManu(false);
        navigate('/products/' + params.categoryId)
    }, [params.categoryId, navigate]);

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
                                <FormControlLabel key={index} control={<Checkbox checked={valueIndex === index ? checkedManu : false}
                                    onChange={handleChangeCheckedManu}
                                    onClick={() => { handleClickCheckBox({ index, item }) }}
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
                    <Box sx={{ width: 'interhit' }}>
                        <Box sx={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Slider
                                sx={{ width: '80%' }}
                                max={300}
                                value={array1.price}
                                onChange={handleChangePrice}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                onClick={handleSetPage}
                            />

                        </Box>
                        <Typography sx={{ padding: '0 1.8rem' }}>Giá từ ${array1.price[0]} tới ${array1.price[1]}</Typography>
                        {/* <Button sx={{ margin: '2rem 0' }} fullWidth variant="contained" >Apply</Button> */}
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
                        <FormControlLabel control={<Checkbox checked={setArray1.promotion}
                            onChange={handleChangeCheckedSale}
                            onClick={handleSetPage}
                            inputProps={{ 'aria-label': 'controlled' }} />} label="Sale" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};

export default memo(Filter);