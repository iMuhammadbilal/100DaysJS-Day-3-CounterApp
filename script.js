// first targer three buttons
const button1 = document.getElementById('increase');
const button2 = document.getElementById('decrease');
const button3 = document.getElementById('reset');
// show message in page
const message = document.getElementById('count');
// add event listener to first button
button1.addEventListener('click', () => {
    // message will be show in page when user clicks the button
    count.innerHTML = parseInt(count.innerHTML) + 1;
    // change color of count based on the value
    if(count.innerHTML < 10){
        count.style.color = 'green';
    }else if(count.innerHTML < 20){
        count.style.color = 'red';
    }else if(count.innerHTML < 30){
        count.style.color = 'blue';
    }else if(count.innerHTML < 40){
        count.style.color = '#ff00ff';
    }else if(count.innerHTML < 50){
        count.style.color = 'orange';
    }else{
        count.style.color = 'black';
    }
});
// add event listener to second button
button2.addEventListener('click', () => {
    // message will be show in page when user clicks the button
    count.innerHTML = parseInt(count.innerHTML) - 1;
    // change color of count based on the decrease value
    if(count.innerHTML < 10){
        count.style.color = '#e56b6f';
    }else if(count.innerHTML < 20){
        count.style.color = '#bf0603'; //370617
    }else if(count.innerHTML < 30){
        count.style.color = '#f2542d';
    }else if(count.innerHTML < 40){
        count.style.color = '#ff00ff';
    }else if(count.innerHTML < 50){
        count.style.color = '#e26d5c';
    }else{
        count.style.color = 'black';
    } 
});
// add event listener to third button
button3.addEventListener('click', () => {
    // message will be show in page when user clicks the button
    count.innerHTML = 0;
});