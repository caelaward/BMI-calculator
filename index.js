let h = document.querySelector('[data-height]').value;
let w = document.querySelector ('[data-weight]').value;
let btn = document.querySelector('[data-btn]')


btn.addEventListener('click', function(){
let h = document.querySelector('[data-height]').value;
let w = document.querySelector ('[data-weight]').value;
 BMI(w,h);

})

    
    function BMI(w,h) {
        let answer= w/(h*h)
        console.log(answer);
        document.querySelector('[data-answer]').value = answer.toFixed(2)
    }
