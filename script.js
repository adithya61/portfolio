/**
 * Portfolio behaviour.
 *
 * Reads window.PORTFOLIO_DATA (data.js) and renders it into the mount points in index.html.
 * No dependencies and no build step. Sections of this file:
 *   1. DOM helpers
 *   2. Templated text
 *   3. Renderers (one per section)
 *   4. Build log animation
 *   5. GitHub repo count
 *   6. Init
 */
(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('PORTFOLIO_DATA is missing. Check that data.js loads before script.js.');
    return;
  }

  const prefersReducedMotion =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ *
   * 1. DOM helpers
   * Elements are built with textContent, never innerHTML, so nothing in
   * data.js can inject markup.
   * ------------------------------------------------------------------ */

  /** Create an element. `attrs.text` sets textContent; falsy attributes are skipped. */
  function h(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === undefined || value === null || value === false) continue;
      if (key === 'text') node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children)) {
      if (child) node.append(child);
    }
    return node;
  }

  /** Only http(s) URLs are allowed in links. */
  function safeUrl(url) {
    return /^https?:\/\//i.test(url) ? url : '#';
  }

  /** A link that opens in a new tab. */
  function externalLink(url, label, className) {
    return h('a', { class: className, href: safeUrl(url), target: '_blank', rel: 'noopener noreferrer', text: label });
  }

  const byId = (id) => document.getElementById(id);

  /* ------------------------------------------------------------------ *
   * 2. Templated text
   * Strings in data.js may contain {repoCount} etc. Nodes that use them are
   * registered here so they can be refreshed when a value changes.
   * ------------------------------------------------------------------ */

  const values = {
    repoCount: data.site.publicRepoCount,
    projectCount: data.projects.length,
    contributionCount: data.contributions.length,
  };

  const templated = [];

  function fill(template) {
    return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
  }

  /** Set a node's text from a template and remember it for later refreshes. */
  function setTemplatedText(node, template) {
    node.textContent = fill(template);
    templated.push({ node, template });
  }

  function refreshTemplatedText() {
    for (const { node, template } of templated) node.textContent = fill(template);
  }

  /* ------------------------------------------------------------------ *
   * 3. Renderers
   * ------------------------------------------------------------------ */

  /** Fill href on every element marked data-link="<id>" (hero buttons). */
  function bindLinks() {
    const urls = Object.fromEntries(data.links.map((link) => [link.id, link.url]));
    document.querySelectorAll('[data-link]').forEach((anchor) => {
      const url = urls[anchor.dataset.link];
      if (url) {
        anchor.href = safeUrl(url);
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      } else {
        console.warn(`No link with id "${anchor.dataset.link}" in data.js`);
      }
    });
  }

  function renderHighlights() {
    const list = byId('highlights');
    for (const item of data.highlights) {
      const value = h('b', { class: 'highlights__value' });
      const label = h('span', { class: 'highlights__label', text: item.label });
      setTemplatedText(value, item.value);
      list.append(h('li', { class: 'highlights__item' }, [value, label]));
    }
  }

  function renderProject(project) {
    const links = [
      project.live && externalLink(project.live, 'Live ↗'),
      project.video && externalLink(project.video, 'Demo video ↗'),
      externalLink(project.repo, 'Repo ↗'),
    ];
    return h('article', { class: 'project-card' }, [
      h('h3', { class: 'project-card__title', text: project.name }),
      h('p', { class: 'project-card__summary', text: project.summary }),
      h('ul', { class: 'tag-list' }, project.stack.map((tech) => h('li', { class: 'tag-list__item', text: tech }))),
      h('div', { class: 'project-card__links' }, links),
    ]);
  }

  function renderProjects() {
    byId('project-grid').append(...data.projects.map(renderProject));
  }

  function renderContributions() {
    const list = byId('contribution-list');
    const { githubUser } = data.site;

    list.append(
      ...data.contributions.map((item) =>
        h('li', { class: 'contribution' }, [
          externalLink(item.url, item.title, 'contribution__title'),
          h('span', { class: 'contribution__meta', text: `${item.repo} · merged ${item.merged}` }),
        ])
      )
    );
    list.hidden = data.contributions.length === 0;

    const search = `author:${githubUser} is:pr is:merged -user:${githubUser}`;
    const searchUrl = `https://github.com/search?q=${encodeURIComponent(search)}&type=pullrequests`;
    byId('contribution-actions').append(
      externalLink(searchUrl, 'All merged pull requests on GitHub ↗', 'button'),
      externalLink(`https://github.com/${githubUser}/`, 'Contribution activity ↗', 'button')
    );
  }

  function renderSkills() {
    byId('skill-list').append(
      ...data.skills.map((skill) =>
        h('div', { class: 'skill-list__group' }, [
          h('dt', { class: 'skill-list__name', text: skill.group }),
          h('dd', { class: 'skill-list__items', text: skill.items.join(', ') }),
        ])
      )
    );
  }

  function renderContact() {
    const actions = byId('contact-actions');
    for (const link of data.links) {
      actions.append(externalLink(link.url, `${link.label} ↗`, link.primary ? 'button button--primary' : 'button'));
    }
    if (data.site.email) {
      byId('contact-email').textContent = `Email: ${data.site.email}`;
      byId('contact-email').hidden = false;
    }
  }

  /* ------------------------------------------------------------------ *
   * 4. Build log animation
   * The log is rendered in its finished state, so it is complete without
   * motion. Unless the visitor prefers reduced motion, it then replays once
   * and again whenever "re-run" is pressed.
   * ------------------------------------------------------------------ */

  const DEFAULT_STEP_MS = 380;
  const START_DELAY_MS = 200;
  const STEP_GAP_MS = 80;

  function attemptMark(result) {
    const pass = result === 'pass';
    return h('span', { class: `build-log__attempt build-log__attempt--${result}`, text: pass ? '✓' : '✗' });
  }

  /** Build one row and return handles to change its state. */
  function createStepRow(step) {
    const attempts = h('span', { class: 'build-log__attempts', 'aria-hidden': 'true' });
    const name = h('span', { class: 'build-log__name', text: step.name }, step.attempts ? attempts : null);
    const detail = h('span', { class: 'build-log__detail' });
    setTemplatedText(detail, step.detail);

    const root = h('li', { class: 'build-log__step', 'data-state': 'pass' }, [
      h('span', { class: 'build-log__mark', 'aria-hidden': 'true' }),
      name,
      detail,
    ]);

    function showAttempts(count) {
      attempts.replaceChildren(...(step.attempts || []).slice(0, count).map(attemptMark));
    }
    showAttempts(Infinity);

    return {
      root,
      duration: step.duration || DEFAULT_STEP_MS,
      attemptCount: (step.attempts || []).length,
      setState: (state) => { root.dataset.state = state; },
      showAttempts,
    };
  }

  function createBuildLog({ list, summary, rerunButton, steps }) {
    const rows = steps.map(createStepRow);
    list.append(...rows.map((row) => row.root));

    let timers = [];
    const later = (ms, fn) => timers.push(setTimeout(fn, ms));

    function play() {
      timers.forEach(clearTimeout);
      timers = [];

      rows.forEach((row) => {
        row.setState('wait');
        row.showAttempts(0);
      });
      summary.dataset.state = 'run';
      summary.textContent = 'running…';

      let clock = START_DELAY_MS;
      for (const row of rows) {
        const start = clock;
        const end = start + row.duration;

        later(start, () => row.setState('run'));
        // Reveal retries one by one across the step's duration.
        for (let i = 1; i <= row.attemptCount; i++) {
          later(start + (row.duration * i) / row.attemptCount, () => row.showAttempts(i));
        }
        later(end, () => row.setState('pass'));
        clock = end + STEP_GAP_MS;
      }

      const total = clock + 120;
      later(total, () => {
        summary.dataset.state = 'pass';
        summary.textContent = `✓ all checks passed in ${(total / 1000).toFixed(1)}s`;
      });
    }

    if (prefersReducedMotion) {
      rerunButton.hidden = true;
    } else {
      rerunButton.addEventListener('click', play);
      play();
    }
  }

  /* ------------------------------------------------------------------ *
   * 5. GitHub repo count
   * Works when the site is online. Where requests are blocked it fails
   * quietly and the value from data.js stays.
   * ------------------------------------------------------------------ */

  async function fetchPublicRepoCount(user) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    try {
      const response = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}`, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (!response.ok) return null;
      const body = await response.json();
      return Number.isInteger(body.public_repos) ? body.public_repos : null;
    } catch {
      return null;
    } finally {
      clearTimeout(timeout);
    }
  }

  async function refreshRepoCount() {
    const count = await fetchPublicRepoCount(data.site.githubUser);
    if (count === null) return;
    values.repoCount = count;
    refreshTemplatedText();
  }

  /* ------------------------------------------------------------------ *
   * 6. Init
   * ------------------------------------------------------------------ */

  function init() {
    bindLinks();
    renderHighlights();
    renderProjects();
    renderContributions();
    renderSkills();
    renderContact();
    createBuildLog({
      list: byId('build-log-steps'),
      summary: byId('build-log-summary'),
      rerunButton: byId('build-log-rerun'),
      steps: data.buildSteps,
    });
    byId('year').textContent = new Date().getFullYear();
    refreshRepoCount();
  }

  init();
})();
