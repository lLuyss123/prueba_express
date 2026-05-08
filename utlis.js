import fs from "fs"
const rutaDB = "./db.json"
export function getData() {
    //Esta vaina  retorna un string en formato json pero noosotros lo queremos como un objeto JSON. por eso hacemos JSON.paser....
    return JSON.parse(fs.readFileSync(rutaDB));
}

export function setData(data) {
    //Esta vaina  objeto pero noosotros lo queremos como un string en formato JSON. por eso hacemos JSON.stringfy....
    fs.writeFileSync(rutaDB, JSON.stringify(data, null, 4))
}
