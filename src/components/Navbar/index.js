import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
    <header className="bg-color-oceandark">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-3 p-4">
            <Link href="/" className="font-bold text-white text-2xl text-color-primary">Lynn Anime</Link>
            <InputSearch />
        </div>
    </header>
    )
}

export default Navbar;
