const status_words = [
    'Office Furniture',
    'Custom Made Furniture',
    'Outdoor Furniture',
    'Floorings',
    'Foam Change and Stitching',
    'Curtains'
];

const message_bar = document.getElementsByClassName('message')[0];
let index = 0; 

function updateMessage() {
    message_bar.textContent = status_words[index]; 
    index = (index + 1) % status_words.length; 
}

setInterval(updateMessage, 3000);
updateMessage();