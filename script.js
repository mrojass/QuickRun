// Code goes here

function ExampleCtrl($scope){
  $scope.tasks = [
    {job:'Jon', location: '30', deadline: 'Developer'},
    {job:'Mike', location: '37', deadline: 'Manager'},
    {job:'Allen', location: '50', deadline: 'CEO'}
    ];
    
  $scope.addTask = function(){
    var task = {
        job: $scope.job,
        location: $scope.location,
        deadline: $scope.deadline,
    };
    
    $scope.tasks.push(task);
  };
   
   $scope.removeTask = function(index){
    $scope.tasks.splice(index, 1);
   };    
}