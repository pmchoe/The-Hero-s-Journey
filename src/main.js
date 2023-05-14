/*
Philip Choe, The Hero's Journey

Approximate hours spent: so far? about 24ish hours 5:30pm 5/13 


I wanted to make a game with enemies that spawn faster and
with more movement speed, so I chose this type of gameplay.
The music is ripped off of royalty free sites, but I'm surprisingly
proud of my art. I did all the art assets and while they aren't
top notch quality, I really enjoyed making the lil critters.
Also, my friend told me my game is like a rhythm-less rhythm game 
and I have to agree lol

P.S. THE QUICKENING ENEMY SPAWN + SPEED TOOK SO LONG TO GET
     I HATED CODING THAT PART AAAHGHHH
*/

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [ Menu, Play, Credit ],
};

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyR, keyT, keyW, keyA, keyS, keyD;

// reserve icon vars
let iconW, iconA, iconS, iconD;

// reserve enemy move speed
let moveSpeed;