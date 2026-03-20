// Shared Header Component
// Generates the site header with navigation

function renderHeader(currentPage = '') {
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
  const prefix = isIndex ? 'pages/' : '';

  // Determine active states
  const isWhatIsMN = ['what-is-mn', 'nine-natures', 'ten-intelligences', 'mi-and-mn'].some(p => currentPage.includes(p));
  const isMapper = currentPage.includes('mn-mapper');
  const isTraining = currentPage.includes('training');
  const isAffiliation = ['affiliation', 'certification-vs-affiliation', 'posture'].some(p => currentPage.includes(p)) && !currentPage.includes('non-affiliated');
  const isDirectory = currentPage === 'directory';
  const isAbout = ['about', 'story', 'philosophy', 'books'].some(p => currentPage.includes(p));
  const isContact = currentPage === 'contact';

  const logoHref = isIndex ? 'index.html' : '../index.html';
  const logoSrc = isIndex ? 'images/mn-logo.png' : '../images/mn-logo.png';

  return `
    <header class="site-header">
      <div class="content-wrapper">
        <a href="${logoHref}" class="site-logo"><img src="${logoSrc}" alt="Multiple Natures"></a>
        <nav class="site-nav">
          <div class="nav-dropdown">
            <a href="${prefix}what-is-mn.html" class="nav-dropdown-trigger${isWhatIsMN ? ' active' : ''}">What Is MN</a>
            <div class="nav-dropdown-menu">
              <a href="${prefix}what-is-mn.html">Overview</a>
              <a href="${prefix}nine-natures.html">The Nine Natures</a>
              <a href="${prefix}ten-intelligences.html">The Ten Intelligences</a>
              <a href="${prefix}mi-and-mn.html">How MI + MN Work Together</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <a href="${prefix}mn-mapper.html" class="nav-dropdown-trigger${isMapper ? ' active' : ''}">MN Mapper</a>
            <div class="nav-dropdown-menu">
              <a href="${prefix}mn-mapper.html">What Is the MN Mapper</a>
              <a href="${prefix}mn-mapper-theory.html">The Theory Behind the Mapper</a>
              <a href="${prefix}mn-mapper-measures.html">What It Measures</a>
              <a href="${prefix}mn-mapper-interpretation.html">How to Interpret Results</a>
              <a href="${prefix}mn-mapper-take.html">Use the MN Mapper</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <a href="${prefix}training.html" class="nav-dropdown-trigger${isTraining ? ' active' : ''}">Training</a>
            <div class="nav-dropdown-menu">
              <a href="${prefix}training.html">Overview</a>
              <a href="${prefix}training-curriculum.html">What You'll Learn</a>
              <a href="${prefix}training-format.html">Training Format</a>
              <a href="${prefix}training-who.html">Who It's For</a>
              <a href="${prefix}training-schedule.html">Schedule & Enrollment</a>
              <a href="${prefix}training-faq.html">FAQ</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <a href="${prefix}affiliation.html" class="nav-dropdown-trigger${isAffiliation ? ' active' : ''}">Affiliation</a>
            <div class="nav-dropdown-menu">
              <a href="${prefix}affiliation.html">What Is Affiliation</a>
              <a href="${prefix}certification-vs-affiliation.html">Certification vs. Affiliation</a>
              <a href="${prefix}affiliation-benefits.html">Benefits</a>
              <a href="${prefix}affiliation-apply.html">How to Apply</a>
              <a href="${prefix}affiliation-pricing.html">Pricing</a>
              <a href="${prefix}affiliation-faq.html">FAQ</a>
              <a href="${prefix}posture.html">Posture</a>
            </div>
          </div>
          <a href="${prefix}directory.html"${isDirectory ? ' class="active"' : ''}>Directory</a>
          <div class="nav-dropdown">
            <a href="${prefix}about.html" class="nav-dropdown-trigger${isAbout ? ' active' : ''}">About</a>
            <div class="nav-dropdown-menu">
              <a href="${prefix}about.html">Steven Rudolph</a>
              <a href="${prefix}story.html">The Story of MN</a>
              <a href="${prefix}philosophy.html">Philosophy & Limits</a>
            </div>
          </div>
          <a href="${prefix}contact.html"${isContact ? ' class="active"' : ''}>Contact</a>
        </nav>
      </div>
    </header>
  `;
}

// Auto-inject header
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('site-header');
  if (headerPlaceholder) {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    headerPlaceholder.outerHTML = renderHeader(filename);
  }
});
