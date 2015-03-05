(function() {
  angular.module('builder.components', ['builder', 'validator.rules']).config([
    '$builderProvider', function($builderProvider) {
      $builderProvider.registerComponent('textInput', {
        group: 'Default',
        label: 'Text Input',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        validationOptions: [
          {
            label: 'none',
            rule: '/.*/'
          }, {
            label: 'number',
            rule: '[number]'
          }, {
            label: 'email',
            rule: '[email]'
          }, {
            label: 'url',
            rule: '[url]'
          }
        ],
        templateOptions: {
          label: 'Text Input',
          placeholder: 'Text Input placeholder',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required</label>\n    </div>\n    <div class=\"form-group\" ng-if=\"validationOptions.length > 0\">\n        <label class='control-label'>Validation</label>\n        <select ng-model=\"$parent.validation\" class='form-control' ng-options=\"option.rule as option.label for option in validationOptions\"></select>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('textArea', {
        group: 'Default',
        label: 'Text Area',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        templateOptions: {
          label: 'Text Area',
          placeholder: 'Text Area placeholder',
          required: false,
          options: []
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <textarea type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required</label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('checkbox', {
        group: 'Default',
        label: 'Checkbox',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['value one', 'value two', 'value #3'],
        arrayToText: true,
        templateOptions: {
          label: 'Checkbox',
          placeholder: 'Checkbox placeholder',
          required: false,
          options: [
            {
              name: 'Value One',
              value: '1'
            }, {
              name: 'Value Two',
              value: '2'
            }, {
              name: 'Value #3',
              value: '3'
            }
          ]
        },
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type='hidden' ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\"/>\n        <div class='checkbox' ng-repeat=\"item in options track by $index\">\n            <label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" value='{{item}}'/>\n                {{item}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('radio', {
        group: 'Default',
        label: 'Radio',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['pick this', 'or that'],
        templateOptions: {
          label: 'Radio',
          placeholder: 'Radio placeholder',
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
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <div class='radio' ng-repeat=\"item in options track by $index\">\n            <label><input name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/>\n                {{item}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      return $builderProvider.registerComponent('select', {
        group: 'Default',
        label: 'Select',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['value one', 'value two'],
        templateOptions: {
          label: 'Select',
          placeholder: 'select placeholder',
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
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <select ng-options=\"option.value as option.name for option in templateOptions.options\" id=\"{{formName+index}}\" class=\"form-control\"\n            ng-model=\"inputText\" ng-init=\"inputText = options[0]\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Template Options</label>\n        <button type=\"button\" class=\"btn btn-success btn-xs\" aria-label=\"Add Option\" ng-click='templateOptions.options.push({\"name\": \"New Option\",\"value\":\"New!\"})'>\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n        </button>\n        <div ng-repeat='option in templateOptions.options' class=\"form-group\">\n            <label class='control-label'>Option {{$index+1}} </label>\n          <button type=\"button\" class=\"btn btn-danger btn-xs\" aria-label=\"Remove Option\" ng-click='templateOptions.options.splice($index,1)'>\n            <span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>\n          </button>\n          <div class=\"form-inline\">\n            Value <input type=\"text\" ng-model='option.value'class=\"form-control\"/>\n            Name <input type=\"text\" ng-model='option.name' class=\"form-control\"/>\n          </div>\n        </div>\n<!--                  <textarea class=\"form-control\" rows=\"3\" ng-model=\"valuesText\"/>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n-->\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      }, $builderProvider.registerComponent('uploadPhoto', {
        group: 'Advanced',
        label: 'Upload Photo',
        description: 'description',
        required: false,
        template: "<div class=\"row\">\n    <label class=\"col-sm-2 control-label\">\n        <label for=\"{{formName+index}}\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n        <br>\n        <small class=\"help-block text-muted custom-small\">{{description}}</small>\n    </label>\n    <div class=\"col-sm-10\">\n        <input type=\"file\" class=\"m-b\" accept=\"image/*\" capture=\"camera\" id=\"{{formName+index}}\">\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div role=\"tabpanel\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-justified nav-tabs\" role=\"tablist\" style=\"margin-left:-10px\">\n            <li role=\"presentation\" class=\"active\"><a href=\"{{'#properties' + date + index}}\" aria-controls=\"{{'properties' + date + index}}\" role=\"tab\" data-toggle=\"tab\">Properties</a></li>\n            <li role=\"presentation\"><a href=\"{{'#validations' + date + index}}\" aria-controls=\"{{'validations' + date + index}}\" role=\"tab\" data-toggle=\"tab\">Validations</a></li>\n        </ul>\n        <!-- Tab panes -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{'properties' + date + index}}\">\n                <div class=\"form-group\">\n                    <label class='control-label'>Label</label>\n                    <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n                </div>\n                <div class=\"form-group\">\n                    <label class='control-label'>Description</label>\n                    <input type='text' ng-model=\"description\" class='form-control'/>\n                </div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{'validations' + date + index}}\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type='checkbox' ng-model=\"required\" />\n                        Required</label>\n                </div>\n                <div class=\"form-group\" ng-if=\"validationOptions.length > 0\">\n                    <label class='control-label'>Validation</label>\n                    <select ng-model=\"$parent.validation\" class='form-control' ng-options=\"option.rule as option.label for option in validationOptions\"></select>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Apply'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      }));
    }
  ]);

}).call(this);
