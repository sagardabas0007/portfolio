import Name from "@/Components/name/Name";
import Navbar from "@/Components/navbar/Navbar";
import Location from "@/Components/location/Location";
import Links from "@/Components/social-links/Links";
import About from "@/Components/about/About";
import Photo from "@/Components/my-photo/Photo";
import Connect from "@/Components/connect/Connect";
import Techstack from "@/Components/techstack/Techstack";
import Work from "@/Components/work/Work";


export default function Home() {
  return (
    <div className="bg-black h-screen p-5">
      <Navbar />
      <Name />
      <Location />
      <Links />
      <About />
      <Photo />
      <Connect />
      <Techstack />
      <Work/>
    </div>
  );
}
