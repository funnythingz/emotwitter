Meteor.startup(function() {
    var Twitter = Meteor.npmRequire('twitter');
    var client = new Twitter({
        consumer_key:           CONSUMER_KEY,
        consumer_secret:        CONSUMER_SECRET,
        access_token_key:       ACCESS_TOKEN_KEY,
        access_token_secret:    ACCESS_TOKEN_SECRET
    });

    Meteor.methods({
        'tweet': function(text) {
            var options = {
                status: text
            };
            var callback = function(error, tweet, response) {
                console.log(error);
            };
            client.post('statuses/update', options, callback);
        }
    });
});
