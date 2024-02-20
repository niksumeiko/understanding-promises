// #6 Fail silently

// Write a generic abstraction that can execute the async function
// without interrupting the control flow. The new abstraction
// shouldn't be coupled to Domain Objects.
//
// Domain objects:
type Receiver = { iban: string };
type Payment = { id: string; receiver: Receiver; amount: number };
type Contact = { id: string; displayName: string };

async function submitPayment(values: Omit<Payment, 'id'>) {
    try {
        const payment = await makePayment(values);
        // When contact creation fails, we show an error.
        // But it's wrong. We still want to show the success — no matter
        // whether contact creation fails or succeeds.
        const contact = await createContact(payment.receiver);

        // Make sure success is displayed no matter whether
        // the contact was created or thrown an error
        displaySuccess(payment, contact);
    } catch (e) {
        displayError();
    }
}

async function makePayment(values: Omit<Payment, 'id'>): Promise<Payment> {
    return Promise.resolve({
        id: 'y',
        amount: 100,
        receiver: { iban: 'x' },
    });
}

async function createContact(receiver: Receiver): Promise<Contact> {
    // Some async operations that might throw
    // (e.g., when the receiver is unauthorized)
    throw new Error('Oups');
}

function displaySuccess(payment: Payment, contact: Pick<Contact, 'displayName'>) {
    console.info(`Money transferred to ${contact.displayName}`, payment);
}

function displayError() {
    console.error('Transfer failed');
}

// Creates fallback/fabricate contact when the receiver is unauthorized
function createUnauthorizedContact(): Pick<Contact, 'displayName'> {
    return { displayName: 'unauthorized receiver' };
}
