# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tharun Sathiyamoorthy**

Time spent: **3.5** hours spent in total

Link to project: https://glitch.com/~marsh-peach-tiara

## Required Functionality

The following **required** functionality is complete:

* [/] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [/] "Start" button toggles between "Start" and "Stop" when clicked. 
* [/] Game buttons each light up and play a sound when clicked. 
* [/] Computer plays back sequence of clues including sound and visual cue for each button
* [/] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [/] User wins the game after guessing a complete pattern
* [/] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [/] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [/] Buttons use a pitch (frequency) other than the ones in the tutorial
* [/] More than 4 functional game buttons
* [/] Playback speeds up on each turn
* [/] Computer picks a different pattern each time the game is played
* [/] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [/] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [/] Start and Stop button change colours upon click
- [/] Game keeps track of total number of wins and losses in the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Demonstration of a player winning the game:
![](http://g.recordit.co/32uCqlrVyl.gif)

Demonstration of a player losing the game after 3 mistakes:
![](http://g.recordit.co/Pq95pH09T4.gif)


## Reflection Questions
##### 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/cssref/css_colors.asp
https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
https://www.w3schools.com/tags/tag_span.asp
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
https://www.w3schools.com/jsref/met_win_setinterval.asp\
https://pages.mtu.edu/~suits/notefreqs.html

##### 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I am unfamiliar with Javascript. When I was creating the timer, I did not know how to even approach the problem or adapt my existing code to implement a timer. To solve it, I started with a goal of what I wanted the timer to look like
in terms of gameplay and output, then I wrote pseudocode based on my existing code. This way, I could easily figure out all the parts of the timer function (i.e. global variables and game logic)I needed without actually knowing how to update text or use setInterval.
All that was left was to read some documentation on setInterval() and document.getElementByID().innerHTML to update the timer function. 

My implementation of 3 strikes before the user lost the game was buggy. I initially used a while loop inside the guess() function, but it would reset after each guess. Effectively this meant the player had unlimited guesses.
I spent nearly and hour rewriting my code, but it turned out I could have saved all that time by debugging. I used console.log() to print a statement each time it reset, and each time I expected a reset but didn't get one. 
I identified the problem was that the guess() function was more limited in scope than counting mistakes, so instead I created a global variable and replaced the loop in guess() with one line to decrement the number of attempts left. 

I resolved all other issues (i.e. audiocontext not initializing, css styling options) by referring to documentation or examples online.

##### 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

If I were to make a larger/more complicated game or service, I might be limited by the browser. I also noticed that inspecting any element in the browser would give you access to all the code for the website. I think a better approach would be to have a server host the game logic and code, with the browser only rendering and handling calls, so I wonder how I can do that?

Also, as a website grows bigger, I think it would be harder to maintain consistent styling throughout. For example, if I were to expand the game to include 1000 buttons, I would have to fill in 2 CSS attributes for each button, and have perhaps a thousand extra lines of code that all do the same thing. As such, I want to know what strategies there are to refactoring styling for different parts of the website.

##### 4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, I would allow the user to choose between different levels of difficulty. This would include varying numbers of buttons, speed settings, pattern length, time available to guess and number of strikes. 
To implement this, I would need to implement a set of buttons that correspond to different difficulties and some global variable ("var difficulty") that is updated when any of the button is pressed. I could modify the functions for each 
part of the game to check for the selected difficulty and set different values (ex timer() might reduce how much time you have to guess at higher difficulty). I think a simpler and cleaner approach is to allow startGame() to update all the 
corresponding global variables before anything else is initialized for the game to start. I don't know how, but this means I must make sure the user cannot start a game without selecting difficulty or change difficulty during the game. 
Alternatively, I could just set a default difficulty and only change if the user chooses to.

## License

    Copyright Tharun Sathiyamoorthy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
-------------------

\ ゜o゜)ノ
