/**
 * Save a single record
 */
function saveDB(params){
      return $fh.db({
        "act": "create",
        "type": params.entityName,
        "fields": params.obj
      });
}
/**
 * Get a single record from database
 */
function readDB(params){
    return $fh.db({
        "act": "read",
        "type": params.entityName,
        "guid": params.guid
    });
}
/**
 * Query for result set
 */
function listDB(params){
    var regex;
    if (params.name==='')
    {
      regex = '[a-zA-Z0-9]+';
    }else{
      regex = '[a-zA-Z0-9]*(' + params.name + ')[a-zA-Z0-9]*';
    }
    return $fh.db({
      "act": "list",
      "type": params.entityName,
      "like": {
        "name": regex
      }
    });
}
/**
 * Delete records
 */
function deleteDB(params){
  var ids = [];
  var i;
  if (params.guid instanceof Array){
    for (i=0;i<params.guid.length;i++){
      ids.push(params.guid[i]);
    }
  }else{
    ids.push(params.guid);
  }
  for (i=0;i<ids.length;i++){
    $fh.db({
      "act": "delete",
      "type": params.entityName,
      "guid": ids[i]
    });
  }
}
