import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact} from "../controllers/crmController";
import { login, register, loginRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        },loginRequired, getContacts)
        
        // POST endpoint        
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactID')
        .get(loginRequired, getContactWithID)

        .put(loginRequired, updateContact)

        .delete(loginRequired, deleteContact)       
    app.route('/auth/register')
        .post(register);
        
    app.route('/login')
        .post(login);
}

export default routes;