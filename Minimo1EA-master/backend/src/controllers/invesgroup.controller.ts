import { Request, Response} from "express";
import Group from '../models/invesgroup';

//Return all the institutions
const getGroups = async (req: Request, res: Response) => {
    try{
        const results = await Group.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

//Return one institution
const getGroup = async (req: Request, res: Response) => {
    try{
        const results = await Group.find({"name": req.params.name});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}


const updateGroup = async (req: Request, res: Response) => {
    const name = req.params.name;
    Group.update({"name": name}, {$set: {"name": req.body.name, "description": req.body.description, "url":req.body.url, "responsable": req.body.responsable}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
const newGroup = async (req: Request, res: Response) => {
    try{
    let 
    group = new Group({
        "name" : req.body.name,
        "description" : req.body.description,
        "url" : req.body.url,
        "responsable" : req.body.responsable
    });
    group.save().then((data) => {
        return res.status(201).json(data);
    });
    } catch(err) {
        return res.status(500).json(err);
    }
}

export default { getGroups, getGroup, updateGroup, newGroup }; 
