/*document.addEventListener('click',function(element){
    let current = element.target
    
    getPath(current)
})*/

function getPath(el) {
    let nodes = []
    let select = ''
    
    while (!el.classList.contains('body')) {
        el = el.parentElement;
        
        if (!el) {
            break;
        }
  
        let cnode = ''
        cnode += el.tagName
    
        if (el.id)
            cnode += '#' + el.id

        if (el.className) {
            cnode += '.' + el.className.replace(/ /g, '.')
        }
			
        nodes.push(cnode)
    }
	
    nodes.reverse()
    
	return nodes.join('>')
}
