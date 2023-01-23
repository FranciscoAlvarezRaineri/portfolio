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
        <SectionTitle title="Projects">
          This are my past and present projects.
        </SectionTitle>
        {projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            side={index % 2 ? "right" : "left"}
          />
        ))}
      </div>
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
