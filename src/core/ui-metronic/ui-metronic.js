/**
 * Created by Jeng on 15/6/7.
 */
define([
    "metronic"
],function (metronic) {

    return angular.module("ui.metronci",[])
        .constant({
            $MenuList:[]
        })
        .factory("$metronci", function(){
            return metronic;
        })
        // 头部导航菜单
        .directive("muHeader",[function(){
            return {
                // use a new isolated scope
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'core/ui-metronic/tpl/header.html',
                controller:["$scope","$rootScope", function($scope, $rootScope){

                }]
            };
        }])

        // 主题配置选项
        .directive("muCustomizer",[function(){
            return {
                // use a new isolated scope
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'core/ui-metronic/tpl/style_customizer.html',
                controller:["$scope", function($scope){
                    //metronic.init();
                }]
            };
        }])

        // 左侧滑动导航菜单
        .directive("muSidebar",[function(){
            return {
                // use a new isolated scope
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'core/ui-metronic/tpl/sidebar.html',
                controller:["$scope","$rootScope", function($scope,$rootScope){
                    metronic.init();
                }]
            };
        }]);
    }
);