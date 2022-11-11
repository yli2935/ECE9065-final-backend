# ECE9065-final-backend

<a id="_6csqhkwat9m3"></a>ECE 9065__ Web __App Development__ Lab \#__4__: Due __Friday__, __Dec__\. __9__, __5__:__00__ pm__

# <a id="_a9s6nipr10du"></a>Deadlines:

1. Submission deadline: Friday, Dec\. 9, 5:00 pm\. Submission closes on Mon\. Dec 12, 5pm\.
2. Demonstration deadline: Friday, Dec 16, 4pm\.

# <a id="_9l32ys4sz8l2"></a>Evaluation

1. Marks are awarded for evidence of credible actions to finish by the due date\. Such actions are measured by functionality completed each week \(as indicated by Git commits\) as well as submission by due date\. 
2. You may work in groups of up to 3\. Same requirements and rubric will apply to all teams regardless of team size\. Each team member must maintain their own repository and code must be contributed using “pull requests”\. Individual contributions will be evaluated by the content of these pull requests\.
3. Late submission penalties TBD\.
4. Demonstrations must be completed before the demo deadline\.
5. A test plan with detailed tests will be provided\. Any test item that is checked must pass the test without any conditions\. During the demonstration, you may request part marks by providing a written request that states what test items fail and the impact that will have on the functionality of that item\. E\.g\. If test items 3\.f\.i, 3\.f\.ii and 3\.f\.iv passes, but 3\.f\.iii fails, what impact would that have on functionality of 3\.f?

# <a id="_2aw0rgwcy2xm"></a>Revision History

# <a id="_1h9l7a4ckcc3"></a>__Objectives:__

1. Apply knowledge of server\-side and client\-side scripting and modern web application frameworks to create a complex web application\.
2. Expose major functionality of the application via a ReSTfull web API\.
3. Develop a client application using a front\-end framework with the above API\.
4. Incorporate 3rd party services to a web application\.
5. Implement an authentication protocol and provide different levels of functionality to authenticated vs\. unauthenticated users\.
6. Implement a client application that works on both mobile as well as a variety of desktop browsers and presents a responsive user interface\.
7. Develop the application in a way that is resistant to malicious exploitation\.
8. Create a security and privacy policy that is publicly accessible\.
9. Create a DMCA notice & takedown policy that is publicly accessible\.
10. Provide a DMCA takedown procedure and tools for the site administrator:
	1. Log requests, notices, and disputes\.
	2. Send a takedown notice for any DMCA requests received and disable display of alleged copyright violations\.

You must use a front\-end framework \(see the list of accepted frameworks at the end\) for front\-end and Node\.js for back\-end implementation\. You may use other libraries and services to implement authentication\. You must disclose all source code that you copy from any source if that code is contained in your submission on Owl\. This disclosure must be in the form of comments above copied code and include a link to the source as well as a summary of what parts are copied\. This disclosure does not apply to any libraries that you use \(e\.g\. in “node\_modules” directory or imported from an external source\)\.

# <a id="_4mho2j15a2ll"></a>Submission Instructions:

Please carefully read the instructions and strictly follow them\. Your grade depends on it\.

1. Ensure that the your repository is named “ece9065\-xxx\-yyy\-zzz\-lab4”\(all lowercase\) where “xxx”, “yyy” and “zzz” are the Western email IDs of team members \(without @uwo\.ca part\)\.
2. Use a proper “__\.gitignore__” file so that only the files that you edit are in your repository\.
3. Copy the output of command “__git log__” for the main repository of your team and paste that onto the submission page \(Assignments section\) on Owl\.
4. Download the main repository of your team as a zip file from Github and submit it on Owl as an attachment\. Please do not zip the folder on your computer as it contains a large amount of extraneous files\. Ensure that libraries, data files, intermediate files or backup folders are not included in the zip file\.
5. Submit a completed test plan on Owl in PDF format including the last commit ID, commit date/time, total points and names and signatures of all team members\. If the completed and signed test plan was not submitted before the demonstration, you will be asked to reschedule the demo\.
6. Submit evidence of individual work \(format and location TBD
7. Submit your individual git repository to [https://classroom\.github\.com/a/isIEBFFu](https://classroom.github.com/a/isIEBFFu) \(See[ detailed instructions](https://docs.google.com/document/d/1T3JkHEyWB4N2CGRVJ7z4B-j_WMKcCsppq2sWb-d-MdQ/edit?usp=sharing)\)\.
8. Demonstrate your lab \(on a public URL\) before the demonstration deadline\. You may set up the public URL after submission on Owl\. As long as the changes only involve deployment issues, it is acceptable\.

Penalties will apply for not following the naming convention or any of the submission steps

# <a id="_5ujhxk18xv90"></a>Description

Develop an enhanced version of the web application developed in lab 3\. Additional features include the ability to create an account, save and edit play\-lists for logged in users, ability to make these play\-lists publicly accessible as well as the ability to add comments/ratings to individual tracks as well as to the play\-list, admin functionality to manage accounts and copyright related tasks\.

Use of Node\.js and a front\-end framework \(see list below\) is required\. Other technologies may include Mongodb and Express or any alternatives that suit you better\.

In case of any ambiguities, conflicting or unclear requirements, you are free to make a choice that is \(a\) sensible from a UI/UX point of view, \(b\) minimises your effort and \(c\) in keeping with the spirit of the application\. It is strongly advised to discuss such assumptions on the “Labs” channel on Teams if you are not sure\. You are also required to document all such decisions using git comments\.

This document may be revised to improve readability or to remove ambiguous, conflicting or unclear requirements\. Please pay attention to the revision statement at the top of this document\.

# <a id="_23lcnxh6cdzk"></a>Design Tip

Keep the number balls you juggle at one time to about 5 so that you are not overwhelmed by the complexity\. E\.g\. Keep the number of objects/concepts/modules that you have to grapple at one time to 5\. At the highest level, you may want to imagine about 5 components that make up the full application\. If these components as well as interactions among them work as intended, then your application should work as intended\. You may call that the architecture of your application\. Then think about the design of each component and apply the same principle\. 

Complexity of an application is not just the number of components, but also the number of interactions between these components\. A system with 5 components where each component interacts with every other component  is more complex than a system with 10 components where each component only interacts with two other components although they both have the same number of interactions\.

# <a id="_n59lfdb6r8kx"></a>Requirements and Rubric

Items marked with 🌈 indicates features that are relatively easier\.

1. Show evidence of planning and credible actions to finish by the due date\. Such actions are measured by functionality completed each week \(as indicated by Git commits\) as well as submission by due date\. \{__Up to 15% of points earned for functionality \+ 5% bonus points__\}
2. Authentication method: \{__total \_\_ points__\}
	1. Provide a local authentication mechanism \(create an account with an email, a password and a name, update password\)\. \{__4 points__\} 
	2. One external authentication mechanism \(e\.g\. Google, Apple, Facebook etc\) that authenticates via a third\-party such as Google, Facebook etc\. \{__2 points__\}
	3. Input validation for email \(proper format\)\. \{__1 points__\} 🌈
	4. Verification of email \(see References\)\. \{__2 points__\}
	5. If the account is marked as deactivated, show a message asking to contact the site administrator and not allow logging in\. \{__1 point__\}
3. Limited functionality for unauthenticated users\. \{__total \_\_ points__\}
	1. Start page showing application name, a short “about” blurb that says what the site offers, and a login mechanism\. \{__2 points__\} 🌈
	2. Interface for searching tracks based on any combination of artist, band, genre or track title\. Search results must show track title and artist name at a glance\. \{__8 points__\}
	3. Expand each search result to view additional information \(e\.g\. band, genre/s, play\-length, year etc\) of each track\. \{__2 points__\} 🌈
	4. A “Play on YouTube” button for each track which launches a YouTube search on a new browser tab for the selected track\. \{__2 points__\} 🌈
	5. Search terms are soft\-matched \(e\.g ignore white\-space, minor spelling variations or mistakes\)\. \{__4 points__\}
	6. List of public play\-lists \(up to 10\) ordered by last modified date and showing name, creator, total play\-time and number of tracks in the list\. \{__3 points__\} 🌈
	7. Ability to expand each play\-list to show the description and the list of tracks each showing track title and artist/band name\. \{__1 point__\} 🌈
	8. Ability to display additional information and a play button for all the tracks in a public play\-list\. \{__3 points__\}
4. Additional functionality for authenticated users: \{__total \_\_ points__\}
	1. Create and show up to 20 named play\-lists of tracks\. Each list must have a unique name \(required\), a description \(optional\), a list of tracks \(required\) and a visibility flag of public or private with the default set to private\. \{__8 points__\}
	2. Clicking on a list shows full information for all the tracks in the list\.  \{__2 points__\}
	3. Edit all aspects of an existing play\-list and record the last edited time\. \{__4 points__\} 🌈
	4. Delete a play\-list\. \{__3 points__\} 🌈
	5. Add a review to any public play\-list\. \{__6 points__\}
5. Administrator functionality related to site maintenance: \{__total \_\_ points__\}
	1. Special user with administrator access\. \{__4 points__\}
	2. Ability to grant site manager privilege to one or more existing users: \{__2 points__\} 🌈
	3. Ability to mark a review as as hidden or clear the “hidden” flag if set:  \{__2 points__\} 🌈
	4. Ability to mark a user as “deactivated” or mark as “active” if deactivated: \{__2 points__\} 🌈
6. Web service API: \{__total \_\_ points__\}
	1. Revise the API developed for lab 3 as necessary to provide required functionality\. \{__6 points__\} 
	2. Build your application using this API\. \{__4 points__\} 🌈
7. Administrator functionality related to copyright enforcement: \{__total \_\_ points__\}
	1. Create a security and privacy policy that is publicly accessible\. \{__2 points__\} 🌈
	2. Create an “acceptable use policy” \(AUP\) that is publicly accessible\. \{__2 points__\} 🌈
	3. Create a DMCA notice & takedown policy that is publicly accessible\. \{__2 points__\} 🌈
	4. Provide a DMCA takedown procedure and tools for the administrator: \{__total 4 points__\}
		1. Document to describe the workflow and usage of tools\. \{__1 point__\} 🌈
		2. Tools to log requests, notices, and disputes\. E\.g\. Set\-up properties for storing “date request received”, “date notice sent”, “date dispute received” for each review and provide an interface to set these properties\. \{__1 point__\}
		3. Tools to hide reviews with alleged copyright or AUP violations\. \{__1 point__\}
		4. Tools to restore displaying of  any contested reviews\. \{__1 point__\}
8. Usability, code quality and other non\-functional requirements:
	1. Insufficient input sanitization including not limiting range \(where applicable\), length and content \(where applicable\) as well as interpreting any user input as HTML, CSS or JavaScript, to safeguard against injection attacks\. \{__up to \-10%  points__\}
	2. Not using JWT for any authorization task\. \{__up to \-10%  points__\}
	3. Not able to handle any user input in any language\. \{__up to \-5%  points__\}
	4. Usability issues of the application on multiple browsers and form factors\. \{__up to \-5% points__\}
	5. Lack of modular code that is easily extensible and maintainable\. \{__up to \-15% points__\}
		1. E\.g\. Changes to operational parameters such as server names, port numbers etc should not cause changes in code\. 
	6. Presence of code duplication\. \{__up to \-5% points__\}
		1. E\.g\. Full URLs that are duplicated in calls to ReST api, copy/paste of code blocks that are mostly similar etc\.
	7. Presence of hard\-coded literals in code\. \{__up to \-5% points__\}
		1. E\.g\. Hard\-coded port numbers, URLs
	8. Lack of sufficient and meaningful comments in code\. \{__up to \-5% points__\}
	9. Not exercising proper precautions in saving user information\. \{__up to \-10% points__\}
		1. Use of sufficiently strong hash algorithms such as BCrypt or Argon2, use of a salt\.
	10. Code management with Git \{__up to \-10% points__\}
		1. Less than 20 commits that are meaningful, no meaningful commit messages
		2. Not using a proper __\.gitignore__ file to ignore external dependencies, 
		3. Not using Git pull to deploy code to the server\.
	11. Logistics \{__up to \-10% points__\}
		1. Repository name not in required format, 
		2. No zip file \(not graded\)
		3. Code is not attached as a zip file or it contains content that is not in the Git repository or is missing content that is in the repository
		4. Test plan is inaccurate or not in PDF format \(not graded\)\.

# <a id="_3izk6o7n5i6n"></a>References

1. Authentication library: [http://www\.passportjs\.org/](http://www.passportjs.org/) or [https://auth0\.com/](https://auth0.com/) 
2. Email verification \(see FAQ\): [https://www\.npmjs\.com/package/email\-verification](https://www.npmjs.com/package/email-verification) 
3. Salted Password Hashing \- Doing it Right: [https://crackstation\.net/hashing\-security\.htm](https://crackstation.net/hashing-security.htm)
4. Responsive design using Angular \- [https://material\.angular\.io/](https://material.angular.io/) 
5. DMCA Demystified: [http://www\.sfwa\.org/2013/03/the\-dmca\-takedown\-notice\-demystified/](http://www.sfwa.org/2013/03/the-dmca-takedown-notice-demystified/)
6. GitHub DMCA policy: [https://help\.github\.com/articles/dmca\-takedown\-policy/](https://help.github.com/articles/dmca-takedown-policy/)
7. Angular Security; [https://angular\.io/guide/security](https://angular.io/guide/security) 

# <a id="_d1ndexlqwtft"></a>Resources

1. Allowed front\-end frameworks are: Angular, React\.
2. Firebase is a good option which provides authentication and database: [https://firebase\.google\.com](https://firebase.google.com)\. Firebase UI, SDK or equivalent library/framework is acceptable for implementing a login mechanism\. Note: Firebase should only be used to provide data storage and/or authentication services\. All other back\-end functionality must be implemented on your own server\.
3. JWT is the required method for implementing authorization and protected routes:
	1. Main site: [https://jwt\.io](https://jwt.io) 
	2. Good tutorial: [https://github\.com/dwyl/learn\-json\-web\-tokens](https://github.com/dwyl/learn-json-web-tokens)
4. Copyright enforcement functionality: See slides 16\-19 of “social issues” unit\.
5. Making pull requests on Github: [Creating a pull request \- Github Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

# <a id="_f7dqx7oady5m"></a>FAQ

1. You will need a developer account for third\-party authentication\. Only one external provider is needed\.  
2. Questions about item 6 \(copyright enforcement\): Please look at the test plan\. You may devise and implement any mechanism to satisfy the tests\. As long as it is part of the application and satisfies the test, it will be accepted\. No automation is needed\. E\.g\. Assume that the site administrator may receive copyright/abuse claims via email\. The administrator only needs to be able to log such requests via the application\.
3. Email verification \(2\.d\) requires the ability to send emails out, which is getting harder due to stricter anti\-spam controls implemented by major service providers\. Because of this, you may implement a mock\-up of the verification step as follows: 
	1. User enters an email address to create a new account\.
	2. An email is crafted that includes a unique link \(eg\. generated from a hash of user information\) that the user is required to click in order to verify the email address\.
	3. Instead of sending this email to the address that the user provided, it is shown on the client\.
	4. When a user visits the unique link \(click or copy\+paste to another browser window\), the address is verified\.
4. Soft\-matching strings using the Dice coefficient: [https://www\.npmjs\.com/package/string\-similarity](https://www.npmjs.com/package/string-similarity)
5. You may use any database\.
6. You may redesign the back\-end API as necessary\. 
7. A mechanism to register users is required\. See 2\.a in requirements\.

# <a id="_5erk24s40bu"></a>Suggested Workflow

Following is a suggested workflow to plan the implementation of this lab\. Some design suggestions are provided only for information and you are not required to follow them\.

1. Read the Requirements section several times until you develop a mental picture of what the application does\.
2. Design a Database structure for the selected database\.
3. Revise the API designed in lab 3 to provide basic functionality\. It is a good idea to designate separate API prefixes for non\-authenticated, regular user and admin categories\. E\.g\. All paths in “/api/secure/” require authentication as a regular user\. Paths in “/api/admin/” require admin privileges\. Paths in “/api/open/” do not require authentication\.
4. Review steps 1\-3 and re\-examine each design decision to verify that it provides the foundation for your current understanding of the requirements\.
5. Implement access control logic first for /api/secure and /api/admin\. 
	1. Implement all the routes first\. Don’t need to implement actual functionality\. E\.g\. log message on console to verify that it receives the request\.
	2. Implement access control for one route in /api/secure\. Each request must present a JWT and this token must be verified by the back\-end functionality\. See slides for “router\.use\(\)” for implementing such common functionality\. 
	3. You may start with a pre\-generated JWT and use a ReST client \(E\.g\. Insomnia\) to test the functionality\.
	4. Implement access control in all remaining routes and ensure that code for access control is not duplicated\.
6. Implement back\-end functionality for a particular feature or a group of connected features and test it with a ReST client\. 
7. Implement front\-end Angular components that use the back\-end functionality developed above\.
8. Keep dependencies between modules to a simple tree\-like structure\.

