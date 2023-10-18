import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineSmsFailed } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { TbProgressBolt } from "react-icons/tb";
const Prioritycard = ({ id, title, tag, status }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "8px",
        borderRadius: "10px",
        minHeight: "110px",
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
        <CgProfile
          style={{ marginRight: "3px", fontWeight: "bold", fontSize: "22px" }}
        />
      </div>
      <div style={{ display: "flex", alignContent: "center" }}>
        <div>
          {status === "In progress" ? (
            <TbProgressBolt
              style={{
                marginRight: "1px",
                marginLeft: "4px",
                color: "orange",
                height: "30px",
                width: "15px",
              }}
            />
          ) : status === "Todo" ? (
            <BsCircle
              style={{
                marginRight: "1px",
                marginLeft: "4px",
                color: "grey",
                height: "30px",
                width: "15px",
              }}
            />
          ) : status === "Backlog" ? (
            <MdOutlineSmsFailed
              style={{
                marginRight: "1px",
                marginLeft: "4px",
                color: "blue",
                height: "30px",
                width: "15px",
              }}
            />
          ) : status === "Done" ? (
            <AiOutlineCheckCircle
              style={{
                marginRight: "1px",
                marginLeft: "4px",
                color: "green",
                height: "30px",
                width: "15px",
              }}
            />
          ) : status === "Cancelled" ? (
            <MdOutlineCancel
              style={{
                marginRight: "1px",
                marginLeft: "4px",
                color: "red",
                height: "30px",
                width: "15px",
              }}
            />
          ) : (
            ""
          )}
        </div>
        <h3
          style={{
            marginTop: "4px",
            marginLeft: "2px",
            marginRight: "3px",
            fontSize: "15px",
            fontWeight: "800",
            textAlign:"justify"
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
        <BsCircleFill style={{ color: "grey", marginRight: "4px" }} /> {tag}
      </div>
    </div>
  );
};

export default Prioritycard;
