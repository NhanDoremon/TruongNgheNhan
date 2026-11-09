(() => {
  const q = s => document.querySelector(s);
  const portrait = 'assets/images/IMG_8402_CP.JPG';

  // 1. Hero Section Setup
  const heroInner = q('.hero .hero-inner') || q('.identity-hero');
  if (heroInner) {
    heroInner.className = 'container identity-hero';
    heroInner.innerHTML = `
      <div>
        <div class="eyebrow">NGHE-NHAN TRUONG / AI RESEARCHER &amp; ENGINEER</div>
        <h1>Nghe-Nhan<br><span>Truong.</span></h1>
        <div class="identity-role">AI Researcher <span style="color:#7ecac3">&amp;</span> Engineer</div>
        <p class="identity-summary" style="font-style: italic; font-size: 15px; line-height: 1.6; margin: 18px 0 22px;">
          "Call to me and I will answer you and tell you great and unsearchable things you do not know." — Jeremiah 33:3
        </p>
        <div class="identity-meta">
          <span>M.S. Computer Science &amp; Engineering</span>
          <span>Sejong University · 2025</span>
          <span>Yuil Robotics · South Korea</span>
          <span>Physical AI Researcher</span>
        </div>
        <div class="actions">
          <a class="btn btn-primary" href="#about">Explore Me ↓</a>
          <a class="btn btn-outline" href="#contact">Contact Me ↗</a>
        </div>
      </div>
      <div class="identity-portrait">
        <img src="${portrait}" alt="Nghe-Nhan Truong portrait">
        <div class="identity-mark">RESEARCH<br>×<br>ENGINEERING</div>
        <div class="photolabel">Nghe-Nhan Truong · M.S.</div>
      </div>
    `;
  }

  // 2. Hero Footer: Core Tech vs Target Applications
  const footContainer = q('.hero-foot .container');
  if (footContainer) {
    footContainer.innerHTML = `
      <span><strong>Research Interests</strong> &nbsp; Computer Vision · Deep Learning · Physical AI</span>
      <span><strong>Target Applications</strong> &nbsp; Robotics · CCTV Surveillance · Drones · Human-Computer Interaction</span>
    `;
  }

  // 3. Clean up navigation links to match new unified naming
  document.querySelectorAll('.nav .links a, .mobile-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#tracks' || href === '#applied' || href === 'index.html#applied') {
      a.href = 'index.html#applied';
      a.textContent = 'Applied R&D';
    } else if (href === '#academic' || href === 'index.html#academic') {
      a.textContent = 'Academic';
    } else if (href === '#projects' || href === 'index.html#projects') {
      a.style.display = 'none';
    }
  });
})();
