import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    category: "Reels",
    title: "Lucky FX Social Media Reel",
    description:
      "A dynamic short-form edit created for engaging social media content with cinematic pacing and visual storytelling.",
    tags: ["Reels", "Short Form", "Social Media"],

    // ORIGINAL FILE — THIS FILE ALREADY WORKS IN YOUR BROWSER
    video: "/assets/reels/video-reel-web.mp4",

    realProject: true,
  },

  {
    id: 2,
    category: "Real Estate",
    title: "Luxury Villa Showcase",
    description:
      "Cinematic property showcase concept highlighting architecture, interiors and premium lifestyle.",
    tags: ["Real Estate", "Cinematic", "Color Grading"],
    image: "/assets/reference-home.jpeg",
  },

  {
    id: 3,
    category: "Motion Graphics",
    title: "Brand Motion Identity",
    description:
      "Creative motion graphics concept for modern branding and visual communication.",
    tags: ["Motion Graphics", "After Effects", "Branding"],
    image: "/assets/reference-pages.jpeg",
  },

  {
    id: 4,
    category: "Wedding",
    title: "A Story of Love",
    description:
      "Cinematic wedding editing concept focused on emotion and storytelling.",
    tags: ["Wedding", "Storytelling", "Film"],
    image: "/assets/reference-home.jpeg",
  },

  {
    id: 5,
    category: "Documentary",
    title: "Stories That Matter",
    description:
      "Story-driven documentary editing with cinematic pacing and strong visual storytelling.",
    tags: ["Documentary", "Editing", "Storytelling"],
    image: "/assets/reference-pages.jpeg",
  },

  {
    id: 6,
    category: "Commercial",
    title: "Brand Promotional Film",
    description:
      "High-impact promotional editing designed to communicate brand messages effectively.",
    tags: ["Commercial", "Advertising", "Color"],
    image: "/assets/reference-home.jpeg",
  },
];

const filters = [
  "All",
  "Reels",
  "Real Estate",
  "Motion Graphics",
  "Wedding",
  "Documentary",
  "Commercial",
];

/* =========================================
   PROJECT CARD
========================================= */

function ProjectCard({ project, featured, onOpen }) {
  const videoRef = useRef(null);

  const startVideo = async () => {
    if (!project.video || !videoRef.current) return;

    try {
      videoRef.current.muted = true;

      await videoRef.current.play();
    } catch (error) {
      console.log("Preview play error:", error);
    }
  };

  const stopVideo = () => {
    if (!project.video || !videoRef.current) return;

    videoRef.current.pause();
  };

  return (
    <article
      className={`portfolio-card ${
        featured ? "portfolio-featured" : ""
      }`}
      onMouseEnter={startVideo}
      onMouseLeave={stopVideo}
      onClick={() => onOpen(project)}
    >
      <div className="portfolio-image">
        {project.video ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            src={project.video}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        )}

        <div className="portfolio-overlay">
          <div className="play-button">▶</div>

          <span>
            {project.video
              ? "WATCH PROJECT"
              : "VIEW PROJECT"}
          </span>
        </div>

        <div className="project-number">
          {String(project.id).padStart(2, "0")}
        </div>

        <div className="project-category">
          {project.category}
        </div>

        {project.realProject && (
          <div className="real-project-badge">
            REAL PROJECT
          </div>
        )}
      </div>

      <div className="portfolio-info">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <button
          type="button"
          className="project-link"
        >
          {project.video
            ? "Watch Project"
            : "Explore Project"}

          <span> ↗</span>
        </button>
      </div>
    </article>
  );
}

/* =========================================
   PORTFOLIO
========================================= */

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  /* =========================================
     MODAL KEYBOARD + SCROLL
  ========================================= */

  useEffect(() => {
    if (!selectedProject) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section"
      >
        {/* HEADING */}

        <div className="section-heading">
          <div>
            <span className="section-kicker">
              OUR WORK
            </span>

            <h2>
              Creative Work.
              <span> Powerful Results.</span>
            </h2>

            <p>
              Explore cinematic edits, motion
              graphics, commercials and visual
              stories created by Lucky FX Studio.
            </p>
          </div>

          <div className="portfolio-count">
            <strong>
              {String(
                filteredProjects.length
              ).padStart(2, "0")}
            </strong>

            <span>PROJECTS</span>
          </div>
        </div>

        {/* FILTERS */}

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={
                activeFilter === filter
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS */}

        <div className="portfolio-grid">
          {filteredProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={index === 0}
                onOpen={setSelectedProject}
              />
            )
          )}
        </div>

        {/* CTA */}

        <div className="portfolio-cta">
          <div>
            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's create something unforgettable.
            </h3>
          </div>

          <a href="#contact">
            Start Your Project
            <span> →</span>
          </a>
        </div>
      </section>

      {/* =========================================
          MODAL
      ========================================= */}

      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ×
            </button>

            {/* VIDEO / IMAGE */}

            <div className="modal-image">
              {selectedProject.video ? (
                <video
                  key={selectedProject.video}
                  src={selectedProject.video}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                    background: "#000",
                  }}
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              )}
            </div>

            {/* DETAILS */}

            <div className="modal-details">
              <span className="modal-category">
                {selectedProject.category}
              </span>

              <h2>
                {selectedProject.title}
              </h2>

              <p>
                {selectedProject.description}
              </p>

              <div className="modal-tags">
                {selectedProject.tags.map(
                  (tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button
                type="button"
                className="modal-cta"
                onClick={() => {
                  setSelectedProject(null);

                  setTimeout(() => {
                    document
                      .getElementById(
                        "contact"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);
                }}
              >
                Start Similar Project →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
