//using atom-live-server for fetching the data

var ApplicantsApp = angular.module('codeTest', []);
// controller to get the data
ApplicantsApp.controller('TableController', function($scope, $http) {
// fetching the Model
    $http.get("data/data.json")
    .then(function(response)
    {
        $scope.data = response.data;
        $scope.applicants = $scope.data.applicants;
        $scope.jobs = $scope.data.jobs;
        $scope.skills = $scope.data.skills;
    });
});
