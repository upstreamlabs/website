export const infraSvg = `<svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="infra-bg" x1="24" y1="24" x2="430" y2="448" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EEF4FF"/>
      <stop offset="52%" stop-color="#F8FCFF"/>
      <stop offset="100%" stop-color="#FFF4EA"/>
    </linearGradient>
    <linearGradient id="infra-panel" x1="130" y1="130" x2="350" y2="360" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#F6FAFF" stop-opacity="0.92"/>
    </linearGradient>
    <linearGradient id="infra-line" x1="88" y1="120" x2="380" y2="372" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="55%" stop-color="#0FB79A"/>
      <stop offset="100%" stop-color="#FF8A4C"/>
    </linearGradient>
    <radialGradient id="infra-blue-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108 98) rotate(40) scale(180 150)">
      <stop stop-color="#2563EB" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="infra-green-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(368 130) rotate(125) scale(164 148)">
      <stop stop-color="#0FB79A" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#0FB79A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="infra-orange-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 372) rotate(200) scale(160 142)">
      <stop stop-color="#FF8A4C" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF8A4C" stop-opacity="0"/>
    </radialGradient>
    <filter id="infra-shadow" x="-24" y="-24" width="528" height="528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="20" stdDeviation="28" flood-color="#2563EB" flood-opacity="0.12"/>
    </filter>
    <style>
      .infra-node,
      .infra-core {
        transform-box: fill-box;
        transform-origin: center;
        animation: infraFloat 8s ease-in-out infinite;
      }
      .infra-node-b { animation-delay: -1.5s; }
      .infra-node-c { animation-delay: -3s; }
      .infra-node-d { animation-delay: -4.5s; }
      .infra-node-e { animation-delay: -6s; }
      .infra-dash {
        stroke-dasharray: 7 10;
        animation: infraDash 18s linear infinite;
      }
      .infra-pulse {
        animation: infraPulse 4.5s ease-in-out infinite;
        transform-origin: center;
      }
      .infra-orbit {
        transform-origin: 240px 208px;
        animation: infraSpin 32s linear infinite;
      }
      .infra-orbit-reverse {
        animation-duration: 46s;
        animation-direction: reverse;
      }
      @keyframes infraFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes infraDash {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -170; }
      }
      @keyframes infraPulse {
        0%, 100% { opacity: .35; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      @keyframes infraSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  </defs>
  <rect width="480" height="480" rx="36" fill="url(#infra-bg)"/>
  <rect x="18" y="18" width="444" height="444" rx="28" stroke="rgba(37,99,235,0.14)"/>
  <circle cx="108" cy="98" r="130" fill="url(#infra-blue-halo)"/>
  <circle cx="368" cy="130" r="124" fill="url(#infra-green-halo)"/>
  <circle cx="350" cy="372" r="126" fill="url(#infra-orange-halo)"/>

  <g opacity="0.55">
    <circle cx="240" cy="208" r="120" stroke="url(#infra-line)" stroke-opacity="0.14"/>
    <circle cx="240" cy="208" r="154" stroke="#2563EB" stroke-opacity="0.08"/>
    <circle cx="240" cy="208" r="86" stroke="#0FB79A" stroke-opacity="0.10"/>
  </g>

  <g class="infra-orbit" opacity="0.55">
    <circle cx="240" cy="88" r="4" fill="#2563EB"/>
    <circle cx="352" cy="208" r="4" fill="#0FB79A"/>
    <circle cx="240" cy="328" r="4" fill="#FF8A4C"/>
    <circle cx="128" cy="208" r="4" fill="#7CC6FF"/>
  </g>
  <g class="infra-orbit infra-orbit-reverse" opacity="0.35">
    <circle cx="240" cy="54" r="3" fill="#2563EB"/>
    <circle cx="394" cy="208" r="3" fill="#0FB79A"/>
    <circle cx="240" cy="362" r="3" fill="#FF8A4C"/>
    <circle cx="86" cy="208" r="3" fill="#2563EB"/>
  </g>

  <g stroke-linecap="round">
    <path class="infra-dash" d="M152 136C174 150 191 160 203 169" stroke="url(#infra-line)" stroke-width="2" stroke-opacity="0.35"/>
    <path class="infra-dash" d="M328 128C306 144 288 157 278 167" stroke="url(#infra-line)" stroke-width="2" stroke-opacity="0.35"/>
    <path class="infra-dash" d="M144 270C170 255 189 244 206 235" stroke="url(#infra-line)" stroke-width="2" stroke-opacity="0.35"/>
    <path class="infra-dash" d="M334 262C310 248 292 239 276 230" stroke="url(#infra-line)" stroke-width="2" stroke-opacity="0.35"/>
    <path class="infra-dash" d="M240 319C240 292 240 274 240 258" stroke="url(#infra-line)" stroke-width="2" stroke-opacity="0.35"/>
  </g>

  <g filter="url(#infra-shadow)">
    <g class="infra-core">
      <rect x="154" y="158" width="172" height="102" rx="30" fill="url(#infra-panel)" stroke="rgba(37,99,235,0.18)"/>
      <rect x="176" y="180" width="128" height="26" rx="13" fill="rgba(37,99,235,0.07)"/>
      <text x="240" y="197" text-anchor="middle" fill="#2563EB" font-size="12" font-weight="700" font-family="Manrope, sans-serif">UPSTREAM LABS</text>
      <text x="240" y="224" text-anchor="middle" fill="#0F172A" font-size="19" font-weight="700" font-family="Manrope, sans-serif">Sustain the stack</text>
      <text x="240" y="244" text-anchor="middle" fill="rgba(15,23,42,0.62)" font-size="10" font-weight="500" font-family="Manrope, sans-serif">Incubation • convening • long-term support</text>
      <rect x="182" y="254" width="42" height="16" rx="8" fill="rgba(37,99,235,0.08)"/>
      <rect x="228" y="254" width="40" height="16" rx="8" fill="rgba(15,183,154,0.10)"/>
      <rect x="272" y="254" width="32" height="16" rx="8" fill="rgba(255,138,76,0.10)"/>
      <text x="203" y="265" text-anchor="middle" fill="#2563EB" font-size="7" font-weight="700" font-family="Manrope, sans-serif">RUST</text>
      <text x="248" y="265" text-anchor="middle" fill="#0FB79A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">AI</text>
      <text x="288" y="265" text-anchor="middle" fill="#D46A2A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">OPS</text>
    </g>
  </g>

  <g class="infra-node infra-node-a">
    <rect x="54" y="108" width="102" height="56" rx="20" fill="rgba(255,255,255,0.92)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="74" cy="128" r="7" fill="rgba(37,99,235,0.14)"/>
    <text x="88" y="132" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Makepad</text>
    <text x="74" y="148" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">GPU UI framework</text>
  </g>
  <g class="infra-node infra-node-b">
    <rect x="324" y="100" width="104" height="56" rx="20" fill="rgba(255,255,255,0.92)" stroke="rgba(15,183,154,0.18)"/>
    <circle cx="344" cy="120" r="7" fill="rgba(15,183,154,0.14)"/>
    <text x="358" y="124" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Dora</text>
    <text x="344" y="140" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Robotics runtime</text>
  </g>
  <g class="infra-node infra-node-c">
    <rect x="42" y="236" width="112" height="56" rx="20" fill="rgba(255,255,255,0.92)" stroke="rgba(255,138,76,0.18)"/>
    <circle cx="62" cy="256" r="7" fill="rgba(255,138,76,0.14)"/>
    <text x="76" y="260" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Rapier</text>
    <text x="62" y="276" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">2D and 3D physics</text>
  </g>
  <g class="infra-node infra-node-d">
    <rect x="328" y="228" width="108" height="56" rx="20" fill="rgba(255,255,255,0.92)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="348" cy="248" r="7" fill="rgba(37,99,235,0.14)"/>
    <text x="362" y="252" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">OminiX</text>
    <text x="348" y="268" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">On-device AI</text>
  </g>
  <g class="infra-node infra-node-e">
    <rect x="158" y="324" width="164" height="58" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(15,183,154,0.20)"/>
    <circle cx="180" cy="346" r="7" fill="rgba(15,183,154,0.14)"/>
    <text x="194" y="350" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Robius</text>
    <text x="180" y="366" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Cross-platform native app stack</text>
  </g>

  <circle class="infra-pulse" cx="203" cy="169" r="4.5" fill="#2563EB"/>
  <circle class="infra-pulse" cx="278" cy="167" r="4.5" fill="#0FB79A" style="animation-delay:-1.5s"/>
  <circle class="infra-pulse" cx="206" cy="235" r="4.5" fill="#FF8A4C" style="animation-delay:-3s"/>
  <circle class="infra-pulse" cx="276" cy="230" r="4.5" fill="#2563EB" style="animation-delay:-2.2s"/>
  <circle class="infra-pulse" cx="240" cy="258" r="4.5" fill="#0FB79A" style="animation-delay:-3.4s"/>

  <rect x="54" y="44" width="152" height="28" rx="14" fill="rgba(255,255,255,0.7)" stroke="rgba(37,99,235,0.16)"/>
  <text x="130" y="62" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="700" font-family="Manrope, sans-serif">Open-source infrastructure</text>
  <rect x="316" y="44" width="110" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(15,183,154,0.16)"/>
  <text x="371" y="62" text-anchor="middle" fill="#0FB79A" font-size="11" font-weight="700" font-family="Manrope, sans-serif">10+ live bets</text>

  <rect x="68" y="410" width="344" height="36" rx="18" fill="rgba(255,255,255,0.72)" stroke="rgba(15,23,42,0.08)"/>
  <circle cx="100" cy="428" r="4" fill="#2563EB"/>
  <circle cx="220" cy="428" r="4" fill="#0FB79A"/>
  <circle cx="330" cy="428" r="4" fill="#FF8A4C"/>
  <text x="113" y="432" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">15k+ GitHub stars</text>
  <text x="233" y="432" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">community to product</text>
  <text x="343" y="432" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">public goods</text>
</svg>`;

export const appSvg = `<svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="app-bg" x1="34" y1="20" x2="448" y2="456" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EEF4FF"/>
      <stop offset="45%" stop-color="#F8FCFF"/>
      <stop offset="100%" stop-color="#FFF3EA"/>
    </linearGradient>
    <linearGradient id="app-core" x1="142" y1="140" x2="336" y2="334" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#F7FBFF" stop-opacity="0.94"/>
    </linearGradient>
    <linearGradient id="app-line" x1="86" y1="96" x2="388" y2="384" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="52%" stop-color="#0FB79A"/>
      <stop offset="100%" stop-color="#FF8A4C"/>
    </linearGradient>
    <radialGradient id="app-blue-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102 86) rotate(34) scale(176 152)">
      <stop stop-color="#2563EB" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="app-green-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(380 122) rotate(135) scale(166 146)">
      <stop stop-color="#0FB79A" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#0FB79A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="app-orange-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(324 374) rotate(208) scale(170 148)">
      <stop stop-color="#FF8A4C" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF8A4C" stop-opacity="0"/>
    </radialGradient>
    <filter id="app-shadow" x="-28" y="-28" width="536" height="536" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="22" stdDeviation="28" flood-color="#2563EB" flood-opacity="0.12"/>
    </filter>
    <style>
      .app-card,
      .app-core-shell {
        transform-box: fill-box;
        transform-origin: center;
        animation: appFloat 9s ease-in-out infinite;
      }
      .app-card-b { animation-delay: -1.6s; }
      .app-card-c { animation-delay: -3.2s; }
      .app-card-d { animation-delay: -4.8s; }
      .app-dash {
        stroke-dasharray: 6 10;
        animation: appDash 18s linear infinite;
      }
      .app-pulse {
        transform-origin: center;
        animation: appPulse 4.8s ease-in-out infinite;
      }
      .app-orbit {
        transform-origin: 240px 230px;
        animation: appSpin 34s linear infinite;
      }
      .app-orbit-slow {
        animation-duration: 48s;
        animation-direction: reverse;
      }
      @keyframes appFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes appDash {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -180; }
      }
      @keyframes appPulse {
        0%, 100% { opacity: .32; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.16); }
      }
      @keyframes appSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  </defs>
  <rect width="480" height="480" rx="36" fill="url(#app-bg)"/>
  <rect x="18" y="18" width="444" height="444" rx="28" stroke="rgba(37,99,235,0.12)"/>
  <circle cx="102" cy="86" r="126" fill="url(#app-blue-halo)"/>
  <circle cx="380" cy="122" r="118" fill="url(#app-green-halo)"/>
  <circle cx="324" cy="374" r="124" fill="url(#app-orange-halo)"/>

  <g opacity="0.56">
    <circle cx="240" cy="230" r="112" stroke="url(#app-line)" stroke-opacity="0.14"/>
    <circle cx="240" cy="230" r="146" stroke="#2563EB" stroke-opacity="0.08"/>
    <circle cx="240" cy="230" r="82" stroke="#0FB79A" stroke-opacity="0.10"/>
  </g>

  <g class="app-orbit" opacity="0.52">
    <circle cx="240" cy="118" r="4" fill="#2563EB"/>
    <circle cx="350" cy="230" r="4" fill="#0FB79A"/>
    <circle cx="240" cy="342" r="4" fill="#FF8A4C"/>
    <circle cx="130" cy="230" r="4" fill="#7CC6FF"/>
  </g>
  <g class="app-orbit app-orbit-slow" opacity="0.34">
    <circle cx="240" cy="82" r="3" fill="#2563EB"/>
    <circle cx="386" cy="230" r="3" fill="#0FB79A"/>
    <circle cx="240" cy="378" r="3" fill="#FF8A4C"/>
    <circle cx="94" cy="230" r="3" fill="#2563EB"/>
  </g>

  <g stroke-linecap="round">
    <path class="app-dash" d="M160 132C182 152 196 168 208 182" stroke="url(#app-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="app-dash" d="M326 142C302 160 286 174 274 184" stroke="url(#app-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="app-dash" d="M160 320C186 302 198 290 208 279" stroke="url(#app-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="app-dash" d="M324 320C298 302 286 289 274 278" stroke="url(#app-line)" stroke-width="2" stroke-opacity="0.34"/>
  </g>

  <g filter="url(#app-shadow)">
    <g class="app-core-shell">
      <rect x="138" y="144" width="204" height="178" rx="34" fill="url(#app-core)" stroke="rgba(37,99,235,0.18)"/>
      <rect x="162" y="166" width="100" height="22" rx="11" fill="rgba(37,99,235,0.07)"/>
      <text x="212" y="180" text-anchor="middle" fill="#2563EB" font-size="10" font-weight="700" font-family="Manrope, sans-serif">APPLICATION LAYER</text>
      <text x="240" y="214" text-anchor="middle" fill="#0F172A" font-size="21" font-weight="700" font-family="Manrope, sans-serif">Open products, native feel</text>
      <text x="240" y="234" text-anchor="middle" fill="rgba(15,23,42,0.62)" font-size="10" font-weight="500" font-family="Manrope, sans-serif">Chat, agents, matrix, and models delivered as one cohesive stack.</text>

      <rect x="164" y="252" width="152" height="44" rx="18" fill="rgba(15,23,42,0.03)" stroke="rgba(15,23,42,0.06)"/>
      <rect x="178" y="266" width="56" height="10" rx="5" fill="rgba(37,99,235,0.10)"/>
      <rect x="240" y="266" width="62" height="10" rx="5" fill="rgba(15,183,154,0.10)"/>
      <circle cx="186" cy="284" r="3.5" fill="#2563EB"/>
      <circle cx="224" cy="284" r="3.5" fill="#0FB79A"/>
      <circle cx="262" cy="284" r="3.5" fill="#FF8A4C"/>
      <circle cx="300" cy="284" r="3.5" fill="#2563EB" fill-opacity="0.45"/>

      <rect x="166" y="304" width="48" height="16" rx="8" fill="rgba(37,99,235,0.08)"/>
      <rect x="218" y="304" width="52" height="16" rx="8" fill="rgba(15,183,154,0.10)"/>
      <rect x="274" y="304" width="40" height="16" rx="8" fill="rgba(255,138,76,0.10)"/>
      <text x="190" y="315" text-anchor="middle" fill="#2563EB" font-size="7" font-weight="700" font-family="Manrope, sans-serif">CHAT</text>
      <text x="244" y="315" text-anchor="middle" fill="#0FB79A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">AGENTS</text>
      <text x="294" y="315" text-anchor="middle" fill="#D46A2A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">MODELS</text>
    </g>
  </g>

  <g class="app-card app-card-a">
    <rect x="56" y="102" width="112" height="64" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="78" cy="124" r="8" fill="rgba(37,99,235,0.14)"/>
    <path d="M75 125H81M78 122V128" stroke="#2563EB" stroke-width="1.4" stroke-linecap="round"/>
    <text x="94" y="128" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Moly</text>
    <text x="78" y="146" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">AI client across 6 platforms</text>
  </g>
  <g class="app-card app-card-b">
    <rect x="318" y="112" width="108" height="64" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(15,183,154,0.18)"/>
    <circle cx="340" cy="134" r="8" fill="rgba(15,183,154,0.14)"/>
    <rect x="337" y="132" width="6" height="6" rx="1.8" fill="#0FB79A"/>
    <path d="M339 129.5C339 127.8 340.4 126.4 342 126.4C343.6 126.4 345 127.8 345 129.5" stroke="#0FB79A" stroke-width="1.2" stroke-linecap="round"/>
    <text x="356" y="138" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Robrix</text>
    <text x="340" y="156" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Matrix chat with E2E trust</text>
  </g>
  <g class="app-card app-card-c">
    <rect x="54" y="304" width="120" height="68" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(255,138,76,0.18)"/>
    <circle cx="78" cy="326" r="8" fill="rgba(255,138,76,0.14)"/>
    <path d="M73 326H83M78 321V331" stroke="#D46A2A" stroke-width="1.4" stroke-linecap="round"/>
    <text x="94" y="330" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">MoFA</text>
    <text x="78" y="348" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Composable agent runtime</text>
  </g>
  <g class="app-card app-card-d">
    <rect x="312" y="300" width="116" height="72" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="336" cy="324" r="8" fill="rgba(37,99,235,0.14)"/>
    <path d="M332 320L340 324L332 328" stroke="#2563EB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="352" y="328" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Moxin LLM</text>
    <text x="336" y="346" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Reproducible models and TTS</text>
  </g>

  <circle class="app-pulse" cx="208" cy="182" r="4.5" fill="#2563EB"/>
  <circle class="app-pulse" cx="274" cy="184" r="4.5" fill="#0FB79A" style="animation-delay:-1.7s"/>
  <circle class="app-pulse" cx="208" cy="279" r="4.5" fill="#FF8A4C" style="animation-delay:-3s"/>
  <circle class="app-pulse" cx="274" cy="278" r="4.5" fill="#2563EB" style="animation-delay:-2.3s"/>

  <rect x="54" y="46" width="146" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(37,99,235,0.16)"/>
  <text x="127" y="64" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="700" font-family="Manrope, sans-serif">Application projects</text>
  <rect x="314" y="46" width="118" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(15,183,154,0.16)"/>
  <text x="373" y="64" text-anchor="middle" fill="#0FB79A" font-size="11" font-weight="700" font-family="Manrope, sans-serif">Native product mesh</text>

  <rect x="72" y="414" width="336" height="36" rx="18" fill="rgba(255,255,255,0.72)" stroke="rgba(15,23,42,0.08)"/>
  <circle cx="102" cy="432" r="4" fill="#2563EB"/>
  <circle cx="212" cy="432" r="4" fill="#0FB79A"/>
  <circle cx="324" cy="432" r="4" fill="#FF8A4C"/>
  <text x="115" y="436" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">chat and agents</text>
  <text x="225" y="436" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">matrix and trust</text>
  <text x="337" y="436" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">models and voice</text>
</svg>`;

export const valuesSvgEn = `<svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="values-bg" x1="28" y1="20" x2="444" y2="454" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EEF4FF"/>
      <stop offset="56%" stop-color="#F8FCFF"/>
      <stop offset="100%" stop-color="#FFF4EA"/>
    </linearGradient>
    <linearGradient id="values-line" x1="96" y1="96" x2="388" y2="386" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="52%" stop-color="#0FB79A"/>
      <stop offset="100%" stop-color="#FF8A4C"/>
    </linearGradient>
    <linearGradient id="values-core" x1="148" y1="148" x2="334" y2="336" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#F7FBFF" stop-opacity="0.94"/>
    </linearGradient>
    <radialGradient id="values-blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108 92) rotate(28) scale(170 148)">
      <stop stop-color="#2563EB" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="values-green" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(376 130) rotate(138) scale(162 146)">
      <stop stop-color="#0FB79A" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#0FB79A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="values-orange" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(244 374) rotate(90) scale(170 150)">
      <stop stop-color="#FF8A4C" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF8A4C" stop-opacity="0"/>
    </radialGradient>
    <filter id="values-shadow" x="-24" y="-24" width="528" height="528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="20" stdDeviation="28" flood-color="#2563EB" flood-opacity="0.12"/>
    </filter>
    <style>
      .values-card,
      .values-core-shell {
        transform-box: fill-box;
        transform-origin: center;
        animation: valuesFloat 9s ease-in-out infinite;
      }
      .values-card-b { animation-delay: -1.8s; }
      .values-card-c { animation-delay: -3.6s; }
      .values-dash {
        stroke-dasharray: 6 10;
        animation: valuesDash 18s linear infinite;
      }
      .values-pulse {
        transform-origin: center;
        animation: valuesPulse 4.8s ease-in-out infinite;
      }
      @keyframes valuesFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes valuesDash {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -170; }
      }
      @keyframes valuesPulse {
        0%, 100% { opacity: .32; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.14); }
      }
    </style>
  </defs>
  <rect width="480" height="480" rx="36" fill="url(#values-bg)"/>
  <rect x="18" y="18" width="444" height="444" rx="28" stroke="rgba(37,99,235,0.12)"/>
  <circle cx="108" cy="92" r="126" fill="url(#values-blue)"/>
  <circle cx="376" cy="130" r="118" fill="url(#values-green)"/>
  <circle cx="244" cy="374" r="122" fill="url(#values-orange)"/>

  <g opacity="0.55">
    <circle cx="240" cy="220" r="112" stroke="url(#values-line)" stroke-opacity="0.14"/>
    <circle cx="240" cy="220" r="146" stroke="#2563EB" stroke-opacity="0.08"/>
    <circle cx="240" cy="220" r="80" stroke="#0FB79A" stroke-opacity="0.10"/>
  </g>

  <g stroke-linecap="round">
    <path class="values-dash" d="M164 138C184 156 198 170 212 182" stroke="url(#values-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="values-dash" d="M316 148C294 164 282 175 268 186" stroke="url(#values-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="values-dash" d="M240 322C240 294 240 282 240 270" stroke="url(#values-line)" stroke-width="2" stroke-opacity="0.34"/>
  </g>

  <g filter="url(#values-shadow)">
    <g class="values-core-shell">
      <rect x="146" y="144" width="188" height="156" rx="34" fill="url(#values-core)" stroke="rgba(37,99,235,0.18)"/>
      <rect x="176" y="166" width="128" height="24" rx="12" fill="rgba(37,99,235,0.07)"/>
      <text x="240" y="182" text-anchor="middle" fill="#2563EB" font-size="10" font-weight="700" font-family="Manrope, sans-serif">VALUE SYSTEM</text>
      <text x="240" y="216" text-anchor="middle" fill="#0F172A" font-size="21" font-weight="700" font-family="Manrope, sans-serif">Build trust in the open</text>
      <text x="240" y="236" text-anchor="middle" fill="rgba(15,23,42,0.62)" font-size="10" font-weight="500" font-family="Manrope, sans-serif">Commons, stewardship, and long horizons shape how Upstream operates.</text>
      <rect x="170" y="254" width="44" height="16" rx="8" fill="rgba(37,99,235,0.08)"/>
      <rect x="218" y="254" width="48" height="16" rx="8" fill="rgba(15,183,154,0.10)"/>
      <rect x="270" y="254" width="40" height="16" rx="8" fill="rgba(255,138,76,0.10)"/>
      <text x="192" y="265" text-anchor="middle" fill="#2563EB" font-size="7" font-weight="700" font-family="Manrope, sans-serif">OPEN</text>
      <text x="242" y="265" text-anchor="middle" fill="#0FB79A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">COMMONS</text>
      <text x="290" y="265" text-anchor="middle" fill="#D46A2A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">LONG TERM</text>
    </g>
  </g>

  <g class="values-card values-card-a">
    <rect x="70" y="108" width="114" height="68" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="94" cy="132" r="9" fill="rgba(37,99,235,0.14)"/>
    <path d="M90 132H98M94 128V136" stroke="#2563EB" stroke-width="1.4" stroke-linecap="round"/>
    <text x="112" y="136" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Open collaboration</text>
    <text x="94" y="154" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Share code, learning, and leverage.</text>
  </g>
  <g class="values-card values-card-b">
    <rect x="298" y="116" width="118" height="68" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(15,183,154,0.18)"/>
    <circle cx="322" cy="140" r="9" fill="rgba(15,183,154,0.14)"/>
    <circle cx="322" cy="140" r="3.5" fill="#0FB79A"/>
    <path d="M316 146C319 142 325 142 328 146" stroke="#0FB79A" stroke-width="1.4" stroke-linecap="round"/>
    <text x="340" y="144" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Public goods first</text>
    <text x="322" y="162" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Products should expand shared access.</text>
  </g>
  <g class="values-card values-card-c">
    <rect x="154" y="328" width="172" height="72" rx="24" fill="rgba(255,255,255,0.94)" stroke="rgba(255,138,76,0.18)"/>
    <circle cx="180" cy="352" r="9" fill="rgba(255,138,76,0.14)"/>
    <path d="M176 356L180 348L184 356" stroke="#D46A2A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="198" y="356" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">Sustainable growth</text>
    <text x="180" y="374" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">Business should reinforce the mission.</text>
  </g>

  <circle class="values-pulse" cx="212" cy="182" r="4.5" fill="#2563EB"/>
  <circle class="values-pulse" cx="268" cy="186" r="4.5" fill="#0FB79A" style="animation-delay:-1.8s"/>
  <circle class="values-pulse" cx="240" cy="270" r="4.5" fill="#FF8A4C" style="animation-delay:-3.2s"/>

  <rect x="76" y="46" width="132" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(37,99,235,0.16)"/>
  <text x="142" y="64" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="700" font-family="Manrope, sans-serif">Why Upstream works</text>
  <rect x="284" y="46" width="120" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(15,183,154,0.16)"/>
  <text x="344" y="64" text-anchor="middle" fill="#0FB79A" font-size="11" font-weight="700" font-family="Manrope, sans-serif">trust • commons • patience</text>

  <rect x="82" y="420" width="316" height="30" rx="15" fill="rgba(255,255,255,0.72)" stroke="rgba(15,23,42,0.08)"/>
  <text x="240" y="439" text-anchor="middle" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">Shared stewardship keeps the ecosystem durable.</text>
</svg>`;

export const valuesSvgCn = `<svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="values-cn-bg" x1="28" y1="20" x2="444" y2="454" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EEF4FF"/>
      <stop offset="56%" stop-color="#F8FCFF"/>
      <stop offset="100%" stop-color="#FFF4EA"/>
    </linearGradient>
    <linearGradient id="values-cn-line" x1="96" y1="96" x2="388" y2="386" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="52%" stop-color="#0FB79A"/>
      <stop offset="100%" stop-color="#FF8A4C"/>
    </linearGradient>
    <linearGradient id="values-cn-core" x1="148" y1="148" x2="334" y2="336" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#F7FBFF" stop-opacity="0.94"/>
    </linearGradient>
    <radialGradient id="values-cn-blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108 92) rotate(28) scale(170 148)">
      <stop stop-color="#2563EB" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="values-cn-green" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(376 130) rotate(138) scale(162 146)">
      <stop stop-color="#0FB79A" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#0FB79A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="values-cn-orange" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(244 374) rotate(90) scale(170 150)">
      <stop stop-color="#FF8A4C" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF8A4C" stop-opacity="0"/>
    </radialGradient>
    <filter id="values-cn-shadow" x="-24" y="-24" width="528" height="528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="20" stdDeviation="28" flood-color="#2563EB" flood-opacity="0.12"/>
    </filter>
    <style>
      .values-cn-card,
      .values-cn-core-shell {
        transform-box: fill-box;
        transform-origin: center;
        animation: valuesCnFloat 9s ease-in-out infinite;
      }
      .values-cn-card-b { animation-delay: -1.8s; }
      .values-cn-card-c { animation-delay: -3.6s; }
      .values-cn-dash {
        stroke-dasharray: 6 10;
        animation: valuesCnDash 18s linear infinite;
      }
      .values-cn-pulse {
        transform-origin: center;
        animation: valuesCnPulse 4.8s ease-in-out infinite;
      }
      @keyframes valuesCnFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes valuesCnDash {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -170; }
      }
      @keyframes valuesCnPulse {
        0%, 100% { opacity: .32; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.14); }
      }
    </style>
  </defs>
  <rect width="480" height="480" rx="36" fill="url(#values-cn-bg)"/>
  <rect x="18" y="18" width="444" height="444" rx="28" stroke="rgba(37,99,235,0.12)"/>
  <circle cx="108" cy="92" r="126" fill="url(#values-cn-blue)"/>
  <circle cx="376" cy="130" r="118" fill="url(#values-cn-green)"/>
  <circle cx="244" cy="374" r="122" fill="url(#values-cn-orange)"/>

  <g opacity="0.55">
    <circle cx="240" cy="220" r="112" stroke="url(#values-cn-line)" stroke-opacity="0.14"/>
    <circle cx="240" cy="220" r="146" stroke="#2563EB" stroke-opacity="0.08"/>
    <circle cx="240" cy="220" r="80" stroke="#0FB79A" stroke-opacity="0.10"/>
  </g>

  <g stroke-linecap="round">
    <path class="values-cn-dash" d="M164 138C184 156 198 170 212 182" stroke="url(#values-cn-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="values-cn-dash" d="M316 148C294 164 282 175 268 186" stroke="url(#values-cn-line)" stroke-width="2" stroke-opacity="0.34"/>
    <path class="values-cn-dash" d="M240 322C240 294 240 282 240 270" stroke="url(#values-cn-line)" stroke-width="2" stroke-opacity="0.34"/>
  </g>

  <g filter="url(#values-cn-shadow)">
    <g class="values-cn-core-shell">
      <rect x="146" y="144" width="188" height="156" rx="34" fill="url(#values-cn-core)" stroke="rgba(37,99,235,0.18)"/>
      <rect x="176" y="166" width="128" height="24" rx="12" fill="rgba(37,99,235,0.07)"/>
      <text x="240" y="182" text-anchor="middle" fill="#2563EB" font-size="10" font-weight="700" font-family="Manrope, sans-serif">价值系统</text>
      <text x="240" y="216" text-anchor="middle" fill="#0F172A" font-size="21" font-weight="700" font-family="Manrope, sans-serif">以开放构建长期信任</text>
      <text x="240" y="236" text-anchor="middle" fill="rgba(15,23,42,0.62)" font-size="10" font-weight="500" font-family="Manrope, sans-serif">公域、共治与长期主义决定了 Upstream 的运作方式。</text>
      <rect x="170" y="254" width="44" height="16" rx="8" fill="rgba(37,99,235,0.08)"/>
      <rect x="218" y="254" width="48" height="16" rx="8" fill="rgba(15,183,154,0.10)"/>
      <rect x="270" y="254" width="40" height="16" rx="8" fill="rgba(255,138,76,0.10)"/>
      <text x="192" y="265" text-anchor="middle" fill="#2563EB" font-size="7" font-weight="700" font-family="Manrope, sans-serif">开放</text>
      <text x="242" y="265" text-anchor="middle" fill="#0FB79A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">公域</text>
      <text x="290" y="265" text-anchor="middle" fill="#D46A2A" font-size="7" font-weight="700" font-family="Manrope, sans-serif">长期</text>
    </g>
  </g>

  <g class="values-cn-card values-cn-card-a">
    <rect x="70" y="108" width="114" height="68" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(37,99,235,0.18)"/>
    <circle cx="94" cy="132" r="9" fill="rgba(37,99,235,0.14)"/>
    <path d="M90 132H98M94 128V136" stroke="#2563EB" stroke-width="1.4" stroke-linecap="round"/>
    <text x="112" y="136" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">开放协作</text>
    <text x="94" y="154" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">共享代码、知识与杠杆。</text>
  </g>
  <g class="values-cn-card values-cn-card-b">
    <rect x="298" y="116" width="118" height="68" rx="22" fill="rgba(255,255,255,0.94)" stroke="rgba(15,183,154,0.18)"/>
    <circle cx="322" cy="140" r="9" fill="rgba(15,183,154,0.14)"/>
    <circle cx="322" cy="140" r="3.5" fill="#0FB79A"/>
    <path d="M316 146C319 142 325 142 328 146" stroke="#0FB79A" stroke-width="1.4" stroke-linecap="round"/>
    <text x="340" y="144" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">公共产品优先</text>
    <text x="322" y="162" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">让更多人共享技术价值。</text>
  </g>
  <g class="values-cn-card values-cn-card-c">
    <rect x="154" y="328" width="172" height="72" rx="24" fill="rgba(255,255,255,0.94)" stroke="rgba(255,138,76,0.18)"/>
    <circle cx="180" cy="352" r="9" fill="rgba(255,138,76,0.14)"/>
    <path d="M176 356L180 348L184 356" stroke="#D46A2A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="198" y="356" fill="#0F172A" font-size="13" font-weight="700" font-family="Manrope, sans-serif">可持续增长</text>
    <text x="180" y="374" fill="rgba(15,23,42,0.55)" font-size="9" font-weight="600" font-family="Manrope, sans-serif">让商业模式反哺项目使命。</text>
  </g>

  <circle class="values-cn-pulse" cx="212" cy="182" r="4.5" fill="#2563EB"/>
  <circle class="values-cn-pulse" cx="268" cy="186" r="4.5" fill="#0FB79A" style="animation-delay:-1.8s"/>
  <circle class="values-cn-pulse" cx="240" cy="270" r="4.5" fill="#FF8A4C" style="animation-delay:-3.2s"/>

  <rect x="76" y="46" width="132" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(37,99,235,0.16)"/>
  <text x="142" y="64" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="700" font-family="Manrope, sans-serif">为什么 Upstream 有效</text>
  <rect x="300" y="46" width="104" height="28" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(15,183,154,0.16)"/>
  <text x="352" y="64" text-anchor="middle" fill="#0FB79A" font-size="11" font-weight="700" font-family="Manrope, sans-serif">信任 • 公域 • 长期主义</text>

  <rect x="82" y="420" width="316" height="30" rx="15" fill="rgba(255,255,255,0.72)" stroke="rgba(15,23,42,0.08)"/>
  <text x="240" y="439" text-anchor="middle" fill="rgba(15,23,42,0.68)" font-size="10" font-weight="600" font-family="Manrope, sans-serif">共享式治理让生态真正具备长期生命力。</text>
</svg>`;
