//------------------------------------------Render-------------------------------------------------

// const API_URL = 'http://localhost:1339';
const API_CMS_URL = "https://cms.im90s.org";
const API_URL = "https://api.commlabs.co";
const MAIL_URL = "https://mailer.im90s.org";

const navColor = {
  light: "light",
  dark: "dark",
  white: "white",
};

im90sTr(API_URL, 5);

function fetchAPI(method, endpoint) {
  return $.ajax({
    url: `${API_URL}/${endpoint}`,
    method,
    dataType: "json",
  })
    .done(function (res) {
      return res;
    })
    .fail(function (err) {
      return err;
    });
}

function fetchParams(paramName) {
  const paramSearch = new URLSearchParams(window.location.search);
  return paramSearch.get(paramName);
}

function formatDate(gmtDate) {
  // e.g. 27/12/2018, 10:00:00am
  const date = new Date(gmtDate);
  return `${date.toLocaleDateString("en-GB")}, ${date.toLocaleTimeString(
    "en-US"
  )}`;
}

function renderHeader(headerType) {
  renderHeaderDetails(headerType);
}

function renderHeaderDetails(headerType) {
  $("#im90s-header").append(
    $(`
        <nav class="navbar navbar-expand-lg navbar-${headerType.navColor}" ${
      headerType.isSticky ? "data-sticky='top'" : ""
    } ${headerType.isOverlay ? "data-overlay" : ""}>
            <div class="container">
                <a class="navbar-brand navbar-brand-dynamic-color fade-page" href="index.html">
                    <img alt="Corplabs" data-inject-svg src="assets/img/logos/im90s.svg">
                </a>
                <div class="d-flex align-items-center order-lg-3">
                <!-- <a href="#" class="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">SIGN IN</a> -->
                <button aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
                    data-target=".navbar-collapse" data-toggle="collapse" type="button">
                    <img alt="Navbar Toggler Open Icon" class="navbar-toggler-open icon icon-sm" data-inject-svg
                    src="assets/img/icons/interface/icon-menu.svg">
                    <img alt="Navbar Toggler Close Icon" class="navbar-toggler-close icon icon-sm" data-inject-svg
                    src="assets/img/icons/interface/icon-x.svg">
                </button>
                </div>
                <div class="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end" id="navigation-menu">
                <ul class="navbar-nav my-3 my-lg-0">
                    <!-- <li class="nav-item">
                        <div class="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" class="nav-link" href="pricing.html" role="button">Plans</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" class="nav-link" href="website-calculator.html " role="button">Calculator</a>
                        </div>
                    </li> -->
                    
                    <li class="nav-item">
                        <div class="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">More</a>
                            <div class="row dropdown-menu">
                                <div class="col-auto" data-dropdown-content>
                                    <div class="dropdown-grid-menu">
                                       <!-- <a href="who-we-are.html" class="dropdown-item">Who we are</a>
                                        <a href="what-we-do.html" class="dropdown-item">What we do</a>
                                        <a href="tech-we-use.html" class="dropdown-item">Tech we use</a>
                                        <a href="case-studies.html" class="dropdown-item">Our works</a>
                                        <a href="careers.html" class="dropdown-item">Our Talent Pools</a>
                                        <a href="faq.html" class="dropdown-item">FAQ</a> -->
                                        <a href="contact.html" class="dropdown-item">Contact us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    `)
  );
}

function renderFooter() {
  $("#im90s-footer").append(
    $(`
       <div class="container">
                <div class="row">
                <div class="col-xl-auto mr-xl-5 col-md-3">
                <h5>Pages</h5>
                <ul class="nav flex-row flex-md-column">
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="index.html" class="nav-link fade-page px-0 py-2">Home</a>
                    </li>
                    <!-- <li class="nav-item mr-3 mr-md-0">
                    <a href="pricing.html" class="nav-link fade-page px-0 py-2">Plans</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="website-calculator.html" class="nav-link fade-page px-0 py-2">Calculator</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="who-we-are.html" class="nav-link fade-page px-0 py-2">Who we are</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="what-we-do.html" class="nav-link fade-page px-0 py-2">What we do</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="tech-we-use.html" class="nav-link fade-page px-0 py-2">Tech we use</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="case-studies.html" class="nav-link fade-page px-0 py-2">Our works</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="careers.html" class="nav-link fade-page px-0 py-2">Our Talent Pools</a>
                    </li>
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="aq.html" class="nav-link fade-page px-0 py-2">FAQ</a>
                    </li> -->
                    <li class="nav-item mr-3 mr-md-0">
                    <a href="contact.html" class="nav-link fade-page px-0 py-2">Contact us</a>
                    </li>
                </ul>
                </div>
                <!-- <div class="col mt-4 mt-md-0 mt-lg-5 mt-xl-0 order-lg-4 order-xl-3">
                <h5>Articles</h5>
                <ul class="list-unstyled d-flex flex-wrap">
                    <li class="col-12 col-lg-6 col-xl-12 px-0">
                    <div class="row my-2 my-md-3">
                        <a class="col-5" href="#">
                        <img class="rounded img-fluid hover-fade-out" src="assets/img/blog/thumb-2.jpg" alt="blog.1.image">
                        </a>
                        <div class="col">
                        <a class="h6" href="#">Unveiling our new vision for Jumpstart</a>
                        <div class="text-small text-muted mt-2">October 10th</div>
                        </div>
                    </div>
                    </li>
                    <li class="col-12 col-lg-6 col-xl-12 px-0">
                    <div class="row my-2 my-md-3">
                        <a class="col-5" href="#">
                        <img class="rounded img-fluid hover-fade-out" src="assets/img/blog/thumb-1.jpg" alt="blog.2.image">
                        </a>
                        <div class="col">
                        <a class="h6" href="#">Making the most of team-building sessions</a>
                        <div class="text-small text-muted mt-2">October 2nd</div>
                        </div>
                    </div>
                    </li>
                </ul>
                </div> -->
                <!-- <div class="col-lg mt-2 mt-md-5 mt-lg-0 order-lg-3 order-xl-4">
                <h5>Newsletter</h5>
                <div class="card card-body bg-white">
                    <p>Get a bi-weekly digest of great articles</p>
                    <form data-form-email novalidate action="https://mailform.mediumra.re/jumpstart/mailchimp.php">
                    <div class="d-flex flex-column flex-sm-row form-group">
                        <input class="form-control mr-sm-2 mb-2 mb-sm-0 w-auto flex-grow-1" name="email"
                        placeholder="Email Address" type="email" required>
                        <button type="submit" class="btn btn-primary btn-loading" data-loading-text="Sending">
                        <svg class="icon bg-white" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Icon For Loading</title>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g>
                                <polygon points="0 0 24 0 24 24 0 24" opacity="0"></polygon>
                            </g>
                            <path
                                d="M12,4 L12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,10.9603196 17.7360885,9.96126435 17.2402578,9.07513926 L18.9856052,8.09853149 C19.6473536,9.28117708 20,10.6161442 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z"
                                fill="#000000" fill-rule="nonzero"
                                transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ">
                            </path>
                            </g>
                        </svg>
                        <span>Go</span>
                        </button>
                    </div>
                    <div data-recaptcha data-sitekey="6Lemz4gUAAAAAElq4ZHFBzI7j8QUiYMn9I0mzQWG" data-size="invisible"
                        data-badge="bottomleft"></div>
                    <div class="d-none alert alert-success w-100" role="alert" data-success-message>
                        Thanks, a member of our team will be in touch shortly.
                    </div>
                    <div class="d-none alert alert-danger w-100" role="alert" data-error-message>
                        Please fill all fields correctly.
                    </div>
                    <div class="text-small text-muted">We'll never share your email address</div>
                    </form>
                </div>
                </div> -->
                <!-- 
                <div class="col-lg mt-2 mt-md-5 mt-lg-0 order-lg-3 order-xl-4">
                <h5>Follow US</h5>
                <div class="card card-body bg-white">
                    <div class="sharethis-inline-follow-buttons"></div> 
                    
                </div>
                </div> -->
                
            </div>
            <div class="row">
                <div class="col">
                <hr>
                </div>
            </div>
            <div
                class="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">

                <div class="col-auto">
                <div class="d-flex flex-column flex-sm-row align-items-center text-small">
                    <div class="text-muted">&copy; 2023 Page protected by reCAPTCHA and subject to Google's <a
                        href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a> and <a
                        href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
                    </div>
                </div>
                </div>
                <div class="col-auto mt-3 mt-lg-0">
                <ul class="list-unstyled d-flex mb-0">

                    <!-- <li class="mx-3">
                    <a href="#" class="hover-fade-out">
                        <img src="assets/img/icons/social/twitter.svg" alt="Twitter" class="icon icon-xs bg-white"
                        data-inject-svg>
                    </a>
                    </li>
                    <li class="mx-3">
                    <a href="#" class="hover-fade-out">
                        <img src="assets/img/icons/social/github.svg" alt="Github" class="icon icon-xs bg-white"
                        data-inject-svg>
                    </a>
                    </li> -->
                    <li clsdd="mx-3" style="margin-top:3px">
                        <div class="fb-like" data-href="https://facebook.com/im90s.org" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="false"></div>
                    </li>
                    <li class="mx-3">
                    <a href="https://www.facebook.com/corplabs.co/" class="hover-fade-out">
                        <img src="assets/img/icons/social/facebook.svg" alt="Facebook" class="icon icon-xs bg-white"
                        data-inject-svg>
                    </a>
                    </li>
                    <li class="mx-3">
                    <a href="https://www.instagram.com/corplabs_co/" class="hover-fade-out">
                        <img src="assets/img/icons/social/ig.svg" alt="Instagram" class="icon icon-xs bg-white" data-inject-svg>
                    </a>
                    </li>
                    <li class="mx-3">
                    <a href="https://linkedin.com/company/corplabsco" class="hover-fade-out">
                        <img src="assets/img/icons/social/linkedin.svg" alt="Linkedin" class="icon icon-xs bg-white"
                        data-inject-svg>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    `)
  );
}
