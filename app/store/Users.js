Ext.define('MyApp.store.Users', {
    extend : 'Ext.data.Store',
    alias  : 'store.myapp-users',

    requires : ['MyApp.model.User'],

    model : 'MyApp.model.User',

    proxy : {
        type : 'ajax',
        url  : 'users.json'
    }
});
