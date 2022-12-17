/* eslint-disable no-undef */
import { destinationsSlice } from '../../store/features/destinationsSlice'

describe('destinationsSlice', () => {
  it('should handle the GET_DESTINATIONS action', () => {
    const destinations = [
      { id: 1, name: 'Moon' },
      { id: 2, name: 'Mars' },
      { id: 3, name: 'Europa' },
      { id: 4, name: 'Titan' }
    ]

    const initialState = { data: [] }
    const action = {
      type: destinationsSlice.actions.getDestinations.type,
      payload: { id: 1, name: 'Moon' }
    }
    const expectedState = { data: [{ id: 1, name: 'Moon' }] }

    expect(destinationsSlice.reducer(initialState, action)).toEqual(expectedState)
  })
})
