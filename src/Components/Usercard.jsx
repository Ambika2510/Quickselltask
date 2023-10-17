import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineSmsFailed } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { TbProgressBolt } from "react-icons/tb";
import { CgMoreR } from "react-icons/cg";
const Usercard = ({ status, title, tag, id }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "8px",
        borderRadius: "10px",
        height: "100px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginLeft: "5px", color: "grey", fontSize: "15px" }}>
          {id}
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {status === "In progress" ? (
          <TbProgressBolt
            style={{ marginRight: "1px", marginLeft: "4px", color: "orange" }}
          />
        ) : status === "Todo" ? (
          <BsCircle
            style={{ marginRight: "1px", marginLeft: "4px", color: "grey" }}
          />
        ) : status === "Backlog" ? (
          <MdOutlineSmsFailed
            style={{ marginRight: "1px", marginLeft: "4px", color: "blue" }}
          />
        ) : status === "Done" ? (
          <AiOutlineCheckCircle
            style={{ marginRight: "1px", marginLeft: "4px", color: "green" }}
          />
        ) : status === "Cancelled" ? (
          <MdOutlineCancel
            style={{ marginRight: "1px", marginLeft: "4px", color: "red" }}
          />
        ) : (
          ""
        )}
        <h3
          style={{
            marginTop: "4px",
            marginLeft: "2px",
            marginRight: "2px",
            fontSize: "15px",
            fontWeight: "800",
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "1px",
          left: "35px",
        }}
      >
        <CgMoreR style={{ color: "grey", marginRight: "19px" }} />
        <BsCircleFill style={{ color: "grey", marginRight: "4px" }} /> {tag}
      </div>
    </div>
  );
};

export default Usercard;
