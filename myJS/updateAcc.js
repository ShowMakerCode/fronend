app.controller("updateCtrl", function ($location, $scope, $http,$rootScope) {
    $scope.studentR = $rootScope.student;
    $scope.studentR.username = $rootScope.student.username;
    $scope.Update = function() {
        $scope.studentR.birthday =document.getElementById("date").value;
        console.log($rootScope.student.username)
        console.log(document.getElementById("date").value)
      let req = {
        method: "PUT",
        url: "http://localhost:3000/studentAccounts/"+$rootScope.student.id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify($scope.studentR)
      };
      $http(req).then(
        function () {
          $scope.repassword = "";
          swal("Thành Công !", "Quay Lại Trang Chủ", "success");
          $location.path("/index.html");
        },
        function () {
          swal("Thất Bại !", "Quay Lại Trang Chủ", "error");
        }
      );
    };
  });
  