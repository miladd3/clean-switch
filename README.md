# clean-switch
Clean Switch - Material Inspired Pure CSS toggle switch

# About
**Clean switch** is just a lightweight pure css toggle switch. witch is simillar to Material Design lite switch(MDL) But in pure css and better syntax and no dependency

# How to use

First copy `clean-switch.css` in your project. then link it to your project HTML file

    <link rel="stylesheet" href="clean-switch.css">

You can also use SCSS file `clean-switch.scss`

Make HTML switch structure like this. and put it inside forms or anywhere you like and it will behave like checkboxes.

    <label class="cl-switch">
        <input type="checkbox" >
        <span class="switcher"></span>
        <span class="label">this is label</span>
    </label>

# Diffrent Sizes

To adjust size of switch just add classes to the list of classes in switch ellement

    <label class="cl-switch cl-switch-large">
        <input type="checkbox" >
        <span class="switcher"></span>
        <span class="label">this is large switch</span>
    </label>

size classes are:

* cl-switch-large
* cl-switch-xlarge


# Disabled

to make a switch disable simply add disabled attribute to checkbox

    <label class="cl-switch">
    	<input type="checkbox" disabled>
    	<span class="switcher"></span>
    	<span class="label">Disabled</span>
    </label>


# Diffrent Colors
To adjust color of the switch just add classes to the list of classes in switch ellement

    <label class="cl-switch cl-switch-red">
        <input type="checkbox" >
        <span class="switcher"></span>
        <span class="label">this is red switch</span>
    </label>

color classes are:

* cl-switch-black
* cl-switch-red
* cl-switch-green
* cl-switch-orange


# Custom Colors

For Some projects you will need custom color so you can do it with small CSS

1- first you should add a class to class list of cl-switch in this example its `custom-class`

    <label class="cl-switch custom-class">
        <input type="checkbox" >
        <span class="switcher"></span>
        <span class="label">this is custom color switch</span>
    </label>

2- then you should adjust its color in your css **that is loaded after cl-switch css**

    .custom-class input[type="checkbox"]:checked + .switcher {
      background: #c06651; /*this is body of switch that should be lighter color*/
    }
    .custom-class input[type="checkbox"]:checked + .switcher:before {
      background: #c0392b; /*this is btn of switch that should be darker color*/
    }

# iOS Style

If you are an iOS fan, you can have iOS style too

just add `ios` class in label class list

all sizing and colors works fine 

    <label class="cl-switch ios">
    	<input type="checkbox">
    	<span class="switcher"></span>
    	<span class="label">title</span>
    </label>

# licence and cast
MIT Licence 


by [Milad Dehghan](https://dehghan.net)

