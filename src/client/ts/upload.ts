import updateList from "./file-list.ts";

function upload(file: File): void {
    let request = new XMLHttpRequest();
    let formData = new FormData();
    let progress = document.getElementById("uploadProgress") as HTMLProgressElement;
    progress.hidden = false;

    formData.append("filename", file.name);
    formData.append("uploadedFile", file);

    request.onload = event => {
        progress.hidden = true;
        updateList();
    }
    request.upload.onprogress = event => {
        progress.value = event.loaded
        progress.max = event.total;
    }
    request.open('POST', '/upload', true);
    request.send(formData);
}

export default upload;
