const skinTypeList = document.getElementById("skinTypeList");
const generateBtn = document.getElementById("generateBtn");
const routineContainer = document.getElementById("routineContainer");
const tipContainer = document.getElementById("tipContainer");

let selectedSkinType = null;

const routines = {
    oily:[
        "Cleanse with a foaming or gel-based cleaners",
        "Use a salicylic acid toner",
        "Apply an oil-free moisturizer",
        "Use a clay mask once a week",
        "Finish with sunscreen"
    ],
    dry:[
        "Use a hydrating cream cleanser",
        "Use a hydrating toner with glycerin",
        "Hyaluronic acid serum is a must",
        "Rich moisturizing cream",
        "Moisturizing sunscreen with SPF properties"
    ],
    combination[
        "Use Gel cleanser for balanced skin",
        "Apply balancing toner ",
        "Use vitamin C in the morning",
        "Light moisturizer on T-zone,richer on dry areas",
        "Apply SPF broad spectrum "

    ],
    
}
