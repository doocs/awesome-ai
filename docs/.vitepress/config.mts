import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome AI",
  description: "AI 工具集汇总",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具集', link: '/intro' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the CC-BY-SA-4.0 license.',
      copyright: `Copyright © 2018-${new Date().getFullYear()} <a href="https://github.com/doocs">Doocs</a>`
    },
    logo: '/doocs.png',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/doocs/awesome-ai/edit/main/docs/:path',
      text: '在 GitHub 编辑'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/doocs/awesome-ai' }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
  ],
  cleanUrls: true,
  sitemap: {
    hostname: 'https://ai.doocs.org'
  }
})
