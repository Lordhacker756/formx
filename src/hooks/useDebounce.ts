import { useRef } from "react";

const useDebounce = (callback: (...args: any[]) => void) => {
    const timer = useRef<null | NodeJS.Timeout>(null);

    return (...args: any[]) => {
        if (timer.current) {
            clearInterval(timer.current);
        }

        timer.current = setTimeout(() => {
            callback();
        }, 300);

    }
}

export default useDebounce;