(() => {
  const q = s => document.querySelector(s);
  const about = q('#about');
  if (about) {
    const sHead = about.querySelector('.section-head');
    if (sHead) {
      sHead.innerHTML = `<div><div class="kicker">01 / PROFILE</div><h2>About Me.</h2></div><p class="section-lede">Research experience, academic foundations, and hands-on robotics engineering — one connected journey.</p>`;
    }
    const oldPaths = about.querySelector('.pathways');
    if (oldPaths) oldPaths.remove();

    const targetGrid = about.querySelector('.about-grid') || about.querySelector('.profile-layout');
    if (targetGrid) {
      targetGrid.outerHTML = `
        <div class="profile-layout">
          <article class="profile-story">
            <div class="profile-intro-with-photo">
              <img class="profile-photo" src="assets/images/Nhan.jpg" alt="Portrait of Nghe-Nhan Truong">
              <div>
                <div class="profile-overline">NGHE-NHAN TRUONG <span>·</span> AI RESEARCHER &amp; ENGINEER</div>
                <p>I believe every breakthrough begins with imagination, and the most intuitive way to imagine is through visual representations. That spark is what drove me into Computer Vision and its transformative real-world applications.</p>
                <p>Currently, I serve as an <strong>AI Research Engineer – Professional Manager (PM)</strong> at <strong>Yuil Robotics</strong>, where I shape the vision technical roadmap and specialize in adapting and deploying <strong>Foundation Models on NVIDIA edge devices</strong> for real-time robotic perception.</p>
                <p>I completed my Master’s degree in Computer Science at Sejong University and my Bachelor’s in Engineering at HCMUTE. Driven by a deep curiosity for how machines perceive and interact with three-dimensional space, <strong>I am actively seeking prospective Ph.D. opportunities in 3D Computer Vision and Physical AI</strong>.</p>
                <p class="profile-motto" style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed var(--line); font-style: italic; color: var(--muted); font-size: 13.5px;">
                  Outside the lab, my life philosophy is simple: <strong>Learning is a lifelong journey, and the happiness is in the journey, not the destination.</strong>
                </p>
              </div>
            </div>
            <div class="profile-education">
              <div class="mini-label">Education timeline</div>
              <div class="timeline">
                <div class="timeline-item">
                  <strong>M.S. · Computer Science &amp; Engineering</strong>
                  <small>Sejong University · Sep 2023 – Aug 2025</small>
                </div>
                <div class="timeline-item">
                  <strong>B.E. · Electronics &amp; Communications Engineering Technology</strong>
                  <small>HCMUTE · 2018 – 2022</small>
                </div>
              </div>
            </div>
            <div class="profile-paths" aria-label="Explore portfolio">
              <span class="profile-path-caption">EXPLORE MY WORK</span>
              <a href="#applied">Applied R&amp;D <span aria-hidden="true">↗</span></a>
              <a href="#academic">Academic Research <span aria-hidden="true">↗</span></a>
              <a href="#publications">Publications <span class="link-count">10</span> <span aria-hidden="true">↗</span></a>
              <a href="#courses">Courses <span class="link-count">2</span> <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <aside class="profile-focus" id="research">
            <div class="mini-label">Research interests</div>
            <h3>What I work on</h3>
            <ul>
              <li>
                <span>01</span>
                <div>
                  <strong>Embodied AI &amp; Robot Learning</strong>
                  <small>VLA (π₀.₅), demonstration data, manipulation policies</small>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>3D Computer Vision</strong>
                  <small>6D pose, FoundationPose, geometric perception</small>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Multimodal Vision</strong>
                  <small>Visible–thermal registration, physics-informed fusion</small>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <strong>Robotics Systems &amp; Edge AI</strong>
                  <small>NVIDIA Jetson AGX Orin, Zenoh pub-sub, TensorRT</small>
                </div>
              </li>
            </ul>
          </aside>
        </div>`;
    }
  }

  // Experience Section
  const exp = q('#experience');
  if (exp) {
    const sHead = exp.querySelector('.section-head');
    if (sHead) {
      sHead.innerHTML = `<div><div class="kicker">PROFESSIONAL JOURNEY</div><h2>Professional Experience.</h2></div><p class="section-lede">From academic research laboratories to building production-grade physical robot perception pipelines.</p>`;
    }
    const leftPanel = exp.querySelector('.about-grid .panel:first-child');
    if (leftPanel) {
      const ml = leftPanel.querySelector('.mini-label');
      if (ml) ml.textContent = 'Experience timeline';
      const tl = leftPanel.querySelector('.timeline');
      if (tl) {
        tl.innerHTML = `
          <div class="timeline-item">
            <strong>AI Research Engineer – Professional Manager (PM) · Yuil Robotics</strong>
            <small>Sep 2025 – Present · South Korea</small>
            <p>Leading the Vision team's technical roadmap. Optimizing Foundation Models for edge devices (6D Pose at 20 FPS on Jetson AGX Orin), fine-tuning VLA (π₀.₅) for dual-arm setups, sim-to-real transfer, and Zenoh-based robotics architecture.</p>
          </div>
          <div class="timeline-item">
            <strong>Research Assistant / Lab Leader · Sejong University (IISLAB)</strong>
            <small>Sep 2023 – Sep 2025 · South Korea</small>
            <p>IITP-funded research on deep learning video surveillance. Physics-informed visible–thermal image registration, multimodal Transformer fusion for facial disguise detection, and YOLOv8 sequential action recognition.</p>
          </div>
          <div class="timeline-item">
            <strong>Research Assistant · HCMUTE (Intelligent System Lab)</strong>
            <small>Jan 2020 – Jan 2023 · Vietnam</small>
            <p>Infrared/thermal multimodal sensor fusion for human detection in smoke scenarios (Jetson Nano). Developed Vietnamese sign language recognition pipeline and custom electromechanical prosthetic arm.</p>
          </div>
        `;
      }
    }
    const rightPanel = exp.querySelector('.about-grid .panel:last-child');
    if (rightPanel) {
      const ml = rightPanel.querySelector('.mini-label');
      if (ml) ml.textContent = 'Technical skills & languages';
      const oldLang = rightPanel.querySelector('.language-snapshot');
      if (oldLang) oldLang.remove();
      rightPanel.insertAdjacentHTML('beforeend', `
        <div class="language-snapshot">
          <div class="mini-label" style="margin-top: 18px;">Languages</div>
          <div><b>Vietnamese</b><span>Native</span></div>
          <div><b>English</b><span>IELTS 6.0</span></div>
          <div><b>Korean</b><span>Intermediate</span></div>
        </div>
      `);
    }
  }
})();
