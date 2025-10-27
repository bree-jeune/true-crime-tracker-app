    /*

        Functionality:
        - Displays a random case from a list of notable crimes.
        - Allows interactive cards that toggle visual states when clicked.
        - A button to fetch and display a new random case.

    */

    // 1. Define an array of crime cases
    const crimeCases = [
    {
        title: "The Zodiac Killer",
        details: "Unsolved serial killings in Northern California in the late 1960s."
    },
    {
        title: "Jack the Ripper",
        details: "Unidentified murderer in London, 1888, targeting women."
    },
    {
        title: "Ana Montes: Cuban Spy",
        details: "Defense Intelligence Agency Analyst Ana Montes pled guilty in 2002 to passing U.S. secrets to Cuba."
    },
    {
        title: "Beltway Snipers",
        details: "In October 2002, two snipers terrorized D.C., killing 10 people and critically injuring three before being caught."
    },
    {
        title: "Bernie Madoff Case",
        details: "Madoff ran history's biggest Ponzi scheme before being caught in 2008."
    },
    {
        title: "Frank Sinatra Jr. Kidnapping",
        details: "On December 8, 1963, amateur criminals kidnapped Frank Sinatra Jr. in hopes of striking it rich."
    },
    {
        title: "George 'Machine Gun' Kelly",
        details: "Kelly and his gang kidnapped a wealthy oil magnate and gave agents their 'G-men' moniker upon arrest."
    },
    {
        title: "Isabella Stewart Gardner Museum Heist",
        details: "1990 art heist where disguised thieves stole 13 masterpieces — the largest property crime in U.S. history."
    },
    {
        title: "JFK Assassination",
        details: "Lee Harvey Oswald was found to have acted alone after extensive FBI investigation."
    },
    {
        title: "Jonestown",
        details: "FBI investigated the murder of U.S. Congressman Leo Ryan and mass suicide in Jonestown, Guyana in 1978."
    }
    ];

    // 2. Function to show random cases — now per card
    function showRandomCase() {
    const cards = document.querySelectorAll('.crime-card');

    cards.forEach((card) => {
        // Card fade-out effect
        card.classList.add('fade-out');

        // Get a random case for each card
        // Wait 400ms for fade, then change content and fade back in
        setTimeout(() => {
      const idx = Math.floor(Math.random() * crimeCases.length);
        const randomCase = crimeCases[idx];

        card.querySelector('.crime-title').textContent = randomCase.title;
        card.querySelector('.crime-details').textContent = randomCase.details;

        // Remove fade-out to trigger fade-in
        card.classList.remove('fade-out');
        }, 400);

    });
    }

    // 3. Add card interactivity (toggle “active” visual state)
    function cardInteractivity() {
    const cards = document.querySelectorAll('.crime-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
        card.classList.toggle('active');
        });
    });
    }

    // 4. Run setup only after the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('new-case-btn');
    
    button.addEventListener('click', showRandomCase);
    cardInteractivity();
    showRandomCase(); // initial set of random cards
    });