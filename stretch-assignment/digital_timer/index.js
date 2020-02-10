var miliseconds = 0;
var interval;
function timer() {  
   interval = setInterval(function() {
        //printing time on screen
        let intString = miliseconds.toString();
        if (interval < 10) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = '0';
            const mh = document.querySelector("#msHundreds");
            mh.textContent = '0';
            const mt = document.querySelector("#msTens");
            mt.textContent = intString.charAt(0);
        }
        if (interval < 100) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = '0';
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString.charAt(0);
            const mt = document.querySelector("#msTens");
            mt.textContent = intString.charAt(1);
        }
        if (interval < 1000) {
            const st = document.querySelector("#secondTens");
            st.textContent = '0';
            const so = document.querySelector("#secondOnes");
            so.textContent = intString.charAt(0);
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString.charAt(1);
            const mt = document.querySelector("#msTens");
            mt.textContent = intString.charAt(2);
        }
        if (interval < 10000) {
            const st = document.querySelector("#secondTens");
            st.textContent = intString.charAt(0);
            const so = document.querySelector("#secondOnes");
            so.textContent = intString.charAt(1);
            const mh = document.querySelector("#msHundreds");
            mh.textContent = intString.charAt(2);
            const mt = document.querySelector("#msTens");
            mt.textContent = intString.charAt(3);
        }
       
        //increasing time
        miliseconds++;

        //stop timer
        if(miliseconds == 1001){
            clearInterval(interval); 
        }
   }, 10)
}
timer();