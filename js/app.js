//quotes array
var quotesArray = [
	"Life is about making an impact, not making an income. - Kevin Kruse",
	"Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference. - Robert Frost",
	"I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
	"You miss 100% of the shots you don't take. - Wayne Gretzky",
	"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",
	"The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart",
	"Every strike brings me closer to the next home run. - Babe Ruth",
	"We become what we think about. - Earl Nightingale",
	"Life is 10% what happens to me and 90% of how I react to it. - Charles Swindol",
	"The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
	"Winning isn't everything, but wanting to win is. - Vince Lombardi",
	"You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
	"Whether you think you can or you think you can't, you're right. - Henry Ford",
	"People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily. - Zig Ziglar",
	"There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
	"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus Christ",
	"The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
];

document.body.onkeyup = function(e){
	if(e.keyCode == 32){
		//get length of array
		var quotesLength = quotesArray.length;

		// generate random number
		var random = Math.floor(Math.random() * quotesLength);

		// get single quote
		var singleQuote = quotesArray[random];

		//get last index of - to get quote author
		var hyphenIndex = singleQuote.lastIndexOf("-");

		//get quote author
		var author = singleQuote.substring(hyphenIndex);

		var quotes = singleQuote.replace(author,"");
		author = author.replace("- ","");

		//add quotes and author to dom
		document.getElementById("instruction").className = "clear";
		document.getElementById("quotes").innerHTML = quotes;
		document.getElementById("author").innerHTML = author;	
		console.log(quotes);
		console.log(author);
	}
};
