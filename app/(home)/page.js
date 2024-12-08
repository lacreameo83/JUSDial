import Nav from './_components/nav/Navbar.jsx'
import Herosection from './_components/herosection/Herosection.jsx'
import FeaturedListing from './_components/featuredlisting/FeaturedListing.jsx';
export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/homeImages/28.png')`,
        }}
        className="min-h-[93vh] sm:min-h-[100vh]  px-[25px]  sm:px-[10px] xl:px-[48px]  z-20    relative gradient-background    w-full bg-cover  "
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
          className="absolute bottom-0 left-0 w-full bg-center  bg-cover h-[800px]   sm:h-[897px] bg-no-repeat   z-30 "
        ></div>
        <div className=" hidden  sm:block absolute gradient-background h-[700px] md:h-[1300px] z-30 xl:h-[370px] w-full bottom-0 left-0 "></div>
      </div>
      {/* listing */}
      <FeaturedListing />
    </div>
  );
}
