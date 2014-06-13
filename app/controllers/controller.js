var app = angular.module('app', []);


app.controller('HideStatusbarCtrl', function ($scope) {
  steroids.statusBar.hide({},
    {
      onSuccess: function(data) {
        steroids.logger.log("success on hide", data);
      },
      onFailure: function(error) {
        steroids.logger.log("error onFailure on hide", error);
      }
    });

  $scope.closeModal = function() {
    steroids.statusBar.show({},
    {
      onSuccess: function(data) {
        steroids.logger.log("closeModal success on show", data);
      },
      onFailure: function(error) {
        steroids.logger.log("closeModal error onFailure on show", error);
      }
    });
    steroids.modal.hide();
  };

});


app.controller('ShowStatusbarCtrl', function ($scope) {
  steroids.statusBar.show({},
    {
      onSuccess: function(data) {
        steroids.logger.log("success on show", data);
      },
      onFailure: function(error) {
        steroids.logger.log("error onFailure on show", error);
      }
    });

  var openModal = function() {
    webView = new steroids.views.WebView("/views/app/hidestatusbar.html");
    steroids.modal.show(webView);
  };

  openModal();

  $scope.openModal = openModal;
});

