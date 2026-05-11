import { Router } from "express";
import { getData, setData } from "./utlis.js";
const router = Router();

router.post("/coder", (req, res) => {
  const data = getData();
  data.push({
    id: data.length + 1,
    ...req.body,
  });
  setData(data);
  res.status(200).json({
    menssage: "TODO OK",
  });
});

router.put("/coders", (req, res) => {
  const { id } = req.query;
  const data = getData();
  const findIndex = data.findIndex((usuario) => usuario.id == id);

  if (id) {
    data[findIndex] = {
      ...data[findIndex],
      ...req.body,
    };
    setData(data);
    res.status(200).json({
      menssage: "TODO OK",
    });
  } else {
    res.status(404).json({
      menssage: "NOT FOUND",
    });
  }
});

router.delete("/coders", (req, res) => {
  const { id } = req.query;
  const data = getData();
  const findIndex = data.findIndex((usuario) => usuario.id == id);
  if (id) {
    data.splice(findIndex,1);
    setData(data);
    res.status(200).json({
      menssage: "TODO OK",
    });
  }else {
    res.status(404).json({
      menssage: "NOT FOUND",
    });
  }
});

router.get("/coders", (req, res) => {
  const { id, name, age, status, isActive } = req.query;
  const data = getData();
  if (id) {
    const index = data.findIndex((objet) => {
      return objet.id == id;
    });
    if (index == -1) {
      return res.status(404).send("Not found");
    }
    return res.json(data[index]);
  } else if (name) {
    const result = data.filter((objet) => name === objet.name);
    if (result.length == 0) {
      return res.status(404).send("Not found");
    }
    return res.json(result);
  } else if (age) {
    const result = data.filter((objet) => age == objet.age);
    if (result.length == 0) {
      return res.status(404).send("Not found");
    }
    return res.json(result);
  } else if (status) {
    const result = data.filter((objet) => status === objet.status);
    if (result.length == 0) {
      return res.status(404).send("Not found");
    }
    return res.json(result);
  } else if (isActive) {
    const result = data.filter((objet) => {
      return isActive == String(objet.isActive);
    });

    if (result.length == 0) {
      return res.status(404).send("Not found");
    }
    return res.json(result);
  }
  res.json(data);
});

export default router;
