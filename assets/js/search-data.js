// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "User interfaces and sensing explorations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Scientific publications at conferences and journals.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Innovating over time.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-prism-handlebar",
          title: 'PRISM Handlebar',
          description: "Tactual PRISM Motorcycle Handlebar (Jan&#39;18)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-snake-charmer",
          title: 'Snake Charmer',
          description: "Physically Enabling Virtual Objects (TEI 2016)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-hammer-time",
          title: 'Hammer Time!',
          description: "A Low-Cost, High Precision, High Accuracy Tool to Measure the Latency of Touchscreen Devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-sensing-hand-interactions",
          title: 'Sensing Hand Interactions',
          description: "with Everyday Objects by Profiling Wrist Topography",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-mockup-builder",
          title: 'Mockup Builder',
          description: "Direct 3D Modeling On and Above the Surface in a Continuous Interaction Space",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-next-point-prediction-metrics",
          title: 'Next-Point Prediction Metrics',
          description: "for Perceived Spatial Errors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-storeoboard",
          title: 'Storeoboard',
          description: "Sketching Stereoscopic Storyboards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-ghostid",
          title: 'GhostID',
          description: "Enabling Non-Persistent User Differentiation in Frequency-Division Capacitive Multi-Touch Sensors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-dataink",
          title: 'DataInk',
          description: "Direct and Creative Data-Oriented Drawing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%72%61%72@%64%67%70.%74%6F%72%6F%6E%74%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bdearaujo", "_blank");
        },
      },{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/81310488636/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-vv2z-cAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
