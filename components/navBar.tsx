import Link from "next/link"

const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
]

const NavBar = () => {
    return (
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xl font-bold">NavItems</div>
          <ul className="flex space-x-4">
            {navItems.map((data, index) => (
                <li><Link href={data.href} className="hover:text-neutral-100">{data.name}</Link></li>
            ))}
          </ul>
        </nav>
    )
}

export default NavBar;
