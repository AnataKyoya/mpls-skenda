import scriptPaths from "./allJS.js";

function loadScript(path) {
    const script = document.createElement("script");
    script.src = path;
    document.body.appendChild(script);
}

// Contoh penggunaan:
loadScript(scriptPaths.script1);
loadScript(scriptPaths.script2);
loadScript(scriptPaths.script3);
