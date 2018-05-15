Implementation of a wrapper component (User) and under it 2 more components (Profile and Followers).

The structure of my components are like this

```
- User
    - Profile
    - Followers
```

```
ReactDOM.render(<User profileData={DATA} />, document.getElementById('root'));
```

This is how I specify where on the page (``window.document``) we want the ``User`` component to be rendered. This is done by calling ``ReactDOM.render``, passing in the User component as the first argument and a reference to a ``div`` with the id of ``root`` as the second. So this entire app will go into this ``root`` div. 

Also note, I pass the ``DATA`` into the User component, by simply changing a little bit on the ``ReactDOM.render`` method. And the curly brackets tells React that we’re escaping out of the JSX syntax in order to add a Javascript expression (``DATA``).

And with the above line of code in ``ReactDOM.render`` now we’re able to access this data from within the User component through ``this.props.profileData`` . However, the User component is simply a **wrapper** around the ``Profile`` and ``Follower`` components. We’re going to send the data further down the hierarchy, as a prop to the child by instantiating it within the parent. 

We instantiate three variables within the top-level ``User`` component; ``imgURL`` and ``name`` for ``Profile`` component, and only ``followerList`` for ``Followers`` component. This is because the ``Followers`` component doesn’t need the rest of the data; it’s simply going to display a list of followers.

And then notice, inside the ``Profile`` component we fetch the data that we’ve passed down to it from ``Follower`` component by using ``this.props.name`` and ``this.props.imgURL``


And in the ``Followers`` component, we’re looping through the followers array stored in ``this.props.followerList``

