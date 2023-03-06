// NOTE baigiau čia

import React, { useState } from 'react'
import Modal from 'react-modal'
import nodemailer from 'nodemailer'

Modal.setAppElement('#root')

const ContactMeModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Create a transporter object with Gmail account credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'YOUR_GMAIL_ADDRESS',
                pass: 'YOUR_GMAIL_PASSWORD'
            }
        })

        // Define the email message
        const messageBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        const mailOptions = {
            from: 'YOUR_GMAIL_ADDRESS',
            to: 'YOUR_DESTINATION_EMAIL_ADDRESS',
            subject: 'New message from your website',
            text: messageBody
        }

        // Send the email message
        try {
            await transporter.sendMail(mailOptions)
            alert('Your message has been sent successfully!')
            setModalIsOpen(false)
        } catch (error) {
            alert(`Something went wrong. Error message: ${error.message}`)
        }
    }

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Contact me</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Contact me</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </Modal>
        </div>
    )
}

export default ContactMeModal
