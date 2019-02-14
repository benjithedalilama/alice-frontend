import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, ...props }) => (
  isAuthenticated
  ? <Route {...props}/>
  : <Redirect to="/login"/>
)

export default ProtectedRoute
