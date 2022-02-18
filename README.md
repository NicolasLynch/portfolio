# portfolioo

My personal portfolio. Take a look at my work.

[Live version](https://nicolaslynch.github.io/portfolio/)



## Install dependencies:

- Remember to have React installed
- npm i react-intersection-observer
- npm install @formspree/react




## Important:

In this code, the form sends the messages to my Email box. To solve this, you must create an account on this page: https://formspree.io/ 
to get your own key.

Then you have to go to the App.js file and in this const change my key for yours.

Original code:
> const [state, handleSubmit] = useForm("moqredvl");

Recommended change:
> const [state, handleSubmit] = useForm(Your key);


Once these steps are complete, the messages will arrive in your own email box.

