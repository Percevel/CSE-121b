var spell = document.getElementById("spell").value.replace(/\s+/g, '-');
var url = 'https://www.dnd5eapi.co/api/spells/'+spell;
let results = null;

const spellToURLForm = () => {
    for(let x of spell){
        if(x === " "){
            x = "-";
        }
    }
}

const fill = (results) => {
    let filler = "";

    document.getElementById("spelln").textContent = results.name;
    document.getElementById("desc").textContent = results.desc;
    
    for(let x = 0; x < results.classes.length; x ++){
        console.log(results.classes[x].name);
        filler += results.classes[x].name + ", "
    }
    document.getElementById("class").textContent = filler;

    document.getElementById("level").textContent = results.level;
    document.getElementById("tdamage").textContent = results.damage.damage_type.name;
    document.getElementById("dDamage").textContent = results.damage.damage_at_slot_level[2];
    document.getElementById("range").textContent = results.range;
    document.getElementById("higher_level").textContent = results.higher_level;
    document.getElementById("components").textContent = results.components;
    document.getElementById("material").textContent = results.material;
    document.getElementById("attack_type").textContent = results.attack_type;
    document.getElementById("casting_time").textContent = results.casting_time;
    document.getElementById("concentration").textContent = results.concentration;
    document.getElementById("ritual").textContent = results.ritual;
    document.getElementById("duration").textContent = results.duration;
}

const update = () => {    
    spell = document.getElementById("spell").value.toLowerCase().replace(/\s+/g, '-');
    url = 'https://www.dnd5eapi.co/api/spells/'+spell;
    fetch(url)
        .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log("error:", response);
        }
        })
        .then((data) => {
        results = data;
        console.log("first: ", results);
        fill(results);
        //console.log(results.id);
        });
    }
console.log('second: ', results);
document.querySelector("#spell").addEventListener('change', update);