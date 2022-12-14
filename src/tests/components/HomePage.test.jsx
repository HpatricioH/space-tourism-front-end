/* eslint-disable no-undef */
import * as React from 'react'
import { render } from '@testing-library/react'
import { HomePage } from '../../Components/HomePage/HomePage'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders correctly', () => {
  const { container } = render(
    <Router>
      <HomePage />
    </Router>
  )

  expect(container).toHaveTextContent('SPACE')
})
