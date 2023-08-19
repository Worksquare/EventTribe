import styles from "./SignupPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils";
import {
  google_icon,
  facebook_transparent_icon,
  add_image_icon,
} from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import React, { ChangeEvent, useState } from "react";
import { useSignupMutation } from "../../redux/app/api/signupApiSlice";

const SignupPage = () => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [activeTab, setActiveTab] = useState('individual')
  const [signup, { isLoading: isSignupLoading }] = useSignupMutation()
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    companyName: "",
    jobTitle: "",
  })  

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file

    if (file) {
      setSelectedImage(file);
    }
  }

  const handleIndividualButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setActiveTab('individual')
  }

  const handleOrganizationButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setActiveTab('organization')
  }

  const handleSignup = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      if (activeTab === 'individual') {
        // Handle individual signup
        const individualUserData = {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          // Additional fields specific to individual signup
        };

        const response = await signup(individualUserData)
        console.log(response)
        setTimeout(() => {
          navigate('/event-listings')
        }, 2000)
      } else {
        // Handle organization signup
        const organizationUserData = {
          firstName: userData.firstName,
          lastName: userData.lastName,
          company: userData.company,
          jobTitle: userData.jobTitle,
          email: userData.email,
          password: userData.password,
          // Additional fields specific to organization signup
        };

        const response = await signup(organizationUserData)
        console.log(response)
        setTimeout(() => {
          navigate('/event-listings')
        }, 2000)
      }
    } catch (error) {
      // Handle signup error
    }
  }

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignupPage}>
          <form>
            <div className={styles.button_container}>
              <button onClick={handleIndividualButton}>Individual</button>
              <button onClick={handleOrganizationButton}>Organization</button>
            </div>

            {activeTab === "individual" 
              ?
                <>
                  <div className={styles.profile_image_container}>
                    <div className={styles.input_container}>
                      <input type="file" className={styles.file_input} onChange={handleImageChange} />
                    </div>
                    {selectedImage ? (
                      <img 
                        src={URL.createObjectURL(selectedImage)}
                        alt="selected image"
                        className={styles.image_placeholder}
                      />
                    ) : (
                      <img
                        src={add_image_icon}
                        alt="add image"
                        className={styles.image_placeholder}
                      />
                    )}
                  </div>

                  <div className={styles.input_label_container}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="password">Password *</label>
                    <input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                  </div>

                  <div className={styles.event_notification_container}>
                    <input type="checkbox" />
                    <p>
                      I’d like to get notifications on the latest events from event
                      tribe in my city
                    </p>
                  </div>

                  <button 
                    className={styles.signup_button} 
                    onClick={handleSignup}
                    disabled={isSignupLoading}
                  >
                    {isSignupLoading ? 'Signing up...' : 'Sign Up'}
                  </button>

                  <p className={styles.terms_and_conditions_text}>
                    By continiung , you agree to{" "}
                    <Link to={"#"} className={styles.terms_Conditions_link}>
                      our Terms & Conditions Of Service
                    </Link>
                  </p>

                  <button className={styles.google_button}>
                    <p>Sign Up with </p>
                    <img src={google_icon} alt="Google Icon" />
                  </button>

                  <button className={styles.facebook_button}>
                    <p>Sign Up with </p>
                    <img src={facebook_transparent_icon} alt="Facebook Icon" />
                  </button>

                  <p>
                    Already have an account{" "}
                    <Link to={routePaths.LOGIN} className={styles.signin_link}>
                      Sign In
                    </Link>{" "}
                  </p>
                </>
              :
                <>
                  <div className={styles.profile_image_container}>
                    <div className={styles.input_container}>
                      <input type="file" className={styles.file_input} />
                    </div>
                    <img
                      src={add_image_icon}
                      alt="add image"
                      className={styles.image_placeholder}
                    />
                  </div>

                  <div className={styles.input_label_container}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, companyName: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="jobTitle">Job Title *</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, jobTitle: e.target.value })} />
                  </div>
                  <div className={styles.input_label_container}>
                    <label htmlFor="password">Password *</label>
                    <input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                  </div>

                  <div className={styles.event_notification_container}>
                    <input type="checkbox" />
                    <p>
                      I’d like to get notifications on the latest events from event
                      tribe in my city
                    </p>
                  </div>

                  <button 
                    className={styles.signup_button}
                    onClick={handleSignup}
                    disabled={isSignupLoading}
                  >
                    {isSignupLoading ? 'Signing up...' : 'Sign Up'}
                  </button>

                  <p className={styles.terms_and_conditions_text}>
                    By continiung , you agree to{" "}
                    <Link to={"#"} className={styles.terms_Conditions_link}>
                      our Terms & Conditions Of Service
                    </Link>
                  </p>

                  <button className={styles.google_button}>
                    <p>Sign Up with </p>
                    <img src={google_icon} alt="Google Icon" />
                  </button>

                  <button className={styles.facebook_button}>
                    <p>Sign Up with </p>
                    <img src={facebook_transparent_icon} alt="Facebook Icon" />
                  </button>

                  <p>
                    Already have an account{" "}
                    <Link to={routePaths.LOGIN} className={styles.signin_link}>
                      Sign In
                    </Link>{" "}
                  </p>
                </>
            }
          </form>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignupPage;
