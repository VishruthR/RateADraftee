import snscrape.modules.twitter as sntwitter

blacklist = [ 'HoustonTexans', 'ChicagoBears', 'Lions', 'Vikings', 'Eagles', 'dallascowboys', 'MiamiDolphins',
            'Giants', 'packers', 'Browns', 'Colts', 'Buccaneers', 'Patriots', 'Broncos', 'nyjets', 'Jaguars', 'Titans',
            'Seahawks', 'BuffaloBills', 'Saints', 'Commanders', 'Raiders', 'RamsNFL', 'Ravens', 'Chiefs', 'AtlantaFalcons',
            'AZCardinals', 'Bengals', 'steelers', '49ers', 'Panthers', 'Chargers', 'NFL', 'RapSheet', 'AdamSchefter', 'MySportsUpdate', 'espn',
            'ESPNNFL' ]

def find_tweets(player_name, season):
    tweet_limit = 100
    count = 0
    query = "\"{name}\" lang:en until:{year}-05-31 since:{year}-04-01"
    tweets = []

    for tweet in sntwitter.TwitterSearchScraper( query.format( name=player_name, year=season ), top=True ).get_items():
        if tweet.user.username in blacklist:
            print( 'check' )
            continue
        
        if count == tweet_limit:
            break

        tweets.append(tweet)

        count += 1

    return tweets