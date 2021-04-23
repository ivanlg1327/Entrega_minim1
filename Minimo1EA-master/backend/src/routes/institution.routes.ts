import {Router} from "express"; 
import institutionController from '../controllers/institution.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

router.get('/all', institutionController.getInstitutions);
router.get('/:name', institutionController.getInstitution);
router.post('/update/:name',institutionController.updateInstitution);

//Exportamos router para usar rutas en app.ts
export default router;