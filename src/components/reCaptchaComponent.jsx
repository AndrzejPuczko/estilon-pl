const reCaptchaComponent = () => {
	return <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}></div>
}

export default reCaptchaComponent
