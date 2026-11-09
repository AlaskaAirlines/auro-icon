# Alaska

The `auro-alaska` element shows the Alaska Airlines logo. It fills the width of its container and picks the version of the logo that suits that width.

## Install

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-icon";</code></pre>

## Default component

<div class="exampleWrapper">
<auro-alaska style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska style="width: 192px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>
<div class="exampleWrapper--ondark">
<auro-alaska appearance="inverse" style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska appearance="inverse" style="width: 192px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>

## Official logo with tagline

Add the `official` attribute to show the logo with the official tagline.

<div class="exampleWrapper">
<auro-alaska official style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska official style="width: 192px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>
<div class="exampleWrapper--ondark">
<auro-alaska official appearance="inverse" style="width: 192px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska official appearance="inverse" style="width: 192px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>

## Auto scale support

The Alaska Airlines logo has a version designed for each size range. `auro-alaska` picks the version that suits its container's width when it first renders. It doesn't switch versions if the container is resized later.

<div class="exampleWrapper">
<auro-alaska style="width: 72px"></auro-alaska><br>
<auro-alaska style="width: 108px"></auro-alaska><br>
<auro-alaska style="width: 192px"></auro-alaska><br>
<auro-alaska style="width: 528px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska style="width: 72px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska style="width: 108px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska style="width: 192px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska style="width: 528px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>
<div class="exampleWrapper">
<auro-alaska official style="width: 72px"></auro-alaska><br>
<auro-alaska official style="width: 108px"></auro-alaska><br>
<auro-alaska official style="width: 192px"></auro-alaska><br>
<auro-alaska official style="width: 528px"></auro-alaska>
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<pre class="language-html"><code class="language-html">&lt;auro-alaska official style="width: 72px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska official style="width: 108px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska official style="width: 192px"&gt;&lt;/auro-alaska&gt;
&lt;auro-alaska official style="width: 528px"&gt;&lt;/auro-alaska&gt;</code></pre>

</auro-accordion>
