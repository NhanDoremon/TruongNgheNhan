(() => {
  const experience = document.getElementById('experience');
  if (experience && !document.getElementById('courses')) {
    experience.insertAdjacentHTML('afterend', `
      <section class="section alt" id="courses">
        <div class="container">
          <div class="section-head">
            <div>
              <div class="kicker">Teaching & Learning Resources</div>
              <h2>Teaching & Course Resources.</h2>
            </div>
            <p class="course-intro">Practical teaching resources from my work as a Teaching Assistant for Prof. Seong G. Kong at Sejong University, covering embedded programming and FPGA development.</p>
          </div>
          <div class="course-grid">
            <article class="course-card">
              <div class="course-label">01 / EMBEDDED SYSTEMS</div>
              <h3>Embedded Computing with EFM8BB1</h3>
              <p>Hands-on undergraduate course materials for microcontroller-based embedded computing and practical hardware/software exercises.</p>
              <div class="course-meta"><span>2025</span><span>Undergraduate course</span><span>Teaching Assistant</span></div>
              <details><summary>Teaching contribution +</summary><p>Curriculum organization, practical demo code, coursework and learning support, as described in my CV.</p></details>
              <a class="course-link" href="https://drive.google.com/drive/folders/1dgZNDPPxxyE8mgnEuHqPSlU9MouHId0v?usp=sharing" target="_blank" rel="noopener">Open course materials ↗</a>
            </article>
            <article class="course-card">
              <div class="course-label">02 / DIGITAL DESIGN & FPGA</div>
              <h3>Advanced FPGA with Zybo Z7-20</h3>
              <p>Applied digital design and FPGA development resources using the Zybo Z7-20 platform.</p>
              <div class="course-meta"><span>2024</span><span>Undergraduate course</span><span>Teaching Assistant</span></div>
              <details><summary>Teaching contribution +</summary><p>Structured lab material, demonstration code and student assignment support.</p></details>
              <a class="course-link" href="https://drive.google.com/drive/folders/1DSuoWEEIt_kh3RfwFzBdbh2PdPveUuC_?usp=sharing" target="_blank" rel="noopener">Open course materials ↗</a>
            </article>
          </div>
        </div>
      </section>
    `);
  }

  // Deduplicate and ensure exactly one clean Courses link in desktop nav
  // Sync existing #courses section in DOM
  const courseSec = document.getElementById('courses');
  if (courseSec) {
    const h2 = courseSec.querySelector('h2');
    if (h2) h2.textContent = 'Teaching & Course Resources.';
    const intro = courseSec.querySelector('.course-intro');
    if (intro) intro.textContent = 'Practical teaching resources from my work as a Teaching Assistant for Prof. Seong G. Kong at Sejong University, covering embedded programming and FPGA development.';
  }

  const links = document.querySelector('.nav .links');
  if (links) {
    const coursesLinks = [...links.querySelectorAll('a')].filter(a => (a.getAttribute('href') || '').includes('courses') || a.textContent.trim() === 'Courses');
    if (coursesLinks.length > 1) {
      for (let i = 1; i < coursesLinks.length; i++) coursesLinks[i].remove();
    } else if (coursesLinks.length === 0) {
      const a = document.createElement('a');
      a.href = '#courses';
      a.textContent = 'Courses';
      const contact = links.querySelector('a[href*="contact"]');
      if (contact) links.insertBefore(a, contact);
      else links.appendChild(a);
    }
  }

  // Deduplicate and ensure exactly one clean Courses link in mobile nav
  const mobile = document.querySelector('.mobile-links');
  if (mobile) {
    const mCoursesLinks = [...mobile.querySelectorAll('a')].filter(a => (a.getAttribute('href') || '').includes('courses') || a.textContent.trim() === 'Courses');
    if (mCoursesLinks.length > 1) {
      for (let i = 1; i < mCoursesLinks.length; i++) mCoursesLinks[i].remove();
    } else if (mCoursesLinks.length === 0) {
      const a = document.createElement('a');
      a.href = '#courses';
      a.textContent = 'Courses';
      const contact = mobile.querySelector('a[href*="contact"]');
      if (contact) mobile.insertBefore(a, contact);
      else mobile.appendChild(a);
    }
  }
})();
