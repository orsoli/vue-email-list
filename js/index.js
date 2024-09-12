// Destructuring createApp from vue
const { createApp } = Vue;
// Create an instance app of vue app
createApp({
  // Create variables
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail", // Variable to store url
      emails: [], // Variable to store random emails
    };
  },

  methods: {
    // Define a function to get response from bollean url by API response
    getRandomEmail() {
      // Generate 10 diferent random email
      for (let i = 0; i < 10; i++) {
        // Get response from url
        axios.get(this.apiUrl).then((response) => {
          // Add random email gererated in emails array
          this.emails.push(response.data.response);
        });
      }
    },
  },

  mounted() {
    // Call back function
    this.getRandomEmail();
    console.log(this.emails); // Testing orint in console
  },
}).mount("#app");
