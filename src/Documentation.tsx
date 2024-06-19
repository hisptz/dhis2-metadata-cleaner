import React from 'react'
import classes from "./App.module.css"
import { IconErrorFilled16, IconErrorFilled24 } from '@dhis2/ui'
import { Link } from 'react-router-dom'

const CustomCard = ({ children }) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}

const Documentation = () => {
    return (
        <div className={classes.Container}>
            <CustomCard>
            <h3 style={{ display: 'flex', alignItems: 'left' }}>
            <span className={classes.iconWrapper}>
                <IconErrorFilled16 />
            </span>
            <span className={classes.text}>Missing Metadata Package</span>
        </h3>

            <p style={{ fontStyle:'italic' }}>Please ensure that metadata packages are available in DHIS2 before initiating assessment</p>
            <div className={classes.cardFooter}>
                    <Link to="/" className={classes.text}>
                        Return
                    </Link>
                    <Link to="/help" className={classes.text}>
                        Documentation
                    </Link>
                </div>
            </CustomCard>
            <span className={classes.bottomRightIcon}>
                <IconErrorFilled24 />
            </span>
        </div>
    )
}

export default Documentation
