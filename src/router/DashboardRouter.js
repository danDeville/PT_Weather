// Base
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from "../pages/Home"

// Containers
import Layout from '../containers/Layout'

const DashboardRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Layout>
  )
}

export default DashboardRouter