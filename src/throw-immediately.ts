// #3 Throw immediately

type Contact = { id: string; name: string };
type OnAfterPaymentOptions = { shouldCreateContact?: boolean };

function createContact(): Promise<Contact> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 'x', name: 'y' });
        }, 1000);
    });
}

// Write a function that throws an error under condition (A) or calls
// the createContact() function and returns its resolution extended with
// another property — `source: 'MANUAL'`.
//
// Conditions:
// (A) Throw when the input lacks `shouldCreateContact` property
function onAfterPayment(options: OnAfterPaymentOptions) {}
