import { useState, useEffect, useRef } from "react";

function useFixed() {
    const [isFixed, setFixed] = useState(false);
    const element = useRef(null);

    const handleScroll = () => {
        window.scrollY > element.current.getBoundingClientRect().bottom ? setFixed(true) : setFixed(false);
    }

    const properScroll = (func, wait=20, immediate=true) => {
        let timeout;
        return () => {
            let context = this,
                args = arguments;
            const later = () => {
                timeout = null
                if (!immediate) func.apply(ontext, args)
            }
            const callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", properScroll(handleScroll))
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [properScroll, handleScroll])

    return { isFixed, element }
}

export default useFixed;
