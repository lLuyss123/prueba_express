import express from "express";
import router from "./rutas.js"
const ini= express();
const port=3000;


ini.use("/riwi/",router)




ini.listen(port, ()=>{
    console.log(`servidor escuchando en http://localhost:${port}`);
    

})


