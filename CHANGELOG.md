# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- `ThreeBackground` canvas being duplicated in `BaseLayout` (both layout and page templates rendered `<canvas id="three-canvas">`) ([#14](https://github.com/kpab/astro-darkness/issues/14))
- Cursor follower hover handlers not re-binding on View Transitions page navigation ([#14](https://github.com/kpab/astro-darkness/issues/14))
- Internal links 404'ing under `trailingSlash: 'always'` — added trailing slashes to nav / hero / blog card / back-to-blog / CTA links and updated Navigation active-path comparison ([#15](https://github.com/kpab/astro-darkness/issues/15))

## [1.0.1] - 2026-03-28

### Fixed
- Three.js animation persistence across View Transitions navigation ([#6](https://github.com/kpab/astro-darkness/pull/6))
- Mobile hamburger menu not working after View Transitions page navigation

## [1.0.0] - 2026-01-04

### Added
- Initial release of Darkness - Astro Dark Theme
- Dark-themed portfolio/blog template with professional color palette
- Three.js particle system with 5000 animated particles and 3D effects
- Full-featured blog system using Astro Content Collections
- Portfolio/project showcase with featured projects support
- Responsive mobile-first design with floating navigation bar
- Smooth animations and hover effects throughout
- TypeScript support for type-safe development
- MDX support for blog posts and project pages
- RSS feed generation for blog posts
- Sitemap generation for SEO
- Content collections for blog posts and projects with schema validation
- Customizable CSS variables for easy theming
- Multiple sample blog posts demonstrating features
- Sample projects showcasing portfolio capabilities
- About page with skills and features sections
- Google Fonts integration (Space Grotesk + DM Sans)
- GitHub Pages deployment workflow
- MIT License

### Technical Stack
- Astro 5.1.0 as the static site generator
- Three.js 0.160.0 for 3D particle effects
- TypeScript 5.9.3 for type safety
- @astrojs/mdx for enhanced markdown support
- @astrojs/rss for feed generation
- @astrojs/sitemap for SEO optimization

[unreleased]: https://github.com/kpab/astro-darkness/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/kpab/astro-darkness/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/kpab/astro-darkness/releases/tag/v1.0.0
