Ext.define('MyApp.view.MainModel', {
    extend : 'Ext.app.ViewModel',
    alias  : 'viewmodel.myapp-main',

    requires : [
        'MyApp.store.Users'
    ],

    data : {
        title : 'Users Grid'
    },

    formulas : {
        getTitle : function(get) {
            return get('title') || 'Users Grid';
        }
    },

    stores : {
        users : {
            type     : 'myapp-users',
            autoLoad : true
        }
    }
});
