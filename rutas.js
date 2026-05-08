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
        const id = Number(req.query.id);
        const data = getData();
        if (id) {
            const index = data.findIndex(
                (objet) => {
                    return objet.id === id
                }
            )
            if (index == -1) {
                return resp.status(404).send("Not found")
            }
            return resp.json(data[index])
        }

        resp.json(data)
    }
)

export default router

