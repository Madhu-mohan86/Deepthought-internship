import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <nav className="h-[90px] w-full bg-[#F0F0F0] shadow-md flex justify-between">
        <div className="flex flex-row place-items-center ml-16">
          <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" />
        </div>
        <div className="flex flex-row place-items-center mr-16">
          <div className="rounded-full mr-5 bg-blue-500 h-fit px-2 py-1">
            <FontAwesomeIcon icon={icon({ name: 'house' })} style={{ color: "#ffffff" }} />
          </div>
          <div className="rounded-full mr-5 bg-blue-500 h-fit px-2 py-1">
            <FontAwesomeIcon icon={icon({ name: 'screwdriver-wrench' })} style={{ color: "#ffffff" }} />
          </div>
          <div className="rounded-full mr-5 bg-blue-500 h-fit px-2 py-1">
            <FontAwesomeIcon icon={icon({ name: 'bell' })} style={{ color: "#ffffff" }} />
          </div>
          <div className="rounded-full mr-5 h-fit w-fit overflow-hidden px-2 py-1">
            <img className="rounded-full h-8 w-8" src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1687737600&Signature=GriNUAjP-Bmk2wsrSsPicWWzihWxB3pqK3iLL-fUvPzQXYOfklFEbEMIVd5uaIjzLLEXuwfCbFZmxt05HuAPv24UJg3ovWvDPqVoN4iuwnLYxv9P1CwnaacFDbd9o9WbSBaLSWQg~zvgTKCIR~nCi3NTUN0zrPAPeFuSklzKuaynXz2BnGd-0qsnrxb9TSf5w1P9aDgZaxQFFKJ6V0pngMgFlw7yq78Rbw3nZRwDxPSauYdMBxhQywwWzw4yE54HZvVEqgcWLsFdJIRwc5EWBouQLdkIYS4F6BDcwTlI-c6Z1r8x0l1OmfA1MxPsAC8gm6HXsmL7z2FoHAjxD33BXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className="rounded-full mr-5 bg-transparent h-fit">
            <FontAwesomeIcon icon={icon({ name: "ellipsis-vertical" })} style={{ color: "#3683f0" }} size="xl" />
          </div>
        </div>
      </nav>
      <main className="ml-20  h-full">
      <div className="flex justify-between">
      <p className="text-2xl ml-10 mt-5 text-[#0029FF] font-bold">T</p>
      <button className="bg-[#0029FF] text-white rounded-lg w-fit px-5 py-1 mt-5 font-semibold mr-48">
      Submit task
      </button>
      </div>
      <div className="m-10 mr-20 rounded-lg w-[81%] h-[135px] bg-[#E9ECEF]">
        j
      </div>
      <div className="grid grid-rows-2 grid-cols-2  gap-y-20">
      {/*container*/}
      <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] ml-10">
      {/*heading */}
      <div className="h-[50px] w-auto bg-black pt-3">
      <p className="text-center font-sans font-semibold text-white"></p>
      </div>
      {/*description*/}
          <li className="list-none ml-5 my-5"><b>Description:</b> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</li>
       {/*video */} 
       <iframe className="h-[291px] w-[480px]" src="" title="/">
       </iframe>           
      </div>
      {/*container*/}
      <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD]  relative right-14">
      {/*heading */}
      <div className="h-[50px] w-auto bg-black pt-3">
      <p className="text-center font-sans font-semibold text-white"></p>
      </div>
      {/*description*/}
          <li className="list-none ml-5 my-5"><b>Description:</b> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</li>
               
      </div>
      {/*container*/}
      <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] ml-10">
      {/*heading */}
      <div className="h-[50px] w-auto bg-black pt-3">
      <p className="text-center font-sans font-semibold text-white"></p>
      </div>
      {/*description*/}
          <li className="list-none ml-5 my-5"><b>Description:</b> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</li>
    
             
      </div>
      {/*container*/}
      <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] relative right-14">
      {/*heading */}
      <div className="h-[50px] w-auto bg-black pt-3">
      <p className="text-center font-sans font-semibold text-white"></p>
      </div>
      {/*description*/}
          <li className="list-none ml-5 my-5"><b>Description:</b> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</li>
       
                
      </div>
      </div>
      </main>
      <aside className={`h-[742px] ${open ? "w-20" : "w-[22rem]"} shadow-md rounded-e-md overflow-hidden absolute top-[90px]`}>
        <div className="bg-black h-[50px] flex justify-end pr-5 place-items-center">
          <button><FontAwesomeIcon icon={icon({ name: "arrow-alt-circle-right" })} style={{ color: "#ffffff" }} size="xl" onClick={() => setOpen(!open)} />
          </button>
        </div>
        {open || (<div>
         <li className="list-disc ml-7 mt-5 font-semibold font-poppins ">Explore the world of management</li>
         <li className="list-disc ml-9 mt-4 font-poppins "> Technical Project Management</li>
         <li className="list-disc ml-9 font-poppins">  Threadbuild </li>
         <li className="list-disc ml-9 font-poppins">  Structure your pointers</li>
         <li className="list-disc ml-9 font-poppins">   4SA Method </li>
       </div>
        )}
      </aside>
    </div>
  );
};

export default Home;
