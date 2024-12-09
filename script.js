var m1 = "I love you"
var m2 = "You are my world"
var m3 = "I believe that you can do anything"
var m4 = "There could be a thousand stars in the sky but my eyes will find a way to see only you"
var m5 = "To me, you're all i need in this world"
var m6 = "Im always cheering you on, no matter what"
var m7 = "Girl, you are sweeter than sugar"
var m8 = "Theres a million fish in the sea, but you're the one I want "
var m9 = "I will always be here to listen to you"
var m10 = "When the world seems darkest, you are my light"
var m11 = "Nice boobies"
var m12 = "You are the prettiest girl in the world"
var m13 = "Im thankful that you are in my life"
var m14 = "You make me the happiest in the entire world"
var m15 = "I love seeing you emberassed"
var m16 = "Your laugh is my favourite sound"
var m17 = "I would follow you anywhere"
var m18 = "All i want for christmas is you"
var m19 = "You are always on my mind"
var m20 = "Everthing feels right when Im with you"
var m21 = "I never knew what love was until I met you"
var m22 = "I love you today. I love you tomorrow. And I'll keep loving you every day after that, too"
var m23 = "Of course, I still love you"
var m24 = "I miss you every second we are apart"
var m25 = "I wont ever let you go"
var m26 = "You are beautiful just the way you are"
var m27 = "I'm the luckiest alive to be able to call you mine"
var m28 = "You're the peanut butter to my jelly"
var m29 = "I can never get enough of you"
var m30 = "no, im not tired of you and never will be"
var m31 = "I will always be in your life. even if I'm not with you, Im only a text away"
var m32 = "You're cute, can i keep you forver?"
var m33 = "You make my days better"
var m34 = "I would do anything for you"
var m35 = "I would love you if you were a worm"
var m36 = "The best part of me is you"
var m37 = "I want my future to be with you"
var m38 = "You're my best friend"
var m39 = "I wish I could be better because you deserve the world"
var m40 = "sweet dreams, I hope that i am in them"
var v1 = "You're hotter than lava"
var v2 = "I would love it if you're my wife"
var v3 = "I really want to kiss you right now"
var v4 = "sending kisses through the screen"
var v5 = "you are my sun"
var v6 = "you are my moon"
var v7 = 'you are my star'
var v8 = "you're not just my sun, moon and star. you're my whole universe"
var v9 = "My face hurts from smiling so much when im with you"
var v10 = "I love it when you cuddle me"
var v11 = "I'll always hold you when you need it"
var v12 = "You've answered my prayers, and I'm not even religious!"
var v13 = "its a blessing to have you in my life"
var v14 = "I can't see you but I know that you're looking sexy"
var v15 = "It's difficult to put into words just how much i love you"
var v16= "No one will ever be like you"
var v17 = "you are irreplacable"
var v18 = "Everything about you captivates me"
var v19 = "your kisses make me melt"
var v20 = "Thank you for everthing you have done for me"
var v21 = "i hope your day is as nice as your smile"
var v22 = "How do you alwyas look cute?"
var v23 = "Let's make so many memories together"
var v24 = "hey *with rizz*"
var v25 = "I never thought angels existed until you showed up"
var v26 = "I feel at ease whenever im with you"
var v27 = "you are such a thoughtful girlfriend"
var v28 = "Thank you for always being there for me"
var v29 = "You are perfect, your personality, body, and the perfect one for me"
var v30 = "P.S I love you"
var v31 ="through good times and bad, I will always love and support you "
var v32 = "Your weirdness is my favourite thing"
var v33 = "Wherever you go, I wont be far to follow"
var v34 = "I'd rather be me with you"
var v35 = "I love you, inside and out"
var v36 = "Sometimes it feels like I'm dreaming, but then I realize you are real!"
var v37 = '"And she became his wife, and he loved her." -Genesis 24:67'
var v38 = "Loving you is the best thing I have ever done"
var v39 = "You make every moment a memory that I will cherish forever"
var v40 = "I run towards you because you are my safe place"
var currentm = 1


const random_list = [m1, m2, m3, m4, m5, m6, m7, m8, m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,m31,m32,m33,m34,m35,m36,m37,m38,m39,m40]
const random_list2 = [v1, v2, v3, v4, v5, v6, v7, v8, v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30,v31,v32,v33,v34,v35,v36,v37,v38,v39,v40]

function randomessage(){
    
    if(currentm == 1){
        currentm = 0
        document.getElementById('messagebox1').style.transform = 'translateY(-110%)'
        document.getElementById('messagebox1').style.overflow = 'hidden'
        document.getElementById('messagebox2').style.transform = 'translateY(0%)'
        document.getElementById('messagebox2').style.overflow = 'visible'
    }
    else{
        currentm = 1
        document.getElementById('messagebox1').style.transform = 'translateY(0%)'
        document.getElementById('messagebox1').style.overflow = 'visible'
        document.getElementById('messagebox2').style.transform = 'translateY(-110%)'
        document.getElementById('messagebox2').style.overflow = 'hidden'
    }
    setTimeout(() => changem(), 500)
}

function changem(){
    const random =  Math.floor(Math.random()* random_list.length)
    var mpopup1 = random_list2[random]
    var mpopup2 = random_list[random]
    if(currentm == 1){
        
        document.getElementById('message2').innerHTML = mpopup2
    }
    else{
        
        document.getElementById('message').innerHTML = mpopup1
    }
}