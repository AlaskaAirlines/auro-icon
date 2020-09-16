import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-icon.js';

describe('auro-icon', () => {
  it('sets the CSS class on auro-icon > div element', async () => {
    const el = await fixture(html`
      <auro-icon cssclass="testClass"></auro-icon>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-icon is accessible', async () => {
    const el = await fixture(html`
      <auro-icon cssclass="testClass"></auro-icon>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-icon custom element is defined', async () => {
    const el = await !!customElements.get("auro-icon");

    await expect(el).to.be.true;
  });
});
