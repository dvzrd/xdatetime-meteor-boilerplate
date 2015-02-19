Test = new Mongo.Collection('test');

Test.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	},
	fetch: []
});

Test.attachSchema(new SimpleSchema({
	issued: {
		type: String,
		label: 'Issue Date',
		optional: true
	},
	expires: {
		type: String,
		label: 'Expiration Date',
		optional: true
	}
}));
