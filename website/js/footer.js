// Shared Footer Component
// Generates the site footer

function renderFooter() {
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
  const prefix = isIndex ? 'pages/' : '';

  return `
    <footer class="site-footer">
      <div class="footer-content">
        <nav class="footer-nav">
          <div class="footer-nav-section">
            <h4>Framework</h4>
            <a href="${prefix}what-is-mn.html">Overview</a>
            <a href="${prefix}nine-natures.html">The Nine Natures</a>
            <a href="${prefix}ten-intelligences.html">The Ten Intelligences</a>
          </div>
          <div class="footer-nav-section">
            <h4>MN Mapper</h4>
            <a href="${prefix}mn-mapper.html">What Is the MN Mapper</a>
            <a href="${prefix}mn-mapper-theory.html">Theory</a>
            <a href="${prefix}mn-mapper-measures.html">What It Measures</a>
          </div>
          <div class="footer-nav-section">
            <h4>Training</h4>
            <a href="${prefix}training.html">Overview</a>
            <a href="${prefix}training-curriculum.html">What You'll Learn</a>
            <a href="${prefix}training-schedule.html">Schedule</a>
          </div>
          <div class="footer-nav-section">
            <h4>For Professionals</h4>
            <a href="${prefix}affiliation.html">Affiliation Program</a>
            <a href="${prefix}directory.html">Practitioner Directory</a>
            <a href="${prefix}posture.html">Posture</a>
            <a href="${prefix}affiliation-faq.html">FAQ</a>
          </div>
          <div class="footer-nav-section">
            <h4>About</h4>
            <a href="${prefix}about.html">Steven Rudolph</a>
            <a href="${prefix}story.html">The Story of MN</a>
            <a href="${prefix}philosophy.html">Philosophy & Limits</a>
          </div>
          <div class="footer-nav-section">
            <h4>Connect</h4>
            <a href="${prefix}contact.html">Contact</a>
          </div>
        </nav>
        <div class="footer-legal">
          © 2026 Multiple Natures
          <a href="${prefix}privacy.html">Privacy Policy</a>
          <a href="${prefix}terms.html">Terms of Use</a>
        </div>
      </div>
    </footer>
  `;
}

// Auto-inject footer
document.addEventListener('DOMContentLoaded', function() {
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = renderFooter();
  }
});
