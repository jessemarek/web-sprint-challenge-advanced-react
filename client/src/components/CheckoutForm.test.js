import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test('checkout form renders without errors', () => {
    render(<CheckoutForm />)
})

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    expect(getByText(/checkout form/i)).toBeInTheDocument
})

test("form shows success message on submit with form details", () => {
    const { getByRole, getByLabelText, getByTestId } = render(<CheckoutForm />)

    //Fill in the form
    fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Marge' } })
    fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Simpson' } })
    fireEvent.change(getByLabelText(/address/i), { target: { value: '123 Fake St' } })
    fireEvent.change(getByLabelText(/city/i), { target: { value: 'Springfield' } })
    fireEvent.change(getByLabelText(/state/i), { target: { value: 'OR' } })
    fireEvent.change(getByLabelText(/zip/i), { target: { value: '12345' } })

    //Submit the form
    fireEvent.click(getByRole('button', /checkout/i))

    //See if the success message is displayed
    expect(getByTestId(/successMessage/i)).toBeInTheDocument

})
