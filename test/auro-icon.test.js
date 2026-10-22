/* eslint-disable max-lines */
/* eslint-disable max-statements */
/* eslint-disable require-jsdoc */
/* eslint-disable func-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { expect, fixture, html, waitUntil } from "@open-wc/testing";
import sinon from "sinon";
import tailDefault from "@alaskaairux/icons/dist/logos/tail-DEFAULT_es6.js";
import error from "@alaskaairux/icons/dist/icons/alert/error.mjs";
import { AuroIcon } from "../src/auro-icon.js";
import "../src/registered";

const fetchStub = sinon.stub(window, "fetch");

function mockIconResponse(body = "") {
  return new window.Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
}

beforeEach(() => {
  fetchStub.resetHistory();
  fetchStub.resolves(mockIconResponse("<svg></svg>"));
});

describe("auro-icon", () => {
  it("does not duplicate requests for same icon source", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    expect(fetch).to.be.calledOnceWith(
      sinon.match("icons/interface/chevron-up.svg"),
    );
  });

  it("auro-icon a11y div hidden by default", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    const labelDiv = el.shadowRoot.querySelector(".labelWrapper");

    expect(labelDiv).to.have.class("util_displayHiddenVisually");
  });

  it("auro-icon is using label", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" label>Hello world</auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    const div = el.shadowRoot.querySelector(
      ".labelWrapper:not(.util_displayHiddenVisually)",
    );

    expect(div).to.exist;
  });

  it("auro-icon is not hiding content", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" label>Hello world</auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    const labelDiv = el.shadowRoot.querySelector(".labelWrapper");

    expect(labelDiv).to.not.have.class("util_displayHiddenVisually");
  });

  it("default accessibility", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    const span = el.shadowRoot.querySelector("span");

    expect(span).to.have.attr("aria-hidden", "true");
  });

  it("edited accessibility", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" ariaHidden="false"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    const span = el.shadowRoot.querySelector("span");

    expect(span).to.have.attr("aria-hidden", "false");
  });

  describe("built-in SVG description", () => {
    const describedSvg =
      '<svg aria-labelledby="described__desc" role="img"><title/><desc id="described__desc">Described icon</desc></svg>';

    beforeEach(() => {
      fetchStub.callsFake(async () => new window.Response(describedSvg));
    });

    async function renderIcon(template) {
      const el = await fixture(template);

      await waitUntil(() => el.svg, "Element did not become ready");
      await el.updateComplete;

      return el.shadowRoot.querySelector("span svg");
    }

    it("is kept when ariaHidden is \"false\", so the exposed graphic has a name", async () => {
      const svg = await renderIcon(html`
        <auro-icon category="described" name="kept" ariaHidden="false"></auro-icon>
      `);

      expect(svg).to.exist;
      expect(svg.querySelector("desc")).to.exist;
      expect(svg).to.have.attr("aria-labelledby", "described__desc");
    });

    it("is kept when ariaHidden is unset", async () => {
      const svg = await renderIcon(html`
        <auro-icon category="described" name="unset"></auro-icon>
      `);

      expect(svg).to.exist;
      expect(svg.querySelector("desc")).to.exist;
      expect(svg).to.have.attr("aria-labelledby", "described__desc");
    });

    it("is removed when ariaHidden is \"true\"", async () => {
      const svg = await renderIcon(html`
        <auro-icon category="described" name="removed" ariaHidden="true"></auro-icon>
      `);

      expect(svg).to.exist;
      expect(svg.querySelector("desc")).to.not.exist;
      expect(svg).to.not.have.attr("aria-labelledby");
    });
  });

  it("binds camelCase and lowercase attribute spellings to the same properties", async () => {
    const camel = await fixture(html`
      <auro-icon category="interface" name="chevron-up" onDark customColor customSvg ariaHidden="false"></auro-icon>
    `);
    const lower = await fixture(html`
      <auro-icon category="interface" name="chevron-up" ondark customcolor customsvg ariahidden="false"></auro-icon>
    `);

    for (const el of [camel, lower]) {
      expect(el.onDark).to.be.true;
      expect(el.customColor).to.be.true;
      expect(el.customSvg).to.be.true;
      expect(el.ariaHidden).to.equal("false");
    }
  });

  it("deprecated ondark applies the same color as appearance=\"inverse\"", async () => {
    const plain = await fixture(html`<auro-icon customSvg></auro-icon>`);
    const inverse = await fixture(html`<auro-icon customSvg appearance="inverse"></auro-icon>`);
    const ondark = await fixture(html`<auro-icon customSvg ondark></auro-icon>`);

    const plainColor = getComputedStyle(plain).color;
    const inverseColor = getComputedStyle(inverse).color;

    expect(inverseColor).to.not.equal(plainColor);
    expect(getComputedStyle(ondark).color).to.equal(inverseColor);
  });

  it("customcolor inherits the surrounding text color", async () => {
    const wrapper = await fixture(html`
      <div style="color: rgb(1, 2, 3)">
        <auro-icon customSvg></auro-icon>
        <auro-icon customSvg customcolor></auro-icon>
      </div>
    `);
    const [plain, custom] = wrapper.querySelectorAll("auro-icon");

    expect(getComputedStyle(plain).color).to.not.equal("rgb(1, 2, 3)");
    expect(getComputedStyle(custom).color).to.equal("rgb(1, 2, 3)");
  });

  it("auro-alaska shows small alaska logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 72px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 57 17");
  });

  it("auro-alaska shows small alaska tagline logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 72px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 57 24");
  });

  it("auro-alaska shows med alaska logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 108px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 83 26");
  });

  it("auro-alaska shows med alaska tagline logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 108px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 83 35");
  });

  it("auro-alaska shows lg alaska logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 192px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 144 45");
  });

  it("auro-alaska shows lg alaska tagline logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 192px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 144 63");
  });

  it("auro-alaska shows xl alaska logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 528px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 396 121");
  });

  it("auro-alaska shows xl alaska tagline logo", async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 528px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector("svg");

    expect(svg.getAttribute("viewBox")).to.equal("0 0 396 171");
  });

  it("auro-icon is accessible", async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not become ready");

    await expect(el).to.be.accessible();
  });

  it("auro-icon custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-icon"));

    expect(el).to.be.true;
  });

  it("auro-icon can be registered as a custom element name", async () => {
    AuroIcon.register("custom-icon");

    const el = await fixture(html`
      <custom-icon category="interface" name="chevron-up"></custom-icon>
    `);

    await expect(el.localName).to.equal("custom-icon");

    expect(el).to.have.attribute("auro-icon");
    expect(el).to.be.an.instanceof(AuroIcon);
    expect(el.category).to.equal("interface");
    expect(el.name).to.equal("chevron-up");
  });

  it("renders generic error icon when no name attribute is provided", async () => {
    fetchStub.resolves(mockIconResponse(""));

    const el = await fixture(html`
      <auro-icon category="interface"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not set fallback svg");

    const penDOM = new DOMParser().parseFromString(error.svg, "text/html");
    const expectedSvg = penDOM.body.querySelector("svg");

    expect(el.svg.isEqualNode(expectedSvg)).to.be.true;
  });

  it("renders tail-DEFAULT SVG when a tail icon name fails to load", async () => {
    fetchStub.resolves(mockIconResponse(""));

    const el = await fixture(html`
      <auro-icon category="logos" name="tail-N-fallback-test"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not set fallback svg");

    const penDOM = new DOMParser().parseFromString(tailDefault.svg, "text/html");
    const expectedSvg = penDOM.body.querySelector("svg");

    expect(el.svg.isEqualNode(expectedSvg)).to.be.true;
  });

  it("renders generic error icon when name is missing", async () => {
    fetchStub.resolves(mockIconResponse(""));

    const el = await fixture(html`
      <auro-icon category="logos"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not set fallback svg");

    const penDOM = new DOMParser().parseFromString(error.svg, "text/html");
    const expectedSvg = penDOM.body.querySelector("svg");

    expect(el.svg.isEqualNode(expectedSvg)).to.be.true;
  });

  it("renders generic error icon when a non-tail icon fails to load", async () => {
    fetchStub.resolves(mockIconResponse(""));

    const el = await fixture(html`
      <auro-icon category="logos" name="nonexistent-icon"></auro-icon>
    `);

    await waitUntil(() => el.svg, "Element did not set fallback svg");

    const penDOM = new DOMParser().parseFromString(error.svg, "text/html");
    const expectedSvg = penDOM.body.querySelector("svg");

    expect(el.svg.isEqualNode(expectedSvg)).to.be.true;
  });
});
