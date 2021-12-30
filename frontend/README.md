# Project 14: Around the U.S. project on React, featuring authorization and registration.

### Overview
* Intro
* Create React App
* React Router
* Description of the project
* Connection to server
* Security client-side
* Figma
* Images
* GitHub

**Intro**

    This project is an interactive site where users can sign up with an email and password and then login to their profile page.
    If they log in to the site and dont logout, at the next login they will automatically log in to their profile page.
    On profile page they can add, remove, or like photos.
    Each user enters his profile, enters his name and profession.

**Create React App**
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**React Router**

    This project uses React Router for a better routing experience and less code (https://reactrouter.com/).

**Description of the project**

    In this project was copy fron the project (Project 5: around-react) https://timna-r.github.io/around-react and added registration and authorization to him.

    A user enters the site and needs to register. After registering or if already registered, he logs in with the email and password registered.
    When there is one error the data shows an error on a popup window.
    If his details are identified he goes to his profile page.
    When a user returns to the site, the token stored in localStorage is checked, if there is a token the site will automatically link to its profile page.

    //around-react:
    In this project the project (Project 4: Around The U.S.) https://timna-r.github.io/web_project_4 was transferred for use in React.
    The index.js file is connected to id root in the html code,
    To which the main file (APP) of our code is imported.

    In the project the JSX code is implemented in the JavaScript files,
    which include the layout of the project on the page, components and API request and response.
    Lift state up to control all of the state components.
    Current user data with 'context' to create Global State.
    'Ref' to get direct access to the DOM.


    The CSS uses media queries that can display a responsive website.
    Compatibility can be seen for various devices like desktop, laptop, tablet and mobile phone.
    flex-box are used to arrange the elements on the page.
    Images with different gradients.
    The Inter font is used. Import the font, and apply it in CSS code.

**Connection to server**

    Connecting the project to the server in the address: "https://around.nomoreparties.co".
    Use code JavaScript with fetch function and request and response method.

**Server running**

    All authorization, registration and token requests go through to the server running on
    [https://register.nomoreparties.co](https://register.nomoreparties.co/).

**Security client-side**

    Sending Cookies with fetch() requests for more Security on client side.

**Figma**

* [Link to the project in Figma -1](https://www.figma.com/file/SurN1jaeEQIhuZEDMhmWWf/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)
* [Link to the project in Figma -2](https://www.figma.com/file/m79HxYeZpOXRw0Tz2eZGOV/Sprint-5%3A-Around-The-U.S.-%7C-desktop-%2B-mobile?node-id=0%3A1)
* [Link to the project in Figma -3](https://www.figma.com/file/05izwsCh3F3UsBmHfHhUFQ/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1)
* [Link to the project in Figma -4](https://www.figma.com/file/xQVeb8gprjukPVKXiLXS5T/Sprint-9-Applied-JavaScript?node-id=0%3A1)
* [Link to the project in Figma -5](https://www.figma.com/file/yXGGl4EnWYEPzGJU2dSJ1L/Sprint-14%3A-Registration-and-Authorization?node-id=0%3A1)

**Images**

    All images were downloaded from a Figma, and after to optimize.

**GitHub**

    https://timna-r.github.io/react-around-auth
