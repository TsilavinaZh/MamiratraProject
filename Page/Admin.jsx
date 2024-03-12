import React from "react";
import AdminPic from '../image/travisci.png'

function Admin() {
    return (
        < div >
            <div class="lockscreen">
                <div class="lockscreen-wrapper">
                    <div class="lockscreen-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    <div class="lockscreen-name">John Doe</div>
                    <div class="lockscreen-item">
                        <div class="lockscreen-image">
                            <img src={AdminPic} alt="user image" />
                        </div><form class="lockscreen-credentials">
                            <div class="input-group">
                                <input type="password" class="form-control" placeholder="password" />
                                <div class="input-group-btn">
                                    <button class="btn"><i class="fa fa-arrow-right text-muted"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="help-block text-center">
                        Enter your password to retrieve your session
                    </div>
                    <div class='text-center'>
                        <a href="login.html">Or sign in as a different user</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin;