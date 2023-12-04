function includeNavbar() {
  document.write(`

  `);
}


function includeFooter() {
  document.write(`

  `);
}
function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header bg-white">
      <h5 class="offcanvas-title text-primary" id="offcanvasWithBothOptionsLabel">Moody </h5>
      <button type="button" class="btn-close text-white bg-primary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bg-black">
      <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
        <li class="nav-item me-3 fw-bold ">
            <a class="nav-link text-white active link-primary" href="#">الرئيسية</a>
        </li>
        <li class="nav-item me-3 fw-bold">
            <a class="nav-link text-white link-primary" href="#">من نحن</a>
        </li>
        <li class="nav-item me-3 fw-bold">
            <a class="nav-link text-white link-primary" href="#">تواصل معنا</a>
        </li>
        <li class="nav-item me-3 fw-bold">
            <a class="nav-link text-white link-primary " href="#"تسجيل الدخول</a>
        </li>
        <li class="nav-item me-3 fw-bold">
            <a class="nav-link text-white link-primary " href="#">أنشاء حساب</a>
        </li>
      </ul>
    </div>
  </div>
    <!--========= end sidebar  =========-->
  `);
}
