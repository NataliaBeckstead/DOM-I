//timer function
function timer(startButton) {  
   interval = setInterval(function() {

        if (miliseconds === 1000) {
            var numbers = document.querySelector('.digits');
            numbers.className += " redDigit"; 
        }

        startButton.disabled = true;

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
        }
   }, 10)
}

//variables
var miliseconds = 0;
var interval;
const startButton = document.getElementById('start');

//click event to staart timer
startButton.addEventListener("click", function() {
    //reset time
    miliseconds = 0;
    //get rid of red class from numbers
    var numbers = document.querySelector('.digits');
    numbers.classList.remove("redDigit");
    //calling timer
    timer (startButton);
});
