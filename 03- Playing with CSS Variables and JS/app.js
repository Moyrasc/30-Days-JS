const input = document.querySelectorAll(".controls input");

function rangeBar(){
    const suffix = this.dataset.sizing || "" ;
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    
    
 }
 input.forEach(input => input.addEventListener("input",rangeBar));
