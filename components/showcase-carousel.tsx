import Link from "next/link";

import { FaDiscord, FaRegFaceSmileWink } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { SiMinecraft } from "react-icons/si";

const ShowcaseCarousel = () => {
    return (
        <>
            <div className="carousel max-w-full carousel-center space-x-4 px-10 rounded-box">
                <div className="carousel-item">
                    <div className="card glass w-80 max-w-md bg-blue-900 text-amber-400">
                        <figure className="bg-base-100 min-h-96">
                            <MdOutlineWeb fontSize={100} />
                        </figure>
                        <div className="card-body justify-around">
                            <h2 className="card-title">
                                <p>Showcase website (frontend)</p>
                                <div className="badge badge-error">NEW</div>
                            </h2>
                            <p>
                                Frontend design website used to display my
                                projects.
                            </p>
                            <div className="card-actions justify-center">
                                <Link
                                    href="https://github.com/AtiCommunity/showcase_frontend"
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Github repository
                                </Link>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    JavaScript
                                </div>
                                <div className="badge badge-outline">
                                    Next.js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card glass w-80 max-w-md bg-blue-900 text-amber-400">
                        <figure className="bg-base-100 min-h-96">
                            <MdOutlineWeb fontSize={100} />
                        </figure>
                        <div className="card-body justify-around">
                            <h2 className="card-title">
                                <p>Showcase website (backend)</p>
                                <div className="badge badge-error">NEW</div>
                            </h2>
                            <p>
                                Backend API where is stored all the data for the
                                backend.
                            </p>
                            <div className="card-actions justify-center">
                                <Link
                                    href="https://github.com/AtiCommunity/showcase_backend"
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Github repository
                                </Link>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    JavaScript
                                </div>
                                <div className="badge badge-outline">
                                    Express.js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card glass w-80 max-w-md bg-blue-900 text-amber-400">
                        <figure className="bg-base-100 min-h-96">
                            <FaDiscord fontSize={100} />
                        </figure>
                        <div className="card-body justify-around">
                            <h2 className="card-title">
                                <p>TempChannels Discord BOT</p>
                                <div className="badge badge-error">NEW</div>
                            </h2>
                            <p>
                                The aim of this BOT is to create temporary
                                channels for user.
                            </p>
                            <div className="card-actions justify-center">
                                <Link
                                    href="https://github.com/AtiCommunity/tempchannels"
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Github repository
                                </Link>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    JavaScript
                                </div>
                                <div className="badge badge-outline">
                                    Discord.js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card glass w-80 max-w-md bg-blue-900 text-amber-400">
                        <figure className="bg-base-100 min-h-96">
                            <SiMinecraft fontSize={200} />
                        </figure>
                        <div className="card-body justify-around">
                            <h2 className="card-title">
                                <p>Minecraft network</p>
                                <div className="badge badge-error">NEW</div>
                            </h2>
                            <p>
                                The objective of this project to host multiple
                                servers like a lobby, survival and creative
                                servers.
                            </p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-error">
                                    Private repository
                                </button>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Java</div>
                                <div className="badge badge-outline">
                                    Velocity
                                </div>
                                <div className="badge badge-outline">Paper</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowcaseCarousel;
