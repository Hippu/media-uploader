function updateList() {
    let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.onload = function(event: Event) {
            resolve(JSON.parse(request.response));
        }
        request.open('GET', '/filelist');
        request.send();
    })

    function renderWith(files: Array<string>) {
        let template = document.getElementById('file-template') as HTMLTemplateElement;
        let container = document.querySelector('#file-list');
        container.innerHTML = '';
        for (let file of files) {
            let elem = template.content.cloneNode(true) as DocumentFragment;
            let img = elem.querySelector('img') as HTMLImageElement;
            let a = elem.querySelector('a') as HTMLAnchorElement;
            a.href = 'images/' + file;
            img.src = 'images/' + file;
            container.appendChild(elem);
        }
    }


    promise.then(function(val: Array<string>) {
        renderWith(val)
    })
}

export default updateList;
