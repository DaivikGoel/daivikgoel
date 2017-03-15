<script>
function download(file)
{
 window.location=file;
}
</script>

$(document).ready(function() {
  $(".progress-btn").on("click", download(assets/DaivikGoel.pdf) {
    var progressBtn = $(this);

    if (!progressBtn.hasClass("active")) {
      progressBtn.addClass("active");
      setTimeout(function() {
        progressBtn.removeClass("active");
      }, 10000);
    }
  })
});
