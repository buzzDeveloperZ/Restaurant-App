import React from "react";
import "./style.css";
import Menu from "./MenuApi";
import { useState } from "react";
import Menucard from "./Menucard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    //  arrya na badha element ne ak sathe print karva map. 
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturent = () => {

  // variable na new data badalva mate usestate 

  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const fliterItem = (catagory) => {

    if (catagory === "All"){
      setmenuData(Menu);
      return;
    }

    const updatedItem = Menu.filter((curElem) => {
      return curElem.category === catagory;
    });
    setmenuData(updatedItem);
  };

  return (
    <>
      <Navbar fliterItem={fliterItem} menuList={menuList} />
      <Menucard data={menuData} />
    </>
  );
};

export default Resturent;
