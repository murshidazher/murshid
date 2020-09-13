
---
title: "Micro-frontend: What, Why and How."
date: 2020-09-11T00:48:32+05:30
draft: true
emoji: ":call_me_hand:"
description: "Developing scalable application with cross-functional teams by extending the microservices idea for frontend development.  "
slug: "microfrontends-what-why-and-how"
url: "microfrontends-what-why-and-how"
tags: ["tag"]
syndicate: "false"
---
 
The frontend development has evolved in an exhilarating phase and with the continuous advancement of web frameworks, we've been able to develop web application which wasn't imaginable tens years ago. Since the first impression of your website experience mostly comes through the first five seconds, a high percentage of the user retention rate is directly associated with the frontend.
 
Its all handy and clean when building a frontend for a small and medium scale project, but if you are working with a large project that too with remote teams which want to improve its performance and need to add new features continually then a single team would be overwhelmed.
 
This is where **Micro-frontend** comes to the rescue, which allows us to slice the application into pieces that multiple teams can work on independently.
 
```
Micro frontends are not a concrete technology. They’re an alternative organizational and architectural approach. That’s why we see a lot of different elements in this chart--like team structure, integration techniques, and other related topics.
```
 
 
 
They also wanted to architect the new system so that multiple teams could work on it independently without stepping on each other’s toes. This parallel feature development was crucial to their plan of digitally expanding their business. We opted for an architecture we called **verticalization**: the establishment of different cross-functional teams that build and evolve a specific area of the shop from database to user interface.
 
The individual team applications were able to work autonomously and only integrated in the frontend.
 
 
### Why
 
This changes when the project’s scope and the team size increases. Suddenly one developer can’t know every edge of the system anymore. Knowledge silos emerge inside your team. Complexity rises--making a change on one part of the system may have unexpected effects on other parts.
Discussions inside the team are more cumbersome.
 
Frederick Brooks described this in the book _The Mythical Man-Month_ back in 1975. At some point, adding new developers to a team does not increase productivity.
 
Projects often are divided into multiple pieces to mitigate this effect. It became fashionable to divide the software, and thereby also the team structure, by technology. We introduced horizontal layers with a frontend team and one or more backend teams. Micro frontends describes an alternative approach. It divides the application into vertical slices. Each slice is built from the database to the user interface and run by a dedicated team.
 
The different team frontends integrate in the customer’s browser to form the final page. This approach is related to the microservices architecture.But the main difference is that a service also includes its user interface. This expansion of the service removes the need for a central frontend team.
 
Here are the three main reasons why companies adopt a micro frontends architecture:
 
- Optimize for feature development --A team includes all skills needed to develop a feature. No coordination between separate frontend and backend teams is required.
- Make frontend upgrades easier --Each team owns its complete stack from frontend to database. Teams can decide to update or switch their frontend technology independently.
- Increase customer focus --Every team ships their features directly to the customer. No pure API teams or operation teams exist.
 
Each system is autonomous, which means it can function even when the neighboring systems are down. Every system has its own data store to achieve this. Additionally, it doesn’t rely on synchronous calls to other systems to answer a request.
 
The vertically arranged teams at the bottom are the core of this architecture. They each produce features in the form of pages or fragments. You can use techniques like SSI or Web Components to integrate them into an assembled page that reaches the customer.
Each team has its area of expertise in which it provides value for the customer.
 
An e-commerce example with three teams. Each team works on a different part of the e-commerce shop and has its mission statement that clarifies their responsibility.
 
we align the teams along the customer journey--the stages a customer goes through when buying something.
 
Team Inspire’s mission, as the name implies, is to inspire the browsing customer and to present products that might be of interest.
 
Team Decide helps in making an informed buying decision by providing excellent product images, a list of relevant specs, comparison tools, and customer reviews.
 
Team Checkout takes over when the customer has decided on an item and guides them through the checkout process.
 
A clear mission is vital for the team. It provides focus and is the basis for dividing the software system.
 
 
specialist teams - People are grouped by different skills or technologies. Frontend developers are working on the frontend; experts in handling payment work on a payment service.
 
A team generates the HTML, CSS, and JavaScript necessary for a given feature. To make life easier, they might use a JavaScript library or framework to do that. Teams don’t share library and framework code. Each team is free to choose the tool that fits best for their use case. Teams can upgrade their dependencies on their own. Team B uses Wonder.js v1.3, whereas Team C already switched to v 1.4.
 
How could you implement this? Each team could build their own pages, serve them from their application, and make them accessible through a public domain. You could connect these pages via links so that the end-user can navigate between them. Voilà--you are good to go, right? Basically, yes. In the real world, you have requirements that make it more complicated.
 
Teams can work autonomously in their field of expertise.
Teams can choose the technology stack that fits best for the job at hand.
The applications are loosely coupled and only integrate in the frontend (e.g., via links).
 
Fragments
 
The concept of pages is not always sufficient. Typically you have elements that appear on multiple pages, like the header or footer. You do not want every team to re-implement them. This is where fragments come in.
 
A page often serves more than one purpose, and might show information or provide functionality that another team is responsible for. In figure 1.6, you see the product page of The Tractor Store. Team Decide owns this page. But not all of the functionality and content can be provided by them.
 
The Recommendations block on the right is an inspirational element. Team Inspire knows how to produce those. The Mini Basket at the bottom shows all selected items. Team Checkout implements the basket and knows its current state. The customer can add a new tractor to the basket by clicking the Buy button. Since this action modifies the basket, Team Checkout also provides this button as a fragment.
 
 
Some fragments might need context information, like a product reference for the Related Products block. Other fragments like the Mini Basket bring their own internal state. But the team that is including the fragment in their code does not have to know about state and implementation details of the fragment.
 
The term frontend integration describes a set of techniques you use to assemble the user interfaces (pages and fragments) of the teams into an integrated application. You can group these techniques into three categories: routing, composition, and communication. Depending on your architectural choices, you have different options to solve these categories.
 
Routing and page transitions
 
Here we are talking about integration on page level. We need a system to get from a page owned by Team A to a page owned by Team B. The solutions can be straightforward. You can achieve this by merely using an HTML link. If you want to enable client-side navigation, which renders the next page without having to do a reload, it gets more sophisticated. You can implement this by having a shared application shell or using a meta-framework like single-spa. We will look into both options in this book.
 
Composition
 
The process of getting the fragments and putting them in the right slots is performed here. The team that ships the page typically does not fetch the content of the fragment directly. It inserts a marker or placeholder at the spot in the markup where the fragment should go.
 
A separate composition service or technique does the final assembly. There are different ways of achieving this. You can group the solutions into two categories:
 
Server-side composition, for example with SSI, ESI, Tailor or Podium
Client-side composition, for example with iframes, Ajax, or Web Components
Depending on your requirements, you might pick one or a combination of both.
 
Communication
 
For interactive applications, you also need a model for communication. In our example, the Mini Basket should update after clicking the Buy button. The Recommendation Strip should update its product when the customer changes the color on the detail page. How does a page trigger the update of an included fragment? This question is also part of frontend integration.
 
Shared topics
 
Though the teams are autonomous and have everything they need, there are some shared topics are essential to address early on in a micro-frontend architecture to ensure a good end result and avoid redundant work.
 
Web performance
 
Because we assemble a page from fragments made by multiple teams, we often end up with more code that our user must download. It’s crucial to have an eye on the performance of the page from the beginning.
 
Design systems
 
To ensure a consistent look and feel for the customer, it is wise to establish a common design system.
 
Sharing knowledge
 
Autonomy is essential, but you don’t want information silos. It’s not productive when every team builds an error-logging infrastructure on their own.
 
Why Microfrontend?
> micro frontend projects have a strong tendency to accept redundancy in favor of more autonomy and higher iteration speeds
- Ellimintates inter-team communitcation waiting time - i.e. In a layered architecture, to implement a new feature we need to communcate with different teams before a feature gets its approval but in a micro-frontend architecture the communication could be easily resolved over a cofffee with the team.
- No more frontend monolith - With micro frontends, the application, including the frontend, gets split into
smaller vertical systems. Each team has its own smaller frontend.
 
Advantages of this vertical splitting is;
Is independently deployable
Isolates the risk of failure to a smaller area
Is narrower in scope and thereby easier to understand
Has a smaller codebase that can help when you want to refactor or replace it
Is more predictable because it does not share state with other systems
 
 
Figure 1.10 In most architectures, the frontend is a monolithic system.
 
 
- Local Descision Making -  autonomy enables them to make the decision and switch horses, they only have to adhere to inner-team conventions (macro-archtecture). i.e. from vanilla javascript to a framework such as Elm (statically typed) to eliminate runtime errors.
 
Downside
As stated, the micro frontends approach is all about equipping autonomous
teams with everything they need to create meaningful features for the customer. This
autonomy is powerful but does not come for free.
 
- Redundancy - Everyone who studies computer science is trained to minimize redundancy in the systems they create, be it the normalization of data in a relational database or the extraction of similar pieces of code into a shared function. The goal is to increase efficiency
and consistency. Our eyes and minds have learned to find redundant code and come
up with a solution to eliminate it.
The reasoning behind this shared-nothing architecture is that the costs associated
with these redundancies are smaller than the negative impacts that inter-team dependencies introduce
 
Having multiple teams side by side that build and run their own stack introduces a
lot of redundancy. Every team needs to set up and maintain its own application server,
build process and continuous integration pipeline, and might ship redundant JavaScript/CSS code to the browser. i.e. A critical bug in a popular library can’t be fixed in one central place. All teams
that use it must install and deploy the fix themselves.
 
- Consistency -i.e. a database should be independent for all teams hence the data should be replicated either using an evet bus or a feed system. this replication can take time, When everything works as expected, we are
talking about delays in the region of milliseconds or seconds, but when something
goes wrong, this duration can be longer. It’s a trade-off that favors robustness over
guaranteed consistency.
 
 
- Heterogeneity - Free technology choice is one of the most significant advantages that micro frontends
introduce, but it’s also one of the more controversial points. Do I want all development teams to have a completely different technology stack? That makes it harder for
developers to switch from one team to another or even exchange best practices
 
- More frontend code - Building fragments that can run in isolation introduces
redundancy.
 
The Two-Pizza Team Rule suggested by Amazon CEO Jeff Bezos is an indicator for a good team size. It says that a team is too big when two large pizzas can’t feed it.  In practice, this means that the perfect team size is between 5 to 10 people.

We could use `iframes` but the drawback outweighs the pros when youre building the frontend using iframes which is customer-facing. Performance, Accessibility, SEO (crawler takes as two pages and not as a single page) and Layout are some of the main issues that occurs when using iframes in composisition.

### Using Ajax

 The developers are aware that the iframe integration has issues, especially when it
comes to semantic structure. Since good search-engine ranking is essential for getting
the word out and reaching new customers, they decide to address this issue in the
upcoming iteration

We can use ajax to compose out pages (With this model, Team Inspire will deliver the recommendations as a fragment—a snippet of HTML) for that we need to do two things,

We have to complete two tasks to make the Ajax integration work:
1 Team Inspire exposes the recommendations as a fragment.
2 Team Decide loads the fragment and inserts it into their DOM.

You create fragments of each part of the components which needs to linked, i.e. `team2/fragment/recommendations/porsche.html`
```
<link href="http://localhost:3002/static/fragment.css" rel="stylesheet" />
<h2>Recommendations</h2>
<div class="recommendations">
...
</div>
```
`team-decide/static/page.js`
```
const element = document.querySelector(".decide_recos");
const url = element.getAttribute("data-fragment");
window
.fetch(url)
.then(res => res.text())
.then(html => {
element.innerHTML = html;
});
```

`team-decide/view.html`
```
...
<aside
class="decide_recos"
data-fragment="http://localhost:3002/fragment/recommendations/porsche"
>
<a href="http://localhost:3002/recommendations/porsche">
Show Recommendations
</a>
</aside>
<script src="/static/page.js" async></script>
</body>
...
```

### Declarative loading with h-include

> The library also comes with extra features like defining timeouts, reducing reflows by bundling the insertion of multiple fragments together, and lazy loading. 

Let’s look at a way to make composition via Ajax even easier. In our example, Team
Decide loads the fragment’s content imperatively by looking up a DOM element, running fetch (), and inserting the resulting HTML into the DOM.
 The JavaScript library h-include provides a declarative approach for fragment loading.5
 Including a fragment feels like including an iframe in the markup. You don’t
have to care about finding the DOM element and making the actual HTTP request.
The library introduces a new HTML element called h-include, which handles everything for you. The code for the recommendations would look like this.

```
<aside class="decide_recos">
<h-include
src="http://localhost:3002/fragment/recommendations/porsche">
</h-include>
</aside>
```
### Advantages of using Ajax calls

1. NATURAL DOCUMENT FLOW - In contrast to iframe, we integrate all content into one DOM. Fragments are now part
of the page’s document flow. The team that includes the fragment does not have to know
the height of the fragment in advance. Whether Team Inspire displays one or three
recommendation images, the product page adapts in height automatically. 

2. SEARCH ENGINES AND ACCESSIBILITY - Even though integration happens in the browser and the fragment is not present in the
page’s initial markup yet, this model works well for search engines

3. PROGRESSIVE ENHANCEMENT - An Ajax-based solution typically plays well with the principles of progressive enhancement.7
 Delivering server-rendered content as a fragment or as a standalone page
doesn’t introduce a lot of extra code. You can provide a reliable fallback in case JavaScript failed or hasn’t executed yet. Architecting for failure is a valuable technique that will increase the robustness of your
application. I recommend checking out Jeremy Keith’s publications8
 for more details
on progressive enhancement. 

Cons

1. ASYNCHRONOUS LOADING - You see the content wiggle a bit before they are loaded this happens because the Javascript loads the content asynchornously, you can make it a block so that once everything is loaded you see the contetn,but this is a bad user experience. We could implement the fragment loading so that it blocks the complete page rendering and only shows the page
when the fragments are successfully loaded. But this would make the overall experience worse, You can solve this using to solve this with server-side composition.

2. SERVER REQUEST REQUIRED - Updating or refreshing an Ajax fragment is as easy as loading it initially. But when you
implement a solution that relies purely on Ajax, this means that every user interaction
triggers a new call to the server to generate the updated markup.  Especially when network conditions are not optimal, the server roundtrip can
get quite noticeable. 

3. NO LIFECYCLE FOR SCRIPTS - Typically a fragment also needs client-side JavaScript. If you want to make something
like a tooltip work, an event handler needs to be attached to the markup that triggers
it. When the outer page updates a fragment by replacing it with new markup fetched
from the server, this event handler needs to be removed first and re-added to the new
markup.
 The team that owns the fragment must know when their code should run. There
are multiple ways to implement this. MutationObserver,9
 annotation via data-* attributes, custom elements, or custom events can help here. But you have to implement
these mechanisms manually. You [can read more here](https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/)

### Front-end proxy: nginx

 Team Decide picked Heroku as a hosting platform and published their
site at https://team-decide-tractors.herokuapp.com/. Team Inspire chose Google
Firebase for hosting. They’ve released their application at https://tractor-inspirations
.firebaseapp.com/. This distributed setup worked flawlessly, but switching domains on
every click is not optimal.

 Ferdinand, the CEO of Tractor Models, Inc., took this request seriously. He decided
that all of the company’s web properties should be accessible from one domain. After
lengthy negotiations, he was able to acquire the domain the-tractor.store.
 The next task for the teams is to make their applications accessible through
https://the-tractor.store. Before going to work, they need to make a plan. A shared
web server is needed. It will be the central point where all requests to https://the
-tractor.store will arrive initially. Figure 3.4 illustrates this concept.

 The server routes all requests to the responsible application. It does not contain
any business logic besides this. This routing web server is often called a frontend proxy.
Each team should receive its own path prefix. The frontend proxy should route all

requests starting with /decide/ to Team Decide’s server. They also require additional
routing rules. The frontend proxy passes all requests starting with /product/ to Team
Decide; the ones with /recommendations/ go to Team Inspire.
 In our development environment, we again use different port numbers instead of
configuring actual domain names. The frontend proxy we will set up listens on port
3000. Table 3.2 shows the routing rules our frontend proxy should implement.

1. The customer opens the URL /product/porsche. The request reaches the
frontend proxy.
2. The frontend proxy matches the path /product/porsche against its routing
table (routing rule lookup). Rule #3 /product/ is a match.
3 The frontend proxy passes the request to Team Decide’s application.
4 The application generates a response and gives it back to the frontend proxy.
5 The frontend proxy passes the answer to the client.

> why Nginx? Nginx for this task. It’s a popular, easy to use, and pretty fast web server.

```
[nginx ] :3000/product/porsche 200
....
[decide ] :3001/decide/static/page.css
[decide ] :3001/decide/static/page.js
[nginx ] :3000/decide/static/page.css 200
[nginx ] :3000/decide/static/page.js 200
[inspire] :3002/inspire/fragment/recommend
....
```

In this log message, we see two entries for each request—one from the team
([decide] or [inspire]) and one from the frontend proxy [nginx]. You can see that
all requests pass through the Nginx. The services create the log entry when they’ve
produced a response. That explains why we always see the team application first and
then the message from Nginx.

Let’s look into the frontend proxy configuration. You’ll need to understand two
Nginx concepts for this:
- Forwarding a request to another server (proxy_pass/upstream)
- Differentiating incoming requests (location)

Nginx’s upstream concept allows you to create a list of servers that Nginx can forward
requests to. The upstream configuration for Team Decide looks like this:
```
upstream team_decide {
server localhost:3001;
}
```

You can differentiate incoming requests using location blocks. A location block has a
matching rule that gets compared against every incoming request. Here’s a location
block that matches all requests starting with `/product/`:

```
location /product/ {
proxy_pass http://team_decide;
}
```

See the `proxy_pass` directive in the `location` block? It advises Nginx to forward all
matched requests to the `team_decide` upstream. You can consult the Nginx documentation11 for a more in-depth explanation, but for now we have everything we need to
understand our `./webserver/nginx.config` configuration file.

`webserver/nginx.conf`
```json
// Registers Team Decide’s application as an upstream called “team_decide”
upstream team_decide {
server localhost:3001;
}
upstream team_inspire {
server localhost:3002;
}
http {
...
server {
listen 3000;
...
// Handles all request starting with /product/ and forwards them to the team_decide upstream
location /product/ {
proxy_pass http://team_decide;
}
location /decide/ {
proxy_pass http://team_decide;
}
location /recommendations {
proxy_pass http://team_inspire;
}
location /inspire/ {
proxy_pass http://team_inspire;
}
}
```

```
In our example, we use a local setup. The upstream points to localhost:3001. But you can put in any address you want here. Team Decide’s upstream might be team-decide-tractors.herokuapp.com. Keep in mind that the web server introduces an extra network hop. To reduce latency, you might want your web and application servers to be located in the same data center. 
```

### Server-side Composition

> In contrast to the Ajax integration, where we fetch fragments asynchronously, one single fragment can slow down the complete page in a server-side integration. On the server, the slowest fragment defines the total response time.

Composition service like Nginx, Varnish, CDN, …

Server-side composition is typically performed by a service that sits between the
browser and the actual application servers.The most significant benefit of server-side integration is that the page is already fully assembled when
it reaches the customer’s browser. You can achieve incredibly good first-page load
speeds that are hard to match using pure client-side integration techniques.


### Composition via Nginx and Server-Side Includes (SSI)

> Server-Side Includes is an old technique. It dates back to the 1990s. Back in the day, people used it to embed the current date into an otherwise static page. 

1 Activate Nginx’s SSI support in the web server’s configuration.
2 Add an SSI directive to their product template. The SSI’s URL must point to
Team Inspire’s existing recommendation endpoint

HOW SSI WORKS
Let’s look at an overview of how SSI processing works. An SSI include directive looks
like this:
```
<!--#include virtual="/url/to/include" -->
```

The web server replaces this directive with the contents of the referenced URL before
it passes the markup to the client.

Figure 4.2 SSI processing inside Nginx

The client requests /product/porsche.
2 Nginx forwards the request to Team Decide because it starts with /product/.
3 Team Decide generates the markup for the product page, including an SSI
directive where the recommendations should be placed, and sends it to Nginx.
4 Nginx parses the response body, finds the SSI include, and extracts the URL
(virtual).
5 Nginx requests its content from Team Inspire because the URL starts with
/inspire/.
6 Team Inspire produces the markup for the fragment and returns it.
7 Nginx replaces the SSI comment on the product page’s markup with the fragments markup.
8 Nginx sends the combined markup to the browser.

The Nginx serves two roles: _request forwarding_ based on the URL path and _fetching_ and _integrating fragments_.

Nginx’s SSI support is disabled by default. You can activate it by putting `ssi on`; in the `server {…}` block of your `nginx.conf`.

```
...
server {
listen 3000;
ssi on;
...
}
```
```
...
<aside class="decide_recos">
<!--#include virtual="/inspire/fragment/recommendations/porsche" -->
</aside>
...
```

The markup is already integrated when it
reaches your customer’s device. Check this by opening "view source" in your browser. 

Granted, delaying all requests by two seconds seems harsh and might not accurately
represent the average connectivity of your customer. But it highlights the dependencies of your resources, also called the **critical path**. It’s essential to give the browser the
information about all crucial parts of the page, like images and styles, as early as possible

Nginx couldn’t connect to Team Inspire’s application, it did not have to wait.
 But in reality, it’s not always that black and white. Sometimes a server accepts new
connections but responds slowly. With the property proxy_read_timeout, you can
configure a timeout after which Nginx categorizes an upstream as non-functional.
The default timeout is 60s, which is pretty high for our use case. We could set the
proxy_read_timeout to 500ms for all requests starting with /inspire/. The maximum
response time both teams agreed upon earlier is 500 milliseconds. The Nginx configuration looks like the following code.

`webserver/nginx.conf`
```
...
location /inspire/ {
proxy_pass http://team_inspire;
proxy_read_timeout 500ms;
}
...
```

### Fallback content

 Nginx has a built-in mechanism to deal with failed includes. The SSI command has
a parameter called _stub_. It lets you define a reference to a block. Nginx uses the content of the block when something goes wrong with the include. We can define the fallback content by wrapping it in block and endblock comments. 

> NOTE The placement in the document does not matter. However, you must define the block before you reference it via the stub.
`team-decide/product/eicher.html`
```
...
<aside class="decide_recos">
<!-- Defining the fallback content as reco_fallback  -->
<!--# block name="reco_fallback" -->
<a href="/recommendations/eicher">
Show Recommendations
</a>
<!--# endblock -->
<!--#include
virtual="/inspire/fragment/recommendations/eicher"
stub="reco_fallback" -->
<!-- Assigning the reco_fallback block as fallback/stub to the includes-->
</aside>
...
```

But you don’t always have a meaningful fallback. In production, it’s common to use an
empty block for content that is optional for the site to work.

```
...
<div class="decide_banner">
<!--# block name="near_you_fallback" --><!--# endblock -->
<!--#include
virtual="/inspire/fragment/near_you/eicher"
stub="near_you_fallback" -->
</div>
```

### Parallel loading

 So SSI processing is a two-step process:
1 Fetching the page markup
2 Fetching all fragments in parallel

The response time for the complete markup, also called time to first byte (TTFB), is
defined by the time it takes to generate the page markup and the time of the slowest
fragment. 

### Nested fragments

> Always try to avoid nesting includes. Every additional level of nesting adds to the load time.

### Deferred loading

It’s often a good practice to use
server-side integration for the essential parts of your page—usually everything in the
upper part (viewport). Additional fragments that are farther down the page or are
optional for your site to work (newsletter signup, promotions) can be lazy-loaded; for
example, via Ajax. Lazy loading reduces the size of the initial markup the client needs
to load and enables the browser to start rendering the page earlier.

If you want the fragment in the initial markup, you specify it as an SSI directive:

```
<div class="banner">
<!--#include virtual="/fragment-a" -->
</div>
```

If you want to lazy-load it, you can omit the include directive and fetch the content
using an Ajax call via client-side JavaScript instead:

```
const banner = document.querySelector(".banner"):
window
.fetch("/fragment-a")
.then(res => res.text())
.then(html => { banner.innerHTML = html; });
```

### Time to first byte and streaming

Let’s look at some optimization techniques a composition service can implement to
speed up the page load time. We’ve seen how Nginx works. It loads the main document and waits until all referenced fragments have arrived. **It sends the response to the client after it has assembled the page**.

 But there are better ways. A **composition service** could start sending the first
chunks of data earlier. It could, for example, send the beginning of the page template
up until the first fragment and then send the remaining chunks as fragments arrive.

This **partial sending** would be beneficial for performance because the browser can start
loading assets and rendering the first parts of the page earlier. The _ESI_ (Edge-Side Includes) mechanism in
`Varnish`, an `Nginx` alternative, works like this. The two steps (loading page and loading fragments) overlap, which can reduce overall load time and
improves time to first byte significantly. **Tailor** and
**Podium**, which both support streaming composition.

Figure 4.7 Different ways a server-side integration solution can handle fragment loading and
markup concatenation internally. The partial sending and streaming approach provides a better
time to first byte. This way, the browser receives the content earlier and can start rendering sooner.

### Edge-Side Includes

Edge-Side Includes, or ESI, is a specification that defines a unified way of markup assembly. Content delivery network providers like Akamai and proxy servers like Varnish,
Squid, and Mongrel support ESI.

Setting it up is similar to setting up Nginx, instead of putting Nginx between the browser and our applications, we could swap it with a Varnish server. An edge side include directive looks like this:

```
<esi:include src="https://tractor.example/fragment" />
```

FALLBACKS
The src needs to be an absolute URL, and it’s also possible to define a link for a fallback URL by adding an alt attribute. This way, you can set up an alternative endpoint
that hosts the fallback content. The associated code would look like this:

```
<esi:include
src="https://tractor.example/fragment"
alt="https://fallback.example/sorry" />
```

TIMEOUTS
Like SSI, standard ESI has no way to define a timeout for individual fragments. Akamai added this feature with their non-standard extensions.4
 There you can add a maxwait attribute. When the fragment takes longer, the service will skip it.

```
 <esi:include
src="https://tractor.example/fragment"
maxwait="500" />

```

TIme to First Byte

The response behavior varies between implementations. Varnish fetches the ESI
includes in series—one after another. Parallel fragment loading is available in the
commercial edition of the software. This version also supports partial sending, which
starts responding to the client early—even when it hasn’t resolved all fragments yet. 

Zalando Tailor
Zalando moved from a monolith to a micro frontends-style architecture with Project
Mosaic. They published parts of their server-side integration infrastructure.Tailor is a
Node.js library that parses the page’s HTML for special fragment tags, fetches the referenced content, and puts it into the page’s markup.

Tailor is available as a package
(node-tailor). You can install it via NPM.

`team-decide/index.js`
```
const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({ templatesPath: './views' });
const server = http.createServer(tailor.requestHandler);
server.listen(3001);
```

An associated template could look like this.

`team-decide/views/product.html`
```
...
<body>
<h1>The Tractor Store</h1>
...
<fragment src="http://localhost:3002/recos" />
</body>
...
```

This example is a simplified version of our product page. Team Decide runs the Tailor
service in their Node.js application. Their Tailor server will handle a call to http://
localhost:3001/product. It uses the ./views/product.html template to generate a
response. Tailor replaces the <fragment … /> tag with the HTML content returned by
the http://localhost:3002/recos endpoint. Team Inspire operates this endpoint.

FALLBACKS AND TIMEOUTS
Tailor has built-in support for handling slow fragments. It lets you define a perfragment timeout like this:

```
<fragment
src="http://localhost:3002/recos"
timeout="500" <!-- Sets a 500 ms timeout for this fragment -->
fallback-src="http://localhost:3002/recos/fallback"
<!-- Tailor loads the fallback content in case of an error or timeout.-->
/>
```

When the loading fails, or the timeout is exceeded, the fallback-src URL gets called
to show fallback content.

TIME TO FIRST BYTE AMD STREAMING
Tailor’s most prominent feature is the support for streaming templates. They send the
result to the browser as the page template (called the layout) is parsed, and fragments
arrive. This streaming approach leads to a good time to first byte. 

ASSET HANDLING
Besides the actual markup, a fragment endpoint can also specify associated styles and
scripts that go with this fragment. Tailor uses HTTP headers for this:

```
$ curl -I http://localhost:3002/recos
HTTP/1.1 200 OK
Link: <http://localhost:3002/static/fragment.css>; rel="stylesheet",
<http://localhost:3002/static/fragment.js>; rel="fragment-script"
Content-Type: text/html
Connection: keep-alive
```

Tailor reads these headers and adds the scripts and styles to the document. Transferring
the references alongside the markup is great and enables optimizations like not referencing the same resource twice and moving all script tags to the bottom of the page.
But Tailor’s implementation makes some assumptions that might not be generally
applicable. Teams must wrap all JavaScript in an AMD module, which will be loaded
by the require.js module loader. You also can’t easily control how the service adds
script and style tags to the markup

### Podium

Finn.no8
 is a platform for classified ads and Norway’s largest website, when ranked by
the number of page views. The company is organized into small, autonomous development teams that assemble their pages out of fragments, which they call **podlets**.
Finn.no released its Node.js-based integration library called Podium9
 at the beginning
of 2019. It takes concepts from Tailor and improves them. In Podium, fragments are
called **podlets**, and pages are **layouts**.

PODLET MANIFEST
Podium’s central concept is the podlet manifest. Every podlet comes with a JSONstructured metadata endpoint. This file contains information like name, version, and
the URL for the actual content endpoint.

> The `podlet manifest` acts as a machine-readable contract between the owner of the podlet and its integrator. 

`http://localhost:3002/recos/manifest.json`
```json
{
"name": "recos",
"version": "1.0.2",
"content": "/", // Endpoint for the actual HTML markup
"fallback": "/fallback", // Cacheable fallback content
// Associated JS and CSS assets
"js": [
{ value: "/recos/fragment.js" }
],
"css": [
{ value: "/recos/fragment.css" }
]
...
}
```

Figure 4.8 Each podlet has its own manifest.json, which contains basic
metadata but can also include references to fallback content and asset files.
The manifest acts as the technical contract between the different teams.


PODIUM’S ARCHITECTURE
Podium consists of two parts:
- The layout library works in the server that delivers the page. It implements everything needed to retrieve the podlet contents for this page. It reads the `manifest.json` endpoints for all used podlets and also implements concepts like caching.
- The podlet library is used by the team, which provides a fragment. It generates a
manifest.json for each fragment.

 Team Decide reads the manifest for the recommendation fragment only once to
obtain all metadata needed for integration. Let’s follow the numbered steps to see the
processing of an incoming request:
1 The browser asks for the product page. Team Decide receives the request
directly.
2 Team Decide needs the recommendation fragment from Team Inspire for its
product page. It requests the podlet’s content endpoint.
Team Inspire responds with the markup for the recommendation. The
response is plain HTML like in the Nginx examples.
4 Team Decide puts the received markup into its product page and adds the
required JS/CSS references from the manifest file. Team Decide’s application
sends the assembled markup to the browser. 


Figure 4.9 illustrates how the libraries work together. Team Decide uses @podium/
layout and registers Team Inspire’s manifest endpoint. Team Inspire implements
@podium/podlet to provide the manifest.

IMPLEMENTATION
We can’t go into full detail on how to use Podium. But we’ll briefly look at the key
parts required to make this integration work.
 Each of the teams creates its own Node.js-based server. We are using the popular
Express10 framework as a web server, but other libraries also work.

`team-decide/package.json`
```
...
"dependencies": {
"@podium/layout": "^4.5.0",
"express": "^4.17.1",
}
...
```

The Node.js code necessary to run the server and configure podiums layout service
looks like this.

``` js
const express = require("express");
const Layout = require("@podium/layout");

/* Configuring the layout service. It’s responsible for
the communication with the podlets. It also sets
HTTP headers and transfers context information.*/
const layout = new Layout({
name: "product",
pathname: "/product",
});



/*Registering the recommendation podlet
from Team Inspire. The application fetches
metadata from the manifest.json. The name
is for debugging and internal reference.*/
const recos = layout.client.register({
name: "recos",
uri: "http://localhost:3002/recos/manifest.json"
});

/* Creating an express instance and attaching
podiums layout middleware to it. */
const app = express();
app.use(layout.middleware());

/* recos is the reference to the podlet we
registered before. .fetch() retrieves the
markup from Team Inspire’s server.*/
app.get("/product", async (req, res) => {
const recoHTML = await recos.fetch(res.locals.podium);

/*Returns the markup for the product
page. The recoHTML contains the plain
HTML returned by the .fetch() call*/
res.status(200).podiumSend(`
...
<body>
<h1>The Tractor Store</h1>
<h2>Porsche-Diesel Master 419</h2>
<aside>${recoHTML}</aside>
</body>
</html>
`);
});
app.listen(3001);
```

Let’s switch teams and look at the code Team Inspire needs to write to implement
their podlet. These are their dependencies.
 
`team-inspire/package.json`
```
...
"dependencies": {
"@podium/podlet": "^4.3.2",
"express": "^4.17.1",
}
...
```
 
And this is the application code.
 
 
```js
const express = require("express");
const Podlet = require("@podium/podlet");
/*Defining a podlet. name, version, and
pathname are required parameters.*/
const podlet = new Podlet({
name: "recos",
version: "1.0.2",
pathname: "/recos",
});
 
const app = express();
app.use("/recos", podlet.middleware());
app.get("/recos/manifest.json", (req, res) => {
res.status(200).json(podlet);
});
 
/*mplementing the route for the actual content.
podiumSend is comparable to express’s normal
send function, but adds an extra version header
to the response. It also comes with a few
features that make local development easier.*/
app.get("/recos", (req, res) => {
res.status(200).podiumSend(`
<h2>Recommendations</h2>
<img src=".../fendt.svg" />
<img src=".../eicher.svg" />
`);
});
 
app.listen(3002);
```


FALLBACKS AND TIMEOUTS
The way Podium handles fallbacks is quite interesting. With the Nginx approach, we
had to define the fallback in the template of the page. With ESI and Tailor, the page
owner can provide a second URL that’s tried when the actual URL does not work. In
Podium it’s a bit different:
 The team that owns the fragment provides the fallback.
 The team including the fragment caches this fallback locally.
These two properties make it much easier to create a meaningful fallback. Team
Inspire could, for example, define a list of "evergreen recommendations" that look
similar to dynamic recommendations. Team Decide caches it and can show it if Team
Inspire’s server does not respond or exceeds a defined timeout.

The code for specifying the fallback in the podlet server looks like this.

`team-inspire/index.js`
```
...
const podlet = new Podlet({
...
pathname: "/recos",
fallback: "/fallback",
});
...
app.get("/recos/fallback", (req, res) => {
res.status(200).podiumSend(`
<a href="http://localhost:3002/recos">
Show Recommendations
</a>
`);
});
...
```
Techniques like SSI and ESI are old, and there is no real innovation happening. But
these downsides are also their biggest strengths. Having an integration solution that is
very stable, boring, and easy to understand can be a huge benefit.

### When does server-side integration make sense?

If good loading performance and search engine ranking are a high priority for your
project, there is no way around server-side integration. Even if you are building an
internal application that does not require a high amount of interactivity, a server-side
integration might be a good fit. 

If your project requires an app-like user interface that can instantly react to user
input, server-side integration is not for you. A pure client-side solution might be easier to implement. But you can also go the hybrid way and build a universal/isomorphic application using both server- and client-side composition. 

### Client-side composition

 In a traditional architecture, we would have built a monolithic frontend that’s tied
to one framework in one specific version. But in a micro frontends architecture, we
want the user interfaces from the different teams to be self-contained and independently upgradable. We can’t rely on the component system of one specific framework.
This constraint would tie the complete architecture to a central release cycle. A framework change would result in a parallel rewrite of the complete frontend. The Web
Components spec introduces a neutral and standardized component model. In this
chapter, you’ll learn how Web Components can act as a technology-agnostic glue
between different micro frontends. They make it possible for independent frontend
applications to coexist on one page, even if their technology stack is not the same.

### Wrapping micro frontends using Web Components

Team Checkout chose to go with client-side rendering for their user interfaces.
They’ve implemented the checkout pages as a single page app (SPA). The Buy-button
fragment is available as a standalone Web Component (see figure 5.2). Let’s see what
this means and how we can integrate the fragment into the product detail page. For
the integration, Team Checkout provides Team Decide with the necessary information. This is the contract between both teams:
#### Buy Button
tag-name: checkout-buy
attributes: sku=[sku]
example: <checkout-buy sku="porsche"></checkout-buy>
Team Checkout delivers the actual code and styles for the checkout-buy component
via a JS/CSS file. Their application runs on port 3003.

#### required JS & CSS assets references
http://localhost:3003/static/fragment.js
http://localhost:3003/static/fragment.css
Team Decide and Team Checkout are free to change the layout, look, or behavior of
their user interfaces as long as they adhere to this contract.

### WEB COMPONENTS AND CUSTOM ELEMENTS
The Web Components spec has been a long time in the making. Its goal is to introduce better encapsulation and enable interoperability between different libraries or
frameworks. At the time of writing this book, all major browsers have implemented
version 1 of the specification. It’s also possible to retrofit the implementation into
older browsers using a polyfill.

Web Components is an umbrella term. It describes three distinct new APIs: Custom Elements, Shadow DOM, and HTML Templates.

Let’s focus on Custom Elements. They make it possible to provide functionality in
a declarative way through the DOM. You can interact with Custom Elements the same
way you would interact with standard HTML elements.

 Let’s look at a typical button element. It has multiple features built-in. You can set
the text shown on the button: <button>hello</button>. It’s also possible to switch
the button into an inactive mode by setting the disabled attribute: <button
disabled>…</button>. By doing this, the button is dimmed out and does not respond
to click events anymore. As a developer, you don’t have to understand what the
browser does internally to achieve this behavior.
 Custom Elements enable developers to create similar abstractions. You can construct new generic representational elements that are missing from the HTML spec.
GitHub has published a list of such controls under the name github-elements.2
 Look
at this “copy-to-clipboard” element:

https://www.webcomponents.org/polyfills
https://www.webcomponents.org/author/github

### WEB COMPONENTS AS A CONTAINER FORMAT

You can also use Web Components to encapsulate business logic. Let’s go back to our
example at The Tractor Store. Team Checkout owns the domain knowledge around
product prices, inventory, and availabilities. Team Decide, owner of the product page,
doesn’t have to know these concepts. Its job is to provide the customer with all product information they need to make a good buying decision. The business logic needed
for the product page is encapsulated in the checkout-buy component.

### DEFINING A CUSTOM ELEMENT

`team-checkout/static/fragment.js`

```js
// Defines an ES6 class for the Custom Element
class CheckoutBuy
extends HTMLElement
{
connectedCallback() {
this.innerHTML = "<button>buy now</button>"; // This function gets called for every Buy button found in the markup and renders a simple button element.
}
}
window.customElements.define("checkout-buy", CheckoutBuy); //Registers the Custom element under the name checkout-buy.
```

The preceding code shows a minimal example of a Custom Element. We have to use
an ES6 class for the Custom Elements implementation. This class gets registered via
the globally available `window.customElements.define` function. Every time the
browser comes across a `checkout-buy` element in the markup, a new instance of this
class gets created. The `this` of the class instance is a reference to the corresponding
HTML element.

You can choose any name you want for your Custom Element. The only requirement
specified in the spec is that it has to contain **at least one hyphen** (-). This way, you
won’t run into future issues when the HTML specification adds new elements.

In our projects we’ve used the pattern [team]-[fragment] (example: checkoutbuy). This way, you’ve established a namespace, avoiding inter-team naming collisions,
and ownership attribution is easy. 

### USING A CUSTOM ELEMENT

Let’s add the component to our product page. The markup for the product page now
looks like this.

`team-decide/product/porsche.html`
```
...
<link
href="http://localhost:3003/static/fragment.css"
rel="stylesheet" />
...
<div class="decide_details">
<checkout-buy sku="porsche"></checkout-buy>
</div>
...
<script
src="http://localhost:3003/static/fragment.js" async>
</script>
```

### PARAMETRIZATION VIA ATTRIBUTES
Let’s make the Buy-button component a bit more useful. It should also display the
price and provide the user with a simple feedback dialog after they have clicked. The
following example shows different prices depending on the specified SKU attribute. For simplicity, we define the prices inside the JavaScript code. In a real application,
you would probably fetch them from an API endpoint, which is owned by the same
team.

`team-checkout/static/fragment.js`
```
const prices = { porsche: 66, fendt: 54, eicher: 58 };
class CheckoutBuy extends HTMLElement {
connectedCallback() {
const sku = this.getAttribute("sku");
this.innerHTML = `
<button type="button">
buy for $${prices[sku]}
</button>
`;
}
}
```

Adding user feedback to the button is also straightforward. We attach a standard
event listener that reacts to click events and shows a success message as an alert.
Again, this is a simplified implementation. In real life, you’d probably persist the cart change to the server by calling an API. Depending on that API’s response, you would show a success or error message. You get the gist. 

```
this.innerHTML = "...";
this.querySelector("button")
.addEventListener("click", () => {
alert("Thank you ♥");
});
```

## Wrapping your framework in a Web Component

In our examples, we use standard DOM APIs like innerHTML and addEventListener.
In a real application, you would probably use higher-level libraries or frameworks
instead. They often make developing more comfortable, and come with features like
DOM diffing or declarative event handling. The Custom Element (this) acts as the
root of your mini-application. This application has its state and doesn’t need other
parts of the page to function.

 Custom Elements introduce a set of lifecycle methods like constructor, connectedCallback, disconnectedCallback, and attributeChangedCallback. When you implement them, you get notified when someone adds your micro frontend to the DOM,
removes it, or changes one of its attributes. It’s straightforward to connect these lifecycle methods to the (de-)initialization code of the framework or library you are working with.  The component hides the implementation details of the specific framework. This way, its owner can change the implementation without
changing its signature.The Custom Element acts as a technology-neutral interface.

Some newer frameworks like Stencil.js3
 already use Web Components as their primary
way to export an application. Angular comes with a feature called Angular Elements.4
This feature will automatically generate the code necessary to connect the app with
the Custom Elements' lifecycle methods, and also supports Shadow DOM. Vue.js provides a similar solution via the official @vue/web-component-wrapper package.5
 Since
Web Components are a web standard, there are comparable libraries or tutorials for
all popular frameworks out there.

### Style isolation using Shadow DOM

Another part of the Web Components spec is Shadow DOM. With Shadow DOM, it’s
possible to isolate a subtree of the DOM from the rest of the page. We can use it to
eliminate the chance of leaked styles, and thereby increase the robustness of our
micro frontend applications.

### Creating a shadow root

You can create an isolated DOM sub-tree via JavaScript by calling `.attachShadow()` on
an HTML element. Most people use Shadow DOM in combination with a Custom Element, but you don’t have to. You can also attach a Shadow DOM to many standard
HTML elements like a `div`.

 Here is an example of how to create and use Shadow DOM:

 ```js
 class CheckoutBuy extends HTMLElement {
    connectedCallback() {
      const sku = this.getAttribute("sku");
      this.attachShadow({ mode: "open" }); // Creating an "open" shadow tree
      this.shadowRoot.innerHTML = "buy ..."; // Writing content to the newly created shadowRoot 
    }
  }
 ```

```
Open versus closed
You can choose between an open and closed mode when creating a Shadow DOM.
Using mode: "closed" hides the shadowRoot from the outside DOM. This guards
against unwanted DOM manipulation via other scripts. But it also prevents assistive
technologies and crawlers from seeing your content. Unless you have special needs,
it’s recommended that you stick to the open mode. 
```

### Scoping styles
Styles that are defined in the Shadow DOM stay in the Shadow DOM.

`team-checkout/static/fragment.js`

```
...
class CheckoutBuy extends HTMLElement {
connectedCallback() {
const sku = this.getAttribute("sku");
this.attachShadow({ mode: "open" });
this.shadowRoot.innerHTML = `
<style>
button {}
button:hover {}
</style>
<button type="button">
buy for $${prices[sku]}
</button>
`;
...
}
...
}
...
```

The _shadow root_ creates a border called the _shadow boundary_. It provides
isolation in both ways. Styles don’t leak out of the component. Styles on the page also
don’t affect the Shadow DOM. This means that global css styles wont affect the styles.

If you’ve used CSS Modules or any other CSS-in-JS solution, this way of writing CSS
should feel familiar. These tools let you write CSS code without having to worry about
scope. They automatically scope your code by generating unique selectors or inline
styles. Shadow DOM makes it possible to have guaranteed style isolation between the
micro frontends of different teams. No conventions or extra toolchain are required. 


### When to use Shadow DOM
Events behave differently when they bubble from the Shadow DOM into the regular DOM (also called Light DOM).

### Communication patterns

There are three forms of UI communications, 


Pre-requsites 

Install Nginx on your machine. 
```
brew install nginx
```

References
https://the-tractor.store/
https://github.com/naltatis/micro-frontends-in-action-code
https://github.blog/2018-09-06-removing-jquery-from-github-frontend/
https://medium.com/@pistenprinz/large-scale-css-refactoring-at-trivago-4602113c4a26
https://www.youtube.com/watch?v=qts9gPYoANU
https://luigi-project.io/ - SAP published a framework11 to integrate different applications
 
DAZN—Micro Frontend Architecture - https://www.youtube.com/watch?v=BuRB3djraeM
 
https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/ - “Spotify engineering culture,
 
https://www.infoq.com/news/2018/08/experiences-micro-frontends/ - uses Experiences Using Micro Frontends at IKEA,


https://swagger.io/specification/
https://mnot.github.io/I-D/json-home/

https://github.com/gustafnk/h-include
https://resilientwebdesign.com/chapter7/

https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/
https://podium-lib.io/docs/podium/conceptual_overview/