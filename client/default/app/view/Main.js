Ext.define("SenchaTouchTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.Img', 'Ext.dataview.DataView'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Create',
                iconCls: 'home',
                scrollable: true,
                layout: 'vbox',

                items: [
                    {
                    	docked: 'top',
                    	xtype: 'titlebar',
                    	title: 'Add a new user'
                    },
                    {
                    	xtype: 'addUserView',
                    	flex: 1
                    }
                ]
            },
            {
                title: 'Query',
                iconCls: 'action',
                layout: 'vbox',
                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Query User'
                    },
                    {
                        xtype: 'queryUserView',
                        flex: 1
                    },
                    {
                        id: 'showUserView',
                        xtype: 'list',
                        store: 'Users',
                        itemTpl: '<div>{name}&nbsp;&nbsp;{age}&nbsp;&nbsp;{gender}</div>',
                        flex: 1
                    }
                ]
            }
        ]
    }
});