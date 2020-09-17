/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import '../src/auro-icon.js';

describe('auro-icon', () => {
  it('icon is set', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-down"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const svg = el.shadowRoot.querySelector('svg');

    expect(svg).to.not.be.null;
  });

  it('icon is not set', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="notThere"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const svg = el.shadowRoot.querySelector('svg');

    expect(svg).to.not.be.null;
  });

  it('auro-icon is accessible', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-icon custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-icon"));

    await expect(el).to.be.true;
  });
});
