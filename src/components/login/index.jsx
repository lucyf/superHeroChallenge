import { Form, Button} from "react-bootstrap";
import '../login/login.css';
import { useFormik } from "formik";
import axios from "axios";
import { useHistory} from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../../context/loginContext";


const LoginComponent = () =>{
    const {handleToken} =useContext(loginContext)
    const history = useHistory()

    
    const validate = (values) => {
        const errors = {};
          
        if (!values.email) {
          errors.email = 'Introduzca su e-mail';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Dirección de e-mail invalida. Vuelva a intentar';
        }
        if (!values.password) {
            errors.password = 'Introduzca contraseña';
          } else if (values.password.length !== 5) {
            errors.password = 'La contraseña debe ser de 5 digitos';
          }
        return errors;
      };
      
      const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validate,
        onSubmit: (values) => {
            const data = {
                email:values.email,
                password: values.password
            }
            const url = 'http://challenge-react.alkemy.org/'
            axios.post(url,data).then(function(result){
              
                const tokenData = JSON.stringify(result.data.token)
                if(tokenData.length !== 0){
                  handleToken(tokenData)  
                  history.push('/superheroes') 
                }else{
                  alert('No has iniciado sesión!')
                }
             }).catch(()=>{
               alert('Los datos ingresados son incorrectos, intentalo nuevamente!')
               console.log()
             })        
        },
      });

    return(
        <>
        <div className="background">
        <div className="wrapper">
        <Form className="inside" onSubmit={formik.handleSubmit}>
            <h4 className="p-3 text-center">Iniciar Sesión</h4>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>*Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color:"red"}}>{formik.errors.email}</div>
                    ) : null}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>*Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{color:"red"}}>{formik.errors.password}</div>
                    ) : null}               

            </Form.Group>
            <div>
              <Button variant="primary" type="submit">Log In</Button>
            </div>
        </Form>
        </div>
        </div>
        

        </>
    )
}
export default LoginComponent;