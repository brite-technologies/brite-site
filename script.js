addScrollTransitions('hidden', 'show');
addScrollTransitions('hidden-left', 'show-left');
addScrollTransitions('hidden-right', 'show-right');
addScrollTransitions('hidden-return', 'show-return');
addScrollTransitions('hidden-slower', 'show-slower');
addScrollTransitions('hidden-fly', 'show-fly');

function addScrollTransitions(hiddenClass, showClass, shouldRepeatTransition=false) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add(showClass);
            } else if(shouldRepeatTransition) {
                entry.target.classList.remove(showClass);
            }
        });
    });

    elements = document.getElementsByClassName(hiddenClass);
    
    for(const el of elements) {
        observer.observe(el);
    }
}
