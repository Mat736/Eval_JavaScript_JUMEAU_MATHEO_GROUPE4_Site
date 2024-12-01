/* Le Menu Deroulant*/
const liste = document.querySelectorAll('li')
const content = document.querySelectorAll('div');

tab.forEach(tab => {
    tab.addEventListener('click',function(){
        tab.classList.remove('tab-active')

        div.forEach(content => {
            content.classList.remove('active');
        });

        this.classList.add('tab-active');
        
    })
    
})