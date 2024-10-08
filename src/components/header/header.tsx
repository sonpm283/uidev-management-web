import Link from "next/link";

function Header() {
  console.log(">>> API_URL: ", process.env.NEXT_PUBLIC_API_ENDPOINT);

  return (
    <header className="h-14 bg-main px-5 text-center flex items-center text-white justify-between">
      <ul className="flex gap-5">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
      <ul className="flex gap-5">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
