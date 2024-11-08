// Define the AngularJS application
angular.module('characterSearchApp', [])
  .controller('CharacterSearchController', function ($scope) {

    // Variables to store input values and search results
    $scope.textInput = '';
    $scope.characterInput = '';
    $scope.positions = [];
    $scope.searchPerformed = false;

    // Function to find character positions
    $scope.findCharacter = function () {
      $scope.positions = [];
      $scope.searchPerformed = true;
      
      // Ensure there is a character to search
      if ($scope.characterInput.length === 1 && $scope.textInput.length > 0) {
        // Loop through the text and find character positions
        for (let i = 0; i < $scope.textInput.length; i++) {
          if ($scope.textInput[i] === $scope.characterInput) {
            $scope.positions.push(i);
          }
        }
      }
    };
  });