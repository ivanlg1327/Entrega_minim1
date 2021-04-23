/* nombre, descripcion, url, responsable */
import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const groupSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    responsable: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface invesGroup extends Document {
    name: string;
    description: string;
    url: string;
    responsable: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<invesGroup>('Group', groupSchema);