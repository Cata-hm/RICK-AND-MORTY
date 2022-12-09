import { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validate";

export default function Form (props) {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validate(({
                ...userData,
                [name]: value
            }))
        )
    }

    const handleSubmit = () => {
        props.login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Username:</label>
                    <input
                        name ="username"
                        type="text"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    <p>
                        {errors.username ? errors.username: null}
                    </p>
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        name ="password"
                        type="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    <p>
                        {errors.password ? errors.password: null}
                    </p>
                </div>

                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}