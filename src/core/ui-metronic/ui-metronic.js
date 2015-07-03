/**
 * Created by Jeng on 15/6/7.
 */
define([
    "metronic"
],function (metronic) {

    return angular.module("ui.metronci",[])
        .factory("$metronci", function(){
            return metronic;
        })
        // 头部导航菜单
        .directive("muHeader",[function(){
            return {
                scope: {},
                // use a new isolated scope
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'core/ui-metronic/tpl/header.html',
                controller:["$scope", function($scope){
                    //metronic.init();
                }]
            };
        }])

        // 主题配置选项
        .directive("muCustomizer",[function(){
            return {
                scope: {},
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
                scope: { navList : "=" },
                // use a new isolated scope
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'core/ui-metronic/tpl/sidebar.html',
                controller:["$q","$scope","$http", function($q, $scope,$http){
                    var getNavList = function(){
                        var defer = $q.defer();
                        $http.get("../data/sidebar_menu.json").success(function(data){
                            if(data.success){
                                defer.resolve(data.data);
                            }else{
                                defer.reject(data);
                            }
                        })
                        return defer.promise;
                    }
                    getNavList().then(function(data){
                        $scope.navList = data;
                    },function(){
                        return null;
                    });
                    metronic.init();
                }]
            };
        }]);
    }
);