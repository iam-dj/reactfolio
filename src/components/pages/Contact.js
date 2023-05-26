import React from "react";
import "../../components/index.css";
import bg from '../assets/bg.png'



export default function Profile() {
  return (
    <div className="">
        <img className="mainContact" src={bg} alt="code spelt out"/>
    <div  class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <form class="contact100-form validate-form">
        <h2 class="contact100-form-title text-center">Get in Touch</h2>
        <div class="form-group">
          <div class="wrap-input100 validate-input" data-validate="Name is required">
            <input class="form-control input100" id="name" type="text" name="name" placeholder="Name" />
            <span class="label-input100">Name</span>
          </div>
        </div>
        <div class="form-group">
          <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input class="form-control input100" id="email" type="text" name="email" placeholder="Email" />
            <span class="label-input100">Email</span>
          </div>
        </div>
        <div class="form-group">
          <div class="wrap-input100 validate-input" data-validate="Phone is required">
            <input class="form-control input100" id="phone" type="text" name="phone" placeholder="Phone" />
            <span class="label-input100">Phone</span>
          </div>
        </div>
        <div class="form-group">
          <div class="wrap-input100 validate-input" data-validate="Message is required">
            <textarea class="form-control input100" name="message" placeholder="Your message..."></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input input-checkbox100" id="ckb1" type="checkbox" name="copy-mail" />
            <label class="form-check-label label-checkbox100" for="ckb1">Send copy to my email</label>
          </div>
        </div>
        <div class="form-group">
          <div class="text-center">
            <button class="btn btn-primary contact100-form-btn">Send Email</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  );
}
