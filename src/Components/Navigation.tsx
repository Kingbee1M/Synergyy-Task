"use client"

import { useState, useEffect } from "react"
import NavButton from "./NavButton";
import Fotter from "./Fotter";
type NavigationProps = {
    className?: string;
  };

export default function Navigation (className: NavigationProps) {
    
    const [project, ] = useState(10);
    const [services, ] = useState(10);
    const [testimonial, ] = useState(10);
    const [respons, ] = useState(10);
    const [userName,] = useState("Omawunmi")
    const [userEmail,] = useState("Oma@rayna.ui")
    const [pic, setPic] = useState("")
    useEffect(() => {
        setPic(userName.substring(0, 2).toUpperCase());
    }, [userName]);
    
    const buttons = [
        {
        link: "Project",
        count: project,
        icon: "/assets/icon2.svg"
        },
        {
        link: "Services",
        count: services,
        icon: "/assets/icon3.svg"
        },
        {
        link: "Testimonial",
        count: testimonial,
        icon: "/assets/icon4.svg"
        },
    ]
    return (
        <div className={`w-full h-full flex flex-col justify-between items-center font-barlow ${className || ""}`}>
            <div className="h-screen w-1/5 fixed top-0 left-0 flex flex-col justify-between items-center p-6">
            <div className="w-4/5 flex flex-row justify-start items-center font-bold"><img src="/assets/Pearl-logo.svg" alt="Pearl Logo" width={50} height={50} /><div>Pearl Portal</div></div>
            <div className="h-1/2 flex flex-col justify-between items-center w-full mb-32 text-sm">
                <div className="w-4/6 mb-6 flex flex-row justify-start items-start gap-8">
                    <img src="/assets/icon1.svg" alt="icon" width={15} height={15} />
                    <p>Dashbord</p>
                </div>

                {buttons.map((button, index) => (
          <NavButton key={index} button={button} />
        ))}
            <div className="w-70p mb-6 flex flex-row justify-between items-center mt-6 text-linkColor">
                <img src="/assets/icon5.svg" alt="icon" width={15} height={15} className="block" />
                <div className=" text-left flex flex-row">Responses</div>
                <div>{respons}</div>           
            </div>
            </div>
            <div className="w-4/5"><Fotter name={userName} email={userEmail} picture={pic} /></div>
            </div>
        </div>
    )
}