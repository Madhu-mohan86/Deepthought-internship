import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Homes = () => {
  const [open, setOpen] = useState(true);
  
  // JSON data
  const jsonData = {
    "_id": {
      "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure your pointers",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  };

  const { tasks,title} = jsonData;

  return (
    <div className="">
      {/* Rest of your code */}
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
       <p className="text-2xl ml-10 mt-5 text-[#0029FF] font-bold">{title}</p>
        <button className="bg-[#0029FF] text-white rounded-lg w-fit px-5 py-1 mt-5 font-semibold mr-48">
          Submit task
        </button>
      </div>
      
      {/* Content based on JSON data */}
      <div className="m-10 mr-20 py-7 rounded-lg w-[81%] h-[135px] bg-[#E9ECEF]">
        <p className="ml-10  text-black font-bold font-poppins ">{tasks[0]?.task_title}</p>
        <p className="ml-10 mt-2 text-black font-poppins ">{tasks[0]?.task_description}</p>
      </div>
    
      <div className="grid grid-rows-2 grid-cols-2 gap-y-20 mb-10">
        {tasks.map((task) => (
          <React.Fragment key={task.task_id}>
            <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] ml-10">
              <div className="h-[50px] w-auto bg-black pt-3">
                {task.assets.length > 0 && (
                  <p className="text-center font-sans font-semibold text-white">{task.assets[0].asset_title}</p>
                )}
              </div>
              <ul className="ml-5 my-5">
                {task.assets.length > 0 && (
                  <li className="font-poppins ">
                    <b>Description:</b> {task.assets[0].asset_description}
                  </li>
                )}
              </ul>
              {task.assets.map((asset) => (
                <div>
                  <iframe className="h-[291px] w-[480px]" src={asset.asset_content} title="Video" />
                </div>
              ))}
            </div>
    
            <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] relative right-10">
              <div className="h-[50px] w-auto bg-black pt-3">
                {task.assets.length > 0 && (
                  <p className="text-center font-sans font-semibold text-white">{task.assets[1].asset_title}</p>
                )}
              </div>
              <ul className="ml-5 my-5">
                {task.assets.length > 0 && (
                  <li className="font-poppins ">
                    <b>Description:</b> {task.assets[1].asset_description}
                  </li>
                )}
              </ul>
              <div className="bg-[#FEFFC0] py-2 px-2 flex flex-row rounded-xl font-poppins overflow-hidden">
              <FontAwesomeIcon icon={icon({ name: "chevron-up" })} style={{ color: "black" }} size="xl" />
                         <p className="font-bold ml-20">THREAD A</p>
              </div>
              <div className="grid grid-cols-2 grid-rows-1 ml-6 mt-4 rounded-xl overflow-hidden font-poppins ">
              <div className="h-[95px] w-[199px] border rounded-xl overflow-hidden">
              <h1 className="text-center bg-slate-100">
              sub interpretation
              </h1>
              <input className="p-3" type="text" placeholder="Enter text here"></input>
              </div>
              <div className="h-[95px] w-[199px] border rounded-xl overflow-hidden font-poppins ">
              <h1 className="text-center bg-slate-100">
              sub interpretation
              </h1>
              <input className="p-3" type="text" placeholder="Enter text here"></input>
              </div>
                <button className="relative left-36 top-5 rounded-xl w-32 px-1  shadow-lg">select catalog</button>
                <button className="relative left-7 top-5 rounded-xl w-44 px-1  shadow-lg">select catalog</button>
              <br/>
              <button className="w-fit -ml-56 mt-5 py-3 px-2 bg-[#0029FF] rounded-lg text-white">sub thread</button>
              </div>
              <div className="w-[425px] h-[83px] ml-[1.70rem] mt-5 rounded-xl overflow-hidden font-poppins ">
              <h1 className="bg-slate-100 p-2">
              Summary for Thread A
              </h1>
              <input className="p-3" type="text" placeholder="Enter text here"></input>
              </div>
            </div>
            
            <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] ml-10">
            <div className="h-[50px] w-auto bg-black pt-3">
              {task.assets.length > 0 && (
                <p className="text-center font-sans font-semibold text-white">{task.assets[2].asset_title}</p>
              )}
            </div>
            <ul className="ml-5 my-5">
              {task.assets.length > 0 && (
                <li>
                  <b>Description:</b> {task.assets[2].asset_description}
                </li>
              )}
            </ul>
            <div className="pl-5 pt-5 border h-[399px] w-[479px]">
              <h1 className="font-bold">Title</h1>
              <input className="w-[422px] h-[43px] shadow-lg" type="text"></input>
              <h1 className="pt-5 font-bold">Content</h1>
              <div className="pt-3 shadow-lg w-[422px] h-[82px]">
              <span className="pt-3 flex flex-row justify-evenly pl-3 text-[#616161] font-poppins shadow-lg w-[422px] h-[224px]">
                  <p>File </p>
                  <p>Edit</p>
                  <p>View</p>
                  <p>Insert</p>
                  <p>Format</p>
                  <p>Tools</p>
                  <p>Table</p>
                  <p>Help</p>
              </span>
              </div>
            </div>
          </div>
          <div className="w-[480px] h-[580px] shadow-lg rounded-lg overflow-hidden bg-[#FDFDFD] relative right-10">
          <div className="h-[50px] w-auto bg-black pt-3">
            {task.assets.length > 0 && (
              <p className="text-center font-sans font-semibold text-white">{task.assets[3].asset_title}</p>
            )}
          </div>
          <ul className="ml-5 my-5">
            {task.assets.length > 0 && (
              <li>
                <b>Description:</b> {task.assets[3].asset_description}
              </li>
            )}
          </ul>
          {task.assets.length >= 4 && (
            <div>
              <iframe className="h-[450px] w-[480px]"  src={task.assets[3].asset_content} title="Embedded Website"/>
            </div>
          )}          
        </div>
          </React.Fragment>
        ))}
      </div>
    </main>
    <div className="w-[95px] h-[394px] absolute rounded-xl overflow-hidden top-24 right-0 shadow-lg">
    <span className="h-[394px] w-[40px] flex flex-col pt-5 bg-black">
    <FontAwesomeIcon icon={icon({ name: "xmark" })} style={{ color: "white" }} size="xl" />
        <p className="text-white  pt-10 font-bold pl-3">
          N<br/>
          o<br/>
          t<br/>
          i<br/>
          c<br/>
          e<br/>
          <br/>
          b<br/>
          o<br/>
          a<br/>
          r<br/>
          d
        </p>
    </span>
    </div>
    <div className="flex flex-col  absolute top-[200%] right-7">
    <div className="rounded-full mr-5 bg-blue-500 h-auto px-5 py-4">
    <img className="rounded-full h-8 w-8" src="https://s3-alpha-sig.figma.com/img/5b31/c50e/1a61e9875a4e31e0b5da40fe87694dd9?Expires=1688342400&Signature=mH5fVoH3MdqMIViE2JArxeMaloaIC0n~QpN1h7MPUDN1N7yxk0O9vIyQ3j1zJaX4SU1NIb~5IkMQlZxyw67~WdtzgB3p3hCPjSqQHahd04pgc~cRIfhtg1QgeLLOe19cWFYsxHFNQIDwFv2VGmZGIQwspMQNCHmv7bM-Nw-JIT38kisv4hUQ1NhB14wXomjY4ayt7QQat5J1cWnUMnVPYSC3NFrz0cloxCgSIYyweZoDqt3A1RTuJaTN~hFpQDh2sz-ZO3mCrlfYvRtt5~LG9y~9Tu7P0ty3xcUQi47xGRd-nxyiApBJFIxuP-bUlA7iwRwtNMEu0JxoAEkQEAJGqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
  </div>
  <div className="rounded-full mt-5 mr-5  bg-blue-500 h-auto px-3 py-4">
  <img className="rounded-full h-10 w-10" src="https://s3-alpha-sig.figma.com/img/22ae/6e6c/9b8abad7a9c8d241fd0ab9eb6a9f95b5?Expires=1688342400&Signature=B6oZcshREAEfsPsIXFY5RP2NIl2rNwtNGQq89n2t7tRtnMABNsUlnLTeWYsiU80hytN67Nce7I5gcMr9ZFvCb~MfnKoyebm~9n61d6ZbrSIiS9HgEfsA0GYFEH2xKDrKxLu0Kjgs6dXgodRgtQNBL6Zg~DR24Y5w8cKQXgcVg5WUFGwv9jMn5Pdjjr2vXZCK8sJsX57G4qkqPSNmqmsOTsS36Q-Yb~A2~AjSmSwAVj1x2P~lqVGh2nRFM284tS78UBdCS1lRm6pL8EenwEJX2y8ydiUkEw6jAxJ62pJConBkN1IsRPKUSavWIU7UWOuAWlALNt8YV-in9cX9lhZz3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
  </div>
  <div className="rounded-full mt-5 mr-5 bg-blue-500 h-auto px-4 py-4">
  <img className="rounded-full h-10 w-10" src="https://s3-alpha-sig.figma.com/img/1438/def8/3870fdb52d83bb903bb6574487be8860?Expires=1688342400&Signature=jC7WTI66A5U9rbEN3CRNl6WJe1wM-sxXp~fRlXf6OT4QNOeaC8aqkx9JzZdI~dQ2OkPjpiApr0h0GuTuapgsrDmKraWQfIO0OyIi5dce4UAVO8qmFkwa8hqVSE-YDru0DpmOUAOsyof4DpnBGF0ZeiUPHOOSk4o3kDCb--GKSz8mKGkMl~Iy~bITIVyrJHxLWx1dYl-wdtBSz4pbfxzFKnU4kV77FDDjI6M94NBNYx4k0FmDtaCOKXlPVsPa-DrIh4B9ceMI9XQmmO8NTK1MSPgORImXfD7IZ06XEWbfg9HSs33JL7pEHXW1U4imQOZHej5ggRyLkJ7h9IW2~3cDuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
  </div>  
    </div>
      <aside className={`h-[742px] ${open ? "w-20" : "w-[22rem]"} shadow-md rounded-e-md overflow-hidden absolute top-[90px] bg-white`}>
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
    </div>
  );
};

export default Homes;
