import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/interview',
  title: "My LeetCode",
  titleTemplate: "Better Solution",
  description: "Better Solution",
  rewrites: {
    '/26-remove-duplicates-from-sorted-array.md': '/26/index.html'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: '',
        items: [
          { text: '26', link: '/26-remove-duplicates-from-sorted-array', },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvjiaxuan/interview' }
    ],
  }
})
