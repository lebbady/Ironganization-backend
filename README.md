# Project Name Ironganization

## Description

Organizing platform to do the following of the Ironhack students

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Login:** As a user I can login to the platform so that I can check and edit info about IH students
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create cohort** As a user I can create new cohorts
-  **Enter cohort** As a user I enter in the cohort created and see the students it has inside
-  **Create student** As a user I can create new students inside a cohort page
-  **Edit student** As a user I can edit the students info
-  **Delete student** As a user I can delete students from the cohort
-  **Search student** As a user I can search students by their names from the navbar
-  **See student profile** As a user I can see the profile of each student


## Routes
- `/` 
       (if not logged in)
  - LandingPageComponent
       (if logged in)
  - HomePageComponent
  - shows all cohorts
  - button link to create new cohort

- `/login`
  - LoginPageComponent
  - anon only
  - navigate to homepage after login

- `/cohorts/create` 
  - CreateCohortPageComponent
  - user only
  - shows a form to create the cohort
  - submit cohort button that takes you to the Homepage after submiting

- `/cohorts/:cohort` 
  - CohortPageComponent
  - user only
  - shows all the students that belong to that cohort in a card
  - students cards are links that take you to the students profiles
  - New student button that takes you to the New Student Page
 
- `/students/:studentid` 
  - StudentProfileComponent 
  - user only
  - shows all the information regarding the student selected

- `/students/create` 
  - CreateStudentComponent 
  - user only
  - shows a for to create a new student in the cohort
  - Submit student button to create a new student that redirects you to /cohorts/:cohort after clicking

- `/students/:studentid/edit` 
  - EditStudentsComponent 
  - user only
  - shows a form to edit the students

- `**`
  - NotFoundPageComponent


## Components

- Navbar Component

- Homepage:
  - newCohortButtonComponent
  - cohortCardComponent

- Login page:
  - logginButtonComponent
  - logginFormComponent

- Cohorts students page:
  - studentCardComponent

- Creacte cohort page:
  - createCohortFormComponent

- New student page:
  - newStudentFormComponent

- Student profile page:

- Edit student profile page:


## Services
- Auth Service
  - auth.login(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
-  Service
  - cohorts.getAllCohorts()
  - cohorts.getCohortStudents()
  - students.getProfile()
  - students.createStudent()
  - students.updateStudent()
  - students.deleteStudent()

# Server

## Models

User model
```
username - String // required
password - String // required
```
Cohort model
```
name - String (Default)
date - String // required
language - String (enum) // required
type - String (enum) // required
speciality - String (enum) //required
students: [studentid,...]
```
Student Model
```
name - String // required
pictureUrl - String
prework - String (enum)
project.level - String
project.quality - String
project.deployLink - String
project.presentationLink - String
kata - String
carrerService - String
Cohort - Unfold bar
```
## API Endpoints (backend routes)

- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object

- POST /auth/logout
  - 401 if user not logged in
  - body: (empty)
  - 204

- GET /cohorts
  - 401 if user not logged in


- POST /cohorts
  - 401 if user not logged in
  - Check no empty fields
  - body:
    - name
    - date
    - language
    - type
    - speciality

- GET /cohorts/:cohort
  - 401 if user not logged in
  - Validate id
  - Id exists

- GET /students/:student
  - 401 if user not logged in
  - Validate id
  - Id exists

- DELETE /students/:student
  - 401 if user not logged in
  - Validate id
  - Id exists
 
- POST /students
  - 401 if user not logged in
  - body:
    - name
    - picture url
    - prework
    - projects
    - katas
    - career service



## Links

### Trello/Kanban

### Git

The url to your repository and to your deployed project

### Slides

The url to your presentation slides


# Auth backend server


💣💣💣💣 rename the file `.env.sample` to `.env` and spicify your database name; 💣💣💣💣

## Routes

| Method | Path | Description |
|--------|------|-------------|
| `get`  | `/auth/me` | check if i'm logged |
| `post` | `/auth/login` | login |
| `post` | `/auth/signup` | signup |
| `post` | `/auth/logut` | logout |
| `get`  | `/auth/private` | private route for test |

## Login & Signup

this is the following `body` for the `login` and `signup` request;

```json
{
  "username": "demo",
  "password": "demo"
}
```
