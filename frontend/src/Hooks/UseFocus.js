import { useEffect, useRef } from "react";

const useFocus = () => {
  const Input1 = useRef(null);
  const Input2 = useRef(null);
  const Input3 = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);

  const handleFocus = (input, span) => {
    input.current.addEventListener("focus", () => {
      span.current.style.border = "1px solid #135029 ";
    });
  };
  
  //hsl(210, 100%, 60%)#1c2029
  const cleanUpListener = (params) => {
    if (params) {
      params.removeEventListener("focus", handleFocus);
    }
  };

  useEffect(() => {
    if (Input1.current) {
      handleFocus(Input1, span1);
      Input1.current.focus();
    }
    if (Input2.current) {
      handleFocus(Input2, span2);
    }
    if (Input3.current) {
      handleFocus(Input3, span3);
    }
    return () => {
      cleanUpListener(Input1.current);
      cleanUpListener(Input2.current);
      cleanUpListener(Input3.current);
    };
  }, []);

  return { span1, span2, span3, Input1, Input2, Input3 };
};

export default useFocus;
