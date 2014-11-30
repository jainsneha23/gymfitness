//shyamseshadri/angularjs-book code 
//https://github.com/shyamseshadri/angularjs-book/blob/master/chapter6/accordion.html

var appModule = angular.module('ui.accordion', []);

  appModule.directive('accordion', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: '<div ng-transclude></div>',
      controller: function() {
        var expanders = [];

        this.gotOpened = function(selectedExpander) {
          angular.forEach(expanders, function(expander) {
            if (selectedExpander != expander) {
              expander.showMe = false;
            }
          });
        }

        this.addExpander = function(expander) {
          expanders.push(expander);
        }
      }
    }
  });
  appModule.directive('expander', function(){
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      require: '^?accordion',
      scope: { title:'@expanderTitle' },
      template: '<div>' +
          '<div class="title" ng-click="toggle()"><span>{{title}}</span><div class="toggleBtn">' +
          '<div ng-class="{fadeOut : showMe==true}"></div><div></div><div ng-class="{fadeOut :showMe==true}"></div></div></div>' +
          '<div class="content" ng-class="{slideDown : showMe==true}" ng-transclude></div>' +
          '</div>',
      link: function(scope, element, attrs, accordionController) {
        scope.showMe = false;
        accordionController.addExpander(scope);

        scope.toggle = function toggle() {
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        }
      }
    }
  });