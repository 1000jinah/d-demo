import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { ReactComponent as Back } from "assets/img/icon_back.svg";
import { ReactComponent as Save } from "assets/img/icon_save.svg";
import { ReactComponent as Export } from "assets/img/icon_export.svg";
import LineAreaChart from "./Chart/LineArea";
import DoughtChart from "./Chart/DoughtChart";
import BarChart from "./Chart/BarChart";
import DataDisplay from "api/DataDisplay";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 6, pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainContent({ mainWidth }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: mainWidth }}>
      <Box
        sx={{
          ".MuiTabs-root": {
            px: 6,
            pt: 1,
          },
          borderBottom: "1px solid #e8e8e8",
          ".MuiTabs-indicator": {
            backgroundColor: "#ff754b",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Projection Profile"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
              "&.Mui-selected": { color: "#211d1d" },
              color: "#b3b3b3",
            }}
          />
          <Tab
            label="Asset Allocation"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
              "&.Mui-selected": { color: "#211d1d" },
              color: "#b3b3b3",
            }}
          />
          <Tab
            label="Holdings Details"
            {...a11yProps(2)}
            sx={{
              textTransform: "capitalize",
              "&.Mui-selected": { color: "#211d1d" },
              color: "#b3b3b3",
            }}
          />
           <Tab
            label="API Test"
            {...a11yProps(3)}
            sx={{
              textTransform: "capitalize",
              "&.Mui-selected": { color: "#211d1d" },
              color: "#b3b3b3",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Questionnaire +  Button 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Button
            sx={{ color: "#ff754b", textTransform: "capitalize" }}
            startIcon={<Back sx={{ color: "#ff754b" }} width={7} height={12} />}
          >
            Questionnaire
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#211d1d",
                backgroundColor: "#f3f3f3",
                textTransform: "capitalize",
                ":hover": {
                  color: "#211d1d",
                  backgroundColor: "#f3f3f3",
                },
                mr: 2,
              }}
              startIcon={<Export />}
            >
              Share Plan
            </Button>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#ffffff",
                backgroundColor: "#ff754b",
                textTransform: "capitalize",
                ":hover": {
                  color: "#ffffff",
                  backgroundColor: "#ff754b",
                },
              }}
              startIcon={<Save />}
            >
              Save Plan
            </Button>
          </Box>
        </Box>
        {/* Title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mr: 3 }}>
            Set Your Portfolio
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dff7f1",
              display: "flex",
              height: "auto",
              p: 0.78,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mr: 0.78,
                borderRadius: "50%",
                backgroundColor: "#10b388",
                width: 12,
                height: 12,
              }}
            ></Box>
            <Typography
              sx={{ color: "#10b388", fontWeight: "bold", fontSize: 14 }}
            >
              On Track
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mb: 3 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                3
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                4
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                7.2%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                9.8%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <LineAreaChart />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Button
            sx={{ color: "#ff754b", textTransform: "capitalize" }}
            startIcon={<Back sx={{ color: "#ff754b" }} width={7} height={12} />}
          >
            Questionnaire
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#211d1d",
                backgroundColor: "#f3f3f3",
                textTransform: "capitalize",
                ":hover": {
                  color: "#211d1d",
                  backgroundColor: "#f3f3f3",
                },
                mr: 2,
              }}
              startIcon={<Export />}
            >
              Share Plan
            </Button>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#ffffff",
                backgroundColor: "#ff754b",
                textTransform: "capitalize",
                ":hover": {
                  color: "#ffffff",
                  backgroundColor: "#ff754b",
                },
              }}
              startIcon={<Save />}
            >
              Save Plan
            </Button>
          </Box>
        </Box>
        {/* Title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mr: 3 }}>
            Set Your Portfolio
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dff7f1",
              display: "flex",
              height: "auto",
              p: 0.78,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mr: 0.78,
                borderRadius: "50%",
                backgroundColor: "#10b388",
                width: 12,
                height: 12,
              }}
            ></Box>
            <Typography
              sx={{ color: "#10b388", fontWeight: "bold", fontSize: 14 }}
            >
              On Track
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mb: 3 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                3
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                4
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                7.2%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                9.8%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <DoughtChart />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Button
            sx={{ color: "#ff754b", textTransform: "capitalize" }}
            startIcon={<Back sx={{ color: "#ff754b" }} width={7} height={12} />}
          >
            Questionnaire
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#211d1d",
                backgroundColor: "#f3f3f3",
                textTransform: "capitalize",
                ":hover": {
                  color: "#211d1d",
                  backgroundColor: "#f3f3f3",
                },
                mr: 2,
              }}
              startIcon={<Export />}
            >
              Share Plan
            </Button>
            <Button
              sx={{
                padding: "4px 13px",
                color: "#ffffff",
                backgroundColor: "#ff754b",
                textTransform: "capitalize",
                ":hover": {
                  color: "#ffffff",
                  backgroundColor: "#ff754b",
                },
              }}
              startIcon={<Save />}
            >
              Save Plan
            </Button>
          </Box>
        </Box>
        {/* Title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mr: 3 }}>
            Set Your Portfolio
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dff7f1",
              display: "flex",
              height: "auto",
              p: 0.78,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mr: 0.78,
                borderRadius: "50%",
                backgroundColor: "#10b388",
                width: 12,
                height: 12,
              }}
            ></Box>
            <Typography
              sx={{ color: "#10b388", fontWeight: "bold", fontSize: 14 }}
            >
              On Track
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mb: 3 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                3
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                4
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "#b3b3b3", fontSize: 14 }}
              >
                / 5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                7.2%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              py: 1,
              px: 2,
              mr: 2,
              width: 273,
            }}
          >
            <Typography sx={{ color: "#b3b3b3", fontSize: 14, mb: 0.5 }}>
              Your Risk Score
            </Typography>
            <Box>
              <Typography
                variant="span"
                sx={{
                  color: "#211d1d",
                  fontSize: 21,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                9.8%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <BarChart />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <DataDisplay />
      </CustomTabPanel>
    </Box>
  );
}
