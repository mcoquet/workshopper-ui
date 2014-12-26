workshopper-ui
==============

A fully contained workshopper environment to allow installing and running workshoppers


---
The goal of this tool is to help/guide you in installing node, npm , browse workshoppers , install them, and play through them in a GUI.

The hope is that this tool simplifies everyone's life , mentors and students alike by making it embarrassingly easy to get started, and play through the material.


# What does it do?
It has 3 core functions.

## Help the user setup his environment
The tool will scan the OS for node, npm, and any existing workshoppers installed globally. If node or npm aren't present, the tool will do its best to guide the user through the install process offering advice on best practices (you know, keeping your OS clean ;))

## Help the user find workshoppers on NPM
The tool will have a section to manage the installed workshoppers, help the user browse existing ones on NPM, and finally install them and run through them. It should also keep track (and show the user, duh) of progress on installed workshoppers or already completed (and subsequently uninstalled) workshops.

## Give the user a nice integrated GUI to work through the workshoppers.
Once a user chooses to play through one of the workshoppers , the tool will present the user with a code editor, npm console (to search and install modules to aid the user in their quest), a window with text for the current problem and a window with the run/verify output
