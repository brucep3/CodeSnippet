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

/**
 * 通过隐层的元素检测是否支持某个具体的属性值
 * @param property
 */
function testProperty(property) {
    var dummy = document.createElement("p");
    dummy.style.backgroundImage = "linear-gradient(red, tan)";
    if (dummy.style.backgroundImage) {
        root.classList.add("linear-gradients");
    } else {
        root.classList.add("no-lineargradients");
    }
}

/**
 * 浏览器可以解析某个CSS特性并不代表它已经实现（或正确实现）了这个特性。
 * @param id
 * @param value
 * @param proerty
 */
function testValue(id, value, proerty) {
    var dummy = document.createElement("p");
    dummy.style[proerty] = value;
    if (dummy.style[proerty]) {
        root.classList.add(id);
        return true;
    }
    root.classList.add("no-" + id);
    return false;
}


