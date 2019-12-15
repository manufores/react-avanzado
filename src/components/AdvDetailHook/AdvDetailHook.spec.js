import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AdvDetailHook from './AdvDetailHook';

/**No he conseguido que funcione */
/**No puede leer la propiedad params de undefined */
/**Me gustaría que me explicases cómo lo debería de implementar para que pasara el test */
/**Gracias */


configure({ adapter: new Adapter() });

describe('Probando componente <AdvDetailHook />', () => {

    test('Validar actualizaciones en props', () => {
        const params ='';
        const tags = [
            { name: 'lifestyle' },
            { name: 'mobile' },
            { name: 'motor' },
            { name: 'work' }
        ]

        const wrapper = shallow(<AdvDetailHook id=''/>)

        // Validar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(4)

        wrapper.setProps({
            tags: [
                { name: 'kiwi' }
            ]
        })

        test('Validar que coincida con Snapshot', () => {
            const tags = [
                { name: 'lifestyle' },
                { name: 'mobile' },
                { name: 'motor' },
                { name: 'work' }
            ]

            const wrapper = shallow(<AdvDetailHook />)
            expect(wrapper.html()).toMatchSnapshot()
        })
    })
})
