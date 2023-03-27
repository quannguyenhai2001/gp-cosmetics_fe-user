import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from 'redux/slices/userSlice';
import { RouterWrapper } from "routes/RouterWrapper";
import './App.css';

const theme = createTheme({
  typography: {
    fontSize: 18,
  },
});
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(getUser())
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RouterWrapper />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
