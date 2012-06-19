/**
 * The query user view.
 */
Ext.define('SenchaTouchTest.view.QueryUserView', {
	extend: 'Ext.form.Panel',
	id: 'queryUserForm',
	xtype: 'queryUserView',
	requires: [ 'Ext.form.FieldSet','Ext.Label','Ext.field.Text'],

	config: {
		items: [
		    {
          xtype: 'fieldset',
          title: 'User Information',
          items: [
            {
              xtype: 'textfield',
              label: 'Name',
              name: 'name'
            }
          ]
		    },
        {
          xtype: 'container',
          layout: 'hbox',
		      items: [{
            id: 'queryUserBtn',
            xtype: 'button',
            text: 'Query',
            flex: 1
		      },
          {
            id: 'delAllBtn',
            xtype: 'button',
            text: 'Delete All',
            flex: 1
		      }]
        }
		]
	}
});
