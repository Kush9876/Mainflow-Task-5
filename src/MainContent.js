import React from 'react';
//import './MainContent.css'; // Assuming you have a CSS file for MainContent styles

function MainContent() {
  return (
    <div className="main-content">
      <section id="home">
        <div className="container">
          <h2>Home</h2>
          <p>
            Welcome to the MainFlow Internship Program Task-5 "homepage" using React JS. This
            page is designed for the fifth task for the internship on the domain
            "Full Stack Web Development Internship". Here you can find
            information about MainFlow, the internship, and the specific project
            details.
          </p>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2>About MainFlow</h2>
          <p>
            At Main Flow, we are officially registered as an MSME (Micro, Small,
            and Medium Enterprises) entity. We firmly believe that practical
            knowledge holds significant importance for success in the technology
            industry. Our primary objective revolves around assisting students
            who may have gaps in their fundamental skills. We accomplish this by
            providing them with hands-on learning opportunities, where they
            engage in real-world projects to gain a genuine understanding of how
            things operate in the professional sphere. We understand the immense
            value of allowing future tech experts to experiment and learn
            through firsthand experience. This is precisely why our internship
            program focuses on enabling students to learn by actively
            participating in real projects. Throughout the program, they have
            the privilege of working alongside seasoned mentors who offer
            guidance and support every step of the way. Our team comprises
            industry experts with extensive experience. They are deeply
            committed to nurturing interns' growth and enhancing their skills.
            We foster a warm and inclusive environment, where everyone is
            encouraged to learn, evolve, and contribute fresh ideas.
          </p>
        </div>
      </section>
      <section id="project">
        <div className="container">
          <h2>Project Details</h2>
          <p>
            This project involves creating a homepage as part of the first task
            in the MainFlow internship program. The homepage includes a header,
            navigation, and multiple sections such as Home, About, Project, and
            Contact. The goal is to demonstrate proficiency in React JS.
          </p>
          <p>Specific details:</p>
          <ul>
            <li>Usage of semantic HTML elements.</li>
            <li>
              Adding a background color to the main content area, excluding the
              header and footer.
            </li>
            <li>
              Ensuring that the page is visually appealing and easy to navigate.
            </li>
          </ul>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2>Contact Information</h2>
          <p>
            If you have any questions regarding the internship or this task,
            please reach out to us:
          </p>
          <p>Email: career.mainflow@gmail.com</p>
          <p>Phone: +91 938 964 1586</p>
          <p>
            LinkedIn Page:
            <a
              href="https://www.linkedin.com/company/main-flow-services-and-technologies"
              target="_blank"
              >MainFlow LinkedIn</a
            >
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
