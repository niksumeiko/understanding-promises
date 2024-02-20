// #1 Continue no matter what

type Contact = { id: string; name: string };

function showSnackbar() {
    console.info("It's done");
}

function createContact(): Promise<Contact> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 'x', name: 'y' });
        }, 1000);
    });
}

// Write a function that calls the createContact() and displays
// a snack bar (showSnackbar()) after the callee is execution.
// No matter whether the callee succeeds or throws.
function onAfterPayment() {}
