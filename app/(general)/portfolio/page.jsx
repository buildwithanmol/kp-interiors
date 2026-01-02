"use client";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Retailer from "../../../components/Retailer";
import Residence from "../../../components/Residence";
import Commercial from "../../../components/Commercial";

const Page = () => {
    const [display, setDisplay] = useState("Commercial");
    const Category = ["Residence", "Commercial", "Retail"];

    return (
        <>
            <h1 className="text-stroke md:text-[5vw] text-[10vw] leading-none text-center flex flex-col items-center justify-center gap-4">
                PORTFOLIO <RiArrowDownSLine className="text-4xl" />
            </h1>
            <ul className="w-full flex items-center justify-center gap-10 mt-4">
                {Category.map((e, i) => (
                    <li
                        onClick={() => setDisplay(e)}
                        className={`underline_animation hover:cursor-pointer text-accent-yellow ${display === e ? "text-yellow-500" : ""}`}
                        key={i}
                    >
                        {e}
                    </li>
                ))}
            </ul>
            {display === "Retail" ? (
                <Retailer />
            ) : display === "Residence" ? (
                <Residence />
            ) : (
                <Commercial />
            )}
        </>
    );
};

export default Page;
