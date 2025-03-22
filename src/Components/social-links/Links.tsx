import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const Links = () => {
  return (
    <div className="flex-col absolute top-[320px] left-10">
      <div className="flex items-center ">
        <div className="bg-[#141313]  px-12 py-2 rounded-[20px] mr-2 hover:bg-orange-500">
          <Link href="https://github.com/sagardabas0007" className="flex justify-center items-center">
            <h1 className="text-white font-medium text-base px-5 ">Github</h1>
            <ArrowUpRight
              height={15}
              width={15}
              className="text-white font-medium text-xl"
            />
          </Link>
        </div>
        <div className="bg-[#141313]  px-12 py-2 rounded-[20px] hover:bg-orange-500 ">
          <Link href="https://x.com/sagar_dbs" className="flex justify-center items-center ">
            <h1 className="text-white font-medium text-base px-5 ">Twitter</h1>
            <ArrowUpRight
              height={15}
              width={15}
              className="text-white font-medium text-xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-3 ">
        <div className="bg-[#141313]  px-12 py-2 rounded-[20px] mr-2 hover:bg-orange-500  ">
          <Link href="https://www.linkedin.com/in/sagar-dabas-9239b01b8/" className="flex justify-center items-center">
            <h1 className="text-white font-medium text-base px-5 ">Linkdin</h1>
            <ArrowUpRight
              height={15}
              width={15}
              className="text-white font-medium text-xl"
            />
          </Link>
        </div>
        <div className="bg-[#141313]  px-12 py-2 rounded-[20px] hover:bg-orange-500 ">
          <Link href="https://www.instagram.com/dabas.sagar_0007/" className="flex justify-center items-center">
            <h1 className="text-white font-medium text-base px-2 ">Instagram</h1>
            <ArrowUpRight
              height={15}
              width={15}
              className="text-white font-medium text-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
