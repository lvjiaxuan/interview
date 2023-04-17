import { defineConfig, type DefaultTheme } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'


function resolveSidebarItems () {
  const dirs = fs.readdirSync(path.join(__dirname, '..'))
  const reg = /(?<no>\d+)-(?<name>[\w-]+)\.md/i
  return dirs.reduce((pre, item) => {
    const match = item.match(reg)
    match && pre.push({
      text: match.groups!.name,
      link: '/' + match.groups!.no
    })
    return pre
  }, [] as DefaultTheme.SidebarItem[])
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/interview',
  title: "My LeetCode",
  titleTemplate: "Better Solution",
  description: "Better Solution",
  rewrites: {
    ':no(\\d+)-(.+).md': ':no.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        items: resolveSidebarItems()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lvjiaxuan/interview' }
    ],
  }
})
