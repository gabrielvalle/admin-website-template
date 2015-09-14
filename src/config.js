/**
 * Created by Jeng on 15/6/2.
 */
require.config({
    paths: {
        main:"app",
        underscore:"components/underscore/underscore",
        angular:"components/angular/angular",
        jQuery:"components/jquery/dist/jquery",
        uiRouter:"components/ui-router/release/angular-ui-router",
        bootstrap:"components/bootstrap/docs/assets/js/bootstrap",
        uiMetronic:"core/ui-metronic/ui-metronic",
        metronic:"core/ui-metronic/metronic",
        uxWms:"modules/wms"
    },
    shim : {
        jQuery:{
            export:"jQuery"
        },
        angular: {
            export:"angular"
        },
        bootstrap:{
            deps:["jQuery"]
        },
        uiRouter: ["angular"],
        metronic: {
            deps:["jQuery"],
            export:"App"
        },
        uiMetronic:{
            deps:["angular","bootstrap","metronic"]
        },
        uxWms:{
            deps:["uiMetronic"]
        }
    },
    deps: ['./app']
    // , urlArgs: "v="+(new Date()).getTime()
});