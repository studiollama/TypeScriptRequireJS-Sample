define(["require", "exports", "Source/Greeter/greeter"], function(require, exports, Greeter) {
    var Main = (function () {
        function Main() {
            this.greeter = new Greeter();
            this.greeter.start();
        }
        return Main;
    })();
    exports.Main = Main;
});
//# sourceMappingURL=main.js.map
