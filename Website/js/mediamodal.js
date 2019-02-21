// Use class since multiple image modals on same page
var images = document.getElementsByClassName('mediaImage');

var modal = document.getElementById('mediaModal');
var modalImg = document.getElementById("modalImgContent");
var captionText = document.getElementById("caption");
// Iterate trough the different images based on result of class, select clicked image to display image modal
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    // click outside image to close modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
// Click X to close modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
