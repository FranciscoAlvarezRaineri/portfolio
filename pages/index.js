import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Project from "../components/project";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import ContactForm from "../components/contactForm";

import projects from "../utils/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAR Developer Portfolio</title>
        <meta
          name="description"
          content="Francisco Alvarez Raineri - Full Stack Developer"
        />
        <link rel="icon" href="/Retrato low.png" />
      </Head>

      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Hero />
      <div id="Projects">
        <SectionTitle
          title="Projects"
          subtitle="Past and present projects."
        ></SectionTitle>
        {projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            side={index % 2 ? "right" : "left"}
          />
        ))}
      </div>
      <div id="Education">
        <SectionTitle
          subtitle="Courses and degrees"
          title="Education"
        ></SectionTitle>
        <Testimonials />
      </div>
      <div id="About me">
        <SectionTitle subtitle="how I ended up here" title="About me">
          After a decade of part-time and temporary jobs, I felt the need to
          settle down and follow the path of a professional career. <br />
          Programming came as the obvious choice. The subject caught my
          attention back in high-school because problem solving is my passion
          and writing comes as a natural way to achieve it.
          <br /> Having graduated from an +800hs intensive bootcamp, I’m eager
          to join a team and start adding value.
          <br /> Meanwhile, there are plenty of problems to work on and tools to
          learn.
        </SectionTitle>
      </div>
      <div id="Contact">
        <SectionTitle
          subtitle="Let's get in touch"
          title="Contact"
        ></SectionTitle>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
