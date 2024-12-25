import GetStarted from "@/src/components/getstarted";
import ProfileCard from "@/src/components/profilecard";

const Home = () => {
    return (
        <>
            <div className="min-h-screen max-w-screen bg-base-200 content-center">
                <div className="flex flex-col lg:flex-row">
                    <GetStarted />
                    <div className="divider lg:divider-horizontal"></div>
                    <ProfileCard />
                </div>
            </div>
        </>
    );
};

export default Home;
