
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetAllBills } from 'redux/slices/productSlice';
import { useState } from 'react';
import OrderTabs from './components/OrderTabs/OrderTabs';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const OrderScreen = () => {
    const classes = useStyles();
    const [value, setValue] = useState("all");
    const [bills, setBills] = useState([])
    const { id } = useSelector(state => state.user.userInfo)

    const dispatch = useDispatch();
    console.log(id)
    const handleChange = async (event, newValue) => {
        setValue(newValue);
        const res = await dispatch(fetchAsyncGetAllBills({ user_id: id, status: `${newValue}` })).unwrap();
        setBills(res.data)
    };
    React.useEffect(() => {
        (async () => {
            if (id) {
                const res = await dispatch(fetchAsyncGetAllBills({ user_id: id })).unwrap();
                setBills(res.data)
            }


        })()

    }, [dispatch, id]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} className={classes.rootTab} aria-label="basic tabs example">
                    <Tab label="Tất cả" value={"all"} {...a11yProps(0)} />
                    <Tab label="Xác nhận" value={"pending"} {...a11yProps(1)} />
                    <Tab label="Đang giao " value={"delivering"}  {...a11yProps(2)} />
                    <Tab label="Hoàn thành" value={"delivered"}  {...a11yProps(3)} />
                    <Tab label="Đã hủy" value={"cancelled"} {...a11yProps(4)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={"all"}>
                <OrderTabs bills={bills} />
            </TabPanel >
            <TabPanel value={value} index={"pending"}>
                <OrderTabs bills={bills} />
            </TabPanel >
            <TabPanel value={value} index={"delivering"}>
                <OrderTabs bills={bills} />
            </TabPanel>
            <TabPanel value={value} index={"delivered"}>
                <OrderTabs bills={bills} />
            </TabPanel>
            <TabPanel value={value} index={"cancelled"}>
                <OrderTabs bills={bills} />
            </TabPanel>
        </Box >
    );
};

export default OrderScreen;





