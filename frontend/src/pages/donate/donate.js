import React from 'react'
import './donate.css'

export default function Donate() {
    return <>
        <div className="donate-container">
            <h1>"Donate & Trade" Hero Banner</h1>
            <form action="" method="" name="donate-form">
                <div className="full-width">
                    <h2>What would you like to do today?</h2>
                </div>
                <div>
                    {/*Donate Books Radio Button */}
                    <label for="donate">Donate Books</label>
                    <input type="radio" name="donateTrade" id="yes" value="yes" />
                </div>
                <div>
                    {/*Trade Books Radio Button */}
                    <label for="trade">Trade Books</label>                      
                    <input type="radio" name="donateTrade" id="no" value="no" />
                </div>
                <div className="full-width">
                    <h3 class="sub-title">CONTACT INFORMATION</h3>
                </div>
                <div>
                    {/*First Name*/}
                    <label for="firstName" class="required-input">First Name</label>
                    <input type="text" placeholder="First Name" className="firstName"></input>
                </div>
                <div>
                    {/*Last Name*/}
                    <label for="lastName" class="required-input">Last Name</label>
                    <input type="text" placeholder="Last Name" className="lastName"></input>
                </div>
                <div className="full-width">
                    {/*Email*/}
                    <label for="email" class="required-input">Email</label>
                    <input type="text" placeholder="Email Address" className="email"></input>
                </div>
                <div className="full-width">
                    <h3 class="sub-title">BOOK INFORMATION</h3>
                </div>
                <div>
                    {/*Book Title*/}
                    <label for="bookTitle" class="required-input">Book Title</label>
                    <input type="text" placeholder="Book Title" className="bookTitle"></input>
                </div>
                <div>
                    {/*Book Author*/}
                    <label for="bookAuthor" class="required-input">Book Author</label>
                    <input type="text" placeholder="Book Author" className="bookAuthor"></input>
                </div>
                <div>
                    {/*Book Edition*/}
                    <label for="bookEdition" class="required-input">Book Edition/Print</label>
                    <input type="text" placeholder="Book Edition/Print" className="bookEdition"></input>
                </div>        
                <div>
                    {/*Book ISBN*/}
                    <label for="bookISBN" class="required-input">ISBN/LOC Number</label>
                    <input type="text" placeholder="Book ISBN/LOC Number" className="bookISBN"></input>
                </div>
                <div>
                    {/*Book Condition*/}
                    <label for="bookCondition" class="required-input">Book Condtion</label>
                    <input type="text" placeholder="Book Condition" className="bookCondition"></input>
                </div>
                <div>
                    {/*Hardcover or Softcover*/}
                    <label for="bookCover" class="required-input">Hardcover or Softcover</label>
                    <input type="text" placeholder="Hardcover or Softcover" className="bookCover"></input>
                </div>
                <div className="full-width">
                    {/*Submit Button*/}
                    <input type="submit" className="form-submit" value="Submit"></input>
                </div>
            </form>
            <div className="faq">
                <h2>FAQ</h2>
                <h3>How does store credit work?</h3>
                <p>Store credit is given for adult paperbacks and hardcovers at 25% of our selling price.</p>
                <p>For example:</p>
                <p>$2.00 in credit per hardcover book sold at $8.00 in store.</p>
                <p>$1.25 in credit per paperback book sold at $5.00 in store.</p>
                <h3>Does the condition of my books matter?</h3>
                <p>Books must be clean (no moldew or mold) and have all their pages, tight bindings, and front/back covers.</p>
                <h3>What if my books are not all accepted?</h3>
                <p>Your books we are unable to accept can either be returned to you or given to the appropriate non-profit entity on your behalf.</p>
            </div>
        </div>
            <div className="location">
                <div className="visit">
                    <h1>Visit Us</h1>
                    <img src="images/map.jpg" alt="location of store on map"/>
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <p>Joybird Books LLC
                        <br/>
                        3018 Corrine Drive
                        <br/>
                        Orlando, FL 32803
                        <br/>
                        407 951-5436
                    </p>
                    <button>Get Directions</button>
                </div>
                <div className='hours'>
                    <h2>Working Hours</h2>
                    <p>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                    <p>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                    <p>Wednesday &nbsp;&nbsp;10AM - 5PM</p>
                    <p>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                    <p>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                    <p>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                    <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                </div>     
            </div>
    </>
}