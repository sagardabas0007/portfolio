import { useRef, useEffect } from "react";
import { gsap } from "gsap"

const Cursor = () => {

    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    //hide cursor on mobile devices sm and md screen sizes

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches;

    useEffect(() => {

        if (isMobile) {
        return null;
        }
        
        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        //initial cursor position

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        //variables tha controls the cursor with diffrent speed

        const xTO = gsap.quickTo(cursor, "x", {
            duration: 0.2,
            ease: "power3.out"
        })

        const yTO = gsap.quickTo(cursor, "y", {
            duration: 0.2,
            ease: "power3.out"
        })

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.5,
            ease: "power3.out"
        })

        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.5,
            ease: "power3.out"
        })
        
        //mouse movement handler

        const handleMouseMove = (e) => {
            xTO(e.clientX)
            yTO(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)
        }

        //mouse eventlistner

        window.addEventListener("mousemove", handleMouseMove);
    }, []);

  return (
      <>
          
          {/*main cursor dot */}
          <div ref={cursorRef}
              className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
          />

          <div ref={cursorBorderRef}
              className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
          />
      </>
  )
}

export default Cursor
