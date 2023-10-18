import React from "react";
import "./style.css";
import { CgProfile } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Usercard from "./Usercard";
const User = ({ users, tickets }) => {
  let u0 = [];
  let u1 = [];
  let u2 = [];
  let u3 = [];
  let u4 = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].userId === "usr-1") {
      u0.push(tickets[i]);
    } else if (tickets[i].userId === "usr-2") {
      u1.push(tickets[i]);
    } else if (tickets[i].userId === "usr-3") {
      u2.push(tickets[i]);
    } else if (tickets[i].userId === "usr-4") {
      u3.push(tickets[i]);
    } else if (tickets[i].userId === "usr-5") {
      u4.push(tickets[i]);
    }
  }
  return (
    <div className="priority">
      <div className="u0" style={{ marginLeft: "8px", marginRight: "8px" }}>
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
            <CgProfile
              style={{ marginRight: "7px", color: "blue", fontSize: "22px" }}
            />{" "}
            <h3>
              {" "}
              {users[0].name} {u0.length}
            </h3>
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
        {u0.length === 0 ? (
          ""
        ) : (
          <div>
            {u0.map((user) => (
              <Usercard
                key={user.id}
                id={user.id}
                status={user.status}
                title={user.title}
                tag={user.tag[0]}
              />
            ))}
          </div>
        )}
      </div>
      <div className="u1" style={{ marginLeft: "8px", marginRight: "8px" }}>
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
            <CgProfile
              style={{ marginRight: "7px", color: "blue", fontSize: "22px" }}
            />{" "}
            <h3>
              {" "}
              {users[1].name} {u1.length}
            </h3>
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
        {u1.length === 0 ? (
          ""
        ) : (
          <div>
            {u1.map((user) => (
              <Usercard
                key={user.id}
                id={user.id}
                status={user.status}
                tag={user.tag[0]}
                title={user.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="u2" style={{ marginLeft: "8px", marginRight: "8px" }}>
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
            <CgProfile
              style={{ marginRight: "7px", color: "blue", fontSize: "22px" }}
            />{" "}
            <h3>
              {" "}
              {users[2].name} {u2.length}
            </h3>
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
        {u2.length === 0 ? (
          ""
        ) : (
          <div>
            {u2.map((user) => (
              <Usercard
                key={user.id}
                id={user.id}
                status={user.status}
                tag={user.tag[0]}
                title={user.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="u3" style={{ marginLeft: "8px", marginRight: "8px" }}>
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
            <CgProfile
              style={{ marginRight: "7px", color: "blue", fontSize: "22px" }}
            />{" "}
            <h3>
              {" "}
              {users[3].name} {u3.length}
            </h3>
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
        {u3.length === 0 ? (
          ""
        ) : (
          <div>
            {u3.map((user) => (
              <Usercard
                key={user.id}
                id={user.id}
                status={user.status}
                tag={user.tag[0]}
                title={user.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="u4" style={{ marginLeft: "8px", marginRight: "8px" }}>
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
            <CgProfile
              style={{ marginRight: "7px", color: "blue", fontSize: "22px" }}
            />{" "}
            <h3>
              {" "}
              {users[4].name} {u4.length}
            </h3>
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
        {u4.length === 0 ? (
          ""
        ) : (
          <div>
            {u4.map((user) => (
              <Usercard
                key={user.id}
                id={user.id}
                status={user.status}
                tag={user.tag[0]}
                title={user.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
