Ext.define('SenchaTouchTest.model.User', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'gender', type: 'string' }
      ],
      validations: [
        {type: 'inclusion', field: 'gender', list: ['M', 'F']}
      ]
    }
});