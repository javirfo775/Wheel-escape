document.addEventListener('DOMContentLoaded', function() {
  var userEmail=localStorage.getItem("useremail");
  var downloadLink = document.getElementById('download-link');
  var filename = 'prueba.txt'; // Nombre del archivo a descargar
  document.getElementById('user-info').textContent=userEmail;
  
  downloadLink.addEventListener('click', function(event) {
    event.preventDefault();
    downloadFile(filename);
  });

  function downloadFile(file) {
    var link = document.createElement('a');
    link.href = file;
    link.download = file;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
