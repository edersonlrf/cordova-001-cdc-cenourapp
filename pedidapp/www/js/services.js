angular.module('starter')
.service('ProdutosService', function($http, $q) {
    var url = 'http://cozinhapp.sergiolopes.org/produtos?random=1';

    // Sempre dispara o serviço pra checar dados mais recentes.
    var promise = $http.get(url).then(function(response){
        var json = JSON.stringify(response.data);
        localStorage.setItem('cache', json);
        return response.data;
    });

    // Procura no localStorage.
    var cache = localStorage.getItem('cache');
    if (cache != null) {
        promise = $q(function(resolve, reject) {
            resolve(JSON.parse(cache));
        });
    }

    return {
        lista: function() {
            return promise;
        }
    };
});