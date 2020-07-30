var app= angular
    .module('app1',[])
    .controller('ctr', ['$scope', ($scope)=>{
        $scope.services = [
			{
				name: 'Web Development',
				price: 300,
				active: false
			},
			{
				name: 'Design',
				price: 400,
				active: false
			},
			{
				name: 'Integration',
				price: 250,
				active: false
			},
			{
				name: 'Training',
				price: 220,
				active: false
			}
        ]
        
        $scope.select= (service)=>{
            service.active= !service.active
        }

        $scope.total = ()=> {
			var total = 0;
			angular.forEach($scope.services, function(service) {
				if (service.active) {
					total += service.price;
				}
			});
			return total;
		};
    }])