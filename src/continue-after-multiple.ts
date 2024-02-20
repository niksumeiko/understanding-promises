// #2 Continue after multiple no matter what

type Contact = { id: string; name: string };
type Template = { id: string };

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

function createTemplate(): Promise<Template> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 'z' });
        }, 1000);
    });
}

// Write a function that calls multiple functions
// (createContact(), createTemplate()) and displays
// a snack bar (showSnackbar()) after execution.
// No matter whether callees succeeds or throws.
function onAfterPayment() {}
