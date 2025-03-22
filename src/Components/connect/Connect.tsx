"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@lemonsqueezy/wedges";
import { Copy, CopyCheck } from "lucide-react";

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const copyBtn = document.getElementById("copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText("sagardabas2019@gmail.com").then(() => {
          setIsCopied(true);
          setShowToast(true);
          setTimeout(() => {
            setIsCopied(false);
            setShowToast(false);
          }, 2000);
        });
      });
    }
  }, []);

  return (
    <div className="bg-[#141313] absolute top-[440px] left-[510px] w-[480px]  rounded-[20px]">
      <div className="flex flex-col justify-center items-center py-5">
        <div className="h-12 w-12 bg-orange-500 rounded-full my-5"></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-xl">Have a project</h1>
          <h1 className="text-white font-bold text-xl">in mind?</h1>
        </div>
        <div className="my-5">
          <Button className="bg-orange-500 text-white px-20  rounded-full gap-2 hover:bg-orange-600 transition-colors font-semibold text-md cursor-pointer">
            <div className="flex items-center">
              <span>sagardabas2019@gmail.com</span>
              <Button id="copy-btn" className="cursor-pointer px-4">
                {isCopied ? (
                  <CopyCheck height={20} width={20} className="text-white" />
                ) : (
                  <Copy height={20} width={20} className="text-white" />
                )}
              </Button>
            </div>
          </Button>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white  px-4 py-2 rounded-full shadow-lg transition-opacity duration-300">
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Connect;
