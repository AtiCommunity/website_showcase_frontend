import NavBarAuthentication from "@/components/Navbar/navbar-authentication";
import NavBarLinks from "@/components/Navbar/navbar-links";
import NavBarTheme from "@/components/Navbar/navbar-theme";
import NavBarTitle from "@/components/Navbar/navbar-title";

export default function NavBar() {
    return (
        <>
            <header>
                <div className="navbar bg-base-100 justify-around">
                    <div>
                        <NavBarTitle />
                    </div>
                    <div>
                        <NavBarLinks />
                    </div>
                    <div className="flex gap-5 justify-around">
                        <NavBarTheme />
                        <NavBarAuthentication />
                    </div>
                </div>
            </header>
        </>
    );
}
