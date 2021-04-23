import {Router} from "express"; 
import groupController from '../controllers/invesgroup.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

router.get('/all', groupController.getGroups);
router.get('/:name', groupController.getGroup);
router.post('/update/:name',groupController.updateGroup);

//Exportamos router para usar rutas en app.ts
export default router;