# Project 3: Around The U.S.

### Overview

- Intro
- Video
- Figma
- Images
- Forms
- Future Plans

**Intro**

This project was a challenge to create the site from the Figma design and then make sure it is responsive to different device sizes. I began by building out the basic elements of the site in HTML, adding class names and following BEM methodology. I then created the structure of CSS files to style the site, taking care to match the project to the Figma design.

The second phase of this project involved making a window to edit the user's name and title. I created this with HTML and CSS, then added Javascript functionality to allow the window to operate properly, passing the name and title values to the modal and to the main page once edited. I then removed the HTML for my cards and generated them dynamically with Javascript, using querySelector, cloneNode, and writing functions for the array as an iterative loop.

The third phase of this project included adding functionality to allow the user to add new cards, delete cards, click the like buttons, and implement some optimizations in Javascript to allow the site to function more efficiently.

The fourth phase of this project included Javascript form validation for the edit profile modal. I also added new controls for closing the modals by using the mouse and clicking anywhere outside of the modal content, or by pressing the escape key.

The next phase of this project included bringing my Javascript together in modules, so I created a FormValidator module and a Card module. I moved the appropriate code to the correct methods and removed all other code. I also took time during this refactoring to organize my code in a better way and include headings to improve the readability. Finally, I added some functionality to the form validation error messages to clean them up after they were no longer needed.

**Hosted Site**

The site is currently hosted on GitHub Pages at the following address:

[Link to the project site on GitHub Pages](https://ironrule.github.io/se_project_aroundtheus/)

You can review the site in DevTools and inspect each element, as well as change page sizes to see how it will look on different devices. As we were given 2 designs in Figma, some of the different sizes had to be styled based on what looked or worked best.

**Video**

Below is a link to the video that I created for my site, to show the different features used in the development of this project.

- [Link to the video file on Google Drive](https://drive.google.com/file/d/140J2Re11dwBGoJUx02srI23KCSusA2Im/view?usp=sharing)

**Figma**

- [Link to the project on Figma](https://www.figma.com/file/05izwsCh3F3UsBmHfHhUFQ/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1)

After loading this design, I was able to export the necessary images for my project. This Figma design gave us a mockup of the site for small devices of 320 pixel width screens, and a regular desktop site of around 1280 pixels in width.

**Images**

Below are links to the images of my site while viewing in DevTools to see the different sizes and how the site changes to adapt to them.

[Desktop Screenshot](./readme/desktop.png)

[Desktop Profile Modal](./readme/desktopprofile.png)

[Desktop New Place Added](./readme/desktopnewplace.png)

[Desktop Like Button Function](./readme/desktopfavorite.png)

[Desktop Add Modal](./readme/desktopadd.png)

[Desktop Delete Function](./readme/desktopdelete.png)

[Tablet Screenshot](./readme/tablet.png)

[Mobile Screenshot](./readme/mobile.png)

[Mobile Profile Modal](./readme/MobilePopup.png)

**Forms**

I have added form validation and Javascript controls to limit what can be entered to the input fields. These use the browser API to present the messages based on the set limits for each input field.

**Future Plans**

Future plans for this site include coding the back-end to allow saving changes permanently. This will be accomplished with additional Javascript, CSS and HTML.
