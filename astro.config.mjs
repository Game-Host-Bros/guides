import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.gamehostbros.com',
  integrations: [starlight({
    title: 'Game Host Bros Guides',
    customCss: ['./src/styles/custom.css'],
    logo: {
      light: './src/assets/light-logo.png',
      dark: './src/assets/dark-logo.png',
      replacesTitle: true
    },
    social: {
      discord: 'https://discord.gg/FN4XgbAwzr',
      github: 'https://github.com/Game-Host-Bros'
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting-started'
      }
    }, {
      label: 'Game Guides',
      collapsed: true,
      autogenerate: {
        directory: 'game-guides'
      }
    }, {
      label: 'Support',
      link: 'https://portal.gamehostbros.com/supporttickets.php'
    }]
  }), sitemap(), robotsTxt()]
});