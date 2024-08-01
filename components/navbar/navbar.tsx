import NavBarAuthentication from "@/components/navbar/navbar-authentication";
import NavBarLinks from "@/components/navbar/navbar-links";
import NavBarTheme from "./navbar-theme";
import NavBarTitle from "@/components/navbar/navbar-title";

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
                    <div>
                        <NavBarTheme />
                        <NavBarAuthentication />
                    </div>
                </div>
            </header>
        </>
    );
}
