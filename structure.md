#### Through the appropriate Boolean API: https://flynn.boolean.careers/exercises/api/random/mail generate 10 email addresses and display them on the page within a list.

- Prepare the html structure
- Create variable url to save boolean API url
- Create an array variable emails to save get random emails
- Use for loop to generate 10 different random emails from boolean url and push()method to add in emails array
- Link by directives with DOM and in li element use v-for directive printing email from emails array

### BONUS: Only display email addresses when they have all been generated.

- In computed property define emailsCompleted function returning boolean value
- In DOM by directive v-if in ul element call back emailsCompleted
