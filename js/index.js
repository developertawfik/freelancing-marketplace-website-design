var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


$(document).ready(function () {
    $('.protfolio-item').isotope({
        itemSelector: '.item_a',
        layoutMode: 'fitRows'
    });
    $('.btn').click(function () {
        $('.freelancer').addClass("active_this");
        var selector = $(this).attr('data-filter');

        $('.protfolio-item').isotope({
            filter: selector
        });
        return false;
    })
})