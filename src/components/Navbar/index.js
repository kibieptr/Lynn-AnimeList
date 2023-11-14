import Link from "next/link";
import InputSearch from "./InputSearch";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="bg-color-oceandark">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-3 p-4">
                <Link href="/" className="font-bold text-white text-2xl text-color-primary"> Lynn Anime List
                    {/* <div className="flex items-center">
                        <Image
                            src="/favicon.ico"
                            alt="Lynn Anime Logo"
                            width={40}
                            height={40}
                        />
                        <span className="font-bold text-2xl text-color-primary">Lynn Anime</span>
                    </div> */}
                </Link>
                <InputSearch />
            </div>
        </header>
    );
}

export default Navbar
