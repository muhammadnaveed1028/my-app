import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-10 bg-orange-400 text-black-600 h-15 p-4 font-sans ">
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/contact-us">contact-us</Link>
        </li>
        <li>
          <Link href="/jobs">jobs</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
