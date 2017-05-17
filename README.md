# Sound Exchange (SoX) Streaming Server

This service provide generted "noise" effects availabe within the SoX sound library for use in other applications. I made it because there were too many occasions I needed pink or white noise and had to hunt down or generate the sounds. 

The server currently has routes that will return the following sound profiles: 
  - white noise
  - pink noise
  - brown noise
  - simulated ocean noise

## Requirements

The following must be installed: 
  - SoX
  - node.js 4.x.x and associated NPM

## Installation 

After satisfying the requirements you only need to clone the repo and run an `npm install` to pull down dependencies.

## Usage

Start the server by using `npm start` to run it in production, and use `npm run dev` for running in develop mode to use nodemon for auto-respawning on file saves. 

### Routes 

**/sox/whitenoise**
Returns 30 second audio stream of white noise with 3 second fade in and out

**/sox/whitenoise/:time**
Returns an audio stream of white noise for the duration specified in the URL parameter **:time**. Must be specified as an integer.

**/sox/whitenoise/:time/:fade**
Returns an audio stream of white noise for the duration specified in the URL parameter **:time** with a fade in and out for the duration specified in the URL parameter **:fade**. Both parameters must be specified as integers.

**/sox/pinknoise**
Returns 30 second audio stream of pink noise with 3 second fade in and out

**/sox/pinknoise/:time**
Returns an audio stream of pink noise for the duration specified in the URL parameter **:time**. Must be specified as an integer.

**/sox/pinknoise/:time/:fade**
Returns an audio stream of pink noise for the duration specified in the URL parameter **:time** with a fade in and out for the duration specified in the URL parameter **:fade**. Both parameters must be specified as integers.

**/sox/brownnoise**
Returns 30 second audio stream of brown noise with 3 second fade in and out

**/sox/brownnoise/:time**
Returns an audio stream of brown noise for the duration specified in the URL parameter **:time**. Must be specified as an integer.

**/sox/brownnoise/:time/:fade**
Returns an audio stream of brown noise for the duration specified in the URL parameter **:time** with a fade in and out for the duration specified in the URL parameter **:fade**. Both parameters must be specified as integers.

**/sox/ocean**
Returns 30 second audio stream of simulated ocean noise with 3 second fade in and out

**/sox/ocean/:time**
Returns an audio stream of simulated ocean noise for the duration specified in the URL parameter **:time**. Must be specified as an integer.

**/sox/ocean/:time/:fade**
Returns an audio stream of simulated ocean noise for the duration specified in the URL parameter **:time** with a fade in and out for the duration specified in the URL parameter **:fade**. Both parameters must be specified as integers.