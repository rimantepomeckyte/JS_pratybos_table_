const button = document.getElementById("button");
button.addEventListener("click", lentelesPiesimas);
const kur = document.getElementById("lentele");

function lentelesPiesimas(){
    const row = document.getElementById("row").value;
    const columns = document.getElementById("columns").value;
    for (let i=0; i<row; i++) {
        const kaidet = document.createElement("tr");
        kur.appendChild(kaidet);
        for (let j = 0; j < columns; j++) {
            const kaidet2 = document.createElement("td");
            kaidet2.textContent="stulpelis";
            kur.appendChild(kaidet2);
        }
    }
    }





/*const rows = document.getElementById("row");
const columns = document.getElementById("columns");
const button = document.getElementById("button");
//const table = document.getElementById("lentele")

button.addEventListener("click", pieskLentele)

/*function draw_table(){
    for(let i=0; i<=rows; i++){
        table.write("<tr>");
        for(let j=0; j<=columns; j++){
            table.write("<td>"+j+"</td>");
        }
        table.write("</td>");
    }
}*/
/*function pieskLentele() {

    let psk = "<table>";
    for (let i=0; i<rows.value; i++){
        psk +="<tr>";
        for (let j=0; j<columns.value; j++) {
            psk +="<td>"+j+"</td>";
        }
        psk+="</tr>";
    }
    psk+="</table>";
    document.getElementById("lentele").innerHTML=psk;
}*/