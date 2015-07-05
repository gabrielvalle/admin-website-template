/**
 * Created by Jeng on 15/6/2.
 */
define([
    "uiRouter",
    "uiMetronic"
],function (uiRouter,uiMetronic) {
    angular.module("ngApp",["ui.router","ui.metronci"])
        .config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home.html",
                templateUrl: "modules/common/home.html"
            })
            .state('module1', {
                abstract: true,
                url: '/module1',
                template: '<div ui-view></div>'
            })
            .state('module1.table', {
                url: "/table",
                templateUrl: "modules/table/table_responsive.html"
            })
            .state('module2', {
                abstract: true,
                url: '/module2',
                template: '<div ui-view></div>'
            })
            .state('module2.form', {
                url: "/form_validation",
                templateUrl: "modules/form/form_validation.html"
            });
        $urlRouterProvider.otherwise("/home.html");
    }]).run(['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
    angular.bootstrap(document, ["ngApp"]);
    return {};
});