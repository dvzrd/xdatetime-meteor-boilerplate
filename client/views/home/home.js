Template['home'].helpers({
	'date': function () {
		var now = moment();
		var later = now.clone().add(1, 'y');
		return {
			issued: now.toDate(),
			expires: later.toDate()
		};
	}
});
