(function() {
  angular.module('builder.components', ['builder', 'validator.rules']).config([
    '$builderProvider', function($builderProvider) {
      $builderProvider.registerComponent('input', {
        group: 'Default',
        key: 'unique_id',
        type: 'input',
        inputTypes: ['text', 'number', 'email', 'url'],
        templateOptions: {
          type: 'text',
          label: 'Text Input',
          placeholder: 'Text Input placeholder',
          description: 'This field may be validated as: number, email or url',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{templateOptions.label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"text\" ng-model=\"inputText\" validator-required=\"{{templateOptions.required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{templateOptions.placeholder}}\"/>\n        <p class='help-block'>{{templateOptions.description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n     <div class=\"form-group\">\n        <label class='control-label'>Column Name</label>\n        <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"templateOptions.placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"templateOptions.required\" />\n            Required</label>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Type of Data</label>\n        <select ng-model=\"templateOptions.type\" class='form-control' ng-options=\"type for type in inputTypes\"></select>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('textArea', {
        group: 'Default',
        key: 'unique_id',
        type: 'textarea',
        templateOptions: {
          label: 'Text Area',
          placeholder: 'Text Area placeholder',
          description: 'Useful for open questions and long text',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{templateOptions.label}}</label>\n    <div class=\"col-sm-8\">\n        <textarea type=\"text\" ng-model=\"templateOptions.inputText\" validator-required=\"{{templateOptions.required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{templateOptions.placeholder}}\"/>\n        <p class='help-block'>{{templateOptions.description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Column Name</label>\n        <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"templateOptions.placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"templateOptions.required\" />\n            Required</label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('select', {
        key: 'unique_id_select',
        group: 'Default',
        type: 'select',
        templateOptions: {
          label: 'Select',
          description: 'An option may be selected',
          required: false,
          options: [
            {
              name: 'First Option',
              value: 'F'
            }, {
              name: 'Second Option',
              value: 'S'
            }
          ]
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{templateOptions.label}}</label>\n    <div class=\"col-sm-8\">\n        <select ng-options=\"option.value as option.name for option in templateOptions.options\" id=\"{{formName+index}}\" class=\"form-control\"\n            ng-model=\"inputText\" ng-init=\"inputText = options[0]\"/>\n        <p class='help-block'>{{templateOptions.description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n  <div class=\"form-group\">\n    <label class='control-label'>Column Name</label>\n    <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n  </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n\n        <button type=\"button\" class=\"btn btn-success btn-xs\" aria-label=\"Add Option\" ng-click='templateOptions.options.push({\"name\": \"New Option\",\"value\":\"New!\"})'>\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n        </button>\n\n        <div ng-repeat='option in templateOptions.options' class=\"form-inline\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <label class='control-label'>Option {{$index+1}} </label>\n            </div>\n            <div class=\"col-md-1\">\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" aria-label=\"Remove Option\" ng-click='templateOptions.options.splice($index,1)'>\n                <span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\n              </button>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            Value <input type=\"text\" ng-model='option.value'class=\"form-control\"/>\n            Name <input type=\"text\" ng-model='option.name' class=\"form-control\"/>\n          </div>\n        </div>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      }, $builderProvider.registerComponent('radio', {
        group: 'Default',
        key: 'unique_id',
        type: 'radio',
        templateOptions: {
          label: 'Radio',
          description: 'Only one option may be chosen',
          required: false,
          options: [
            {
              name: 'Value One',
              value: 'O'
            }, {
              name: 'Value Two',
              value: 'T'
            }
          ]
        },
        template: "<div class=\"form-group\">\n  <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{templateOptions.label}}</label>\n  <div class=\"col-sm-8\">\n    <div ng-repeat=\"(key, option) in templateOptions.options\" class=\"radio\">\n      <label>\n        <input type=\"radio\"\n           ng-value=\"option.value\"\n           name=\"{{formName+index}}\" />\n        {{option.name}}\n      </label>\n    </div>\n    <p class='help-block'>{{templateOptions.description}}</p>\n  </div>\n</div>",
        popoverTemplate: " <form>\n  <div class=\"form-group\">\n    <label class='control-label'>Column Name</label>\n    <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n  </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n\n        <button type=\"button\" class=\"btn btn-success btn-xs\" aria-label=\"Add Option\" ng-click='templateOptions.options.push({\"name\": \"New Option\",\"value\":\"New!\"})'>\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n        </button>\n\n        <div ng-repeat='option in templateOptions.options' class=\"form-inline\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <label class='control-label'>Option {{$index+1}} </label>\n            </div>\n            <div class=\"col-md-1\">\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" aria-label=\"Remove Option\" ng-click='templateOptions.options.splice($index,1)'>\n                <span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\n              </button>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            Value <input type=\"text\" ng-model='option.value'class=\"form-control\"/>\n            Name <input type=\"text\" ng-model='option.name' class=\"form-control\"/>\n          </div>\n        </div>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      }), $builderProvider.registerComponent('file', {
        group: 'Advanced',
        key: 'files',
        type: 'fileField',
        templateOptions: {
          label: 'Upload File',
          required: false,
          description: 'description',
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{templateOptions.label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"file\" class=\"m-b\" id=\"{{formName+index}}\">\n        <p class='help-block'>{{templateOptions.description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n  <!-- The key for the file input must always be 'files'\n  <div class=\"form-group\">\n      <label class='control-label'>Column Name</label>\n    <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n  </div>\n  -->\n  <div class=\"form-group\">\n      <label class='control-label'>Label</label>\n      <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Description</label>\n      <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n  </div>\n  <div class=\"checkbox\">\n      <label>\n          <input type='checkbox' ng-model=\"templateOptions.required\" />\n          Required\n      </label>\n  </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Apply'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      }));
      $builderProvider.registerComponent('checkbox', {
        group: 'Default',
        key: 'unique_id_checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Checkbox',
          description: 'This input may be ticked',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n  <div class=\"col-sm-8 col-sm-offset-4 checkbox\">\n    <label>\n      <input type=\"checkbox\"/>\n      {{templateOptions.label}}\n    </label>\n    <p class='help-block'>{{templateOptions.description}}</p>\n  </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n      <label class='control-label'>Column Name</label>\n      <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"templateOptions.required\" />\n            Required</label>\n    </div>\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('date', {
        group: 'Advanced',
        key: 'unique_date_id',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Date Input',
          description: 'Perhaps the date of the observation?',
          placeholder: 'yyyy-mm-dd',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{templateOptions.label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"date\" ng-model=\"inputText\" validator-required=\"{{templateOptions.required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\"\"/>\n        <p class='help-block'>{{templateOptions.description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n     <div class=\"form-group\">\n        <label class='control-label'>Column Name</label>\n        <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"templateOptions.required\" />\n            Required</label>\n    </div>\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('currentLocation', {
        key: 'location',
        type: 'currentLocation',
        group: 'Advanced',
        templateOptions: {
          label: 'Location',
          description: 'Get GPS location',
          placeholder: 'Coordinates',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n  <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{templateOptions.label}}</label>\n  <div class=\"col-sm-8\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" type=\"text\" disabled placeholder=\"Coordinates\" ng-model=\"vm.location\"/>\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.setLocation()\">\n          <i class=\"glyphicon glyphicon-map-marker\"></i>\n        </button>\n      </span>\n    </div>\n    <p class='help-block'>{{templateOptions.description}}</p>\n  </div>\n",
        popoverTemplate: "<form>\n  <div class=\"form-group\">\n    <label class='control-label'>Column Name</label>\n    <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Label</label>\n      <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Placeholder</label>\n      <input type='text' ng-model=\"templateOptions.placeholder\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Description</label>\n      <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n  </div>\n  <div class=\"checkbox\">\n      <label>\n          <input type='checkbox' ng-model=\"templateOptions.required\" />\n          Required</label>\n  </div>\n  <hr/>\n  <div class='form-group'>\n      <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n      <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n      <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n  </div>\n</form>"
      });
      $builderProvider.registerComponent('mapLocation', {
        key: 'location',
        type: 'mapLocation',
        group: 'Advanced',
        templateOptions: {
          label: 'Map location',
          description: 'Select location',
          placeholder: 'Click on map',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n  <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{templateOptions.label}}</label>\n  <div class=\"col-sm-8\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" type=\"text\" disabled placeholder=\"Coordinates\" ng-model=\"vm.location\"/>\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.setLocation()\">\n          <i class=\"glyphicon glyphicon-globe\"></i>\n        </button>\n      </span>\n    </div>\n    <p class='help-block'>{{templateOptions.description}}</p>\n  </div>",
        popoverTemplate: "<form>\n  <div class=\"form-group\">\n    <label class='control-label'>Column Name</label>\n    <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Label</label>\n      <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Placeholder</label>\n      <input type='text' ng-model=\"templateOptions.placeholder\" class='form-control'/>\n  </div>\n  <div class=\"form-group\">\n      <label class='control-label'>Description</label>\n      <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n  </div>\n  <div class=\"checkbox\">\n      <label>\n          <input type='checkbox' ng-model=\"templateOptions.required\" />\n          Required\n      </label>\n  </div>\n  <hr/>\n  <div class='form-group'>\n      <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n      <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n      <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n  </div>\n</form>"
      });
      return $builderProvider.registerComponent('countySelect', {
        key: 'county',
        group: 'Advanced',
        type: 'select',
        templateOptions: {
          label: 'County',
          description: 'Select a County',
          required: false,
          options: [
            {
              name: 'Antrim',
              value: 'Antrim'
            }, {
              name: 'Armagh',
              value: 'Armagh'
            }, {
              name: 'Carlow',
              value: 'Carlow'
            }, {
              name: 'Cavan',
              value: 'Cavan'
            }, {
              name: 'Clare',
              value: 'Clare'
            }, {
              name: 'Cork',
              value: 'Cork'
            }, {
              name: 'Derry',
              value: 'Derry'
            }, {
              name: 'Donegal',
              value: 'Donegal'
            }, {
              name: 'Down',
              value: 'Down'
            }, {
              name: 'Dublin',
              value: 'Dublin'
            }, {
              name: 'Fermanagh',
              value: 'Fermanagh'
            }, {
              name: 'Galway',
              value: 'Galway'
            }, {
              name: 'Kerry',
              value: 'Kerry'
            }, {
              name: 'Kildare',
              value: 'Kildare'
            }, {
              name: 'Kilkenny',
              value: 'Kilkenny'
            }, {
              name: 'Laois',
              value: 'Laois'
            }, {
              name: 'Leitrim',
              value: 'Leitrim'
            }, {
              name: 'Limerick',
              value: 'Limerick'
            }, {
              name: 'Longford',
              value: 'Longford'
            }, {
              name: 'Louth',
              value: 'Louth'
            }, {
              name: 'Mayo',
              value: 'Mayo'
            }, {
              name: 'Meath',
              value: 'Meath'
            }, {
              name: 'Monaghan',
              value: 'Monaghan'
            }, {
              name: 'Offaly',
              value: 'Offaly'
            }, {
              name: 'Roscommon',
              value: 'Roscommon'
            }, {
              name: 'Sligo',
              value: 'Sligo'
            }, {
              name: 'Tipperary',
              value: 'Tipperary'
            }, {
              name: 'Tyrone',
              value: 'Tyrone'
            }, {
              name: 'Waterford',
              value: 'Waterford'
            }, {
              name: 'Westmeath',
              value: 'Westmeath'
            }, {
              name: 'Wexford',
              value: 'Wexford'
            }, {
              name: 'Wicklow',
              value: 'Wicklow'
            }
          ]
        },
        template: "<div class=\"form-group\">\n  <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{templateOptions.label}}</label>\n  <div class=\"col-sm-8\">\n    <select ng-options=\"option.value as option.name for option in templateOptions.options\" id=\"{{formName+index}}\" class=\"form-control\"\n        ng-model=\"inputText\" ng-init=\"inputText = options[0]\"/>\n    <p class='help-block'>{{templateOptions.description}}</p>\n  </div>\n</div>",
        popoverTemplate: "<form>\n <div class=\"form-group\">\n   <label class='control-label'>Column Name</label>\n   <input type='text' ng-model=\"key\" validator=\"[required]\" class='form-control'/>\n </div>\n   <div class=\"form-group\">\n       <label class='control-label'>Label</label>\n       <input type='text' ng-model=\"templateOptions.label\" validator=\"[required]\" class='form-control'/>\n   </div>\n   <div class=\"form-group\">\n       <label class='control-label'>Description</label>\n       <input type='text' ng-model=\"templateOptions.description\" class='form-control'/>\n   </div>\n\n   <hr/>\n   <div class='form-group'>\n       <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n       <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n       <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n   </div>\n</form>"
      });
    }
  ]);

}).call(this);
