class JqueryClone {
    DomElement = undefined;
    constructor(domElement) {
        this.DomElement = domElement;
        console.log("set deomelelmt");

    }
    hasClass(className) {
        return this.DomElement.classList.contains(className)
    }
    removeClass(className) {
        return this.DomElement.classList.remove(className)
    }
    addClass(className) {
        return this.DomElement.classList.add(className)
    }
    parent() {
        return this.DomElement.parentElement
    }


}
