/**
 * Created by Jeng on 15/6/2.
 */
define([
    "uiRouter",
    "uiMetronic",
    "uxWms"
],function (uiRouter,uiMetronic,uxWms) {
    angular.module("ngApp",[
        "ui.router",
        "ui.metronci",
        "uxw.wms"
    ]);
    angular.bootstrap(document, ["ngApp"]);
});