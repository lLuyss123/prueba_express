import fs from "fs"
const rutaDB = "./db.json"
export function getData() {
    //Esta vaina  retorna un string en formato json pero noosotros lo queremos como un objeto. por eso hacemos JSON.paser....
    return JSON.parse(fs.readFileSync(rutaDB));
}

export function setData(data) {
    //Esta vaina  retorna un JSON  pero noosotros lo queremos como un Objeto. por eso hacemos JSON.stringfy....
    fs.writeFileSync(rutaDB, JSON.stringify(data, null, 4))
}
