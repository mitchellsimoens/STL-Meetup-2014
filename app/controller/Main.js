Ext.define('MyApp.controller.Main', {
    extend : 'Ext.app.Controller',

    listen : {
        component : {
            'myapp-main' : { //uses ComponentQuery
                itemclick : 'onUserClick'
            }
        }
    },

    onUserClick : function(gridview, record) {
        // this = Controller
        console.log('global controller', 'onUserClick');
    }
});
