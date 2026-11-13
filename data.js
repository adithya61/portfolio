/**
 * Portfolio content.
 *
 * This is the only file you need to edit to update what the site says:
 * projects, skills, links, open-source contributions and the build-log lines.
 * Markup lives in index.html, styling in style.css, behaviour in script.js.
 *
 * Text may use these placeholders; script.js fills them in:
 *   {repoCount}      public repositories (refreshed from GitHub when the site is online)
 *   {projectCount}   number of entries in `projects`
 *   {contributionCount}   number of entries in `contributions`
 */
(function () {
  'use strict';

  /**
   * @typedef {Object} Project
   * @property {string}   name
   * @property {string}   summary   One or two sentences on what it is and what is interesting in it.
   * @property {string[]} stack     Technologies, in the order they matter.
   * @property {string}   [live]    Deployed URL.
   * @property {string}   [video]   Demo video URL (opens in a new tab).
   * @property {string}   repo      Source code URL.
   *
   * @typedef {Object} Contribution
   * @property {string} title   One line on what the change did.
   * @property {string} url     Pull request URL.
   * @property {string} repo    "owner/repo".
   * @property {string} merged  Free text, e.g. "Oct 2026".
   *
   * @typedef {Object} BuildStep
   * @property {string}   name
   * @property {string}   detail
   * @property {number}   [duration]   Animation time in ms (default 380).
   * @property {('pass'|'fail')[]} [attempts]   Shows retries, e.g. ['fail', 'fail', 'pass'].
   */

  window.PORTFOLIO_DATA = Object.freeze({
    site: {
      githubUser: 'adithya61',
      /** Shown until the live count loads from GitHub. */
      publicRepoCount: 60,
      /** Optional. When set, it is shown as plain text in the contact section. */
      email: '',
    },

    /** Used by the hero buttons (data-link="id" in index.html) and the contact section. */
    links: [
      { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/adithya61/', primary: true },
      { id: 'resume', label: 'Resume', url: 'https://chiti.netlify.app/assets/resume.pdf' },
      { id: 'github', label: 'GitHub', url: 'https://github.com/adithya61/' },
      { id: 'leetcode', label: 'LeetCode', url: 'https://leetcode.com/u/adithya61/' },
    ],

    /** The animated build log in the hero. Every line should be something a reader can verify. */
    buildSteps: [
      { name: 'checkout', detail: 'Bengaluru, IST (UTC+5:30)', duration: 320 },
      { name: 'install', detail: 'react · typescript · tailwind · node · postgres · prisma', duration: 420 },
      { name: 'build', detail: '{repoCount} public repos' },
      { name: 'test: ships', detail: '{projectCount} projects deployed, each with a live link and public code' },
      { name: 'test: gives back', detail: "merged pull requests in other people's repos" },
      {
        name: 'test: first try',
        detail: 'failed twice, passed on retry 3. It counts.',
        attempts: ['fail', 'fail', 'pass'],
        duration: 1100,
      },
      { name: 'deploy', detail: 'available for remote roles', duration: 360 },
    ],

    /** The numbers under the hero. */
    highlights: [
      { value: '{repoCount}', label: 'public repositories' },
      { value: '{projectCount}', label: 'projects deployed with live demos' },
      { value: 'Pull Shark', label: 'GitHub achievement for merged pull requests' },
    ],

    /** @type {Project[]} Strongest first. */
    projects: [
      {
        name: 'Vidly',
        summary:
          'A video rental app with a hosted backend. Sign-in uses JWT, forms are validated with Joi, errors are tracked in Sentry, and data lives in MongoDB. The backend runs on GCP.',
        stack: ['React', 'JWT', 'Joi', 'Sentry', 'MongoDB', 'GCP'],
        live: 'https://vidly-react-project.netlify.app/',
        video: 'https://www.youtube.com/watch?v=AJsV4LWzBRg',
        repo: 'https://github.com/adithya61/vidly',
      },
      {
        name: 'GameHub',
        summary:
          'A game discovery app on top of RAWG, a database of 500,000+ games. Browse and search titles, with API responses cached using TanStack Query.',
        stack: ['React', 'TypeScript', 'RAWG API', 'TanStack Query', 'Chakra UI'],
        live: 'https://videogameshub.netlify.app/',
        video: 'https://youtu.be/u8r9gBMkwn8',
        repo: 'https://github.com/adithya61/GameHub',
      },
      {
        name: 'Zenith',
        summary: 'A landing page for an IT consultancy, built in React and Tailwind and connected to the Google Sheets API.',
        stack: ['React', 'JavaScript', 'Tailwind CSS', 'Google Sheets API'],
        live: 'https://zinethmvp.vercel.app/',
        repo: 'https://github.com/adithya61/zineth',
      },
      {
        name: 'Intract',
        summary: 'A front-end clone of a crypto interactive-learning platform, rebuilding its interface and interactions.',
        stack: ['React', 'Tailwind CSS', 'CSS'],
        live: 'https://cryptomeme.netlify.app/',
        repo: 'https://github.com/adithya61/Cryptomeme',
      },
      {
        name: 'Moshify',
        summary: 'A static site for a cloud web-hosting service in plain HTML and CSS, with animate-on-scroll effects.',
        stack: ['HTML', 'CSS', 'Animate on Scroll'],
        live: 'https://moshify-web-project.netlify.app/',
        video: 'https://youtu.be/vzGXDuYgdr0',
        repo: 'https://github.com/adithya61/moshify',
      },
    ],

    skills: [
      { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
      { group: 'Backend and data', items: ['Node.js', 'PostgreSQL', 'Prisma'] },
      { group: 'Tools', items: ['Git', 'GitHub'] },
      { group: 'Learning now', items: ['AI engineering: agents, MCP servers, evals'] },
    ],

    /**
     * Open-source pull requests. Paste yours here, newest first. Example:
     *
     *   {
     *     title: 'Fix date parsing for week-based years',
     *     url: 'https://github.com/owner/repo/pull/123',
     *     repo: 'owner/repo',
     *     merged: 'Oct 2026',
     *   },
     *
     * While the list is empty the section shows only the links to GitHub.
     * @type {Contribution[]}
     */
    contributions: [],
  });
})();
