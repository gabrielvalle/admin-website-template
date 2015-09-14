/**
 * Created by Jeng on 15/7/7.
 */
define([
    "./form_validation"
],function (form_validation) {
    return angular
        .module("wms.form",[
            "ui.metronci"
        ])
        .config(["$stateProvider","$urlRouterProvider","$MenuList", function($stateProvider, $urlRouterProvider,$MenuList) {
            $MenuList.push({
                title:"表单",
                link:"/form_validation"
            });
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