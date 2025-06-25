 // Store references to elements
const skinTypeList = document.getElementById("skinTypeList");
const generateBtn = document.getElementById("generateBtn");
const routineContainer = document.getElementById("routineContainer");
const tipContainer = document.getElementById("tipContainer");

let selectedSkinType = null;

// Example routines for each skin type
const routines = {
    oily: [
        "Cleanser: Use a gentle foaming cleanser",
        "Toner: Use an alcohol-free toner",
        "Serum: Apply niacinamide serum",
        "Moisturizer: Lightweight oil-free moisturizer",
        "SPF: Always use a matte finish sunscreen"
    ],
    dry: [
        "Cleanser: Use a hydrating cream cleanser",
        "Toner: Use a hydrating toner with glycerin",
        "Serum: Hyaluronic acid serum is a must",
        "Moisturizer: Rich moisturizing cream",
        "SPF: Moisturizing sunscreen with SPF 30+"
    ],
    combination: [
        "Cleanser: Gel cleanser for balanced skin",
        "Toner: Balancing toner",
        "Serum: Use vitamin C in the morning",
        "Moisturizer: Light moisturizer on T-zone, richer on dry areas",
        "SPF: Broad spectrum SPF 30"
    ],
    sensitive: [
        "Cleanser: Fragrance-free, gentle cleanser",
        "Toner: Skip or use calming toner with chamomile",
        "Serum: Use a calming serum like centella asiatica",
        "Moisturizer: Barrier-repair cream",
        "SPF: Mineral sunscreen (zinc oxide or titanium dioxide)"
    ]
};

// Example tips
const tips = {
    oily: "Avoid heavy creams and look for non-comedogenic products.",
    dry: "Drink plenty of water and use a humidifier if needed.",
    combination: "Customize your routine for different parts of your face.",
    sensitive: "Patch test new products before full application."
};

// Add click listeners to list items
skinTypeList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const href = event.target.getAttribute("href").substring(1); // get "oily", "dry", etc.

        selectedSkinType = href;
        generateBtn.disabled = false;

        // Optional: Highlight selected item
        document.querySelectorAll("#skinTypeList a").forEach(a => a.classList.remove("selected"));
        event.target.classList.add("selected");
    }
});

// Generate routine on button click
generateBtn.addEventListener("click", () => {
    if (!selectedSkinType) return;

    const routine = routines[selectedSkinType];
    const tip = tips[selectedSkinType];

    routineContainer.innerHTML = `<h2>Your ${selectedSkinType} skin routine:</h2><ul>` +
        routine.map(step => `<li>${step}</li>`).join("") +
        `</ul>`;

    tipContainer.innerHTML = `<h3>Tip:</h3><p>${tip}</p>`;
});
