angular.module 'builder.components', ['builder', 'validator.rules']

.config ['$builderProvider', ($builderProvider) ->
    # ----------------------------------------
    # text input
    # ----------------------------------------
    $builderProvider.registerComponent 'input',
        group: 'Default'
        key: 'unique_id'
        type: 'input'
        inputTypes: ['text', 'number', 'email', 'url']
        templateOptions:
          type: 'text'
          label: 'Text Input'
          placeholder: 'Text Input placeholder'
          description: 'This field may be validated as: number, email or url'
          required: no
          options: []
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{templateOptions.label}}</label>
                <div class="col-sm-8">
                    <input type="text" ng-model="inputText" validator-required="{{templateOptions.required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" placeholder="{{templateOptions.placeholder}}"/>
                    <p class='help-block'>{{templateOptions.description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                 <div class="form-group">
                    <label class='control-label'>Column Name</label>
                    <input type='text' ng-model="key" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="templateOptions.description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="templateOptions.placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="templateOptions.required" />
                        Required</label>
                </div>
                <div class="form-group">
                    <label class='control-label'>Type of Data</label>
                    <select ng-model="templateOptions.type" class='form-control' ng-options="type for type in inputTypes"></select>
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
        key: 'unique_id'
        type: 'textarea'
        templateOptions:
          label: 'Text Area'
          placeholder: 'Text Area placeholder'
          description: 'Useful for open questions and long text'
          required: no
          options: []
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{templateOptions.label}}</label>
                <div class="col-sm-8">
                    <textarea type="text" ng-model="templateOptions.inputText" validator-required="{{templateOptions.required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" rows='6' placeholder="{{templateOptions.placeholder}}"/>
                    <p class='help-block'>{{templateOptions.description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Column Name</label>
                    <input type='text' ng-model="key" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="templateOptions.description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="templateOptions.placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="templateOptions.required" />
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
    # select
    # ----------------------------------------
    $builderProvider.registerComponent 'select',
      key: 'unique_id_select'
      group: 'Default'
      type: 'select'
      templateOptions:
        label: 'Select'
        description: 'An option may be selected'
        required: no
        options: [
            {name: 'First Option', value: 'F'}
            {name: 'Second Option', value: 'S'}
        ]
      template:
          """
          <div class="form-group">
              <label for="{{formName+index}}" class="col-sm-4 control-label">{{templateOptions.label}}</label>
              <div class="col-sm-8">
                  <select ng-options="option.value as option.name for option in templateOptions.options" id="{{formName+index}}" class="form-control"
                      ng-model="inputText" ng-init="inputText = options[0]"/>
                  <p class='help-block'>{{templateOptions.description}}</p>
              </div>
          </div>
          """
      popoverTemplate:
          """
          <form>
            <div class="form-group">
              <label class='control-label'>Column Name</label>
              <input type='text' ng-model="key" validator="[required]" class='form-control'/>
            </div>
              <div class="form-group">
                  <label class='control-label'>Label</label>
                  <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Description</label>
                  <input type='text' ng-model="templateOptions.description" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Options</label>

                  <button type="button" class="btn btn-success btn-xs" aria-label="Add Option" ng-click='templateOptions.options.push({"name": "New Option","value":"New!"})'>
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>

                  <div ng-repeat='option in templateOptions.options' class="form-inline">
                    <div class="row">
                      <div class="col-md-10">
                        <label class='control-label'>Option {{$index+1}} </label>
                      </div>
                      <div class="col-md-1">
                        <button type="button" class="btn btn-danger btn-xs" aria-label="Remove Option" ng-click='templateOptions.options.splice($index,1)'>
                          <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                    <div class="form-group">
                      Value <input type="text" ng-model='option.value'class="form-control"/>
                      Name <input type="text" ng-model='option.name' class="form-control"/>
                    </div>
                  </div>
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
        key: 'unique_id'
        type: 'radio'
        templateOptions:
          label: 'Radio'
          description: 'Only one option may be chosen'
          required: no
          options: [
            {name: 'Value One', value: 'O'}
            {name: 'Value Two', value: 'T'}
          ]
        template:
          """
          <div class="form-group">
            <label for="{{formName+index}}" class="col-sm-4 control-label">{{templateOptions.label}}</label>
            <div class="col-sm-8">
              <div ng-repeat="(key, option) in templateOptions.options" class="radio">
                <label>
                  <input type="radio"
                     ng-value="option.value"
                     name="{{formName+index}}" />
                  {{option.name}}
                </label>
              </div>
              <p class='help-block'>{{templateOptions.description}}</p>
            </div>
          </div>
          """
        popoverTemplate:
          """
           <form>
            <div class="form-group">
              <label class='control-label'>Column Name</label>
              <input type='text' ng-model="key" validator="[required]" class='form-control'/>
            </div>
              <div class="form-group">
                  <label class='control-label'>Label</label>
                  <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Description</label>
                  <input type='text' ng-model="templateOptions.description" class='form-control'/>
              </div>
              <div class="form-group">
                  <label class='control-label'>Options</label>

                  <button type="button" class="btn btn-success btn-xs" aria-label="Add Option" ng-click='templateOptions.options.push({"name": "New Option","value":"New!"})'>
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>

                  <div ng-repeat='option in templateOptions.options' class="form-inline">
                    <div class="row">
                      <div class="col-md-10">
                        <label class='control-label'>Option {{$index+1}} </label>
                      </div>
                      <div class="col-md-1">
                        <button type="button" class="btn btn-danger btn-xs" aria-label="Remove Option" ng-click='templateOptions.options.splice($index,1)'>
                          <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                    <div class="form-group">
                      Value <input type="text" ng-model='option.value'class="form-control"/>
                      Name <input type="text" ng-model='option.name' class="form-control"/>
                    </div>
                  </div>
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
      # file upload input
      # ----------------------------------------
      $builderProvider.registerComponent 'file',
        group: 'Advanced'
        key: 'files'
        type: 'fileField'
        templateOptions:
          label: 'Upload File'
          required: no
          description: 'description'
          options: []
        template:
          """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{templateOptions.label}}</label>
                <div class="col-sm-8">
                    <input type="file" class="m-b" id="{{formName+index}}">
                    <p class='help-block'>{{templateOptions.description}}</p>
                </div>
            </div>
          """
        popoverTemplate:
          """
          <form>
            <!-- The key for the file input must always be 'files'
            <div class="form-group">
                <label class='control-label'>Column Name</label>
              <input type='text' ng-model="key" validator="[required]" class='form-control'/>
            </div>
            -->
            <div class="form-group">
                <label class='control-label'>Label</label>
                <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
            </div>
            <div class="form-group">
                <label class='control-label'>Description</label>
                <input type='text' ng-model="templateOptions.description" class='form-control'/>
            </div>
            <div class="checkbox">
                <label>
                    <input type='checkbox' ng-model="templateOptions.required" />
                    Required
                </label>
            </div>

              <hr/>
              <div class='form-group'>
                  <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Apply'/>
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
        key: 'unique_id_checkbox'
        type: 'checkbox'
        templateOptions:
          label: 'Checkbox'
          description: 'This input may be ticked'
          required: no
          options: []
        template:
            """
            <div class="form-group">
              <div class="col-sm-8 col-sm-offset-4 checkbox">
                <label>
                  <input type="checkbox"/>
                  {{templateOptions.label}}
                </label>
                <p class='help-block'>{{templateOptions.description}}</p>
              </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                  <label class='control-label'>Column Name</label>
                  <input type='text' ng-model="key" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="templateOptions.description" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="templateOptions.required" />
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
    # date input
    # ----------------------------------------
    $builderProvider.registerComponent 'date',
      group: 'Advanced'
      key: 'unique_date_id'
      type: 'input'
      templateOptions:
        type: 'date'
        label: 'Date Input'
        description: 'Perhaps the date of the observation?'
        placeholder: 'yyyy-mm-dd'
        required: no
        options: []
      template:
        """
        <div class="form-group">
            <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{templateOptions.label}}</label>
            <div class="col-sm-8">
                <input type="date" ng-model="inputText" validator-required="{{templateOptions.required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control""/>
                <p class='help-block'>{{templateOptions.description}}</p>
            </div>
        </div>
        """
      popoverTemplate:
        """
        <form>
             <div class="form-group">
                <label class='control-label'>Column Name</label>
                <input type='text' ng-model="key" validator="[required]" class='form-control'/>
            </div>
            <div class="form-group">
                <label class='control-label'>Label</label>
                <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
            </div>
            <div class="form-group">
                <label class='control-label'>Description</label>
                <input type='text' ng-model="templateOptions.description" class='form-control'/>
            </div>
            <div class="checkbox">
                <label>
                    <input type='checkbox' ng-model="templateOptions.required" />
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

    ######################
    # Current Location
    ######################
    $builderProvider.registerComponent 'currentLocation',
      key: 'location'
      type: 'currentLocation'
      group: 'Advanced'
      templateOptions:
        label: 'Location'
        description: 'Get GPS location'
        placeholder: 'Coordinates'
        required: no
        options: []
      template:
        """
        <div class="form-group">
          <label for="{{formName+index}}" class="col-sm-4 control-label">{{templateOptions.label}}</label>
          <div class="col-sm-8">
            <div class="input-group">
              <input class="form-control" type="text" disabled placeholder="Coordinates" ng-model="vm.location"/>
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="vm.setLocation()">
                  <i class="glyphicon glyphicon-map-marker"></i>
                </button>
              </span>
            </div>
            <p class='help-block'>{{templateOptions.description}}</p>
          </div>

        """
      popoverTemplate:
        """
        <form>
          <div class="form-group">
            <label class='control-label'>Column Name</label>
            <input type='text' ng-model="key" validator="[required]" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Label</label>
              <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Placeholder</label>
              <input type='text' ng-model="templateOptions.placeholder" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Description</label>
              <input type='text' ng-model="templateOptions.description" class='form-control'/>
          </div>
          <div class="checkbox">
              <label>
                  <input type='checkbox' ng-model="templateOptions.required" />
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

    ######################
    # Map Location
    ######################
    $builderProvider.registerComponent 'mapLocation',
      key: 'location'
      type: 'mapLocation'
      group: 'Advanced'
      templateOptions:
        label: 'Map location'
        description: 'Select location'
        placeholder: 'Click on map'
        required: no
        options: []
      template:
        """
        <div class="form-group">
          <label for="{{formName+index}}" class="col-sm-4 control-label">{{templateOptions.label}}</label>
          <div class="col-sm-8">
            <div class="input-group">
              <input class="form-control" type="text" disabled placeholder="Coordinates" ng-model="vm.location"/>
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" ng-click="vm.setLocation()">
                  <i class="glyphicon glyphicon-globe"></i>
                </button>
              </span>
            </div>
            <p class='help-block'>{{templateOptions.description}}</p>
          </div>
        """
      popoverTemplate:
        """
        <form>
          <div class="form-group">
            <label class='control-label'>Column Name</label>
            <input type='text' ng-model="key" validator="[required]" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Label</label>
              <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Placeholder</label>
              <input type='text' ng-model="templateOptions.placeholder" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Description</label>
              <input type='text' ng-model="templateOptions.description" class='form-control'/>
          </div>
          <div class="checkbox">
              <label>
                  <input type='checkbox' ng-model="templateOptions.required" />
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
    # County select
    # ----------------------------------------
    $builderProvider.registerComponent 'countySelect',
      key: 'county'
      group: 'Advanced'
      type: 'select'
      templateOptions:
        label: 'County'
        description: 'Select a County'
        required: no
        options: [
          {name: 'Antrim', value: 'Antrim'}
          {name: 'Armagh', value: 'Armagh'}
          {name: 'Carlow', value: 'Carlow'}
          {name: 'Cavan', value: 'Cavan'}
          {name: 'Clare', value: 'Clare'}
          {name: 'Cork', value: 'Cork'}
          {name: 'Derry', value: 'Derry'}
          {name: 'Donegal', value: 'Donegal'}
          {name: 'Down', value: 'Down'}
          {name: 'Dublin', value: 'Dublin'}
          {name: 'Fermanagh', value: 'Fermanagh'}
          {name: 'Galway', value: 'Galway'}
          {name: 'Kerry', value: 'Kerry'}
          {name: 'Kildare', value: 'Kildare'}
          {name: 'Kilkenny', value: 'Kilkenny'}
          {name: 'Laois', value: 'Laois'}
          {name: 'Leitrim', value: 'Leitrim'}
          {name: 'Limerick', value: 'Limerick'}
          {name: 'Longford', value: 'Longford'}
          {name: 'Louth', value: 'Louth'}
          {name: 'Mayo', value: 'Mayo'}
          {name: 'Meath', value: 'Meath'}
          {name: 'Monaghan', value: 'Monaghan'}
          {name: 'Offaly', value: 'Offaly'}
          {name: 'Roscommon', value: 'Roscommon'}
          {name: 'Sligo', value: 'Sligo'}
          {name: 'Tipperary', value: 'Tipperary'}
          {name: 'Tyrone', value: 'Tyrone'}
          {name: 'Waterford', value: 'Waterford'}
          {name: 'Westmeath', value: 'Westmeath'}
          {name: 'Wexford', value: 'Wexford'}
          {name: 'Wicklow', value: 'Wicklow'}
        ]

      template:
        """
        <div class="form-group">
          <label for="{{formName+index}}" class="col-sm-4 control-label">{{templateOptions.label}}</label>
          <div class="col-sm-8">
            <select ng-options="option.value as option.name for option in templateOptions.options" id="{{formName+index}}" class="form-control"
                ng-model="inputText" ng-init="inputText = options[0]"/>
            <p class='help-block'>{{templateOptions.description}}</p>
          </div>
        </div>
        """
      popoverTemplate:
       """
       <form>
        <div class="form-group">
          <label class='control-label'>Column Name</label>
          <input type='text' ng-model="key" validator="[required]" class='form-control'/>
        </div>
          <div class="form-group">
              <label class='control-label'>Label</label>
              <input type='text' ng-model="templateOptions.label" validator="[required]" class='form-control'/>
          </div>
          <div class="form-group">
              <label class='control-label'>Description</label>
              <input type='text' ng-model="templateOptions.description" class='form-control'/>
          </div>

          <hr/>
          <div class='form-group'>
              <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
              <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
              <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
          </div>
       </form>
       """
]
