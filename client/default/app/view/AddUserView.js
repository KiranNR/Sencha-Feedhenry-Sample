/**
 * The new user view.
 */
Ext.define('SenchaTouchTest.view.AddUserView', {
	extend: 'Ext.form.Panel',
	id: 'addUserForm',
	xtype: 'addUserView',
	requires: [ 'Ext.form.FieldSet','Ext.Label','Ext.field.Text',
  'Ext.field.Number','Ext.field.DatePicker','Ext.field.Radio'],

	config: {

		items: [{
			xtype: 'fieldset',
			title: 'User Information',
			flex: 6,
			items: [
			        {
			        	xtype: 'textfield',
			        	label: 'Name',
			        	name: 'name',
			        	required: true
			        },
			        {
			        	xtype: 'numberfield',
			        	label: 'Age',
			        	name: 'age'
			        },
			        {
			        	xtype: 'datepickerfield',
			        	label: 'Birth Date',
			        	name: 'birthdate'
			        },
			        {
			        	xtype: 'radiofield',
			        	label: 'Male',
			        	name: 'gender',
			        	value: 'M',
			        	checked: true
			        },
			        {
			        	xtype: 'radiofield',
			        	label: 'Female',
			        	name: 'gender',
			        	value: 'F'
			        }
			        ]
		},
		{
			id: 'addUserBtn',
			xtype: 'button',
			text: 'Submit',
			flex: 1
		}]
	}
});
