# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Put your HubSpot developer test account custom objects URL link here:** https://app.hubspot.com/contacts/244932010/objects/0-2/views/all/list

**NOTE:** I was not able to create a custom object as my free plan did not support it. I used the companies model instead.

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY. 

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.

___
## Developer Notes
### TODO

- [X] **Step 1** — Review all the requirements on the practicum instructions page
- [X] **Step 2** — Create a new HubSpot developer test account and:
  - [X] Create a private app titled "Jay's Practicum Private App" with permissions:
    - [X] `crm.schemas.custom` (read & write)
    - [X] `crm.objects.custom` (read & write)
    - [X] `crm.objects.contacts` (read & write)
  - ~~[ ] Create a custom object (UI or API) with:~~
    - ~~[ ] At least 3 custom properties, one of which is a string property called **"Name"**~~
    - ~~[ ] At least 3 records added to the custom object~~
    - ~~[ ] Associated with the contacts object type~~
    - **I am unable to create custom objects**
- [X] **Step 3** — Fork the GitHub repository:
  - [X] Click Fork, rename to `jay-baum-iwh-i-practicum`, keep "main branch only" checked
  - [X] Clone the fork to your local machine
- [X] **Step 4** — Verify the folder/file structure matches (`public/css/style.css`, `views/`, `.gitignore`, `index.js`, `package.json`)
- ~~[ ] **Step 5** — Add the custom object list view URL to the README: `https://app.hubspot.com/contacts/<account-id>/objects/<object-id>/views/all/list`~~
    - **I am unable to create custom object**
- [X] **Step 6** — Create and check out `working-branch`, then make first commit: `"First commit to my Integrating With HubSpot I: Foundations practicum repository."`
- [X] **Step 7** — Run `npm install`
- [X] **Step 8** — Plan three routes in `index.js`: `GET /`, `GET /update-cobj`, `POST /update-cobj`
- [X] **Step 9** — Implement `GET /update-cobj`:
  - [X] Create `views/updates.pug`
  - [X] Render with page title `Update Custom Object Form | Integrating With HubSpot I Practicum`
  - [X] Add a "Return to the homepage" link pointing to `/`
  - [X] Add a form with fields for each of the 3 custom properties
- [X] **Step 10** — Implement `POST /update-cobj`:
  - [X] POST the form data to HubSpot to create a new CRM record
  - [X] Redirect to `/` after creation
- [X] **Step 11** — Implement `GET /`:
  - [X] GET all custom object records from HubSpot (include all custom property fields)
  - [X] Create `views/homepage.pug` that renders an HTML table with a column per property
  - [X] Pass the records to the template and add an "Add to this table" link at the top pointing to `/update-cobj`
- [X] **Step 12** — Test the app with `node index.js`, verify creating a record and seeing it on the homepage
- [X] **Step 13** — Re-merge `working-branch` into `main` and submit the public repo link
- [ ] **Step 14** — Clean up
