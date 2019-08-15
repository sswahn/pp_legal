import React from 'react'

function ContactUs() {
  return (
    <div style={{width: '100%'}}>
      <div style={{ width: '100%'}}>
        <h1>Customer Service</h1>
        <p>Our live representatives are ready to answer your questions.</p>
        <div className="flex">

          <div className="contact-info">
            <div className="subheader">Call us toll-free at: <br /><span style={{ color: 'red' }}>888-703-9850</span></div>
            <div>
              <div className="preamble">Call us for:</div>
              <ul>
                <li>product questions</li>
                <li>package tracking</li>
                <li>billing inquiries</li>
              </ul>
            </div>
            <div>
              <div className="preamble">Hours of Operation are:</div>
              <strong>9:00am to 9:00pm Monday through Friday and 10:00am to 4:00pm on Saturday (EST)</strong>
            </div>
          </div>
          <div>
            <img className="contact-image" src="/images/contact_us.jpg" alt="Contact us" />
          </div>
        </div>

        <div className="contact-info">
          <p>For Returns Please Send to:</p>
          <p>PO Box 1127 <br /> Downsview, ON M3J OR2</p>
          <p>NOTE: We cannot accept cancellations via email or process packages marked "return to sender". All returns must receive an RMA number in order to ensure proper processing. To get an RMA number please call Customer Care toll–free at 888-703-9850</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs