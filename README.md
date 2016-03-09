Grunt Master File
===============================

A word of caution first
----
The current version is **Work in progress**. It is **no case** a productive and stable version yet. Please use it with care!!!
It is more than recommended to have a grunt experience to use it. 


Author
----
Guillaume Simler (more information and contact details on my [Github profile](https://github.com/guillaumesimler))


Aim of the project
------
The aim of the project is to (i) generate a generic Grunt file group and then (ii) to built an UI to use this Grunt file without the console. 

How to 
-----

##### install

1. Clone the repository on your computer
2. Install grunt using (for more information, please go to the [grunt page](http://gruntjs.com/getting-started))

```shell
npm install grunt
```

##### use 

Right now you need to use it like a normal **grunt** file (go on the console, select the folder and type grunt in). A good explanation could be found [there](https://24ways.org/2013/grunt-is-not-weird-and-hard/).

The program would right now expect you to work in a **development folder (_src_)** and will have a **target folder (__dir__)**. This can be changed by adapting the variables **source** and  **target**

###### A second word of caution
The program uses the plugin __inlinecss__ which is powerful but might be surprising, especially with links. **Please have a look at your file and adapt it before you kick the htmlmnin**. 

###### A third word of caution
Your files need to be clean (error free) to work with the plugins. So it would be good practice to check the files before sending them through grunt. Here are a couple of helpful links
* [Javascript](http://jshint.com/)
* [HTML](https://validator.w3.org/#validate_by_input)
* [CSS](http://www.css-validator.org/#validate_by_input)


##### adapt
There is a need to adapt the file to your use case. I would advice to select the required tasks in the loading line:
```js
grunt.registerTask('default', ['cssmin', 'imagemin'])
````
Currently I would use the plugin __cssmin__ and __imagemin__


Used grunt plugins (links to their documentation)
-----
The file uses the following plugins
* [grunt-contrib-ccsmin](https://github.com/gruntjs/grunt-contrib-cssmin) to minify css
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) to minify html
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-inline-css](https://github.com/jgallen23/grunt-inline-css) to inline CSS. **Beware of its consequence when using**
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images) to resize images
* [grunt-responsive-images-extender](https://github.com/smaxtastic/grunt-responsive-images-extender) to insert the __srcset__ codes. **will be added later **git 
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) and [grunt-mkdir](https://www.npmjs.com/package/grunt-mkdir) for __folder housekeeping__

The configuration of the plugins will be discussed in the [wiki section](https://github.com/guillaumesimler/gruntmaster/wiki)

Latest Updates (more details on [Github](https://github.com/guillaumesimler/gruntmaster/commits/master))
------

2016 03 07: Finish the first round of plugins installation
2016 03 06: Initialize the project, start to implement the first plugings


Known bugs, improvements and major changes
------
The known bugs are published [here](https://github.com/guillaumesimler/gruntmaster/issues). Should you find a unknown bug, please be so kind to update the issue list. 

The improvements and major changes are discussed on the [Github wiki](https://github.com/guillaumesimler/gruntmaster/wiki)

Used repository 
----
* the [working project](https://github.com/guillaumesimler/gruntmaster) (_git remote **github**_)


License
------
The **current version** follows the [_MIT License_](https://github.com/guillaumesimler/gruntmaster/blob/master/LICENSE.txt) 