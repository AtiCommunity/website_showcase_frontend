import { akronim } from "@/styles/fonts";
import Link from "next/link";

const NavBarTitle = () => {
    return (
        <>
            <Link
                className={`${akronim.className} btn btn-ghost text-4xl font-normal`}
                href="/"
            >
                AtiCommunity
            </Link>
        </>
    );
};

export default NavBarTitle;
