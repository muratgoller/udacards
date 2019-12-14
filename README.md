## Udacards Project For My Udacity React Native Trainig

Udacards allows user to create Decks that include questions. 

User can have quiz with trying to guess if the statement of the question is correct or incorrect. 

## Quick Start

Clone udacards project from the url:

### `https://github.com/muratgoller/udacards`

Install project dependencies and referred packages via 

### `npm install`

Start the application with the command

### `expo start`

Expo developer tool of Udacards app is going to be hosted automatically on http://localhost:19002/ 
To run the application read QR code on the tool with mobile phone which has one of Android or IOS platform
Expo must be installed to the phones to run scripts properly

## Pages
### Deck List
At the beginning the decks that created before is appeared. 
When user presses on one of them, screen is going to be navigated to "deck edit" page.

### New Deck
Second tab of the beginning screen is used for add new deck. 
User declares a new deck. After that screen navigates to "deck edit" page. 

### Deck Edit
After pressing on the deck's name on first page or creating a new deck, screen is navigated to this page. 
User can add new cards or start quiz for the cards added previously.

### Quiz
User starts answering the questions as correct or incorrect with having the opportunity to see the answer. 
At least score page appears

### Score
Shows statistics of the current deck. This page offers the opportunity to the user to have the quiz again or return back to deck edit page.

### Notifications
Notification set function firstly cancels all notifications and sets a new notification for the day after current date at 20:00 o'clock. 

Notification set function is called at;
-- When user adds a new card to an existing deck
-- When user completes any deck
** Notification setting function postpones the notification to tomorrow 20:00
** If there was no postpone function triggered notification system sets itself tomorrow.
