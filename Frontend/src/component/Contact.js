import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className='display-6 fw-bold mt'>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center" id="contact">
                        <img src="https://cdn.dribbble.com/users/1537480/screenshots/4644029/media/6f2bba6313b7ef25950e42b365a45969.jpg?compress=1&resize=800x600&vertical=top" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Fadilla Ratna Dwita"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark" id="blue">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
