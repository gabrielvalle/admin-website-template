/**
 * Created by Jeng on 15/7/7.
 */
define([
    "./home"
],function (home) {
    return angular.module("wms.core",[])
        .config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                url: "/home.html",
                controller: home,
                templateUrl: "modules/core/home.html"
            });
    }]);
});