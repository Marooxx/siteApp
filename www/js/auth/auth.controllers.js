angular.module('OmzApp.auth.controllers', [])


.controller('WelcomeCtrl', function($scope, $state, $ionicModal){
	$scope.bgs = ["img/welcome-bg.jpg"];

	$scope.facebookSignIn = function(){// fonction anonyme car elle ne porte de nom 
		console.log("doing facebook sign in");
		$state.go('app.browse');
	};

	$ionicModal.fromTemplateUrl('views/app/legal/privacy-policy.html', {
    scope: $scope,// on lie les scopes eo peut les utiliser dans les modals
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.privacy_policy_modal = modal;
  });

	$ionicModal.fromTemplateUrl('views/app/legal/terms-of-service.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.terms_of_service_modal = modal;
  });

  $scope.showPrivacyPolicy = function() {
    $scope.privacy_policy_modal.show();
  };

	$scope.showTerms = function() {
    $scope.terms_of_service_modal.show();
  };
})


// création de compte

.controller('CreateAccountCtrl', function($scope, $state,$http){
	$scope.user={};// on crée une variable pour récupérer les données dans l'attribut "name" et  "ng-model"
  $scope.doSignUp = function(){
    //***** REQUÊTE AJAX*******************//

    $http({ // on peut aussi écrire $.ajax.post pour nommer la méthode
      url:"http://localhost/siteApp/Api/register.php",// url 
      method:"POST",// la méthode de récupération des informations
      data:{ 
        "name":$scope.user.name,
        "userName":$scope.user.userName,
        "email":$scope.user.email,
        "password":$scope.user.password,
        "phone":$scope.user.phone// pas de virgule car c'est le dernier paramètre de l'objet
      }
    
    }).success(function(response){// ".done()" apportera la réponse envoyée par le serveur
          $state.go('app.browse');
          //console.log(response);


    })
		        console.log($scope.user);
		        //$state.go('app.feed');
	 };
})

.controller('WelcomeBackCtrl', function($scope, $state, $ionicModal){
	$scope.doLogIn = function(){
		console.log("doing log in");
		$state.go('app.feed');
	};

	$ionicModal.fromTemplateUrl('views/auth/forgot-password.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.forgot_password_modal = modal;
  });

  $scope.showForgotPassword = function() {
    $scope.forgot_password_modal.show();
  };

	$scope.requestNewPassword = function() {
    console.log("requesting new password");
  };

  // //Cleanup the modal when we're done with it!
  // $scope.$on('$destroy', function() {
  //   $scope.modal.remove();
  // });
  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   // Execute action
  // });
  // // Execute action on remove modal
  // $scope.$on('modal.removed', function() {
  //   // Execute action
  // });
})

.controller('ForgotPasswordCtrl', function($scope){

})

;
