(function() {
  angular.module('app', ['builder', 'builder.components', 'validator.rules']).run([
    '$builder', function($builder) {
      return $builder.registerComponent('map', {
        group: 'from html',
        label: 'Location',
        description: 'Template for location',
        placeholder: 'User defined component',
        required: false,
        templateUrl: 'example/template.html',
        popoverTemplateUrl: 'example/popoverTemplate.html'
      });
    }
  ]).controller('DemoController', [
    '$scope', '$builder', '$validator', function($scope, $builder, $validator) {
      var select, textbox;
      textbox = $builder.addFormObject('default', {
        id: 'textbox',
        component: 'textInput',
        label: 'Forename',
        description: '',
        placeholder: 'Sebastián',
        required: true
      });
      select = $builder.addFormObject('default', {
        id: 'se',
        component: 'select',
        label: 'Gender',
        templateOptions: {
          options: [
            {
              name: "Do not specify",
              value: ""
            }, {
              name: "Female",
              value: "F"
            }, {
              name: "Male",
              value: "M"
            }
          ]
        }
      });
      $builder.addFormObject('default', {
        component: 'map'
      });
      $scope.form = $builder.forms['default'];
      $scope.input = [];
      $scope.defaultValue = {};
      $scope.defaultValue[select.id] = '';
      return $scope.submit = function() {
        return $validator.validate($scope, 'default').success(function() {
          return console.log('success');
        }).error(function() {
          return console.log('error');
        });
      };
    }
  ]);

}).call(this);
