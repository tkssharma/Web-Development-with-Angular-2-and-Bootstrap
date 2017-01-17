// ng1-my-app.js


// Creating a new module
var myModule = angular.module('myModule', []);

// Defining a new module
myModule
    .value('appName', 'MyCoolApp');
    .controller('controllerName', ControllerFunction)
    .service('serviceName', ServiceFunction)
    .filter('filterName', FilterFunction);

// Create a new module that uses myModule
var anotherModule = angular.module('anotherModule', ['myModule']);