(() => {
  const projects = [
    { id: 'vla', group: 'industry', title: 'Vision-Language-Action (VLA) for Robotic Manipulation', area: 'PHYSICAL AI & ROBOT LEARNING', description: 'From LeRobot foundation policies to industrial 6-DoF cobots with VR teleoperation and 7-DoF bimanual coordination for CES 2027.', tags: ['Physical AI', 'LeRobot', 'VR Teleoperation', 'CES 2027'], image: 'assets/images/vla/Dual Arm 7DoF.png', symbol: 'V', label: 'VLA / ROBOTICS' },
    { id: 'pose', group: 'industry', title: '3D Vision & 6D Object Pose Estimation', area: 'ROBOT PERCEPTION & MANIPULATION · YUIL ROBOTICS', description: 'Real-time 6D pose tracking, autonomous vision-feedback hand–eye calibration (≤2mm error), and mobile dual-arm manipulation.', tags: ['6D Pose', 'Hand-Eye Calibration', 'AMR & Dual-Arm', 'Yuil Robotics'], image: 'assets/images/6D_Pose/6D_Pose_cover.png', symbol: '6', label: '6D POSE / PERCEPTION' },
    { id: 'rehab', group: 'industry', title: 'Flexible Hand Rehabilitation System', area: 'MECHATRONICS / REHABILITATION ROBOTICS', description: 'Motorized XY-axis rehabilitation platform with precision position feedback and programmable movement profiles.', tags: ['Mechatronics', 'Stepper Motors', 'Encoders', 'Hardware'], image: 'assets/images/Hardware_Flatform.JPG', symbol: 'R', label: 'REHAB / MECHATRONICS' },
    { id: 'facial', group: 'academic', title: 'Multimodal Facial Disguise Detection', area: 'MULTIMODAL COMPUTER VISION', description: 'Visible–thermal registration, image fusion and transformer-based disguise detection.', tags: ['Image Fusion', 'Registration', 'Transformer'], image: 'assets/images/IIS_datasets_demo.jpg', symbol: 'F', label: 'VISIBLE / THERMAL' },
    { id: 'signvn', group: 'academic', title: 'SignVN: Intelligent Sign Language Teaching Platform', area: 'HUMAN-CENTERED AI & WEB SYSTEMS', description: 'Interactive web platform for Vietnamese Sign Language with 3D avatar instruction, real-time webcam evaluation, and Agentic RAG assistant.', tags: ['3D Avatar (TKR-HMR)', 'Distillation', 'Agentic RAG'], image: 'assets/images/vsl_website.png', symbol: 'V', label: 'WEB & CLOUD AI' },
    { id: 'sign-arm', group: 'academic', title: 'Sign Language Teaching System with Interactive Prosthetic Arm', area: 'ROBOTICS & EMBEDDED SYSTEMS', description: 'Computer-vision gesture recognition driving a custom 3D-printed electromechanical prosthetic arm for classroom demonstration.', tags: ['Prosthetic Arm', 'MediaPipe', 'YOLO + GRU'], image: 'assets/images/hand_sign.png', symbol: 'P', label: 'PROSTHETIC ARM' },
    { id: 'abnormal', group: 'academic', title: 'Abnormal Behavior Detection on CCTV', area: 'VIDEO UNDERSTANDING & SURVEILLANCE', description: 'Deep learning for multi-target tracking and spatio-temporal event recognition certified against South Korea KISA standards.', tags: ['IITP / KISA Standard', 'YOLOv8 + DeepSORT', 'ViTPose (17 Keypoints)'], image: 'assets/images/cctv.jpg', symbol: 'A', label: 'KISA CCTV' },
    { id: 'smoke', group: 'academic', title: 'Human Detection in Heavy Smoke Scenarios', area: 'THERMAL / INFRARED SENSOR FUSION', description: 'Multimodal IR & Thermal sensor fusion on NVIDIA Jetson Nano for search-and-rescue drone airborne perception in fires.', tags: ['IEEE ICSSE 2023', 'Sensor Fusion (IR + LWIR)', 'Jetson Nano Edge AI'], image: 'assets/images/Human_insmoke.jpg', symbol: 'T', label: 'IR / THERMAL' }
  ];

  window.PORTFOLIO_PROJECTS = projects;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function card(p) {
    return `<article class="portfolio-card"><div class="portfolio-thumbnail"><div class="graphic" aria-hidden="true">${esc(p.symbol)}</div>${p.image ? `<img src="${p.image}" alt="${esc(p.title)} thumbnail" loading="lazy" onerror="this.remove()">` : ''}<div class="thumb-label">${esc(p.label)}</div></div><div class="portfolio-body"><div class="area">${esc(p.area)}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="portfolio-tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div><a href="project.html?id=${p.id}" aria-label="View ${esc(p.title)} details">View project ↗</a></div></article>`;
  }

  const academic = document.querySelector('#academic-grid');
  if (academic) {
    academic.className = 'portfolio-projects';
    academic.innerHTML = projects.filter(p => p.group === 'academic').map(card).join('');
  }

  const applied = document.querySelector('#track-grid');
  if (applied) {
    applied.className = 'portfolio-projects';
    applied.innerHTML = projects.filter(p => p.group === 'industry').map(card).join('');
  }

  // 1. Academic Research Section
  const acadSec = document.querySelector('#academic');
  if (acadSec) {
    const k = acadSec.querySelector('.kicker'); if (k) k.textContent = 'Academic Research';
    const h = acadSec.querySelector('h2'); if (h) h.textContent = 'Academic Research.';
    const lede = acadSec.querySelector('.section-lede');
    if (lede) {
      lede.textContent = 'Visualization comes first, theory follows. My research is directly driven by real-world gaps — identifying practical bottlenecks first, then crafting principled algorithms to solve them smartly.';
    }
    const intro = acadSec.querySelector('.academic-intro');
    if (intro) intro.remove();
  }

  // 2. Applied R&D Section
  const appliedSec = document.querySelector('#applied');
  if (appliedSec) {
    const k = appliedSec.querySelector('.kicker'); if (k) k.textContent = '02 / Applied R&D';
    const h = appliedSec.querySelector('h2'); if (h) h.textContent = 'Applied R&D.';
    const lede = appliedSec.querySelector('.section-lede');
    if (lede) {
      lede.textContent = 'Give it existence first, and it will shine thereafter. Algorithms only truly matter when they step out of papers and breathe life into physical machines.';
    }
  }

  const projSec = document.querySelector('#projects');
  if (projSec) projSec.style.display = 'none';

  // Publications Filter and Counts
  const pubSection = document.querySelector('#publications');
  if (pubSection) {
    const old = pubSection.querySelector('.pub-tools');
    if (old) old.remove();
    const pubH2 = pubSection.querySelector('h2');
    if (pubH2) pubH2.textContent = 'Publications';

    let bar = pubSection.querySelector('.pub-filterbar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'pub-filterbar';
      bar.innerHTML = `<div class="pub-field"><label for="ptype">Publication type</label><select id="ptype"><option value="all">All types</option><option value="conference">Conference</option><option value="chapter">Book chapter</option><option value="journal">Journal manuscript</option></select></div><div class="pub-field"><label for="prole">Author role</label><select id="prole"><option value="all">All roles</option><option value="first">First author</option><option value="cofirst">Co-first author</option><option value="coauthor">Co-author</option></select></div><div class="pub-field"><label for="pstatus">Status</label><select id="pstatus"><option value="all">All statuses</option><option value="published">Published</option><option value="accepted">Accepted</option><option value="manuscript">In preparation</option></select></div>`;
      const sHead = pubSection.querySelector('.section-head');
      if (sHead) sHead.append(bar);
    }

    const pubs = [...pubSection.querySelectorAll('.actual-pub')];

    let count = pubSection.querySelector('.pub-count');
    if (!count) {
      count = document.createElement('p');
      count.className = 'pub-count';
      pubSection.querySelector('.container').insertBefore(count, pubSection.querySelector('#actual-pubs'));
    }

    function applyFilter() {
      const type = document.querySelector('#ptype')?.value || 'all';
      const role = document.querySelector('#prole')?.value || 'all';
      const status = document.querySelector('#pstatus')?.value || 'all';
      let visible = 0;
      pubs.forEach(p => {
        const pType = p.dataset.type || '';
        const pRole = p.dataset.role || '';
        const pStatus = p.dataset.status || '';

        const matchType = type === 'all' || pType === type;
        const matchRole = role === 'all' || pRole === role;
        const matchStatus = status === 'all' || pStatus === status;
        const show = matchType && matchRole && matchStatus;
        p.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (count) count.textContent = `Showing ${visible} of ${pubs.length} publications and manuscripts`;
    }

    ['#ptype', '#prole', '#pstatus'].forEach(sel => {
      document.querySelector(sel)?.addEventListener('change', applyFilter);
    });
    applyFilter();
  }
})();
