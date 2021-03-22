import React from 'react';
// import profPic from '../../assets/images/profpic.JPG'
import Card from 'react-bootstrap/Card'

function About () {
    return (
        <section className="margintop fullheight">
            
            <div >
                {/* <img src={profPic} alt="profile" className="my-3 profile"/> */}
                <Card border="danger" style={{ width: '80%' }} text="primary">
                    <Card.Body>
                        <Card.Title >About Me</Card.Title>
                        <Card.Text>
                            Experienced Relocation Specialist based in Philadelphia. Skilled in full stack Web Develoment, Customer Service, and Creative Problem Solving. I possess strong communication skills and am a dedicated hard-worker. I graduated from Temple University and am currently enrolled in the UPenn LPS Fulltime-Flex Full-Stack Web Development Coding Bootcamp.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}



export default About;