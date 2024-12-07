import Nav from './_components/nav/Navbar.jsx'
import Herosection from './_components/herosection/Herosection.jsx'

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/homeImages/28.png')`,
        }}
        className=" h-[95vh] sm:h-screen  relative gradient-background    w-full bg-cover bg-no-repeat bg-center"
      >
        {/* <div
         
          className="absolute gradient-background bg-cover  z-10 h-[50vh] w-full  "
        ></div> */}
        <div className="">
          <Nav />
          <Herosection />
        </div>
        <div className=" hidden sm:block absolute gradient-background h-[270px] w-full bottom-0 left-0 "></div>
      </div>
    </div>
  );
}
