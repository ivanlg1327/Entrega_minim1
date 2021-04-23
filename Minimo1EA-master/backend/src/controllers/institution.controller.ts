import { Request, Response} from "express";
import Institution from '../models/institution';

//Return all the institutions
const getInstitutions = async (req: Request, res: Response) => {
    try{
        const results = await Institution.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

//Return one institution
const getInstitution = async (req: Request, res: Response) => {
    try{
        const results = await Institution.find({"name": req.params.name});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const updateInstitution = async (req: Request, res: Response) => {
    const name = req.params.name;
    Institution.update({"name": name}, {$set: {"name": req.body.name, "description": req.body.description, "url":req.body.url, "responsable": req.body.responsable}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

export default { getInstitutions, getInstitution, updateInstitution }; 
