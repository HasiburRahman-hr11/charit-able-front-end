import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Cases from './pages/Cases';
import Profile from './pages/Profile';
import Donate from './pages/Donate';
import SingleBlog from './pages/SingleBlog';
import SingleCase from './pages/SingleCase';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './Admin/Dashboard';
import AddBlog from './Admin/AddBlog';
import AddCase from './Admin/AddCase';
import AdminBlogs from './Admin/AdminBlogs';
import AdminCases from './Admin/AdminCases';
import EditBlog from './Admin/EditBlog';
import EditCase from './Admin/EditCase';
import Donations from './Admin/Donations';
import Users from './Admin/Users';
import EditUser from './Admin/EditUser';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:caseId" element={<SingleCase />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<SingleBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/blogs" element={<AdminBlogs />} />
        <Route path="/dashboard/blogs/edit/:blogId" element={<EditBlog />} />
        <Route path="/dashboard/blogs/add" element={<AddBlog />} />
        <Route path="/dashboard/cases" element={<AdminCases />} />
        <Route path="/dashboard/cases/add" element={<AddCase />} />
        <Route path="/dashboard/cases/edit/:caseId" element={<EditCase />} />
        <Route path="/dashboard/donations" element={<Donations />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/edit/:userId" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;