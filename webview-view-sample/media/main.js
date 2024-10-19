//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    console.log(document.getElementById("config").innerText);
    const config = JSON.parse(document.getElementById("config").innerText);
    console.log(config);
    updateUi(config.servers);

    // document.querySelector('.add-color-button').addEventListener('click', () => {
    //     addColor();
    // });

    // Handle messages sent from the extension to the webview
    window.addEventListener('message', event => {
        const message = event.data; // The json data that the extension sent
        // switch (message.type) {
            
        // }
    });

    function updateUi(servers) {
        const serverSelect = document.querySelector('#server');
        serverSelect.textContent = '';
        for (const server of servers) {
            const option = document.createElement('option');
            option.value = server["url"];
            option.textContent = server["name"];

            serverSelect.appendChild(option);
        }
    }
}());


