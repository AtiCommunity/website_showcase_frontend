import Link from "next/link";

import { nabla } from "@/styles/fonts";

import ProfileCard from "@/components/ProfileCard/profilecard";

const Home = () => {
    return (
        <>
            <div className="min-h-screen max-w-screen content-center">
                <div className="flex w-full flex-col lg:flex-row py-10">
                    <div className="container mx-auto max-w-md text-center content-center">
                        <h1 className={`${nabla.className} text-7xl font-bold`}>
                            Hello there
                        </h1>
                        <p className="py-6">
                            This website is a project showcase. Here is exposed
                            every funny projects I&apos;ve made.
                        </p>
                        <Link className="btn btn-primary" href="/showcase">
                            Get Started
                        </Link>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <ProfileCard />
                </div>
            </div>
        </>
    );
};

export default Home;
