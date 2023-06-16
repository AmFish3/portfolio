function changedata(parameter){
    if(parameter==0){
      document.getElementById('aboutme').classList.toggle('active');
    }
    else if(parameter==1){
    document.getElementById('myprojects').classList.toggle('active');
    }
    else if(parameter==2){
      document.getElementById('opinions').classList.toggle('active');
      }
    else if(parameter==3){
      document.getElementById('socials').classList.toggle('active');
      }
}

var nouns;
nouns = [
    "KABOOM!",
    "this was one of my old projects",
     "How to buy bitcoin, damn",
     "Free Hampster, unlock bitcoin",
     "Cream cheese is cheese?",
     "How to tell if im pregnent", 
     "How to prenounce dog-o-coin",
     "Why farts smell?",
     "all transfer bitcoin to dog-oe-coin",
     "ADAM MARRY",
     "I love hummas",
     "garry is sexy",
     "You love hummas",
     "they love hummas",
     "She loves hummas",
     "It loves hummas",
     "ham and hummas",
     "Bitch - female dog",
     "Andrew Tate is NOT HOT",
     "Hummas is god", "I am fat",
     "Brandon 2022",
     "Hello Mr Burne",
     "I killed myself to make this",
     "e",
     "Google.com website",
     "POSTER, I ATE A POSTER RIGHT",
     "Big cat chase night",
     "AHH MY THROAT IS DYING,",
     "MAH MAH MAH MEOW OWO",
     "Facebook.com- My grandson, Nathan.",
     "Kate Winslet cool.", 
     "Adderal max dose.. 165 lbs man... 20 years old?",
     "Groundhogs Day or Groundhog Day?",
     "Jennifer!",
     "AidanTheBandit is poggers",
     "w",
     "Go to BanditCo now,",
     "muckman",
     "i dont know, whats its for, what is it for?",
     "pineapple, magpie",
     "chess is poggers",
     "i like eating cheese",
     "umm more,I dont know, Im scrared, fleter sucks",
     "why do you have so many exstentions",
     "legumes",
     "LEWIS GET OFF PCPARTS!!!",
     "Its the effort to come to school till 9:45",
     "muck cum",
     "Bacon murdered richard nickson",
     "at some sort people sleep at this school",
     "ahh, there was once a child called fleter, he was every annoying and stole other peoples stuff.",
     "poggers",
     "lewis gets no bitches",
     "lewis gets lots of bitches",
     "fleter gets no mates",
     "another reason to nerf miner",
     
    
    ];


function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 55);

  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = nouns[rand1];

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();
