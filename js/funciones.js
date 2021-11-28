var params = {"contenido":"JS"}
var buton = document.querySelector('#btnCuestionario').onclick=()=>{
    console.log('clic');
    fetch('http://localhost/cuestionarioPsicologia/php/login.php',{
        method:'POST',
        credentials: 'include',
        body:params
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
    })
}