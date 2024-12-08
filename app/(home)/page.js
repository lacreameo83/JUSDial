import Nav from './_components/nav/Navbar.jsx'
import Herosection from './_components/herosection/Herosection.jsx'

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/homeImages/28.png')`,
        }}
        className=" h-[96vh] md:h-screen z-20    relative gradient-background    w-full bg-cover  "
      >
        {/* <div
         
          className="absolute gradient-background bg-cover  z-10 h-[50vh] w-full  "
        ></div> */}
        <div className="relative z-50">
          <Nav />
          <Herosection />
        </div>
        <div
          style={{
            backgroundImage: `url('/homeImages/62.png')`,
          }}
          className="absolute bottom-0 left-0 w-full bg-center sm:bg-start bg-cover h-[800px]   sm:h-[950px] bg-no-repeat   z-30 "
        ></div>
        <div className="  absolute gradient-background h-[700px] md:h-[1300px] z-30 xl:h-[370px] w-full bottom-0 left-0 "></div>
      </div>
    </div>
  );
}
