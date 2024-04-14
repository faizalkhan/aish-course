import React, { useState } from "react";



export function Usestatehook() {

  const [fullName, setFullName] = useState("");

  const [selectBox, setSelectBox] = useState("");

  const [checkBox, setCheckBox] = useState(false);



  const applyCss= {
    backgroundColor: "#595454",
    width: "400px",
    height: "400px",
    marginLeft: "10px",
    padding: "30px"
  }

  return (
    // <div style={applyCss}>


      <div style={{

        backgroundColor: "#595454",
        width: "400px",
        height: "auto",
        marginLeft: "10px",
        padding: "30px",
        marginBottom  : "30px"
      }}>





      <input
        placeholder="Enter Full name"
        className="inputfeild"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
    <br/>
         <select value={selectBox} onChange={(e) => setSelectBox(e.target.value)}>
            <option value={""}> Choose the branch </option>
            <option value={"ec"}> EC Branch </option>
            <option value={"mech"}> Mech branch </option>
            <option value={"cs"}> CS Branch </option>
            <option value={"civil"}> Civil Branch </option>
         </select>

         <br/>
    <input type="checkbox" checked = {checkBox}  onChange={(e) => setCheckBox(!checkBox)}/>



    <p>Entered name is {fullName}</p>
    <p>branch selected: {selectBox}</p>
    <p>{checkBox ? " Available" : " Not Available"}</p>

    </div>
  );
}


