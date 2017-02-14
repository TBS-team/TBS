# TBS
### A turn based strategy project

This project comes out of the idea to build a game that is both interesting and challenging to play but also fun to build. It will be team project. 

### Project outline:
=====

Building a turn based strategy game for 2 players:

##### Game concept: 

Player starts with 5k gold and can buy units before the game:

* ‘Infantry’: 5 movement, 1 atk radius, 1 armor, 4 dmg, 5hp 300g 
* ‘Cavalry’: 7 movement, 1atk radius, 0 armor, 4 dmg, 4hp 500g
* ‘Archer’: 4 movement, 3 atk radius, 1 armor, 3 dmg, 3hp 800g
* ‘Cannon’ 2 movement, 4atk radius, 3 armor, 6 dmg, 5hp, can only move or atk, 2k gold
* ‘Knight’ 3 movement, 1atk radius, 3 armor, 5dmg, 5hp, 1.2k gold 

Map: 15x15 of random tiles (15% are tiles blocked with obstacles)

At the beginning of the game the units will be placed randomly on the map and players take turns advancing and then attacking. 
* player 1 movement
* Player 1 attack
* Player 2 out counter attack if possible (cannon can not counter)
* Player 2 movement
* Player 2 attack
* Player 1 out counter attack if possible (cannon can not counter)

The attacking unit always goes first and if the enemy is defeated in the attack, no counter attack will be made. Units alive after engaging in combat will gain a level after each attack (up to 3 times) 
Gaining +1atk and +1base hp

The game is won when the last unit of the enemy is defeated. 

### Project plan: 
===== 

* Develop data model
* Develop wireframes
* Develop prep screen
* Develop game field
* Develop movement functionality
* Develop combat functionality
* Develop level up functionality
* Develop win / loss check
* Develop database and login functionality
* Develop player improvement points (ie: gain extra benefits after each battle, like extra 100g for example)
* Develop online functionality
* Develop chat (emote) functionality

