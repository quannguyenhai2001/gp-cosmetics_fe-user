import Footer from "components/Footer";
import Header from "components/Header/Header";

export default function DefaultLayout(props) {
    const { children } = props;

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}