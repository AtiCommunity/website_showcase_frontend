import { akronim } from "@/styles/fonts";

export default function NavBarTitle() {
    return (
        <>
            <a
                className={`${akronim.className} btn btn-ghost text-4xl font-normal`}
            >
                AtiCommunity
            </a>
        </>
    );
}
