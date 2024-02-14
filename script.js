


// ## Enveloppe ##

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});



// ## fadein up ##

const text = document.querySelectorAll(".fade_title");

document.addEventListener("scroll", function () {
    text.forEach((text) => {
        if(isInView(text)){
            text.classList.add("fade_title--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150));
}

const text2 = document.querySelectorAll(".fade_title2");

document.addEventListener("scroll", function () {
    text2.forEach((text2) => {
        if(isInView(text2)){
            text2.classList.add("fade_title2--visible");
        }
    });
});





// #### FLOWERS ####

// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
// };

const flo = document.querySelectorAll("a");

document.addEventListener("scroll", function () {
    flo.forEach((flo) => {
        if(isInView(flo)){
            const c = setTimeout(() => {
                document.body.classList.remove(".not-loaded");
            clearTimeout(c);
            }, 1000);
        }
    });
});
