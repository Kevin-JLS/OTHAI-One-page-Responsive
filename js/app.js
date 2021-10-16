// Nav responsive

const btnResponsive = document.querySelector('.btn-responsive');
const nav = document.querySelector('.liste-responsive')

btnResponsive.addEventListener('click', () => {
    nav.classList.toggle('active')
})


// Avis & commentaires

const allCross = document.querySelectorAll('.panneau-visible img');

allCross.forEach(logo => {

    logo.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus')){
            this.src = "assets/images/minus.svg";
            currentChoice.style.height = height + 40 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "assets/images/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity =0;
            currentChoice.style.padding = "0px 15px";
        }

    })

})

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}




