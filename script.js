document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const questionContainer = document.getElementById('questionContainer');

    noButton.addEventListener('mouseover', () => {
        const moveDistance = 50; // Maximum distance to move in pixels
        const randomAngle = Math.random() * 2 * Math.PI; // Random angle in radians

        // Calculate new position based on the random angle and distance
        let newX = noButton.offsetLeft + moveDistance * Math.cos(randomAngle);
        let newY = noButton.offsetTop + moveDistance * Math.sin(randomAngle);

        // Ensure the new position is within the viewport boundaries
        newX = Math.max(0, Math.min(newX, window.innerWidth - noButton.offsetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - noButton.offsetHeight));

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    yesButton.addEventListener('click', () => {
        questionContainer.style.display = 'none';


        // Delay for the confetti effect before showing the message and GIF
        setTimeout(() => {
            const body = document.querySelector('body');
            const hoorayText = document.createElement('h2');
            hoorayText.textContent = 'Hooray!';
            hoorayText.style.position = 'fixed';
            hoorayText.style.top = '30%';
            hoorayText.style.left = '50%';
            hoorayText.style.transform = 'translate(-50%, -50%)';
            hoorayText.style.color = 'white';
            hoorayText.style.zIndex = '1000';
            hoorayText.style.fontSize = '2rem';
            body.appendChild(hoorayText);

            const catGif = document.createElement('img');
            catGif.src = 'https://media.tenor.com/yk8nhx3fZGYAAAAj/sebas-bleizeffer.gif'; // Placeholder, replace with actual GIF URL
            catGif.style.position = 'fixed';
            catGif.style.top = '50%';
            catGif.style.left = '50%';
            catGif.style.transform = 'translate(-50%, -50%)';
            catGif.style.zIndex = '999';
            body.appendChild(catGif);

            const footer = document.createElement('p');
            footer.textContent = "i made this whilst procrastinating";
            footer.style.position = 'fixed';
            footer.style.bottom = '100px';
            footer.style.width = '100%';
            footer.style.textAlign = 'center';
            footer.style.color = 'black';
            document.body.appendChild(footer);
        }, 500); // Adjust delay as needed
    });
});



