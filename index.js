const partItems = document.querySelectorAll('.part-item');
const partContentItems = document.querySelectorAll('.part-content-item');


// Select Part content item
function selectItem(e){
    removeBorder();
    removeShow();
    // Adding border to part
    this.classList.add('part-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector('#${this.id}-content');
    // Add show class
    partContentItems.classList.add('show');
}


function removeBorder(){
    partItems.forEach(item => item.classList.remove('part-border'));
}


function removeShow(){
    partContentItems.forEach(item => item.classList.remove('show'));
}


// Listen for part click
partItems.forEach(item => item.addEventListener('click',selectItem));
