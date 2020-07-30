var app= angular
	.module('app1',[])
	.filter('search', ()=>{
		return (arr, searchString)=>{
			if(!searchString)
				return arr
			
			var result= []
			searchString= searchString.toLowerCase();
			angular.forEach(arr, (item)=>{
				if(item.name.toLowerCase().indexOf(searchString)!==-1)
					result.push(item)
			})
			return result
		}
	})
    .controller('ctr', ['$scope', ($scope)=>{
        $scope.items = [
			{
				name: '50 Must-have plugins for extending Twitter Bootstrap',
				image: ''
			},
			{
				name: 'Making a super simple registration system with PHP and MySQL',
				image: ''
			},
			{
				name: 'Create a slide-out footer with this neat z-index trick',
				image: ''
			},
			{
				name: 'How to make a digital clock with jQuery and CSS3',
				image: ''
			},
        ]
        
	}])