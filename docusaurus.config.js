// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zeppelin Selfhost Docs",
  url: "https://zepdocs.i0.tf",
  baseUrl: "/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zeppelinhangar", // Usually your GitHub org/user name.
  projectName: "selfhosting", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Zep Logo",
          src: "img/zeppelin.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/zeppelinhangar/selfhosting",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Zeppelin Docs",
                href: "https://zeppelin.gg/docs",
              },
            ],
          },
          {
            title: "Discord Servers",
            items: [
              {
                label: "Official",
                href: "https://discordapp.com/invite/zeppelin",
              },
              {
                label: "Hangar",
                href: "https://discordapp.com/invite/uTcdUmF6Q7",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/zeppelinhangar/selfhosting",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Hangar, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
