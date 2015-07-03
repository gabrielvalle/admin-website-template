/**
 * Created by Jeng on 15/6/2.
 */
define([
    "uiRouter",
    "uiMetronic"
],function (uiRouter,uiMetronic) {
    //uiMetronic.init(); // initlayout and core plugins
    angular.module("ngApp",["ui.router","ui.metronci"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home.html",
                templateUrl: "modules/home.html"
            })
            .state('buttons', {
                url: "/ui_features/buttons",
                templateUrl: "modules/ui_features/ui_buttons.html"
            })
            .state('general', {
                url: "/ui_features/ui_general",
                templateUrl: "modules/ui_features/ui_buttons.html"
            })
            .state('sliders', {
                url: "/ui_features/buttons",
                templateUrl: "modules/ui_features/ui_buttons.html"
            })
            .state('tabs_accordions', {
                url: "/ui_features/buttons",
                templateUrl: "modules/ui_features/ui_buttons.html"
            })
            .state('portlet_general', {
                url: "/portlets/portlet_general",
                templateUrl: "modules/portlets/portlet_general.html"
            })
            .state('form_fileupload', {
                url: "/form/form_fileupload",
                templateUrl: "modules/form/form_fileupload.html"
            });
        $urlRouterProvider.otherwise("/home.html");
    }]);
    angular.bootstrap(document, ["ngApp"]);
    return {};
});