import Link from "next/link";


const Register = () => (


    <div className={"login"}>
        <div className={"login--block"}>
            <div className="login-page">
                <div className="form">
                    <h3>Register Now</h3>
                    <p>
                        Copyright Disclaimer Under Section 107 of the
                    </p>
                    <p>
                    Copyright Act 1976,
                    </p>

                    <form className="login-form">
                        <div className={"inp"}>
                              <img src={"/static/person.png"}/>
                                <input type="text" placeholder="Username"/>
                        </div>

                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>

                        <div className="form-group">
                            <input type="checkbox" id="html"/>
                            <label htmlFor="html">Stay Signed In</label>
                        </div>

                        <button>CREATE</button>
                        <p className="message">Already registered? <Link href={"/Login"}><a>Sign-in</a></Link></p>
                    </form>
                </div>
            </div>
        </div>
        
        <style jsx>{`
            
            .login-form .inp{
                display:flex;
                flex-direction:row;
       
             }            
             
             .inp img{
              
                vertical-align:center;
             }
            
            .login-form img{
                width:45px;
                height:45px;
                background-color:#000;
            }
    
            .login{
                 margin-top: -5%;
                 height:100vh;
                 display: table;
                 width:100%;
            }
            
            .login--block{
                    background-color:#fff;
                    padding:20px;
                    display: table-cell;
                    text-align: center;
                    vertical-align: middle;
            }
          
             .login--block h3{
                text-align:center;
                font-size:30px;
             }
                
              .login--block p{
                text-align:center;
                font-size:12px;
             }
                             
              .login-page {
                  width: 360px;
                  padding: 8% 0 0;
                  margin: auto;
                }
                
                .form {
                  position: relative;
                  z-index: 1;
                  background: #FFFFFF;
                  max-width: 360px;
                  margin: 0 auto 100px;
                  padding: 45px;
                  text-align: center;
                }
                
                .form input {
                  outline: 0;
                  background: #fff;
                  width: 100%;
                  border: 0;
                  margin: 0 0 15px;
                  padding: 15px;
                  box-sizing: border-box;
                  font-size: 14px;
                  box-shadow: inset 0 0 1px rgba(0,0,0,1);           
                }
                
                 .form input:focus {
                  box-shadow: inset 0 0 3px rgba(251,176,59,1);           
                }
               
                .form button {
                        height:50px; 
                        width:200px; 
                        margin: 20px -50px; 
                        background-color: #FBB03B;
                        border: 1px solid #FBB03B;
                        font-size: 1.5em;
                        margin-bottom: 50px;
                        color:#fff;
                        text-shadow: 1px 1px 2px #000;
                        font-family: Impact;
                        transition: 1s ease-in;
                        box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
                        cursor: pointer;
                }
                .form button:hover,.form button:active,.form button:focus {
                       background-color:#3D6650;
                       color: #FBB03B;
                       border:none;
                }
                .form .message {
                  margin: 15px 0 0;
                  color: #b3b3b3;
                  font-size: 12px;
                }
                .form .message a {
                  color: #FBB03B;
                  text-decoration: none;
                }
                .form .register-form {
                  display: none;
                }
                .container {
                  position: relative;
                  z-index: 1;
                  max-width: 300px;
                  margin: 0 auto;
                }
                .container:before, .container:after {
                  content: "";
                  display: block;
                  clear: both;
                }
                .container .info {
                  margin: 50px auto;
                  text-align: center;
                }
                .container .info h1 {
                  margin: 0 0 15px;
                  padding: 0;
                  font-size: 36px;
                  font-weight: 300;
                  color: #1a1a1a;
                }
                .container .info span {
                  color: #4d4d4d;
                  font-size: 12px;
                }
                .container .info span a {
                  color: #000000;
                  text-decoration: none;
                }
                .container .info span .fa {
                  color: #EF3B3A;
                }   
                
                .form-group {
                  display: block;
                  margin-bottom: 10px;
                  margin-left: -160px;
                }
                
                .form-group input {
                  padding: 0;
                  height: initial;
                  width: initial;
                  margin-bottom: 0;
                  display: none;
                  cursor: pointer;
                }
                
                .form-group label {
                  position: relative;
                  cursor: pointer;
                }
                
                .form-group label:before {
                  content:'';
                  -webkit-appearance: none;
                  background-color: transparent;
                  box-shadow: inset 0 0 1px rgba(0,0,0,1);    
                  padding: 8px;
                  display: inline-block;
                  position: relative;
                  vertical-align: middle;
                  cursor: pointer;
                  margin-right: 10px;
       
                }
                
                .form-group input:checked + label:after {
                  content: '';
                  display: block;
                  position: absolute;
                  top: 2px;
                  left: 0px;
                  width: 15px;
                  height: 15px;
                  background-color:#FBB03B;
                  
                }
                
                label{
                        color:#b3b3b3;
                        font-size:14px;
                        font-family: Whitney,Raisonne DemiBold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
                }
   
         `}</style>
    </div>
);

export default Register;
