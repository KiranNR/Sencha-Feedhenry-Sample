Ext.define("SenchaTouchTest.controller.QueryUserAction", {
  extend : "Ext.app.Controller",
	config : {
		control : {
			'#queryUserBtn' : {
				tap : 'onQueryUser'
			},
      '#delAllBtn' : {
        tap: 'onDeleteAll'
      }
		}
	},
  onQueryUser : function(button, event, eventOpts) {
    try{
      var form = Ext.getCmp('queryUserForm');
      var values = form.getValues();
      $fh.act({
        "act": "listDB",
        "req":{
          "entityName": 'User',
          "name": values.name
        }
      }, function(res) {
        var dataview = Ext.getCmp('showUserView');
        dataview.getStore().removeAll();
        for (var i=0;i<res.list.length;i++){
          dataview.getStore().add(res.list[i].fields);
        }
        dataview.refresh();
      }, function(msg, err) {
        alert(err.error);
      });
    }catch(e){
      alert(e);
    }
  },
  onDeleteAll : function(button, event, eventOpts) {
    if (!confirm('Delete all users, are you sure?')){
      return;
    }
    try{
      $fh.act({
        "act": "listDB",
        "req":{
          "entityName": 'User',
          "name": ''
        } 
      }, function(res) {
        var ids = [];
        for (var i=0;i<res.list.length;i++){
          ids.push(res.list[i].guid);
        }
        $fh.act({
          "act": "deleteDB",
          "req":{
            "entityName": 'User',
            "guid": ids
          } 
        },function(){
          alert('Successful Delete');
        });
      }, function(msg, err) {
        alert(err.error);
      });
    }catch(e){
      alert(e);
    }
  }
});