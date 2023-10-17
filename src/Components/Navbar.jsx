import React, { useState } from "react";
import "./style.css";
import { BiChevronDown, BiAbacus } from "react-icons/bi";
const Navbar = ({
  funpriority,
  funstatus,
  funuser,
  sortpriority,
  sorttitle,
}) => {
  const [d, setd] = useState(0);
  const [v1, setv1] = useState("Status");
  const [v2, setv2] = useState("Priority");
  const dropd = () => {
    setd(1 - d);
  };
  const handlechange = (e) => {
    const p = e.target.value;
    setv1(p);
    if (p === "Status") {
      funstatus();
    } else if (p === "User") {
      funuser();
    } else {
      funpriority();
    }
  };
  const handlesort = (e) => {
    const p = e.target.value;
    setv2(p);
    if (e === "Priority") {
      sortpriority();
    } else {
      sorttitle();
    }
  };
  return (
    <div>
      <div className="navbar">
        <div>
          <button onClick={dropd}>
            <BiAbacus /> Display <BiChevronDown id="dropdown" />
          </button>
        </div>
      </div>
      {d === 0 ? (
        ""
      ) : (
        <div
          style={{
            marginLeft: "8px",
            backgroundColor: "lightgrey",
            padding: "7px ",
            display: "inline-block",
            position: "absolute",
            top: "47px",
          }}
        >
          <div style={{ marginBottom: "6px" }}>
            <label
              for="grouping"
              style={{
                marginRight: "25px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Grouping{" "}
            </label>

            <select
              name="grouping"
              id="grouping"
              value={v1}
              style={{ fontSize: "14px", fontWeight: "bold", padding: "3px" }}
              onChange={handlechange}
            >
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div>
            <label
              for="ordering"
              style={{
                marginRight: "25px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Ordering{" "}
            </label>

            <select
              name="ordering"
              id="ordering"
              onChange={handlesort}
              value={v2}
              style={{ fontSize: "14px", fontWeight: "bold", padding: "3px" }}
            >
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
