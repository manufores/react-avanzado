import user from './userReducer';
import { addUser, ADD_USER } from '../actions/userActions';

/**Funciona */

describe('Actions creators', () => {
    it('addUser', () => {
        const resultado = addUser(1);
        expect(resultado).toEqual({
            type: 'ADD_USER',
            payload: 1
        });
    });
})

describe('userReducer', () => {
    it('ADD_USER', () => {
        const resultado = user(1, {
            type: 'ADD_USER',
            payload: 1
        });
        expect(resultado).toEqual({users:[1]});
    })
})
