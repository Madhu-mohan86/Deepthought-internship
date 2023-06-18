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
      <aside className={`h-[742px] ${open ? "w-20" : "w-36"} shadow-md rounded-e-md overflow-hidden`}>
        <div className="bg-black h-[50px] flex justify-end pr-5 place-items-center">
          <FontAwesomeIcon icon={icon({ name: "arrow-alt-circle-right" })} style={{ color: "#ffffff" }} size="xl" onClick={() => setOpen(!open)} />
        </div>
      </aside>
    </div>
  );
};

export default Home;
