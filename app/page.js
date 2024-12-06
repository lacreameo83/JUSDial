import Nav from '../app/(home)/nav/page.js'
import Herosection from '../app/(home)/herosection/page.js'

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/homeImages/herosectionbackgroundimage.png')`,
        }}
        className="h-[832px] pl-[25px] sm:px-[90px] w-full bg-cover bg-center"
      >
        <Nav  />
        <Herosection />
      </div>
    </div>
  );
}
