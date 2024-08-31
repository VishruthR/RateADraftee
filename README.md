# Welcome to RateADraftee

Warning: The Twitter API is not working right now so the website does not work, this error will be removed once the site is running again.
[Live site](https://rate-a-draftee.vercel.app/)

### What is it?

RateADraftee rates NFL draft picks based on tweets written about them. Simply search for a player's name, select it from the dropdown, and wait as the player gets rated on a scale from A-F. 

### Why did I make this?

Ever since I watched an NFL bit hits compilation in the 3rd grade I've been fascinated by football. I have consistently become more immersed into football content on social media since then. Recently, I noticed that people on twitter love sharing their opinions on NFL players. I thought there some interesting potential for data analysis here. I thought it would be cool to compare how people on twitter rated NFL draft picks to "expert" draft pick grades published by sports networks. Thus began my journey developing RateADraftee.

### How does it work?

RateADraftee is built with a React/NodeJS frontend and a Flask backend. First it scrapes twitter for tweets about the player you searched for. Specifically it finds 100 tweets about that player from around the time they were drafted. Next it sends them to a BeRT model that was fine-tuned on twitter sentiment analysis and then further fine-tuned on tweets written about NFL players that I labelled. Finally, it calculates a grade based on the sentiment ratings of all these tweets.


