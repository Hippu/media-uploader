import updateList from "./file-list.ts";

function upload(file: File): void {
    let request = new XMLHttpRequest();
    let formData = new FormData();
    let progress = document.getElementById("uploadProgress") as HTMLProgressElement;
    progress.classList.add("visible");

    formData.append("filename", file.name);
    formData.append("uploadedFile", file);

    request.onload = () => {
        updateList();
        progress.classList.remove("visible");
    }
    request.onprogress = function(event: ProgressEvent) {
        progress.value = event.loaded;
        progress.max = event.total;
    }
    request.open('POST', '/upload', true);
    request.send(formData);
}

export default upload;
