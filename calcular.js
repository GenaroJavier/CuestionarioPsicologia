module.exports = function(valores){
    var a = [9,10,17,22,30];
    var b = [5,7,15,20,25];
    var c = [1,11,14,23,27];
    var d = [8,16,19,21,29];
    var e = [3,4,13,24,28];
    var f = [2,6,26,31,33];
    var g = [12,18,32,34,35];
    var ver = 0, log_mat=0, vis_esp = 0, kin_cor = 0, mus_rit = 0, intra = 0, intra2 = 0;
    for (const property in valores){
        console.log(property+':'+valores[property]);
        if(a.includes(parseInt(property,10)) && valores[property] == 'v'){
            ver++;
        }
        if(b.includes(parseInt(property,10)) && valores[property] == 'v'){
            log_mat++;
        }
        if(c.includes(parseInt(property,10)) && valores[property] == 'v'){
            vis_esp++;
        }
        if(d.includes(parseInt(property,10)) && valores[property] == 'v'){
            kin_cor++;
        }
        if(e.includes(parseInt(property,10)) && valores[property] == 'v'){
            mus_rit++;
        }
        if(f.includes(parseInt(property,10)) && valores[property] == 'v'){
            intra++;
        }
        if(g.includes(parseInt(property,10)) && valores[property] == 'v'){
            intra2++;
        }
    }
    console.log('============================');
    console.log(ver);
    console.log(log_mat);
    console.log(vis_esp);
    console.log(kin_cor);
    console.log(mus_rit);
    console.log(intra);
    console.log(intra2);
}
/*A:9 -10-17-22-30 = Int. verval
  B:5-7-15-20-25 = Int. Logico-matematica
  C:1-11-14-23-27 = Int. Visual espacial
  D:8-16-19-21-29 = Int. Kinestecia corporal
  E:3-4-13-24-28 = Int. Musical ritmica
  F:2-6-26-31-33 = Int. Intrapersonal
  G:12-18-32-34-35 = Int. Intrapersonal*/