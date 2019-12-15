import { addUser, ADD_USER } from './userActions';

//**Funciona */

describe('actions', () => {
    describe('addUser', ()=>{
        it(' sholud create a addUser action', ()=>{
            const user = 'user';
            const expectedAction = {
                type: ADD_USER,
                payload: user,
            };
            expect(addUser(user)).toEqual(expectedAction)
        });
    });
});