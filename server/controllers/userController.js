import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from "../models/Resume.js";
import crypto from 'crypto'
import transporter from '../configs/email.js'

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return token;
}

// POST: /api/users/register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.status(400).json({ message: 'Missing required fields' })

        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ message: 'User already exists' })

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ name, email, password: hashedPassword })

        const token = generateToken(newUser._id)
        newUser.password = undefined;
        return res.status(201).json({ message: 'User created successfully', token, user: newUser })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: 'Invalid email or password' })

        const isMatch = await user.comparePassword(password)
        if (!isMatch)
            return res.status(400).json({ message: 'Invalid email or password' })

        const token = generateToken(user._id)
        user.password = undefined;
        return res.status(200).json({ message: 'Login successful', token, user })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// GET: /api/users/data
export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId)
        if (!user)
            return res.status(404).json({ message: 'User not found' })

        user.password = undefined;
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
    try {
        const userId = req.userId;
        const resumes = await Resume.find({ userId })
        return res.status(200).json({ resumes })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// POST: /api/users/forgot-password
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        if (!email)
            return res.status(400).json({ message: 'Email is required' })

        const user = await User.findOne({ email })
        if (!user)
            return res.status(404).json({ message: 'No account found with this email' })

        const token = crypto.randomBytes(32).toString('hex')
        user.resetToken = token
        user.resetTokenExpiry = Date.now() + 1000 * 60 * 60
        await user.save()

        const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`

        await transporter.sendMail({
            from: `"BuildResume" <${process.env.EMAIL_USER}>`,
            to: user.email,
            subject: 'Reset your BuildResume password',
            html: `
                <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;">
                    <h2 style="color:#4F46E5;">Reset your password</h2>
                    <p>Click the button below to reset your password. This link expires in 1 hour.</p>
                    <a href="${resetLink}" style="display:inline-block;padding:12px 28px;background:#4F46E5;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0;">
                        Reset Password
                    </a>
                    <p style="color:#888;font-size:13px;">If you didn't request this, ignore this email.</p>
                </div>
            `
        })

        return res.status(200).json({ message: 'Password reset email sent' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// POST: /api/users/reset-password
export const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body
        if (!token || !password)
            return res.status(400).json({ message: 'Missing required fields' })

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }
        })

        if (!user)
            return res.status(400).json({ message: 'Invalid or expired reset link' })

        user.password = await bcrypt.hash(password, 10)
        user.resetToken = undefined
        user.resetTokenExpiry = undefined
        await user.save()

        return res.status(200).json({ message: 'Password reset successfully' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// PUT: /api/users/update-profile
export const updateProfile = async (req, res) => {
    try {
        const userId = req.userId
        const { name, email, password, newPassword } = req.body

        const user = await User.findById(userId)
        if (!user)
            return res.status(404).json({ message: 'User not found' })

        if (name) user.name = name
        if (email) user.email = email

        if (newPassword) {
            const isMatch = user.comparePassword(password)
            if (!isMatch)
                return res.status(400).json({ message: 'Current password is incorrect' })
            user.password = await bcrypt.hash(newPassword, 10)
        }

        await user.save()
        user.password = undefined
        return res.status(200).json({ message: 'Profile updated successfully', user })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}