// move content from one div to another $('#div1').contents().appendTo('#div2')
//pseudo:
// when the game starts display characters with their HP

// when a character is selected, that is the players choice
// 	other characters need to move to enemies available to attack stage
// select the character to fight
// 	move that character to defender stage

// when attack is pressed
// 	player attack power increases by base attack power (3,6,9,12,...)
// 	enemy hp - attack power
// 	enemy attackpower decreases player hp
var playerCharacter;
var charId;

var characters = [
    {
        name:'Boba Fett',
        id:'boba',
        hp: hpGenerator(),
        ap:'',
        cap:'', 
    },
    {
        name:'Luke',
        id:'luke',
        hp: hpGenerator(),
        ap:'',
        cap:'',
    },
    {
        name:'Leia',
        id:'leia',
        hp: hpGenerator(),
        ap:'',
        cap:'',
    },
    {
        name:'Vader',
        id:'vader',
        hp: hpGenerator(),
        ap:'',
        cap:'',
    }
]





function hpGenerator(){
    return 50+50*Math.floor(Math.random()*5);
}

$('.character-button').on('click', function(event){
    charId = event.currentTarget.id;
    characterSelect(charId);

});

//detects which character was pressed and then moves the characters to the appropriate section and adjusts classes
function characterSelect(char){
    for(var i = 0; i<characters.length; i++){
        if(char === characters[i].id){
            $('#'+characters[i].id).contents().appendTo('.character-select');
            $('.character-button').addClass("hidden");
            $('.character-select').removeClass("hidden");
        } 
        else if(char != characters[i].id){
            // var test = $('#'+characters[i].id).append('<button>')
            $('.enemy-section').append('<button id='+characters[i].id+'>')
            $('#'+characters[i].id).contents().appendTo('.enemy-section');
            
            $('.enemy-section').removeClass("hidden");
            // console.log('players not selected: '+ characters[i].id)
        }
    }
}
    
