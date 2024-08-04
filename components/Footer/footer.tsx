import { akronim, honk } from "@/styles/fonts";
import { GiCrownedSkull } from "react-icons/gi";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-base-100 p-10">
                <aside>
                    <button
                        className="btn btn-ghost hover:bg-transparent p-0"
                        onClick={() => {
                            const secret = document.getElementById(
                                "secret"
                            ) as HTMLDialogElement;
                            if (secret) {
                                const infiniteCloseButton =
                                    document.getElementById(
                                        "infinite-close-button"
                                    );
                                if (infiniteCloseButton) {
                                    infiniteCloseButton.style.display = "none";
                                }

                                const closeButton =
                                    document.getElementById("close-button");
                                if (closeButton) {
                                    closeButton.style.display = "block";
                                }

                                secret.showModal();
                            }
                        }}
                    >
                        <GiCrownedSkull
                            className="text-primary"
                            fontSize={50}
                        />
                    </button>
                    <dialog id="secret" className="modal">
                        <div className="modal-box">
                            <button
                                id="close-button"
                                className="btn btn-ghost btn-circle absolute right-2 top-2"
                                onClick={() => {
                                    const closeButton =
                                        document.getElementById("close-button");
                                    if (closeButton) {
                                        closeButton.style.display = "none";
                                    }

                                    const infiniteCloseButton =
                                        document.getElementById(
                                            "infinite-close-button"
                                        );
                                    if (infiniteCloseButton) {
                                        infiniteCloseButton.style.display =
                                            "block";
                                    }
                                }}
                            >
                                ✕
                            </button>
                            <button
                                id="infinite-close-button"
                                className="btn btn-ghost btn-circle absolute right-2 top-2 hidden"
                            >
                                <span className="loading loading-infinity loading-md"></span>
                            </button>
                            <h3 className={`${honk.className} text-8xl`}>
                                Oh no!
                            </h3>
                            <p className="py-4">
                                You&apos;ve found my secret! I&apos;m lost!
                                NOOOOOOoooooo...
                            </p>
                            <p>
                                But you will not leave now. Good luck to find
                                the close button!
                            </p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button></button>
                        </form>
                    </dialog>
                    <p className={`${akronim.className} font-normal text-2xl`}>
                        AtiCommunity
                    </p>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
