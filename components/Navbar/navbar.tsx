import NavBarTheme from "@/components/Navbar/navbar-theme";
import NavBarTitle from "@/components/Navbar/navbar-title";

const NavBar = () => {
    return (
        <>
            <header className="sticky top-0 z-40">
                <div className="navbar bg-base-100 justify-around">
                    <div>
                        <NavBarTitle />
                    </div>
                    <div>
                        <NavBarTheme />
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
