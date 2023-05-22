let panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', function(){
        removeActiveClasses();
        this.classList.add('active');
    })
})

let removeActiveClasses = function removeActiveClasses() {
    panels.forEach((panel) => panel.classList.remove('active') )
}

