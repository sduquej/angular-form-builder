angular.module 'builder.components', ['builder', 'validator.rules']

.config ['$builderProvider', ($builderProvider) ->
    # ----------------------------------------
    # text input
    # ----------------------------------------
    $builderProvider.registerComponent 'textInput',
        group: 'Default'
        label: 'Text Input'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        validationOptions: [
            {label: 'none', rule: '/.*/'}
            {label: 'number', rule: '[number]'}
            {label: 'email', rule: '[email]'}
            {label: 'url', rule: '[url]'}
        ]
        templateOptions:
          label: 'Text Input'
          placeholder: 'Text Input placeholder'
          required: no
          options: []
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <input type="text" ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" placeholder="{{placeholder}}"/>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required</label>
                </div>
                <div class="form-group" ng-if="validationOptions.length > 0">
                    <label class='control-label'>Validation</label>
                    <select ng-model="$parent.validation" class='form-control' ng-options="option.rule as option.label for option in validationOptions"></select>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # Text area
    # ----------------------------------------
    $builderProvider.registerComponent 'textArea',
        group: 'Default'
        label: 'Text Area'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        templateOptions:
          label: 'Text Area'
          placeholder: 'Text Area placeholder'
          required: no
          options: []
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <textarea type="text" ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" rows='6' placeholder="{{placeholder}}"/>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required</label>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # checkbox
    # ----------------------------------------
    $builderProvider.registerComponent 'checkbox',
        group: 'Default'
        label: 'Checkbox'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        options: ['value one', 'value two','value #3']
        arrayToText: yes
        templateOptions:
          label: 'Checkbox'
          placeholder: 'Checkbox placeholder'
          required: no
          options: [
            {name: 'Value One', value: '1'}
            {name: 'Value Two', value: '2'}
            {name: 'Value #3', value: '3'}
          ]
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <input type='hidden' ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}"/>
                    <div class='checkbox' ng-repeat="item in options track by $index">
                        <label><input type='checkbox' ng-model="$parent.inputArray[$index]" value='{{item}}'/>
                            {{item}}
                        </label>
                    </div>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Options</label>
                    <textarea class="form-control" rows="3" ng-model="optionsText"/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required
                    </label>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # radio
    # ----------------------------------------
    $builderProvider.registerComponent 'radio',
        group: 'Default'
        label: 'Radio'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        options: ['pick this', 'or that']
        #A LA FORMLY
        templateOptions:
          label: 'Radio'
          placeholder: 'Radio placeholder'
          required: no
          options: [
            {name: 'Value One', value: 'O'}
            {name: 'Value Two', value: 'T'}
          ]
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <div class='radio' ng-repeat="item in options track by $index">
                        <label><input name='{{formName+index}}' ng-model="$parent.inputText" validator-group="{{formName}}" value='{{item}}' type='radio'/>
                            {{item}}
                        </label>
                    </div>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Options</label>
                    <textarea class="form-control" rows="3" ng-model="optionsText"/>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # select
    # ----------------------------------------
    $builderProvider.registerComponent 'select',
      group: 'Default'
      label: 'Select'
      description: 'description'
      placeholder: 'placeholder'
      required: no
      options: ['value one', 'value two']
      #A LA FORMLY
      templateOptions:
        label: 'Select'
        placeholder: 'select placeholder'
        required: no
        options: [
            {name: 'First Option', value: 'F'}
            {name: 'Second Option', value: 'S'}
        ]
      template:
          """
          <div class="form-group">
              <label for="{{formName+index}}" class="col-sm-4 control-label">{{label}}</label>
              <div class="col-sm-8">
                  <select ng-options="option.value as option.name for option in templateOptions.options" id="{{formName+index}}" class="form-control"
                      ng-model="inputText" ng-init="inputText = options[0]"/>
                  <p class='help-block'>{{description}}</p>
              </div>
          </div>
          """
      popoverTemplate:
          """
          <form>
              <div class="form-group">
                  <label class='control-label'>Label</label>
                  <input type='text' ng-model="label" validator="[required]" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Description</label>
                  <input type='text' ng-model="description" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Template Options</label>
                  <button type="button" class="btn btn-success btn-xs" aria-label="Add Option" ng-click='templateOptions.options.push({"name": "New Option","value":"New!"})'>
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                  <div ng-repeat='option in templateOptions.options' class="form-group">
                      <label class='control-label'>Option {{$index+1}} </label>
                    <button type="button" class="btn btn-danger btn-xs" aria-label="Remove Option" ng-click='templateOptions.options.splice($index,1)'>
                      <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                    </button>
                    <div class="form-inline">
                      Value <input type="text" ng-model='option.value'class="form-control"/>
                      Name <input type="text" ng-model='option.name' class="form-control"/>
                    </div>
                  </div>
<!--                  <textarea class="form-control" rows="3" ng-model="valuesText"/>
                  <textarea class="form-control" rows="3" ng-model="optionsText"/>
-->
              </div>

              <hr/>
              <div class='form-group'>
                  <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                  <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                  <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
              </div>
          </form>
          """

      # ----------------------------------------
      # upload photo button
      # ----------------------------------------
      $builderProvider.registerComponent 'uploadPhoto',
        group: 'Advanced'
        label: 'Upload Photo'
        description: 'description'
        required: no
        template:
          """
          <div class="row">
              <label class="col-sm-2 control-label">
                  <label for="{{formName+index}}" ng-class="{'fb-required':required}">{{label}}</label>
                  <br>
                  <small class="help-block text-muted custom-small">{{description}}</small>
              </label>
              <div class="col-sm-10">
                  <input type="file" class="m-b" accept="image/*" capture="camera" id="{{formName+index}}">
              </div>
          </div>
          """
        popoverTemplate:
          """
          <form>
              <div role="tabpanel">
                  <!-- Nav tabs -->
                  <ul class="nav nav-justified nav-tabs" role="tablist" style="margin-left:-10px">
                      <li role="presentation" class="active"><a href="{{'#properties' + date + index}}" aria-controls="{{'properties' + date + index}}" role="tab" data-toggle="tab">Properties</a></li>
                      <li role="presentation"><a href="{{'#validations' + date + index}}" aria-controls="{{'validations' + date + index}}" role="tab" data-toggle="tab">Validations</a></li>
                  </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="{{'properties' + date + index}}">
                          <div class="form-group">
                              <label class='control-label'>Label</label>
                              <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                          </div>
                          <div class="form-group">
                              <label class='control-label'>Description</label>
                              <input type='text' ng-model="description" class='form-control'/>
                          </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="{{'validations' + date + index}}">
                          <div class="checkbox">
                              <label>
                                  <input type='checkbox' ng-model="required" />
                                  Required</label>
                          </div>
                          <div class="form-group" ng-if="validationOptions.length > 0">
                              <label class='control-label'>Validation</label>
                              <select ng-model="$parent.validation" class='form-control' ng-options="option.rule as option.label for option in validationOptions"></select>
                          </div>
                      </div>

                  </div>
              </div>
              <hr/>
              <div class='form-group'>
                  <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Apply'/>
                  <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                  <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
              </div>
          </form>
          """
]
