import React, { useState, useEffect } from "react";

const Example3 = () => {
  const [date, setDate] = useState(0);

  //    useEffect(()=> {
  //         const updatedDate = new Date();
  //         setDate(updatedDate.toLocaleTimeString());
  //     },[]);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Date: {date}</h1>
    </div>
  );
};

export default Example3;
