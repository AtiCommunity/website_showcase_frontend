import NavBarTheme from "@/components/navbar-theme";
import NavBarTitle from "@/components/navbar-title";

const NavBar = () => {
    return (
        <>
            <header className="navbar z-40 top-0 sticky bg-base-100 justify-around">
                <div>
                    <NavBarTitle />
                </div>
                <div>
                    <NavBarTheme />
                </div>
            </header>
        </>
    );
};

export default NavBar;
