Frontend Development Mini Project
=================================

Requirements
============

Before you begin developing please make sure your environment is fully ready, and make sure you forked the project in github. Required stuff,

* Git
* Ruby 1.9+
* Rails 3.2+
* Gem 1.8+
* Slim

Introduction
============

Apart from being a simple RoR project, an ultrafast, simple and logicless template engine called Slim (http://slim-lang.com) is also utilized in this project.

The application consists of a single page which lists a books details. You can find some quotes from the book and you can buy the book in any format you want.

It is indeed a cool project using Rails, having a good MVC architecture with all the Models, Views and Controllers, but nevertheless our boss is not happy with what he saws. He says "We are in the age of Web 3.0, there are tons of pages with all those beautiful colors, graphics and interactivity. Just make this page one of them. Use Html 5, CSS3 where necessary. Make sure it is one of those single page sites having all the content in one place." Apparently he is reading a lot of web development books lately. Being a great designer he also designed the page as he wishes, and just wants to see it in action.

So there we need your help...

Tasks (or What to do to make our boss happy)
============================================

* Convert the design into a web page using Slim and CSS. Don't worry developing in Slim is quite like developing in HTML. There are two screenshots of the design "public/pageall.png" and "public/pagescroll.png". 

"public/pageall.png" is the one to look at. The end result must be identical to the one in that screenshot.

"public/pagescroll.png" is there to show you that the navbar sticks to the top of the page if page is scrolled past it.

* Buttons on the page shouldn't use images if possible.

* There are three main fonts used on the site "SignPainter-HouseScript" for curly fonts, "brandon-grotesque" for bold fonts, and "Arial" for the rest. Proprietary fonts are included in "app/assets/stylesheets" folder as "font.css" and "typekit.css" files.

* There must be two working links on the site, both are on the navbar, "About this BOOK" and "Favorite QUOTES". Clicking on links should scroll the page to the corresponding section.

* Quotes on the "Favorite QUOTES" section must rotate every 4 seconds.

* Choosing CD-AUDIO or Hardcover on the Purchase Box found on left must update the price listed.

* As a bonus, you can implement "View all quotes" button to expand the "Favorite QUOTES" section showing all of the quotes, when clicked.

Notes
=====

* Please fork the project on Github, and make a pull request once you  finished your work on the project.

Links
=====

Here are some links that might be helpful;

* http://slim-lang.com/
* https://github.com/stonean/slim/
* http://rubyonrails.org/
* https://help.github.com/articles/using-pull-requests/
