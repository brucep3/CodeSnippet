/**
 * 测试某个样式属性当前是否被支持
 */
function detectPropertySupport() {
    var root = document.documentElement;
    if ("textshadow" in root.style) {
        root.classList.add("textshadow");
    } else {
        root.classList.add("no-textshadow");
    }
}

/**
 * 封装方法；
 * 检查样式属性是否被支持；
 * @param property
 * @returns {boolean}
 */
function testProperty(property) {
    var root = document.documentElement;
    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    }
    root.classList.add("no-" + property.toLowerCase());
    return false;
}

function testProperty(property) {
    var dummy = document.createElement("p");
    dummy.style.backgroundImage = "linear-gradient(red, tan)";
    if (dummy.style.backgroundImage) {
        root.classList.add("linear-gradients");
    } else {
        root.classList.add("no-lineargradients");
    }
}

