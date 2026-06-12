# The Wizarding Registry

## [See the App!](https://the-wizarding-registry.vercel.app/)

![App Logo](public/wizarding-registry-logo.png)

## Description

An official registry for the Wizarding World — browse wizards, vote for their society affiliation, and follow the latest news through the Daily Prophet feed.

#### [Client Repo here](https://github.com/adrien-duchossoy/the-wizarding-registry-client)
#### [Server Repo here](https://github.com/adrien-duchossoy/the-wizarding-registry-server)

## Technologies, Libraries & APIs used

- React 19
- Vite 8
- React Router DOM 7
- Axios
- CSS (component-scoped stylesheets)

## Backlog Functionalities

- Authentication (sign up / login)
- Wizard search by name
- Society ranking by total votes
- Admin panel to moderate wizards and societies

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault
- **homepage** - As a user I want to access the Daily Prophet feed so that I can see the latest events in the Wizarding Registry
- **wizard list** - As a user I want to browse all registered wizards and filter them by house, blood status, or society so that I can find who I'm looking for
- **wizard detail** - As a user I want to see a wizard's full profile and their vote breakdown per society
- **vote** - As a user I want to vote for a wizard's society affiliation so that I can influence where they belong
- **create wizard** - As a user I want to register a new wizard so that they appear in the official registry
- **edit wizard** - As a user I want to edit a wizard's information so that the registry stays accurate
- **create society** - As a user I want to create a new society so that wizards can be affiliated to it
- **society details** - As a user I want to see the details of a society and its members

## Client Routes

## React Router Routes (React App)
| Path                        | Page                  | Components         | Behavior                                              |
| --------------------------- | --------------------- | ------------------ | ----------------------------------------------------- |
| `/`                         | LoaderPreview         |                    | Animated intro / splash screen                        |
| `/home`                     | Homepage              |                    | Daily Prophet feed with latest registry events        |
| `/wizards`                  | WizardList            | WizardCard, Filters | Browse all wizards with filters                      |
| `/wizards/:wizardId`        | WizardDetail          | WizardDetailCard   | Full wizard profile with vote breakdown               |
| `/wizards/create`           | NewWizard             | WizardForm         | Form to register a new wizard                         |
| `/wizards/:wizardId/edit`   | EditWizard            | WizardForm         | Form to edit an existing wizard                       |
| `/societies/create`         | NewSociety            | SocietyForm        | Form to create a new society                          |
| `/societies/:societyId`     | SocietyDetails        |                    | Society details and member list                       |
| `*`                         | Error                 |                    | 404 fallback page                                     |

## Other Components

- Navbar
- Loader
- ConfirmModal
- WithNavbar (layout wrapper)

## Links

### Collaborators

[Adrien Duchossoy](https://github.com/adrien-duchossoy)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
