import "../style/index.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <div style={{ minHeight: "calc(100% - 118px)" }}>
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}
