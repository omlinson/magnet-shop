import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
  <Seo title="Privacy Policy" />
  <div>
  <h1>AI Generated Generic Privacy Policy</h1>
    <p>Hey there! Welcome to <strong>[Your Website Name]</strong>, located at Your Website URL We believe in keeping things simple and transparent, so here's a quick rundown of how privacy works on our site.</p>

    <h2>What Information Do We Collect?</h2>
    <p>We don't collect any personal data directly on our website. However, some tools we use might gather data to help us understand how you interact with the site, improve your experience, and show you relevant content:</p>
    <p>Fun fact: some browsers and VPNs will still block data collection even if you accept to share!</p>
    <ul>
        <li><strong>Netlify:</strong> Takes care of hosting our website. They might collect some basic info about your device and how you use the site, but nothing personally identifiable to you.</li>
        <li><strong>Google Tag Manager:</strong> This is being used to monitor your consent. Its datalayer stores information about your session but is only stored & shared with the following if you accept.</li>
        <li><strong>Google Tags & Meta Pixel:</strong> These tools help us see overall patterns like which pages are popular and how long people spend on the site. Again, no personal stuff about you specifically.
        They are managed with Google Tag Manager.</li>
    </ul>

    <h2>Cookies and Tracking</h2>
    <p>We might use cookies to enhance your experience and track how the site is used. Think of cookies as tiny bits of data stored on your browser to remember your preferences including privacy.</p>
    <p>Google and Meta might use cookies for their tracking. This helps us with things like understanding traffic patterns and knowing if our ads are effective.</p>

    <h2>Your Choices</h2>
    <p>Feel free to disable cookies through your browser settings if you're not comfortable with them.</p>
    <p>If you ever click on a "Yes" or "No" for tracking on our site, you can always change your mind. Just look for the consent message again, or contact us if you're unsure.</p>

    <h2>Privacy Policy Updates</h2>
    <p>We might update this policy as things change. If we make significant changes, we’ll make sure to announce them on the website.</p>

    <h2>Contact Us</h2>
    <p>Got any questions about how we handle privacy? Just drop us a line at Your Contact Information.</p>

    <p>Remember, your privacy is important to us, and we're not in the business of selling your data. We're just here to provide a great website experience.</p>

    <p><em>Note:</em><br/>
    This is a simplified version of a privacy policy and is meant for general use. Depending on the nature of your website, your audience, and legal requirements, especially under laws like GDPR or CCPA, you might need a more detailed or legally vetted document. Consider consulting with a legal professional for a comprehensive privacy policy tailored to your specific needs.</p>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="About omlinson & Philip Tomlinson" />

export default SecondPage
