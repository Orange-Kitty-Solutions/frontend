import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xl font-bold">NavItems</div>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-neutral-100">Home</Link></li>
            <li><Link href="#" className="hover:text-neutral-100">About Us</Link></li>
            <li><Link href="#" className="hover:text-neutral-100">Projects</Link></li>
            <li><Link href="#" className="hover:text-neutral-100">Services</Link></li>
            <li><Link href="#" className="hover:text-neutral-100">Contact Us</Link></li>
          </ul>
        </nav>
    )
}

export default NavBar;