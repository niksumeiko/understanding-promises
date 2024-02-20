// #4 Fallback to fabricate

type Contact = { id: string; name: string };
type OnAfterPaymentOptions = { shouldCreateContact: boolean };

const fabricate = { source: 'FABRICATE', name: 'z' };

function createContact(): Promise<Contact> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 'x', name: 'y' });
        }, 1000);
    });
}

// Write a function that returns a fabricated result under condition (A)
// or calls the createContact() function and returns it's result or
// returns the fabricate when it fails.
//
// Conditions:
// (A) Return a fabricate when the input has `shouldCreateContact: false` property
function onAfterPayment(options: OnAfterPaymentOptions) {}
