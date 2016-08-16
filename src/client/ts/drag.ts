import upload from "./upload.ts"

function drag() {
    let droppable = document.getElementsByTagName('main');
    for (let element of droppable) {
        element.addEventListener("dragenter", onDragEnter)
        element.addEventListener("dragexit", onDragLeave)
        element.addEventListener("dragleave", onDragLeave)
        element.addEventListener("drop", onDrop, false)
        element.addEventListener("dragover",
            function(event: DragEvent) { event.preventDefault() }
        )
    }

    function onDragEnter(event: DragEvent) {
        let elem = <Element>event.target;
        elem.classList.add('ondrop');
    }

    function onDragLeave(event: DragEvent) {
        let elem = <Element>event.target;
        elem.classList.remove('ondrop');
    }


    function onDrop(event: DragEvent) {
        let elem = <Element>event.target;
        if (event.dataTransfer.files.length > 1) {
            alert("Upload only one file at a time!")
        } else {
            let file = event.dataTransfer.files[0];
            console.log(file);
            upload(file);
        }
        event.preventDefault();
        elem.classList.remove('ondrop');
    }
}

export default drag;
