import React from 'react';
import parse from "html-react-parser";
import { Fade } from 'react-awesome-reveal';

const CertificateItem = ({ icon, year, title, desc , certificatelink}) => {
    return (
        <div className="resume__item">
            <Fade duration={500} cascade triggerOnce="true">
                <div className="resume__icon">
                    {icon}
                </div>
                <div className="resume__date">
                    {year}
                </div>
                <h3 className="resume__subtitle">
                    {parse(title)}
                </h3>
                <p className="resume__description">
                    {desc}
                </p>
                <div>
              <a target="_blank" href={certificatelink} className='certificatelink'>Get Certificate</a>
                </div>
            </Fade>
           
        </div>
    )
}

export default CertificateItem