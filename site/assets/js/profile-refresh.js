(()=>{
  const q=s=>document.querySelector(s);
  const about=q('#about');
  about.querySelector('.section-head').innerHTML=`<div><div class="kicker">01 / PROFILE</div><h2>About Me.</h2></div><p class="section-lede">Research experience, academic foundations, and hands-on robotics engineering — one connected journey.</p>`;
  const oldPaths=about.querySelector('.pathways');
  if(oldPaths)oldPaths.remove();
  about.querySelector('.about-grid').outerHTML=`
    <div class="profile-layout">
      <article class="profile-story">
        <div class="profile-intro-with-photo"><img class="profile-photo" src="https://raw.githubusercontent.com/NhanDoremon/TruongNgheNhan/master/assets/img/IMG_8402_CP.JPG" alt="Portrait of Nghe-Nhan Truong"><div><div class="profile-overline">NGHE-NHAN TRUONG <span>·</span> AI RESEARCH ENGINEER</div>
        <p class="profile-lead">My work connects academic computer vision research with practical robotics R&amp;D.</p>
        <p>At Sejong University's Imaging and Intelligent Systems Laboratory, I researched visible–thermal registration, multimodal fusion, and video surveillance. Today, I develop robot perception and embodied AI systems, with interests in VLA, 6D object pose, robot manipulation, and real-time inference.</p></div></div>
        <div class="profile-education"><div class="mini-label">Education timeline</div><div class="timeline"><div class="timeline-item"><strong>M.S. · Computer Science &amp; Engineering</strong><small>Sejong University · Sep 2023 – Aug 2025</small></div><div class="timeline-item"><strong>B.E. · Electronics &amp; Communications Engineering Technology</strong><small>HCMUTE · 2018 – 2022</small></div></div></div>
        <div class="profile-paths" aria-label="Explore portfolio"><span class="profile-path-caption">EXPLORE MY WORK</span><a href="#academic">Academic Research <span aria-hidden="true">↗</span></a><a href="#applied">Applied Robotics R&amp;D <span aria-hidden="true">↗</span></a><a href="#publications">Publications <span class="link-count">All · 9</span> <span aria-hidden="true">↗</span></a><a href="#courses">Courses <span class="link-count">2</span> <span aria-hidden="true">↗</span></a></div>
      </article>
      <aside class="profile-focus" id="research"><div class="mini-label">Research interests</div><h3>What I work on</h3><ul><li><span>01</span><div><strong>Embodied AI &amp; Robot Learning</strong><small>VLA, demonstrations, manipulation</small></div></li><li><span>02</span><div><strong>3D Computer Vision</strong><small>6D pose, RGB-D, geometric perception</small></div></li><li><span>03</span><div><strong>Multimodal Vision</strong><small>Visible–thermal imaging, registration, fusion</small></div></li><li><span>04</span><div><strong>Robotics Systems</strong><small>Teleoperation, edge inference, integration</small></div></li></ul></aside>
    </div>`;

  const exp=q('#experience');
  exp.querySelector('.section-head').innerHTML=`<div><div class="kicker">PROFESSIONAL JOURNEY</div><h2>Professional Experience.</h2></div><p class="section-lede">From university research labs to the engineering of physical robot systems.</p>`;
  exp.querySelector('.about-grid .panel:first-child .mini-label').textContent='Experience timeline';
  exp.querySelector('.timeline').innerHTML=`<div class="timeline-item"><strong>AI Research Engineer · Yuil Robotics</strong><small>Sep 2025 – Present · South Korea</small><p>Embodied AI, VLA adaptation, 3D robot perception, pose estimation, and system integration.</p></div><div class="timeline-item"><strong>Research Assistant / Lab Leader · Sejong University IISLAB</strong><small>Sep 2023 – Sep 2025 · South Korea</small><p>Multimodal image registration, visible–thermal fusion, facial disguise detection, and surveillance research.</p></div><div class="timeline-item"><strong>Research Assistant · HCMUTE ISLAB</strong><small>Jan 2020 – Jan 2023 · Vietnam</small><p>Thermal/infrared fusion, sign-language systems, and applied computer vision research.</p></div>`;
  exp.querySelector('.about-grid .panel:last-child .mini-label').textContent='Technical skills & languages';
  exp.querySelector('.about-grid .panel:last-child').insertAdjacentHTML('beforeend',`<div class="language-snapshot"><div class="mini-label">Languages</div><div><b>Vietnamese</b><span>Native</span></div><div><b>English</b><span>IELTS · score to be added</span></div><div><b>Korean</b><span>Intermediate · self-assessed</span></div></div>`);

  const courses=q('#courses');
  courses.querySelector('.section-head').innerHTML=`<div><div class="kicker">ADDITIONAL EXPERIENCE</div><h2>Teaching &amp; Course Resources.</h2></div><p class="course-intro">Selected undergraduate courses I supported as a teaching assistant.</p>`;
  courses.querySelectorAll('.course-card').forEach((card,i)=>{
    card.insertAdjacentHTML('afterbegin',`<div class="course-thumb ${i?'fpga':'micro'}" aria-hidden="true"><span class="course-device">${i?'FPGA':'μC'}</span><span>${i?'Zybo Z7-20':'EFM8BB1'}</span></div>`);
  });
})();
