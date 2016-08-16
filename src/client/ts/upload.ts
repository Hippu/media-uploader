import updateList from "./file-list.ts";

function upload(file: File): void {
    let request = new XMLHttpRequest();
    let formData = new FormData();

    formData.append("filename", file.name);
    formData.append("uploadedFile", file);

    request.onload = function() {
        updateList();
    }
    request.onprogress = function (event: ProgressEvent) {
      console.log(`${event.loaded} / ${event.total}`)
    }
    request.open('POST', '/upload', true);
    request.send(formData);

}

export default upload;
