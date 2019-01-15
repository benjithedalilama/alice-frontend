import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, ...props }) => (
  // Fix this, workaround for dev
  true
  ? <Route {...props}/>
  : <Redirect to="/login"/>
)

export default ProtectedRoute
