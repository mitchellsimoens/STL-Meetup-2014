Ext.define('MyApp.view.Main', {
    extend : 'Ext.grid.Panel',
    xtype  : 'myapp-main',

    requires : [
        'MyApp.view.MainController',
        'MyApp.view.MainModel'
    ],

    controller : 'myapp-main',

    viewModel : {
        type : 'myapp-main'
    },

    columns : [
        {
            text      : 'Name',
            dataIndex : 'name',
            flex      : 1
        }
    ],

    bind : {
        store : '{users}',
        title : '{title}'
    },

    listeners : {
        scope     : 'controller',
        itemclick : 'onUserClick'
    }
});
