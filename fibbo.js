const wysw= document.getElementById("wysw");
function fib() {
    const x = document.getElementById("x").value;
    let n_1 = 1, n = 1, temp = 0;
    let bloczki = "<div class='blok'><h2>1</h2></div><div class='blok'><h2>1</h2></div>";
    for (let index = 3; index <= x; index++) {
        temp = n;
        n += n_1;
        n_1 = temp;
        bloczki += "<div class='blok'><h2>" + n + "</h2><p>"+index+"</p></div>";
        console.log(bloczki);
    }
    wysw.innerHTML= bloczki;
}