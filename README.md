# Arla-Frontend
## Here are images of all the pages
***

### Login Page
Made to be simple and beautiful. A random image is populated on the left on each reload of the page. <br> On the right is a button that leads to Auth0's secure google login.
![image](https://user-images.githubusercontent.com/55661677/169355756-df1865a5-d5ee-4326-9843-af3dd12d365b.png)

<br>

### Home Page
Next was going to be the home page where the user will spend most of their time and have an easy way to move around to the rest of the pages. This includes a short summary of their profile on the left with their google image, name and course graduated with the GMIT logo in the background. Below that is their followed interests. Every interest is clickable and redirects them to the respective interest page. <br>
In the middle we have the feed which allows the user to make posts by writing some text in the textfield and hitting enter. This makes a post which is saved to the users profile in the database. The user can see other people’s posts if they are friends. On the right are three hardcoded links to news from GMIT. <br>
At the top we have a header which serves as our navbar throughout the application. This leads us to various places on the website, currently we are at Home and the button to log out is on the very right.

![image](https://user-images.githubusercontent.com/55661677/169356740-b26d1317-27df-49d4-a529-3ec40dad01f9.png)

<br>

### Register Page
This is where the user is going to input their details for their profile. Full name and bio are text fields. Country, Course, and interests are all select lists that the user can pick. The year graduated shows a calendar of all years and has the user pick one. The user cannot register their account unless all details are filled.

![image](https://user-images.githubusercontent.com/55661677/169357208-568dee97-954c-48a0-a678-97a15c0f35b8.png)

<br>

### My Profile Page
My profile page is where the user can see their profile. Their profile page has an edit button where they will be able to change details about themselves.

![image](https://user-images.githubusercontent.com/55661677/169357382-1aaf2931-5941-4186-936d-acfa7d3acfa4.png)

<br>

### Interests List Page
This page showcases all the interests that are available on the application. These are clickable cards that leads the user to that interests respective page.

![image](https://user-images.githubusercontent.com/55661677/169357494-e4db3e93-93c8-432e-8d17-962225900a0d.png)

<br>

### Interest Page
This page shows the interest’s name, it’s bio and the amount of people interested in it. The user can click on the join / leave button to join and leave the interest page. People’s profiles are in cards that are clickable and leads the user to their profile page where they can see their info and send a friend request.

![image](https://user-images.githubusercontent.com/55661677/169357615-a8515613-448e-4e43-8eea-1af125913191.png)

<br>

### Profile Pages
Here are profile pages that are shown across the whole website.

![image](https://user-images.githubusercontent.com/55661677/169357710-75f69596-3405-4a95-bfa6-aeff1ca3e0d6.png)

<br>

### My Course Page
This course page changes based on the user’s graduated course. This is so the page is secure and other people can’t check other courses they haven’t graduated. Just like with the interests page, this shows everyone that graduated and what year.

![image](https://user-images.githubusercontent.com/55661677/169357958-8a6bc772-2e62-4f2a-b832-f521642a9ae6.png)

***

## How to run the project
* Open Command Prompt
* run "git clone https://github.com/Pasha-Akito/Arla-Frontend.git"
* cd into Arla-Frontend
* cd into app
* run "npm install"
* run "npm start"
* Open Command Prompt somewhere else
* run "git clone https://github.com/Pasha-Akito/Arla-BackEnd.git"
* cd into Arla-Backend
* cd into api
* run "npm install"
* Make an .env file with your Neo4j Aura Login credentials
* run "npm start"
* Enjoy the Website!
