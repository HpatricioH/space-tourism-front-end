/* eslint-disable no-undef */
import { Provider } from 'react-redux'
import { destinationsSlice } from '../../store/features/destinationsSlice'
import store from '../../store/store'
import { DestinationsPage } from '../../Components/DestinationsPage/DestinationsPage'
import { render } from '@testing-library/react'

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
      payload: destinations.map((el) => el)
    }
    const expectedState = { data: [destinations.map((el) => el)] }
    expect(destinationsSlice.reducer(initialState, action)).toEqual(expectedState)
  })

  it('renders content', async () => {
    const component = render(
      <Provider store={store}>
        <DestinationsPage />
      </Provider>
    )

    component.debug()
  })
})
