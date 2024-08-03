import NavBarTheme from "@/components/Navbar/navbar-theme";
import NavBarTitle from "@/components/Navbar/navbar-title";

interface NavBarProps {
    theme: string;
    toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme }) => {
    return (
        <>
            <header className="sticky top-0 z-40">
                <div className="navbar bg-base-100 justify-around">
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
