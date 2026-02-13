/**
 * Frontend Development Keywords
 * Skill Area: frontend
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const FRONTEND_KEYWORDS: KeywordEntry[] = [
  // Core Languages
  { name: 'JavaScript', variations: ['js', 'ecmascript', 'es6', 'es2015', 'es2020'], weight: 2.0, isCore: true },
  { name: 'TypeScript', variations: ['ts', 'typescript'], weight: 2.0, isCore: true },
  { name: 'HTML', variations: ['html5', 'html 5'], weight: 1.5, isCore: true },
  { name: 'CSS', variations: ['css3', 'css 3', 'cascading style sheets'], weight: 1.5, isCore: true },

  // Frameworks - React Ecosystem
  { name: 'React', variations: ['reactjs', 'react.js', 'react js'], weight: 2.0, isCore: true },
  { name: 'Next.js', variations: ['nextjs', 'next'], weight: 1.8, isCore: false },
  { name: 'Redux', variations: ['redux toolkit', 'rtk'], weight: 1.5, isCore: false },
  { name: 'React Query', variations: ['tanstack query', 'react-query'], weight: 1.3, isCore: false },
  { name: 'React Router', variations: ['react-router', 'react router dom'], weight: 1.2, isCore: false },
  { name: 'Zustand', variations: [], weight: 1.2, isCore: false },
  { name: 'Recoil', variations: [], weight: 1.2, isCore: false },
  { name: 'MobX', variations: ['mobx-react'], weight: 1.2, isCore: false },

  // Frameworks - Vue Ecosystem
  { name: 'Vue', variations: ['vue.js', 'vuejs', 'vue js', 'vue 3'], weight: 2.0, isCore: true },
  { name: 'Nuxt', variations: ['nuxt.js', 'nuxtjs', 'nuxt 3'], weight: 1.8, isCore: false },
  { name: 'Vuex', variations: [], weight: 1.3, isCore: false },
  { name: 'Pinia', variations: [], weight: 1.3, isCore: false },
  { name: 'Vue Router', variations: [], weight: 1.2, isCore: false },

  // Frameworks - Angular Ecosystem
  { name: 'Angular', variations: ['angular.js', 'angularjs', 'angular 2+'], weight: 2.0, isCore: true },
  { name: 'RxJS', variations: ['rxjs', 'reactive extensions'], weight: 1.5, isCore: false },
  { name: 'NgRx', variations: ['ngrx'], weight: 1.3, isCore: false },

  // Other Frameworks
  { name: 'Svelte', variations: ['sveltejs'], weight: 1.5, isCore: false },
  { name: 'SvelteKit', variations: ['svelte kit'], weight: 1.5, isCore: false },
  { name: 'Solid.js', variations: ['solidjs', 'solid'], weight: 1.3, isCore: false },
  { name: 'Astro', variations: ['astro.build'], weight: 1.3, isCore: false },
  { name: 'Remix', variations: ['remix.run'], weight: 1.5, isCore: false },
  { name: 'Gatsby', variations: ['gatsbyjs'], weight: 1.3, isCore: false },
  { name: 'Ember', variations: ['ember.js', 'emberjs'], weight: 1.2, isCore: false },
  { name: 'Backbone', variations: ['backbone.js', 'backbonejs'], weight: 1.0, isCore: false },
  { name: 'jQuery', variations: ['jquery'], weight: 1.0, isCore: false },

  // CSS Frameworks & Tools
  { name: 'Tailwind CSS', variations: ['tailwindcss', 'tailwind'], weight: 1.8, isCore: false },
  { name: 'Bootstrap', variations: ['bootstrap 5'], weight: 1.3, isCore: false },
  { name: 'Material UI', variations: ['mui', 'material-ui'], weight: 1.5, isCore: false },
  { name: 'Chakra UI', variations: ['chakra-ui', 'chakraui'], weight: 1.3, isCore: false },
  { name: 'Ant Design', variations: ['antd', 'ant-design'], weight: 1.3, isCore: false },
  { name: 'Styled Components', variations: ['styled-components'], weight: 1.3, isCore: false },
  { name: 'Emotion', variations: ['@emotion'], weight: 1.2, isCore: false },
  { name: 'SASS', variations: ['scss', 'sass'], weight: 1.3, isCore: false },
  { name: 'LESS', variations: ['less css'], weight: 1.1, isCore: false },
  { name: 'CSS Modules', variations: ['css-modules'], weight: 1.2, isCore: false },
  { name: 'PostCSS', variations: ['postcss'], weight: 1.1, isCore: false },
  { name: 'Radix UI', variations: ['radix-ui'], weight: 1.2, isCore: false },
  { name: 'Headless UI', variations: ['headlessui'], weight: 1.2, isCore: false },
  { name: 'Shadcn', variations: ['shadcn/ui', 'shadcn ui'], weight: 1.3, isCore: false },

  // Build Tools
  { name: 'Webpack', variations: ['webpack 5'], weight: 1.5, isCore: false },
  { name: 'Vite', variations: ['vitejs'], weight: 1.5, isCore: false },
  { name: 'Rollup', variations: ['rollup.js'], weight: 1.2, isCore: false },
  { name: 'Parcel', variations: ['parceljs'], weight: 1.1, isCore: false },
  { name: 'esbuild', variations: ['es-build'], weight: 1.3, isCore: false },
  { name: 'Turbopack', variations: ['turbo pack'], weight: 1.2, isCore: false },
  { name: 'Babel', variations: ['babeljs'], weight: 1.3, isCore: false },
  { name: 'SWC', variations: ['speedy web compiler'], weight: 1.2, isCore: false },

  // Package Managers
  { name: 'npm', variations: ['node package manager'], weight: 1.2, isCore: true },
  { name: 'Yarn', variations: ['yarn berry'], weight: 1.2, isCore: false },
  { name: 'pnpm', variations: [], weight: 1.2, isCore: false },

  // Visualization & Animation
  { name: 'D3.js', variations: ['d3', 'd3js'], weight: 1.5, isCore: false },
  { name: 'Chart.js', variations: ['chartjs'], weight: 1.3, isCore: false },
  { name: 'Three.js', variations: ['threejs', 'three'], weight: 1.4, isCore: false },
  { name: 'GSAP', variations: ['greensock'], weight: 1.3, isCore: false },
  { name: 'Framer Motion', variations: ['framer-motion'], weight: 1.3, isCore: false },
  { name: 'Lottie', variations: ['lottie-web'], weight: 1.1, isCore: false },
  { name: 'Recharts', variations: [], weight: 1.2, isCore: false },
  { name: 'Victory', variations: ['victory charts'], weight: 1.1, isCore: false },
  { name: 'ECharts', variations: ['apache echarts'], weight: 1.2, isCore: false },

  // Form Libraries
  { name: 'React Hook Form', variations: ['react-hook-form'], weight: 1.3, isCore: false },
  { name: 'Formik', variations: [], weight: 1.3, isCore: false },
  { name: 'Yup', variations: [], weight: 1.1, isCore: false },
  { name: 'Zod', variations: [], weight: 1.3, isCore: false },

  // State & Data Fetching
  { name: 'SWR', variations: ['stale-while-revalidate'], weight: 1.3, isCore: false },
  { name: 'Apollo Client', variations: ['apollo-client'], weight: 1.4, isCore: false },
  { name: 'URQL', variations: [], weight: 1.2, isCore: false },

  // Concepts & Practices
  { name: 'Responsive Design', variations: ['responsive web design', 'mobile-first', 'mobile first'], weight: 1.5, isCore: true },
  { name: 'Progressive Web Apps', variations: ['pwa', 'pwas'], weight: 1.4, isCore: false },
  { name: 'Single Page Application', variations: ['spa', 'spas'], weight: 1.3, isCore: false },
  { name: 'Server Side Rendering', variations: ['ssr'], weight: 1.4, isCore: false },
  { name: 'Static Site Generation', variations: ['ssg'], weight: 1.3, isCore: false },
  { name: 'Accessibility', variations: ['a11y', 'wcag', 'aria'], weight: 1.5, isCore: true },
  { name: 'SEO', variations: ['search engine optimization'], weight: 1.3, isCore: false },
  { name: 'Web Performance', variations: ['core web vitals', 'lighthouse', 'web vitals'], weight: 1.4, isCore: false },
  { name: 'Cross Browser', variations: ['cross-browser', 'cross browser compatibility'], weight: 1.2, isCore: false },
  { name: 'Component Library', variations: ['design system', 'component-based'], weight: 1.3, isCore: false },
  { name: 'Micro Frontends', variations: ['micro-frontends', 'microfrontends'], weight: 1.3, isCore: false },
  { name: 'Web Components', variations: ['custom elements', 'shadow dom'], weight: 1.2, isCore: false },
  { name: 'JAMstack', variations: ['jamstack'], weight: 1.2, isCore: false },

  // API & Protocols
  { name: 'REST API', variations: ['restful', 'rest apis'], weight: 1.4, isCore: true },
  { name: 'GraphQL', variations: ['graph ql'], weight: 1.5, isCore: false },
  { name: 'WebSocket', variations: ['websockets', 'web sockets', 'ws'], weight: 1.3, isCore: false },
  { name: 'Fetch API', variations: ['fetch'], weight: 1.1, isCore: false },
  { name: 'Axios', variations: [], weight: 1.2, isCore: false },

  // Documentation & Tools
  { name: 'Storybook', variations: ['storybookjs'], weight: 1.4, isCore: false },
  { name: 'Figma', variations: [], weight: 1.3, isCore: false },
  { name: 'Chrome DevTools', variations: ['devtools', 'browser devtools'], weight: 1.2, isCore: false },
  { name: 'Redux DevTools', variations: ['redux-devtools'], weight: 1.1, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getFrontendPatterns(): [RegExp, string][] {
  return FRONTEND_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
