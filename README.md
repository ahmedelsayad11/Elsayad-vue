# Todo App

This is a todo-app-task that was required from brimore.com,
I have implemented the required feature and it is now ready for review

## The Functionality

when you first load the app< you will find three default tasks,
you can filter them with the filter button, you can delete or edit by clicking the edit or delete button,
you can toggle any task by clicking on it's text [completed or not]

at the very bottom there is an input field
it allows you to get the todos of a specific user [api call] by entering a number from 1 -10 and it will get you all the user's todos

## to be considered

i have tried too do both storybook and the tests for the vuex but i ran into configuration problem that got me stuck,

### storybook problem

storybook was not able to read or load the css of the antd into the stories, i tried different solutions including webpack config and others but it did not work for me

### tests problem

jest was not able to identify the html tags of antd it shows me error like
a-button is not defined and so on
, i tried to find a way around it but i could not
