
undesiredKey = (key) ->
  if key in ['id','component','editable','index']
    return yes
  else
    no

formlyPropertiesReplacer = (key,value) ->
  if typeof key is 'string' and (key.charAt(0) is '$' or undesiredKey(key))
    undefined
  else
      value

# ----------------------------------------
# builder.filter
# used for filtering non-formly properties
# ----------------------------------------
angular.module 'builder.filter', []

.filter 'formlyJSON', ->
  (object) ->
    undefined if object is undefined
    JSON.stringify object, formlyPropertiesReplacer, '  '