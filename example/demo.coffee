angular.module 'app', ['builder', 'builder.components', 'validator.rules']

.run ['$builder', ($builder) ->
    $builder.registerComponent 'map',
        group: 'from html'
        label: 'Location'
        description: 'Template for location'
        placeholder: 'User defined component'
        required: no
        templateUrl: 'example/template.html'
        popoverTemplateUrl: 'example/popoverTemplate.html'
]


.controller 'DemoController', ['$scope', '$builder', '$validator', ($scope, $builder, $validator) ->
    # ----------------------------------------
    # builder
    # ----------------------------------------
    textbox = $builder.addFormObject 'default',
        id: 'textbox'
        component: 'textInput'
        label: 'Forename'
        description: ''
        placeholder: 'Sebastián'
        required: yes

    select = $builder.addFormObject 'default',
        id: 'se'
        component: 'select'
        label: 'Gender'
        templateOptions:
          options: [
            {name: "Do not specify", value: ""}
            {name: "Female", value: "F"}
            {name: "Male", value: "M"}
          ]
    $builder.addFormObject 'default',
        component: 'map'
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