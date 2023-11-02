import Link from "next/link";
import Logo from "/public/logo.png";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky h-16 top-0 z-10 bg-black">
      <Wrapper>
        <div className="flex justify-between py-4 items-center ">
          {/* Logo */}
          <div>
            <Image src={Logo} alt="NFT logo" />
          </div>

          {/* Navigation Bar */}
          <ul className="flex space-x-8 text-white font-medium">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
          </ul>

          {/* Search Bar*/}
          {/* <div className="text-lg text-white">Search Bar</div> */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
