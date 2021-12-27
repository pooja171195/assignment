      
        //password validation
        const username = document.querySelector("#username")
        const contactno = document.querySelector("#contactno")
        const email = document.querySelector("#email")
        const pass = document.querySelector('#pass')
        const confirm_pass = document.querySelector('#confirm-pass')
        const msg = document.querySelector('p')
        const btn = document.querySelector('button')
        btn.addEventListener('click', (e) => {
            if (pass.value != confirm_pass.value) {
                e.preventDefault();
                msg.style.display = "block"
            }else{
                alert('user registered sucessfully')
            }

        })
        // const username = document.querySelector("#username")
        // const contactno = document.querySelector("#contactno")
        // const email = document.querySelector("#email")
        // const pass = document.querySelector('#pass')
        // const confirm_pass = document.querySelector('#confirm-pass')
        // const msg = document.querySelector('p')
        // const btn = document.querySelector('button')
        // btn.addEventListener('click', (e) => {
        //     if ((username.value == null)||(contactno.value == null)||(email.value==null)||(pass.value==null)||(confirm_pass.value==null)) {
        //         e.preventDefault();
        //         msg.style.display = "block"
        //     }else{
        //         alert('user registered sucessfully')
        //     }

        // })