import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import FadeUp from "./FadeUp";
import { Paper } from "@mui/material";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return isHorizontal ? (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index &&
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        }
      </div>
    ) : (
      <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return isHorizontal ? {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
     }
     :
     {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
     };
}

const JobList = () => {
    const [value, setValue] = useState(0);

    const experienceItems = {
        SRI: {
            title: 'Modeling & Simulation Engineer @',
            company: 'SRI',
            location: 'Aberdeen Proving Ground, MD',
            duration: 'October 2024 - Present',
            desc: ['I am currently a Modeling & Simulation Engineer at SRI as a government contractor for the Army.', 'I work on a team that develops simulations for the Army to train soldiers on how to use new equipment.'],
            },
        Amazon: {
            title: "Software Development Engineer @",
            company: 'Amazon',
            location: 'New York, NY',
            duration: "JUL 2022 - PRESENT",
            desc: [
                "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service).  This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
                "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers."
            ]
            },
        }

    const experienceKeys = Object.keys(experienceItems);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 300
            }}
        >
            <Tabs
                orientation={isHorizontal ? "horizontal" : "vertical"}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                sx={isHorizontal ? {} : {borderRight: 1, borderColor: "divider"}}
            >
                {experienceKeys.map((key, i) => (
                    <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)}/>
                ))}
            </Tabs>
            {experienceKeys.map((key, i) => (
                <TabPanel key={i} value={value} index={i}>
                    <span className="joblist-job-title">
                        {experienceItems[key].title + " "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {experienceItems[key].duration}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key].desc.map((descItem, j) => (
                            <FadeUp delay={`${j * 0.1}`} key={j}>
                                <li>{descItem}</li>
                            </FadeUp>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </Box>
    );
};


// return (
//     <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", mt: 4 }}>
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="Experience Tabs"
//           variant="scrollable"
//           scrollButtons="auto"
//           textColor="primary"
//           indicatorColor="primary"
//           sx={{ borderBottom: 1, borderColor: "divider" }}
//         >
//           {experienceKeys.map((key, index) => (
//             <Tab
//               key={key}
//               label={key}
//               id={`tab-${index}`}
//               aria-controls={`tabpanel-${index}`}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 fontSize: "1rem",
//                 padding: "0.5rem 1rem",
//               }}
//             />
//           ))}
//         </Tabs>
//         {experienceKeys.map((key, index) => {
//           const { jobTitle, company, location, duration, desc } = experienceItems[key];
//           return (
//             <TabPanel key={key} value={value} index={index}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                 {jobTitle} {key}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
//                 {duration}
//               </Typography>
//               <Box component="ul" sx={{ pl: 2 }}>
//                 {desc.map((item, idx) => (
//                   <li key={idx} style={{ marginBottom: "0.5rem" }}>
//                     <Typography variant="body1">{item}</Typography>
//                   </li>
//                 ))}
//               </Box>
//             </TabPanel>
//           );
//         })}
//       </Paper>
//     </Box>
//   );
// }


export default JobList;