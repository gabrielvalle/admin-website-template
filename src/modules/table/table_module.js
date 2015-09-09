/**
 * Created by Jeng on 15/7/7.
 */
define([
    "./table_responsive"
],function (table_responsive) {
    angular
        .module("wms.table",[
            "ui.router",
            "ui.metronci"
        ])
        .constant({
            ModuleMenu:{
                module:"module1",
                title:"表格",
                icon:"icon-th",
                url:"/module1",
                subMenu:[
                    {
                        title:"普通表格",
                        url:"/table",
                        state:"module1.table",
                        templateUrl:"modules/table/table_responsive.html",
                        controller:"TableController"
                    }
                ]
            }
        })
        .controller({
            TableController:table_responsive
        })
        .config(["$stateProvider","$urlRouterProvider","$MenuList","ModuleMenu", function($stateProvider, $urlRouterProvider, $MenuList, ModuleMenu) {
            $MenuList.push(ModuleMenu);
            $stateProvider.state(ModuleMenu.module, {
                abstract: true,
                url: ModuleMenu.url,
                template: '<div ui-view></div>'
            });
            angular.forEach(ModuleMenu.subMenu,function(value, index){
                $stateProvider.state(value.state, {
                    url: value.url,
                    templateUrl: value.templateUrl,
                    controller: value.controller
                })
            })
        }]);
});