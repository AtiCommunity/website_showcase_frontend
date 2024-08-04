import Image from "next/image";
import profilePic from "@/public/profile.jpg";
import Link from "next/link";

const ProfileCard = () => {
    return (
        <>
            <div className="bg-blue-900 text-amber-400 mx-auto max-w-md card glass w-72">
                <figure>
                    <Image src={profilePic} alt="profile" />
                </figure>
                <div className="card-body px-6 py-2">
                    <h2 className="card-title">Antoine (Atineon) ROBIN</h2>
                    <p>
                        IT Engineer{" "}
                        <span className="badge badge-error">Apprentice</span>
                    </p>
                    <div className="card-actions justify-center">
                        <Link
                            className="btn btn-secondary"
                            href="https://antoinerobin.fr"
                            target="_blank"
                        >
                            More info
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
