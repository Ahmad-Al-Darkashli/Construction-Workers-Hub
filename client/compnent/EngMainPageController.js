app.controller('engMainPageController', function($scope, $http, $log) {
	$scope.fullName = '';
	$scope.userName = '';
	$scope.phoneNumber = '';
	$scope.siteLocation = '';
	$scope.url =
		'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
	$scope.reqMessage = '';
	$scope.request = true;
	const token = localStorage.getItem('token');
	const successCallBackEngPage = (response) => {
		$scope.phoneNumber = response.data.fullName;
		$scope.userName = response.data.userName;
		$scope.fullName = response.data.phoneNumber;
		$scope.expectedSalary = response.data.expectedSalary;
		$scope.url =
			response.data.url ||
			'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
		$log.info(response);
	};
	const errorCallBack = (response) => {
		$scope.error = response.data;
	};
	const engineerPage = () => {
		$http({
			method: 'GET',
			headers: {
				'x-access-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJyb2xlIjoiU21pdGgiLCJpYXQiOjE1NTkwNzkzNjAsImV4cCI6MTU1OTA4ODM2MH0.wK1E0RHpAePmy0oc1cm3VAiQt5mw0yjab2Mc8swu3KY'
			},
			url: '/engineerPage'
		}).then(successCallBackEngPage, errorCallBack);
		// $http('/workerPage',).then(successCallBack,errorCallBack)
	};
	engineerPage();
});
