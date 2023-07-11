execution();

function execution() {
  const headerType = {
    navColor: navColor.light,
    isSticky: false,
    isOverlay: false
  };
  renderHeader(headerType);
  renderFooter();
  renderCounter();
}

function renderCounter() {
  $("#im90s-counter").append(
    $(`
        <div class="counter-wrapper">
                <div class="counter-item">
                    <h2 class="odometer odometer-auto-theme" data-odometer-final="30">
                        <div class="odometer-inside"><span class="odometer-digit"><span
                                    class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span
                                        class="odometer-ribbon"><span class="odometer-ribbon-inner"><span
                                                class="odometer-value">0</span></span></span></span></span></div>
                    </h2>
                    <p class="sub-title">Years of Experience</p>
                </div>
                <div class="counter-item">
                    <h2 class="plus odometer odometer-auto-theme" data-odometer-final="45">
                        <div class="odometer-inside"><span class="odometer-digit"><span
                                    class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span
                                        class="odometer-ribbon"><span class="odometer-ribbon-inner"><span
                                                class="odometer-value">0</span></span></span></span></span></div>
                    </h2>
                    <p class="sub-title">Expert Consultants</p>
                </div>
                <div class="counter-item">
                    <h2 class="plus odometer odometer-auto-theme" data-odometer-final="255">
                        <div class="odometer-inside"><span class="odometer-digit"><span
                                    class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span
                                        class="odometer-ribbon"><span class="odometer-ribbon-inner"><span
                                                class="odometer-value">0</span></span></span></span></span></div>
                    </h2>
                    <p class="sub-title">Activated Clients</p>
                </div>
                <div class="counter-item">
                    <h2 class="k odometer odometer-auto-theme" data-odometer-final="14">
                        <div class="odometer-inside"><span class="odometer-digit"><span
                                    class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span
                                        class="odometer-ribbon"><span class="odometer-ribbon-inner"><span
                                                class="odometer-value">0</span></span></span></span></span></div>
                    </h2>
                    <p class="sub-title">Project Finished</p>
                </div>
            </div>
    `)
  );

  //Odometer
  $(".counter-item").each(function() {
    $(this).isInViewport(function(status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
}
