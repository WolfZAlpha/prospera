import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForm, setShowForm] = useState(true); // Default to true for non-mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setShowForm(false); // Hide form on mobile
      } else {
        setShowForm(true); // Show form on larger screens
      }
    };

    // Set initial state based on current window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    xAccount: '',
    telegram: '',
    arbitrumWallet: '',
    btcWallet: '',
    ethWallet: '',
    solWallet: '',
    usdtWallet: '',
    usdcWallet: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? '/api/users/register' : '/api/users/login';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Server response:', result); // Debugging line
      if (response.ok) {
        onLogin();
        window.location.href = '/desktop'; // Ensure this path is correct
      } else {
        console.log(result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="login-page-container">
      <Container fluid className="login-section">
        <Row className="d-flex align-items-center h-100">
          <Col>
            <div className={`box ${showForm ? '' : 'hide-form'}`}> {/* Conditionally add 'hide-form' class */}
              <Card className="text-white my-5 mx-auto login-card">
                <Card.Body className="p-2 d-flex flex-column align-items-center mx-auto w-100">
                  {!isSignUp ? (
                    <>
                      <h2 className="fw-bold mb-2 text-uppercase center-text">Login</h2>
                      <p className="text-white-50 mb-2 center-text">Please enter your login and password!</p>

                      <Form onSubmit={handleSubmit} className="w-100">
                        <Form.Group className="mb-2">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                        </Form.Group>

                        <p className="small mb-2 center-text"><a className="text-white-50" href="#!">Forgot password?</a></p>
                        <Button variant="dark" type="submit" className="login-btn w-100">
                          Login
                        </Button>
                      </Form>

                      <div className="d-flex flex-row mt-2 mb-2 justify-content-center">
                        <Button variant="link" className="text-white">
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button variant="dark" href="/auth/twitter" className="login-btn w-100 mt-2">
                          Login with Twitter
                        </Button>
                      </div>

                      <div>
                        <p className="mb-0 center-text">Don't have an account? <a href="#!" className="text-white-50 fw-bold" onClick={toggleSignUp}>Sign Up</a></p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="fw-bold mb-2 text-uppercase center-text">Sign Up</h2>
                      <p className="text-white-50 mb-2 center-text">Please enter your details to create an account!</p>

                      <Form onSubmit={handleSubmit} className="sign-up-form w-100">
                        <Row>
                          <Col md="6">
                            <Form.Group className="mb-2">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>X-Account</Form.Label>
                              <Form.Control type="text" placeholder="X-Account" name="xAccount" value={formData.xAccount} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Telegram</Form.Label>
                              <Form.Control type="text" placeholder="Telegram" name="telegram" value={formData.telegram} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group className="mb-2">
                              <Form.Label>Arbitrum Wallet</Form.Label>
                              <Form.Control type="text" placeholder="Arbitrum Wallet" name="arbitrumWallet" value={formData.arbitrumWallet} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>BTC Wallet (optional)</Form.Label>
                              <Form.Control type="text" placeholder="BTC Wallet" name="btcWallet" value={formData.btcWallet} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>ETH Wallet (optional)</Form.Label>
                              <Form.Control type="text" placeholder="ETH Wallet" name="ethWallet" value={formData.ethWallet} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>SOL Wallet (optional)</Form.Label>
                              <Form.Control type="text" placeholder="SOL Wallet" name="solWallet" value={formData.solWallet} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>USDT Wallet (optional)</Form.Label>
                              <Form.Control type="text" placeholder="USDT Wallet" name="usdtWallet" value={formData.usdtWallet} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>USDC Wallet (optional)</Form.Label>
                              <Form.Control type="text" placeholder="USDC Wallet" name="usdcWallet" value={formData.usdcWallet} onChange={handleChange} />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="dark" type="submit" className="sign-up-btn w-100">
                          Sign Up
                        </Button>
                      </Form>

                      <div className="d-flex flex-row mt-2 mb-2 justify-content-center">
                        <Button variant="link" className="text-white">
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button variant="dark" href="/auth/twitter" className="login-btn w-100 mt-2">
                          Sign Up with Twitter
                        </Button>
                      </div>

                      <div>
                        <p className="disclaimer">* Disclaimer: Please import optional wallet addresses only if you do not wish to use the bridge. This allows us to efficiently track transactions and ensure that everyone receives the correct amount of tokens. * Thank you for your cooperation!</p>
                        <p className="mb-0 center-text">Already have an account? <a href="#!" className="text-white-50 fw-bold" onClick={toggleSignUp}>Log In</a></p>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <button className="toggle-form-btn" onClick={toggleFormVisibility}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </Container>
    </div>
  );
}

export default LoginPage;
