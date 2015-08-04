angular.module 'app', ['builder', 'builder.components', 'validator.rules']

.run ['$builder', ($builder) ->
#    $builder.registerComponent 'map',
#        key: 'location'
#        group: 'from html'
#        templateUrl: 'example/template.html'
#        popoverTemplateUrl: 'example/popoverTemplate.html'
#        templateOptions:
#          label: 'Location'
#          description: 'Template for location'
#          placeholder: 'User defined component'
#          required: no
#          options: []
]


.controller 'DemoController', ['$scope', '$builder', '$validator', ($scope, $builder, $validator) ->
    # ----------------------------------------
    # builder
    # ----------------------------------------
    textbox = $builder.addFormObject 'default',
        key: 'fname'
#        id: 'textbox'
        component: 'input'
        templateOptions:
          type: 'text'
          required: yes
          label: 'Forename'
          description: ''
          placeholder: 'Sebastián'
          options: []

    select = $builder.addFormObject 'default',
        key: 'gender'
        component: 'select'
#        id: 'se'
        templateOptions:
          label: 'Gender'
          options: [
            {name: "Do not specify", value: ""}
            {name: "Female", value: "F"}
            {name: "Male", value: "M"}
          ]
#    $builder.addFormObject 'default',
#        component: 'map'
    # formObjects
    $scope.form = $builder.forms['default']

    # ----------------------------------------
    # form
    # ----------------------------------------
    # user input value
    $scope.input = []
    $scope.defaultValue = {}
    # formObjectId: default value
    $scope.defaultValue[select.id] = ''

    $scope.submit = ->
        $validator.validate $scope, 'default'
        .success -> console.log 'success'
        .error -> console.log 'error'
]