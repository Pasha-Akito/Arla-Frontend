import React, { useState } from "react";
import './Admin.css'
import { useMutation, gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
mutation CreateUsers($input: [UserCreateInput!]!) {
  createUsers(input: $input) {
    users {
      uuid
      email
      name
      image
    }
  }
}
`;


function Admin() {

    const [formState, setFormState] = useState({
        name: '',
        image: '',
        email: ''
    });

    const [admin] = useMutation(CREATE_USER_MUTATION, {
        variables: {
            input: {
                name: formState.name,
                image: formState.image,
                email: formState.email
            }
        }
    });


    return (
        <div className='admin'>
            <div className='admin__user'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    admin();
                }}>
                    <input
                        value={formState.name}
                        onChange={(e) => setFormState({
                            ...formState,
                            name: e.target.value
                        })
                        }
                        placeholder="Full name"
                        type="text"
                    />
                    <input
                        value={formState.image}
                        onChange={(e) => setFormState({
                            ...formState,
                            image: e.target.value
                        })
                        }
                        placeholder="Image string"
                        type="text"
                    />
                    <input
                        value={formState.email}
                        onChange={(e) => setFormState({
                            ...formState,
                            email: e.target.value
                        })
                        }
                        placeholder="Email"
                        type="text"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>


        </div>
    )
};

export default Admin;