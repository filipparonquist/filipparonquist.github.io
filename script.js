document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        // Insert animated icon markup inside each collapsible button
        (function(button){
            var icon = document.createElement('span');
            icon.className = 'icon';
            var lineV = document.createElement('span');
            lineV.className = 'line v';
            var lineH = document.createElement('span');
            lineH.className = 'line h';
            icon.appendChild(lineV);
            icon.appendChild(lineH);
            button.appendChild(icon);
        })(coll[i]);

        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");

            // Find the next .content element (skip non-content siblings)
            var content = this.nextElementSibling;
            while (content && !content.classList.contains('content')) {
                content = content.nextElementSibling;
            }

            if (content) {
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    }
});