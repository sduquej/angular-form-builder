(function() {
  angular.module('app', ['builder', 'builder.components', 'validator.rules']).run(['$builder', function($builder) {}]).controller('DemoController', [
    '$scope', '$builder', '$validator', function($scope, $builder, $validator) {
      var select, textbox;
      textbox = $builder.addFormObject('default', {
        key: 'fname',
        component: 'input',
        templateOptions: {
          type: 'text',
          required: true,
          label: 'Forename',
          description: '',
          placeholder: 'Sebastián',
          options: []
        }
      });
      select = $builder.addFormObject('default', {
        key: 'gender',
        component: 'select',
        templateOptions: {
          label: 'Gender',
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
