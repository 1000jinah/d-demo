import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "screens/main";
import Survey from "screens/survey";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {/* Redirect from / to /recommend */}
          <Route path="/" element={<Navigate to="/survey" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
