import HeroPoster from "@/assets/hero-poster.png";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
// Components

const Hero = () => {
  return (
    <section className="bg-zinc-900">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h1 className="text-primary text-white font-sans font-extrabold text-7xl mt-4">
              Discover Unique and{" "}
              <span className="text-amber-500">incredible</span> rare digital
              art
            </h1>
            <p className="mt-20 text-xl text-white">
              NFTPro is a website that created for the person who love art.
              Where people can buy a piece of art and it is completely theirs.
              This system is kinda similar to crypto
            </p>
            <div className="flex space-x-9">
              {/* <Button/> */}
              <div className="mt-12 px-4 py-1 bg-amber-500 hover:bg-white duration-500 rounded-full">
                <Button text={"Explore"} />
              </div>

              <div className="mt-12 bg-black border-solid border-2 border-amber-500  text-amber-500 hover:bg-amber-500 hover:text-black rounded-full">
                <Button text={"Connect Wallet"} />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
