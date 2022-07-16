let pagesIndex, searchIndex;
const MAX_SUMMARY_LENGTH = 100;
const SENTENCE_BOUNDARY_REGEX = /\b\.\s/gm;
const WORD_REGEX = /\b(\w*)[\W|\s|\b]?/gm;

const fakeJSON = [
  {
    categories: "Python ; NodeJS ; Web-Scraping ; Personal-Project",
    content:
      "vigorish vigorish is a hybrid Python/Node.js application that scrapes MLB data from mlb.com, brooksbaseball.net and baseball-reference.com. My goal is to capture as much data as possible \u2014 ranging from PitchFX measurements at the most granular level to play-by-play data (play descriptions, substitutions, manager challenges, etc) and individual player pitch/bat stats at the highest level. Requirements  Python 3.6+ Node.js 4+ (Tested with Node.js 11-13) Xvfb AWS account (optional, used to store scraped data in S3)  Since vigorish uses the dataclass decorator, Python 3.6+ is required (dataclass was introduced in Python 3.7, however a backport exists for 3.6). All web scraping is performed by Nightmare, which is a browser automation tool similar to Selenium/PhantomJS. Nightmare is a nodejs module based on Electron/Chromium, requiring Node.js 4+ (I have only tested with versions 11-13). vigorish is designed for a headless environment. In order to run Nightmare/Electron in this environment, you must install xvfb and several dependencies along with nodejs/npm. WARNING Use of vigorish must abide by the terms stated in the license. Also, in order to abide by the guidelines quoted below (from baseball-reference.com), a delay of at least two seconds MUST always occur after a URL is scraped:  Please do not attempt to aggressively spider data from our web sites, as spidering violates the terms and conditions that govern your use of our web sites: Site Terms of Use &hellip; If we notice excessive activity from a particular IP address we will be forced to take appropriate measures, which will include, but not be limited to, blocking that IP address. We thank you in advance for respecting our terms of use.    You may notice that the URL delay time is a configurable setting. This setting must be enabled and the delay time must be greater than two seconds. If the setting is disabled or if you attempt to use a delay of two seconds or shorter, you will be unable to start any scrape job.   Install Prerequisites First, install a recent, stable version of Node.js (i.e., v10-13), along with npm. I&rsquo;ll provide instructions for Ubuntu, but they should be easily adaptable to any Linux-distro. Node.js While you can install Node.js using the default package repository on your system, the versions that are available tend to be outdated. On Ubuntu, you can add a PPA (personal package archive) maintained by NodeSource which always contains the latest versions of Node.js. The command below will download the installation script for the NodeSource PPA containing the latest v12.x version and run the script after it has been downloaded (if you would like to download a different version, simply replace 12.x with 8.x, 10.x, etc.). You must have sudo privileges to execute the installation script: $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - The script will add the NodesSource PPA and update your local package cache. After the package listing is refreshed, install the nodejs package using the command below: $ sudo apt install nodejs The version of node",
    href: "https://aaronluna.dev/projects/vigorish/",
    title: "Vigorish: Hybrid Python/Node.Js Web Scraper"
  },
  {
    categories: "Python",
    content:
      'Introduction Decorators can be a daunting topic when first encountered. While The Zen of Python states &ldquo;There should be one&ndash; and preferably only one &ndash;obvious way to do it&rdquo;, there are many, equally valid ways to implement the same decorator. These different methods can be categorized as either function-based, class-based, or a hybrid of both. In this post I will explain the design and behavior of Python decorators and provide examples of decorators that I frequently use in my own code. What is a Decorator? In Python, absolutely everything is an object, including functions. Since functions are objects, they can be passed as arguments to another function, they can be the return value of a function, and they can be assigned to a variable. If you understand these concepts then you have everything you need to understand decorators. A decorator is any callable object that takes a function as an input parameter. I specifically said &ldquo;callable object&rdquo; rather than &ldquo;function&rdquo; since Python allows you to create other types of callable objects. This interesting language feature is what allows us to create class-based decorators, as we will see shortly. A Simple Decorator Decorators are wrappers that allow you to execute code before and after the &ldquo;wrapped&rdquo; (or &ldquo;decorated&rdquo;) function is executed. By manually constructing a decorator function this &ldquo;wrapping&rdquo; effect can easily be demonstrated. Consider the decorators.basic module given below: 1 2 3 4 5 6 7 8 9 10 11 12 13 14  &#34;&#34;&#34;decorators.basic&#34;&#34;&#34; def simple_decorator(function_to_decorate): def function_wrapper(): print(f&#34;Preparing to execute: {function_to_decorate.__name__}&#34;) function_to_decorate() print(f&#34;Finished executing: {function_to_decorate.__name__}&#34;) return function_wrapper def undecorated_function(): print(&#34;I FORBID you from modifying how this function behaves!&#34;)     Line 2: simple_decorator accepts a function as a parameter, making it a decorator.   Line 3: function_wrapper (defined within simple_decorator) allows us to execute code before and after executing the wrapped function.   Line 5: This print statement will be executed before the wrapped function.   Line 6: The wrapped function is executed within function_wrapper.   Line 7: This print statement will be executed after the wrapped function   Line 9: This is probably the most confusing part. function_wrapper is the return value of the decorator function (simple_decorator). At this point, the wrapped function (function_to_decorate) HAS NOT been executed.   Line 12: We will use this function to demonstrate how simple_decorator works.    Open an interactive Python shell and execute undecorated_function() to see the behavior before applying any decorator. Next, we pass undecorated_function as a parameter to simple_decorator, and store the return value in decorated_function: (venv) decorators $ python Python 3.7.6 (default, Jan 19 2020, 06:08:58) [Clang 11.0.0 (clang-1100.0.33.8)] on darwin Type "help", "copyright", "credits" or "license" for more information.  from decorators.basic import *   undecorated_function() I FORBID you from modifying how this function behaves!  decorated_function = simple_decorator(undecorated_function)   Please note the difference between calling a function (undecorated_function()) and passing a function as a parameter to another function (simple_decorator(undecorated_function)). If we had executed simple_decorator(undecorated_function()),',
    href: "https://aaronluna.dev/blog/intro-to-python-decorators/",
    title: "An Introduction to Decorators in Python"
  },
  {
    categories: "svelte ; Javascript ; Personal-Project",
    content:
      "I am currently teaching myself svelte and I have enjoyed pretty much everything about it. I decided to create a simple application that encodes ASCII text or hex strings to base64, and vice-versa. In order to take advantage of svelte&rsquo;s strengths, the application contains reactive UI components to help illustrate the encoding process. Launch App View Github Repo  I deployed this project to Netlify (click the Launch App button above to open the application in a new tab/window). I also included a button to view/fork the project with codesandbox (below), please feel free to log a github issue if you find any bugs. Thank you!   Base64 Encoder/Decoder  Input/output strings displayed in hex, decimal, binary, and base64 to demonstrate how input bytes are encoded to base64. Mouseover/touch any part of the Hex/Base64 output to highlight all related bit groups and the matching base64/ASCII characters in the Lookup Tables. Hex strings must contain only numbers and/or upper and lowercase hex digits (a-f, A-F, 0-9). Hex strings can be prefixed by &ldquo;0x&rdquo;, but this is not required.  e.g., 0xFE and FE both represent the value 254 and both will produce the same output when encoded to base64   Encoded strings must be valid base64 (standard) or base64url (url/filename safe) values If a decoded string is composed entirely of ASCII-printable characters, it will be rendered as text. If a decoded string contains a single byte that is outside of the range of ASCII-printable characters (0x20 - 0x7E), the entire string will be rendered as hex digits.  CSS Preprocessing &amp; Rollup Config  Svelte 3 + Svelma integrated via svelte-preprocess.  Svelma is a set of UI components for Svelte based on the Bulma CSS framework.   Bulma/FontAwesome 5 integrated via node-sass SASS/SCSS files are bundled and copied to public/build folder (node-sass, postcss/cssnano). FontAwesome font files are copied from from node_modules folder to public/webfonts folder. When building for production, bundled CSS and JS files are minified. resolve, commonjs, and terser rollup plugins configured.  Tests  Cypress E2E tests created for basic encode/decode scenarios. 5 test cases are each executed with 4 different screen types/orientations. Input and expected output for both ASCII and Hex strings taken directly from the Examples and Illustrations and Test Vectors sections of RFC4648 which is the original specification for Base64 and other print-safe binary encodings. Github action configured to run all Cypress tests on each push to master branch, build is deployed only if all tests pass.   Sorry, your browser doesn't support embedded videos, but don't worry, you can download it and watch it with your favorite video player!  Automated Cypress Tests (4 Tests on 2 Screen Sizes Shown)    ",
    href: "https://aaronluna.dev/projects/svelte-app-base64/",
    title: "My First Svelte Application: Base64 Encoder/Decoder"
  },
  {
    categories: "Hugo ; JavaScript",
    content:
      'Hugo includes a built-in syntax-highlighter called Chroma. Chroma is extremely fast since it is written in pure Go (like Hugo) and supports every language I can think of. Chroma&rsquo;s speed is especially important since syntax highlighters are notorious for causing slow page loads. However, it lacks one vital feature \u2014 an easy way to copy a code block to the clipboard. I decided to document my implementation using only vanilla JS (every blog post I found for this issue relied on jquery to parse the DOM, which is completely unnecessary at this point). The finished product can be seen/modified with the codepen below: See the Pen Add Copy Button to Chroma (Hugo) Code Blocks by Aaron Luna (@a-luna) on CodePen.  A quick search led me to this post on Danny Guo&rsquo;s blog. I used his example as my starting point but made several changes:  The "copy" button is placed within the code block rather than outside it. Instead of polyfilling the Clipboard API, my implementation falls back to using document.execCommand("copy") if it is unsupported. "Copy" buttons are only added to code elements that are generated by Chroma.  The Hugo highlight shortcode accepts a line-nos parameter. If line-nos is not specified or line-nos=inline, the rendered HTML has this structure: &lt;div class=&#34;highlight&#34;&gt; &lt;pre class=&#34;chroma&#34;&gt; &lt;code class=&#34;language-xxxx&#34;&gt; (the code we wish to copy) &lt;/code&gt; &lt;/pre&gt; &lt;/div&gt; If line-nos=table, the HTML is slightly more complicated: &lt;div class=&#34;highlight&#34;&gt; &lt;div class=&#34;chroma&#34;&gt; &lt;table class=&#34;lntable&#34;&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td class=&#34;lntd&#34;&gt; (line numbers are rendered here) &lt;/td&gt; &lt;td class=&#34;lntd&#34;&gt; &lt;pre class=&#34;chroma&#34;&gt; &lt;code class=&#34;language-xxxx&#34;&gt; (the code we wish to copy) &lt;/code&gt; &lt;/pre&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;/div&gt; &lt;/div&gt; I use the version with line numbers much more often than the version without, so it is important to me to support both. I decided to place the button inside the &lt;div class=&quot;highlight&quot;&gt; element. Stacking elements on top of one another requires positioning and assigning z-index values, which you can see below along with the styling for the &ldquo;copy&rdquo; button: .highlight-wrapper { display: block; } .highlight { position: relative; z-index: 0; padding: 0; margin: 0; border-radius: 4px; } .highlight &gt; .chroma { color: #d0d0d0; background-color: #212121; position: static; z-index: 1; border-radius: 4px; padding: 10px; } .chroma .lntd:first-child { padding: 7px 7px 7px 10px; margin: 0; } .chroma .lntd:last-child { padding: 7px 10px 7px 7px; margin: 0; } .copy-code-button { position: absolute; z-index: 2; right: 0; top: 0; font-size: 13px; font-weight: 700; line-height: 14px; letter-spacing: 0.5px; width: 65px; color: #232326; background-color: #7f7f7f; border: 1.25px solid #232326; border-top-left-radius: 0; border-top-right-radius: 4px; border-bottom-right-radius: 0; border-bottom-left-radius: 4px; white-space: nowrap; padding: 4px 4px 5px 4px; margin: 0 0 0 1px; cursor: pointer; opacity: 0.6; } .copy-code-button:hover, .copy-code-button:focus, .copy-code-button:active, .copy-code-button:active:hover { color: #222225; background-color: #b3b3b3; opacity: 0.8; } .copyable-text-area { position: absolute; height: 0; z-index: -1; opacity: .01; } Did you notice that the CSS includes a selector for a highlight-wrapper class that is not present in the HTML structure generated by Chroma? We will create this element and append the positioned elements as a child',
    href:
      "https://aaronluna.dev/blog/add-copy-button-to-code-blocks-hugo-chroma/",
    title: "Hugo: Add Copy-to-Clipboard Button to Code Blocks with Vanilla JS"
  },
  {
    categories: "Python",
    content:
      "In a previous post, I presented a C# Result class that represents the outcome of an operation. This class is intended to be used for error handling as an alternative to throwing and handling exceptions. I was introduced to this concept by a post from the Enterprise Craftsmanship blog. I recommend reading the entire post, which is part of a series examining how principles from Functional Programming can be applied to C#. I thought it would be interesting to implement the Result class in Python, and since Python is dynamically-typed this ended up being much simpler than the C# implementation which required the use of generic types. The entire implementation is given below: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49  &#34;&#34;&#34;app.util.result&#34;&#34;&#34; class Result(): &#34;&#34;&#34;Represents the outcome of an operation. Attributes ---------- success : bool A flag that is set to True if the operation was successful, False if the operation failed. value : object The result of the operation if successful, value is None if operation failed or if the operation has no return value. error : str Error message detailing why the operation failed, value is None if operation was successful. &#34;&#34;&#34; def __init__(self, success, value, error): self.success = success self.error = error self.value = value @property def failure(self): &#34;&#34;&#34;True if operation failed, False if successful (read-only).&#34;&#34;&#34; return not self.success def __str__(self): if self.success: return f&#39;[Success]&#39; else: return f&#39;[Failure] &#34;{self.error}&#34;&#39; def __repr__(self): if self.success: return f&#34;&lt;Result success={self.success}&gt;&#34; else: return f&#39;&lt;Result success={self.success}, message=&#34;{self.error}&#34;&gt;&#39; @classmethod def Fail(cls, error): &#34;&#34;&#34;Create a Result object for a failed operation.&#34;&#34;&#34; return cls(False, value=None, error=error) @classmethod def Ok(cls, value=None): &#34;&#34;&#34;Create a Result object for a successful operation.&#34;&#34;&#34; return cls(True, value=value, error=None)   The Result class encapsulates all information relevant to the outcome of an operation. For example, let&rsquo;s say that we have a Result instance named result. If the operation which result represents failed, result.success will be False and result.error will contain a string detailing why the operation failed. If the operation succeeded, result.success will be True (result.error will be None). If the operation produced any output, this will be stored in result.value (an operation is not required to produce an output). Result objects are not intended to replace exception handling in all scenarios, and the author of the EC blog provides a simple rule to determine when each should be used:  Use a Result object for expected failures that you know how to handle. Throw an exception when an unexpected error occurs.  To demonstrate how the Result class should be used, the function decode_auth_token in module app.util.auth validates an access token in JWT format. Please note the highlighted line numbers: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19",
    href: "https://aaronluna.dev/blog/error-handling-python-result-class/",
    title: "Error Handling in Python: Result Class"
  },
  {
    categories: "DevOps",
    content:
      "If you create Heroku apps, you know that the only built-in options for deployment are 1) the Heroku CLI or 2) integration with a github repo. If you don&rsquo;t want your application&rsquo;s code to be publicly accessible, this results in a tedious routine of manually pushing your changes to Heroku. With Azure DevOps, you can create flexible build pipelines to automate various tasks: running tests, creating binaries, publishing artifacts, etc. In this post, I will go through the steps to create a simple build pipeline that automatically pushes the latest code to Heroku when changes are committed to a Azure DevOps repo. Creating a New Build Pipeline Creating a project in Azure DevOps gives you more than a private git repository. With Build Pipelines, you can quickly create a CICD process. Navigate to your project&rsquo;s build piplelines by clicking on the blue rocketship icon. If you have never created a build pipeline for this project, you will be directed to create one as shown in Figure 1. Otherwise, select New -&gt; New build pipeline as shown in Figure 2:   Figure 1 - First build pipeline      Figure 2 - New build pipeline     First, you must select the repository that contains your heroku app. Leave Azure Repos Git selected and choose the repo from the dropdown list. Then, click Continue (Figure 3):   Figure 3 - Select a source repository   Next, you are asked to select a template. You can find templates for many technologies/tools, but since we are creating a simple CD process, scroll to the bottom and select Empty pipeline (Figure 4):   Figure 4 - Select a Template   You should see the empty pipeline shown in Figure 5. Notice that you are currently viewing the Tasks section of the pipeline. Change the name to &ldquo;Deploy to Heroku&rdquo; or anything else you like. You can leave the value for Agent pool as Hosted VS2017:   Figure 5 - Empty pipeline   Enabling Continous Integration Currently, this pipeline is not configured to run in response to any trigger. In fact, it will never run unless you setup a schedule or enable continuous integration. To do so, Click Triggers and select the checkbox for Enable continuous integration as shown in Figure 6.   Figure 6 - Trigger settings   Now this pipeline will run whenever a commit is made to the master branch of your repo. You can make this behavior more fine-grained if you wish, by selecting a different branch or adding a path filter in the Branch Filters section. Obtaining a Heroku API Token In order to make code changes to your Heroku app, you must authenticate yourself. Normally this is handled for you by the Heroku CLI. When you first run heroku login an API token is generated and stored in a ~/.netrc file on your machine. To see the value of your API token, you can run",
    href: "https://aaronluna.dev/blog/continuously-deploy-heroku-azure-devops/",
    title: "How to Continuously Deploy a Heroku App with Azure DevOps"
  },
  {
    categories: "AWS ; DevOps",
    content:
      "Build automation is a foundational concept within the culture of Continuous Delivey and DevOps. Implementing a successful build automation strategy can dramatically improve product quality and produce time savings in several areas. Packer is a powerful build automation tool that is relatively simple to integrate with your team&rsquo;s workflow. The official website describes packer as follows: Packer is an open source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant, creating machine images for multiple platforms in parallel. Packer does not replace configuration management like Chef or Puppet. In fact, when building images, Packer is able to use tools like Chef or Puppet to install software onto the image.  Installing packer is simple, visit this page for instructions as well as download links for all platforms. The packer template shown in this post builds an Amazon EC2 image, so create an account if you do not already have one. The image will use a t2.micro instance, which qualifies for the free-tier.   If your account is not elibigle for the free-tier or you have used the maximun number of EC2 hours for the current month, you can incur actual costs as a result of using these examples (The accumulated costs should be relatively minor, less than a dollar or a few dollars if you launch an instance and leave it running for a month).   I am warning you with peace and love, I am not responsible for any charges that are generated. If you are not comfortable with setting up an AWS account (credit card is required, even for the free-tier), I will be doing a follow-up post that uses Vagrant and Ansible to build VirtualBox images. Packer Template Format Before we begin, let&rsquo;s define the components that make up a packer template in order to understand the role each component performs in the process of creating a machine image (The definitions below are copied from https://www.packer.io/docs/templates/index.html): A template is a JSON object that has a set of keys configuring various components of Packer. The available keys within a template are listed below. Along with each key, it is noted whether it is required or not.  builders (required) is an array of one or more objects that defines the builders that will be used to create machine images for, and configures each of those builders. variables (optional) is an object of one or more key/value strings that defines user variables contained in the template. If it is not specified, then no variables are defined. provisioners (optional) is an array of one or more objects that defines the provisioners that will be used to install and configure software for the machines created by each of the builders. If it is not specified, then no provisioners will be run. post-processors (optional) is an array of one or more objects that defines the various post-processing steps to take with the",
    href: "https://aaronluna.dev/blog/packer-template-aws-ec2-ubuntu-nginx/",
    title: "Packer Template: Amazon EC2 Ubuntu AMI with Latest NGINX"
  },
  {
    categories: "DevOps",
    content:
      "When I began learning about DevOps software and processes, it seemed like there were numerous tools that accomplished the same task, or nearly the same task without a clear consensus opinion on the best toolchain and workflow. I quickly discovered that there isn&rsquo;t a single, correct answer, mostly due to the nature of open-source software. The Periodic Table of DevOps Tools is a crowdsourced website that nicely illustrates the current landscape:   Figure 1 - Periodic Table of DevOps Tools   Anyone can cast votes for their favorite set of tools or recommend a tool that isn&rsquo;t listed in the table, and the table is regularly updated to reflect changes in the vote total. There are several interesting discussions in the comments below the table regarding the website&rsquo;s methodology, which helped me understand how various tools are related to one another and which are highly-regarded within each category. Also, each tool is labeled according to it&rsquo;s pricing model (Open Source, Free, Fremium, Paid, Enterprise). It&rsquo;s hard to miss the fact that the majority of DevOps tools are Open Source or Free software. ",
    href: "https://aaronluna.dev/blog/periodic-table-of-devops-tools/",
    title: "The Periodic Table of DevOps Tools"
  },
  {
    categories: "dotnet",
    content:
      "Let&rsquo;s finish off the NetworkUtilities class from the previous post with a set of methods that retrieve the private (local) and public (external) IP addresses of the local machine. All source files can be downloaded individually as .cs files or as a single zip file containing the entire class at the gist link below: Network Utilities: IP Parsing/Retrieving (C&#35; .NET Core 2.0) [gist.github.com]  Retrieve Local IP Address (Requires Internet) The method below, GetLocalIPv4AddressRequiresInternet, retrieves the local IP address, and does so in a fairly clever way (IMHO). Internet access is required because the method uses a System.Net.Socket object to connect to Google&rsquo;s Public DNS service. When the connection is made, the Socket&rsquo;s LocalEndPoint property contains the local IP address of our machine. Our goal of retrieving the local IP address is handled, essesntially, with just 2 lines of code: namespace AaronLuna.Common.Network { using System.Net; using System.Net.Sockets; public static partial class NetworkUtilities { public static IPAddress GetLocalIPv4AddressRequiresInternet() { var localIp = IPAddress.None; try { using (var socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, 0)) { // Connect socket to Google&#39;s Public DNS service  socket.Connect(&#34;8.8.8.8&#34;, 65530); if (!(socket.LocalEndPoint is IPEndPoint endPoint)) { throw new InvalidOperationException($&#34;Error occurred casting {socket.LocalEndPoint} to IPEndPoint&#34;); } localIp = endPoint.Address; } } catch (SocketException ex) { // Handle exception  } return localIp; } } } Retrieve Local IP Address Without Internet We have to do a bit more work if we decide that relying on an external service is not an option. Obviously, if there is only a single network adapter on our machine the task is easier but this is often not the case. So, where do we start in this scenario? The System.Net.NetworkInformation namespace contains the static method NetworkInterface.GetAllNetworkInterfaces which returns an array of objects describing every network interface available on the current computer. Then, with this information and a LINQ query, I create a list containing all local IPv4 addresses. You may have noticed that GetLocalIpAddressNoInternet requires a string parameter named localNetworkCidrIp. This is the LAN configuration in CIDR notation. If you are unfamiliar with CIDR notation or basic networking concepts, please read this helpful article from DigitalOcean. In the previous post I explicitly walked through the process of checking if an IP address exists within the address space defined by a CIDR block. This process is implemented by the IpAddressIsInCidrRange method. Each local IP address is checked to see if it exists within the LAN specified by the cidrMask, and the first matching address is returned as the local IP address: namespace AaronLuna.Common.Network { using System.Collections.Generic; using System.Linq; using System.Net; using System.Net.NetworkInformation; using System.Net.Sockets; public static partial class NetworkUtilities { // This method uses the address range defined by localNetworkCidrIp to  // determine which local IP should be used. The CIDR IP must be in correct  // format: a.b.c.d/n. For example, if your LAN is setup to allow 254 hosts  // and the router&#39;s address is 192.168.2.1, the correct value for  // localNetworkCidrIp would be &#34;192.168.2.0/24&#34;  public static",
    href: "https://aaronluna.dev/blog/csharp-retrieve-local-public-ip-address/",
    title:
      "Network Utility Methods Part 2: Retrieving Local and Public IP Addresses"
  },
  {
    categories: "dotnet",
    content:
      "While creating the TPL Socket extension methods, I ended up with a library of networking functions and IP address parsing/retrieving methods. If you would like to download individual .cs files or a zip file containing the entire library, you can do so at the github link below: Network Utilities: IP Parsing/Retrieving (C&#35; .NET Core 2.0) [gist.github.com] This library targets the .NET Core 2.0 framework and therefore can be used on Windows, MacOS and any Linux system where the framework is installed. All methods are explicitly designed for IPv4 addresses and return (or accept as parameters) System.Net.IPAddress objects. IPv4 Parsing The first method, ParseSingleIPv4Address is less useful than the rest of the library since it requires the input string to already be in proper IPv4 format, &ldquo;a.b.c.d&rdquo;. I am presenting it first because other methods in the library which process unformatted text eventually call ParseSingleIPv4Address to produce a System.Net.IPAddress object. This method calls string.Split on the input string to produce 4 substrings containing the IP address bytes, each byte is validated to ensure it is within the allowed range (0,255). Conveniently, the IPAddress class contains a constructor that accepts a byte array. This constructor is used to produce the IPAddress object represented by the input string. namespace AaronLuna.Common.Network { using System; using System.Linq; using System.Net; public static partial class NetworkUtilities { public static IPAddress ParseSingleIPv4Address(string input) { if (string.IsNullOrEmpty(input)) { throw new ArgumentException(&#34;Input string must not be null&#34;, input); } var addressBytesSplit = input.Trim().Split(&#39;.&#39;).ToList(); if (addressBytesSplit.Count != 4) { throw new ArgumentException(&#34;Input string was not in valid IPV4 format \\&#34;a.b.c.d\\&#34;&#34;, input); } var addressBytes = new byte[4]; foreach (var i in Enumerable.Range(0, addressBytesSplit.Count)) { if (!int.TryParse(addressBytesSplit[i], out var parsedInt)) { throw new FormatException($&#34;Unable to parse integer from {addressBytesSplit[i]}&#34;); } if (0 &gt; parsedInt || parsedInt &gt; 255) { throw new ArgumentOutOfRangeException($&#34;{parsedInt} not within required IP address range [0,255]&#34;); } addressBytes[i] = (byte)parsedInt; } return new IPAddress(addressBytes); } } } The next method parses all IPv4 addresses from a block of text using a regular expression. Each match is then fed into ParseSingleIPv4Address to produce a list of IPAddress objects. This method is much more useful than the previous since it accepts any text and produces a list of IPAddress objects. namespace AaronLuna.Common.Network { using System; using System.Collections.Generic; using System.Net; using System.Text.RegularExpressions; public static partial class NetworkUtilities { public static List&lt;IPAddress&gt; ParseIPv4Addresses(string input) { const string ipV4Pattern = @&#34;(?:(?:1\\d\\d|2[0-5][0-5]|2[0-4]\\d|0?[1-9]\\d|0?0?\\d)\\.){3}(?:1\\d\\d|2[0-5][0-5]|2[0-4]\\d|0?[1-9]\\d|0?0?\\d)&#34;; if (string.IsNullOrEmpty(input)) { throw new ArgumentException(&#34;Input string must not be null&#34;, input); } var ips = new List&lt;IPAddress&gt;(); try { var regex = new Regex(ipV4Pattern); foreach (Match match in regex.Matches(input)) { var ip = ParseSingleIPv4Address(match.Value); ips.Add(ip); } } catch (RegexMatchTimeoutException ex) { // Handle exeption  } return ips; } } } Verify IP Address In CIDR Range Another common scenario is checking if an IP address exists within a range defined in CIDR format. If you are unfamiliar with CIDR notation or networking concepts such as netmasking, read this helpful primer. One way to check if an IP address exists within a",
    href:
      "https://aaronluna.dev/blog/csharp-parse-ip-address-check-cidr-range/",
    title:
      "Network Utility Methods Part 1: Parsing IP Addresses, Handling CIDR Ranges and Netmasks"
  },
  {
    categories: "dotnet",
    content:
      "The Task-based Asynchronous Pattern (TAP) is the recommended way to write asynchronous code for .NET applications. As I explained in my last post, TAP is intended to replace the Asynchronous Programming Model (APM) and the Event-based Asynchronous Pattern (EAP), however many classes in the .NET framework still use these older patterns. Fortunately, these can be turned into TAP-style &ldquo;awaitable&rdquo; methods with relative ease. By doing so, you reap the benefits that come from working with Task (and Task) objects. In this post, I will convert a set of APM-style methods from the System.Net.Sockets namespace to TAP methods and provide an end-to-end example of how to use them in a generic TCP socket server. All of the code examples in this post can be downloaded as individual .cs files at my gist link below: Task-based Socket Extension Methods (C&#35; TPL) [gist.github.com] I&rsquo;ll go through the various Socket methods in the order they would occur for a simple scenario: Connect to a remote host and send a short text message that is received and read by the server over TCP. This code also uses a Result object for all return values. The code for the Result class will also be covered. Connect We begin with the assumption that a remote end point exists, defined by an IP address and port number, that is bound and listening for incoming connetions with a TCP socket. We will refer to this side of our example as the server. The other side which attempts to connect to this end point by calling ConnectWithTimeoutAsync will be refered to as the client. ConnectWithTimeoutAsync is an extension method that wraps the BeginConnect/EndConnect methods of the Socket class and returns a Task object: namespace AaronLuna.TplSockets { using System; using System.Net.Sockets; using System.Threading.Tasks; using AaronLuna.Common.Result; public static partial class TplSocketExtensions { public static async Task&lt;Result&gt; ConnectWithTimeoutAsync( this Socket socket, string remoteIpAddress, int port, int timeoutMs) { try { var connectTask = Task.Factory.FromAsync( socket.BeginConnect, socket.EndConnect, remoteIpAddress, port, null); if (connectTask == await Task.WhenAny(connectTask, Task.Delay(timeoutMs)).ConfigureAwait(false)) { await connectTask.ConfigureAwait(false); } else { throw new TimeoutException(); } } catch (SocketException ex) { return Result.Fail($&#34;{ex.Message} ({ex.GetType()})&#34;); } catch (TimeoutException ex) { return Result.Fail($&#34;{ex.Message} ({ex.GetType()})&#34;); } return Result.Ok(); } } }  Note that this method requires a timeout value. The timeout behavior is achieved through use of Task.WhenAny. Since the same timeout behavior has been applied to all of the socket methods (where appropriate) let&rsquo;s take a closer look at how this is done: if (connectTask == await Task.WhenAny(connectTask, Task.Delay(timeoutMs)).ConfigureAwait(false)) { await connectTask.ConfigureAwait(false); } else { throw new TimeoutException(); }  We pass 2 tasks into Task.WhenAny: connectTask and Task.Delay(timeoutMs). Whichever one of these tasks completes first will be returned. Let&rsquo;s say timeoutMs = 5000, which is a timeout value of five seconds. If the task returned from Task.WhenAny is connectTask, the connection was successful and we await the result. However if connectTask is not returned, that means our socket was unable to connect to the endpoint after trying for five seconds and a TimeoutException is",
    href: "https://aaronluna.dev/blog/csharp-tpl-socket-methods/",
    title: "Task-based Socket Extension Methods (C# TPL)"
  },
  {
    categories: "dotnet",
    content:
      "C# classes contain a mixture of three asynchronous patterns:  Asynchronous Programming Model (APM) uses the IAsyncResult interface and requires async methods to be defined as BeginProcess and EndProcess methods (e.g., &lt;code&gt;BeginSend&lt;/code&gt;/&lt;code&gt;EndSend&lt;/code&gt; methods for asynchronous Socket send operations). Event-based Asynchronous Pattern (EAP) was introduced with .NET Framework 2.0 and requires that asynchronous method names end with &quot;Async&quot; and uses event types, delegates, and custom EventArgs classes. Task-based Asynchronous pattern (TAP) was introduced in .NET Framework 4.0 and Microsoft recommends that you use TAP for new projects. TAP uses Task-objects and only requires a single asynchronous method which can be &ldquo;awaited&rdquo;, in contrast to APM and EAP which require more than one method to achieve asynchrony. Like EAP, you should end your TAP method names with &ldquo;Async&rdquo;.  However, if you must use APM instead of TAP, do not mix async/await code with code which calls Task.Result and Task.Wait(), your code must be .Result/.Wait() all the way down (or async/await all the way down). Combining the two makes it extremely likely that you will encounter a deadlock at some point. The sole exception to this rule used to be the static main entry method for a console app, which would not compile if defined as static async Task&lt;int&gt; Main(string[] args). If your main program relied on an async method call, you had to workaround this issue with the solution below: static int Main(string[] args) { DoAsyncWork().GetAwaiter().GetResult(); Console.WriteLine(&#34;\\nPress ENTER to continue...&#34;); Console.Read(); return 0; } static async Task DoAsyncWork() { await ExpensiveComputationAsync(); } However, with the release of C# 7.1 your Main method can now be async: static async Task&lt;int&gt; Main(string[] args) { await ExpensiveComputationAsync(); Console.WriteLine(&#34;\\nPress ENTER to continue...&#34;); Console.Read(); return 0; } If your main method does not return a value for the exit code, you can also define a main method that returns a Task object: static async Task Main(string[] args) { await AnotherAsyncMethod(); } I will give an example of a console app that uses this new language feature in a future post. Since TAP is the recommended pattern, let&rsquo;s focus on best practices for async code that relies on the Task Parallelism Library (TPL). TPL Best Practices Avoid using Task.Factory.StartNew in almost every scenario in favor of Task.Run The reasons for this are explained in this blog post by Stephen Cleary. The major reason to avoid StartNew is because it does not understand async delegates. Rather than the Task returned by StartNew representing the async delegate, it represents only the beginning of the delegate. Please read his post for more detail and examples of the pitfalls introduced by indiscriminate use of StartNew. Cleary also argues that the options available with StartNew such as LongRunning and PreferFairness should only be used after an application has been profiled to ensure these options are actually going to have a significant impact. Typically, using Task.Run will provide nearly the same efficiency. Avoid async void in every scenario besides event handlers In an article from MSDN Magazine, Cleary gives three guidelines for using",
    href:
      "https://aaronluna.dev/blog/parallel-async-csharp-best-practices-tpl/",
    title: "Asynchronous Programming Best Practices in C#"
  },
  {
    categories: "Virtualization",
    content:
      "The majority of my work consists of C#/.NET development, and Visual Studio+ReSharper is my preferred IDE. Since I&rsquo;m a Mac user, I run VS on a Windows 10 instance with VMWare Fusion. For the first month or so everything ran smoothly. However, the performance of the VM degraded significantly over time, especially with multiple Visual Studio projects open in the VM and resource-hungry programs running on the Mac simultaneously. Thankfully, after changing a few settings and clearing unnecessary files I was able to improve the speed and responsiveness of both my Mac and the Windows 10 instance. I&rsquo;ve documented these steps below to help others who find themselves in a similar situation. Settings in VMWare Fusion I found that a combination of 2 processor cores with 4096 MB of memory works best for my needs (Note: My MacBook Pro has a 2.8GHz Intel quad core i7 with 8 GB RAM and Intel Iris GPU with 1536 MB). Also, select &ldquo;Enable hypervisor applications in this virtual machine&rdquo; as shown in Figure 1.   Figure 1 - Processors &amp; Memory Settings   I also saw a performance boost by changing the driver for the hard drive bus type to SCSI. On the Hard Disk Settings page, expand the &ldquo;Advanced options&rdquo; menu and change the Bus type to SCSI. Also, select &ldquo;Pre-allocate disk space&rdquo; as shown in Figure 2:   Figure 2 - Hard Disk Settings   Settings in the .VMX File VMWare only exposes a small number of settings through the UI. There are hundreds of additional configuration options which can only be modified by editing the .vmx file.   You should always make a backup of the .vmx file before modifying it. You can easily make changes that render the VM unusable or unable to boot!   Before changing the .vmx file itself, launch TextEdit and open the Preferences menu. Make sure Smart quotes is unchecked (See Figure 3 below). If this option is checked and you save the .vmx file, you will not be able to boot your VM.   Figure 3 - TextEdit Preferences menu showing location of Smart quotes setting   The easiest way to access the .vmx file is from the list of virtual machines in the main VMWare Fusion window. If the list of virtual machines is not visible, go to Window -&gt; Virtual Machine Library.   Figure 4 - The virtual machine library can be accessed from the Window menu   Next, shutdown the VM. Ensure that it is completely shutdown and not in a suspended state. Right click on the VM as shown in Figure 5. If you press and hold the \u2325 (ALT) key, Show in Finder will change to Open Config File in Editor.   Figure 5 - Menu options available with the ALT key pressed   There are other hidden options within this menu, try holding the ^ (CTRL) key or \u2318 (CMD) key and the menu item will",
    href:
      "/blog/optimize-vm-performance-windows10-visual-studio-vmware-fusion/",
    title:
      "How to Optimize Performance of Windows 10 and Visual Studio in VMWare Fusion"
  },
  {
    categories: "Linux",
    content:
      "Why would you want to install NGINX from source code rather than a pre-built package? The most important reason is that the libraries which NGINX depends on (PCRE, zlib, OpenSSL) are part of the pre-built package, and building from source allows you to use the latest versions which may contain vital security patches. For instance, you will find that the version of NGINX available through your package manager is several major versions behind the current mainline. Note, for Ubuntu systems, you can find pre-built packages which are much closer to the current mainline from Launchpad&rsquo;s Personal Package Archive service. Another reason to install from source is that NGINX can be configured in many different ways, and the only way to choose how it is configured is to install from source. When you install NGINX from a pre-built package, you are stuck with whatever set of modules are enabled. In this post, I will show how to include third-party modules and how to enable modules which are disabled by default. If you just came here for the script, you can download the completed shell script from the gist linked below. This script installs the latest mainline NGINX version along with the latest versions of PCRE, zlib and OpenSSL libraries, and includes two useful third-party modules: Shell Script: Build and Install NGINX from Source (Ubuntu) [github.com] The rest of this post will explain in detail how to install NGINX from source. It does not match my shell script exactly since the script is designed to run non-interactively and uses variables. The steps below require user input and no variables are used. Expected Results These steps produce a .deb package which can be used to uninstall this version of NGINX via apt-get (the .deb package can also be used to install this customized version of NGINX on another system with the same architecture). You can find information on the checkinstall program which creates the .deb package here. After NGINX is built and installed, all source code files are added to a .tar.gz archive file. This allows you to avoid downloading the source code again if you use the .deb package to install this version of NGINX on another system. Install Prerequisites and Dependancies This guide is written for Ubuntu, but the steps only need to be changed in minor ways to apply to other Linux distributions. The steps also assume that you are logged in with a user account that has sudo access. If you are unsure what this means, please perform the steps in this guide from DigitalOcean. If you are using a different Linux distribution the steps to create a user with sudo access will be similar, try a google search with your distro&rsquo;s name and &ldquo;root privileges&rdquo;.   To begin, add the Maxmind PPA to your list of sources. This PPA has much newer versions of the GeoIP libraries and databases than the default apt source: ~$ sudo add-apt-repository ppa:maxmind/ppa -y gpg: keyring `/tmp/tmpmku7ishg/secring.gpg' created gpg: keyring `/tmp/tmpmku7ishg/pubring.gpg' created",
    href: "https://aaronluna.dev/blog/install-nginx-source-code-shell-script/",
    title: "Create a Shell Script to Install NGINX from Source On Ubuntu"
  },
  {
    categories: "dotnet",
    content:
      "Type casting or type converting is a common occurrance in C#, and as the language has evolved new methods and operators have been introduced that handle type conversion in varying ways. Over the years, I have built up my own set of best practices and decided to get them out of my head with the goal of soliciting feedback and hopefully refining them further. Before laying them out, I&rsquo;ll cover the basics of type casting and type conversion in C#.   Type Casting vs Type Conversion  &ldquo;Casting&rdquo; is only valid for reference types, value types are converted The\u00a0cast operator\u00a0attempts to cast an object to a specific type, and throws an exception if it fails Although (long)some_integer has the same syntax as a cast operation, the integer is actually being converted to a long    Upcasting vs Downcasting  Upcasting = Derived Class =&gt; Base Class  Upcasting is implicit (cast operator is not required) Animal animal = dog;    Downcasting = Base Class =&gt; Derived Class  Downcasting requires a cast operator (explicit) Dog dog = (Dog)animal;       is vs as Operators  The is operator checks the compatibility of an object with a given type and returns the result as a Boolean (True Or False) The\u00a0as\u00a0operator\u00a0attempts to cast an object to a specific type, and returns null if it fails    Casting/Type Conversion Best Practices If\u00a0&lsquo;randomObject&rsquo;\u00a0really\u00a0&lsquo;should&rsquo;\u00a0be an instance &lsquo;TargetType&rsquo;, i.e. if it&rsquo;s not, that means there&rsquo;s a bug, then casting is the right solution. Throwing an exception immediately means that no more work is done under incorrect assumptions, and the exception correctly shows the type of bug. (cast only) // This will throw an exception if randomObject is non-null // and refers to an object of an incompatible type. //&#34;Cast only&#34; is the best method if that&#39;s the behavior you want. TargetType convertedRandomObject = (TargetType) randomObject; If\u00a0randomObject\u00a0might\u00a0be an instance of\u00a0TargetType\u00a0and\u00a0TargetType\u00a0is a reference type, then use as-and-null-check: TargetType convertedRandomObject = randomObject as TargetType; if (convertedRandomObject != null) { // Do stuff with convertedRandomObject } If\u00a0randomObject\u00a0might\u00a0be an instance TargetType\u00a0and\u00a0TargetType\u00a0is a value type, then we can&rsquo;t use\u00a0as\u00a0with\u00a0TargetType\u00a0itself, but we can use a nullable type: TargetType? convertedRandomObject = randomObject as TargetType?; if (convertedRandomObject != null) { // Do stuff with convertedRandomObject.Value } If you really don&rsquo;t need the converted value, but you just need to know whether randomObject\u00a0is\u00a0an instance of TargetType, then use the\u00a0is\u00a0operator . In this case it doesn&rsquo;t matter whether TargetType is a reference type or a value type. Don&rsquo;t do this: // Bad code - checks type twice for no reason if (randomObject is TargetType) { TargetType foo = (TargetType) randomObject; // Do something with foo } is-and-cast (or is-and-as) are both potentially unsafe, as the type of randomObject may change due to another thread between the test and the cast (e.g., randomObject is a field or property rather than a local variable) as-and-null-check\u00a0gives a better separation of concerns. We have one statement which attempts a conversion,",
    href:
      "https://aaronluna.dev/blog/casting-type-conversion-best-practices-c-sharp/",
    title: "Casting and Type Conversion Best Practices in C#"
  },
  {
    categories: "AWS",
    content:
      "In previous posts, I provided an overview of what the AWS Free Usage Tier contains and some basic guidelines for avoiding overage charges while using the free tier to host a small website. In this post, I will explore the different pricing models that Amazon offers for EC2 and RDS instances and estimate the cost to host four different website configurations for one year. I decided to gather this data in order to answer the following questions: What amount should I expect to pay to host my website with the same AWS instances when I'm no longer eligible for the free usage tier? Given the light specs of the t2.micro instance (1CPU/1GiB RAM), what would it cost to host a site that requires more capacity? Or a large web application that handles thousands of simultaneous connections? How much more would it cost to host any of these websites with a Windows/MSSQL toolchain versus the Linux/MySQL I'm currently using? How much cheaper is the Reserved Instance Rate (pay for one year of usage upfront) rather than the On-Demand Instance rate?  Thankfully, Amazon created a tool we can use to answer these questions: the AWS Simple Monthly Calculator. Calling it \"simple\" must be an attempt at modesty because the calculator contains a massive amount of configuration options. To begin, let&rsquo;s take a look at the pricing models for EC2 and RDS instances. EC2 and RDS Pricing Models Amazon has four different pricing models for EC2 and RDS instances:  On-Demand rates offer the most flexibility since you can ramp up, scale down and re-locate your resources if your estimates and actual usage differ significantly. However, you&rsquo;ll pay for the convenience. This is the pricing model used when you exceed your monthly limit of EC2 usage included with the free tier. Reserved Instance rates require you to sign a one or three year contract for usage of a single instance type. This means that you cannot change to a more powerful instance type if you underestimated the amount of compute power or memory necessary for your website, or vice-versa (you cannot change to a less expensive instance type). You can pay for the entire year, pay for a partial amount or pay nothing upfront. Naturally, paying the full amount gives the largest discount, but signing a contract and paying nothing upfront is still cheaper than the On-Demand rate for the same instance type. Spot Instances offer much cheaper rates than On-Demand instances, but they are not applicable to our scenario of a public-facing website which requires constant availability. If you need to train your new machine learning algorithm on a massive data set or you need to render a large 3d graphics project, spot instances allow you to access enormous CPU and GPU resources for a huge discount compared to On-Demand rates. Dedicated Hosts/Instances will not be discussed further since their benefits are unnecessary for most websites, especially a personal blog site.  Along with the pricing model and the OS/database system",
    href:
      "https://aaronluna.dev/blog/aws-hosting-cost-examples-linux-windows-ec2-rds/",
    title:
      "Cost Estimates for Hosting Small, Medium and Large Websites with AWS"
  },
  {
    categories: "AWS",
    content:
      "With Amazon's Free Usage Tier, it's very easy to generate overage charges even with the best intentions of operating entirely within the offer&rsquo;s limits (this is why Amazon requires a credit card when you create your account). For each individual service (EC2, RDS, S2, etc.), your usage for the month is tabulated in extremely fine detail. At first, the sheer number of items on your invoice can be intimidating. In this post, I will show what a typical bill contains for running a small Wordpress site and how to avoid overage charges and other unnecesary costs. Monitor Running Instances in the EC2 Dashboard The easiest way to ensure you won&rsquo;t generate overrage costs with Amazon's Free Usage Tier is to keep track of how many Linux and Windows EC2 instances are running under your account. The free tier includes 750 hours per month of Linux EC2 usage and another 750 hours per month of Windows EC2 usage (both must be either t1 or t2.micro instances). Similarly, you are allowed 750 hrs/month for an Elastic Load Balancer and 750 hrs/month for an RDS (database) instance. Together, these components will allow you to create a web application and run it continuously, free of charge. You can see how many EC2 instances are currently running via the EC2 Dashboard within the AWS Console. Navigate to: **Services -&gt; Compute -&gt; EC2:**   Figure 1 - Services menu showing link to EC2 Dashboard in AWS Console   The dashboard provides a summary of various EC2 resources which are allocated to your account, including the number of running instances. In the screenshot below, you can see that I have one running server instance, one elastic IP, one volume (storage disk), one SSH key pair and three network security groups which are allocated to my account.   Figure 2 - EC2 Dashboard showing one running instance   If you are continuously running two server instances (must be one Linux instance and one Windows instance), you will not be charged while your account is eligible for the free tier. Also, if you are continuously running only a single instance (either Linux or Windows) you will not be charged. However, if you are continuously using two instances of Linux or two instances of Windows, you will eventually incur charges at the rate for your specific region, instance type and OS type when you have exceeded 750 total hours of use. Two Linux (or Windows) servers running 24 hours a day would exceed this limit after 15 days. Thankfully, the instance types that are availabe at no cost (t1 and t2.micro) are the cheapest to operate (but also the lowest in terms of CPU/RAM). The table below shows how much you would be charged for running these instances after exceeding the free tier limit:   Table 1   Overage Pricing for EC2 Instance Types Included with Free Tier   Instance Type Hourly Rate1 Daily Rate2 Monthly Rate3    Linux t1.micro $0.0250",
    href: "https://aaronluna.dev/blog/how-to-monitor-aws-free-tier-usage/",
    title: "AWS Free Tier: How to Monitor Usage and Avoid Overage Charges"
  },
  {
    categories: "AWS",
    content:
      "For the past 2 months, I have been learning Linux server administration, PHP/JavaScript and other skills such as DevOps tools/processes. By far, the most valuable resource I have used to develop these skills is the Amazon Web Services (AWS) Free Usage Tier that is offered to anyone for a period of one year. Well, anyone with a credit card to be more precise.  Figure 1: List of AWS product categories, vast and varied   AWS comprises an overwhelming number of products and services. Take a look at the list here. Besides the expected categories like &ldquo;compute&rdquo;, &ldquo;database&rdquo;, or &ldquo;developer tools&rdquo;, the free tier also provides access to many services that I was unaware of:  Voice and Chat Textbot Builders Deep learning-based facial image recognition Virtual Reality (VR) and Augmented Reality (AR) development platform A variety of AI products such as natural language processing, language translation, text-to-speech and vice versa  However, &quot;free&quot; in this sense does not mean unlimited. Each service has a defined limit which when exceeded will begin billing at the service's normal rate (the limit for most services resets each month). The overage is invoiced monthly and charged to the credit card you provided at signup. Many of the products remain &quot;free&quot; after the 1 year term is over. The most useful of which (to me) is the CodeCommit service. I built and deployed a Gogs EC2 instance which I planned to use as a private code repository for my personal projects. I quickly took it down when I learned that AWS offers the service completely free-to-use, forever, for up to 5 user accounts. There are monthly limits on the size of your repositories and frequency of git requests, but these will never be reached by my usage. Amazon provides this free tier to allow users to gain experience with the AWS platform, with the obvious goal of encouraging adoption of their products in large-scale applications and organizations the user belongs to. On each AWS product page, Amazon boasts of such customers: the WaPo utilizes the Comprehend service, NASA has leveraged Lex and Zillow uses Lambda. Just as impresively, I used multiple Amazon services to host this website. I registered my domain and configured the associated record sets through Route 53 (This product does not have a free offering). I installed the Wordpress core on a t2.micro EC2 instance and deployed the Wordpress database on an RDS instance. I store site assets such as image files in a S3 bucket. My RDS instance can only communicate with the Wordpress EC2 server and is isolated from any outside web traffic thanks to custom subnet configurationsmade in my Virtual Private Cloud (VPC). In my next post, I will give recommendations on how to manage billing for your AWS account and how to avoid going over the free tier limits when hosting a website. ",
    href: "https://aaronluna.dev/blog/aws-free-usage-tier/",
    title: "AWS Free Usage Tier: An Incredibly Useful and Generous Offering"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "This tutorial series provides step-by-step instructions and in-depth explanations to guide you through the process of creating a robust, production-quality REST API. The toolstack consists of Flask, Flask-RESTx, SQLAlchemy, pyjwt, tox and other packages. Code quality is a major focus, with considerable time dedicated to testing (using pytest), logging and tools such as coverage, flake8 and mypy. The tutorial concludes by creating a process that continuously integrates (with tox, travis/circle CI, coveralls) and deploys the API (with either Github or Azure DevOps to Heroku).    Part 1: Project Setup and Environment Configuration    In Part 1, the core concepts of REST and JWTs are introduced, project dependencies are described and installed, and the project is fully configured for prod/dev environments. The flask server and CLI are demonstrated to ensure the setup was performed correctly before moving on to Part 2.  Code Diff  .zip .tar.gz       Part 2: Database Models, Migrations and JWT Setup    Part 2 covers the basics of SQLAlchemy, the Flask-SQLAlchemy extension, and the Flask-Migrate extension. The process of creating a new database table to store user information by defining a class and &ldquo;registering&rdquo; it with SQLAlchemy is demonstrated. Next, setting up a system that manages changes to a database schema is thoroughly explained and demonstrated. After initializing the database, functions to encode and decode JSON Web Tokens (JWTs) are created. This section concludes with an introduction to pytest fixtures and examples of several test cases that verify the ability to encode/decode JWTs issued by our API.  Code Diff  .zip .tar.gz       Part 3: API Configuration and User Registration    Part 3 explains how to initialize the Flask-RESTx extension and how API routes/endpoints are defined. In order to create an endpoint for new user registration, the modules and classes available in Flask-RESTx for parsing and validating request data are explored and demonstrated. Additionally, the process for serializing Python objects in order to send them in an HTTP response is covered. After implementing the user registration API endpoint, test cases are created and executed to verify the registration process is working correctly.  Code Diff  .zip .tar.gz       Part 4: JWT Authentication, Decorators and Blacklisting Tokens    Part 4 completes the user authorization API by implementing login, logout and user verification API endpoints. The process to create a custom decorator that only allows access to users with a valid JWT is covered in-depth. How to send an HTTP request for a protected resource that includes a JWT is demonstrated with both Swagger UI and command-line tools. A new class/database model is introduced to create a token blacklist, to ensure that JWTs cannot be used after the user has logged out. Test cases are created and executed for all API endpoints covering successful and failed attempts to login/logout/retrieve user info.  Code Diff  .zip .tar.gz    ",
    href: "https://aaronluna.dev/series/flask-api-tutorial/overview/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Overview)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Introduction My goal for this tutorial is to provide a detailed guide to designing and creating a Flask API that uses JSON Web Tokens (JWT) to authenticate HTTP requests. There are many different Flask extensions and Python packages that can be used to create a web service that satisfies these requirements. The toolchain that this product utilizes includes Flask-RESTx, SQLAlchemy, PyJWT, pytest and tox (this is simply my personal preference). This is NOT a full-stack tutorial, creating a front-end that consumes the API is not covered. However, Flask-RESTx will automatically generate a Swagger UI webpage that allows anyone to send requests and inspect responses from the API. In addition to the user management and authentication functions, the API will contain a RESTful resource that registered users can manipulate with CRUD actions \u2014 a list of &ldquo;widgets&rdquo;. Why did I decide to create widgets and not to-do items, or something real? Using a generic resource reinforces the idea that this code is boilerplate and could be easily adapted for use in a real-world API. Performing CRUD actions and restricting access based on a user&rsquo;s assigned role/permissions are extremely common requirements, and the code to do so is the same for a widget, blog post or anything else that you expose to clients via HTTP. The feature specification for the API is given below. I hope that the various methodologies and &ldquo;best practices&rdquo; that I present are well-founded and justified by the arguments I present for them. Any and all comments/criticism are appreciated, please feel free to log issues in the github repository for suggested improvements and/or any bugs that I missed. At the end of each section, any requirements that have been completely implemented will be marked as complete (): User Management/JWT Authentication New users can register by providing an email address and password Existing users can obtain a JWT by providing their email address and password JWT contains the following claims: time the token was issued, time the token expires, a value that identifies the user, and a flag that indicates if the user has administrator access JWT is sent in access_token field of HTTP response after successful authentication with email/password JWTs must expire after 1 hour (in production) JWT is sent by client in Authorization field of request header Requests must be rejected if JWT has been modified Requests must be rejected if JWT is expired If user logs out, their JWT is immediately invalid/expired If JWT is expired, user must re-authenticate with email/password to obtain a new JWT  API Resource: Widget List All users can retrieve a list of all widgets All users can retrieve individual widgets by name Users with administrator access can add new widgets to the database Users with administrator access can edit existing widgets Users with administrator access can delete widgets from the database The widget model contains attributes with URL, datetime, timedelta and bool data types, along with normal text fields. URL and datetime values must be validated before a new widget",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-1/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 1)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Project Structure The chart below shows the folder structure that was created in Part 1. In this post, we will work on all files marked as NEW CODE. Files that contain code from Part 1 but will not be modified in this post are marked as NO CHANGES. . (project root folder) |- src | |- flask_api_tutorial | |- api | | |- auth | | | |- __init__.py | | | | | |- widgets | | | |- __init__.py | | | | | |- __init__.py | | | |- models | | |- __init__.py | | |- user.py | | | |- util | | |- __init__.py | | |- datetime_util.py | | |- result.py | | | |- __init__.py | |- config.py | |- tests | |- __init__.py | |- conftest.py | |- test_config.py | |- test_user.py | |- util.py | |- .env |- .gitignore |- .pre-commit-config.yaml |- pyproject.toml |- pytest.ini |- README.md |- run.py |- setup.py |- tox.ini KEY: FOLDER NEW CODE NO CHANGES EMPTY FILE   Database Models and Migrations with Flask-SQLAlchemy If you have never used SQLAlchemy (or any ORM) before, the basic concept is simple: ORMs allow you to interact with data stored in a database as high-level abstractions such as classes, instances of classes and methods rather than writing raw SQL (the ORM translates your application code into SQL commands and queries). A common task that I rarely see covered in tutorials like this is how to manage changes that are made to a database. Changes to the database schema will usually require changing data that is already stored in the database, or migrating the existing data. We will use the Flask-Migrate extension to handle this task and explain how to setup a migration system and how to create and apply migrations. User DB Model In Part 1, we created an instance of the Flask-SQLAlchemy extension with the name db in the src/flask_api_tutorial/__init__.py file and initialized it in the create_app method. The db object contains functions and classes from sqlalchemy and sqlalchemy.orm. Whenever we need to declare a new database model (i.e., create a new database table), we create a class that subclasses db.Model. Since we are creating an API that performs user authentication, our first SQLAlchemy model will be a User class that stores login credentials and metadata for registered users. Create a new file user.py in the src/flask_api_tutorial/models folder and add the content below: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61  &#34;&#34;&#34;Class definition for User model.&#34;&#34;&#34; from datetime import datetime, timezone from uuid import uuid4 from flask import current_app from sqlalchemy.ext.hybrid import hybrid_property from flask_api_tutorial import db, bcrypt from flask_api_tutorial.util.datetime_util import ( utc_now,",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-2/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 2)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Project Structure The chart below shows the folder structure for this section of the tutorial. In this post, we will work on all files marked as NEW CODE. Files that contain code from previous sections but will not be modified in this post are marked as NO CHANGES. . (project root folder) |- src | |- flask_api_tutorial | |- api | | |- auth | | | |- __init__.py | | | |- business.py | | | |- dto.py | | | |- endpoints.py | | | | | |- widgets | | | |- __init__.py | | | | | |- __init__.py | | | |- models | | |- __init__.py | | |- user.py | | | |- util | | |- __init__.py | | |- datetime_util.py | | |- result.py | | | |- __init__.py | |- config.py | |- tests | |- __init__.py | |- conftest.py | |- test_auth_register.py | |- test_config.py | |- test_user.py | |- util.py | |- .env |- .gitignore |- .pre-commit-config.yaml |- pyproject.toml |- pytest.ini |- README.md |- run.py |- setup.py |- tox.ini KEY: FOLDER NEW CODE NO CHANGES EMPTY FILE   Introduction It&rsquo;s finally time to start configuring the API! Keep in mind that the URL routes and the business logic that takes place when a user sends a GET, POST, PUT or DELETE request could all be accomplished using the functions, classes and decorators provided in Flask (that is, without using the Flask-RESTx extension). However, doing so would require considerably more code and would not give us the Swagger UI page to document and test the API. Before we begin, let&rsquo;s discuss what makes a REST API RESTful and make a decision to abide (or not to abide) by the requirements and constraints of REST. Understanding REST The term &ldquo;REST&rdquo; was introduced in 2000 by Roy Fielding in his doctoral thesis, titled Architectural Styles and the Design of Network-based Software Architectures. I strongly recommend trying to fully digest Fielding&rsquo;s thesis. At the very least you should read Chapter 5 Representational State Transfer (REST). What makes an API RESTful is much more than creating a set of URIs and implementing the response to GET, POST, PUT, etc. requests. First of all, REST does not require HTTP &ndash; REST is protocol-agnostic. HTTP just happens to be very popular and well-suited to REST systems. REST is truly about resource state, and how hypermedia defines the actions available to these resources. REST is also about the media types that the system uses to represent the resources. I say these things because most so-called REST APIs and articles explaining how to design and construct a REST API are not truly RESTful. In this section of the tutorial we will implement the user registration and authentication processes. What is the correct way to design a REST API to perform these actions? Are these actions even appropriate for a REST API? The answer is not as straightforward or obvious as you might think. User Authentication in",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-3/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 3)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Project Structure The chart below shows the folder structure for this section of the tutorial. In this post, we will work on all files marked as NEW CODE. Files that contain code from previous sections but will not be modified in this post are marked as NO CHANGES. . (project root folder) |- src | |- flask_api_tutorial | |- api | | |- auth | | | |- __init__.py | | | |- business.py | | | |- decorators.py | | | |- dto.py | | | |- endpoints.py | | | | | |- widgets | | | |- __init__.py | | | | | |- __init__.py | | |- exceptions.py | | | |- models | | |- __init__.py | | |- token_blacklist.py | | |- user.py | | | |- util | | |- __init__.py | | |- datetime_util.py | | |- result.py | | | |- __init__.py | |- config.py | |- tests | |- __init__.py | |- conftest.py | |- test_auth_login.py | |- test_auth_logout.py | |- test_auth_register.py | |- test_auth_user.py | |- test_config.py | |- test_user.py | |- util.py | |- .env |- .gitignore |- .pre-commit-config.yaml |- pyproject.toml |- pytest.ini |- README.md |- run.py |- setup.py |- tox.ini KEY: FOLDER NEW CODE NO CHANGES EMPTY FILE   api.auth_login Endpoint That last section ended up being a lot longer than I anticipated, but I don&rsquo;t think the rest of the auth_ns endpoints will require the same amount of explanation since there&rsquo;s no need to repeat the same information. Right off the bat, we do not need to create a RequestParser or API model since the api.auth_login endpoint can use the auth_reqparser to validate request data. Why is this the case? The data required to register a new user or authenticate an existing user is the same: email address and password. With that out of the way, we can move on to defining the business logic needed to authenticate an existing user. process_login_request Function When a user sends a login request and their credentials are successfully validated, the server must return an HTTP response that includes an access token. As we saw when we implemented the registration process, any response that includes sensitive information (e.g., an access token) must satisfy all OAuth 2.0 requirements, which we thoroughly documented and implemented in Part 3. The implementation for the response to a successful login request will be nearly identical. In observance of DRY, I decided to refactor the code that constructs the HTTP response out of the process_registration_request function (extracted to new method _create_auth_successful_response), in order to avoid repeating nearly the same code in process_login_request. I&rsquo;ve provided the entire code for the updated version of src/flask_api_tutorial/api/auth/business.py below: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-4/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 4)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Project Structure The chart below shows the folder structure for this section of the tutorial. In this post, we will work on all files marked as NEW CODE. Files that contain code from previous sections but will not be modified in this post are marked as NO CHANGES. . (project root folder) |- src | |- flask_api_tutorial | |- api | | |- auth | | | |- __init__.py | | | |- business.py | | | |- decorators.py | | | |- dto.py | | | |- endpoints.py | | | | | |- widgets | | | |- __init__.py | | | |- business.py | | | |- dto.py | | | |- endpoints.py | | | | | |- __init__.py | | | |- models | | |- __init__.py | | |- token_blacklist.py | | |- user.py | | |- widget.py | | | |- util | | |- __init__.py | | |- datetime_util.py | | |- result.py | | | |- __init__.py | |- config.py | |- tests | |- __init__.py | |- conftest.py | |- test_auth_login.py | |- test_auth_logout.py | |- test_auth_register.py | |- test_auth_user.py | |- test_config.py | |- test_user.py | |- util.py | |- .env |- .gitignore |- .pre-commit-config.yaml |- pyproject.toml |- pytest.ini |- README.md |- run.py |- setup.py |- tox.ini KEY: FOLDER NEW CODE NO CHANGES EMPTY FILE   Introduction In the previous section, we created four API endpoints to perform basic user registration and authentication functions. However, these API endpoints are not designed as RESTful resources (I explained my reasoning for this choice in Part 3). In this section of the tutorial, we will create a resource that is REST-like (REST-faux? REST-adjacent?). I am deliberately not describing it as RESTful, because designing a truly RESTful system is HARD. Check out this blog post from Roy Fielding and the discussion in the comments to get an idea of what I mean. The only features of this resource that I am willing to state are 100% bona fide REST-compliant are:  The naming convention of the resource and associated endpoints. The HTTP methods supported by each endpoint that enables clients to perform CRUD operations. Through the use of pagination and navigational links included in JSON sent by the server, clients can interact with the API purely through hypertext (i.e., clients NEVER need to manually construct URLs to interact with the API).  The resource we will create is a collection of widgets. I decided to model something generic rather than the cliche &ldquo;to-do list&rdquo; project that you encounter in every introductory programming tutorial. I feel safe assuming that you are not reading this because you have a burning desire to create the next, great API-driven to-do list. The main purpose of this section is to learn more advanced techniques for request parsing and response marshalling. The Widget model will contain attributes that require creating custom input types for parsing request data. The Widget model also contains hybrid properties that will require rendering",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-5/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 5)"
  },
  {
    categories: "Flask ; Python ; Tutorial-Series",
    content:
      "Project Structure The chart below shows the folder structure for this section of the tutorial. In this post, we will work on all files marked as NEW CODE. Files that contain code from previous sections but will not be modified in this post are marked as NO CHANGES. . (project root folder) |- src | |- flask_api_tutorial | |- api | | |- auth | | | |- __init__.py | | | |- business.py | | | |- decorators.py | | | |- dto.py | | | |- endpoints.py | | | | | |- widgets | | | |- __init__.py | | | |- business.py | | | |- dto.py | | | |- endpoints.py | | | | | |- __init__.py | | | |- models | | |- __init__.py | | |- token_blacklist.py | | |- user.py | | |- widget.py | | | |- util | | |- __init__.py | | |- datetime_util.py | | |- result.py | | | |- __init__.py | |- config.py | |- tests | |- __init__.py | |- conftest.py | |- test_auth_login.py | |- test_auth_logout.py | |- test_auth_register.py | |- test_auth_user.py | |- test_config.py | |- test_create_widget.py | |- test_delete_widget.py | |- test_retrieve_widget.py | |- test_retrieve_widget_list.py | |- test_update_widget.py | |- test_user.py | |- util.py | |- .env |- .gitignore |- .pre-commit-config.yaml |- pyproject.toml |- pytest.ini |- README.md |- run.py |- setup.py |- tox.ini KEY: FOLDER NEW CODE NO CHANGES EMPTY FILE   Introduction In the previous section, we began implementing the Widget API. I&rsquo;ve reproduced the table from the previous section which gives the specifications for all endpoints in the widget_ns namespace:   Table 1   Widget API endpoint specifications   Endpoint Name URI HTTP Method CRUD Operation Required Token     api.widget_list /api/v1/widgets POST Create a new widget Admin user   api.widget_list /api/v1/widgets GET Retrieve a list of widgets Regular user   api.widget /api/v1/widgets/&lt;name&gt; GET Retrieve a single widget Regular user   api.widget /api/v1/widgets/&lt;name&gt; PUT Update an existing widget Admin user   api.widget /api/v1/widgets/&lt;name&gt; DELETE Delete a single widget Admin user      At this point, we have only implemented the process to create a new widget object. Per the specification in Table 1, to do so we created a new endpoint named api.widget_list that responds to requests sent to /api/v1/widgets. Clients can create a new widget object by sending a POST request to this endpoint. Table 1 indicates that the api.widget_list endpoint must also support GET requests in order to allow clients to retrieve a list of widget objects. What is the best way to send a list of complex objects to a client in an HTTP response? Before we implement the process/endpoint for retrieving a list of widgets, let&rsquo;s review the established best practices. Pagination When a client sends a GET request to the api.widget_list endpoint, they are requesting every widget in the database. As the number of widgets increases, so does the size",
    href: "https://aaronluna.dev/series/flask-api-tutorial/part-6/",
    title: "How To: Create a Flask API with JWT-Based Authentication (Part 6)"
  }
];

async function initSearchIndex() {
  try {
    pagesIndex = fakeJSON;
    searchIndex = lunr(function () {
      this.field("title");
      this.field("categories");
      this.field("content");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });
  } catch (e) {
    console.log(e);
  }
}

function searchBoxFocused() {
  document.querySelector(".search-container").classList.add("focused");
  document
    .getElementById("search")
    .addEventListener("focusout", () => searchBoxFocusOut());
}

function searchBoxFocusOut() {
  document.querySelector(".search-container").classList.remove("focused");
}

function handleSearchQuery(event) {
  event.preventDefault();
  const query = document.getElementById("search").value.trim().toLowerCase();
  if (!query) {
    displayErrorMessage("Please enter a search term");
    return;
  }
  const results = searchSite(query);
  if (!results.length) {
    displayErrorMessage("Your search returned no results");
    return;
  }
  renderSearchResults(query, results);
}

function displayErrorMessage(message) {
  document.querySelector(".search-error-message").innerHTML = message;
  document.querySelector(".search-container").classList.remove("focused");
  document.querySelector(".search-error").classList.remove("hide-element");
  document.querySelector(".search-error").classList.add("fade");
}

function removeAnimation() {
  this.classList.remove("fade");
  this.classList.add("hide-element");
  document.querySelector(".search-container").classList.add("focused");
}

function searchSite(query) {
  const originalQuery = query;
  query = getLunrSearchQuery(query);
  let results = getSearchResults(query);
  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}

// I want a typeahead search, so if a user types a query like
// "pyth", it should show results that contain the word "Python",
// rather than just the entire word.
function searchSiteAhead(query_string) {
  return searchIndex.query(function(q) {
    // look for an exact match and give that a massive positive boost
    q.term(query_string, { usePipeline: true, boost: 100 });
    // prefix matches should not use stemming, and lower positive boost
    q.term(query_string, { usePipeline: false, boost: 10, wildcard: lunr.Query.wildcard.TRAILING });
  }).flatMap((hit) => {
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });
}

async function getSearchResults(query) {
  const a = searchIndex.search(query).flatMap((hit) => {
    if (hit.ref == "undefined") {
      return [];
    };
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });

  const b = searchSiteAhead(query);

  console.log("new", a, b);

  return a || b;
}

function getLunrSearchQuery(query) {
  const searchTerms = query.split(" ");
  if (searchTerms.length === 1) {
    return query;
  }
  query = "";
  for (const term of searchTerms) {
    query += `+${term} `;
  }
  return query.trim();
}

function renderSearchResults(query, results) {
  clearSearchResults();
  updateSearchResults(query, results);
  showSearchResults();
  scrollToTop();
}

function clearSearchResults() {
  const results = document.querySelector(".search-results ul");
  while (results.firstChild) results.removeChild(results.firstChild);
}

function updateSearchResults(query, results) {
  document.getElementById("query").innerHTML = query;
  document.querySelector(".search-results ul").innerHTML = results
    .map(
      (hit) => `
    <li class="search-result-item" data-score="${hit.score.toFixed(2)}">
      <a href="${hit.href}" class="search-result-page-title">${hit.title}</a>
      <p>${createSearchResultBlurb(query, hit.content)}</p>
    </li>
    `
    )
    .join("");
  const searchResultListItems = document.querySelectorAll(".search-results ul li");
  document.getElementById("results-count").innerHTML = searchResultListItems.length;
  document.getElementById("results-count-text").innerHTML = searchResultListItems.length > 1 ? "results" : "result";
  searchResultListItems.forEach(
    (li) => (li.firstElementChild.style.color = getColorForSearchResult(li.dataset.score))
  );
}

function createSearchResultBlurb(query, pageContent) {
  const searchQueryRegex = new RegExp(createQueryStringRegex(query), "gmi");
  const searchQueryHits = Array.from(
    pageContent.matchAll(searchQueryRegex),
    (m) => m.index
  );
  const sentenceBoundaries = Array.from(
    pageContent.matchAll(SENTENCE_BOUNDARY_REGEX),
    (m) => m.index
  );
  let searchResultText = "";
  let lastEndOfSentence = 0;
  for (const hitLocation of searchQueryHits) {
    if (hitLocation > lastEndOfSentence) {
      for (let i = 0; i < sentenceBoundaries.length; i++) {
        if (sentenceBoundaries[i] > hitLocation) {
          const startOfSentence = i > 0 ? sentenceBoundaries[i - 1] + 1 : 0;
          const endOfSentence = sentenceBoundaries[i];
          lastEndOfSentence = endOfSentence;
          parsedSentence = pageContent.slice(startOfSentence, endOfSentence).trim();
          searchResultText += `${parsedSentence} ... `;
          break;
        }
      }
    }
    const searchResultWords = tokenize(searchResultText);
    const pageBreakers = searchResultWords.filter((word) => word.length > 50);
    if (pageBreakers.length > 0) {
      searchResultText = fixPageBreakers(searchResultText, pageBreakers);
    }
    if (searchResultWords.length >= MAX_SUMMARY_LENGTH) break;
  }
  return ellipsize(searchResultText, MAX_SUMMARY_LENGTH).replace(
    searchQueryRegex,
    "<strong>$&</strong>"
  );
}

function createQueryStringRegex(query) {
  const searchTerms = query.split(" ");
  if (searchTerms.length == 1) {
    return query;
  }
  query = "";
  for (const term of searchTerms) {
    query += `${term}|`;
  }
  query = query.slice(0, -1);
  return `(${query})`;
}

function tokenize(input) {
  const wordMatches = Array.from(input.matchAll(WORD_REGEX), (m) => m);
  return wordMatches.map((m) => ({
    word: m[0],
    start: m.index,
    end: m.index + m[0].length,
    length: m[0].length,
  }));
}

function fixPageBreakers(input, largeWords) {
  largeWords.forEach((word) => {
    const chunked = chunkify(word.word, 20);
    input = input.replace(word.word, chunked);
  });
  return input;
}

function chunkify(input, chunkSize) {
  let output = "";
  let totalChunks = (input.length / chunkSize) | 0;
  let lastChunkIsUneven = input.length % chunkSize > 0;
  if (lastChunkIsUneven) {
    totalChunks += 1;
  }
  for (let i = 0; i < totalChunks; i++) {
    let start = i * chunkSize;
    let end = start + chunkSize;
    if (lastChunkIsUneven && i === totalChunks - 1) {
      end = input.length;
    }
    output += input.slice(start, end) + " ";
  }
  return output;
}

function ellipsize(input, maxLength) {
  const words = tokenize(input);
  if (words.length <= maxLength) {
    return input;
  }
  return input.slice(0, words[maxLength].end) + "...";
}

function showSearchResults() {
  document.querySelector(".primary").classList.add("hide-element");
  document.querySelector(".search-results").classList.remove("hide-element");
  document.getElementById("site-search").classList.add("expanded");
  document.getElementById("clear-search-results-sidebar").classList.remove("hide-element");
}

function scrollToTop() {
  const toTopInterval = setInterval(function () {
    const supportedScrollTop = document.body.scrollTop > 0 ? document.body : document.documentElement;
    if (supportedScrollTop.scrollTop > 0) {
      supportedScrollTop.scrollTop = supportedScrollTop.scrollTop - 50;
    }
    if (supportedScrollTop.scrollTop < 1) {
      clearInterval(toTopInterval);
    }
  }, 10);
}

function getColorForSearchResult(score) {
  const warmColorHue = 171;
  const coolColorHue = 212;
  return adjustHue(warmColorHue, coolColorHue, score);
}

function adjustHue(hue1, hue2, score) {
  if (score > 3) return `hsl(${hue1}, 100%, 50%)`;
  const hueAdjust = (parseFloat(score) / 3) * (hue1 - hue2);
  const newHue = hue2 + Math.floor(hueAdjust);
  return `hsl(${newHue}, 100%, 50%)`;
}

function handleClearSearchButtonClicked() {
  hideSearchResults();
  clearSearchResults();
  document.getElementById("search").value = "";
}

function hideSearchResults() {
  document.getElementById("clear-search-results-sidebar").classList.add("hide-element");
  document.getElementById("site-search").classList.remove("expanded");
  document.querySelector(".search-results").classList.add("hide-element");
  document.querySelector(".primary").classList.remove("hide-element");
}

initSearchIndex();
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("search-form") != null) {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("focus", () => searchBoxFocused());
    searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) handleSearchQuery(event);
    });
    document
      .querySelector(".search-error")
      .addEventListener("animationend", removeAnimation);
    document
      .querySelector(".fa-search")
      .addEventListener("click", (event) => handleSearchQuery(event));
  }
  document
    .querySelectorAll(".clear-search-results")
    .forEach((button) =>
      button.addEventListener("click", () => handleClearSearchButtonClicked())
    );
});

if (!String.prototype.matchAll) {
  String.prototype.matchAll = function (regex) {
    "use strict";
    function ensureFlag(flags, flag) {
      return flags.includes(flag) ? flags : flags + flag;
    }
    function* matchAll(str, regex) {
      const localCopy = new RegExp(regex, ensureFlag(regex.flags, "g"));
      let match;
      while ((match = localCopy.exec(str))) {
        match.index = localCopy.lastIndex - match[0].length;
        yield match;
      }
    }
    return matchAll(this, regex);
  };
}
