execution();

function execution() {
  const headerType = {
    navColor: navColor.dark,
    isSticky: false,
    isOverlay: true,
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
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
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

$("#im90s-contact-form").on("submit", function (e) {
  if (!e.isDefaultPrevented()) {
    $.post(API_CMS_URL + "/enquiries", {
      name: $("#im90s-name").val(),
      email: $("#im90s-email").val(),
      phone: $("#im90s-phone").val(),
      company_name: $("#im90s-company_name").val(),
      remark: $("#im90s-remark").val(),
      // industry: $("#im90s-industry").val(),
      // company_size: $("#im90s-company_size").val(),
    })
      .done(function (data) {
        console.log(data);
        $("im90s-modal-username").append(
          $(`<span>${$("#im90s-name").val()}</span>`)
        );
        $("#confirmation-modal").modal();
        $("#im90s-contact-form")[0].reset();
        $.post(MAIL_URL + "/send-mail", {
          host: `https://${window.location.hostname}`,
          provider: "Commlabs",
          id: data.id,
        });
      })
      .fail(function (err) {
        if (err) {
          alert("Unhandled Error!");
          window.location.reload(true);
        }
      });
    return false;
  }
});
