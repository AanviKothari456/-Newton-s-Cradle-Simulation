Bob Chain Simulation

This is a simple physics simulation of a chain of bob objects connected to a roof using constraints. The simulation is built using the Matter.js physics engine.

Installation

To run this code, you need to have the Matter.js library installed. You can include the library by adding the following line to your HTML file:

html
Copy code
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
Usage

The code provides a visual representation of a chain of bob objects hanging from a roof. The bobs are connected to the roof using constraints, allowing them to swing freely.

To interact with the simulation, you can use the following controls:

Press the UP arrow key to apply an upward force on the first bob, causing the chain to swing.
Code Explanation

The code initializes the necessary Matter.js modules and creates a canvas for the simulation. It defines the Bob, Roof, and Chain classes to represent the objects in the simulation. The Bob class represents an individual bob object, the Roof class represents the roof, and the Chain class represents the constraint connecting a bob to the roof.

In the setup function, the necessary objects are created and positioned. The draw function is responsible for rendering the objects on the canvas.

The keyPressed function is triggered when the UP arrow key is pressed. It applies an upward force on the first bob, causing the chain to swing.

Dependencies

This code relies on the following dependencies:

Matter.js (version 0.17.1)
Make sure to include the Matter.js library in your HTML file as mentioned in the installation section.
