const login = (username, password) => {
    return new Promise((resolve, reject) => {
        let requestConfig = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=utf8'
            }
        }
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify({username: username, password: password})
        })
        fetch("http://localhost:3000/doLogin", requestConfig)
          .then(function(response){
            console.log(response)
            return response.json()
          }).then(function(res){
            console.log(res)
            resolve(res);
        })
     });
};

export {login};