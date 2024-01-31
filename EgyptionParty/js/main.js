const innerBarWidth = $(".inner-bar").innerWidth();
$("nav").css({ left: -innerBarWidth }, 0);

$(".close-btn").on("click", function () {
  $("nav").animate({ left: -innerBarWidth }, 500);
  $(".home-content").animate({ paddingLeft: "0px" }, 500);
});
$(".open-btn").on("click", function () {
  $("nav").animate({ left: 0 });
  $(".home-content").animate({ paddingLeft: "200px" }, 500);
  $(".inner-bar").css({ opacity: "1" });
});

$(".singer-details h2").on("click", function (e) {
  $(e.target).siblings(".singer-details p").slideUp();
  if ($(e.target).next().css("display") == "block") {
    $(e.target).next().slideUp();
  } else {
    $(e.target).next().slideDown();
  }
});
// count down timer
let countDown = new Date("Feb 21, 2026 0:0:0").getTime();
console.log(countDown);
let x = setInterval(function () {
  now = new Date().getTime();
  diffrence = countDown - now;
  if (diffrence < 0) {
    clearInterval(x);
    alert("Let's Go");
  }
  days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((diffrence % (1000 * 60)) / 1000);

  $("#duration .row").html(`
                    <div class="col-lg-3">
                        <div class="border inner py-3 ">
                            <h1>${days} d</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border inner py-3">
                            <h1>${hours} h</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border inner py-3">
                            <h1>${minutes} m</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border inner py-3">
                            <h1>${seconds} s</h1>
                        </div>
                    </div>`);
});
let counterTextArea = 100;
// textarea
// textCounter
// textAreaWarning
$("#textarea").on("input", function () {
  let characters = $("#textarea").val().length;
  $("#textCounter").html(counterTextArea - characters);
  if (characters >= 100) {
    $("#textAreaWarning").css("display", "inline");
  } else {
    $("#textAreaWarning").css("display", "none");
  }
});
