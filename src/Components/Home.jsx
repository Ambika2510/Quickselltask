import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Priority from "./Priority";
import User from "./User";
import Status from "./Status";
import axios from "axios";
const Home = () => {
  const [users, setusers] = useState([]);
  const [tickets, settickets] = useState([]);
  const [grouping, setgrouping] = useState("Status");
  useEffect(() => {
    axios
      .get(`https://api.quicksell.co/v1/internal/frontend-assignment`)
      .then((res) => {
        let duplicatetickets = [...res.data.tickets];
        duplicatetickets.sort((a, b) => {
          return b.priority - a.priority;
        });

        settickets(duplicatetickets);
        setusers(res.data.users);
      });
  }, []);
  // console.log(tickets);
  const sortpriority = () => {
    let duplicatetickets = [...tickets];
    duplicatetickets.sort((a, b) => {
      return b.priority - a.priority;
    });

    settickets(duplicatetickets);
  };
  const sorttitle = () => {
    let duplicatetickets = [...tickets];
    duplicatetickets.sort((a, b) => {
      if (a.title >= b.title) return 1;
      else return -1;
    });

    settickets(duplicatetickets);
  };
  const funuser = () => {
    setgrouping("User");
    // console.log(grouping);
  };
  const funpriority = () => {
    setgrouping("Priority");
    // console.log(grouping);
  };
  const funstatus = () => {
    setgrouping("Status");
    // console.log(grouping);
  };
  return (
    <div className="Home">
      <Navbar
        funpriority={funpriority}
        funstatus={funstatus}
        funuser={funuser}
        sortpriority={sortpriority}
        sorttitle={sorttitle}
      />
      {grouping === "Status" ? (
        <Status tickets={tickets} />
      ) : grouping === "User" ? (
        <User users={users} tickets={tickets} />
      ) : (
        <Priority tickets={tickets} />
      )}
    </div>
  );
};

export default Home;
