import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export const UseLocalState = async (key, defaultValue) => {
  // initialize the value sate from local storage or default value
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  const set_value_in_local_storage = (newValue) => {
    // update the value in state and local storage
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
    });
  };

  return [value, set_value_in_local_storage];
};

const DarkLigthModBtn = () => {
  const [isDark, setIsDark] = useState();

  async function changetheme(is_first_render) {
    const darkReaderOptions = { brightness: 100, contrast: 90, sepia: 10 };
    if (typeof window != "undefined") {
      const { enable, disable, isEnabled, setFetchMethod } = await import(
        "darkreader"
      );

      const isDark = localStorage.getItem("isDark");
      if (is_first_render) {
        if (isDark === "true") {
          setFetchMethod(window.fetch);
          enable(darkReaderOptions);
        } else if (isDark === "false") {
          disable();
        }
      } else {
        if (isDark === "true") {
          disable();
          localStorage.setItem("isDark", "false");
          setIsDark("false");
        } else if (isDark === "false") {
          setFetchMethod(window.fetch);
          enable(darkReaderOptions);
          localStorage.setItem("isDark", "true");
          setIsDark("true");
        }
      }
    }
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("isDark");
    if (storedValue === null) {
      localStorage.setItem("isDark", "false");
      setIsDark(storedValue); // stored value
    } else {
      changetheme(true);
      setIsDark(storedValue);
    }
  }, []);

  return (
    <div
      onClick={() => {
        changetheme(false);
      }}
    >
      {isDark === "true" ? (
        <Image src={"/icons/sun.png"} width={25} height={25} />
      ) : (
        <Image src={"/icons/Moon.png"} width={25} height={25} />
      )}
    </div>
  );
};

export default DarkLigthModBtn;
