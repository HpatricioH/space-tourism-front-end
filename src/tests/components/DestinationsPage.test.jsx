/* eslint-disable no-undef */
import { render, fireEvent, screen, waitFor, getByTestId } from '@testing-library/react'
import { DestinationsPage } from '../../Components/DestinationsPage/DestinationsPage'
import { Provider } from 'react-redux'
import store from '../../store/store'

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <DestinationsPage />
      </Provider>
    )

    expect(container).toHaveTextContent('PICK YOUR DESTINATION')
  })

  it('render destinations from destinations navbar', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DestinationsPage />
      </Provider>
    )

    await waitFor(() => getByTestId('destination-name'))
    expect(getByTestId('destination-name')).toHaveTextContent('Moon')
  })
})
