import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import GoalDetailBar from "components/GoalDetailBar";
import MainContent from "components/MainContent";
const Main = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Box sx={{ height: "100vh", overflow: "clip" }}>
      <Header toggleSideBar={toggleSideBar} onClick={toggleSideBar} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "clip",
        }}
      >
        {showSidebar && (
          <GoalDetailBar
            sideBarWidth={showSidebar ? "20%" : 350}
            minSideBarWidth={showSidebar ? 350 : 350}
          />
        )}
        <MainContent mainWidth={showSidebar ? "80%" : "100%"} />
      </Box>
    </Box>
  );
};

export default Main;
