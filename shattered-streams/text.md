i’ve had ongoing collaborations with [rbma](http://redbullmusicacademy.com) since 2015, when I performed at the rbma fest in new york. the most recent of these, shattered streams, was an experiment in musical ephemerality, presenting original music from 31 artists throughout may 2016. each song was available to stream on a loop for a maximum period of 24 hours, degrading over that time until they simply disappeared.

this project wasn’t about digital v. analog, or suggesting one way of listening is purer than another. instead, it was a continuum of the conversations surrounding modern music consumption via streaming services in which a degradation of access, not quality, is encountered as the result of shifting licensing agreements and dropped connections.

![62.5!shattered.mp4](thumbnail.jpg)

the site made heavy use of the web audio api to handle real-time signal processing in the browser. users could select a listening session duration anywhere between a minute and twenty-four hours. it was important to communicate the idea of degradation without relying on analog auditory tropes like tape hiss.

the final chain relies upon several convolvers with extreme impulse reactions each phasing in and out of each other, along with eq modulation and a touch of distortion.

the audio stream was accompanied by 31 hand animated six frame loops which were fed through visual displacement and feedback processing, all of which was created by [andrew ohlmann](http://andrewohlmann.com). parameters were frequency-mapped to the audio being played to create an identifiable cohesion within the chaos.

the site was a frameworkless single page app. we relied on [browserify](http://browserify.org) to bundle everything up, and [pixi](http://www.pixijs.com) was heavily used for the stream visuals.
