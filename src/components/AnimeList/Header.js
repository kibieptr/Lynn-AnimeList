import Link from "next/link"

const Header = ({title, linkHref, linkTitle})  => {
    return (
        <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <Link href={linkHref} className="text-sm bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-1 rounded">{linkTitle}</Link>
      </div>
    )
}

export default Header;