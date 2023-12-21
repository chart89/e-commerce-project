import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { API_URL } from '../../../config';
import Alert from 'react-bootstrap/Alert';
import { Spinner } from 'react-bootstrap';
import styles from './Register.module.scss'

const Register = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rptPassword, setRptPassword] = useState('')
    const [status, setStatus] = useState(null) // null, 'loading', 'success', 'serverError', 'clientError', 'loginError'

  console.log(login, password, rptPassword)
    const handleSubmit = e => {
        e.preventDefault();


        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: login,
              password: password,
              passwordRepeat: rptPassword,
            }),
        };

        setStatus('loading');
        fetch(API_URL + '/auth/register', options)
            .then(res => {
                if (res.status === 201) {
                    setStatus('success');
                } else if (res.status === 400) {
                    setStatus('clientError');
                } else if (res.status === 409) {
                    setStatus('loginError');
                } else {
                    setStatus('serverError');
                }
            })
            .catch(err => {
                setStatus('serverError');
            })
    };

    return (
    <div className={styles.registerDiv}>
    <Form className="col-12 col-sm-3 mx-auto my-5" onSubmit={handleSubmit}>

        <h1 className="my-4">Register</h1>

    {status === "success" && (
    <Alert variant="success">
      <Alert.Heading>Success</Alert.Heading>
      <p>
        You have been successfully registered! You can now log in...
      </p>
    </Alert>
    )}

    {status === "serverError" && (
    <Alert variant="danger">
      <Alert.Heading>Something went wrong...</Alert.Heading>
      <p>
        Unexpected error... Try again!
      </p>
    </Alert>
    )}

    {status === "clientError" && (
    <Alert variant="danger">
      <Alert.Heading>No enough data</Alert.Heading>
      <p>
        You have to fill all the fields!
      </p>
    </Alert>
    )}

    {status === "loginError" && (
    <Alert variant="warning">
      <Alert.Heading>Login already is use</Alert.Heading>
      <p>
        You have to use other login!
      </p>
    </Alert>
    )}

    {status === "loading" && (
    <Spinner animation="border" role="status" className="block mx-auto">
        <span className="visually-hidden">Loanding...</span>
    </Spinner>
    )}

      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control type="email" value = {login} onChange={e => setLogin(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value = {password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control type="password" value = {rptPassword} onChange={e => setRptPassword(e.target.value)} placeholder="Repeat password" />
      </Form.Group>

      <Button variant="primary" type="submit">
            Submit
      </Button>
     </Form>
     </div>
    );
};

export default Register;