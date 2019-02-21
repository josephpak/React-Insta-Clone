## Day IV

### Focus (Day IV)

- [x] Be able to use styled-components to add functional styles to your React Components
- [x] Be able to explain why state driven views and components are useful patterns for scalability, composability, and reuse and how React enables those patterns

### Daily Setup (Day III)

- [x] By now you have been working on laying out your application, adding functionality and even building out a login system that only shows your app if a user is logged in.
- [x] Today we're going to be adding `styled-components` to our application. For more on the motivation behind this approach watch this [styled-components](https://youtu.be/bIK2NwoK9xk).

#### Tasks (Day III)
- [x] Try and replace all of the styles you have previously written. Change everything to be a Styled Component. (Except for where you need to reference your icon classNames.)

- [x] Re-factor `SearchBar` to use `styled-components`.
- [x] Create a `Header` styled-component.header that wraps your entire SearchBar.

  - [x] We recommend working left to right so begin changing out your styles on the instagram logo.
  - [x] Create a `LogoHeader` styled-component.div
  - [-] Create a `LogoImage` styled-component.img that fills in the background of your

- [x] Re-factor your `PostContainer` component use only styled components

  - [x] Start with the `UserThumbnail` and `Username`
  - [x] Note that the `Username` styles could most certainly be used by your `CommentSection` component as well.
  - [x] To achieve this, you'll simply just build out your reusable `styled-component` inside of a `Styles/Reusables` directory. This is where you could store all of your reusable styled components and export them out of their respective files to then import them for reuse.
    - [x] Notice that the `Username` on top of the Post is a bit bolder than the `Username`'s found in the comment section. If there is a way to make this reusable styled component accept a prop that will distinguish it from being now is the time to figure that out.

- [x] Now move onto the `CommmentSection` and get rid of any CSS that you don't need.
- [x] By now you're a pro at using `Styled-Components` and we hope you armed with the ammo necessary to choose whether or not you like using it as opposed to vanilla CSS or even a Pre-Processor. We don't want you to believe that there is never a time and place for both native CSS/Pre-processing to exist. But at least now you have a variety of weapons you can choose from to get the job done.

- Now is the time to take a step back and look at what you have accomplished this week. Start from the Day 1 README file and see what the tasks were there? Think about how we asked you to approach this problem. Think about the different components you have built? Did you separate out your Comments array from the rest of the application state? If so, what types of advantages did you gain by doing so? React is a very powerful tool and the next steps in learning about the React Ecosystem will all revolve around other libraries that we will plug into our application for extending it's use.

It's been an insane week of learning and growth as a developer. Things started to really come together as I started to put all of the concepts we had learned this past week into an applied project. Things also started to break as I refactored most of my application almost every day. While doing so was certainly time-consuming and I ended up getting stuck on a few parts, I was able to work through my blockers and come to a much fuller understanding of the purpose and strengths of React -- particularly as it comes to reusability. 

The key thing I had to learn was how data flows top to bottom, and then back to the top and why. In particular, the second part was very difficult for me to understand at first until I took a fair amount of time trying to make sure that I had a root data state to maintain all the parts of my application and I built out handlers to bring changes from children components to the right root at the top where it could then be dispersed again in a trickle-down like manner. I had to make sure that data wasn't becoming isolated from the root and localized in a separate lake where siblings would have no access and the root would be unaware of.

- Read [this article](https://dev.to/nimmo/state-driven-development-for-user-interfaces-part-1-an-introduction-27f1) about 'State Driven Views' and come up with a short paragraph as to why you feel that `state-driven` views are important to us as software developers today? What are state-driven applications? Why are they powerful? How does React enables those patterns?

State-driven views are important to us as software developers because of the implicit contract any good developer must consider that is forged between the user and the application. At the highest level, a user and the application have a relationship. With any good relationship, there are expectations of behaviors based on certain criteria. On Fridays, we go to work, and then we go to the movies. On holidays, we may go on vacation. At night, we sleep. If we extend this analogy out to applications, we must consider that a user expects certain functionality based on certain criteria. If they are meeting the application for the first time,they may expect a warm welcome. If they just deleted an item, they expect that some deletion behavior will occur. In order for our application to best adapt to these expectations, there needs to be a central, single source of truth that will tell our application what to do based on criteria. 

#### Stretch Problems (Day III)

- Add the functionality to select a single Post. If a user clicks on a post, only show that post.
  - You will need to research into `React Router V. 4` (this is what we're learning about next week) to get this to work in a fluid fashion.
  - Be sure to declare routes for your home `/` page (`<App />` or `<LoginPage />`);
  - Declare a Route for `/single-post` and mount the single post that the user clicks on.
