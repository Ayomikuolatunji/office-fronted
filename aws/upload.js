export const upload=(file, link,setProgress,setUrl)=>{
    setProgress("")
    let xhr = new XMLHttpRequest();
    // track upload progress
    xhr.upload.onprogress = function(evt) {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
    };
    // track completion: both successful or not
    xhr.onloadend = function() {
      if (xhr.status == 200) {
        setUrl(xhr.responseURL.split("?")[0]);
      } else {
        console.log("error " + this.status);
      }
    };
    xhr.open("PUT", link);
    xhr.send(file);
}