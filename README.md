# p5.js Side-Scrolling Platform Game

A browser-based side-scrolling platform game built with **JavaScript**, **p5.js**, and **p5.sound** as part of **CM1005 – Introduction to Programming I** in the University of London BSc Computer Science programme.

The project demonstrates core programming concepts through a complete interactive game, including character movement, jumping, collision detection, enemies, platforms, collectables, lives, scoring, sound effects, a scrolling camera, and level-completion logic.

## Features

- Side-scrolling camera that follows the player
- Character movement and jumping
- Multiple character animation states
- Platforms with collision detection
- Canyons and falling mechanics
- Moving enemies with collision detection
- Collectable items and score tracking
- Lives and game-over handling
- Level-completion flagpole
- Background music and sound effects
- Procedurally drawn scenery using p5.js shapes
- Modular JavaScript files for game components

## Controls

| Key | Action |
| --- | --- |
| `A` | Move left |
| `D` | Move right |
| `W` | Jump |
| `Space` | Continue after game over or level completion |

## Technologies

- JavaScript
- p5.js
- p5.sound
- HTML5

## Project Structure

```text
.
├── index.html
├── sketch.js
├── character.js
├── enemy.js
├── platforms.js
├── canyon.js
├── collectable.js
├── clouds.js
├── mountains.js
├── trees.js
├── flagpole.js
├── event_handling.js
├── sounds.js
├── assets/
│   ├── bg.mp3
│   ├── collectable.mp3
│   ├── dies.mp3
│   ├── jump.mp3
│   └── levelcomplete.mp3
├── docs/
│   └── project-commentary.pdf
├── p5.min.js
└── p5.sound.min.js
```

## Running the Game Locally

Because the game loads audio assets, it is best run through a small local web server rather than opening `index.html` directly.

From the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Coursework Context

This repository is a cleaned portfolio version of the original CM1005 final game project. Operating-system and IDE metadata have been removed, while the original game implementation and coursework artefacts have been retained.

## Author

**Abdullah Humayun**  
BSc Computer Science – University of London / Goldsmiths
