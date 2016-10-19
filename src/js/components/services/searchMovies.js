(function() {
  'use strict';
  console.log('search attached');
  angular
    .module('searchMoviesMod',[])
    .service('searchMoviesService',searchMoviesService);

  searchMoviesService.$inject = ['$http'];

  function searchMoviesService($http) {
    /*jshint validthis: true */
    this.searchMovie = (movieSearch) => {
      var searchURL = 'http://www.omdbapi.com/?s=' + movieSearch;
      console.log(searchURL);
      return $http.get(searchURL);
    };
  }

}());
