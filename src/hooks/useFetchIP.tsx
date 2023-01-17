import { useEffect, useState } from "react";

const useFetchIP = () => {
  const [city, setCity] = useState("");
  const getIP = async () => {
    const req = await fetch("https://ipapi.co/json");
    const res = await req.json();

    console.log(res.city);
    setCity(res.city);
  };
  useEffect(() => {
    getIP();
  }, []);
  return [city];
};

export default useFetchIP;
