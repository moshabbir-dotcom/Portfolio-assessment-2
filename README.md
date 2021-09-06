# PORTFOLIO-ASSESSMENT-2
* A simple interactive website using HTML, CSS and JavaScript
## User Objectives-
* To be able to easily navigate the site and begin gameplay.
* Have enough randomisation in the game to be able to remain entertaining.
* Game will be catered on shape differences and not shape AND colour differences with the rationale being based on the academic research of Çiğdem Kudiaki & Aslı Aslan. (https://www.sciencedirect.com/science/article/pii/S0887617707001035) 
## Site Owner Objectives-
* To make a simple and intuative game that can be used to aid short term memory recall.
* Must be familiar enough to play for people who may not be computer literate.
* Ensure contrast and display is simple but attention grabbing whilst providing information needed to user about the game itself.
# DESIGN-<!--Update this-->
* Typography used is Oswald with a font weight of 600 to be easily readable on the dark background with a backup font of Sans Serif.
* Colour scheme has been chosen to be contrasting with light/dark colours in the background image with a simple backup colour of green in order to not clash with the red back of the playing card or the simple monochrome of the rorshach images themselves.
* Font awesome icon has been used to add decoration to the limited text on the index.html page. 

## Wireframe mocks-<!--Update this-->
<img src="">
<img src="">

## Wireframe realisation after deployment-<!--Update this-->
### Mobile & portrait tablet
<img src="">
<img src="">

### Landscape tablet & desktop-<!--Update this-->
<img src="">
<img src="">

# FEATURE 
* Website is responsive on multiple device sizes due to sizes being set at % of viewport height of device reducing the need for media queries.
* Interactive elements include the game itself.

# LANGUAGES-
* [HTML5] (https://en.wikipedia.org/wiki/HTML5)
* [CSS3] (https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript] (https://https://en.wikipedia.org/wiki/JavaScript)

# LIBRARIES & PROGRAMS-
* [Google Fonts:](https://fonts.google.com/) Google fonts were used to import the "Oswald" font into the style.css file which is used on all pages of the website with Sans Serif as a backup font. This font & weight was selected for ease of reading for the potential user of the site.
* [Font Awesome:](https://fontawesome.com/) Font Awesome was used on all pages throughout the website to add icons for aesthetic purposes and add to the UX of the site.
* [GitHub:](https://github.com/) GitHub was used to store the projects code after being pushed from Gitpod.
* [Gitpod:](https://gitpod.io/) Gitpod was used to write the project code.
* [TinyPNG](https://tinypng.com) TinyPNG was used to compress image sizes to aid in page loading speed.
* [Favicon](https://favicon.io/) Favicon was used to compress image files into an icon for use in the website.

# DETAILED SECTION SUMMARY-<!--Update this-->
## How 2 play page- 
* 
## Gameplay page- 
* 
# TESTING-
<!--Update this-->
* Tested through W3C code tester for HTML and W3C for CSS with no errors. The were warnings on all 3 html pages advising the use of h2 to h6 tags due to the word "section" being used in the html code although this was not required for this project and in future would be avoided.
<img src="">
<img src="">

* The website was tested on XXXXXXXX browsers. <!--Update this-->
* The website was tested on XXXXXXXX phones. <!--Update this-->
* People in the acknowledgement section and family/friends were asked to navigate the site and give feedback on any difficulties encountered.


## Bugs- 
* <!--Update this-->
* When writing the hasTurnedCard function the second card was not spinning if there was no match on the dataset. As a result a timeout function had to be set as part of the function itself in order to allow the user enough time to see the second card before making another selection.
* When double clicking the SAME card it caused the removeEventListener function to occur as the data.cardid matched so the single card then stayed spun with the image on display. Another conditon had to be set in the hasTurnedCard function which if card1 was clicked on twice would cause a return from the function and would only stay spun if the dataset.cardid matched for two DIFFERENT cards clicked upon.
* If more than 2 cards where clicked BEFORE the initial 2 cards had either matched or spun back it would cause the game to crash. A solution for this was to not allow more than 2 cards to be selected so they could either be matched and taken out of play or spin back around before the game would allow for another selection of card.

# DEPLOYMENT-
The project was deployed to GitHub Pages using the following procedure:

* Logged in to github and selected the github repository required.
* Selected the settings option.
* Went to the github pages section.
* Under the source tab the dropdown "none" was changed to "master branch".
* The page then refreshed.
* The gihub pages section then had a link to the published page.

# CREDITS- <!--Update this-->
* Code for the form was resused from my challenge 2 submission at the end of the running walkthrough. This was then adjusted and added to in order to make it relevant for what the CONTACT page was trying to achieve.
* Credit is also given to Adill Bashir who helped me better understand the ways in which to write JavaScript syntax and helping me to practice my code writing by challenging what I had written in order to become more concise and easier to read as part of the script.js file. He also helped me by providing the code for the resetGameboard function and introduced me to the IIFE (Immediately Invoked Function Expression) which ensures the game is random everytime it is played.
* Thanks also to Bim Williams who 
* 

# CONTENT & MEDIA-
* All photos and videos are copyright of the respective copyright holders and taken from free image sites. The images were then all compressed to aid in page load speed.

# OPPORTUNITIES- <!--Update this-->
* There is an opportunity to increase the complexity of the game by adding a scoring mechanic which if a minimum score is achieved would open up another "level" in that the gameplay grid could start from a 3x3 and potentially go up to a 32x32 gameplay grid for all 16 Rorschach images obtained when collating images to be used as part of the design and planning stage.
* With the above in mind it could also be an option to build in the functionality to select a gamplay grid before loading a game which would remove the need to have to "level up" everytime a user plays.
* There is another opportunity in making the code easier to read by using ternary operators although at this stage of my coding journey I find it easier to be using the longer syntax in order to understand the code I am writing.

* 