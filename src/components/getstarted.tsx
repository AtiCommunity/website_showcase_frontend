import Link from "next/link";

import { nabla } from "@/src/styles/fonts";

const GetStarted = () => {
    return (
        <>
            <div className="max-w-md mx-auto content-center text-center">
                <h1 className={`${nabla.className} text-7xl font-bold`}>
                    Hello there
                </h1>
                <p className="py-6">
                    This website is a project showcase. Here is exposed every
                    funny projects I&apos;ve made.
                </p>
                <Link className="btn btn-primary" href="/showcase">
                    Get Started
                </Link>
            </div>
        </>
    );
};

export default GetStarted;
