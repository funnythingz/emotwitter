Meteor.startup(function() {
    var Twitter = Meteor.npmRequire('twitter');
    var client = new Twitter({
        consumer_key:           CONSUMER_KEY,
        consumer_secret:        CONSUMER_SECRET,
        access_token_key:       ACCESS_TOKEN_KEY,
        access_token_secret:    ACCESS_TOKEN_SECRET
    });

    var callback = function(error, tweet, response) {
        if (!error) {
            console.log(tweet);
            return;
        }
        console.log(error);
    };

    Meteor.methods({
        'twTweet': function(text) {
            var options = {
                status: text
            };
            client.post('statuses/update', options, callback);
        },
        'twGetUserTimeline': function(screenName) {
            var params = {
                screen_name: screenName
            };
            return client.get('statuses/user_timeline', params, callback);
        }
    });
});
