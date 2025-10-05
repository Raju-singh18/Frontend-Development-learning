import React, { memo, useRef } from "react";

const Counts = ({myBioData}) => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log("✅ Counts rendered:", renderCount.current);

  return (
    <div className="mt-4 text-center">
      <p>
        Nothing changed but I've rendered
        <span className="text-red-600"> {renderCount.current} time(s)</span>
        <p>My name is {myBioData.name}</p>
      </p>
    </div>
  );
};

export default memo(Counts);
