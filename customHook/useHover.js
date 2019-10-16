// use Hover
export const useHover = onHover => {
    if (typeof onHover !== "function"){
      return;
    }
  
    const element = useRef();
    useEffect(() => {
      if (element.currnet) {
        element.currnet.addEventListener("mouseenter", onHover);
      }
      
      return () => {
        if (element.currnet) {
          element.currnet.removeEventListener("mouseenter", onHover);
        }
      };
    }, []);
    return element;
  };