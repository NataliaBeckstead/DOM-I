//timer function
function timer(startButton) {  
   interval = setInterval(function() {
        //set red color on text
        if (miliseconds === 1000) {
            var numbers = document.querySelector('.digits');
            numbers.className += " redDigit"; 
        }
        //disable start button
        startButton.disabled = true;
        startButton.style.background = 'rgb(200, 200, 200)';
        startButton.style.color = 'rgb(50, 50, 50)';
        startButton.style.border = '1px solid rgb(200, 200, 200)';
        startButton.style.cursor = "not-allowed";

        //printing time on screen
        let intString = Array.from(miliseconds.toString());
        if (intString.length < 2) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = '0';
            const mh = document.querySelector("#msHundreds");
            mh.textContent = '0';
            const mt = document.querySelector("#msTens");
            mt.textContent = intString[0];
        } else if (intString.length < 3) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = '0';
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString[0];
            const mt = document.querySelector("#msTens");
            mt.textContent = intString[1];
        } else if (intString.length < 4) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = intString[0];
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString[1];
            const mt = document.querySelector("#msTens");
            mt.textContent = intString[2];
        } else if (intString.length < 5) {
            const st = document.querySelector("#secondTens");
            st.textContent = intString[0];
            const so = document.querySelector("#secondOnes");
            so.textContent = intString[1];
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString[2];
            const mt = document.querySelector("#msTens");
            mt.textContent = intString[3];
        }
        
       
        //increasing time
        miliseconds++;

        //stop timer
        if(miliseconds == 1001){
            clearInterval(interval);
            startButton.disabled = false;
            startButton.style.background = '#007dc1';
            startButton.style.color = '#ffffff';
            startButton.style.border = '1px solid #124d77';
            startButton.style.cursor = "pointer";
        }
   }, 10)
}

//variables
var miliseconds = 0;
var interval;
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const stopButton = document.getElementById('stop');


//click event to start timer
startButton.addEventListener("click", function() {
    //reset time
    miliseconds = 0;
    //get rid of red class from numbers
    var numbers = document.querySelector('.digits');
    numbers.classList.remove("redDigit");
    //calling timer
    timer (startButton);
});

//click event to reset button
resetButton.addEventListener("click", function () {
    //stop the function
    clearInterval(interval);
    //start button back to normal
    startButton.disabled = false;
    startButton.style.background = '#007dc1';
    startButton.style.color = '#ffffff';
    startButton.style.border = '1px solid #124d77';
    startButton.style.cursor = "pointer";
    //redraw numbers
    const st = document.querySelector("#secondTens");
    st.textContent = '-';
    const so = document.querySelector("#secondOnes");
    so.textContent = '-';
    const mh = document.querySelector("#msHundreds");
    mh.textContent = '-';
    const mt = document.querySelector("#msTens");
    mt.textContent = '-';
});

//click event for pause button
stopButton.addEventListener("click", function () {
    //stop the function
    clearInterval(interval);
    //start button back to normal
    startButton.disabled = false;
    startButton.style.background = '#007dc1';
    startButton.style.color = '#ffffff';
    startButton.style.border = '1px solid #124d77';
    startButton.style.cursor = "pointer";
});
