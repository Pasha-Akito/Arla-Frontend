import React from 'react'
import './Widgets.css'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>GMIT News</h2>
                <InfoOutlinedIcon />
            </div>

            {newsArticle(
                'Minister Harris designates first President of the Atlantic Technological University',
                'Wednesday, March 02, 2022'
            )}
            {newsArticle(
                'UK Ambassador to Ireland Paul Johnston and GMIT President discuss Atlantic Technological University plans for the west and north-west during GMIT visit',
                'Thursday, February 24, 2022'
            )}
            {newsArticle(
                'International "Invent for the planet" event hosted by GMIT puts focus on solving global challenges',
                'Wednesday, February 23, 2022'
            )}
       
        </div>

    )
}

export default Widgets