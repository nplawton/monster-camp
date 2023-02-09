//functionality Test
function test(){
    console.log('This has been a test of the emergency broadcast service.');
}

//global variable
const $divResults = $('#results');
let monster= 'a';

monsterFinder();

userSearch();


function userSearch(){
    //console.log(test());
    //const userDiv = $('#user-section');
    const searchBtn = $('#submit');
    const userInput = $('#search');
    
    userInput.keyup((e) => {
        let searchValue = e.target.value;
         if(searchValue && searchValue.trim().length > 0){
            let searchValues = searchValue.toLowerCase();
            userInput.text(searchValues);
            //console.log(searchValues);
        }
    })

    searchBtn.click((event) => {
        const searchButton = userInput.val();
        //console.log(searchButton);
        monster = searchButton;
        console.log('result is: ', monster);
        $divResults.empty();
        monsterFinder();
    });

    //console.log(userInput);
    
}

function monsterFinder(){
    //DnD Monster Lister
    $.get(`https://api.open5e.com/monsters/?search=${monster}`, (data) => {
        //console.log(data);

        //pop-up Window Variables
        let overlay = $('#overlay');
        let content = $('#content');
        let closeBtn = $('#close');

        //let searchResults = data;
        //console.log(searchResults);

        for (let i = 0; i < 5; i++){
            const searchResult = data.results[i];
            //console.log(searchResult);

            const $resultVault = $('#results');
            //console.log($resultVault);

            //Setup paramaters to store data in seperate spans
            let $span1 = $('<span></span>');
            $span1.addClass('monster-card');
            $resultVault.append($span1);

            //Create a H3 for the Title
            let monsterName = $('<h3></h3>');
            monsterName.addClass('monster');
            let monsterNameStr = searchResult.name.toUpperCase();
            monsterName.text(monsterNameStr);
            //console.log(monsterName);
            $span1.append(monsterName);

            //Empty Div to store Monster abilities and characteristics
            let $div1 = $('<div></div>');
            $span1.append($div1);

            //Holder for two ability paragrpahs
            let $holder1 = $('<ul></ul>')
            $div1.append($holder1);

            
            //Base start have all abilities but long goal is to drop it to pop-up window for description
            let actions = $('<li></li>');
            actions.text('Common Attacks: ')
            $holder1.append(actions);
            let actionStr = searchResult.actions;
            for (f = 0; f < actionStr.length; f++){
                //console.log(actionStr[f].name);
                let attackName = actionStr[f].name;
                let attackDesc = actionStr[f].desc;
                let attackBtn = $('<button></button>');
                let attackTitle = $('#name');
                let fightDesc = $('#desc');
                attackBtn.addClass('attackBtn');
                attackBtn.text(attackName);
                actions.append(attackBtn);
                attackBtn.click(() => {
                    attackTitle.text(attackName);
                    fightDesc.text(attackDesc);
                    overlay.addClass('active');
                    content.addClass('active');
                });
            }

            //Base Start to have all special notes
            let ability = $('<li></li>');
            ability.text('Monster Traits: ');
            $holder1.append(ability); 
            //let abilityArr = [];
            let abilityStr = searchResult.special_abilities;
            //console.log(abilityStr);
            for(let a = 0; a < abilityStr.length; a++){
                //console.log(abilityStr[a].name);
                let abilityName = abilityStr[a].name
                let abilityDesc = abilityStr[a].desc;
                let abilityBtn = $('<button></button>');
                let winTitle = $('#name');
                let winDesc = $('#desc');
                abilityBtn.addClass('abilityBtn');
                abilityBtn.text(abilityName);
                ability.append(abilityBtn);
                abilityBtn.click(() => {
                winTitle.text(abilityName);
                winDesc.text(abilityDesc);
                overlay.addClass('active');
                content.addClass('active');
                //console.log(descAbility);
                });

            }

            closeBtn.click(() => {
                overlay.removeClass('active');
                content.removeClass('active');
            });

            overlay.click(() => {
                overlay.removeClass('active');
                content.removeClass('active');
            });

            //Create a H2 for the Genre
            let stats = $('<h2></h2>');
            stats.addClass('stat');
            let statLife = searchResult.hit_points;
            let statStrength = searchResult.strength;
            let statWisdom = searchResult.wisdom;
            stats.text(`Monsters Attributes: Hit Points = ${statLife} / Strength = ${statStrength} / Intelligence = ${statWisdom}`);
            //console.log(stats);
            $span1.append(stats);


        }

    });
}