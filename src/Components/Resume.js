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
              I’m an enthusiastic, responsible, self-motivated and hard-working person.
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
              href="https://drive.google.com/file/d/1VPb_wFpZ4OnLxCZ3NmzwKC5jKmHN7sPO/view?usp=drive_link"
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
              position={"Front-end devloper"}
              jobName={"Internship (Remote)"}
              companyName={"Salesqueen software solutions Pvt Ltd"}
              jobDesc={[
                <ul>
                  <li>Work with both front-end team and testing team</li>
                  <li>Work on various live projects</li>
                </ul>
              ]
              }
            />
            <Experience
              startYear={"June 2022"}
              endYear={"June 2023"}
              duration= {2}
              position={"Full stack web development"}
              jobName={"Course (Remote)"}
              companyName={"Newton school"}
              jobDesc={
                [
                  <ul>
                  <li>Frontend Web Development with problem-solving.</li>
                  <li>Technical Stack Learnt - HTML, CSS, JavaScript, Java, React, and Bootstrap.</li>
                  <li>Worked on various projects  Weather app ,Tip calculator , Portfolio ,etc.</li>
                </ul>  
                
                ]
              }
            />
            
            
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={95} />
            <Skills skill={"bootstrap"} progress={90} />
            <Skills skill={"Javascript"} progress={85} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"Node"} progress={80} />
            <Skills skill={"Express"} progress={90} />
            <Skills skill={"MongoDB"} progress={80} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <ul>
              <li>Front-end development internship certificate <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1VPb_wFpZ4OnLxCZ3NmzwKC5jKmHN7sPO/view?usp=drive_link"
            >
             ( Link )
            </a></li>
            <li>HTML & CSS certificate (Udemy) <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1M6AFfFjWEHUF401HnIuZViPg4CnWnmS-/view?usp=sharing"
            >
             ( Link )
            </a></li>
            <li>Front-end development (Great Lerning) <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1YiKpBAIqO99SwcUoyNby2uapjCspDXO_/view?usp=sharing"
            >
             ( Link )
            </a></li>
            <li>Java (Letsupgrade) <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1dl2tjSTvg7Fs7YUFVVukPd2ECYIEVFT-/view?usp=sharing"
            >
             ( Link )
            </a></li>
            <li>C programming certificate (MMIT ,pune) <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1ui-bFRyqHJOyaKgTMZoQVw0E5D3MtAez/view?usp=sharing"
            >
             ( Link )
            </a></li>
            <li>Python certificate (Great Lerning) <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href=" https://drive.google.com/file/d/1rHNMHKs7MjcIofcabKQQ2J0rCy0nugHt/view?usp=sharing"
            >
             ( Link )
            </a></li>
            </ul>
           
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
