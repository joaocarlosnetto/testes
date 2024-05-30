function seta(){
    var bases = document.getElementById('bases')
    var lights = document.getElementById('lights')
    if(bases.style.display == 'none'){
        bases.style.display = 'block'
        lights.style.display = 'none'
    } else{
        bases.style.display = 'none'
        lights.style.display = 'block'

    }
    bases.style.transform = '0.3s'
    lights.style.transition = '0.3s'

}

function back(){
    var bases = document.getElementById('bases')
    var lights = document.getElementById('lights')
    if(bases.style.display == 'none'){
        bases.style.display = 'block'
        lights.style.display = 'none'
    } else{
        bases.style.display = 'none'
        lights.style.display = 'block'

    }
    bases.style.transform = '0.3s'
    lights.style.transition = '0.3s'
}