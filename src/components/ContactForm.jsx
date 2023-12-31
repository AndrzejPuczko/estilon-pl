'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
	const form = useRef()

	const [formSent, setFormSent] = useState(false)
	const [reCaptchaError, setReCaptchaError] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		const captchaValue = form.current.querySelector('textarea[name="g-recaptcha-response"]').value
		if (!captchaValue) {
			setReCaptchaError('Proszę potwierdzić reCAPTCHA')
			return
		}

		emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
			result => {
				setFormSent(true)
				console.log(result.text)
			},
			error => {
				console.log(error.text)
			}
		)
	}

	if (formSent) {
		return <div className="kontakt-form py-20 max-w-5xl mx-auto">Dziękujemy za przesłanie wiadomości! Odpowiemy najszybciej jak to możliwe.</div>
	}

	return (
		<div className="kontakt-form py-20 max-w-3xl mx-auto">
			<form ref={form} onSubmit={sendEmail}>
				<Input type="text" id="name" placeholder="Imię i nazwisko" name="user_name" required className="my-2" />
				<Input type="email" id="email" placeholder="Adres email" name="user_email" required className="my-2" />
				<Textarea placeholder="Wprowadź swoją wiadomość" name="message" required className="my-2" />
				<ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA} onChange={sendEmail} className="my-2" />
				<p>{reCaptchaError}</p>
				<Button type="submit" value="Send">
					Wyślij
				</Button>
			</form>
		</div>
	)
}
