import Butt from "@/components/Butt";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-[92px] bg-[#043873] flex justify-around items-center [@media(max-width:535px)]:justify-between">
        <div>
          <Image
            src={"/picture/Logo.png"}
            alt={"Logo"}
            width={130}
            height={130}
            className="[@media(max-width:535px)]:w-[70px]"
          />
        </div>

        <div className="w-[33%] [@media(max-width:920px)]:w-[50%] ">
          <ul className="font-medium text-white flex justify-around [@media(max-width:535px)]:text-xs [@media(max-width:535px)]:gap-2 [@media(max-width:535px)]:-ml-6 ">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Solutions</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div className=" w-[12%] text-center [@media(max-width:535px)]:w-[12%]">
          <button className="bg-[#FFE492] w-[75%] h-[60px] rounded-md [@media(max-width:535px)]:h-[30px] [@media(max-width:535px)]:text-xs">
            Login
          </button>
        </div>
      </div>

      <div className="w-full h-[609px] bg-[#043873] px-[119px] flex gap-3 items-center [@media(max-width:1025px)]:px-12 [@media(max-width:1025px)]:h-[520px] [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:px-3 [@media(max-width:535px)]:items-start [@media(max-width:535px)]:h-[750px]">
        <div className="w-[45%] h-[361px]  [@media(max-width:535px)]:w-full">
          <h1 className="text-white font-bold text-5xl [@media(max-width:650px)]:text-4xl [@media(max-width:535px)]:pt-9">
            Get More Done with whitepace
          </h1>
          <h1 className="font-normal text-[13px] text-white py-16 [@media(max-width:1025px)]:py-10 [@media(max-width:650px)]:py-5 ">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </h1>
          <Butt
            name="Try Whitepace free"
            ty="w-[219px] h-16 mt-6 [@media(max-width:580px)]:w-[190px] "
          />
        </div>

        <div className="w-[55%] h-[449px] bg-[#C4DEFD] [@media(max-width:1025px)]:h-[400px] [@media(max-width:535px)]:w-[100%] [@media(max-width:535px)]:-mt-12">
          {" "}
        </div>
      </div>

      <div className="w-full h-[1350px] [@media(max-width:1025px)]:h-[1020px] [@media(max-width:535px)]:h-[1570px]">
        <div className="w-full h-[609px]  px-[119px] my-[40px] flex gap-3 items-center [@media(max-width:1025px)]:px-12 [@media(max-width:1025px)]:h-[520px] [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:px-4 [@media(max-width:535px)]:h-[750px]">
          <div className="w-[45%] h-[361px] [@media(max-width:535px)]:w-full">
            <h1 className=" font-bold text-5xl md:text-4xl">
              Project Managemente
            </h1>
            <h1 className="font-normal text-[13px]  py-16 [@media(max-width:1025px)]:py-10 [@media(max-width:535px)]:py-5">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </h1>
            <Butt name="Get Started" ty="w-[180px] h-16 mt-6" />
          </div>

          <div className="w-[55%] h-[449px]  bg-[#C4DEFD] [@media(max-width:1025px)]:h-[400px] [@media(max-width:535px)]:w-full [@media(max-width:535px)]:-mt-12"></div>
        </div>

        <div className="w-full h-[609px]  px-[119px] my-[40px] flex gap-3 items-center [@media(max-width:1025px)]:px-12 [@media(max-width:1025px)]:h-[520px] [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:px-4">
          <div className="w-50% h-[609px] [@media(max-width:1025px)]:h-[600px] [@media(max-width:535px)]:-mt-20">
            <Image
              src={"/picture/Work Together Image.png"}
              alt="iamge"
              height={400}
              width={600}
              className="mt-9 [@media(max-width:1025px)]:w-[90%] [@media(max-width:840px)]:mt-24 "
            />
          </div>

          <div className="w-[50%] pl-5 [@media(max-width:535px)]:w-full [@media(max-width:535px)]:pl-0 [@media(max-width:535px)]:mt-9">
            <h1 className="font-bold text-6xl ">Work together</h1>
            <h1 className="font-normal text-xs py-14">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </h1>
            <Butt name="Try it now" ty="w-[150px] h-14" />
          </div>
        </div>
      </div>

      <div className="w-full h-[609px] bg-[#043873]   px-[119px] flex gap-3 items-center [@media(max-width:1025px)]:px-12 [@media(max-width:1025px)]:h-[520px] [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:h-[729px] [@media(max-width:535px)]:px-4">
        <div className="w-[45%] h-[361px] [@media(max-width:535px)]:w-full">
          <h1 className="text-white font-bold text-5xl [@media(max-width:535px)]:pt-7">Use as Extension</h1>
          <h1 className="font-normal text-[13px] text-white py-16 [@media(max-width:1025px)]:py-12 [@media(max-width:535px)]:py-7">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </h1>
          <Butt
            name="Lets Go"
            ty="w-[219px] h-16 mt-6 [@media(max-width:580px)]:w-[190px] [@media(max-width:535px)]:mt-2 "
          />
        </div>

        <div className="w-[55%] h-[449px]  bg-[#C4DEFD] [@media(max-width:1025px)]:h-[400px] [@media(max-width:535px)]:-mt-12 [@media(max-width:535px)]:w-full"></div>
      </div>

      <div className="w-full h-[609px] px-[119px] flex gap-9 items-center [@media(max-width:1025px)]:h-[490px] [@media(max-width:1025px)]:px-12 [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:h-[670px] [@media(max-width:535px)]:px-4">
        <div className="w-[55%] h-[449px]  bg-[#C4DEFD] [@media(max-width:1025px)]:h-[350px] [@media(max-width:535px)]:w-full [@media(max-width:535px)]:mt-8"></div>

        <div className="w-[45%] h-[361px] [@media(max-width:1025px)]:h-[350px] [@media(max-width:535px)]:w-full">
          <h1 className="font-bold text-5xl ">Customise it to your needs</h1>
          <h1 className="font-normal text-[13px] py-16 [@media(max-width:1025px)]:py-10 [@media(max-width:840px)]:py-2">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </h1>
          <Butt name="Lets Go" ty="w-[219px] h-16 mt-6" />
        </div>
      </div>

      <div className="w-full h-[410px] bg-[#043873] justify-center  flex gap-3 items-center [@media(max-width:535px)]:h-[470px]">
        <div className="w-[75%] h-[301px]  text-center px-[113px] [@media(max-width:800px)]:px-12 [@media(max-width:535px)]:w-full">
          <h1 className="text-white font-bold text-5xl [@media(max-width:840px)]:text-4xl">
            Your work, everywhere you are
          </h1>
          <h1 className="font-normal text-[13px] text-white py-8 [@media(max-width:939px)]:py-1 [@media(max-width:840px)]:mt-9">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </h1>
          <Butt
            name="Try Taskey"
            ty="w-[219px] h-16 mt-9 [@media(max-width:580px)]:h-12 [@media(max-width:580px)]:w-[190px]"
          />
        </div>
      </div>

      <div className="w-full  h-[410px]  items-center py-20 [@media(max-width:535px)]:h-[500px] [@media(max-width:535px)]:py-9">
        <h1 className="font-bold text-7xl text-center  [@media(max-width:1025px)]:text-6xl">
          Our sponsors
        </h1>
        <div className="w-[79%] flex justify-between border- border-black my-[70px] mx-[120px] [@media(max-width:1025px)]:mx-12 [@media(max-width:1025px)]:w-[90%] [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:gap-9 ">
          <Image
            src={"/picture/Apple.png"}
            alt="apple logo"
            height={60}
            width={30}
          />
          <Image
            src={"/picture/microsoft 1.png"}
            alt="apple logo"
            height={150}
            width={150}
          />
          <Image
            src={"/picture/Group.png"}
            alt="apple logo"
            height={150}
            width={150}
          />
          <Image
            src={"/picture/Group 246.png"}
            alt="apple logo"
            height={150}
            width={150}
          />
        </div>
      </div>

      <div className="w-full h-[320px] bg-[#043873] border-2 border-[#043873] [@media(max-width:535px)]:h-[610px]">
        <div className="w-full h-[170px]  mt-16  flex px-28 items-center [@media(max-width:840px)]:px-12 [@media(max-width:535px)]:flex-col [@media(max-width:535px)]:h-[450px] ">
          <div className="w-[30%] h-[169px]  text-white [@media(max-width:535px)]:w-full">
            <Image
              src={"/picture/Logo.png"}
              alt={"Logo"}
              width={130}
              height={130}
              className="[@media(max-width:650px)]:w-24"
            />
            <h1 className="font-normal text-lg pt-4  pr-8 [@media(max-width:1025px)]:text-base [@media(max-width:903px)]:text-xs">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </h1>
          </div>

          <div className="w-[30%] h-[169px]  text-white [@media(max-width:535px)]:w-full [@media(max-width:535px)]:-mt-14">
            <h1 className="font-bold text-lg [@media(max-width:650px)]:text-sm">
              Product
            </h1>
            <ul className="py-3 [@media(max-width:650px)]:text-xs">
              <li>Overview</li>
              <li className="py-2">Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          <div className="w-[30%] h-[169px]  text-white [@media(max-width:535px)]:w-full [@media(max-width:535px)]:-mt-10">
            <h1 className="font-bold text-lg [@media(max-width:650px)]:text-sm">
              Resources
            </h1>
            <ul className="py-3 [@media(max-width:650px)]:text-xs">
              <li>Blog</li>
              <li className="py-2">Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="w-[30%] h-[169px]  text-white [@media(max-width:535px)]:w-full [@media(max-width:535px)]:-mt-10">
            <h1 className="font-bold text-lg [@media(max-width:650px)]:text-sm">
              Company
            </h1>
            <ul className="py-3 [@media(max-width:650px)]:text-xs">
              <li>About us</li>
              <li className="py-2">Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
        <hr className="mt-9 w-[95%] mx-8 [@media(max-width:580px)]:mx-2" />
        <div className="flex justify-center pt-4 ">
          <Image
            src={"/picture/Tems and condition.png"}
            alt={"Logo"}
            width={130}
            height={130}
          />
        </div>
      </div>
    </>
  );
}
