import React from "react";
import { mount, configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import Users from "./Users";

/**No funciona, ya que me lanza un error de que al mapear las tags no recibe nada y, no sé como implementarlo */
/**Si comento la parte del select del UserForm.js entonces me lanza el error de la session, dice que es undefined */
/**Me gustaría que me lo explicaras */
/**Gracias */

configure({ adapter: new Adapter() });

describe("Users", () => {
    it("interactua con nuestro store", () => {
        const prevent = jest.fn();
        const reducer = jest.fn().mockReturnValue({
            users: [{ name: "pepe", surname: 'lala' }]
        });
        const store = createStore(reducer);
        const wrapper = mount(
            <Provider store={store}>
                <Users />
            </Provider>
        );
        wrapper
            .find("input")
            .at(0)
            .simulate("change", { target: { name: "Jose" } });
        wrapper
            .find("input")
            .at(1)
            .simulate("change", { target: { name: "lele" } });
        wrapper.find("form").simulate("submit", { preventDefault: prevent });
        wrapper
            .find("select")
            .at(0)
            .simulate("click");

        const [a, ...rest] = reducer.mock.calls;
        expect(rest).toEqual([
            [
                { users: [{ name: "pepe", surname: "lala" }] },
                { type: "ADD_USER", payload: { name: "Jose", surname: "lele" } }
            ]
        ]);
        expect(wrapper.text().includes("lala")).toEqual(true);
    });
});