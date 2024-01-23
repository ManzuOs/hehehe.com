// Array of image URLs to display when the "No" button is clicked
const yesImages = [
    "picture/catrose1.jpeg",
    "picture/catrose.gif",
    "picture/catrose2.jpg",
    // Add more image URLs as needed for the "Yes" button
];

const noImages = [
    'picture/cat1.jpg',
    'picture/cat2.gif',
    'picture/cat3.gif',
    'picture/cat4.jpg',
    'picture/cat5.png',
    
    // Add more image URLs as needed
  ];

// Function to display a random image based on the decision
function showRandomImage(decision) {
    const imageContainer = document.getElementById('main-image');
    
    // Get a random index for the selected decision
    const randomIndex = decision === 'yes'
        ? Math.floor(Math.random() * yesImages.length)
        : Math.floor(Math.random() * noImages.length);
    
    // Set the source of the image to the randomly selected image
    const randomImage = decision === 'yes' ? yesImages[randomIndex] : noImages[randomIndex];
    imageContainer.src = randomImage;
}