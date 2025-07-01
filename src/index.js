const skinTypeList = document.getElementById("skinTypeList");
const generateBtn = document.getElementById("generateBtn");
const routineContainer = document.getElementById("routineContainer");
const tipContainer = document.getElementById("tipContainer");

let selectedSkinType = null;

const routines = {
    oily:{
        morningRoutine: [
          "Cleanse with a foaming or gel-based cleaners",
          "Use a salicylic acid toner",
          "Apply an oil-free moisturizer",
          "Use a clay mask once a week",
          "Finish with sunscreen"
       ],
       nightRoutine:[
           "Double cleanse if wearing makeup",
           "Apply a niacinamide serum",
           "Use a lightweight moisturizer",
           "Use a clay mask once a week"
       ]
    },

    dry:[
        "Use a hydrating cream cleanser",
        "Use a hydrating toner with glycerin",
        "Hyaluronic acid serum is a must",
        "Rich moisturizing cream",
        "Moisturizing sunscreen with SPF properties"
    ],
    combination:[
        "Use Gel cleanser for balanced skin",
        "Apply balancing toner ",
        "Use vitamin C in the morning",
        "Light moisturizer on T-zone,richer on dry areas",
        "Apply SPF broad spectrum "

    ],
    sensitive: [
        "Cleanse with a fragrance-free",
        "Apply a soothing serum",
        "Use a barrier-repair moisturizer",
        "Avoid physical touch on your face",
        "Use SPF for your skin"
    ]
};
const tips = {
    oily:[
        "Avoid over-washing your face washing twice a day is enough.",
         "Blotting papers can help control shine during the day.",
         "Avoid heavy creams and oils."

    ],
    dry:[
        "Drink plenty of water.",
        "Avoid hot water;use lukewarm water for cleansing.",
        "Use a humidifier to add moisture to the air."
    ],

    combination:[
                "Customize your routine for different parts of your face.",
                "Multi-masking helps address different areas of your face.",
                "Don't use harsh products that dry out dry areas in your face.",
    ],

    sensitive:[
             "Avoid alcohol and fragrance in skincare.",
              "Keep your routine minimal to avoid irritation.",
              "Always patch test new products before full use."
]
};

skinTypeList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();

        const href = event.target.getAttribute("href").substring(1); // get "oily", "dry", etc.
        selectedSkinType = href;
        generateBtn.disabled = false;

        routineContainer.innerHTML = "";
        tipContainer.innerHTML = "";

        document.querySelectorAll("#skinTypeList a").forEach(a => a.classList.remove("selected"));
        event.target.classList.add("selected");
    }
});

generateBtn.addEventListener("click", () => {
    if (!selectedSkinType) return;

    const routine = routines[selectedSkinType];
    const tip = tips[selectedSkinType];

    routineContainer.innerHTML = `<h2>Your ${capitalize(selectedSkinType)} Skin Routine:</h2><ul>` +
        routine.map(step => `<li>${step}</li>`).join("") +
        `</ul>`;

    tipContainer.innerHTML = `<h3>Tip:</h3><p>${tip}</p>`;
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}