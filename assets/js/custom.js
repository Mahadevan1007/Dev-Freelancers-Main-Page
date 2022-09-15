

$(document).ready(function () {
    
    $('#submit-form').validate({ // initialize the plugin
        rules: {
            inputemail: {
                required: true,
                email: true
            },
            inputname: {
                required: true,
                minlength: 5
            },
            inputphone: {
                required: true,
                minlength: 10,
                number: true,
            },
            inputcompany: {
                required: true,
                minlength: 5
            },
            inputsubject: {
                required: true,
                minlength: 10
            }
        }
    });
    
    
    
});

