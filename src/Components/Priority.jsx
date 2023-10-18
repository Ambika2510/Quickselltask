import React from "react";
import "./style.css";

import Prioritycard from "./Prioritycard";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import {
  PiCellSignalFullBold,
  PiCellSignalHighBold,
  PiCellSignalMediumBold,
} from "react-icons/pi";

import { MdOutlineSmsFailed } from "react-icons/md";

const Priority = ({ tickets }) => {
  let p0 = [];
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].priority === 0) {
      p0.push(tickets[i]);
    } else if (tickets[i].priority === 1) {
      p1.push(tickets[i]);
    } else if (tickets[i].priority === 2) {
      p2.push(tickets[i]);
    } else if (tickets[i].priority === 3) {
      p3.push(tickets[i]);
    } else if (tickets[i].priroiy === 4) {
      p4.push(tickets[i]);
    }
  }
  return (
    <div className="priority">
      <div className="p0" style={{ marginLeft: "8px", marginRight: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "18px",
            marginTop: "8px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <BsThreeDots style={{ marginRight: "7px", color: "grey" }} />{" "}
            <h3>No priority {p0.length}</h3>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus /> <BsThreeDots style={{ marginLeft: "20px" }} />
          </div>
        </div>
        {p0.length === 0 ? (
          ""
        ) : (
          <div>
            {p0.map((p) => (
              <Prioritycard
                key={p.id}
                id={p.id}
                title={p.title}
                tag={p.tag[0]}
                status={p.status}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p1" style={{ marginLeft: "8px", marginRight: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "18px",
            marginTop: "8px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <MdOutlineSmsFailed
              style={{ marginRight: "7px", color: "orange" }}
            />{" "}
            <h3>Urgent {p1.length}</h3>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus /> <BsThreeDots style={{ marginLeft: "20px" }} />
          </div>
        </div>
        {p1.length === 0 ? (
          ""
        ) : (
          <div>
            {p1.map((p) => (
              <Prioritycard
                key={p.id}
                id={p.id}
                title={p.title}
                tag={p.tag[0]}
                status={p.status}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p2" style={{ marginLeft: "8px", marginRight: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "18px",
            marginTop: "8px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <PiCellSignalFullBold
              style={{ marginRight: "7px", color: "black" }}
            />{" "}
            <h3>High {p2.length}</h3>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus /> <BsThreeDots style={{ marginLeft: "20px" }} />
          </div>
        </div>
        {p2.length === 0 ? (
          ""
        ) : (
          <div>
            {p2.map((p) => (
              <Prioritycard
                key={p.id}
                id={p.id}
                title={p.title}
                tag={p.tag[0]}
                status={p.status}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p3" style={{ marginLeft: "8px", marginRight: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "18px",
            marginTop: "8px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <PiCellSignalHighBold
              style={{ marginRight: "7px", color: "black" }}
            />{" "}
            <h3>Medium {p3.length}</h3>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus /> <BsThreeDots style={{ marginLeft: "20px" }} />
          </div>
        </div>
        {p3.length === 0 ? (
          ""
        ) : (
          <div>
            {p3.map((p) => (
              <Prioritycard
                key={p.id}
                id={p.id}
                title={p.title}
                tag={p.tag[0]}
                status={p.status}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p4" style={{ marginLeft: "8px", marginRight: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "18px",
            marginTop: "8px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <div>
              <PiCellSignalMediumBold
                style={{ marginRight: "7px", color: "black" }}
              />
            </div>
            <h3>Low {p4.length}</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus /> <BsThreeDots style={{ marginLeft: "20px" }} />
          </div>
        </div>
        {p4.length === 0 ? (
          ""
        ) : (
          <div>
            {p4.map((p) => (
              <Prioritycard
                key={p.id}
                id={p.id}
                title={p.title}
                tag={p.tag[0]}
                status={p.status}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Priority;
