"use strict";

async function styleLoader() {
    const style = document.createElement("style");
    style.innerHTML = plugin.getConfig("customizeCss", "");
    console.log(plugin.getConfig("customizeCss", ""))
    document.head.appendChild(style);
}

plugin.onConfig((tools) => {
    console.log(tools);
    return dom(
        "div",
        {},
        dom("br", {}),
        dom(
            "div",
            {},
            dom("p", {
                innerText: "自定义 CSS：",
                style: { margin: "10px 8px" },
            }),
            dom("textarea", {
                innerText: plugin.getConfig("customizeCss", ""),
                oninput: (event) =>
                    plugin.setConfig("customizeCss", event.target.value),
                style: { width: "100%", height: "200px", borderRadius: "0.5em", padding: "10px" },
            })
        ),
        dom("br", {}),
        dom("br", {}),
        dom("a", {
            href: "https://github.com/nexmoe/better-plugin-customize",
        }),
    );
});

plugin.onLoad(async () => {
    styleLoader();
});
