import {convertirDolaresAEuros, convertirDolaresALibras} from "./conversor.js";
import readline from'node:readline';
const resolve = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

resolve.question('Ingrese los dolares que convertirá en Euros:\n',(x)=>{
    readline.cursorTo(process.stdout,0,1);
    readline.clearScreenDown(process.stdout);
    console.log(`Los ${x} dolares son ${convertirDolaresAEuros(x)} euros al cambio.`);
    resolve.question('Ingrese los dolares que convertirá en Libras:\n',(y)=>{
        readline.cursorTo(process.stdout,0,2);
        readline.clearScreenDown(process.stdout);
        console.log(`Los ${y} dolares son ${convertirDolaresALibras(y)} libras al cambio.`);
        process.exit();
    })
});