import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "SolanaWalletAdapter+",
  tagline:
    "Enhancing the Solana Wallet Integration Experience through Open-Source and Community-Driven Solutions for Seamless Blockchain Interactions",
  favicon: "img/solana.jpg",

  // Set the production url of your site here
  url: "https://solwalletadapter.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "theonrex", // Usually your GitHub org/user name.
  projectName: "solana-wallet-adapter-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/theonrex/solana-wallet-adapter-docs",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/theonrex/solana-wallet-adapter-docs",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/solana.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "SolanaWalletAdapter+",
      logo: {
        alt: "My Site Logo",
        src: "img/solana.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "right",
          label: "Documentation",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/theonrex/solana-wallet-adapter-docs",
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
              label: "Documentation",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github",
              href: "https://github.com/theonrex/solana-wallet-adapter-docs",
            },
            {
              label: "Anza-Xyz",
              href: "https://github.com/anza-xyz/wallet-adapter",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blogs",
            //   to: "/blog",
            // },
            {
              label: "Demo",
              href: "https://codesandbox.io/p/devbox/hkrsfs?embed=1",
            },
          ],
        },
      ],
      copyright: ` ${new Date().getFullYear()} Made with ❤️ by <a href="https://x.com/olawande0x" target="_blank" rel="noopener noreferrer">olawande0x</a>.

      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    plugins: [
      [
        "vercel-analytics",
        {
          debug: true,
          mode: "auto",
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
