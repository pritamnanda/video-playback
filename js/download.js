
  function downloadVideo() {
    // Get the video element by its ID
    var videoElement = document.getElementById('video');

    // Get the video source element
    var sourceElement = videoElement.querySelector('source');

    // Get the video source URL
    var videoUrl = sourceElement.src;

    // Create a download link
    var downloadLink = document.createElement("a");
    downloadLink.href = videoUrl;
    downloadLink.download = "downloaded-video"; // You can set a default filename here
    document.body.appendChild(downloadLink);

    // Trigger the download
    downloadLink.click();

    // Remove the download link from the document
    document.body.removeChild(downloadLink);
  }

