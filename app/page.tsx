import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Content from "@/components/Content/content";
import Maintenance from "@/components/Maintenance/maintenance";

export default function Home() {
    return (
        <>
            <Maintenance />
            <NavBar />
            <Content />
            <Footer />
        </>
    );
}
