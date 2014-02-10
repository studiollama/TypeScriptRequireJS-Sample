class Greeter {
    element: JQuery;
    span: HTMLElement;
    timerToken: number;

    constructor() {
        this.element = $('#content');
        this.element.append("The time is: ");
        this.span = document.createElement('span');
        this.element.append(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => { this.span.innerHTML = new Date().toUTCString(), 500 });
    }

    stop() {
        clearTimeout(this.timerToken);
    }

} export = Greeter;
