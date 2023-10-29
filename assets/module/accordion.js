export class Accordion {

    /**
     * @type {HTMLElement}
     */
    $container

    /**
     * @type {HTMLElement}
     */
    $content

    /**
     * @type {HTMLElement}
     */
    $button

    contentHeight

    _opened = true

    /**
     * @type {HTMLElement}
     */
    openIndicator

    onToggle = () => {}

    /**
     * @param {HTMLElement} element
     * @param {?string} openIndicator
     * @param {?CallableFunction} onToggle
     */
    constructor(element, openIndicator = null, onToggle = null) {
        this.$container = element
        this.$content = element.querySelector("[data-accordion-content]")
        this.$button = element.querySelector("[data-accordion-button]")

        if (openIndicator) this.openIndicator = this.$button.querySelector(openIndicator)
        if (onToggle) this.onToggle = onToggle

        this.contentHeight = this.$content.clientHeight
        this.$button.addEventListener('click', this.handleClick)
        this.$content.style.setProperty('--_height', `${this.contentHeight}px`)
    }

    handleClick = (e) => {
        this.toggle()
    }

    toggle(value = null) {
        if (value === null) {
            this._opened = !this._opened
        } else {
            this._opened = value
        }

        this._opened ? this.open() : this.close()
    }

    open() {
        if (this.openIndicator) this.openIndicator.style.rotate = "0deg"
        this.$content.style.setProperty('--_height', `${this.contentHeight}px`)
    }

    close() {
        if (this.openIndicator) this.openIndicator.style.rotate = "-90deg"
        this.$content.style.setProperty('--_height', `0px`)
    }

}