// in order to get the toggle button on the top right of screen
// it will return an array so we need to put the index of the first element that is the toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
// get the list and make sure you are getting the first element in the array the only nav list currently
const navList = document.getElementsByClassName('nav-list')[0]


//call the toggleButton this event will take place when the button is clicked 'click', we want to run a specific function
// { defining the function by taking the nav list and access all the different classes on it
// if the button exist it will open it if it doesn't it won't
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})