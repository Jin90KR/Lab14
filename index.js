var quotes = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        source: "Dr. Seuss"
    },
    {
        quote: "This too, shall pass.",
        source: "Anonymous"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        source: "Theodore Roosevelt"
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        source: "Anonymous"
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        source: "찰리 채플린"
    },
    {
        quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
        source: "C.S. Lewis"
    },
    {
        quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
        source: "Sador",
        citation: "Children of Húrin"
    },
    {
        quote: "Life's too mysterious to take too serious.",
        source: "Mary Engelbreit"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        source: "Eleanor Roosevelt"
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        source: "괴테"
    },
    {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
        source: "Terry Pratchett",
        citation: "Witches Abroad",
        year: "1991"
    },
    {
        quote: "There isn't a way things should be. There's just what happens, and what we do.",
        source: "Terry Pratchett",
        citation: "A Hat Full of Sky"
    },
    {
        quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
        source: "Rocky Balboa",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "More fuck yeah, less fuck that.",
        source: "Anonymous"
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        source: "African proverb"
    },
    {
        quote: "It's OK to not be OK, as long as you don't stay that way.",
        source: "Anonymous"
    },
    {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
        source: "Maya Angelou"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "T. Roosevelt"
    },
    {
        quote: "May I never be complete. May I never be content. May I never be perfect.",
        source: "Chuck Palahniuk"
    },
    {
        quote: "모든것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고 , 내가 어떤 상태에 있더라도 나는 그속에서 만족하는 법을 배운다.",
        source: "헬렌켈러"
    },
    {


        quote: "Those who don't believe in magic will never find it.",
        source: "Roald Dahl"
    },
    {
        quote: "There is no elevator to success  you have to take the stairs.",
        source: "Anonymous"
    },
    {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
        source: "Jose Luis Borges"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        source: "Albus Dumbledore",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        source: "George Carlin"
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        source: "Eleanor Roosevelt"
    },
    {
        quote: "Do not set yourself on fire in order to keep others warm.",
        source: "Anonymous"
    },
    {
        quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
        source: "알베르트 아인슈타인"
    },
    {
        quote: "It's supposed to be hard. If it were easy, everyone would do it.",
        source: "Jimmy Dugan",
        citation: "A League of Their Own"
    },
    {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
        source: "Anonymous"
    },
    {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
        source: "Anonymous"
    },
    {
        quote: "Never cowardly or cruel. Never give up, never give in.",
        source: "Doctor Who"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        source: "Ralph Waldo Emerson"
    },
    {
        quote: "In 20 years, you probably won't even remember this.",
        source: "Anonymous"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        source: "William Shakespeare"
    },
    {
        quote: "Clear eyes, full hearts, can't lose.",
        source: "Dillon Panthers",
        citation: "Friday Night Lights",
        year: "1990"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle"
    }
];

var changeBtn = document.getElementById("change_quotes");
var newQuote = document.getElementById("add_quotes");


function changequote(arr) {
    console.log(arr);
    var randomQuote = Math.floor(Math.random() * arr.length);
    newQuote.innerHTML = arr[randomQuote].quote + "<br><br>" + arr[randomQuote].source;
    if (arr[randomQuote].citation !== undefined) {
        newQuote.innerHTML = arr[randomQuote].quote + "<br><br>" + arr[randomQuote].source + "<br><br>" + arr[randomQuote].citation;
    };
            
    if (arr[randomQuote].year !== undefined) {
        newQuote.innerHTML = arr[randomQuote].quote + "<br><br>" + arr[randomQuote].source + "<br><br>" + arr[randomQuote].citation + "<br><br>" + arr[randomQuote].year;
    };   
};

function autoQuote() {
    randomQuote = Math.floor(Math.random() * quotes.length);
    newQuote.innerHTML = quotes[randomQuote].quote + "<br><br>" + quotes[randomQuote].source;
    if (quotes[randomQuote].citation !== undefined) {
        newQuote.innerHTML = quotes[randomQuote].quote + "<br><br>" + quotes[randomQuote].source + "<br><br>" + quotes[randomQuote].citation;
    };
            
    if (quotes[randomQuote].year !== undefined) {
        newQuote.innerHTML = quotes[randomQuote].quote + "<br><br>" + quotes[randomQuote].source + "<br><br>" + quotes[randomQuote].citation + "<br><br>" + quotes[randomQuote].year;
    };   
}


function changebackground() {
    document.body.style.backgroundColor = "";
}

changeBtn.addEventListener("click", ()=> {
    changequote(quotes);
    changebackground();
})

setInterval(autoQuote, 5000);