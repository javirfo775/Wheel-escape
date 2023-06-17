document.addEventListener('DOMContentLoaded', function() {
  var downloadLink = document.getElementById('download-link');
  var filename = 'prueba.txt'; // Nombre del archivo a descargar

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
