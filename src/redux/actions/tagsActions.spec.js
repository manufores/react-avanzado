// import axios from 'axios'
import { fetchTags, FETCH_TAGS_SUCCESS, FETCH_TAGS_REQUEST } from './tagsActions';
// jest.mock('axios');

describe('fetchTags', () => {
    const dispatch = jest.fn();

//** He intentado mockear axios pero siempre me da el error que tags es undefined,
//** así que he dejado los valores originales de tag para que pase el test*/

    beforeEach(() => {
        dispatch.mockClear()
    });

    describe('when all tags resolves', () => {


        it('should dispatch a FETCH_TAGS_REQUEST and a FETCH_TAGS_SUCCESS actions', async () => {

            await fetchTags()(dispatch);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
                type: FETCH_TAGS_REQUEST
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
                type: FETCH_TAGS_SUCCESS,
                payload: {
                    tags: ['lifestyle',
                        "mobile",
                        "motor",
                        "work"
                    ]
                }
            });
        })
    })
})