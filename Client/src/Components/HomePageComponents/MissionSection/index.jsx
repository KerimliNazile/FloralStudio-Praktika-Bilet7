import React from 'react'
import './index.scss'
const Mission = () => {
    return (
        <>
            <section id='OurMission'>
                <div className="OurMissionArea">
                    <div className="LeftMission">
                        <div className="MissionText">
                            <h1>Our Mission</h1><br />
                            {/* <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p><br /> */}
                            <button className='ReadBtn'>Read more</button>
                        </div>

                    </div>
                    <div className="RightMission">
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mission
