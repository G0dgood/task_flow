import Image from "next/image";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import profilex from "../public/Profilex.svg"
import profile_1 from "../public/Avatar_1.svg"
import profile_2 from "../public/Avatar (1).svg"
import sort from "../public/sort-amount-down 1.svg"
import plusx from "../public/plus 6.svg"
import Boards from "@/pages/Boards";
import BottomNavigation from "@/components/BottomNavigation";
import CreateTask from "@/components/CreateTask";


export default function Home() {



  return (
    <div id="page-wrapper" >
      <Header />
      <SideNav />
      <BottomNavigation />
      <main >
        <section className="profilex_second_header">
          <div className="profilex_second_header_sub">
            <Image src={profilex} alt='profilex' />
            <div className="profilex_second_header_sub2">
              <div className="profilex_second_header_text">ProjectX </div>
              <div className="linear_progress">
                <div className='progress_bar_bg'>
                  <div className="progress_bar"></div>
                </div>
                <span className="progress_bar_span">62% Complete</span>
              </div>
            </div>
          </div>
          <div className="img_profilex1_container_flex">
            <div className='profilex_timer_buttom_img'>
              <div className='img_profilex1'><Image src={profile_1} alt='file' /></div>
              <div className='img_profilex2'><Image src={profile_2} alt='file' /></div>
              <div className='img_pro_text'>+1</div>
            </div>
            <Image src={plusx} alt='plusx' />
          </div>
        </section>
        <section className="profilex_second_header2">
          <CreateTask />
          <div className="profilex_second_con_text_two">
            <div className="main_up_dot_container">
              <div className="up_dot_container">
                <div className="up_dot"></div>
                <span>All</span>
              </div>
              <span>Upcoming tasks</span>
              <span>Ongoing</span>
              <span>Done</span>
            </div>
            <div className="main_up_dot_container2">
              <p className="main_up_dot_container_p">Time</p>
              <Image src={sort} alt='sortdown' />
            </div>
          </div>
        </section>
        <section >

          <Boards />
        </section>
      </main>
    </div >
  );
}
