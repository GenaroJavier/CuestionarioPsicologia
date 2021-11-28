const a = [9,10,17,22,30];
const b = [5,7,15,20,25];
const c = [1,11,14,23,27];
const d = [8,16,19,21,29];
const e = [3,4,13,24,28];
const f = [2,6,26,31,33];
const g = [12,18,32,34,35];


var cuestionario = document.querySelector('#form-cuestionario')
fetch('php/admin.php',{
    method:'get',
    credentials: 'include'
})
.then(res => res.text())
.then(data => {
    //console.log(data);
    cuestionario.innerHTML=data+'<br><input type="submit" value="Enviar" id="btnCuestionario"/>';
    calificar();
})
function calificar(){
    var btn = document.querySelector('#btnCuestionario');
    btn.onclick = (conf) => {
        conf.preventDefault();
        var radios = document.querySelectorAll('.radiobtn');
        var check = document.querySelectorAll("input[type='radio']:checked");
        console.log(check.length);
        console.log(radios.length/2);
        if(check.length != radios.length/2) {
            alert('Por favor contesta todas las preguntas');
            }
        var radios = document.querySelectorAll('.radiobtn');
        var array_radios_verdadero = [];
        var cont = 0;
        var ver = 0, log_mat=0, vis_esp = 0, kin_cor = 0, mus_rit = 0, intra = 0, intra2 = 0;
        for (var i = 0; i < radios.length; i++) {
            var pro = parseInt(radios[i].name,10);
            //if(radios[i].value=='v' && radios[i].checked)
                //console.log(radios[i].name);
                // array_radios_verdadero[cont]=radios[i].name;
                // cont++;
            if(a.includes(pro) && radios[i].value === 'v' && radios[i].checked){
                ver++;
                console.log(pro);
            }
            if(b.includes(pro) && radios[i].value == 'v'&&  radios[i].checked){
                log_mat++;
            }
            if(c.includes(pro) && radios[i].value == 'v' && radios[i].checked){
                vis_esp++;
            }
            if(d.includes(pro) && radios[i].value == 'v' && radios[i].checked){
                kin_cor++;
            }
            if(e.includes(pro) && radios[i].value == 'v' && radios[i].checked){
                mus_rit++;
            }
            if(f.includes(pro) && radios[i].value == 'v' && radios[i].checked){
                intra++;
            }
            if(g.includes(pro) && radios[i].value == 'v' && radios[i].checked){
                intra2++;
            }
        }
        var datos = {
            'Int. verval':ver,
            'Logico-matematica':log_mat,
            'Visual espacial':vis_esp,
            'Kinestecia corporal':kin_cor,
            'Musical ritmica':mus_rit,
            'Intrapersonal':intra,
            'Intrapersonal':intra2
        }
        console.log(datos);
        //console.log(array_radios_verdadero);
        //radios[1].checked ? alert('potente'):alert('llena el formulario alv')
    };
}
