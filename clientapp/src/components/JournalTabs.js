import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TodoBoard from './todo/TodoBoard';
import Map from './map/Map';


const locations = {
    'address': '1600 Amphitheatre Parkway, Mountain View, california.',
    'lat': 37.42216,
    'lng': -122.08427,
};


const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};


const JournalTabs = ({ journalInfo }) => {
    const [value, setValue] = useState(0);
    const journalInfoTodo = journalInfo[0].todos;
    const journalInfoMapLocations = journalInfo[0].map;

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value} 
                    onChange={handleChange} 
                >
                    <Tab label="Todo" />
                    <Tab label="Map" />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <TodoBoard journalInfoTodo={journalInfoTodo} />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <Map 
                        journalInfoMapLocations={journalInfoMapLocations}
                        zoomLevel={17}
                        locations={locations}
                    />
                </TabPanel>
            </Box>
        </>
    );
};

export default JournalTabs;