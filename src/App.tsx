import React, { useState, useEffect } from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Documentation from './Documentation'
import Help from './Help'
import classes from "./App.module.css"
import { Button, CircularLoader } from '@dhis2/ui'

const myQuery = {
    results: {
        resource: 'programs',
        params: {
            pageSize: 50,
            fields: ['id', 'displayName'],
        },
    },
}

const MyApp = () => {
    const [fetchData, setFetchData] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [activeLink, setActiveLink] = useState('home')
    const { loading, error, data, refetch } = useDataQuery(myQuery, {
        lazy: true,
    })

    useEffect(() => {
        if (fetchData) {
            refetch()
        }
    }, [fetchData, refetch])

    const handleFetchClick = () => {
        setFetchData(true)
    }

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const handleLinkClick = (link) => {
        setActiveLink(link)
    }

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    return (
        <Router>
            <div className={classes.appContainer}>
                <div className={`${classes.sidebar} ${sidebarOpen ? classes.open : classes.closed}`}>
                    <button onClick={handleSidebarToggle} className={classes.toggleButton}>
                        {sidebarOpen ? '<' : '>'}
                    </button>
                    <ul className={classes.sidebarList}>
                        <li 
                            className={activeLink === 'home' ? classes.active : ''} 
                            onClick={() => handleLinkClick('home')}
                        >
                            <Link to="/">Metadata Assessment</Link>
                        </li>
                        <li 
                            className={activeLink === 'documents' ? classes.active : ''} 
                            onClick={() => handleLinkClick('documents')}
                        >
                            <Link to="/documentation">Documentation</Link>
                        </li>
                        {/* Add more sidebar items as needed */}
                    </ul>
                </div>
                <div className={classes.content}>
                    <Routes>
                        <Route path="/" element={
                            !fetchData ? (
                                <div>
                                    <h2>Welcome</h2>
                                    <h1>Click the button below to generate Metadata Assessment Report</h1>
                                    <Button primary onClick={handleFetchClick}>Check Integrity</Button>
                                </div>
                            ) : (
                                <>
                                    {loading && (
                                        <>
                                            <h1>Generating report...</h1>
                                            <CircularLoader large />
                                        </>
                                    )}
                                    {data && (
                                        <div>
                                            <h1>Programs</h1>
                                            <ul>
                                                {data.results.programs.map((prog) => (
                                                    <li key={prog.id}>{prog.displayName}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )
                        } />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/help" element={<Help/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default MyApp
