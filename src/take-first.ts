// #5 Take first

type Account = { id: string; type: 'MAIN' | 'SAVINGS' | 'INVESTMENTS' };

function fetchMany(): Promise<Account[]> {
    return Promise.resolve([
        { id: '1', type: 'MAIN' },
        { id: '2', type: 'SAVINGS' },
        { id: '3', type: 'INVESTMENTS' },
    ]);
}

function fetchOne(id: string): Promise<Account> {
    return Promise.resolve({ id: '2', type: 'SAVINGS' });
}

// Write a function that logs the account by id from the API
// request that resolves first. Don't wait for the other resolution.
//
// Design:
// https://bank.com/account/123
// |-------------------------|-----------------------------------------|
// | My accounts             |  # Savings account             [Rename] |
// | - [Main account]        |                                         |
// | - [Savings account]     |  Balance: €1'200'300                    |
// | - [Investments account] |  Interest: %8                           |
// | - [Morgage account]     |                                         |
// |                         |  Top up: automatic, 1st day of month    |
// | ------------------------------------------------------------------|
function getAcountById(id: string) {}
