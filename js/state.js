$('document').ready(function() {

    const API = 'http://78.24.223.31:8080/api';

    const rootReducer = (state = {}, actions) =>{
        switch (actions.type) {
          case 'ADD_TOKEN':
               return Object.assign({}, state, {token: actions.payload})
          default: 
            return state
        }  
    }

    //actions

    const addToken = (token) => {
        return {
            type: 'ADD_TOKEN',
            payload: token,
        }
    }

    const store = Redux.createStore(rootReducer);

    store.subscribe(() => {
      console.log(store.getState())
    });

    console.log(localStorage.getItem('state'));
    
    //lk
    if(window.location.href == 'file:///C:/Users/user/Desktop/Elec/components/lk.html') {
        
    }

    //login
    $('#log-form').on('submit', function(e) {
        console.log($(this))
        e.preventDefault();
        let username = $('#log-form-uname').val();
        let password = $('#log-form-pass').val();
        console.log(username.split('@')[0], password)
        fetch(`${API}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: username.split('@')[0], 
                password: password,
            })
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data);
          store.dispatch(addToken(data.token));
          localStorage.setItem('state', JSON.stringify(store.getState()));
          if(data.success) {
            window.location = 'lk.html';
          } else {
            alert('Неверные данные'); 
          }
        //   
        })
    })

    //Regestration
    $('#reg-form').on('submit', function(e) {
        alert(1)
        console.log($(this))
        e.preventDefault();
        let email = $('#reg__login').val();
        let password = $('#reg__password').val();
        let password2 = $('#reg__password2').val();
        let fname = $('#reg__fname').val();
        let lname = $('#reg__lname').val();
        login = email.split('@')[0];
        alert(login)
        fetch(`${API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: login, 
                password: password,
                confirm_password: password2,
                email: email,
                first_name: fname,
                last_name: lname,
            })
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            alert(data.full_messages[0]);
        })
        
    })
})