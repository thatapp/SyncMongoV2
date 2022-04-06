# ![LOGO](logo.png) Accounting **flow**ground Connector

## Description

A generated **flow**ground connector for the Accounting API (version 2.0).

Generated from: https://api.apis.guru/v2/specs/xero.com/2.0/swagger.json<br/>
Generated at: 2019-05-07T17:45:03+03:00

## API Description

# Introduction
The Xero Accounting API is a RESTful web service and uses the OAuth (v1.0a) protocol to authenticate 3rd party applications. The Accounting API exposes accounting and related functions of the main Xero application and can be used for a variety of purposes such as creating transactions like invoices and credit notes, right through to extracting accounting data via our reports endpoint.


## Authorization

This API does not require authorization.

## Actions

### Retrieve the full chart of accounts

> Retrieve the chart of accounts

*Tags:* `Accounts`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create or update accounts

*Tags:* `Accounts`

### Create new accounts

*Tags:* `Accounts`

### x_related_model_Accounts

### Delete an account

*Tags:* `Accounts`

#### Input Parameters
* `AccountID` - _required_

### Retrieve a single account

*Tags:* `Accounts`

#### Input Parameters
* `AccountID` - _required_

### Update an account

*Tags:* `Accounts`

#### Input Parameters
* `AccountID` - _required_

### x_related_model_Accounts__AccountID_

### Retrieve Attachments

*Tags:* `Accounts`

#### Input Parameters
* `AccountID` - _required_ - The Xero generated unique identifier for an account
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `Accounts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `AccountID` - _required_ - The Xero generated unique identifier for an account
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `Accounts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `AccountID` - _required_ - The Xero generated unique identifier for an account

### Retrieve any spend or receive money transactions (inc. prepayments and overpayments)

*Tags:* `BankTransactions`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Create a new spend or receive money (inc. prepayments and overpayments)

*Tags:* `BankTransactions`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a new spend or receive money (inc. prepayments and overpayments)

*Tags:* `BankTransactions`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_BankTransactions

### Retrieve a spend or receive money (inc. prepayments and overpayments)

*Tags:* `BankTransactions`

#### Input Parameters
* `BankTransactionID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Update a spend or receive money

*Tags:* `BankTransactions`

#### Input Parameters
* `BankTransactionID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_BankTransactions__BankTransactionID_

### Retrieve Attachments

*Tags:* `BankTransactions`

#### Input Parameters
* `BankTransactionID` - _required_ - The Xero generated unique identifier for an bank transaction
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `BankTransactions`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `BankTransactionID` - _required_ - The Xero generated unique identifier for an bank transaction
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `BankTransactions`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `BankTransactionID` - _required_ - The Xero generated unique identifier for an bank transaction

### Retrieve a colection of bank transfers

*Tags:* `BankTransfers`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create a bank transfer

*Tags:* `BankTransfers`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_BankTransfers

### Retrieve an individual bank transfer

*Tags:* `BankTransfers`

#### Input Parameters
* `BankTransferID` - _required_

### x_related_model_BankTransfers__BankTransferID_

### Download an Attachment

*Tags:* `BankTransfers`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `BankTransferID` - _required_ - The Xero generated unique identifier for an BankTransfer
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `BankTransfers`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `BankTransferID` - _required_ - The Xero generated unique identifier for a BankTransfer

### Retrieve a collection of BrandingThemes

*Tags:* `BrandingThemes`

### x_related_model_BrandingThemes

### Retrieve an individual BrandingTheme

*Tags:* `BrandingThemes`

#### Input Parameters
* `BrandingThemeID` - _required_

### x_related_model_BrandingThemes__BrandingThemeID_

### Retrieve a collection of contact groups

*Tags:* `ContactGroups`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create or update a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a new contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_ContactGroups

### Delete a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_

### Retrieve the ContactID and Name of all the contacts in a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_

### Update a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_

### x_related_model_ContactGroups__ContactGroupID_

### Remove all contacts from a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_

### Add contacts to a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_

### x_related_model_ContactGroups__ContactGroupID__Contacts

### Remove a contact from a contact group

*Tags:* `ContactGroups`

#### Input Parameters
* `ContactGroupID` - _required_
* `ContactID` - _required_

### x_related_model_ContactGroups__ContactGroupID__Contacts__ContactID_

### Retrieve a collection of contacts

*Tags:* `Contacts`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `includeArchived` - _optional_ - Include archived records in the response 
* `IDs` - _optional_ - Filter by a comma-separated list of ContactIDs

### Create or update a contact

*Tags:* `Contacts`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a contact

*Tags:* `Contacts`

### x_related_model_Contacts

### Retrieve an individual contact

*Tags:* `Contacts`

#### Input Parameters
* `ContactID` - _required_

### Update a contact

*Tags:* `Contacts`

#### Input Parameters
* `ContactID` - _required_

### x_related_model_Contacts__ContactID_

### Retrieve Attachments

*Tags:* `Contacts`

#### Input Parameters
* `ContactID` - _required_ - The Xero generated unique identifier for a Contact
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `Contacts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `ContactID` - _required_ - The Xero generated unique identifier for a Contact
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `Contacts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `ContactID` - _required_ - The Xero generated unique identifier for a Contact

### Retrieve a collection of credit notes

*Tags:* `CreditNotes`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).

### Create or update a credit note

*Tags:* `CreditNotes`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a credit note

*Tags:* `CreditNotes`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_CreditNotes

### Retrieve an individual credit note

*Tags:* `CreditNotes`

#### Input Parameters
* `CreditNoteID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Update a credit note

*Tags:* `CreditNotes`

#### Input Parameters
* `CreditNoteID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_CreditNotes__CreditNoteID_

### Allocate a credit note

*Tags:* `CreditNotes`

#### Input Parameters
* `CreditNoteID` - _required_

### x_related_model_CreditNotes__CreditNoteID__Allocations

### Retrieve Attachments

*Tags:* `CreditNotes`

#### Input Parameters
* `CreditNoteID` - _required_ - The Xero generated unique identifier for a CreditNote
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `CreditNotes`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `CreditNoteID` - _required_ - The Xero generated unique identifier for a CreditNote
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `CreditNotes`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `CreditNoteID` - _required_ - The Xero generated unique identifier for a CreditNote

### Retrieve the currencies the organisation is subscribed to

*Tags:* `Currencies`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Add currencies to the organisation

*Tags:* `Currencies`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Currencies

### Retrieve a collection of employees

*Tags:* `Employees`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create or update employees

*Tags:* `Employees`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create employees

*Tags:* `Employees`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Employees

### Retrieve an individual employee

*Tags:* `Employees`

#### Input Parameters
* `EmployeeID` - _required_

### Update an employee

*Tags:* `Employees`

#### Input Parameters
* `EmployeeID` - _required_

### x_related_model_Employees__EmployeeID_

### Retrieve a collection of expense claims

*Tags:* `ExpenseClaims`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create or update an expense claim

*Tags:* `ExpenseClaims`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create an expense claim

*Tags:* `ExpenseClaims`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_ExpenseClaims

### Retrieve an individual expense claim

*Tags:* `ExpenseClaims`

#### Input Parameters
* `ExpenseClaimID` - _required_

### Update an expense claim

*Tags:* `ExpenseClaims`

#### Input Parameters
* `ExpenseClaimID` - _required_

### x_related_model_ExpenseClaims__ExpenseClaimID_

### Retrieve a collection of invoices (sales invoices and bills)

*Tags:* `Invoices`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `IDs` - _optional_ - Filter by a comma-separated list of InvoiceIDs
* `ContactIDs` - _optional_ - Filter by a comma-separated list of ContactIDs
* `Statuses` - _optional_ - Filter by a comma-separated list of Statuses
* `InvoiceNumbers` - _optional_ - Filter by a comma-separated list of InvoiceNumbers

### Create or update an Invoice (sales invoices or bills)

*Tags:* `Invoices`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create an Invoice (sales invoices or bills)

*Tags:* `Invoices`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Invoices

### Retrieve an Invoice (sales invoice or bill)

*Tags:* `Invoices`

#### Input Parameters
* `InvoiceID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Update an Invoice (sales invoice or bill)

*Tags:* `Invoices`

#### Input Parameters
* `InvoiceID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Invoices__InvoiceID_

### Retrieve Attachments

*Tags:* `Invoices`

#### Input Parameters
* `InvoiceID` - _required_ - The Xero generated unique identifier for an Invoice
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `Invoices`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `InvoiceID` - _required_ - The Xero generated unique identifier for an Invoice
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `Invoices`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `InvoiceID` - _required_ - The Xero generated unique identifier for an Invoice

### Retrieve the URL to view the online invoice

*Tags:* `Invoices`

#### Input Parameters
* `InvoiceID` - _required_

### x_related_model_Invoices__InvoiceID__OnlineInvoice

### Retrieve a collection of items

*Tags:* `Items`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Create or update an item

*Tags:* `Items`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create an item

*Tags:* `Items`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Items

### Delete an item

*Tags:* `Items`

#### Input Parameters
* `ItemID` - _required_

### Retrieve an item

*Tags:* `Items`

#### Input Parameters
* `ItemID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Update an item

*Tags:* `Items`

#### Input Parameters
* `ItemID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Items__ItemID_

### Retrieve a collection of journals.

*Tags:* `Journals`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `paymentsOnly` - _optional_ - Return results on a the cash basis
* `offset` - _optional_ - Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned.

### x_related_model_Journals

### Retrieve an individual journal.

*Tags:* `Journals`

#### Input Parameters
* `JournalID` - _required_

### x_related_model_Journals__JournalID_

### Retrieve a collection of linked transactions (billable expenses)

*Tags:* `LinkedTransactions`

#### Input Parameters
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
* `SourceTransactionID` - _optional_ - Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
* `ContactID` - _optional_ - Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
* `Status` - _optional_ - Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
* `TargetTransactionID` - _optional_ - Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice.

### Create or update a linked transaction (billable expense)

*Tags:* `LinkedTransactions`

### Create a linked transaction (billable expense)

*Tags:* `LinkedTransactions`

### x_related_model_LinkedTransactions

### Delete a linked transaction (billable expense)

*Tags:* `LinkedTransactions`

#### Input Parameters
* `LinkedTransactionID` - _required_

### Retrieve a linked transaction (billable expense)

*Tags:* `LinkedTransactions`

#### Input Parameters
* `LinkedTransactionID` - _required_

### Update a linked transaction (billable expense)

*Tags:* `LinkedTransactions`

#### Input Parameters
* `LinkedTransactionID` - _required_

### x_related_model_LinkedTransactions__LinkedTransactionID_

### Retrieve a collection of manual journals

*Tags:* `ManualJournals`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).

### Create or update a manual journal

*Tags:* `ManualJournals`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a manual journal

*Tags:* `ManualJournals`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_ManualJournals

### Retrieve an individual manual journal

*Tags:* `ManualJournals`

#### Input Parameters
* `ManualJournalID` - _required_

### Update a manual journal

*Tags:* `ManualJournals`

#### Input Parameters
* `ManualJournalID` - _required_

### x_related_model_ManualJournals__ManualJournalID_

### Retrieve Attachments

*Tags:* `ManualJournals`

#### Input Parameters
* `ManualJournalID` - _required_ - The Xero generated unique identifier for a Manual Journal
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `ManualJournals`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `ManualJournalID` - _required_ - The Xero generated unique identifier for a Manual Journal
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `ManualJournals`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `ManualJournalID` - _required_ - The Xero generated unique identifier for a Manual Journal

### Retrieve Organisation details

*Tags:* `Organisations`

### x_related_model_Organisation

### Retrieve Organisation details

*Tags:* `Organisations`

#### Input Parameters
* `ShortCode` - _required_

### x_related_model_Organisation__ShortCode_

### Retrieve a collection of overpayments

*Tags:* `Overpayments`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Overpayments

### Retrieve an overpayment

*Tags:* `Overpayments`

#### Input Parameters
* `OverpaymentID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Overpayments__OverpaymentID_

### Allocate an overpayment

*Tags:* `Overpayments`

#### Input Parameters
* `OverpaymentID` - _required_

### x_related_model_Overpayments__OverpaymentID__Allocations

### Retrieve a collection of payments for invoices, credit notes, prepayments and overpayments

*Tags:* `Payments`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned

### Create a payment

*Tags:* `Payments`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a payment

*Tags:* `Payments`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Payments

### Retrieve a payment

*Tags:* `Payments`

#### Input Parameters
* `PaymentID` - _required_

### Update a payment's status to deleted

*Tags:* `Payments`

#### Input Parameters
* `PaymentID` - _required_

### x_related_model_Payments__PaymentID_

### Retrieve a collection of prepayments

*Tags:* `Prepayments`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `where` - _optional_ - Filter by an any element
* `order` - _optional_ - Order by any element returned
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Prepayments

### Retrieve an individual prepayment

*Tags:* `Prepayments`

#### Input Parameters
* `PrepaymentID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Prepayments__PrepaymentID_

### Allocate a prepayment

*Tags:* `Prepayments`

#### Input Parameters
* `PrepaymentID` - _required_

### x_related_model_Prepayments__PrepaymentID__Allocations

### Retrieve a collection of purchase orders

*Tags:* `PurchaseOrders`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `page` - _optional_ - Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
* `DateFrom` - _optional_
* `DateTo` - _optional_
* `Status` - _optional_

### Create and update purchase orders

*Tags:* `PurchaseOrders`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create purchase orders

*Tags:* `PurchaseOrders`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_PurchaseOrders

### Retrieve a single purchase order

*Tags:* `PurchaseOrders`

#### Input Parameters
* `PurchaseOrderID` - _required_

### Update a purchase order

*Tags:* `PurchaseOrders`

#### Input Parameters
* `PurchaseOrderID` - _required_

### x_related_model_PurchaseOrders__PurchaseOrderID_

### Retrieve Attachments

*Tags:* `PurchaseOrders`

#### Input Parameters
* `PurchaseOrderID` - _required_ - The Xero generated unique identifier for a purchase order
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `PurchaseOrders`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `PurchaseOrderID` - _required_ - The Xero generated unique identifier for a purchase order
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `PurchaseOrders`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `PurchaseOrderID` - _required_ - The Xero generated unique identifier for a purchase order

### Retrieve a collection of draft receipts

*Tags:* `Receipts`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `where` - _optional_ - Filter by an any element
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Create or update a receipt

*Tags:* `Receipts`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a receipt

*Tags:* `Receipts`

#### Input Parameters
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_Receipts

### Retrieve an individual receipt

*Tags:* `Receipts`

#### Input Parameters
* `ReceiptID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### Update a receipt

*Tags:* `Receipts`

#### Input Parameters
* `ReceiptID` - _required_
* `unitdp` - _optional_ - Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

### x_related_model_Receipts__ReceiptID_

### Retrieve Attachments

*Tags:* `Receipts`

#### Input Parameters
* `ReceiptID` - _required_ - The Xero generated unique identifier for a Receipt
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `Receipts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `ReceiptID` - _required_ - The Xero generated unique identifier for a Receipt
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Upload an Attachment

*Tags:* `Receipts`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment being uploaded
* `ReceiptID` - _required_ - The Xero generated unique identifier for a Receipt

### Retrieve a collection of repeating invoice templates

*Tags:* `RepeatingInvoices`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `where` - _optional_ - Filter by an any element

### x_related_model_RepeatingInvoices

### Retrieve an individual repeating invoice template

*Tags:* `RepeatingInvoices`

#### Input Parameters
* `RepeatingInvoiceID` - _required_

### x_related_model_RepeatingInvoices__RepeatingInvoiceID_

### Retrieve Attachments

*Tags:* `RepeatingInvoices`

#### Input Parameters
* `RepeatingInvoiceID` - _required_ - The Xero generated unique identifier for a RepeatingInvoice
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Download an Attachment

*Tags:* `RepeatingInvoices`

#### Input Parameters
* `FileName` - _required_ - The filename of the attachment to be downloaded
* `RepeatingInvoiceID` - _required_ - The Xero generated unique identifier for a RepeatingInvoice
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

### Retrieve a list of published GST reports (NZ) or BAS reports (AU)

*Tags:* `Reports`

### x_related_model_Reports

### Retrieve an Aged Payables report for a contact

*Tags:* `Reports`

#### Input Parameters
* `contactID` - _required_ - ContactID for the contact you're running the report for
* `date` - _optional_ - Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
* `fromDate` - _optional_ - Show all payable invoices from this date for contact
* `toDate` - _optional_ - Show all payable invoices to this date for the contact

### x_related_model_Reports_AgedPayablesByContact

### Retrieve an Aged Receivables report for a contact

*Tags:* `Reports`

#### Input Parameters
* `contactID` - _required_ - ContactID for the contact you're running the report for
* `date` - _optional_ - Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
* `fromDate` - _optional_ - Show all receivable invoices from this date for contact
* `toDate` - _optional_ - Show all receivable invoices to this date for the contact

### x_related_model_Reports_AgedReceivablesByContact

### Retrieve a Balance Sheet Report

*Tags:* `Reports`

#### Input Parameters
* `date` - _optional_ - YYYY-MM-DD
* `trackingOptionID1` - _optional_ - Run the balance sheet for a specific tracking option
* `trackingOptionID2` - _optional_ - Run the balance sheet for a combination of two tracking options
* `standardLayout` - _optional_ - If set to true no custom report layouts will be applied to response
* `paymentsOnly` - _optional_ - Set this to true to get cash transactions only

### x_related_model_Reports_BalanceSheet

### Retrieve a bank statement report

*Tags:* `Reports`

#### Input Parameters
* `bankAccountID` - _required_ - bankAccountID e.g. 5040915e-8ce7-4177-8d08-fde416232f18
* `fromDate` - _optional_ - YYYY-MM-DD
* `toDate` - _optional_ - YYYY-MM-DD

### x_related_model_Reports_BankStatement

### Retrieve a bank summary report

*Tags:* `Reports`

#### Input Parameters
* `fromDate` - _optional_ - YYYY-MM-DD
* `toDate` - _optional_ - YYYY-MM-DD

### x_related_model_Reports_BankSummary

### Retrieve a budget summary report

*Tags:* `Reports`

#### Input Parameters
* `date` - _optional_ - YYYY-MM-DD
* `periods` - _optional_ - The number of periods to compare (integer between 1 and 12)
* `timeframe` - _optional_ - The period size to compare to (1=month, 3=quarter, 12=year)

### x_related_model_Reports_BudgetSummary

### Retrieve an executive summary report

*Tags:* `Reports`

#### Input Parameters
* `date` - _optional_ - YYYY-MM-DD

### x_related_model_Reports_ExecutiveSummary

### Retrieve a profit and loss report

*Tags:* `Reports`

#### Input Parameters
* `fromDate` - _optional_ - YYYY-MM-DD
* `toDate` - _optional_ - YYYY-MM-DD
* `trackingCategoryID` - _optional_ - If you specify the trackingCategoryID parameter then the Profit and Loss Report will show figures for each of the options in the category as separate columns. See the Profit and Loss Report in Xero to learn more about this behavior when filtering by a tracking category.
* `trackingOptionID` - _optional_ - If you specify this parameter in addition to the trackingCategoryID then just one option will be returned (i.e. 1 column only)
* `trackingCategoryID2` - _optional_ - If you specify a second trackingCategoryID parameter then the Profit and Loss Report will show figures for each combination of options from the two categories as separate columns. See the Profit and Loss Report in Xero to learn more about this behaviour when filtering by two tracking categories.
* `trackingOptionID2` - _optional_ - If you specify this parameter in addition to a second trackingCategoryID then just one option will be returned combined with the option/s from the first tracking category
* `standardLayout` - _optional_ - If you set this parameter to "true" then no custom report layouts will be applied to response
* `paymentsOnly` - _optional_ - Set this to true to get cash transactions only

### x_related_model_Reports_ProfitAndLoss

### Retrieve a 1099 Report (US only)

*Tags:* `Reports`

#### Input Parameters
* `reportYear` - _optional_ - Year of the report e.g. 2013

### x_related_model_Reports_TenNinetyNine

### Retrieve a Trial Balance Report

*Tags:* `Reports`

#### Input Parameters
* `Date` - _optional_ - YYYY-MM-DD
* `paymentsOnly` - _optional_ - Set this to true to get cash transactions only

### x_related_model_Reports_TrialBalance

### Retrieve an individual BAS Report (AU) or GST Report (NZ)

*Tags:* `Reports`

#### Input Parameters
* `ReportID` - _required_

### x_related_model_Reports__ReportID_

### Retrieve a collection of tax rates

*Tags:* `TaxRates`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `where` - _optional_ - Filter by an any element

### Create or update tax rates

*Tags:* `TaxRates`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create tax rates

*Tags:* `TaxRates`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_TaxRates

### Retrieve a collection of tracking categories and options

*Tags:* `TrackingCategories`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `where` - _optional_ - Filter by an any element
* `includeArchived` - _optional_ - Include archived records in the response 

### Create a tracking category

*Tags:* `TrackingCategories`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### Create a tracking category

*Tags:* `TrackingCategories`

#### Input Parameters
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_TrackingCategories

### Delete a Tracking Category

*Tags:* `TrackingCategories`

#### Input Parameters
* `TrackingCategoryID` - _required_

### Retrieve a tracking category and it's options

*Tags:* `TrackingCategories`

#### Input Parameters
* `TrackingCategoryID` - _required_

### Create or update a tracking category

*Tags:* `TrackingCategories`

#### Input Parameters
* `TrackingCategoryID` - _required_

### x_related_model_TrackingCategories__TrackingCategoryID_

### Add options to a tracking category

*Tags:* `TrackingCategories`

#### Input Parameters
* `TrackingCategoryID` - _required_
* `summarizeErrors` - _optional_ - If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

### x_related_model_TrackingCategories__TrackingCategoryID__Options

### Delete an option from a tracking category

*Tags:* `TrackingCategories`

#### Input Parameters
* `TrackingCategoryID` - _required_
* `TrackingOptionID` - _required_

### x_related_model_TrackingCategories__TrackingCategoryID__Options__TrackingOptionID_

### Retrieve a collection of Users

*Tags:* `Users`

#### Input Parameters
* `If-Modified-Since` - _optional_ - A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
* `order` - _optional_ - Order by any element returned
* `where` - _optional_ - Filter by an any element

### x_related_model_Users

### Retrieve an individual User

*Tags:* `Users`

#### Input Parameters
* `UserID` - _required_

### x_related_model_Users__UserID_

## License

**flow**ground :- Telekom iPaaS / xero-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
