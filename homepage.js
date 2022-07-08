
 const quotes = ["Every strike brings me closer to the next home run. – Babe Ruth","I don’t walk away from things I think are unfinished. – Arnold Schwarzenegger","Whether you think you can or you think you can’t, you’re right. –Henry Ford",
"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan","I didn’t fail the test. I just found 100 ways to do it wrong. –Benjamin Franklin","A person who never made a mistake never tried anything new. – Albert Einstein","It is never too late to be what you might have been. –George Eliot",
"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. –Mark Twain",
"The most common way people give up their power is by thinking they don’t have any. –Alice Walker",
"The mind is everything. What you think you become.  –Buddha",
"Either you run the day, or the day runs you. –Jim Rohn",
"Life shrinks or expands in proportion to one’s courage. –Anais Nin",
"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. –Unknown",
"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. –Marie Curie",
"Too many of us are not living our dreams because we are living our fears. –Les Brown",
"Challenges are what make life interesting and overcoming them is what makes life meaningful. –Joshua J. Marine",
"If you want to lift yourself up, lift up someone else. –Booker T. Washington",
"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. –Leonardo da Vinci",
"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. –Jamie Paolinetti",
"You become what you believe. –Oprah Winfrey",
"A truly rich man is one whose children run into his arms when his hands are empty. –Unknown",]



function currentTime() 
{
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
    return [session, hh];
  }


function WelcomeMessage(times)
{
    if(times[0] ===  "AM")
    {
        if(times[1] === 12 || times[1] <= 6)
        {
            document.getElementById("welcome-msg").innerHTML = "Good Night"
        }
        else
        {
            document.getElementById("welcome-msg").innerHTML = "Good Morning"
        }
        
    }
    else if(times[0] === "PM")
    {
        if(times[1] === 12 || times[1] <= 5)
        {
            document.getElementById("welcome-msg").innerHTML = "Good Afternoon"
        }
        else if(5 <= times[1] && times[1] <= 9)
        {
            document.getElementById("welcome-msg").innerHTML = "Good Evening"
        }
        else if(9 <= times[1] && times[1] <= 12)
        {
            document.getElementById("welcome-msg").innerHTML = "Good Night"
        }
        else
        {
            document.getElementById("welcome-msg").innerHTML = "Ur ayt"
        }
    }
    
}

function MotivationalQuotes()
{
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote;
}
  MotivationalQuotes();
  currentTime();
  WelcomeMessage(currentTime());