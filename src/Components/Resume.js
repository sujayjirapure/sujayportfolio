import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/sujaydp.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Sujay S. Jirapure</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is sujay s jirapure. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1st line ,shiv nagar, old city ,akola</p>
            <h5>Phone</h5>
            <p>+91 9130345103</p>
            <h5>Email</h5>
            <p>jirapuresujay@gmail.com</p>
            
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/10pokHihjguFSTzuqX__xeXbvNRR-Vpvj/view?usp=sharing"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2022}
              schoolName={"Sant Gadge baba amravti university"}
              degreeName={"Bachelor of Computer Application (BCA)"}
              percentage={"74%"}
            />
            <Education
              startYear={2019}
              endYear={2017}
              schoolName={"Secondary and Higher Secondary Education ,Pune"}
              degreeName={"Intermediate (HSC)"}
              percentage={"54%"}
            />
            <Education
              startYear={2016}
              endYear={2017}
              schoolName={"Secondary and Higher Secondary Education ,Pune"}
              degreeName={"Matriculation (SSC)"}
              percentage={"64%"}
            />
          <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            
            <Experience
              startYear={"April 2023"}
              endYear={"May 2023"}
              duration= {1}
              jobName={"Internship (Remote)"}
              companyName={"Salesqueen software solutions Pvt Ltd"}
              jobDesc={[
                "Worked on active development project. DevSkill built using Asp .Net-5 & MSSQL",
                "Writing, improving & fixing Unit tests.",
                "Designing & developing new features."
              ]
              }
            />
            <Experience
              startYear={"June 2022"}
              endYear={"June 2023"}
              duration= {2}
              jobName={"Internee"}
              companyName={"ASTHA IT"}
              jobDesc={
                [
                  "It was a part-time Internship program " ,
                   "I have completed several assignments that provided by Senior Software Engineers",
                "I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an internship."]
              }
            />
            
            
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={90} />
            <Skills skill={"bootstrap"} progress={90} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"Node"} progress={80} />
            <Skills skill={"Express"} progress={90} />
            <Skills skill={"MongoDB"} progress={80} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>6th at SWE Junior Programming Contest (03/2019)</h6>
            <h6>9th Position at DIU TakeOff Programming Contest (04/2017)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
