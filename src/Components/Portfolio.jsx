/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Student Learn Ambassador",
    description:
      "Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future..",
    url: "https://mvp.microsoft.com/studentambassadors/certificate/d5c21ec3-c3f2-4334-9d6e-b7acdde2822d",
  },
  {
    title: "Autobiography",
    description:
      "Explore my tech journey autobiography showcasing my passion for innovation, academic achievements and a commitment to driving impactful solutions in the world as a future software engineer maverick! ",
    url: "https://orange-elset-79.tiiny.site",
  },
  {
    title: "Introduction To Artificial Intelligence",
    description:
      "Completed LinkedIn Learning courses in AI and AI for Business, gaining practical knowledge and proficiency in implementing AI solutions",
    url: "https://lnkd.in/erB2UCrZ",
  },
  {
    title: "My Anime/Manga Site",
    description:
      "Created a personal anime/manga website to showcase skills using Html, Css and JavaScript.",
    url: "https://6480650811c40800a66760f0--poetic-capybara-b774a8.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
