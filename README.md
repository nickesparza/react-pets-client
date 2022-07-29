# Pets App Client

This is a client for the express pets app that will allow users to view and create pets, as well as edit and add toys to their pets.

## User Stories
As a user, I want to be able to:
* create an account
* sign in
* sign out
* change my password
* see all pets
* see information about a specific pet
* create a new pet
* update my pet(s)
* liberate my pet(s)
* create a toy
* give toys to any pet
* update toys on my pet(s)
* delete toys from my pet(s)

## Views

### User Views

| Route            | Description                                                  |
|------------------|--------------------------------------------------------------|
| /sign-up         | allows user to create a new account                          |
| /sign-in         | allows user to sign in to their account                      |
| /sign-out        | allows user to sign out of their account and end the session |
| /change-password | allows user to change their password                         |

### Pet Views

| Route     | Description   |
|-----------|---------------|
| /         | pets index    |
| /pets/:id | pet show page |
| /addPet   | new pet page  |

* Pet show page will have a modal for updating.
* Users will be able to delete via the show page.

### Toys Views

| Route   | Description  |
|---------|--------------|
| /addToy | new toy page |

* Pet show page will also allow updating and deleting toys.