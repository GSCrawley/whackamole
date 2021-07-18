Here's what i'm trying to make happen:  

I want the tab navigator to be able to access a welcome screen, the MoleScreen, and the GameBoard. 

The MoleScreen is a list of moles to choose from. 

Those moles are made in Mole.Js, by passing image props into an Avatar. 

I want the Avatar's onPress function to activate the Switch Navigator which will open up the GameBoard with that particular Avatar's corresponding Mole in a Hole (ie: pressing on 'Tucker' should open up the game with 'TuckerInAHole.png' as the image source for the mole. ) 

I want to make this work by passing a variable into moleActive in the ImageSource of Square.JS.

