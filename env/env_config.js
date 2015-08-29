/**
 * Created by Jeng on 2015/5/7.
 */
define(function() {
    'use strict';
    window.EnvConfig = {
        wx:"/udf-wechat-web",//微信
        ImgWebsite: "@@ImgWebsite",
        ctx: "05-udf-ecw",
        jsonSuffix: ".json"
    };
    angular.module('EnvModule', [])
        .constant('AppConfig', window.EnvConfig);
});
