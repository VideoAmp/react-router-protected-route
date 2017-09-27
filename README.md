react-router-protected-route
============================
[![Build Status](https://semaphoreci.com/api/v1/projects/aa2d05a9-89ee-4b56-b1f6-504ca358b055/1538588/badge.svg)](https://semaphoreci.com/videoamp/react-router-protected-route)

A Route component that redirects unauthenticated users trying to access an auth-required route.

# Example
The code below assumes `isAccessible` is `true`, and will render the protected route.
```js
import ProtectedRoute from "react-router-protected-route";

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
