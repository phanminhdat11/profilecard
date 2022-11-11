var btnOpen = document.querySelector('.hello');
var dialog = document.querySelector('.dialog');
var iconClose = document.querySelector('.iner_header i');
var btnClose = document.querySelector('.iner_footer button')

function EventDialog(){
     
    dialog.classList.toggle('hide')
}
btnOpen.addEventListener('click',EventDialog)
btnClose.addEventListener('click',EventDialog)
iconClose.addEventListener('click',EventDialog)
dialog.addEventListener('clcik',function(e){
    if(e.target == e.currentTarget){
        EventDialog()
    }
})
