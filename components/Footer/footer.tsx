import { GiCrownedSkull } from "react-icons/gi";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-base-100 p-10">
                <aside>
                    <GiCrownedSkull className="text-primary" fontSize={50} />
                    <p>AtiCommunity</p>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
