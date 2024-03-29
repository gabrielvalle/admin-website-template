/**
 * Created by Jeng on 15/7/7.
 */
define([
    "modules/core/core_module",
    "modules/form/form_module",
    "modules/table/table_module"
],function (coreMoudle, formModule, tableModule) {
    return angular.module("uxw.wms", [
        "wms.core",
        "wms.form",
        "wms.table"
    ]).config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home.html");
    }]).run(['$rootScope', '$state', '$stateParams', "$MenuList",
        function ($rootScope,   $state,   $stateParams, $MenuList) {
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
});