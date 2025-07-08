import Blog from "./blog";
import OtherSideBar from "./OtherSideBar";
import Shop from "./Shop";
import Sidebar from "./Sidebar";

export default function Home() {

  

  return (
    <section className="h-full bg-cyan-950 flex flex-row ">
      <Sidebar></Sidebar>
      {/* <Blog></Blog> */}
      <Shop></Shop>
      <OtherSideBar></OtherSideBar>
    </section>
  );
}
