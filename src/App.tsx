import i18n from "@dhis2/d2-i18n";
import classes from "./App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";
import { Button, CircularLoader } from '@dhis2/ui';
import React, { useState } from 'react';


const query = {
	me: {
		resource: "me"
	}
};


const SidebarData = [
    {
        title:"Metadata Assesment",
        link:"/home"
    },
    {
        title:"Documentation",
        link:"/Documentation"
    }
]

function Sidebar() {
    return (
<div className={classes.Sidebar}>
    <ul>
    {SidebarData.map((val, key)=>{
    return(
        <li key={key}
        onClick={()=>{
            window.location.pathname=val.link}}
        >
        <div>{val.title}</div>
        </li>
    );
})}
    </ul>
    </div>
    );
}


const MyApp = () => {
    const [loading, setLoading] = useState(false);
    const [reportGenerated, setReportGenerated] = useState(false);

    const handleButtonClick = () => {
        setLoading(true);
        // Add your logic here for what should happen when "Check Integrity" is clicked

        // Simulate a loading process, for example, fetching data
        setTimeout(() => {
            setLoading(false);
            setReportGenerated(true);
        }, 3000); // 3 seconds delay
    };

    return (
        <>
         <div className={classes.Sidebar}>
        {/* <ul>
         <li><a href="/">Metadata Assessment</a></li>
        <li><a href="/documentation">Documentation</a></li>
        </ul> */}
        <Sidebar/>
    </div>
        <div className={classes.home}>
            
             {!loading && !reportGenerated && (
                <>
                    <h1>Click the button below to generate Metadata Assessment Report</h1>
                    <Button primary onClick={handleButtonClick} >Check Integrity</Button>
                </>
            )}
            {loading && (
                <>
                    <h1>Generating report...</h1>
                    <CircularLoader large />
                </>
            )}
            {!loading && reportGenerated && (
                <h1 style={{ color: 'green' }}>Report generated successfully!</h1>
            )}
        </div>
         </>
             
    );
};

export default MyApp;

