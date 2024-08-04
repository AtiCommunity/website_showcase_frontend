import Link from "next/link";

import { akronim } from "@/styles/fonts";

const NavBarTitle = () => {
    return (
        <>
            <Link
                className={`${akronim.className} btn btn-ghost font-normal text-4xl hover:bg-transparent hover:text-primary`}
                href="/"
            >
                AtiCommunity
            </Link>
        </>
    );
};

export default NavBarTitle;
