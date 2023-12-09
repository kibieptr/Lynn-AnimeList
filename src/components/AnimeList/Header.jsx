import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ?
        <Link href={linkHref} className="text-sm text-color-primary bg-color-accentdark py-2 px-2 rounded-lg">
          {linkTitle}</Link>
        : null
      }

    </div>
  )
}

export default Header;