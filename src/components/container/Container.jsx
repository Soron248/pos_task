import React from "react";
import Topbar from "../topbar/Topbar";

const Container = () => {
  return (
    <div className="w-full h-full rounded-tl-xl rounded-bl-xl md:rounded-tl-3xl md:rounded-bl-3xl bg-white p-5 md:p-10">
      <Topbar />
    </div>
  );
};

export default Container;
