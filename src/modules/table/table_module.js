/**
 * Created by Jeng on 15/7/7.
 */
define([
    "./table_responsive"
],function (table_responsive) {
    angular
        .module("wms.table",["ui.router"])
        .config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('module1', {
                abstract: true,
                url: '/module1',
                template: '<div ui-view></div>'
            }).state('module1.table', {
                url: "/table",
                templateUrl: "modules/table/table_responsive.html",
                controller:table_responsive
            });
        }]);
});