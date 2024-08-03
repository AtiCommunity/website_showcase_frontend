import NavBarLinks from "@/components/Navbar/navbar-links";
import NavBarTheme from "@/components/Navbar/navbar-theme";
import NavBarTitle from "@/components/Navbar/navbar-title";

interface NavBarProps {
    theme: string;
    toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme }) => {
    return (
        <>
            <header className="sticky top-0">
                <div className="navbar bg-base-100 justify-around">
                    <div className="lg:hidden">
                        <NavBarLinks />
                    </div>
                    <div>
                        <NavBarTitle />
                    </div>
                    <div>
                        <NavBarTheme theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
