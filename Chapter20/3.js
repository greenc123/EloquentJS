/*
A public space on the web
Since the file server serves up any kind of file and even includes the right Content-Type header, 
you can use it to serve a website. Since it allows everybody to delete and replace files, 

ie would be an interesting kind of website: one that can be modified, improved, 
and vandalized by everybody who takes the time to create the right HTTP request.
Write a basic HTML page that includes a simple JavaScript file. 

Put the files in a directory served by the file server and open them in your browser.
Next, as an advanced exercise or even a weekend project, 
combine all the knowledge you gained from this book to build a 

more user-friendly interface for modifying the website—from inside the website.
Use an HTML form to edit the content of the files that make up the website, 
allowing the user to update them on the server by using HTTP requests, as described in Chapter 18.

Start by making only a single file editable. 
Then make it so that the user can select which file to edit. 
Use the fact that our file server returns lists of files when reading a directory.

Don’t work directly in the code exposed by the file server since if you make a mistake, 
you are likely to damage the files there. 
Instead, keep your work outside of the publicly accessible directory and copy it there when testing.
*/

