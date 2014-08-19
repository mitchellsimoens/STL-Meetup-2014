Ext.define('MyApp.view.MainController', {
    extend : 'Ext.app.ViewController',
    alias  : 'controller.myapp-main',

    onUserClick : function(gridview, record) {
        // this = Controller
        console.log('viewcontroller', 'onUserClick');
    }
});
