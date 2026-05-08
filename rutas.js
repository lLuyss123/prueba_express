import { Router } from "express";
import { getData } from "./utlis.js";
const router = Router();

router.post("/coder",
    (req, resp) => {
        resp.status(200).json({
            menssage: "TODO OK"
        })
    }
)

router.get("/coders",
    (req, resp) => {
        const { id, name, age, status, isActive } = req.query;
        const data = getData();
        if (id) {
            const index = data.findIndex(
                (objet) => { return objet.id == id })
            if (index == -1) {
                return resp.status(404).send("Not found")
            }
            return resp.json(data[index])
        } else if (name) {
            const result = data.filter(
                (objet) => name === objet.name)
            if (result.length == 0) {
                return resp.status(404).send("Not found")
            }
            return resp.json(result)
        } else if (age) {
            const result = data.filter(
                (objet) => age == objet.age)
            if (result.length == 0) {
                return resp.status(404).send("Not found")
            }
            return resp.json(result)
        } else if (status) {
            const result = data.filter(
                (objet) => status === objet.status)
            if (result.length == 0) {
                return resp.status(404).send("Not found")
            }
            return resp.json(result)
        } else if (isActive) {
            const result = data.filter(
                (objet) => {
                    return isActive == String(objet.isActive)
                })

            if (result.length == 0) {
                return resp.status(404).send("Not found")
            }
            return resp.json(result)
        }
        resp.json(data)
    }
)

export default router