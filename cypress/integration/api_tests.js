describe('Testing API Endpoints', () => {

    it('Test registration endpoints', () => {
        //Get credentials from Single User endpoint
        cy.request('GET', 'https://reqres.in/api/users/2')
            .then((response) => {
                //Checking the success status code for the Single User endpoint
                expect(response.status).to.eq(200)
                // Saving the necessary credentials for registration
                const email = response.body.data.email
                cy.request({
                    method: 'POST',
                    url: 'https://reqres.in/api/register',
                    body: {
                        //Using the credential got from single user endpoint
                        "email": email,
                        "password": "pistol"
                    }
               }).then((response) => {
                    //Checking the success status code for the Registration endpoint
                    expect(response.status).to.eq(200)
                    //Checking that the endpoint returns the correct token. User got from Single User enpoint has ID = 2, what brings the token QpwL5tke4Pnpja7X2
                    expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X2')
               })
            })
    })

    it('Test Login endpoints',() => {
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response) => {
            //Checking the success status code for the Single User endpoint
            expect(response.status).to.eq(200)
            // Saving the necessary credentials for login
            const email = response.body.data.email
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: {
                    //Using the credential got from single user endpoint
                    "email": email,
                    "password": "cityslicka"
                }
           }).then((response) => {
                //Checking the success status code for the Login endpoint
                expect(response.status).to.eq(200)
                //Checking that the endpoint returns the correct token. User got from Single User enpoint has ID = 2, what brings the token QpwL5tke4Pnpja7X2
                expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X2')
           })
        })

    })
})