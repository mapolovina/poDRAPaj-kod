#**poDRAPaj kod**

This is my first web app in which I used Messi ([Messi](http://marcosesperon.es/apps/messi/)), a simple message plugin for jQuery. I also used Vex ([Vex](http://github.hubspot.com/vex/)) - great dialog library in javascript. Vex is tiny (6kb minified), has a clear and simple API, works on mobile devices, and can be customized to match your style in seconds. Both technologies support IE8+!

## _Example of Messi:_

1. Display text

>**new Messi('your text', {options});**

>example of options:

>**title: 'someTitle',**

>**center: true/false,**

>**closeButton: true/false,**

>**height: 'specificInPixels/auto',**

>**width: 'specificInPixels/auto'**

1. Display image

>**new Messi.img('Image URL', {options});**

>example of options:

>**title: 'someTitle',**

>**center: true/false,**



Vex Dialog exposes 4 main apis:
1. vex.dialog.alert(stringOrOptions)

2. vex.dialog.confirm(options)

3. vex.dialog.prompt(options)

4. vex.dialog.open(options)

(Internally, alert, confirm, and prompt call open with a different compositions of options.)

In my app I used confirm api. 

## _Example of Vex:_

>**vex.defaultOptions.className = 'one of 7 themes';**

>**vex.dialog.confirm({message:"yourMessage"});**

At the moment, there are 7 themes:

1. vex-theme-default

2. vex-theme-os

3. vex-theme-plain

4. vex-theme-wireframe

5. vex-theme-flat-attack

6. vex-theme-top

7. vex-theme-bottom-right-corner


_This app is made for job application and it was a great moment to try something new._


