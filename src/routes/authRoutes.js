import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', (req, res) => {
  console.log('register');
});

router.post('/login', (req, res) => {
  console.log('login');
});

export default router;
