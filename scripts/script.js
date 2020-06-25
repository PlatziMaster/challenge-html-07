
    // valida evento click boton ON
    function screenPic () {
        const miPic = document.getElementById("pic")
        const btn = document.getElementById("btn-on")


        if (miPic.style.display === "block") {
            miPic.style.display=("none")
            console.log('screen OFF')
            btn.style.backgroundColor=("red")
        } else {
                miPic.style.display=("block")
            console.log('screen ON')
            btn.style.backgroundColor=("green")
        }
        // time off autmático
        setTimeout (
            function autoOff () {
            if (miPic.style.display === "block")
                miPic.style.display=("none")
                btn.style.backgroundColor=("red")
                console.log('screen OFF automático')
            }, 8000
        )
    }

