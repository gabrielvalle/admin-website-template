/**
 * Created by Jeng on 15/7/7.
 */
define([
    "./form_validation"
],function (form_validation) {
    angular.module("wms.form",[])
        .config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('module2', {
                abstract: true,
                url: '/module2',
                template: '<div ui-view></div>'
            }).state('module2.form', {
                url: "/form_validation",
                templateUrl: "modules/form/form_validation.html",
                controller:form_validation
            });
        }]);
});