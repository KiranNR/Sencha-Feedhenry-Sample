Ext.define("SenchaTouchTest.controller.AddUserAction", {
	extend : "Ext.app.Controller",
	config : {
		control : {
			'#addUserBtn' : {
				tap : 'onAddUser'
			}
		}
	},
	onAddUser : function(button, event, eventOpts) {
		try{
			var form = Ext.getCmp('addUserForm');
			var values = form.getValues();
      var user = {
        "name": values.name,
        "age": values.age,
        "gender": values.gender
      };
      $fh.act({
        "act": "saveDB",
        "req":{
          "obj": user,
          "entityName": 'User'
        }
      }, function(res) {
        alert('Save Success, guid is ' + res.guid);
      }, function(msg, err) {
        alert(err.error);
      });
		}catch(e){
			alert(e);
		}
	}
});

