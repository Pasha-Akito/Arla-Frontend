import React from 'react'
import './Widgets.css'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

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
            <a href="https://www.gmit.ie/news/atlantic-tu-students-collaborate-on-research-projects-with-galway-races-with-a-view-to" style={{textDecoration: "none"}}>
                {newsArticle(
                    'Atlantic TU students collaborate on research projects with Galway Races with a view to enhancing customer experience and engagement',
                    'Thursday, April 14, 2022'
                )}
            </a>
            <a href="https://www.gmit.ie/news/eu125-million-higher-education-transformation-project-launched" style={{textDecoration: "none"}}>
                {newsArticle(
                    '€12.5 million Higher Education Transformation Project Launched',
                    'Thursday, April 07, 2022'
                )}
            </a>
            <a href="https://www.gmit.ie/news/donegal-woman-natasha-langan-wins-empower-start-pitch-competition-2022" style={{textDecoration: "none"}}> 
                {newsArticle(
                    'Donegal woman Natasha Langan wins Empower start pitch competition 2022',
                    'Wednesday, April 06, 2022'
                )}
            </a>
        </div>

    )
}

export default Widgets