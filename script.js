function typingLetter() {
    function activeletter(element) {
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.array.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter;
            }, 75 * i);
        });
    }

    const title = document.querySelector('.typing');
    activeletter(title);
}

typingLetter()


function menuMobele() {
    const ativaMenu = document.querySelector('.fa-bars');
    const ativaMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        ativaMenu.classList.toggle('activated');
    });
}
menuMobele();


function aboutMe() {

    const divExperience = document.querySelectorAll('.experience_content div');
    const liExperience = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperience[0].classList.add('active')
    divEducation[0].classList.add('active')
    liEducation[0].classList.add('active')
    liEducation[0].classList.add('active')

    function slideShow(index) {
        divExperience_forEach((div) => {
            div.classList.remove('active');
        });
        liExperience_forEach((button) => {
            div.classList.remove('active');
        });
        divExperience[index].classList.add('active');
        liExperience[index].classList.add('active');
    }

    function slideShow2(index) {
        divEducation_forEach((div) => {
            div.classList.remove('active');
        });
        liEducation_forEach((button) => {
            div.classList.remove('active');
        });
        divEducation[index].classList.add('active');
        liEducation[index].classList.add('active');
    }

    liExperience.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        })
    })

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        })
    })
}

aboutMe();



const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item) => {
    item.classList.add('ativo');
})

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index)
    })
})

function showLista(lista, buttom = "all") {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    });

    if (buttom == 'design') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if (buttom == 'graphic') {
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if (buttom == 'website') {
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if (buttom == 'all') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
        let currentButton = e.target;
        if (currentButton.classList.contains('all')) {
            showLista(listaALL);
        }
        if (currentButton.classList.contains('design')) {
            showLista(listaALL, "design")
        }

        if (currentButton.classList.contains('graphic')) {
            showLista(listaALL, "graphic")
        }

        if (currentButton.classList.contains('website')) {
            showLista(listaALL, "website")
        }

        if (currentButton.classList.contains('all')) {
            showLista(listaALL, "all")
        }
    });
});