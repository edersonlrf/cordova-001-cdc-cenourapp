angular.module('starter')
.controller('HomeController', function($scope, ProdutosService) {
    ProdutosService.lista().then(function(dados){
        $scope.bolos = dados;
    });
})

angular.module('starter')
.controller('DetalheController', function($scope, ProdutosService, $stateParams) {
    ProdutosService.lista().then(function(dados){
        $scope.bolo = dados[$stateParams.boloId];
    });
});
