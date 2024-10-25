window.addEventListener('DOMContentLoaded', function() {
    var adCircle = document.getElementById('ad-circle');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn');
  
    adCircle.addEventListener('click', function() {
      popup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    document.addEventListener('keydown' (e) => {
        if (e.code == 71) {
            alert("G?");
        }
    });
  });
  