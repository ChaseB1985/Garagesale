# Garage Sale - A React/Redux Email Survey App



**Description:**

The app flow is as follows:

1.  A user wants to send out a mass email for their local garage sale/product. They visit the app URL.
2.  The visitor authenticates via a Google Auth page, and is returned to the app as a new user.
3.  The user adds tokens/credits to their account by clicking the 'add credits' button. A stripe payment pop-up collects money from the user.
4.  Once the payment processes (in a few seconds), the user is immediately credited to their account.
5.  User clicks the '+' button to create a new survey.
6.  The survey details are confirmed, and then sent out via SendGrid's API. A credit is removed from the user's account.
7.  The creator of the survey can view response tallies for their survey(s) at any time via the app dashboard.

---

**Features:**

* Custom Node.js / Express.js API backend
* React / Redux frontend
* Google OAuth authentication
* Stripe API payments
* MongoDB data storage (with Mongoose)
* SendGrid API for mass emails and click tracking
* "Wizard" style form for creating surveys
* Basic stying via Material UI/core

---

**Notes:**

* Styling was kept SUPER minimal for this app. The focus was on functionality!

* SendGrid's free accounts are only good for 30 days, so this will app not have a preview/demo link available.

* To test out the demo, you wll need a Stripe (developer) account and a SendGrid account. You'll also need a Google+ OAuth API key.

* Working on adding other passport authentification eg. Github

* Working locally but having issues with Heroku limits
