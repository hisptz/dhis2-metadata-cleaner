import React from 'react'
import classes from "./App.module.css"
import { IconErrorFilled24 } from '@dhis2/ui'

const Help = () => {
    return (
        <div className={classes.Helpcontainer}>
            
                <ul className={classes.wordList}>
                    <h3>What you will find here:</h3><br />
                    <li><b>Tutorial videos</b></li>
                    <li><b>Learn different functionalities in App</b></li>
                    <li><b>See solutions of common problems</b></li>
                </ul>

                <div className={classes.videoWrapper}>  
                <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/ETB620ZlAU4?si=mu6Ol2suIOidRIlA" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                
                </div>
                <p className={classes.italicText}>This is where you get all the references on how to use the tool,<br /> how to handle some of the known challenges you might face while checking integrity and on top of that,<br /> there will be a tutorial video for first time users to see how they can interact with the application.</p>
            
            <span className={classes.bottomRightIcon}>
                <IconErrorFilled24 />
            </span>
        </div>
    )
}

export default Help
              
             