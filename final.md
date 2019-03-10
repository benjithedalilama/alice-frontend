# Alice: Code as Design
##### An exploration into design patterns and best practices for sustainable and effective software development.

## Introduction
If code were written by computers, it could be arbitrarily complex. The code could represent something close to a dish of spaghetti, and as long as the computer understood how to read and write it, software development wouldn’t require much effort. The problem, however, is that humans are the primary writers, and readers of original (not compiled) code. As Robert Martin stated in his book Clean Code: A Handbook of Agile Software Craftsmanship, “Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write” (Martin, R. C., Coplien, J. O., Wampler, K., et al, 2016). Since humans are not computers, and cannot handle anywhere near the level of complexity computers can, the software development process focuses on reducing complexity. Thus, measures which aim to reduce the complexity of a system’s codebase are worthwhile investments and are a core part of designing and building the system. Considering this, Alice, a device management platform for industrial automated systems, is built with a focus on extensibility, simplified state management, and a strong separation of concerns. These principles improve development time and ease, enable me and outside developers to better improve the applications, and overall, reduce complexity.

### Extensibility
At the core of software development is the extensibility of a codebase. Without the ability to change and update software easily, teams’ efforts to change software become extremely high friction and disastrous. Instead of precise and effective work that moves the application forward at the speed it needs to support growth and succeed, software development becomes akin to firefighting, constantly putting out small fires without the time or resources to focus on the core structural problems. As we add new features and build out a software application, our code needs to evolve to support the needs of our products and users. The more complex the codebase, the harder it is to extend, and the more unpredictable and harder to understand. Jeff Atwood writes that “the best code is no code at all” and that the real enemy is not code, it’s what you see in the mirror (Atwood, 2007). He says that we love to write code, too much, and “if [you] love writing code-- really, truly love to write code-- you'll love it enough to write as little of it as possible” (2007). Often times writing more code makes your system more complex, and harder to extend. Thus, a large part of extensibility is simplifying systems, reducing dependencies, standardizing processes, and abstracting out functionality. All of which can be accomplished by using frameworks with agreed upon rules, sometimes enforced by the framework itself, tests written to monitor the behavior of specific pieces of the system, and other actions which will be demonstrated in this paper.

### Separation of Concerns
Feeding into extensibility is separation of concerns, which is the separation of functionality or ‘jobs’ that certain pieces of the software system are responsible for. Breaking up the responsibilities of the entire system into smaller bite-sized concerns isolates the tasks at hand to specific subsystems. This isolation and separation improves the maintenance process and makes the system more extensible because of the natural plug-and-play behavior which emerges. A good separation of concerns can be illustrated by different files calling the same service to execute the same function. For example, the [`hubService.js`](https://github.com/benjithedalilama/alice-frontend/blob/master/src/services/hubService.js) file in the frontend is concerned with making API calls specifically for the Hub-related API endpoints. Figure seven, shown later, illustrates how the `HubService` class is the sole piece responsible for fetching hubs and can be called anywhere in the frontend to do its job. This separation of concerns enables us to control how and where the user can interact with their hubs, and gives us tighter control over security and access to the API.

### Simplifying State Management
State is one of the number one causes of pain and anguish for software developers; however, software developers can mitigate the complications associated with it by using frameworks that enforce rules, such as Redux. Imagine a car with hundreds of moving parts that work together. The pieces depend on each other and work harmoniously to ultimately get someone from point A to point B moving metal at high speeds. There are rules and constraints to the system like gear ratios in the transmission, oil, cooling liquid to keep the engine cool enough, and an exhaust pipe to expel gas from the combustion reaction. Now imagine a software system that has hundreds of moving parts, but does not have constraints and rules surrounding the state of the system. A user clicks a button to logout and they get redirected to the login, but for some reason the system still thinks the user is logged in and it displays the logout button once again. After jumping down a three-hour rabbit hole investigating what could possibly be causing the problem, you realize the problem is in a completely different place and restart your work on the problem. Keeping with the engine analogy, imagine opening up the hood of a car, unscrewing and lifting multiple parts, popping out the engine, and finally getting to what you think is the problem, only to find out that you were looking in the wrong place. This is the nightmare of state management, and has often been one of the hardest things about working with React specifically and other frameworks/systems. Redux, discussed later, imposes a strict set of rules on how the application state can be read and modified, simplifying state management.

### Technical Overview
Alice is a device management platform for industrial systems such as farms, factories, and other automated systems. Alice, in its fully built state, would provide users the capability to create hubs, sensors, and codes, and would enable the user to read sensor data and automatically control systems based on sensor data. Altogether my project consists of a backend server specifications to fit the product needs, frontend implementations of the user experience, backend implementations of the API server, application deployment automation, and workflow/project management considerations. Alice is made up of a [backend API server](https://github.com/benjithedalilama/alice-backend), a Mongo database, and a frontend static build directory served up with a [web server](https://github.com/benjithedalilama/alice-frontend).

## Frontend Implementation
### React
Keeping with the main principles I laid out earlier, I chose to use React as the frontend framework because of its component-based architecture, simplicity, strong community, and extensibility when paired with other patterns and best practices. React’s component-based architecture lends itself to a system that has well-defined separations of concerns, and great extensibility from the ability to built components into other components, creating an enforceable hierarchy within the application. For example, the `Hub` component can both be used in the `HubView` component and the `HubListView`, because the same basic hub component is present in both of those other components. The `Hub` component file is responsible solely for the `Hub` component, while the `HubView` is responsible for a specific display mode of the `Hub`. Separation of concerns and extensibility is built into React with its component-based architecture.

#### Components
I defined the components in my application for reusability and separation of concerns. Much like the `Hub` component, some of the components like the `List` component are meant to be extended into components like the `SensorList`, `CommandList`, and lists of other components that need customizable styling. Other components like the `ProfilePreview` and `Searchbar` are only called once in the code, but are created for modularity and future extensibility. Instead of housing a bunch of directives (`div`’s) in one JS file, I am able to ‘outsource’ the code into a React component and make the code cleaner, more modular, and ultimately easier to debug. Figures one and two below show the `ProfilePreview` component implementation and rendering. This example demonstrates that although components are meant to be reusable, they can still provide value even if they are only used once throughout the application. The tradeoffs between the time it takes to built an abstracted component, and the time saved by the component is important to consider, but sometimes building an abstract component is valuable just for the sake of modularity, separation of concerns, and future extensibility.

```
import React from 'react'
import { connect } from 'react-redux'
import './profilepreview.css'

const ProfilePreview = props => (
  <div className={`${props.className} profilePreview`}>
    {props.children}
    <p className="profilePreview__text profilePreview__element">USER.EMAIL</p>
    <img className="profilePreview__image profilePreview__element" src="https://lh3.googleusercontent.com/--SUy6eYwjwU/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-jKi24cBTO8NdPN3lLZeA2nUDGQ6g/s48-c-mo/photo.jpg" alt="Profile" />
  </div>
)

export default connect()(ProfilePreview)
```
<span style="display:block" align="center">

Fig. 1: `ProfilePreview` component implementation

</span>

```
<header>
  <div className="navbar">
    <div className="navbar__element navbar__breadcrumbs">
      <Breadcrumbs
        separator={<b> / </b>}
        item={BreadcrumbsLink}
        finalItem={'b'}
      />
    </div>
    <Searchbar className="navbar__element navbar__element--centered"></Searchbar>
    <ProfilePreview className="navbar__element">
    <Route exact path='/hubs' render={() => (<button onClick={() => this.props.changePage('/add-hub')} className="button button--alt profilePreview__element">ADD HUB</button>)}/>
    <Route exact path={['/hubs/:hubId', '/hubs/:hubId/sensors']} render={() => (<button onClick={() => this.props.changePage(`/hubs/${match.params.hubId}/add-sensor`)} className="button button--alt profilePreview__element">ADD SENSOR</button>)}/>
    <Route exact path={['/hubs/:hubId', '/hubs/:hubId/codes']} render={() => (<button onClick={() => this.props.changePage(`/hubs/${match.params.hubId}/add-code`)} className="button button--alt profilePreview__element">ADD CODE</button>)}/>
    </ProfilePreview>
  </div>
</header>
```
<span style="display:block" align="center">

Fig. 2: Header from `View` component implementation, renders `ProfilePreview` component

</span>

### Redux
React pairs well with Redux, a design pattern and library, enforcing a central source of truth for the application, simplifying the process of state management. State is handled with the Redux store, instead of in the specific components. The store provides a centralized state for the application that can only be updated by dispatching actions, which are then processed by reducers, functions which return a newly minted state, often based on which action they received. My component design pattern helps with state management because each component has the ability to dispatch actions which are processed by the root reducer and ultimately return a new application state. This means that I can manage the view dynamically across my entire application by dispatching actions within components, further separating concerns related to state management. For example, the `HubListView` loads in the hubs by dispatching an action that loads in the hubs by hitting an API endpoint. Figure three below shows this pattern in action.

```
export class HubListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHubs())
  }

  render() {
    const { hubs, filteredHubs } = this.props
    const displayedHubs = filteredHubs? filteredHubs : hubs

    return (
      <List>
        <BreadcrumbsItem to='/hubs'>Hubs</BreadcrumbsItem>
          {displayedHubs.map(hub =>
            <Hub hub={hub}>
              <Link className='list__text--main' to={{ pathname: `/hubs/${hub._id}`, hub: hub}}>{hub.name}</Link>
            </Hub>
          )}
      </List>
    )
  }
}
```
<span style="display:block" align="center">

Fig. 3: `HubListView` component dispatches an action to load the hubs after the component is mounted to the DOM (document object model)

</span>

Now you may ask, wouldn’t we be able to manage the state and the view of a component without Redux? Doesn’t it complicate things? Yes and no. The regular React pattern requires less upfront resources, but long term Redux helps handle complexity much better. An example of the regular React pattern is shown in figure four below where the `handleChange` function updates the state when an input’s `value` changes.

```
handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
}
```
<span style="display:block" align="center">

Fig. 4: The `handleChange` function

</span>

React provides us with a simple and straightforward approach to component state. However, we don’t have an easy process for our component to React to changes in application state, and we don’t want to unnecessarily use component state. We only want to use the component state for highly localized use cases, such as the `handleChange` function above, and not for application state. In a medium article, Micah Powell cleverly states: “If global state has to be reset when a component un-mounts, it probably should have been in the component state to begin with” (Powell, 2018). Our application as a whole does not care about the state of an input form or a menu being opened/closed, so we limit knowledge to the component state. The state should be handled by the component, not by the Redux store because we don’t expect those properties to persist onto another page.

In summary, State management becomes increasingly complex as we add more moving parts to our application, and the standardized process Redux enforces allows us to keep track of actions that affect our application. This does not come without costs, of course. Often developers will rely to heavily on Redux, making the actions and reducers unnecessarily bloated and unmanageable (2018). There is also a balance between presentational and container components. Many components may not need to be aware of the global state Redux introduces, and wrongfully making them aware of the global state further complicates the software system and frontend state management. Taking this all into account, Redux is well worth the investment of time and energy if used thoughtfully and effectively to reduce the complexity of state management.

#### Actions
When dispatched, actions hold information about what happened, which allows us to handle the actions separately from where they were called, further improving separation of concerns and extensibility. If actions are written clearly and atomically they contribute to a more extensible application overall by allowing the ability to create, modify, or remove an action. With confidence, a developer trusts that the action is the only element of the application concerned with a certain function or role. To demonstrate, figure five below shows an action notifying Redux that hubs were successfully fetched (loaded). When `fetchHubsSuccess` is dispatched with a `hubs` parameter, Redux receives the action, and can modify the application state based on the type and payload of the action. If we wanted to extend this action to return a payload including a timestamp, we could easily add that as a parameter in both the action definition and where we dispatch the action if necessary. This behavior simplifies state management because the central store is being accessed in a regulated way, which can make it easier to understand the flow of data in the application.

```
export const fetchHubsSuccess = hubs => ({
  type: FETCH_HUBS_SUCCESS,
  payload: { hubs }
})
```
<span style="display:block" align="center">

Fig. 5: `fetchHubsSuccess` action which returns a type and a payload of `hubs`

</span>

#### Services
I make use of services to separate API calls for loading in data from the server side. This improves extensibility and separation of concerns, ensuring there is only one place where those API endpoints are being called. This also improves reusability because we can call the services from anywhere in our application. Figure six shows the `HubService.getAll` function being called, and figure seven shows what is going on under the hood.

```
export const fetchHubs = () => {
  return async dispatch => {
    dispatch(fetchHubsBegin())

    try {
      const hubs = await HubService.getAll()
      dispatch(fetchHubsSuccess(hubs))
      return hubs
    }
    catch (err) {
      dispatch(fetchHubsFailure(err))
      handleErrors(err)
    }
  }
}
```
<span style="display:block" align="center">

Fig. 6: `fetchHubs` higher order action using the `HubService` class to get all hubs for a user

</span>

```
class HubService {
  static async getAll() {
    try {
      const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include'
      }
      const response = await fetch(`${url}/users/${getCookie('userId')}/hubs`, requestOptions)
      const parsed = await response.json()
      return parsed.hubs
    }
    catch (err) {
      throw err
    }
  }
```
<span style="display:block" align="center">

Fig. 7: `HubService` class `getAll` method implementation. This function gets all hubs for a specific user from an API, and returns all of the hubs.

</span>

#### Reducers
When actions are dispatched, reducers handle them, and return a newly minted application state. Reducers returning a new state, instead of modifying an existing state, helps simplify state management. Unexpected bugs can occur when mutating an existing state, so creating a new state every time a change needs to be made helps us reduce those bugs. As I mentioned earlier, there is a root reducer that is a combination of many smaller reducers that are split up for modularity purposes and separation of concerns. Figure eight below shows the `hubsReducer` which handles when the `fetchHubsSuccess` action is dispatched.

```
export default function hubReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HUB_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_HUB_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.hub
      }

    case FETCH_HUB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: []
      }
```
<span style="display:block" align="center">

Fig. 8: `hubReducer` function that returns a new state

</span>

In a perfect world, the hub reducer would only be responsible for hubs in the state, but since development time is often unpredictable, and other pieces of the system take priority, I did not have time to break out the monolithic reducer into smaller, more manageable pieces, which would ultimately help with separation of concerns.

### CSS Styling
For CSS styling, I followed the [BEM](http://getbem.com/) (block, element, modifier) pattern which helps set a strict pattern on CSS formatting and naming conventions, and if used correctly in an organization, leads to extensibility improvements. Additionally, the CSS classes are highly reusable throughout the application. Below figure nine shows the Login component which uses BEM-based classes for forms and their different components.

```
<div className="form__container">
  <div className="form">
    <form className="form__form" onSubmit={e => this.handleSubmit(e)} name="form">
      {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
      <input className="form__input form__element" type="text" name="username" value={username} onChange={e => this.handleChange(e)} placeholder="Username"></input>
      <input className="form__input form__element" type="password" name="password" value={password} onChange={e => this.handleChange(e)} placeholder="Password"></input>
      <button className="button button--main form__element">Login</button>
      <p className="form__text">Forgot password?</p>
      <button className="button button--alt form__element" onClick={e => this.changePage('/signup')}>Sign Up</button>
    </form>
  </div>
</div>
```
<span style="display:block" align="center">

Fig. 9: BEM classes being used in the `Login` view

</span>

The `form__container`, `form`, `form__form`, `form__text`, and other form-related classes can be reused, such as in the `AddCodeView` component and `Signup` components seen below in figures ten and eleven respectively.

```
<div className="form__container">
  <BreadcrumbsItem to={`/hubs`}>Hubs</BreadcrumbsItem>
  <BreadcrumbsItem to={`/hubs/${this.props.match.params.hubId}`}>{this.props.match.params.hubId}</BreadcrumbsItem>
  <BreadcrumbsItem to={`/hubs/${this.props.match.params.hubId}/add-code`}>Add Code</BreadcrumbsItem>
  <div className="form">
    <form className="form__form" onSubmit={(e) => this.handleSubmit(e)} name="form">
      {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
      <input className="form__input form__element" name="name" value={name} onChange={e => this.handleChange(e)} placeholder="Name"></input>
      <input className="form__input form__element" name="action" value={action} onChange={e => this.handleChange(e)} placeholder="Action"></input>
      <button className="button button--alt form__element">Add Code</button>
    </form>
  </div>
</div>
```
<span style="display:block" align="center">

Fig. 10: The `AddCodeView` component employs the use of form-related BEM classes

</span>

```
<div className="form__container">
  <div className="form">
    <form className="form__form" onSubmit={e => this.handleSubmit(e)} name="form">
      {this.props.error && <span className="form__text form__text--error">{this.props.error.message}</span>}
      <input className="form__input form__element" type="text" name="username" value={username} onChange={e => this.handleChange(e)} placeholder="Username"></input>
      <input className="form__input form__element" type="password" name="password" value={password} onChange={e => this.handleChange(e)} placeholder="Password"></input>
      <input className="form__input form__element" type="password" name="confirmPassword" value={confirmPassword} onChange={e => this.handleChange(e)} placeholder="Confirm Password"></input>
      <button className="button button--main form__element">Sign Up</button>
      <p className="form__text">Already have an account?</p>
      <button onClick={() => this.changePage('/login')} className="button button--alt form__element">Login</button>
    </form>
  </div>
</div>
```
<span style="display:block" align="center">

Fig. 11: Similarly the `Signup` component makes use of these classes

</span>

The BEM pattern takes no extra memory as it is not a library, and is simply a naming convention. The main drawback of the BEM pattern is that it is not enforceable without using external tools like a [BEM linter](https://github.com/postcss/postcss-bem-linter). Thus, it relies on people in the organization to educate new team members and facilitate the use of the pattern, otherwise there will be a mess of non-BEM and BEM CSS. When shared and used properly, the BEM pattern provides reusability and a strict rule set that can be followed by a software team improving extensibility.

### Tests
Testing is an important part of any application, and depending on how they are written, tests can bring attention to unexpected behaviors or broken features in your application. Figure twelve shows a test for the `hubsReducer` function that tests the reducer for specific behavior when the reducer does not receive a state parameter.

```
describe('hub reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        "error": null,
        "item": {
          "_id": [],
          "codes": [{
            "_id": [],
            "commands": [{
              "_id": [],
              "action": [],
              "createdAt": [],
              "data": []
            }],
            "createdAt": [],
            "type": []
          }],
          "createdAt": [],
          "deployed": [],
          "name": [],
          "sensors": [{
            "_id": [],
            "createdAt": [],
            "readings": [{
              "_id": [],
              "action": [],
              "createdAt": [],
              "data": []
            }],
            "type": []
          }
        ]},
        "items": [],
        "loading": false
    })
  })
```
<span style="display:block" align="center">

Fig. 12: Tests if the reducer returns the initial state when given an `undefined` state

</span>

Tests are especially useful when you have multiple people working on the same codebase. Running a test suite can show which pieces of a software application were affected by a change. This is critical for maintainability, especially if the tests are well written and test things we actually care about as opposed to things that don’t matter as much. Poorly written tests don’t really count as tests, since they often hurt the team and application development. A poorly written test is unclear and does not test the underlying behavior of the system under test. Whereas a well written test is understandable, simple, and breaks when unexpected behavior arises. Testing is a beast of its own, and many would say requires its own paradigms for coding, but if understood and written clearly, and effectively, tests contribute immensely to the robustness of a codebase.

### Deployment
Thoughtfully designing and implementing deployment systems using Docker and related tools  improves the development process greatly. By using docker-compose, a tool which spins up docker containers based on the `docker-compose.yml` and `docker-compose.override.yml` configuration files, I am able to run one command to deploy the frontend service. When working on a software team and a large codebase, every second counts. To illustrate, if deploying my application took a few steps, and 10 seconds total, as opposed to 2 seconds, we would experience a loss of 8 seconds of productivity. With a repeatable task like deploying the application, which happens maybe three or four times per day per team member, for a team of ten engineers we would waste 4 - 5 minutes everyday. Overtime this cumulates into massive time loss, thus every second we can shave off of repeatable tasks has lasting benefits for the team.

#### A Note on Docker
Docker is a powerful tool that promotes modularity and reusability. Docker ensures replicability with systems and extensibility from development to production. Anyone could pull down my docker image and spin up a container running my backend and frontend services, as long as they have a docker daemon running on their machine. This greatly simplifies the development and deployment processes due to the configuration being bundled into the image. It also allows me to run opaque services like Mongo with little configuration which creates a dependency but greatly simplifies the codebase.

## Backend API Server Specifications
### System Architecture
Separating my application into services separates concerns for each piece of the system improving extensibility. I designed my API system with a standard pattern using docker to deploy containers for three services: my backend API server, a Mongo database service, and the frontend service. The backend API service is responsible for handling incoming and outgoing requests and responses and communicating with the database, the database service is responsible for storing data, and the frontend service is responsible for running a web server that serves up a build directory with HTML, CSS, and Javascript to the client. If I needed to use a different variation of the Mongo database, or an entirely new database, I could change my Mongo-specific configuration and swap out Mongo for something like PostgreSQL. The interchangeability and modularity of the system demonstrates its extensibility. We can more easily extend our codebase because each piece of the system is concerned with different functions.

### Swagger API Spec
I wrote a [`swagger.yml`](https://github.com/benjithedalilama/alice-backend/blob/master/swagger.yml) file for my API that can be viewed on [this editor](https://editor.swagger.io/) to outline the API endpoints; however, my API is not automatically built from this file, nor vice versa, making this not very extensible. There are plenty of tradeoffs associated with different design and process decisions I have made; the spec was a necessary design piece that became an artifact as soon as I started implementing the API server. I should have maintained it as an up-to-date reference for documentation because this yaml file is useful for integrating my API with other applications, and provides a standard definition of my API for other apps to use. Without an up-to-date spec other users have to guess the format and requirements of the different endpoints, making it hard to use and unclear. For extensibility purposes, I could have linked the swagger file to my API in a more dynamic and data-based way, but the time tradeoffs forced me to focus my attention elsewhere. The swagger API spec demonstrates the realities of tradeoffs in developing a large system where you may need to sacrifice underlying principles because of limited resources.

## Backend Implementation
### Database
#### Introduction
I use MongoDB (Mongo) with the Mongoose ODM (object document model) to improve extensibility and state management. Mongoose helps make Mongo more extensible by enforcing schemas similar to SQL databases, providing built-in validation, instance methods, and returns more valuable data like the object that was updated instead of metadata. For example, Mongoose provides validation tools that absolve me of the need to write custom validation code, and allow me to focus on other elements of the database. The NoSQL nature of Mongo makes it fast and scalable, improving the application state management in both the frontend and the backend. I leverage the speed of Mongo by using embedded documents on the User object to quickly fetch the different data from users. By doing so, I can quickly fetch data for the frontend to display and ensure the state of the frontend application is updated rapidly and efficiently. In the backend, Mongo is the primary state management tool for application data; since the server is supposed to be stateless, the database is stateful and provides mutable information. Mongo’s intuitive and adaptable nature promotes extensibility and better state management. Additionally, Mongoose as an abstraction over the quick and robust Mongo makes for a highly extensible database and easier state management in the frontend and backend.

#### Models
Mongoose abstracts out a lot of the complicated bits from Mongo, enforcing separation of concerns. In a no-brainer fashion, I separated my models into individual files and their own folder; my models only have to define a schema and export a model, which separates concerns for the configuration of the database and improves reusability.

### API Server
#### Introduction
The API Endpoints are accessible via a Node.js server running Express, which holds many benefits. These benefits help separate concerns, extensibility, and help with authentication-related state management by providing centralized and easily adaptable systems for core functions such as implementation of middleware, routes, and authentication.

#### Middleware
The use of middleware greatly demonstrates separation of concerns and enables extensibility of functions executed in the middleware. Since middleware only has to be defined in one place when designed properly, and can be called when any API endpoint is hit, it is highly reusable. For example, the `validateToken` middleware seen in figure thirteen is called on any routes that require authentication in the API. Following that, figure fourteen shows the `validateToken` middleware being called.

```
import jwt from 'jsonwebtoken'

function validateToken (req, res, next) {
  let result
  const authorizationHeader = req.headers.authorization
  let token = req.cookies.token

  if (!authorizationHeader && !token) throw {status: 401, message: 'Authentication error. Token required.'}

  token = authorizationHeader ? authorizationHeader.split(' ')[1] : token
  const options = { expiresIn: '2d', issuer: 'Mr Beniamino' }

  try {
    result = jwt.verify(token, process.env.JWT_SECRET, options)
    req.decoded = result
    next()
  } catch (err) {
    next(err)
  }
}

export { validateToken }
```
<span style="display:block" align="center">

Fig. 13: `utils.js` file that houses `validateToken` function middleware

</span>

```
// Create new hub
app.post(`${base_path}/users/:userId/hubs`, validateToken, async (req, res, next) => {
  try {
    const hub = await HubService.create(req)
    res.send({hub: hub})
  }
  catch (err) {
    next(err)
  }
})

// Get hubs
app.get(`${base_path}/users/:userId/hubs`, validateToken, async (req, res, next) => {
  try {
    const hubs = await HubService.getAll(req)
    res.send({ hubs: hubs })
  }
  catch (err) {
    next(err)
  }
})
```
<span style="display:block" align="center">

Fig. 14: `validateToken` middleware is being used for these endpoints. To create a new hub and get hubs, a valid user token is required

</span>

The centralized nature of middleware ensures that the `validateToken` function is the only function and code responsible for validating the token. If I needed to change the method of authentication, I could simply modify my middleware function and any necessary parameters/configuration, ensuring that if the user is not authenticated a 401 Error is thrown, and if they are, executing the intended task, in the above case, getting hubs, or creating a hub, illustrating the separation of concerns and extensibility.

#### Routes
I follow the standard REST and CRUD patterns, exchanging JSON data, to make the server as stateless as possible. The routes for different paths enable the client to modify and access different documents in the database through the backend API. The API acts as an interface into the application, and indirectly communicates with the (stateful) database through services.

#### Services
Much like my frontend service, I implement a service pattern in my backend that separates the database access out from the API server file to services. These services enforce separation of concerns and abstract out database access. Figure fourteen shown above shows the `HubService` being used to create and get all hubs with their respective methods on the `HubService` class. If implemented correctly, this abstraction ensures I can expect a specific result to be returned by the class method, requiring only that I focus on the API server logic. This is especially powerful while working on teams that write robust and precise tests for behaviors of their systems’ individual parts, as they are able to more quickly collaborate and communicate behaviors. For example, I can write a test to describe the `HubService` and ensure that the delete method returns a promise while the getAll method returns an array. If a team member rewrites the `HubService` changing the behavior, running the test suite locally will result in the test suite failing, and more importantly the deployment tools should not build a breaking application.

#### Token Authentication
To simplify state management on my server I opted for token authentication instead of session-based authentication, which would require the server to store the state of the user session, increasing complexity. Instead, token authentication uses a ephemeral signed token that it validates on every protected request for a given user. This is a simple and highly secure way of authenticating. However, it does introduce some headaches, because if someone gets their hands on the token either by accessing the client’s cookies or by somehow impersonating the user, they can make requests on their behalf. I fight this by automatically logging out the user every time they leave the webpage or refresh. Also, since the token has a set expiration, there is not any direct way to invalidate a token, so I would have to implement a blacklist or other permissions models in the middleware if users want to invalidate tokens earlier than their expiry date. The stateless nature of token authentication further reduces the reliance on state in the backend server and reduces complexity for developers.

## Workflow and Project Management
### Local Development
#### Docker Compose
I optimized my local development workflow by mounting a volume on my backend and optimizing my Dockerfiles to take advantage of Docker layer caching. This way, I do not need to wait for my docker image to rebuild in order for me to see the changes reflected. I use a `docker-compose.override.yml` file in local development to run nodemon instead of node and open up specific ports only needed for development. The docker-compose file is combined with the override file in local development, while in production, where the override file does not exist, only the `docker-compose.yml` file is used as configuration. This abstraction helps with separating the concerns of the different environments and leads to better reusability.

#### Automatic Change Detection
During development, both my frontend and backend services automatically recompile upon saving changes. This enables quick development time by automating the recompilation process.