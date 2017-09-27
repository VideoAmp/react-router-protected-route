react-router-protected-route
============================
A Route component that redirects unauthenticated users trying to access an auth-required route.

# Example
The code below assumes `isAccessible` is `true`, and will render the protected route.
```js
<Switch>
    <ProtectedRoute
        isAccessible
        redirectToPath="/login"
        path="/"
        component={() => <p>Logged in</p>}
    />
    <Route
        path="/login"
        render={() => <p>Please sign in.</p>}
    />
</Switch>
```
