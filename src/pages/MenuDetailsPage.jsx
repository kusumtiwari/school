import React from "react";
import { useParams } from "react-router-dom";

function MenuDetailsPage() {
  const { itemname } = useParams();

  return (
    <div className="w-full h-[85vh] font-robotoSlab font-bold italic flex justify-center items-center my-auto text-5xl text-gradient">
      {itemname.toUpperCase()}
    </div>
  );
}

export default MenuDetailsPage;
